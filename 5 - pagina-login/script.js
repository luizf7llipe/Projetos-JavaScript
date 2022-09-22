var usuario = "lzog@gmail.com";
var password = "lz123";

function check_login(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if(usuario == email && password == senha){
        document.location.href = "login.html";
    }else{
        alert("Usuário ou senha incorretos")
        document.getElementById("forget").style.display = "flex";
    }

}