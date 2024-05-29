- Equality and Comparison in Typescript
  1. Nhắc lại về `==` và `===` bên javascript
  - So sánh khác kiểu dữ liệu với `==`, thì sẽ được chuyển về `number` để so sánh
  - Với 3 `===` thì sẽ sữ nguyên giá trị để so sánh
  - Ví dụ:
    - Với `==`: `2 == '2'` -> `true` (Bởi vì `'2'` khi so sánh nó sẽ chuyển qua kiểu dữ liệu number và lúc này 2 so sánh với `2` và kết quả trả về là `true`) và tương tự `false == 0` sẽ cho ra kết quả là `true`
    - Với `===`: `2 === '2'` -> `false`
  2. So sánh bên typescript:
  - Thì dùng `==` hay `===` thì typescript sẽ vẫn báo lỗi nếu ta so sánh khác kiểu dữ liệu.
  3. So sánh object
  - object, array và function là tham chiếu
  - Khi so sánh 2 tham chiếu, thì địa chỉ của tham chiếu được so sánh chứ không phải là giá trị thật sự mà tham chiếu có.
  4. `Null` và `Underfined`
  - `Null` và `underfined` khi so sánh với `==` thì sẽ cho ra kết quả là `true`
  - `Null` >= `0` -> `true`
  - `Null` == `0` -> `false`
