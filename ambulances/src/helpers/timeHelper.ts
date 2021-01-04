export const getDateFormat = (date: number): string =>
  date < 10 ? `0${date}` : `${date}`;

export const getTimeAndDate = (date: Date): string => {
  const month = getDateFormat(date.getMonth() + 1);
  const day = getDateFormat(date.getDate());
  const time = `${getDateFormat(date.getHours())}:${getDateFormat(
    date.getMinutes()
  )}`;
  return `${date.getFullYear()}-${month}-${day}T${time}`;
};
