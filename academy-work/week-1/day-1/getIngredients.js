const vegetables = ['ginger', 'onions', 'lentils', 'carrot']
const fruits = ['apple', 'tomato', 'pineapple']
const dairy = ['ice cream', 'sour cream', 'yoghurt']
const curry = [ vegetables[0], vegetables[1], vegetables[2], fruits[1], dairy[2] ]
const fruitSalad = [ fruits[0], fruits[2], dairy[0] ]
const tomatoSoup = [ fruits[1], dairy[1], dairy[2] ]
// if you need different ingredients, 
// reassign some of the elements of the original arrays
console.log(curry) // [ ginger, onions, lentils, tomato, yogurt ]
console.log(fruitSalad)
console.log(tomatoSoup)