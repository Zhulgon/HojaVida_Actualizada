from __future__ import annotations

import json
from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
from scipy.stats import chi2


ROOT = Path(__file__).resolve().parents[2]
ASSET_PATH = ROOT / "assets" / "projects" / "cojinetes-statistics-summary.png"
RESULTS_PATH = Path(__file__).resolve().parent / "results.json"


GROUPED_DATA = [
    {"class_id": 1, "lower": 5.043, "upper": 5.052, "midpoint": 5.0475, "frequency": 4},
    {"class_id": 2, "lower": 5.052, "upper": 5.061, "midpoint": 5.0565, "frequency": 12},
    {"class_id": 3, "lower": 5.061, "upper": 5.070, "midpoint": 5.0655, "frequency": 11},
    {"class_id": 4, "lower": 5.070, "upper": 5.079, "midpoint": 5.0745, "frequency": 16},
    {"class_id": 5, "lower": 5.079, "upper": 5.088, "midpoint": 5.0835, "frequency": 6},
    {"class_id": 6, "lower": 5.088, "upper": 5.097, "midpoint": 5.0925, "frequency": 5},
]

# Reported in the handwritten exercise for the confidence interval section.
REPORTED_SAMPLE_VARIANCE = 0.00015376
REPORTED_SAMPLE_STD = 0.0124


def grouped_mean(midpoints: np.ndarray, frequencies: np.ndarray) -> float:
    return float(np.sum(midpoints * frequencies) / np.sum(frequencies))


def grouped_percentile(k: float, grouped_data: list[dict], n: int, class_width: float) -> float:
    position = k * n / 100
    cumulative = 0

    for item in grouped_data:
        next_cumulative = cumulative + item["frequency"]
        if position <= next_cumulative:
            return float(
                item["lower"] + class_width * ((position - cumulative) / item["frequency"])
            )
        cumulative = next_cumulative

    return float(grouped_data[-1]["upper"])


def grouped_median(grouped_data: list[dict], n: int, class_width: float) -> float:
    position = n / 2
    cumulative = 0

    for item in grouped_data:
        next_cumulative = cumulative + item["frequency"]
        if position <= next_cumulative:
            return float(
                item["lower"] + class_width * ((position - cumulative) / item["frequency"])
            )
        cumulative = next_cumulative

    return float(grouped_data[-1]["upper"])


def grouped_mode(grouped_data: list[dict], class_width: float) -> float:
    frequencies = [item["frequency"] for item in grouped_data]
    modal_index = int(np.argmax(frequencies))
    modal_class = grouped_data[modal_index]
    prev_frequency = grouped_data[modal_index - 1]["frequency"] if modal_index > 0 else 0
    next_frequency = (
        grouped_data[modal_index + 1]["frequency"]
        if modal_index < len(grouped_data) - 1
        else 0
    )

    d1 = modal_class["frequency"] - prev_frequency
    d2 = modal_class["frequency"] - next_frequency

    return float(modal_class["lower"] + class_width * (d1 / (d1 + d2)))


def grouped_variance(midpoints: np.ndarray, frequencies: np.ndarray, mean: float) -> float:
    n = np.sum(frequencies)
    return float(np.sum(frequencies * ((midpoints - mean) ** 2)) / (n - 1))


def std_confidence_interval(sample_variance: float, n: int, confidence: float) -> tuple[float, float]:
    alpha = 1 - confidence
    degrees_freedom = n - 1
    lower = np.sqrt((degrees_freedom * sample_variance) / chi2.ppf(1 - alpha / 2, degrees_freedom))
    upper = np.sqrt((degrees_freedom * sample_variance) / chi2.ppf(alpha / 2, degrees_freedom))
    return float(lower), float(upper)


def build_results() -> dict:
    grouped = GROUPED_DATA
    frequencies = np.array([item["frequency"] for item in grouped], dtype=float)
    midpoints = np.array([item["midpoint"] for item in grouped], dtype=float)
    lowers = np.array([item["lower"] for item in grouped], dtype=float)
    uppers = np.array([item["upper"] for item in grouped], dtype=float)
    n = int(np.sum(frequencies))
    class_width = float(round(uppers[0] - lowers[0], 3))
    cumulative = np.cumsum(frequencies)
    relative = frequencies / n
    mean = grouped_mean(midpoints, frequencies)
    median = grouped_median(grouped, n, class_width)
    mode = grouped_mode(grouped, class_width)
    p10 = grouped_percentile(10, grouped, n, class_width)
    p25 = grouped_percentile(25, grouped, n, class_width)
    p75 = grouped_percentile(75, grouped, n, class_width)
    iqr = p75 - p25
    grouped_var = grouped_variance(midpoints, frequencies, mean)
    grouped_std = float(np.sqrt(grouped_var))
    coefficient_variation = grouped_std / mean
    ci_90 = std_confidence_interval(REPORTED_SAMPLE_VARIANCE, n, 0.90)
    ci_95 = std_confidence_interval(REPORTED_SAMPLE_VARIANCE, n, 0.95)

    return {
        "sample_size": n,
        "class_width": class_width,
        "intervals": [
            {
                "class_id": item["class_id"],
                "lower": item["lower"],
                "upper": item["upper"],
                "midpoint": item["midpoint"],
                "frequency": item["frequency"],
                "relative_frequency": float(relative[index]),
                "cumulative_frequency": int(cumulative[index]),
            }
            for index, item in enumerate(grouped)
        ],
        "mean_grouped": mean,
        "median_grouped": median,
        "mode_grouped": mode,
        "p10_grouped": p10,
        "p25_grouped": p25,
        "p75_grouped": p75,
        "iqr_grouped": iqr,
        "variance_grouped": grouped_var,
        "std_grouped": grouped_std,
        "coefficient_variation_grouped": coefficient_variation,
        "reported_sample_variance": REPORTED_SAMPLE_VARIANCE,
        "reported_sample_std": REPORTED_SAMPLE_STD,
        "std_ci_90": ci_90,
        "std_ci_95": ci_95,
    }


