$(document).ready(function() {

    /* footer */
    var m_footer =

        '		<ul class="footer_awards_slider">' +
        '			<li><a taget="_blank" href="javascript:void(0);"><img alt="고용노동부 2016년 고용창출 100개 우수기업 4년 연속 표창" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award17_01.jpg"></a></li>' +
        '			<li><a taget="_blank" href="javascript:void(0);"><img alt="고용노동부 2016년 장애인고용촉진대회 장애인고용촉진 유공 포상" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award17_02.jpg"></a></li>' +
        '			<li><a taget="_blank" href="javascript:void(0);"><img alt="환경부 2016년 그린킹 캠페인 온실가스 저감 우수 모범 기업" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award17_03.jpg"></a></li>' +
        '			<li><a taget="_blank" href="javascript:void(0);"><img alt="농림축산식품부 2016년 농식품 상생협력 활동 우수사례 기업" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award17_04.jpg"></a></li>' +
        '			<li><a taget="_blank" href="javascript:void(0);"><img alt="2016년 대한민국 여성인재경영대상 우수사례 기업" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award17_05.jpg"></a></li>' +
        '			<li class="footer_award_last"><a taget="_blank" href="javascript:void(0);"><img alt="2016년 한국 최고의 직장 톱10 본상" src="//image.istarbucks.co.kr/common/img/footer/m_footer_award17_06.jpg"></a></li>' +
        '		</ul>';

    var w_footer =
        '		<ul class="footer_awards_slider">' +
        '			<li><a taget="_blank" href="javascript:void(0);"><img alt="고용노동부 2016년 고용창출 100개 우수기업 4년 연속 표창" src="//image.istarbucks.co.kr/common/img/footer/footer_award17_01.jpg"></a></li>' +
        '			<li><a taget="_blank" href="javascript:void(0);"><img alt="고용노동부 2016년 장애인고용촉진대회 장애인고용촉진 유공 포상" src="//image.istarbucks.co.kr/common/img/footer/footer_award17_02.jpg"></a></li>' +
        '			<li><a taget="_blank" href="javascript:void(0);"><img alt="환경부 2016년 그린킹 캠페인 온실가스 저감 우수 모범 기업" src="//image.istarbucks.co.kr/common/img/footer/footer_award17_03.jpg"></a></li>' +
        '			<li><a taget="_blank" href="javascript:void(0);"><img alt="농림축산식품부 2016년 농식품 상생협력 활동 우수사례 기업" src="//image.istarbucks.co.kr/common/img/footer/footer_award17_04.jpg"></a></li>' +
        '			<li><a taget="_blank" href="javascript:void(0);"><img alt="2016년 대한민국 여성인재경영대상 우수사례 기업" src="//image.istarbucks.co.kr/common/img/footer/footer_award17_05.jpg"></a></li>' +
        '			<li class="footer_award_last"><a taget="_blank" href="javascript:void(0);"><img alt="2016년 한국 최고의 직장 톱10 본상" src="//image.istarbucks.co.kr/common/img/footer/footer_award17_06.jpg"></a></li>' +
        '		</ul>';

    if (myWindow < 640) {
        $('.footer_awards_wrap_inner').prepend(m_footer);
        //$('.footer_awards_slider').hide();


    } else {
        $('.footer_awards_wrap_inner').prepend(w_footer);
    }

    $('.footer_awards_wrap_inner p.footer_award_btn').click(function() {
        console.log('d');
        $('ul.footer_awards_slider').slideToggle();
        $(this).children().children().toggleClass('footer_arrow_up');
    });

    $(".mob_gnb_search_btn").unbind("click").on("click", function() {

        if (pattern_check("#search_text", "검색어를  입력하세요.", "허용되지 않은 문자입니다.", getPattern('BASIC3')) == false) {
            return;
        }
        var search_word = encodeURI(encodeURIComponent($("#search_text").val()));

        location.href = "/search/search.do?search=" + search_word;


        console.log("######################");
    });

});