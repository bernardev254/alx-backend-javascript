export default function appendToEachArrayValue(array, appendString) {
  let Arr = [];	
  for (let elem of array) {
    elem = appendString + elem;
    Arr.push(elem);
  }

  return Arr;
}
