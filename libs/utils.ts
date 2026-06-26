/**
 * Format a value as U.S. currency (defaults to USD) with exactly two decimals.
 * Uses Intl.NumberFormat and falls back to a manual formatter on error.
 */
export function formatCurrency(
  value?: number | string | null,
  currency = "USD"
): string {
  // Normalize input to a number
  const parsed = typeof value === "string" ? parseFloat(value) : Number(value ?? 0);
  const amount = Number.isFinite(parsed) ? parsed : 0;

  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch (err) {
    // Fallback: manual en-US formatting with $ symbol and two decimals
    const sign = amount < 0 ? "-" : "";
    const abs = Math.abs(amount);
    const [intPart, decPart] = abs.toFixed(2).split(".");
    const intWithCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${sign}$${intWithCommas}.${decPart}`;
  }
}

export default formatCurrency;
