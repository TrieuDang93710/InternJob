

// const a = undefined
// a.length;

// const a = ''
// a()

// const a = {}
// a.map(x => x + 1)

// const value = Math.random() < 0.5 ? "a" : "b"

// if (value !== "a") {
//   console.log("b")
// }else if(value === "b"){

// }

// Code ví dụ nhắc code
function findEvenNumber(numberList: number[]) {
  if (numberList.length === 0) return undefined
  for (let first of numberList) {
    console.log(first)
  }
}

interface Student {
  id: String,
  name: String,
  gender: 'male' | 'female',
  age: number
}

const student: Student = {
  id: '1',
  name: 'ABC',
  gender: 'male',
  age: 11
}