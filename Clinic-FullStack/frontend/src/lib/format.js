function formatCurrency(amount, locale = "en-CA") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "CAD"
  }).format(amount);
}
function formatDate(date, locale = "en-CA") {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    day: "numeric"
  }).format(d);
}
function formatTime(date, locale = "en-CA") {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  }).format(d);
}
function formatDateTime(date, locale = "en-CA") {
  return `${formatDate(date, locale)} at ${formatTime(date, locale)}`;
}
export {
  formatCurrency,
  formatDate,
  formatDateTime,
  formatTime
};
