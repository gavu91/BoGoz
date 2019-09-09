const apiUrl = 'http://www.bygoz.com/public/api/';

$(document).ready(function () {
    $('.lnkHome').click(function (e) {
        e.preventDefault();
        window.location.href = "main.html";
    });

    $('.lnkLibrary').click(function (e) {
        e.preventDefault();
        window.location.href = "download.html";
    });

    $('.lnkStore').click(function (e) {
        e.preventDefault();
        window.location.href = "store.html";
    });

    $('.lnkPurchase').click(function (e) {
        e.preventDefault();
        window.location.href = "download.html";
    });

    $(".lnkLogin").click(function (e) {
        e.preventDefault();
        window.location.href = "login.html";
    });
});