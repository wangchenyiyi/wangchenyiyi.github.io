

$(function(){

	var m = 1;

	function runPlay(){
		if (m > 1) {
			m = 0;
		}
		
		controlImage(m);

		m ++;
	}

	var timer = setInterval(runPlay, 2000);

	function controlImage(n){
		$(".image-list a").removeClass("current").eq(n).addClass("current");
		$(".icon-list span").removeClass("current").eq(n).addClass("current");
	}




	/*DR注册*/ 
	$(".register-box .form1").show();
	$(".register-box ul li ").click(function(){
		var idx = $(this).index();
		$(this).removeClass("mybg");
		$(this).addClass('mybg').siblings(".register-box ul li").removeClass("mybg");
		/*切换手机 邮箱*/ 
			$(".register-box > div").eq( idx ).show().siblings('.register-box > div').hide();
		/*end切换手机 邮箱*/ 
	})

	/*end DR注册*/ 


	/*登录*/ 
	// $(".login-box .tip").css({"border":"1px solid #0f0"});

	$(".login-box input[name='phoneNumber']").blur(function(){
		var val = $(this).val();
		if( val.match(/^\d{11}$/) === null ){
			$(".login-box .tip").html("您的手机格式不正确").css({"color":"#f00","text-align":"left","font-size":"12px"});

		}else {
			$(".login-box .tip").html("请在有效期内输入验证码").css({"background":"none","text-align":"left","font-size":"12px","color":"#626262"});

		}
	})


	$("#phone-email input[name='phoneNumber']").blur(function(){
		var val = $(this).val();

		if( val.match(/^\w+@\w+\.\w+$/) === null ){
			$("#phone-email .tip").show();
			$("#phone-email .tip").html("邮箱格式/手机号码不正确，请重新输入").css({"color":"#f00"});
			return false;
		}  else {
			$("#phone-email .tip").hide();
		}

		if( val.match(/^\d{11}$/) ===null ){
		
			$("#phone-email .tip").html("邮箱格式/手机号码不正确，请重新输入").css({"color":"#f00"});
			return false;
		}  else {
			$("#phone-email .tip").css({"display":"none"});
		}
	})	


	$("#phone-email input[name='psd']").blur(function(){
		var val = $(this).val();
		if(　val.length < 6 || val.length > 20 ){
			$("#phone-email .tip").show().html("aaa");
			return false;

		}
	})



	$("#lg .psd-login").click(function(){
		$("#phone-email").addClass("show");
		$("#lg").addClass("hid");
	})


	$("#phone-email .psd-login").click(function(){
		
		$("#phone-email").addClass("hid");
		$("#lg").addClass("show");
	})
	/*end 登录*/ 



	/*注册界面邮箱验证*/ 
	$("#reg-check .form1 input[name='phoneNumber']").blur(function(){
		var val = $(this).val();
		if( !(/^\d{11}$/).test(val) ){
			$("#reg-check .form1 .tip").css({"display":"inline-block","color":"#f00"}).html("手机格式不正确");
			return false;
		} else {
			$("#reg-check .form1 .tip").hide();
		}
	})


	$("#reg-check .form1 input[name='psd']").blur(function(){
		var val = $(this).val();
		if( val.length < 6 || val.length > 20 ){
			$("#reg-check .form1 .tip").css({"display":"inline-block","color":"#f00"}).html("密码格式不正确");
			return false;
		} else {
			$("#reg-check .form1 .tip").hide();
		}
	})



	$("#reg-check .form2 input[name='emailNumber']").blur(function(){
		var val = $(this).val();
		if( !(/^\w+@\w+\.\w+$/).test(val) ){
			$("#reg-check .form2 .tip").css({"display":"inline-block","color":"#f00"}).html("邮箱格式不正确");
			return false;
		} else {
			$("#reg-check .form2 .tip").hide();
		}
	})


	$("#reg-check .form2 input[name='psd']").blur(function(){
		var val = $(this).val();
		if( val.length < 6 || val.length > 20 ){
			$("#reg-check .form2 .tip").css({"display":"inline-block","color":"#f00"}).html("密码格式不正确");
			return false;
		} else {
			$("#reg-check .form2 .tip").hide();
		}
	})
	/*end 注册界面邮箱验证*/ 
});