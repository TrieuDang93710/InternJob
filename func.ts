
// Default function return type

function sayHello() {
  console.log('Hi Easy Frontend');
}
// ts: function sayHello(): void. (ts sẽ tự hiểu kiểu dữ liệu trả về khi hàm ta k định nghĩa nó trả về gì cả)

function sum(a: number, b: number) {
  return a + b;
}
// ts: function sum(a: number, b: number): number. (ts sẽ tự hiểu kiểu trả về dựa trên kiểu dữ liệu mà ta định nghĩa)

// Explicit return type
// Nếu trường hoepj bạn muốn hàm trả về kiểu dữ liệu mà bạn mong muốn nó trả về thì bạn định nghĩa hàm như sau
function sum1(a: number, b: number): number {
  return a + b;
}
// ts: function sum(a: number, b: number): number. (Kiểu dữ liệu trả về là number mà ta đã định nghĩa ở hàm)
// Nếu trường hợp mà ta đã định nghĩa kiểu trả về rồi mà trong code ta cho nó trả về k giống kiểu dữ liệu đã định nghĩa thì nó sẽ báo lỗi

// function sum(a: number, b: number): number {
//   return a + b.toString();
//   }
// ts error: Type 'string' is not assignable to type 'number'

// Optional and default parameter:

// optional parameter
// ts sẽ hiểu là
// Hàm sẽ nhận tham số có có kiểu dữ liệu là number[] mà ta định nghĩa hoặc là underfined
function getLength1(numberList?: number[]) {
  return Array.isArray(numberList) ? numberList.length : 0;
}
// default parameter
// ts hiểu là
// Ta gán thêm bằng [], thì nếu ta k truền tham số nào cả thì giá trị mặc định nó sẽ là một []
function getLength2(numberList: number[] = []) {
  return Array.isArray(numberList) ? numberList.length : 0;
}
// ts error: Parameter cannot have question mark and initializer.ts(1015)
// function getLength3(numberList?: number[] = []) {
//   return Array.isArray(numberList) ? numberList.length : 0;
// }

// Other type: void and never

// function noop(): void
function noop1() {
  return;
}
// function noop(): void
function noop2() {
}
// Kiểu dữ liệu trả về là không có gì cả hay là void

// Ta định nghĩa một type assertion với hai kiểu dữ liệu khác nhau thì type assertion nó là kiểu dữ liệu never
type NewType = number & string; // never

function fn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}

// Destructuring parameter

// function createStudent(id: number, name: string, age: number) {
//   console.log(id, name, age)
// }
// createStudent(1, 'Bob', 18);

function createStudent(student: { id: number, name: string, age: number }) {
  const { id, name, age } = student;
  console.log(id, name, age)
}
createStudent({
  id: 1,
  name: 'Bob',
  age: 18,
});

// interface Student {
//   id: number;
//   name: string;
//   age: number;
// }
// function createStudent({ id, name, age }: Student) {
//   console.log(id, name, age)
// }
// createStudent({
//   id: 1,
//   name: 'Bob',
//   age: 18,
// } as Student);