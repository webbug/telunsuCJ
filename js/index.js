$(function () {


    /*禁止默认拖动事件*/
    document.ontouchmove = function (event) {
        event.preventDefault();
    };

    //	alert($(window).width()+'-----'+$(window).height());

    function styleJs() {
        var pingKuan = jQuery(".m_wrapper").width(), //m_wrapper是最外层div的类名
				bili = function (mun) {
				    var oScale = mun / 640; //750是psd宽度
				    return oScale.toFixed(6);
				};


        //例子
        jQuery(".iBg").css({
            "width": pingKuan * bili(240)	//240是在480宽度的psd中的width		
        });



        //样式重置完成之后
        jQuery(".load").hide();
        jQuery(".m_wrapper").css({
            "opacity": 1
        });


        /*pages*/

        //导航
        jQuery(".nav").css({
            "width": pingKuan * bili(534),
            "height": pingKuan * bili(118)
        });

        //降落伞
        jQuery('.san1').css({
            "width": pingKuan * bili(85),
            "height": pingKuan * bili(113),
            "top": pingKuan * bili(332),
            "left": pingKuan * bili(156)
        });

        jQuery('.san2').css({
            "width": pingKuan * bili(36),
            "height": pingKuan * bili(45),
            "top": pingKuan * bili(437),
            "left": pingKuan * bili(505)
        });


        jQuery('.tan_box').css({
            "width": pingKuan * bili(522),
            "height": pingKuan * bili(555),
            "top": pingKuan * bili(218),
            "left": pingKuan * bili(59)
        });

        jQuery('.yyw').css({
            "width": pingKuan * bili(280),
            "height": pingKuan * bili(75),
            "margin-top": pingKuan * bili(195)
        });

        jQuery('.fh').css({
            "width": pingKuan * bili(419),
            "height": pingKuan * bili(65),
            "margin-top": pingKuan * bili(144)
        });

        jQuery('.fh_zj').css({
            "width": pingKuan * bili(419),
            "height": pingKuan * bili(65),
            "margin-top": pingKuan * bili(144)
        });

        jQuery('.cy').css({
            "width": pingKuan * bili(231),
            "height": pingKuan * bili(76),
            "margin-top": pingKuan * bili(144)
        });

        jQuery('.br').css({
            "width": pingKuan * bili(388),
            "height": pingKuan * bili(158),
            "margin-top": pingKuan * bili(99)
        });

        jQuery('.jxcj,.sl').css({
            "width": pingKuan * bili(419),
            "height": pingKuan * bili(65),
            "margin-top": pingKuan * bili(31)
        });

        jQuery('.sl').css({
            "margin-top": pingKuan * bili(16)
        });

        jQuery('.whd').css({
            "width": pingKuan * bili(388),
            "height": pingKuan * bili(158),
            "margin-top": pingKuan * bili(147)
        });

        jQuery('.qr').css({
            "width": pingKuan * bili(419),
            "height": pingKuan * bili(65),
            "margin-top": pingKuan * bili(98)
        });


        jQuery('.cj').css({
            "width": pingKuan * bili(387),
            "height": pingKuan * bili(149),
            "top": pingKuan * bili(614),
            "left": pingKuan * bili(127)

        });

        jQuery('.title_wdjp').css({
            "width": pingKuan * bili(488),
            "height": pingKuan * bili(55),
            "top": pingKuan * bili(90),
            "left": pingKuan * bili(76)

        });








        if (432>$(window).width() >= 375) {
            jQuery('.close_button').css({
                "width": pingKuan * bili(419),
                "height": pingKuan * bili(65),
                "left": pingKuan * bili(111),
                "bottom": pingKuan * bili(50)

            });
        } else {
            jQuery('.close_button').css({
                "width": pingKuan * bili(419),
                "height": pingKuan * bili(65),
                "left": pingKuan * bili(111),
                "bottom": pingKuan * bili(80)

            });
        }


        jQuery('.title_zjxx').css({
            "width": pingKuan * bili(488),
            "height": pingKuan * bili(55),
            "top": pingKuan * bili(90)
        });


        jQuery('.zj_mes').css({
            "width": pingKuan * bili(427),
            "height": pingKuan * bili(104),
            "top": pingKuan * bili(228)
        });

        jQuery('.input').css({
            "width": pingKuan * bili(280),
            "height": pingKuan * bili(80),
            "top": pingKuan * bili(440),
            "padding-left": pingKuan * bili(170)
        });

        jQuery('.sj').css({
            "width": pingKuan * bili(280),
            "height": pingKuan * bili(80),
            "top": pingKuan * bili(545),
            "padding-left": pingKuan * bili(170)
        });

        jQuery('.tjxx_button').css({
            "width": pingKuan * bili(419),
            "height": pingKuan * bili(65),
            "top": pingKuan * bili(711)
        });


        //填写中奖人信息
        Zepto('.fh_zj').tap(function () {
            Zepto('.screen_tou').removeClass('screen_in');
        });


        /*豪礼榜单*/
        jQuery('.title_hlbd').css({
            "width": pingKuan * bili(488),
            "height": pingKuan * bili(162),
            "top": pingKuan * bili(72)
        });

        jQuery('.date_button').css({
            "width": pingKuan * bili(132),
            "height": pingKuan * bili(43),
            "top": pingKuan * bili(193),
            "left": pingKuan * bili(80)
        });

        jQuery('.sj_button').css({
            "width": pingKuan * bili(163),
            "height": pingKuan * bili(43),
            "top": pingKuan * bili(193),
            "left": pingKuan * bili(230)
        });


        jQuery('.jp_button').css({
            "width": pingKuan * bili(153),
            "height": pingKuan * bili(43),
            "top": pingKuan * bili(193),
            "left": pingKuan * bili(408)
        });


        /*摇一摇*/
        $('.yao_icon').css({
            "width": pingKuan * bili(168),
            "height": pingKuan * bili(168),
            "top": pingKuan * bili(126),
            "left": pingKuan * bili(236)
        });

        jQuery('.yql').css({
            "width": pingKuan * bili(162),
            "height": pingKuan * bili(77),
            "top": pingKuan * bili(713),
            "left": pingKuan * bili(239)
        });



        jQuery('.title_msh').css({
            "width": pingKuan * bili(548),
            "height": pingKuan * bili(55),
            "top": pingKuan * bili(90),
            "left": pingKuan * bili(47)
        });

        jQuery('.close_button_msh').css({
            "width": pingKuan * bili(419),
            "height": pingKuan * bili(65),
            "bottom": pingKuan * bili(60),
            "left": pingKuan * bili(108)
        });


        jQuery('.rnn_title').css({
            "width": pingKuan * bili(488),
            "height": pingKuan * bili(89),
            "top": pingKuan * bili(90),
            "left": pingKuan * bili(75)
        });



        jQuery('.jpsysm').css({
            "width": pingKuan * bili(179),
            "height": pingKuan * bili(30),
            "top": pingKuan * bili(58)
        });

        jQuery('.gx_jj').css({
            "width": pingKuan * bili(373),
            "height": pingKuan * bili(85),
            "top": pingKuan * bili(704)
        });

        jQuery('.tx_zjxx').css({
            "width": pingKuan * bili(419),
            "height": pingKuan * bili(65),
            "top": pingKuan * bili(824)
        });


        jQuery('.msh_jf').css({
            "width": pingKuan * bili(294),
            "height": pingKuan * bili(85),
            "top": pingKuan * bili(704)
        });

        jQuery('.hyh').css({
            "width": pingKuan * bili(286),
            "height": pingKuan * bili(83),
            "top": pingKuan * bili(148)
        });

        jQuery('.qd').css({
            "width": pingKuan * bili(339),
            "height": pingKuan * bili(77),
            "top": pingKuan * bili(704)
        });


        jQuery('.fanh_button').css({
            "width": pingKuan * bili(419),
            "height": pingKuan * bili(65),
            "top": pingKuan * bili(824)
        });


        jQuery('.tnjj_title').css({
            "width": pingKuan * bili(528),
            "height": pingKuan * bili(55),
            "top": pingKuan * bili(90)
        });

        jQuery('.jj_box').css({
            "width": pingKuan * bili(482),
            "height": pingKuan * bili(445),
            "top": pingKuan * bili(243)
        });
        jQuery('.jpsysm1').css({
            "top": pingKuan * bili(190)
        });

        jQuery('.zjr_mes').css({
            "width": pingKuan * bili(463),
            "height": pingKuan * bili(199),
            "top": pingKuan * bili(660)
        });

        jQuery('.zjr_mess').css({
            "width": pingKuan * bili(299),
            "height": pingKuan * bili(47),
            "padding-left": pingKuan * bili(100),
            "margin-top": pingKuan * bili(50)
        });

        jQuery('.zjr_mess2').css({
            "width": pingKuan * bili(299),
            "height": pingKuan * bili(47),
            "padding-left": pingKuan * bili(100),
            "margin-top": pingKuan * bili(18)
        });

        jQuery('.c_button').css({
            "width": pingKuan * bili(419),
            "height": pingKuan * bili(67),
            "top": pingKuan * bili(890)
        });


        jQuery('.msh_tit').css({
            "width": pingKuan * bili(488),
            "height": pingKuan * bili(55),
            "top": pingKuan * bili(90)
        });


        jQuery('.jpsysm3').css({
            "top": pingKuan * bili(200)
        });


        jQuery('.msh_box').css({
            "width": pingKuan * bili(483),
            "height": pingKuan * bili(419),
            "top": pingKuan * bili(355)
        });


        Zepto('.wdjp_href').tap(function () {
            window.location.href = Zepto(this).attr('href');
        });



        jQuery('.aahr1').css({
            "width": pingKuan * bili(232),
            "height": pingKuan * bili(60),
            "top": pingKuan * bili(405),
            "left": pingKuan * bili(76)
        });
        jQuery('.aahr2').css({
            "width": pingKuan * bili(190),
            "height": pingKuan * bili(60),
            "top": pingKuan * bili(810),
            "left": pingKuan * bili(76)
        });
        
        
           jQuery('.hdc_button').css({
            "width": pingKuan * bili(419),
            "height": pingKuan * bili(65),
            "bottom": pingKuan * bili(60)
        });
        
        
            jQuery('.hsm_button').css({
            "width": pingKuan * bili(419),
            "height": pingKuan * bili(65),
            "bottom": pingKuan * bili(16)
        });
        
        
             jQuery('.yao_hdc_button').css({
            "width": pingKuan * bili(419),
            "height": pingKuan * bili(65),
            "bottom": pingKuan * bili(80)
        });
        
        

        
               jQuery('.icon_jzd').css({
            "width": pingKuan * bili(28),
            "height": pingKuan * bili(14),
            "left": pingKuan * bili(279),
            "bottom": pingKuan * bili(3)
        });
        
             jQuery('.icon_jzd_sm').css({
            "width": pingKuan * bili(28),
            "height": pingKuan * bili(14),
            "left": pingKuan * bili(83),
            "bottom": pingKuan * bili(3)
        });
        
        
               jQuery('.icon_jzd_wt').css({
            "width": pingKuan * bili(28),
            "height": pingKuan * bili(14),
            "left": pingKuan * bili(475),
            "bottom": pingKuan * bili(3)
        });
        
        
        
        
        

        Zepto('.aahr').tap(function () {
            window.location.href = Zepto(this).attr('href');
        });

        jQuery('#errorMsg').css({
            "top": pingKuan * bili(652)
        });
        
        
        
        
        
         jQuery('#title_wdjp').css({
         	"position":"absolute",
            "top": pingKuan * bili(73),
            "left":pingKuan * bili(76),
            "width":pingKuan * bili(488),
            "height":pingKuan * bili(55)
        });
        
        
//     jQuery('.war_wdjp').css({
//       	"position":"absolute",
//          "top": pingKuan * bili(191),
//          "left":pingKuan * bili(76),
//          "width":pingKuan * bili(488),
//          "height":pingKuan * bili(640),
//          "bottom":pingKuan * bili(176)
//      });
        
        
           jQuery('.close_button').css({
         	"position":"absolute",
            "bottom": pingKuan * bili(60),
            "left":pingKuan * bili(111),
            "width":pingKuan * bili(419),
            "height":pingKuan * bili(65)
        });
        
        
               jQuery('.title_hlbd').css({
         	"position":"absolute",
            "top": pingKuan * bili(72),
            "left":pingKuan * bili(76),
            "width":pingKuan * bili(488),
            "height":pingKuan * bili(162)
        });
        
        
//             jQuery('.war_hlbd').css({
//       	"position":"absolute",
//          "top": pingKuan * bili(255),
//          "left":pingKuan * bili(81),
//          "width":pingKuan * bili(479),
//          "height":pingKuan * bili(670),
//          "bottom":pingKuan * bili(200)
//      });
        
        
        
        jQuery('.hlbd_fh').css({
            "bottom": pingKuan * bili(51),
            "width":pingKuan * bili(419),
            "height":pingKuan * bili(65)
        });
        
        

     

    }






    function loaded() {
        setTimeout(function () { styleJs(); }, 300);
    }
    function hengshuping() {
        if (window.orientation == 180 || window.orientation == 0) { loaded(); };
        if (window.orientation == 90 || window.orientation == -90) { loaded(); }
    }
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
    window.addEventListener('load', loaded, false);



});


/*弹窗显示*/
function screenShow() {
    Zepto('.screen').css({
        zIndex: '9999999999999999999999999999'
    }).animate({
        opacity: '1'
    },
          	500,
          	'ease-in-out',
          	function () { });
}





/*弹窗隐藏*/
function screenHide() {
    Zepto('.screen').animate({
        opacity: '0'
    },
          	500,
          	'ease-in-out',
          	function () {
          	    Zepto('.screen').css({
          	        "z-index": '0'
          	    });
          	});
}



Zepto('.fh').tap(function () {
    screenHide();
});

