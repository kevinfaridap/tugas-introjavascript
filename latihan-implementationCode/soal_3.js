const divideandsort = (number) =>{
    if(typeof (number)==="number"){
        let result = number.toString();

        let splitResult = result.split(0)
 
        let joinjoin = splitResult.join('')
        
        let a = joinjoin.split("")
        a.sort(function(a,b){
            return a-b;
        })
        let b = a.join('')
        
        // console.log(result);
        // console.log(splitResult);
        // console.log(joinjoin);
        // console.log(a);
        console.log(b);

    } else {
        console.log("Inputan Harus Angka!!");
    }
}

divideandsort(198023056405)


// ====== ALGORITMA ======
// 1. Mulai
// 2. Buatlah sebuah arrow function dengan nama divideandsort yang menerima parameter number
// 3. Lalu buatlah pengkondisian jika parameter yang dimasukkan adalah angka maka jalankan proses nya. Jika tidak, maka cetak "inputan harus angka!"
// 4. Jika pengkondisian bernilai true, buatlah sebuah variabel result yang menampung nilai dari parameter yang di ubah menjadi string. 
// 5. Setelah itu buat variabel splitResult yang menampung nilai yang telah diubah ke string dan displit(0). Maksudnya nilai dari result diubah menjadi array dan memisahkan nilainya dengan angka 0.
// 6. Kemudian buat variabel joinjoin yang menyimpan nilai dari variabel splitResult yang diberi method join, karena agar mengabungkan nilainya menjadi deret angka.
// 7. Lalu buat variabel a agar melakukan split atau mengubah nilai nya menjadi array per indeks agar dapat men sorting angkanya dengan method sort.
// 8. Jika variabel a sudah di split dan diberi method sort maka gabungkan setiap elemennya(method join) agar menjadi deretan angka sesuai output yang diminta.
// 9. Selesai
