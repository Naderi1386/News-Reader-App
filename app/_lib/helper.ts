const units = [
  { name: "year", seconds: 60 * 60 * 24 * 365 },
  { name: "month", seconds: 60 * 60 * 24 * 30 },
  { name: "day", seconds: 60 * 60 * 24 },
  { name: "hour", seconds: 60 * 60 },
  { name: "minute", seconds: 60 },
  { name: "second", seconds: 1 },
];

const cache = new Map<string, string>();

export function capitalizeFirstLetter(val: string) {
  if (!val) return "";
  return val[0].toUpperCase() + val.slice(1);
}

export function timeAgo(dateString: string): string {
  if (cache.has(dateString)) {
    return cache.get(dateString)!;
  }

  const date = new Date(dateString);
  const now = new Date();
  let diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 5) {
    cache.set(dateString, "just now");
    return "just now";
  }

  const parts = [];

  for (const unit of units) {
    const amount = Math.floor(diff / unit.seconds);
    if (amount > 0) {
      parts.push(amount === 1 ? `1 ${unit.name}` : `${amount} ${unit.name}s`);
      diff -= amount * unit.seconds;
      if (parts.length === 2) break;
    }
  }

  const result = parts.join(" ") + " ago";
  cache.set(dateString, result);
  return result;
}
