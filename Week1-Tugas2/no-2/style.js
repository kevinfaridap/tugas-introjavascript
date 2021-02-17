const matematika = 20;
const bahasaIndonesia = 80;
const bahasaInggris = 80;
const ipa = 80;
let cetak = "";
let rata_rata = "";
let teks ="";

if (isNaN(matematika) || matematika < 0 || matematika > 100 || matematika==="" ||
    isNaN(bahasaIndonesia) || bahasaIndonesia < 0 || bahasaIndonesia > 100 || bahasaIndonesia==="" ||     
    isNaN(bahasaInggris) || bahasaInggris < 0 || bahasaInggris > 100 || bahasaInggris==="" ||
    isNaN(ipa) || ipa < 0 || ipa > 100 || ipa==="" 
    ) {
    text = "Nilai tidak valid";
    console.log(text);
  } else {
    text = "Berikut Nilai Anda :";
  
    rata_rata = (matematika + bahasaIndonesia + bahasaInggris + ipa)/4;

    let grade = "";

    if (rata_rata>=90 && rata_rata<=100) {
        grade = "A"; 
    } else if (rata_rata>= 80 && rata_rata< 90) { 
        grade = "B";
    } else if (rata_rata>= 70 && rata_rata< 80){
        grade = "C";
    } else if (rata_rata>= 60 && rata_rata< 70){
        grade= "D";
    } else if (rata_rata>= 0 && rata_rata< 60){
        grade= "E";
    } else {
        grade = "Nilai tidak valid";
    }

    console.log (text + "\n" + "Rata-Rata = " + rata_rata +"\n" + "Grade = " + grade);

}
