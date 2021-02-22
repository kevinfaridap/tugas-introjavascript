// let teks = "Ikan";
// let hasil = "";

// teks = teks.toLowerCase();
//  for (x = teks.length-1; x>=0; x--){
//    hasil = hasil+teks[x];
//  }
// // console.log(hasil);

// if (hasil===teks){
//   console.log(hasil + " = Palindrome")
// } else {
//   console.log(hasil + " =  bukan Palindrome")
// }

const palindromeDetection = (teks) =>{
    let hasil = "";
    
    teks = teks.toLowerCase();
    for (x = teks.length-1; x>=0; x--){
    hasil = hasil+teks[x];
    }

    if (hasil===teks){
        console.log(hasil + " = Palindrome")
      } else {
        console.log(hasil + " =  bukan Palindrome")
      }
}

palindromeDetection("Malam")