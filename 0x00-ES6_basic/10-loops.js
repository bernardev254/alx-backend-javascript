export default function appendToEachArrayValue(array, appendString) {
  const Arr = [];
  for (let elem of array) {
    elem = appendString + elem;
    Arr.push(elem);
  }

  return Arr;
}
