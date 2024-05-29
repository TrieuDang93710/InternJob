- Strictness - Tìm hiểu về strict flag
  1. strict flag là gì?
     - Bật `strict = true` sẽ bậc tất cả các options của strict lên `true`
     - Mặc định các options liên quan đến strict sẽ là `false`, nhưng recommend sử dụng `true`
     - Config của từng options để ưu tiên cao hơn so với "strict". Tức `strict = true` mà `noImplicitAny = false` thì giá trị cuối cùng vẫn là `noImplicitAny = false`
  2. noImplicitAny
     - Khi typescript không thể xác định được kiểu dữ liệu của một biến nào đó, thì biến đó sẽ mang kiểu dữ liệu là `any`
     - Khi bậc lên `true` nó sẽ báo lỗi nếu trường hợp này xảy ra, ngược lại nêu là `false` thì nó sẽ bỏ qua lỗi này.
     - Ví dụ: `function isEmpty(numList) {return numList.length === 0;}` xảy ra lỗi, trường hợp này nó sẽ hiểu biến numList là any.Parameter 'numList' implicitly has an 'any' type. và cách fix là ta định nghĩa kiểu dữ liệu cho biến, `function isEmpty(numList: number[]) {return numList.length === 0;}`
  3. Option: sctrictNullCheck
     - Khi bật true thì nó báo lỗi khi `null/underfined` được sử dụng không đúng. Ví dụ như những hàm như `number`, `string` `array`,...chẳng hạn
     - Khi config `false` thì sẽ bỏ qua, nhưng có lỗi xảy ra trong lúc rumtime
  4. Option: alwaysStrict
     - Khi bậttruethì typescript sẽ luôn parse files ở chế độ strict mode và sẽ use strict ở đầu files javascript được tạo ra
  5. Other option
     - strictBindCallAply: Đảm bảo bind, call và apply đúng tham số(args)
     - strictFunctionTypes: đảm bảo đúng kiểu dữ liệu cho parameters của function, nhưng không áp dụng cho method
     - strictPropertyInitialization: đảm bảo thuộc tính của class phải được khởi tạo, Nó sẽ báo lỗi nếu phát hiện thuộc tính của class k được khởi tạo
     - noImplicitThis:
     - useUnknownInCatchVariables:
