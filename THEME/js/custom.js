const webUrl = 'http://www.bygoz.com/';
const apiUrl = 'http://www.bygoz.com/public/api/';
const pdfUrl = 'http://bygoz.com/uploads/book/pdf/';
const imageUrl = 'http://www.bygoz.com/uploads/profile-images/author/';
const frontCoverUrl = 'http://bygoz.com/public/uploads/book/front_cover/';

$(document).ready(function() {
    $('.lnkHome').click(function(e) {
        e.preventDefault();
        window.location.href = "main.html";
    });

    $('.lnkLibrary').click(function(e) {
        e.preventDefault();
        window.location.href = "library.html";
    });

    $('.lnkStore').click(function(e) {
        e.preventDefault();
        window.location.href = "store.html";
    });

    $('.lnkPurchase').click(function(e) {
        e.preventDefault();
        window.location.href = "main.html";
    });

    $('.lnkCart').click(function(e) {
        e.preventDefault();
        window.location.href = "main.html";
    });

    $('.lnkAuthors').click(function(e) {
        e.preventDefault();
        window.location.href = "main.html";
    });

    $('.lnkFavouriteBooks').click(function(e) {
        e.preventDefault();
        window.location.href = "main.html";
    });

    $('.lnkTranscationHistory').click(function(e) {
        e.preventDefault();
        window.location.href = "main.html";
    });

    $('.lnkMyProfile').click(function(e) {
        e.preventDefault();
        window.location.href = "main.html";
    });

    $('.lnkChangePassword').click(function(e) {
        e.preventDefault();
        window.location.href = "main.html";
    });

    $('.lnkSellWithUs').click(function(e) {
        e.preventDefault();
        window.location.href = "main.html";
    });

    $('.lnkLogout').click(function(e) {
        e.preventDefault();
        window.location.href = "main.html";
    });

    $(".lnkLogin").click(function(e) {
        e.preventDefault();
        window.location.href = "login.html";
    });

    $(".lnkPurchase").css("display", "none");
    $(".lnkCart").css("display", "none");
    $(".lnkTranscationHistory").css("display", "none");
    $(".lnkMyProfile").css("display", "none");
    $(".lnkChangePassword").css("display", "none");
    $(".lnkLogout").css("display", "none");
});