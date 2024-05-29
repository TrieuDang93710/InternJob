
// Alias

// Primitive type
type StudentName = string
type StudentAge = number
type IsTopStudent = boolean

// Object type
type Student = {
  readonly id: number;
  name: string;
  age?: number;
}

interface Student1 {
  readonly id: number; // Chỉ tạo được id lúc tạo, còn trường hợp còn lại chỉ đọc, mà không sửa được
  name: string;
  age?: number;
}

// Union type: thường dùng cho type
type Status = 'active' | 'inactive'
type ProductStatus = 0 | 1 | 2 | 3 | 4
// Giá trị của biến chỉ có thể là một trong các literal type mà chúng ta đã định nghĩa ra, chứ nó không gán cho một giá trị khác, cùng loại

// Khai báo kiểu union type cho object
interface Student2 {
  id: number | string;
  name: string;
  gender: 'male' | 'female';
  grade: 'A' | 'B' | 'C'
}

let x: number | string = 1 // works
x = 'A' // works

// x = false // Type 'boolean' is not assignable to type 'string | number'.

// Intersection type
interface BusinessPartner {
  name: string;
  credit: number;
}
interface Identity {
  id: number;
  name: string;
}
interface Contact {
  email: string;
  phone: string;
}

//type alias
type Employee = Identity & Contact;
type Customer = BusinessPartner & Contact;

// interface way
interface Employee1 extends Identity, Contact { }
interface Customer1 extends BusinessPartner, Contact { }

type Customer2 = BusinessPartner & Contact;
let c: Customer2 = {
  name: 'ABC Inc.',
  credit: 1000000,
  email: 'sales@abcinc.com',
  phone: '(408)-897-5735'
};
type Employee2 = Identity & BusinessPartner & Contact;
let e: Employee2 = {
  id: 100,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '(408)-897-5684',
  credit: 1000
};
//
//Add new props
// Ta có thể khai báo lại cho interface, với interface thì ta dễ dàng mở rộng kiểu dữ liệu, còn type thì ta k thây đổi được
interface Student3 {
  id: number;
  name: string;
}
// declaration merging
// works, no error
interface Student3 {
  age?: number;
}
const alice: Student3 = {
  id: 1,
  name: 'Alice',
}// Từ ví dụ trên ta có thể hiểu Student3 có các thuộc tính sau khi khai báo 2 lần: age?, id, name.

//type
type Student4 = {
  id: number;
  name: string;
}
// ts error: Duplicate identifier 'Student'.
type Studen4 = {
  age?: number;
}

// Cách đặt tên type vs interface:
// Ví dụ:
interface Product {
  id: string;
  title: string;
}
interface ProductProps {
  data: Product;
}
function Product({ data }: ProductProps) { }

// 