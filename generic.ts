
// Generics
// các kiểu dữ liệu mà nằm trong dấu ngoặc nhọn thì gọi là generic
interface Student {
  id: number;
  name: string;
}
const numberList: Array<number> = [1, 2, 3]; // đây là mảng số nguyên
const wordList: Array<string> = ['easy', 'frontend']; // đây là mảng chuỗi
const studentList: Array<Student> = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
] // đây là mảng object

// Tổng quát
interface List<T> {
  length: number;
  [index: number]: T;
}
// Tùy vào tham số ta truyền vào thì nó sẽ ra một dữ liệu tương ứng
const numbList: List<number> = [1, 2, 3, 4]

interface Student {
  id: number;
  name: string;
}

const studentLis1: List<Student> = [
  { id: 1, name: 'easy' },
  { id: 2, name: 'frontend' },
]

// keyof operator

type StudentKeys = keyof Student
const keys: StudentKeys = "id"
//
// typeof operator
console.log(typeof 'A'); // 'string'
console.log(typeof 1); // 'number'
console.log(typeof true); // 'boolean'
console.log(typeof {}); // 'object'
console.log(typeof []); // 'object'
console.log(typeof function () { }); // 'function'
console.log(typeof window !== 'undefined'); // true on client, false on

// Mapped types

interface Student {
  id: number;
  name: string;
}
// Ta không dùng interface được mà dùng type vì: MappedType nó sẽ dùng theo kiểu union
type MappedTypes = {
  [Key in keyof Student]: boolean;
};
