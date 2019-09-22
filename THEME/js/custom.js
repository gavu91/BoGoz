const webUrl = 'http://www.bygoz.com/';
const apiUrl = 'http://www.bygoz.com/api/';
const pdfUrl = 'http://bygoz.com/uploads/book/pdf/';
const imageUrl = 'http://www.bygoz.com/uploads/profile-images/author/';
const frontCoverUrl = 'http://bygoz.com/uploads/book/front_cover/';

function loadMaster(activePage) {
    $(".masterPage").load("masterpage.html", function() {
        $(".menuList").removeClass("active");
        $("." + activePage).addClass("active");

        if (window.localStorage.getItem("isAuthenticate") != null && window.localStorage.getItem("isAuthenticate") != undefined) {
            $(".lnkPurchase").css("display", "flex");
            $(".lnkCart").css("display", "flex");
            $(".lnkMyProfile").css("display", "flex");
            $(".lnkChangePassword").css("display", "flex");
            $(".lnkLogout").css("display", "flex");
            $(".lnkLogin").css("display", "none");
            if (window.localStorage.getItem("uName") != null && window.localStorage.getItem("uName") != undefined) {
                $(".uFullname").text(window.localStorage.getItem("uName"));
            }
            if (window.localStorage.getItem("uEmail") != null && window.localStorage.getItem("uEmail") != undefined) {
                $(".uEmailID").text(window.localStorage.getItem("uEmail"));
            }
        } else {
            $(".lnkPurchase").css("display", "none");
            $(".lnkCart").css("display", "none");
            $(".lnkMyProfile").css("display", "none");
            $(".lnkChangePassword").css("display", "none");
            $(".lnkLogout").css("display", "none");
            $(".lnkLogin").css("display", "flex");
        }

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
}