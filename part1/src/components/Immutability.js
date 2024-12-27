const o = {
  a: {
    c: 5
  },
  b: 7
}
console.log(o);
const o2 = {
  ...o, //spred operator to copy items
  a: {
    ...o.a, //coping o.a
    c: 42 //seting o2.a (copied o.a) = set 42
  }
}
console.log(o2);

const arr = ['a', 'b', "", ""]
console.log(arr);

const arr2 = arr.concat('c') //create new array and push c
console.log(arr2);

const arr3 = arr.slice() //create new array
arr3.push('c')//now push c
console.log(arr3);