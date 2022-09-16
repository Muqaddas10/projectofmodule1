import {getAuth} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";;
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";;

const auth = getAuth()
const thankyou=()=>{
    let get=document.querySelector("#fname")
    let get2=document.querySelector("#lname")
    let get3=document.querySelector("#email")
    let get4=document.querySelector("#password")
    let get5=document.querySelector("#repassword")
    let get6=document.querySelector("#subject")
 
 console.log(get.value);
    console.log(get2.value);
    console.log(get3.value);
    console.log(get4.value);
    console.log(get5.value);
    console.log(get6.value);
    createUserWithEmailAndPassword(auth, get3.value, get4.value)
    .then(() =>{
        alert("New user is here!")
    })
    .catch(() => {
alert("Error!")
    }) 
}

 document.getElementById("thanks");
 addEventListener("click", thankyou);