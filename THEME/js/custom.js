const webUrl = 'http://www.bygoz.com/';
const apiUrl = 'http://www.bygoz.com/api/';
const pdfUrl = 'http://bygoz.com/uploads/book/pdf/';
const imageUrl = 'http://www.bygoz.com/uploads/profile-images/author/';
const frontCoverUrl = 'http://bygoz.com/uploads/book/front_cover/';

$(document).ready(function() {
    $(".masterPage").load("masterpage.html", function() {
        if (window.localStorage.getItem("isAuthenticate") != null && window.localStorage.getItem("isAuthenticate") != undefined) {
            $(".lnkPurchase").css("display", "flex");
            $(".lnkCart").css("display", "flex");
            $(".lnkTranscationHistory").css("display", "flex");
            $(".lnkMyProfile").css("display", "flex");
            $(".lnkChangePassword").css("display", "flex");
            $(".lnkLogout").css("display", "flex");
        } else {
            $(".lnkPurchase").css("display", "none");
            $(".lnkCart").css("display", "none");
            $(".lnkTranscationHistory").css("display", "none");
            $(".lnkMyProfile").css("display", "none");
            $(".lnkChangePassword").css("display", "none");
            $(".lnkLogout").css("display", "none");
        }

        $(".lnkLogin").click(function() {
            if (window.localStorage.getItem("isAuthenticate") != null && window.localStorage.getItem("isAuthenticate") != undefined) {
                window.location.href = "main.html";
            } else {
                window.location.href = "login.html";
            }
        });

        $(".lnkLogout").click(function() {
            window.localStorage.removeItem("isAuthenticate");
            window.localStorage.removeItem("ApiToken");
            window.localStorage.removeItem("UserID");
            window.localStorage.removeItem("uUsername");
            window.localStorage.removeItem("uEmail");
            window.localStorage.removeItem("uName");
            window.localStorage.removeItem("uMobile");
            window.localStorage.removeItem("uDOB");
            window.localStorage.removeItem("uState");
            window.location.href = "main.html";
        });
    });

    $('iframe').contents().find('.ToggleElementButton').css({
        opacity: 0,
        color: 'purple',
        background: 'red'
    });
});