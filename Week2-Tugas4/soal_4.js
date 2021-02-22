// const url = 'https://jsonplaceholder.typicode.com/users';
// const result={
//     method: "GET"
// };

// fetch(url, result)
// // dengan arrow fuction
// // .then(data=>{return data.json()})
// // dengan function biasa
// .then(function(data){
//     return data.json()
// })
// .then(res=>{
//     res.map((item)=>{
//         console.log(item.name);
//     })
// })
// .catch(error=>console.log(error))




const fetchData = (url) =>{
    return new Promise((resolve, reject)=>{
        const getMethod= {
            method: "GET"
        };
    
        const result = fetch(url, getMethod);
        // console.log(result);
        resolve(result)
    })
    
}

fetchData('https://jsonplaceholder.typicode.com/users')
.then(function(data){
    return data.json()
})
.then(res=>{
    res.map((item)=>{
        console.log(item.name);
    })
})
.catch(error=>console.log(error))

