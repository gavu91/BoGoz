const apiUrl = 'http://www.bygoz.com/public/api/';
const webUrl = 'http://www.bygoz.com/';

$(document).ready(function () {
    $('.lnkHome').click(function (e) {
        e.preventDefault();
        window.location.href = "main.html";
    });

    $('.lnkStore').click(function (e) {
        e.preventDefault();
        window.location.href = "main.html";
    });

    $('.lnkLibrary').click(function (e) {
        e.preventDefault();
        window.location.href = "library.html";
    });

    $('.lnkPurchase').click(function (e) {
        e.preventDefault();
        window.location.href = "library.html";
    });

    $(".lnkLogin").click(function (e) {
        e.preventDefault();
        window.location.href = "login.html";
    });
});