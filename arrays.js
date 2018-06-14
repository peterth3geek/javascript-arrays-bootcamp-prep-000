var chocolateBars = [
  'snickers'
  'hundred grand'
  'kitkat'
  'skittles'
]

function addElementToBeginningOfArray (chocolateBars, bar){
  var bar = '3 Musketeers'
  return [bar, ...chocolateBars]

}

function destructivelyAddElementToBeginningOfArray (chocolateBars, bar){
  var bar = 'Hersey'
  return chocolateBars[bar]

}

function addElementToEndOfArray (){
  var bar = 'Milky Way'
  return [...chocolateBars, bar]
}

function destructivelyAddElementToEndOfArray (chocolateBars, bar){
  var bar = 'Take 5'
  return chocolateBars[bar]
}

function accessElementInArray (array, index){
  return chocolateBars, 0
}

function destructivelyRemoveElementFromBeginningOfArray (a) {
  return chocolateBars.shift()
}

function removeElementFromBeginningOfArray (a) {
  return chocolateBars.slice(1)
}
