const getmonth = (callback) => {
    setTimeout(()=>{
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Desember'];
        if(!error){
            // callback(null ,month)
            callback(month)
        } else {
            callback(new Error('Sorry data not found', []))
        }
    }, 4000)
}

function print (month){
    console.log(month);
}
getmonth(print)