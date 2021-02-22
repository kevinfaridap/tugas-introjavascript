// =======================No.1===============
// Penjumlahan
const addition = (num1, num2) =>{
    return new Promise((resolve, reject)=>{
        
        if(typeof (num1) != 'number' || typeof (num2) != 'number' ||
        num1=== "" || num2 === ""){
            return reject(new Error("inputan salah"))
        }
         else {
            let = ''
            setTimeout(()=>{
                let result = num1 + num2
                resolve((num1 + ' + ' + num2 + ' = '+result));

            }, 3000)
        
        }
    })
}

//===========MENGUNAKAN THEN CATCH==========
addition(20,4)
.then((res)=>{
    console.log(res)

})
.catch((err)=>{
    console.log(err.message);
})

// =================TRY CATCH=======
// async function system (){
//     try{
//         const lastResult = await addition(20,40)
//         console.log(lastResult);
//     } catch(err){
//         console.log(err);
//     }
// }
// system()

// ======================= No.2===================
// Pengurangan
// const subtraction = (num1, num2) =>{
//     return new Promise((resolve, reject)=>{
        
//         if(typeof (num1) != 'number' || typeof (num2) != 'number' ||
//         num1=== '' || num2 === ''){
//             return reject(new Error("inputan salah"))
//         }
//          else {
//             let = ''
//             setTimeout(()=>{
//                 let result = num1 - num2
//                 resolve((num1 + ' - ' + num2 + ' = '+result));

//             }, 3000)
        
//         }
//     })
// }

// subtraction(20,4)
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err.message);
// }) 

// async function system (){
//     try{
//         const lastResult = await subtraction(20,40)
//         console.log(lastResult);
//     } catch(err){
//         console.log(err);
//     }
// }
// system()





// //======================No.3=======================//
// const getData = (methodGET, URL) =>{

//     return new Promise((resolve, reject) => {
//         const ajax = new XMLHttpRequest();
//         ajax.open(methodGET, URL)
//         ajax.send()
        
//         ajax.onreadystatechange = function(){
//             if(ajax.status ===200){ 
//                 const result = JSON.parse(ajax.responseText);
//                resolve(result)
//             } else {
//                reject(new Error('Inputan salah'))
//             }
  
//         }
//     })
// }


// // console.log("1");
// // console.log("2");
// // console.log("3");

// // ========Menggunakan then catch
// getDataAjax('GET', 'https://jsonplaceholder.typicode.com/comments') 
// .then((result)=>{
//     result.map((item)=>{
//         console.log( "Email : " + item.email + "\n" + "Comment :" + item.body);
//     })
// })
// .catch((err)=>{
//     console.log(err.message);
// })

// // console.log("5");
// // console.log("6");
// // console.log("7");



// // Untuk error menggunakan asyn/await
// // async function prosess (){
// // try{
// //     const akhir = await getDataAjax('GET', 'https://jsonplaceholder.typicode.com/comments')
// //     akhir.map((item)=>{
// //         // console.log("1");
// //         // console.log("2");
// //         // console.log("3");
// //         console.log( "Email : " + item.email + "\n" + "Comment :" + item.body);
// //         // console.log("5");
// //         // console.log("6");
// //         // console.log("7");
// //     })
// // } catch(err){
// //     console.log(err);
// // }
    
// // }

// // console.log("1");
// // console.log("2");
// // console.log("3");
// // prosess()
// // console.log("5");
// // console.log("6");
// // console.log("7");


// ===============No.4============
