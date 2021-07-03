window.addEventListener('DOMContentLoaded', function (){
    $('.burger_btn').on('click', function() {
        $(this).toggleClass('active');
        return false;
    });
});

//ハンバーガーメニュー
window.addEventListener('DOMContentLoaded', function (){
    $('.burger_btn').click(function() {
        $('.header_nav').fadeToggle(500);
    });
});

//ヘッダースクロールしたら背景色の変化
document.addEventListener('scroll',function() {
    const scrollY = window.pageYOffset;

    if (scrollY > 280) {
        document.getElementById('header').classList.add('active');
    } else {
        document.getElementById('header').classList.remove('active');
    }
});