export function convertStringToMiliseconds(dateStr) {
  if (!dateStr) return null;
  const date = dateStr.split('-');
  const year = date[0];
  const month = date[1];
  const day = date[2];

  const newDate = new Date(year, month, day);

  return Date.parse(newDate);
}
