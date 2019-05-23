$(function(){
    
    //モーダルウィンドウ実装
    $('.mb').click(function() {
        wn = '.' + $(this).attr('date-tgt'); //date属性取得
        var winW = $(window).width(); //表示画面幅取得
        var devW = 640; //閾値640px
        
        //　relのURLを変数へ代入し、srcへ挿入
        var mURL = $(wn).find('iframe').attr('rel');
        
        $(wn).find('iframe').attr('src', mURL);
        
        //　モーダルの位置をウィンドウの中央へ配置
        if (winW > devW) {
            //PC, Tablet
            var mW = $(wn).find('.youtube').innerWidth() / 2;
            var mH = $(wn).find('.youtube').innerHeight() / 2;
            $(wn).find('.youtube').css({'margin-left':-mW,'margin-top':-mH});
        }else{
            //Smartphone
            var mH = $(wn).find('.youtube').innerHeight() / 2;
            $(wn).find('.youtube').css({'margin-top':-mH});
        }
        $(wn).fadeIn(500);
    });
    //モーダルウィンドウクローズ
    $('.closeBtn,.popupBK').click(function(){
        $(wn).fadeOut(500);
        $(wn).find('iframe').attr('src', '');
    });
    //モーダルウィンドウEND
    
    //オープニング画面クローズ
    $('.entrance_cover').click(function(){
        $('#line1').animate({
            'margin-top':'-50px',
            height: 'hide',
        });
        $('#line2').animate({
            'margin-top':'50px',
            height: 'hide',
        });
        $('#click_start').delay(100).animate({
            width: 'hide'
        });
        $('.entrance_cover1').slideUp(500, 'swing');
        $('.entrance_cover2').delay(100).slideUp(500, 'swing');
        $('.entrance_cover3').delay(200).slideUp(500, 'swing');
        $('.entrance_cover4').delay(300).slideUp(500, 'swing', function(){
            $('.entrance_cover').fadeOut();
        });
        $('.main_contents').show(); //メインコンテンツ描写
        //パンダのアニメーション
        var wH2 = $('#PANDA').offset().top;
        $(window).on('load scroll', function() {
            var value = $(this).scrollTop();
            if ( value > wH2 ) {
                $('#PANDA').css({display:'block'});
            } else {
                $('#PANDA').css({display:'none'});
            }
        });
    });
    
    //モバイルハンバーガーメニュー
    $('.menu-trigger').on('click', function() {
        $(this).toggleClass('active');
        
        if ($('#header_menu').is(':hidden')) $('#header_menu').slideDown();
        else $('#header_menu').slideUp();
        
        return false;
    });
    
    //スクロールしたらヘッダー背景
    //var wH = $(window).height();
    var wH = $('#header-point').offset().top;
    $(window).on('load scroll', function() {
        var value = $(this).scrollTop();
        if ( value > wH ) {
            $('header').addClass('header_background');
        } else {
            $('header').removeClass('header_background');
        }
    });
    
    //スムーズスクロール
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
    
    //最上部までスクロール
    $('.footer_scroll').click(function(){
        var speed = 500;
        $("html, body").animate({scrollTop:0}, speed, "swing");
        return false;
    });
    
    //web詳細
    $('.web-mb').click(function() {
        current_scrollY = $( window ).scrollTop();
        weblink = '.' + $(this).attr('date-tgt'); //date属性取得
        $(weblink).fadeIn(500);
         
        $('.normal_view, footer').css( {position: 'fixed', width: '100%', top: -1 * current_scrollY} );
        
        $('.closeBtn_web').click(function() {
            $(weblink).fadeOut(500);
            $( '.normal_view, footer' ).attr( { style: '' } );
            $( 'html, body' ).prop( { scrollTop: current_scrollY } );
        });
    });
    
});


