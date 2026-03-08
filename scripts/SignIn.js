const form = document.getElementById("signInForm");
const message =document.getElementById("message")

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const userName=document.getElementById("username").value;
    const password =document.getElementById("password").value;

    if(userName==="admin" && password==="admin123") {
        // window.location.href="index.html"
        window.location.href = "index.html?auth=true";
    }else {
        message.innerText="Invalid username or password";
        message.className = "text-red-600 text-center mt-4";
    }
})
