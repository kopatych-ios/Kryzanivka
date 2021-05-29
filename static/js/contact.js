const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var fname = document.getElementById("fname").value;
    var sname = document.getElementById("sname").value;
    var num = document.getElementById("num").value;
    var my_text = `Result is:%0A - Имя: ${fname} %0A - Фамилия: ${sname} %0A - Номер: ${num}`

    const token = "1859949810:AAGIGjzXhe2xltv2ibq17Zpb2AoqHyFWIUI";
    var chat_id = -1001488298896;
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}/`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    console.log("Message successfuly send ")
})