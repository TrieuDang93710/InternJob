
//1. Number enum

enum Status1 {
  PENDING, // 0
  IN_PROGRESS, // 1
  DONE, // 2
  CANCELLED, // 3
}
// enum sẽ tự hiểu các giá trị của các phần tử enum và bắt đầu với enum.PENDING là 0, và quy tắc những cái enum sau có số là các số của enum trước cộng cho 1

// enum Status {
//   PENDING = 3, // 3
//   IN_PROGRESS, // 4
//   DONE, // 5
//   CANCELLED, // 6
// }
// Hoặc nếu ta không muốn nó bắt đầu bằng số 0 thì ta có thể set giá trị enum đầu là số bất kỳ và enum sau có giá trị cộng 1 vào giá trị enum trước
//
// Hoặc chúng ta cũng set các giá trị của enum như bên dưới.
// enum Status {
//   PENDING = 3,
//   IN_PROGRESS = 5,
//   DONE = 8,
//   CANCELLED = 10,
// }

//String enum

enum MediaTypes {
  JSON = "application/json",
  XML = "application/xml",
}
fetch("https://example.com/api/endpoint", {
  headers: {
    Accept: MediaTypes.JSON,
  },
}).then(response => {
  // ...
});