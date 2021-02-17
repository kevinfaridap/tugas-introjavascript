const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) =>{
    let text = ""
    if(nilaiAwal > nilaiAkhir){
        text = "Nilai akhir harus lebih besar dari nilai awal"
        console.log(text);
    } else if (dataArray.length < 5) {
        text = "Jumlah angka dalam dataArray minimal 5"
        console.log(text);

    }   else {
        const newData = dataArray.filter(function (a){
            return a > nilaiAwal && a < nilaiAkhir; 
        });
        // console.log(newData);

        newData.sort(function(a,b){
            return a-b;
        })
        console.log(newData);
   
    }
}
seleksiNilai(5,20,[2,25,4,14,17,30,8])