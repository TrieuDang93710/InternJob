Explicit types and Inferred types

1. Explicit type
   - Khai báo kiểu dữ liệu trong typescript thì sử dụng dấu hai chấm đằng sau tên biến
   - Đây là kiểu dữ liệu khai báo tường minh
   - Ví dụ: let count: number = 123 let nameF: String = 'ABC' let isActive: boolean = false let numList: number[] = [1,2,3]
2. Infered type
   - Typescript thông minh detect được kiểu dữ liệu tương ứng ngay cả mình không khai báo cụ thể kiểu dữ liệu
   - Trông một số kiểu dữ liệu đơn giản khi ta gán cho biến thì typescript sẽ tự động hiểu kiểu dữ liệu đấy là gì, còn khi trong trường hợp các kiểu dữ liệu phức tạp thì ta cần khai báo kiểu dữ liệu phù hợp cho biến.
   - Ví dụ: let count = 123 let nameF = 'ABC' let isActive = false let numList = [1,2,3] => Khai báo như vậy typescript cũng hiểu kiểu dữ liệu mà ta gán cho biến.
3. Eraised type
   - Sau khi compile từ file typescript sang file javascript, tất cả type annotation sẽ bị xóa
4. Downleveling
   - Tùy vào target mà code sau khi được compile ra javascript sẽ khác nhau ta sẽ đảm bảo target environment có thể hiểu được và thực thi được code ta viết bên typescript
