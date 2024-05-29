
interface Student {
  id: number;
  name: string;
  gender: 'male' | 'female';
  age: number;
}

function findStudentById(studentList: Student[], studentId: number): Student | undefined {
  if (studentList.length === 0) return undefined
  return studentList.find((x) => x.id === studentId)
}

const studentList: Student[] = [
  { id: 1, name: 'Trieu', gender: 'male', age: 21 },
  { id: 2, name: 'Lan', gender: 'female', age: 20 },
]

const bob = findStudentById(studentList, 3)
// console.log(bob.name);//Lỗi xảy ra vì 

console.log(bob?.name);