// ハンバーガーメニューの開閉機能
$(".openbtn1").click(function () {
  $(this).toggleClass("active");
  $(this).next().toggleClass("menu_down");
  $("body").toggleClass("overflow-hidden");
});

// ページトップボタンの表示非表示する関数
const PageTopAnime = () => {
  const target = $("#page-top > a");
  let scroll = $(window).scrollTop();
  if (scroll >= 200) {
    target.removeClass("RightMove");
    target.addClass("LeftMove");
  } else {
    if (target.hasClass("LeftMove")) {
      target.removeClass("LeftMove");
      target.addClass("RightMove");
    }
  }
};
// ウインドウをスクロールする度にPageTopAnime関数を実行
$(window).scroll(() => {
  PageTopAnime();
});
//ページトップボタンをクリックした時にトップまでスムーススクロール
$("#page-top > a").click(() => {
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500
  );
  return false;
});

$('.page-link a[href*="#"]').click(function () {
  let elmHash = $(this).attr("href");
  let pos = $(elmHash).offset().top; //idの上部の距離を取得
  console.log(pos);
  $("body,html").animate({ scrollTop: pos }, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});
