- Type System Overview

  1. Type system overview
     - Các kiểu dữ liệu thường gặp
       - Các kiểu bạn đã biết bên javascript
         - Primitive: `number`, `string`, `boolean`, `null`, `underfined`, `symbol`
         - Reference: `array`, `object`, `function`
       - Còn bên typescript, bạn sẽ gặp: `any`, `unknown`, `never`, `void`,...
     - Literal types
       - Chỉ định một giá trị cụ thể làm kiểu dữ liệu
       - Với `const`, khi `omit type annotation`, `literal` type sẽ được sử dụng. Vì `const` chỉ nhận được một giá trị, và không thể thay đổi được
     - Tương tự như object, array cũng có behavior tương tự
     - Type Assertion
  2. Type Alias vs Interface
     - Type Alias: Là đặt tên lại cho kiểu dữ liệu
       - Primitive type
     - Interface: Đặt tên cho một object type
     - Union type:
       - "A union type is a type formed from two or more other types, representing values that may be any one of those types" source
       - Tạm dịch kết hợp 2 hoặc nhiều kiểu dữ liệu lại với nhau để tạo ra một kiểu dữ liệu mới.
         - Cho phép giá trị có thể chấp nhận hoặc là kiểu dữ liệu này, hoặc là kiểu dữ liệu kia.
     - Intersection type:
     - Add new props:
       - Able to add new props to Interface, but not Type Alias
     - Cách đặt tên type vs interface: - Use PascalCase instead of camelCase. Use Student instead of student - Don't use prefix I. Use Student instead of IStudent
     - Nên dùng Interface hay Type:
  3. Ðiều cần lưu ý khi làm việc với function
     - Default function return type:
       - Base on return keyword, typescript can inference the return type.
     - Explicit return type:
     - Optional and default parameter:
       - Add question mark ? to tell typescript this is an optional parameter.
       - Parameter cannot have question mark and initializer.
     - Function Overload: - Tham khảo: https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads
     - Other type: void and never:
     - Destructuring parameter
  4. Tất tần tật về Enum trong typescript
     - What: Tập hợp các giá trị cùng nhóm.
     - Why: Dễ dàng quản lý và truy xuất.
     - When: Sử dụng cho data một chiều, định nghĩa enum --> rồi sử dụng.
