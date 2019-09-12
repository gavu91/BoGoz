const webUrl = 'http://www.bygoz.com/';
const apiUrl = 'http://www.bygoz.com/public/api/';
const pdfUrl = 'http://bygoz.com/uploads/book/pdf/';
const imageUrl = 'http://www.bygoz.com/uploads/profile-images/author/';
const frontCoverUrl = 'http://bygoz.com/public/uploads/book/front_cover/';

$(document).ready(function() {
    $(".masterPage").load("masterpage.html", function() {
        if(window.localStorage.getItem("isAuthenticate") != null && window.localStorage.getItem("isAuthenticate") != undefined){
            $(".lnkPurchase").css("display", "flex");
            $(".lnkCart").css("display", "flex");
            $(".lnkTranscationHistory").css("display", "flex");
            $(".lnkMyProfile").css("display", "flex");
            $(".lnkChangePassword").css("display", "flex");
            $(".lnkLogout").css("display", "flex");
        }
       else{
            $(".lnkPurchase").css("display", "none");
            $(".lnkCart").css("display", "none");
            $(".lnkTranscationHistory").css("display", "none");
            $(".lnkMyProfile").css("display", "none");
            $(".lnkChangePassword").css("display", "none");
            $(".lnkLogout").css("display", "none");
       }

       $(".lnkLogout").click(function(){
            window.localStorage.removeItem("isAuthenticate");
            window.localStorage.removeItem("UserID");
            window.location.href = "main.html"; 
       });
    });
});