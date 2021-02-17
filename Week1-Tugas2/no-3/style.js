// let segitiga = 5;
// hasil = '';

// for (let i = segitiga; i >= 1; i--) {
//   for (let j = 1; j <=i; j++){
//     hasil += j;
//   }
//   hasil += "\n"; 
// }

// console.log(hasil);

let hasil = '';
let segitiga = 6;

if (isNaN(segitiga) ) {
    text = "Input harus angka";
    console.log(text);
  } else {
   for (let i = segitiga; i >= 1; i--) {
      for (let j = 1; j <=i; j++){
        hasil += j;
      }
      hasil += "\n"; 
    } 
  }
  console.log(hasil);