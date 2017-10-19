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


/*获取时间*/ 

var dt = new Date();
var str_date = dt.toDateString();
var m = str_date.substr(4,3) + "\.";
var m_num = dt.getMonth() + 1;
var date = dt.getDate();
var day =  dt.getDay();
var str_day = "";
switch( day ){
	case 1:
	str_day = "星期一 | Monday ";
	break;

	case 2:
	str_day = "星期二 | Tuesday";
	break;


	case 3:
	str_day = "星期三 | Wednesday ";
	break;

	case 4:
	str_day = "星期四 | Thursday ";
	break;

	case 5:
	str_day = "星期五 | Friday  ";
	break;

	case 6:
	str_day = "星期六 | Saturday  ";
	break;

	case 0:
	str_day = "星期日 | Sunday  ";
	break;
}


$(".dr-month").html( m );
$(".dr-date").html( m_num +"月" + date + "日");
$(".dr-day").html( str_day );


/*end 获取时间*/ 


/*第三个页面----钻戒定制*/ 

/*end 第三个页面----钻戒定制*/ 





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