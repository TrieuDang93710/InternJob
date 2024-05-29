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
