//��¼������ҳ�����Ĺ��
$(".welcome .close-ad").click( function(){
$(this).parent().hide();
})
$(".welcome").delay(1000).fadeIn(2000).delay(3000).fadeOut(2000);
//end ��¼������ҳ�����Ĺ��
 


 
//  header �����л�
$(".lang").mouseenter(function(){
	$(this).children().show();
})
$(".lang .language-toggle").mouseleave(function(){
	$(this).hide();
})



// attention-box��ʾ������
		
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






 // ȫ��������ʾ������
 $(".shop .select-city").hover(
 		function(){
 			$(this).css({"border":"1px solid #c57d5c","border-bottom":"none"}).next().css({"border":"1px solid #c57d5c"}).show();

 		}
 	);

 $(".shop .shop-collection").mouseleave(function(){
 	$(this).hide().prev().css({"border":"1px solid transparent"});

 });



 // �������֤��
 
 // end �������֤��
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



// end header �����л�


// DR ��������
$(".dr-nav ul li").mouseenter(function(){
	$(this).children(".wrap").show();
});

$(".dr-nav ul li").mouseleave(function(){
	$(this).children(".wrap").hide();
});

	//������ 
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


	//end ������ 
	

	//��������
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
	// end ��������
	
//  end DR ��������



// �ֲ�ͼ

//��ȡ��Ӧ��Ԫ��
var playBox = document.querySelector(".play-box");
var iconList = document.querySelectorAll(".icon-list span");
var leftIcon = document.querySelector("#leftIcon");
var rightIcon = document.querySelector("#rightIcon");

//����ѭ������
var m = 1;

//��ʱ����
function runPlay(){
	if (m > 4) {
		m = 0;
	}

	controlImage(m)

	m ++;
}

var timer = setInterval(runPlay, 1000);


//�����ֲ�ͼ����ʱֹͣ
playBox.onmouseover = function(){
	clearInterval(timer);

	//��ʾ��ť
	leftIcon.style.display = "block";
	rightIcon.style.display = "block";
}

playBox.onmouseout = function(){
	timer = setInterval(runPlay, 1000);

	//���ذ�ť
	leftIcon.style.display = "none";
	rightIcon.style.display = "none";
}

//��ÿһ�� ���ư�ť�� ��껬�� �¼�
for (var i = 0; i < iconList.length; i ++) {
	iconList[i].onmouseover = function(){
		var index = parseInt(this.getAttribute("index"));
		controlImage(index);

		m = index + 1;

	}
}


//������ҵİ�ť
rightIcon.onclick = function(){
	if (m > 4) {
		m = 0;
	}

	controlImage(m);
	m ++;
}


//�������İ�ť
leftIcon.onclick = function(){
	m -= 2;
	if (m < 0) {
		m = 4;
	}
	controlImage(m);
	m ++;
}

//����ͼƬ�ı仯
function controlImage(n){
	//��ȡ����a�ļ���
	var aImgs = document.querySelectorAll(".image-list a");
	

	//���е�aɾ���࣬ ��n�������
	for (var i = 0; i < aImgs.length; i ++) {
		aImgs[i].className = "";
		iconList[i].className = "";
	}
	aImgs[n].className = "current";
	iconList[n].className = "current";

}
// end�ֲ�ͼ



// �ֲ�ͼ��������Ŵ�ͼ

// end �ֲ�ͼ��������Ŵ�ͼ








// help 
$(".help-one > a").mouseenter(function(){
		$(this).next().show().mouseleave(function(){
			$(this).hide();
		});
})












//�ұߵĴ�ֱ����
	// ���߿ͷ�
	$(".online-service").hover(
			function(){
				$(this).find(".tip-img").fadeIn(1000);
			},
			function(){
				$(this).find(".tip-img").fadeOut(1000);

			}
		)
	// ���߿ͷ� end

	// ���ﳵ
	$(".shop-car").hover(
			function(){
				$(this).find(".word").fadeIn();
			},
			function(){
				$(this).find(".word").fadeOut();

			}
		)
	// ���ﳵ end

	// ���ض���
	$(".shop-car.back-now").add(".shop-car.word").click(function(){
		$(window).scrollTop(0);
	})



	// ����������ʾ������
	
	$(window).scroll( function(){
		var s = $(document).scrollTop();

		if( s >= 300 ){
			$(".v-nav").show();
		} else {

			$(".v-nav").hide();
		}

		

	})

//�ұߵĴ�ֱ���� end





// ���ε���
$(".shop-view #search-demo-shop input").css({"color":"#aaa"});
$(".shop-view #search-demo-shop input").focus( function(){
	$(this).val("");
	$(this).css({"color":"#333"});
})