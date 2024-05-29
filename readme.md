1. statis type checking
   - Typescript giúp mình phát hiện ra lỗi ngay lúc code
   - Giúp tránh lỗi chính tả
   - Tiết kiệm thời gian gỡ lỗi(debug)
   - Khi phát hiện lỗi thì typescript sẽ báo cho ta biết bằng đường gạch đỏ(line)
   - Lỗi thường gặp:
     - const a = undefined a.length; => Object is possibly 'undefined'.
     - const a = '' a() => This expression is not callable. Type 'String' has no call signatures.
     - const a = {} a.map(x => x + 1) => Property 'map' does not exist on type '{}'
     - const value = Math.random() < 0.5 ? "a" : "b"if (value !== "a") {console.log("b")}else if(value === "b" =>This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.
2. Type for tooling
   - Ngoài việc thông báo lỗi cho mình lúc code
   - Typescript có thể giúp mình hạn chế lỗi bằng việc hỗ trợ auto completion / suggestions
3. tsc - typescript compiler
