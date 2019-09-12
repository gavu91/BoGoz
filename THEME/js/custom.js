const webUrl = 'http://www.bygoz.com/';
const apiUrl = 'http://www.bygoz.com/public/api/';
const pdfUrl = 'http://bygoz.com/uploads/book/pdf/';
const imageUrl = 'http://www.bygoz.com/uploads/profile-images/author/';
const frontCoverUrl = 'http://bygoz.com/public/uploads/book/front_cover/';

$(document).ready(function() {
    $(".masterPage").load("masterpage.html", function() {
        $(".lnkPurchase").css("display", "none");
        $(".lnkCart").css("display", "none");
        $(".lnkTranscationHistory").css("display", "none");
        $(".lnkMyProfile").css("display", "none");
        $(".lnkChangePassword").css("display", "none");
        $(".lnkLogout").css("display", "none");
    });
});