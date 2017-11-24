$(function() {
    $(".delete").click(function () {
        $(this).closest(".modal").removeClass("is-active");
    });

//toggle nav-burger
    $(".navbar-burger").click(function () {
        $(this).toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    $("#login-modal-launcher").click(function () {
        $("#login-modal").addClass("is-active");
    });

    $("#signup-modal-launcher").click(function () {
        $("#signup-modal").addClass("is-active");
    });

    /***********************登录框*************************/
    var $loginEmail = $("#loginEmail");
    var $loginPassword = $("#loginPassword");
    var $loginPassWordHelper = $("#loginPasswordHelper");
    var $loginEmailHelper = $("#loginEmailHelper");
    var $loginPassHelper = $("#loginPassHelper");
    var EmailloginPass;
    var PassloginPass;
//登录输入邮箱失去焦点时触发
    $loginEmail.blur(function () {
        var emailString = $(this).val()
        var validate = validateEmail(emailString);
        if (validate) {
            $(this).removeClass("is-danger").addClass("is-success");
            $loginEmailHelper.addClass("is-hidden");
        } else {
            $(this).removeClass("is-success").addClass("is-danger");
            $loginEmailHelper.removeClass("is-hidden");
        }
        EmailloginPass = validate;
    });

//登录输入密码键盘弹起时触发
    $loginPassword[0].addEventListener("onkeyup",$loginPasswordonkeyup);
    $loginPassword[0].addEventListener("input",$loginPasswordonkeyup);
    function $loginPasswordonkeyup () {
        var passwordString = $(this).val();
        var validate = validatePassword(passwordString);
        if (validate) {
            $(this).removeClass("is-danger").addClass("is-success");
            $loginPassWordHelper.addClass("is-hidden");
        } else {
            $(this).removeClass("is-success").addClass("is-danger");
            $loginPassWordHelper.removeClass("is-hidden");
        }
        PassloginPass = validate;
    }

//确认提交登录表单
    $("#loginConfirm").click(function () {
        if (EmailloginPass && PassloginPass) {
            $loginPassHelper.addClass("is-hidden");
            var loginEmail = $loginEmail.val();
            var loginPassword = $loginPassword.val();
            $.ajax({})
        } else {
            $loginPassHelper.removeClass("is-hidden");
        }

    });

//清空登录表单
    $("#loginReset").click(function () {
        $loginEmail.val("").removeClass("is-danger").removeClass("is-success");
        $loginPassword.val("").removeClass("is-danger").removeClass("is-success");
        $loginEmailHelper.addClass("is-hidden");
        $loginPassWordHelper.addClass("is-hidden");
        $loginPassHelper.addClass("is-hidden");
    });

    /*************************登录框结束***************************/


    /************************* 注册框 **************************/
    var $signUpUserName = $("#signUpUserName");
    var $signUpStudentID = $("#signUpStudentID");
    var $signUpEmail = $("#signUpEmail");
    var $signUpPassword = $("#signUpPassword");
    var $signUpStudentIDFormatHelper = $("#signUpStudentIDHelperFormat");
    var $signUpEamilHelper = $("#signUpEmailHelper");
    var $signUpPasswordHelper = $("#signUpPasswordHelper");
    var $signUpConfirm = $("#signUpConfirm");
    var $signUpReset = $("#signUpReset");
    var $signPassHelper = $("#signPassHelper");
    var signUpPassStudentID;
    var signUpPassEmail;
    var signUpPassPassword;


//学号
    $signUpStudentID[0].onkeyup = function () {
        var validate = validatePureNumber($(this).val());
        if (validate) {
            $(this).removeClass("is-danger");
            $signUpStudentIDFormatHelper.addClass("is-hidden");
        } else {
            $(this).addClass("is-danger");
            $signUpStudentIDFormatHelper.removeClass("is-hidden");
        }
        signUpPassStudentID = validate;
    };
//学号向后台查询是否存在
    $signUpStudentID.blur(function () {
        $(this).siblings(".is-right").removeClass("is-hidden");
    });

//邮箱
    $signUpEmail.blur(function () {
        var validate = validateEmail($(this).val());
        if (validate) {
            $(this).removeClass("is-danger");
            $signUpEamilHelper.addClass("is-hidden");
        } else {
            $(this).addClass("is-danger");
            $signUpEamilHelper.removeClass("is-hidden");
        }
        signUpPassEmail = validate;
    });

//密码
    $signUpPassword[0].onkeyup = function () {
        var validate = validatePassword($(this).val());
        if (validate) {
            $(this).removeClass("is-danger");
            $signUpPasswordHelper.addClass("is-hidden");
        } else {
            $(this).addClass("is-danger");
            $signUpPasswordHelper.removeClass("is-hidden");
        }
        signUpPassPassword = validate;
    };

//注册提交按钮
    $signUpConfirm.click(function () {
        if (signUpPassStudentID && signUpPassEmail && signUpPassPassword) {
            $signPassHelper.addClass("is-hidden");
            //ajax请求

        } else {
            $signPassHelper.removeClass("is-hidden");
        }
    });

//注册重置按钮
    $signUpReset.click(function (){
        $signUpUserName.val("");
        $signUpStudentID.val("").removeClass("is-danger");
        $signUpEmail.val("").removeClass("is-danger");
        $signUpPassword.val("").removeClass("is-danger");
        $signUpStudentIDFormatHelper.addClass("is-hidden");
        $signUpEamilHelper.addClass("is-hidden");
        $signUpPasswordHelper.addClass("is-hidden");
        $signPassHelper.addClass("is-hidden");

    });

    /************************* 注册框结束 **************************/


    /*******************校验函数 *****************************/
//验证密码字母与数字的组合
    function validatePassword(str) {
        var regNumber=/\d+/;
        var regString=/[a-zA-Z]+/;
        var matAlpha = regNumber.test(str);
        var matNum=regString.test(str);
        return matNum&&matAlpha;
    }


//验证邮箱
    function validateEmail(str) {
        var apos = str.indexOf("@")
        var dotpos = str.lastIndexOf(".");
        if (apos < 1 || dotpos - apos < 2) {
            return false;
        } else
            return true;
    }

//验证纯数字
    function validatePureNumber(str) {
        return  str.match("^[0-9]+$");

    }

    /*******************校验函数结束 *****************************/


    /*******************导航栏标签页切换 ******************************/
    var $navbarButtons = $("#navbar-tab").find("a");
    // $("#bookSearchTab").css("display","block");
    $navbarButtons.each(function (index, elem) {
        elem.onclick = function () {
            var id = $(this).attr("id");
            $("#" + id + "Tab").show().siblings().hide();
        }
    });
    /*******************导航栏标签页切换结束 ***************************/
    
    /*******************联系我们 ************************************/



    /*******************背景粒子 ************************************/

    particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
    /*******************背景粒子结束************************************/


});