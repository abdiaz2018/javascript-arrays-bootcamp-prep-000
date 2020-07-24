var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]
function addElementToBeginningOfArray(chocolateBars, Hersheys){
  return [Hersheys, ...chocolateBars];
}
function destructivelyAddElementToBeginningOfArray(chocolateBars, Hersheys){
  chocolateBars.unshift(Hersheys);
  return chocolateBars;
}
function addElementToEndOfArray(chocolateBars, Godiva){
  return [...chocolateBars, Godiva];
}
function destructivelyAddElementToEndOfArray(chocolateBars, Godiva){
  chocolateBars.push(Godiva);
  return chocolateBars;
}
