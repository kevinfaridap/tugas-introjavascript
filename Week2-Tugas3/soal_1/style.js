// Buat dan Jelaskan 10 method built-in Javascript beserta contoh penggunaannya.

// 1. charAt() Method
// Merupakan method yang digunakan untuk mengembalikan karakter dari indeks yang ditentukan.
const nama = "Kevin Farid Alpharisy";
console.log (
    "Karakter indeks 0 = " + nama.charAt(0) + "\n" +
    "Karakter indeks 1 = " + nama.charAt(1) + "\n" +
    "Karakter indeks 2 = " + nama.charAt(2)
    );

// 2. Length method
// Merupakan method yang digunakan untuk mengembalikan jumlah karakter/jumlah huruf(termasuk spasi).

const method2 = "Contoh method 2";
console.log(method2.length);

// 3. Split method
//  Merupakan method yang dapat digunakan untuk mengubah sebuah kalimat(string) menjadi array
const method3 = "Ini contoh method 3";
const method_3 = method3.split(" ")
console.log (method_3);

// 4. Concat method
// digunakan untuk mengabungkan dua buah string.
const method4 = "ini contoh ";
const method_4 = "nomor empat";
const hasil4 = method4.concat(method_4);

console.log(hasil4);

// 5. Repeat method
// Untuk mengcopy string sesuai jumlah yang ditentukan.
const method5 = "Ini method 5 ";
console.log(method5.repeat(3));

// 6. trim method
// untuk menghapus spasi kosong dibagian awal dan akhir sebuah string
const method6 = " Ini contoh method 6";
console.log(method6.trim());

// 7. toLowerCase method
// mengubah semua huruf menjadi kecil pada sebuah string
const method7 = "Ini Contoh Method Tujuh";
console.log(method7.toLocaleLowerCase());

// 8. toUpperCase  method
// untuk mengubah semua huruf menjadi huruf kapital
const method8 = "ini contoh method delapan";
console.log(method8.toLocaleUpperCase());

// 9. date method
// Untuk mengembalikan tanggal dan waktu pada hari ini
const method9 = Date();
console.log(method9);

// 10. round method
// digunakan untuk pembulatan angkac
const method10 = Math.round(0.5);
const method10_2 = Math.round(10.2);
const method10_3 = Math.round(11.6);

console.log(method10);
console.log(method10_2);
console.log(method10_3);