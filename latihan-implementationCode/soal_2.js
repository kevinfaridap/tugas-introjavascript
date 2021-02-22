function reverseWords (teks) {
    const kalimat = teks.split(" ");
    hasil = "";
  
    for (x = kalimat.length-1; x>=0; x--){
      hasil = hasil + " " + kalimat[x];
      
    } console.log(hasil);
  } 
  
  reverseWords("Saya belajar Javascript");