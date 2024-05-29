
/**Các kiểu dữ liệu thường gặp */

let count: number = 0 // Kiểu dữ liệu số
count += 1

let fullName: string = 'ABC'
let isActive: boolean = false

let fullName1 = 'ABC'
let isActive1 = false

/**Literal types */
let num: 1;
let str: 'ABC';
let bool: true;
let stu: null;
// Khi ta định nghĩa kiểu dữ liệu cho biến như trường hợp trên, thì biến sẽ nhân giá trị chỉ và chỉ khi giá trị như ta định nghĩa, nếu gán cho nó một giá trị khác(cùng loại) thì nó sẽ lỗi.
// Ví dụ
// let num1: 1 = 2 /** Type '2' is not assignable to type '1' */

const fullName2 = 'ABC'
const isActive2 = false

const student = {
  id: 1,
  name: 'dang binh trieu'
}

/**
 * typescript sẽ hiểu là
 * const student = {
    id: number,
    name: string
  }
 */
// Vì: các thuộc tính(props) có thể thay đổi dược

// Trường hợp nếu muốn không thay đổi đượ thì ta thêm as const cho object

const student1 = {
  id: 1,
  name: 'dang binh trieu'
} as const

/**
 * typescript sẽ hiểu là
 * const student = {
    readonly id: number,
    readonly name: string
  }
 */
// Vì: các thuộc tính(props) không thể thay đổi dược

// Type Assertion

function getStatusName(state: 'active') {
  console.log(state);
}

// let s: string = 'ABC'
// getStatusName(s) // erroe: Argument of type 'string' is not assignable to parameter of type '"active"'

// Sửa:
// let s: 'active' = 'active'
// getStatusName(s) 

let s = 'active'
getStatusName(s as 'active') 