def render_summary(results: dict) -> None:
    intervals = results["intervals"]
    labels = [f'{item["lower"]:.3f}-{item["upper"]:.3f}' for item in intervals]
    frequencies = [item["frequency"] for item in intervals]
    cumulative_percent = [
        round(item["cumulative_frequency"] / results["sample_size"] * 100, 1) for item in intervals
    ]

    plt.style.use("seaborn-v0_8-whitegrid")
    fig = plt.figure(figsize=(15, 9), facecolor="#0f172a")
    grid = fig.add_gridspec(2, 2, hspace=0.28, wspace=0.18)

    ax1 = fig.add_subplot(grid[0, 0])
    ax2 = fig.add_subplot(grid[0, 1])
    ax3 = fig.add_subplot(grid[1, 0])
    ax4 = fig.add_subplot(grid[1, 1])

    fig.suptitle(
        "Caso aplicado: diametros de cojinetes esfericos",
        fontsize=24,
        color="#e2e8f0",
        fontweight="bold",
        y=0.98,
    )

    ax1.bar(labels, frequencies, color="#38bdf8", edgecolor="#0f172a", linewidth=1.5)
    ax1.set_title("Tabla de frecuencias agrupadas", fontsize=15, fontweight="bold")
    ax1.set_ylabel("Frecuencia")
    ax1.tick_params(axis="x", rotation=22)

    ax2.plot(labels, cumulative_percent, color="#34d399", linewidth=2.5, marker="o")
    ax2.fill_between(labels, cumulative_percent, color="#34d399", alpha=0.15)
    ax2.set_title("Frecuencia acumulada (%)", fontsize=15, fontweight="bold")
    ax2.set_ylim(0, 100)
    ax2.set_ylabel("Porcentaje acumulado")
    ax2.tick_params(axis="x", rotation=22)

    ax3.axis("off")
    metrics_text = "\n".join(
        [
            f'n = {results["sample_size"]}',
            f'Media agrupada = {results["mean_grouped"]:.4f} cm',
            f'Mediana agrupada = {results["median_grouped"]:.4f} cm',
            f'Moda agrupada = {results["mode_grouped"]:.4f} cm',
            f'P10 = {results["p10_grouped"]:.4f} cm',
            f'P25 = {results["p25_grouped"]:.4f} cm',
            f'P75 = {results["p75_grouped"]:.4f} cm',
            f'RIQ = {results["iqr_grouped"]:.4f} cm',
            f'S^2 agrupada = {results["variance_grouped"]:.6f}',
            f'S agrupada = {results["std_grouped"]:.4f} cm',
            f'CV agrupado = {results["coefficient_variation_grouped"] * 100:.3f}%',
        ]
    )
    ax3.text(
        0,
        1,
        metrics_text,
        va="top",
        ha="left",
        fontsize=14,
        color="#e2e8f0",
        family="monospace",
        bbox={"boxstyle": "round,pad=0.7", "facecolor": "#111827", "edgecolor": "#38bdf8"},
    )
    ax3.set_title("Metricas clave", fontsize=15, fontweight="bold", color="#e2e8f0", loc="left")

    ax4.axis("off")
    interval_text = "\n".join(
        [
            "Intervalos de confianza para sigma",
            f'Valor reportado en el ejercicio: s = {results["reported_sample_std"]:.4f} cm',
            f'IC 90%: [{results["std_ci_90"][0]:.4f}, {results["std_ci_90"][1]:.4f}] cm',
            f'IC 95%: [{results["std_ci_95"][0]:.4f}, {results["std_ci_95"][1]:.4f}] cm',
            "",
            "Formula usada:",
            "sqrt(((n-1) * s^2) / chi2_(1-a/2)) <= sigma <= sqrt(((n-1) * s^2) / chi2_(a/2))",
        ]
    )
    ax4.text(
        0,
        1,
        interval_text,
        va="top",
        ha="left",
        fontsize=14,
        color="#e2e8f0",
        family="monospace",
        bbox={"boxstyle": "round,pad=0.7", "facecolor": "#111827", "edgecolor": "#34d399"},
    )
    ax4.set_title("Estimacion de dispersion", fontsize=15, fontweight="bold", color="#e2e8f0", loc="left")

    for axis in [ax1, ax2]:
        axis.set_facecolor("#f8fafc")
        axis.spines["top"].set_visible(False)
        axis.spines["right"].set_visible(False)

    ASSET_PATH.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(ASSET_PATH, dpi=180, bbox_inches="tight", facecolor=fig.get_facecolor())
    plt.close(fig)


def main() -> None:
    results = build_results()
    RESULTS_PATH.parent.mkdir(parents=True, exist_ok=True)
    RESULTS_PATH.write_text(json.dumps(results, indent=2), encoding="utf-8")
    render_summary(results)
    print(f"Saved results to {RESULTS_PATH}")
    print(f"Saved summary image to {ASSET_PATH}")


if __name__ == "__main__":
    main()
