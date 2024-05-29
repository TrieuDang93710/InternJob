- Variables const and let

  1. When to use const

     - Dùng cho hằng số. `UPPER_CASE`
     - Dùng cho biến mà không có nhu cầu thay đổi giá trị. `camelCase`
     - Ví dụ: - `const url = 'https://api/v1/'` - `const width = 20` - `const namef = 'ABC'` - `const numList = []; numList.push(1)` --> Luôn ưu tiên dùng const, thay đổi sang let khi cần thiết

  2. When to use let

     - Dùng cho những biến có nhu cầu thay đổi bằng việc thực hiện phép gán. (re-asignment)
     - Ví dụ:

  3. Naming convention

     - Tên biến là hằng số(const) thì `UPPER_CASE`
     - Tên biến boolean thì `camelCase`
     - Tên biến số ít thì `camelCase`
     - Tên biến số nhiều thì `camelCase`
     - Tên hàm thì `camelCase`
