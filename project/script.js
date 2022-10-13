function valid() {
    var name = document.getElementById("name").value;
    // console.log(name);
    var password = document.getElementById("password").value;
    //console.log(password);

    var reg_name = /^[a-zа-яё]+$/i;
    var reg_password = /^[a-zа-яё0-9]{5,100}/i;

    console.log(reg_name.test(name));
    if (reg_name.test(name) == false) {
        console.log("Ошибка в поле ФИО. Должны быть только буквы");
    }
    else if (reg_password.test(password) == false)
     console.log("Ошибка в поле пароль. Длина от 5 до 100");

}


document.querySelector(".button").addEventListener("click", valid);
