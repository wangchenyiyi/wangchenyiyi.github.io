//登录官网首页弹出的广告
$(".welcome .close-ad").click( function(){
$(this).parent().hide();
})
$(".welcome").delay(1000).fadeIn(2000).delay(3000).fadeOut(2000);
//end 登录官网首页弹出的广告
 


 
//  header 语言切换
$(".lang").mouseenter(function(){
	$(this).children().show();
})
$(".lang .language-toggle").mouseleave(function(){
	$(this).hide();
})



// attention-box显示与隐藏
		
$(".dr-number-left .attention .attention-box").hide();
$(".dr-number-left .attention").mouseenter(function(){
	$(this).children().show();
})

$(".dr-number-left .attention").mouseleave(function(){
	$(this).children().hide();	
})



$(".dr-number-left .sjgw").mouseenter(function(){
	$(this).children().show();
})

$(".dr-number-left .sjgw").mouseleave(function(){
	$(this).children().hide();
})






 // 全国店铺显示与隐藏
 $(".shop .select-city").hover(
 		function(){
 			$(this).css({"border":"1px solid #c57d5c","border-bottom":"none"}).next().css({"border":"1px solid #c57d5c"}).show();

 		}
 	);

 $(".shop .shop-collection").mouseleave(function(){
 	$(this).hide().prev().css({"border":"1px solid transparent"});

 });



 // 输入身份证号
 
 // end 输入身份证号
 $(".id-search").hover(
 	function(){
 		$(".arrow-img").show();
 	},
 	function(){
 		$(".arrow-img").hide();

 	}
 );

 $(".id-search input").focus(function(){
 	$(this).prop("placeholder","").css({"border":"1px solid #dbc7ba","outline":"none"});
 })



// end header 语言切换


// DR 导航分类
$(".dr-nav ul li").mouseenter(function(){
	$(this).children(".wrap").show();
});

$(".dr-nav ul li").mouseleave(function(){
	$(this).children(".wrap").hide();
});

	//求婚钻戒 
	$("#diamond-left > ul li").mouseenter(function(){
		 var idx = $(this).index();
		 $(this).css({"border-bottom":"1px solid #888"});
		 $(".diamond-img > a").eq( idx ).addClass("show").siblings(".diamond-img > a").removeClass("show");
	});

	$(".marry-me > ul li").mouseleave(function(){
		 $(this).css({"border-bottom":"1px solid #ccc"});
		 
	});


	$("ul#diamond-right li").mouseenter(function(){
		var idx = $(this).index();
		$(this).css({"border-bottom":"1px solid #888"});
		$("#marry-me-right-img > a").eq( idx ).addClass("show").siblings("#marry-me-right-img > a").removeClass("show");
	})


	//end 求婚钻戒 
	

	//爱的礼物
	$("#love-left > ul li").mouseenter(function(){
		 var idx = $(this).index();
		 console.log(idx)
		 $(this).css({"border-bottom":"1px solid #888"});
		 $("#love-left .diamond-img > a").eq( idx ).addClass("show").siblings("#love-left .diamond-img > a").removeClass("show");
	});


	$("ul#love-right li").mouseenter(function(){
		var idx = $(this).index();
		$(this).css({"border-bottom":"1px solid #888"});
		$("#love-me-right-img > a").eq( idx ).addClass("show").siblings("#love-me-right-img > a").removeClass("show");
	})
	// end 爱的礼物
	
//  end DR 导航分类



// 轮播图

//获取响应的元素
var playBox = document.querySelector(".play-box");
var iconList = document.querySelectorAll(".icon-list span");
var leftIcon = document.querySelector("#leftIcon");
var rightIcon = document.querySelector("#rightIcon");

//定义循环变量
var m = 1;

//定时函数
function runPlay(){
	if (m > 4) {
		m = 0;
	}

	controlImage(m)

	m ++;
}

var timer = setInterval(runPlay, 1000);


//滑过轮播图，定时停止
playBox.onmouseover = function(){
	clearInterval(timer);

	//显示按钮
	leftIcon.style.display = "block";
	rightIcon.style.display = "block";
}

playBox.onmouseout = function(){
	timer = setInterval(runPlay, 1000);

	//隐藏按钮
	leftIcon.style.display = "none";
	rightIcon.style.display = "none";
}

//被每一个 控制按钮绑定 鼠标滑过 事件
for (var i = 0; i < iconList.length; i ++) {
	iconList[i].onmouseover = function(){
		var index = parseInt(this.getAttribute("index"));
		controlImage(index);

		m = index + 1;

	}
}


//点击向右的按钮
rightIcon.onclick = function(){
	if (m > 4) {
		m = 0;
	}

	controlImage(m);
	m ++;
}


//点击向左的按钮
leftIcon.onclick = function(){
	m -= 2;
	if (m < 0) {
		m = 4;
	}
	controlImage(m);
	m ++;
}

//控制图片的变化
function controlImage(n){
	//获取所有a的集合
	var aImgs = document.querySelectorAll(".image-list a");
	

	//所有的a删除类， 第n个添加类
	for (var i = 0; i < aImgs.length; i ++) {
		aImgs[i].className = "";
		iconList[i].className = "";
	}
	aImgs[n].className = "current";
	iconList[n].className = "current";

}
// end轮播图



// 轮播图下面的三张大图

// end 轮播图下面的三张大图








// help 
$(".help-one > a").mouseenter(function(){
		$(this).next().show().mouseleave(function(){
			$(this).hide();
		});
})












//右边的垂直导航
	// 在线客服
	$(".online-service").hover(
			function(){
				$(this).find(".tip-img").fadeIn(1000);
			},
			function(){
				$(this).find(".tip-img").fadeOut(1000);

			}
		)
	// 在线客服 end

	// 购物车
	$(".shop-car").hover(
			function(){
				$(this).find(".word").fadeIn();
			},
			function(){
				$(this).find(".word").fadeOut();

			}
		)
	// 购物车 end

	// 返回顶部
	$(".shop-car.back-now").add(".shop-car.word").click(function(){
		$(window).scrollTop(0);
	})



	// 导航条的显示与隐藏
	
	$(window).scroll( function(){
		var s = $(document).scrollTop();

		if( s >= 300 ){
			$(".v-nav").show();
		} else {

			$(".v-nav").hide();
		}

		

	})

//右边的垂直导航 end





// 二次调整
$(".shop-view #search-demo-shop input").css({"color":"#aaa"});
$(".shop-view #search-demo-shop input").focus( function(){
	$(this).val("");
	$(this).css({"color":"#333"});
})