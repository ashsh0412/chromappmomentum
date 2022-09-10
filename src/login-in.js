const nameValue =document.querySelector("#name");
const loginFomr = document.querySelector(".box");
const container = document.querySelector(".container");

function Getname(e){
    e.preventDefault();
    const value = nameValue.value;
    localStorage.setItem("username",value);
    container.classList.add("hidden");
    greeting.classList.remove("hidden");
    greeting.innerHTML = `반가워요 ${localStorage.getItem("username")}님! 좋은 하루 되세요`;
}

const username = localStorage.getItem("username");
if(username !== null){
    container.classList.add("hidden");
    greeting.classList.remove("hidden");
    greeting.innerHTML = `반가워요 ${localStorage.getItem("username")}님! 좋은 하루 되세요`;
}else{
    loginFomr.addEventListener("submit",Getname);
}


