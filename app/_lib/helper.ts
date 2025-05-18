export function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  const units: { [key: string]: number } = {
    year: 60 * 60 * 24 * 365,
    month: 60 * 60 * 24 * 30,
    day: 60 * 60 * 24,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  };

  for (const [unit, secondsInUnit] of Object.entries(units)) {
    const amount = Math.floor(diff / secondsInUnit);
    if (amount >= 1) {
      return amount === 1 ? `1 ${unit} ago` : `${amount} ${unit}s ago`;
    }
  }

  return "just now";
}
