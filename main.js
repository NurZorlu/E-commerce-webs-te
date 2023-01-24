$("#btn_giris").click(function () {
    $("#rego").modal('show');
})

$(function (){
    $("#btn_kayit").click(function (){
        $("#myKayit").modal('show')
    })
})

$(function (){
    $("#sifremi_unuttum").click(function (){
        $("#sifreHatirlat").modal('show')
    })
})


$(function (){
    $("#sepet-id").click(function(){
        $("#sepet-id-modal").modal('show')
    })
})


$(function(){
    $("[id=company]").click(function(){
        $("#companyModal").modal('show')
    })
})

$(function(){
    $("[id=orderedEdit]").click(function(){
        $("#orderedEditModal").modal('show')
    })
})

$(function(){
    $("[id=orderedTrash]").click(function(){
        $("#orderedTrashModal").modal('show')
    })
})

$(function(){
    $("#cuponsView").click(function(){
        $("#cuponsViewModal").modal('show')
    })
})

$(function(){
    $("#cuponsTrash").click(function(){
        $("#cuponsTrashModal").modal('show')
    })
})

$(function(){
    $("#messageEdit").click(function(){
        $("#messageEditModal").modal('show')
    })
})

$(function(){
    $("#messageTrash").click(function(){
        $("#messageTrashModal").modal('show')
    })
})

$(function(){
    $(window).scroll(function(){
        //console.log($(this).scrollTop())
        if($(window).scrollTop()>70) {
            $("#backTopButton").fadeIn()
        } else {
            $("#backTopButton").fadeOut()
        }
    })
    $("#backTopButton").click(function(){
        $("body, html").animate({scrollTop:0}, 1500)
    })
})

$(function () {
    $("#btn_kayit").click(function(){
        var email,phone,password,rePassword;
        email=$("#user_email").val();
        email=email.trim(email)

        phone=$("#user_phone").val();
        phone=phone.trim(phone)

        password=$("#user_password").val()
        password=password.trim(password)

        rePassword=$("#re_user_password").val()
        rePassword=rePassword.trim(rePassword)

        if(email==""){
            $("#validation_email").html("Email bos gecilemez")
        } else if (validateEmail(email)==false) {
            $("#validation_email").html("Uygun formatta giriniz")
        }

        if(phone==""){
            $("#validation_phone").html("Telefon bos gecilemez")
        } else if (jQueryStatic.isNumeric(phone)==false) {
            $("#validation_phone").html("Sayi giriniz")

        }
        if(password==""){
            $("#validation_password").html("Sifre bos gecilemez")
        }

        if(rePassword==""){
            $("#validation_password_re").html("Sifre tekrari bos gecilemez")
        } else if(password!=rePassword){
            $("#validation_password_re").html("Sifreler bir birine uymuyor")

        }
       /*Validate email */
        function validateEmail (email) {
            var regex=/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
            return regex.test(email);
        }

        /*Validate phone Number*/
        function validatePhone (telephoneNumber) {
            var phone=/^\+?[1-9][0-9]{7,14}$/;
            return phone.test(telephoneNumber);
        }
    })
})

$(function () {
    var Names = [
        "ActionScrips",
        "AppleScripts",
        "Asp",
        "Ajax",
        "BASIC",
        "Bootstrap",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "CSS#",
        "Erlang",
        "Groovy",
        "Javascript",
        "jQuery",
        "HTML5",
        "Java",
        "Perl",
        "Lisp",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#search").autocomplete({
        source: Names
    });
});

