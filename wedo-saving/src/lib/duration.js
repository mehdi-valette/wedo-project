
// return a number of minutes into hours and minutes
export function minuteToHour(paramMinute) {
  const hour = Math.floor(paramMinute / 60);
  const minute = paramMinute % 60;

  return `${hour > 0 ? hour + 'h' : ''}${('00' + minute).slice(-2)}mn`
}