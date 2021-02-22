const cariHariKerja = (day) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })


            if(cek){
                resolve(cek)
            } else if (typeof day === "number"){
                console.log("Parameter harus dalam string");
            } else if (day === ""){
                console.log("Masukkan nama hari !!");
            }            
            else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}

// console.log("1");
// console.log("2");
// console.log("3");
cariHariKerja("kamis")
.then((cek)=>{
    console.log("Ini hari " + cek);
})
.catch((err)=>{
    console.log(err.message);
})
// console.log("5");
// console.log("6");
// console.log("7");


// console.log("1");
// console.log("2");
// console.log("3");
async function prosess (){
    try{
        console.log("Proses 1");
        console.log("Proses 2");
        console.log("Proses 3");
        const result = await cariHariKerja("senin")
            console.log(result);
        console.log("Proses 4");
        console.log("Proses 5");
    } catch(err){
        console.log(err);
    }
}
prosess()

// console.log("5");
// console.log("6");
// console.log("7");
// console.log("8");