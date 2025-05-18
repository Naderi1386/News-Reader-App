export function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
export function timeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  let diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 5) return "just now";

  const units: { [key: string]: number } = {
    year: 60 * 60 * 24 * 365,
    month: 60 * 60 * 24 * 30,
    day: 60 * 60 * 24,
    hour: 60 * 60,
    second: 1,
  };

  const parts: string[] = [];

  if (diff >= units.year) {
    // سال + ماه
    const years = Math.floor(diff / units.year);
    diff -= years * units.year;
    const months = Math.floor(diff / units.month);
    parts.push(years === 1 ? "1 year" : `${years} years`);
    if (months > 0) parts.push(months === 1 ? "1 month" : `${months} months`);
  } else if (diff >= units.month) {
    // ماه + روز
    const months = Math.floor(diff / units.month);
    diff -= months * units.month;
    const days = Math.floor(diff / units.day);
    parts.push(months === 1 ? "1 month" : `${months} months`);
    if (days > 0) parts.push(days === 1 ? "1 day" : `${days} days`);
  } else if (diff >= units.day) {
    const days = Math.floor(diff / units.day);
    diff -= days * units.day;
    const hours = Math.floor(diff / units.hour);
    parts.push(days === 1 ? "1 day" : `${days} days`);
    if (hours > 0) parts.push(hours === 1 ? "1 hour" : `${hours} hours`);
  } else if (diff >= units.hour) {
    const hours = Math.floor(diff / units.hour);
    diff -= hours * units.hour;
    parts.push(hours === 1 ? "1 hour" : `${hours} hours`);
  } else {
    parts.push(diff === 1 ? "1 second" : ` ${diff} seconds`);
  }

  return parts.join(" ") + " ago";
}
