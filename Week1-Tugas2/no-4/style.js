let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org", 
  }
  
  const data2 ={
    ...data,
    name: 'Kevin Farid Alpharisy',
    username: 'kevinfaridap',
    email: "kevinfaridap@gmail.com",
    address: 
    {
    street: "Bakti Osis I No.02 RT.005 RW.002 Kel. Air Bang Kec.Curup Tengah Kab. Rejang Lebong Prov. Bengkulu",
    suite: "No. 02",
    city: "Curup, Bengkulu",
    zipcode: "39125",
    },
    phone: "+6289667306022",
    website: "belum-ada.org", 
  
  }
  
  console.log(data);
  console.log(data2);
  
  
  const {street, city} = data2.address
  
  console.log(city);
  console.log(street);