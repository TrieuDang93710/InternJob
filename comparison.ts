
/**Bên javascript */

//2 == '2' /**true */
//false == 0 /**true */

//2 === '2' /**false */
//false === 0 /**false */

/**Bên typescript */

//2 == '2' /**false */
//2 === '2' /**false */
///////////////////////////////////

const studentA = { id: 1, namef: 'A' };
const studentB = studentA;

// studentA === studentB; // Kết quả là true
// studentA === {id: 1, namef: 'A'}; // Kết quả là sẽ báo lỗi
console.log(studentA === studentB);