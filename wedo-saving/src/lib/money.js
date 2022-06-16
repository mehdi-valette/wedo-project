
export function moneyFormat(val) {
  const decimal = Math.round((val * 100)) % 100;
  let unit = String(Math.floor(val));

  for(let cursor = unit.length - 3; cursor > 0; cursor -= 3) {
    unit = unit.slice(0, cursor) + " " + unit.slice(cursor);
  }

  return `${unit}${decimal > 0 ? ('.' + decimal + '00').slice(0, 3) : '.-'}`
}