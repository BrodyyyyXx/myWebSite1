document.getElementById('main-form1').addEventListener("submit", checkForm);

function checkForm(event){
event.preventDefault();
var el = document.getElementById('main-form1');

var name = el.name.value;
var pass = el.pass.value;

console.log("Имя: " + name + " Пароль: " + pass);

var fail = "";

if(name == "" || pass == "")
fail = "Заполните все поля";
else if(name.length <= 1 || name.length > 50)
fail = "Введите корректное имя";
else if(pass.split("&").length > 1)
fail = "Некорректный пароль"

if(fail != ""){
document.getElementById('error').innerHTML = fail;

return false;
} else {
alert("Все данные верно заполнены");
return true
}
}
