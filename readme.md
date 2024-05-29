1. Thực hành video 1.4
   - Tạo một dự án bằng lệnh: npm init
   - Cài thư viện ts-jest. link: https://kulshekhar.github.io/ts-jest/
     - chạy lệnh: npm install --save-dev jest typescript ts-jest @types/jest
     - chạy lệnh: npx ts-jest config:init
     - Tạo file tsconfig.json bằng lệnh: tsc --init
2. Thực hiện test
   - Khởi tạo một hàm và export hàm đấy để sử dụng cho việc test(file 04_main.ts)
   - Tạo file test(04_main.test.ts) để tiến hành test
     - Tạo một nhóm unit test case bằng hàm describe('', ()=>{}),
     - Sử dụng it trong jest unit test và sử dụng expect(isPositive(0)).toBe(false) để truyền hàm và đối số để test pass
