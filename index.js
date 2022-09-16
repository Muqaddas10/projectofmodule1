/*const enter=()=>{
    let username=document.querySelector("#username");
   
    console.log(username.value);
   alert("Welcome " + username.value);

}
*/


function result() {
var score;
    if (document.getElementById('opt1').checked && document.getElementById('opt5').checked &&  document.getElementById('opt6').checked)  
    {
     
        var score="3";
    }
   
    if (document.getElementById('opt1').checked && document.getElementById('opt5').checked )  
    {
     
       var score="2";
    }
    
 alert (score);
}



//import {getAuth} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";;//


  //  const auth = getAuth()
    const submit =()=> {
     
    
    let username = document.querySelector("#username")
    let username2 = document.querySelector("#username2")
    let select = document.querySelector("#select") 
    
    let phone = document.querySelector("#phone")
      let address = document.querySelector("#address")
       let email1 = document.querySelector("#un")
        let password1 = document.querySelector("#password")
      let password2= document.querySelector("#re")
    console.log(username.value);
    console.log(username2.value);
    console.log(select.value);
    console.log(phone.value);
    console.log(address.value);
    console.log(email1.value);
    console.log(password1.value);
    console.log(password2.value);
   }

   document.getElementById("button");
   addEventListener("click", submit);
