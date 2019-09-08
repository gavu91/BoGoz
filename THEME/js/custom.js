const apiUrl = 'http://www.bygoz.com/public/api/';

$.get(apiUrl + 'category_list').then((data)=>{
    console.log(data);
});

$(".aLogo").click(function (e) {
    e.preventDefault();
    
    window.location.href = "main.html";
});

$("#mLogin").click(function (e) {
    e.preventDefault();

    window.location.href = "login.html";
});

$("#aLogin").click(function (e) {
    e.preventDefault();

    window.location.href = "login.html";
});