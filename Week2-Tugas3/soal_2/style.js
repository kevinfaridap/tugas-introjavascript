// 2. Buatlah program searching nama yang dapat dibatasi jumlah outputnya yang menerapkan
//    callback function dengan data sebagai berikut:
// const name = [
// ‘Abigail’, ‘Alexandra’, ‘Alison’,
// ‘Amanda’, ‘Angela’, ’Bella’,
// ‘Carol’, ‘Caroline’, ‘Carolyn’,
// ‘Deirdre’, ‘Diana’, ‘Elizabeth’,
// ‘Ella’, ‘Faith’, ‘Olivia’, ‘Penelope’]

// Contoh:
// searchName(“an”, 3, callback)

// Output: 
// [“Alexandra”,”Amanda”,”Angela”]


const names = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]

function print (cetak){
    console.log(cetak);
}

function searchData (parameter, parameter2, callback){
    // Membuat names menjadi lowercase
    let newData = names.map(function(a){
        return a.toLowerCase();
    })
    // Memfilter newData yang mengandung huruf tertentu(param)
    let cariName = newData.filter(newData => newData.includes(parameter));
    
    // Membatasi data yang dicari sesuai paramater 2
    const text = cariName.slice(0, parameter2);
    callback(text);
    // console.log(text);
}
// console.log(searchData("an", 2));
searchData("an", 3, print)