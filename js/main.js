/*********************************/
/* 下拉選單 */
/*********************************/

function hiddenPlaceholder($currenSelect) {
  var $isCurrenSelected =
    $currenSelect.querySelector(".select-single").innerText;
  if ($isCurrenSelected) {
    $currenSelect.querySelector(".select-placeholder").classList.add("d-none");
  }
}

function setSelected(currenSelect) {
  var currenCotent = currenSelect.querySelector(".select-content");
  var currenCotentItem = currenCotent.querySelectorAll(".select-item");
  currenCotentItem.forEach((clickItem) => {
    clickItem.onclick = function () {
      currenCotentItem.forEach(function (ele) {
        ele.classList.remove("active");
      });
      currenSelect.querySelector(".select-single").innerText = this.innerText;
      this.classList.add("active");
      hiddenPlaceholder(currenSelect);
    };
  });
}

function bsSelect() {
  var $selects = document.querySelectorAll(".bs-select");
  $selects.forEach((item) => {
    hiddenPlaceholder(item);
    setSelected(item);
  });
}

/*********************************/
/* call function block  */
/*********************************/

document.addEventListener("DOMContentLoaded", function () {
  bsSelect();
});

// $(function () {
//   $(".nav-link").on("click", function () {
//     if ($(window).width() < 992) {
//       $(".navbar-toggler").click();
//     }

//     $(".nav-link").removeClass("active");
//     $(this).addClass("active");
//   });

//   $(window).scroll(function () {
//     let documentScrollTop = $(document).scrollTop(); // 滾動條距離網頁頂部的高度
//     let bannerOffsetTop = $(".banner-sec").offset().top;
//     let banner = $(".banner-sec").height();
//     let mix0 = bannerOffsetTop + banner;
//     let aboutSecOffsetTop = $("#about-sec").offset().top;
//     let aboutSec = $("#about-sec").height();
//     let mix1 = aboutSecOffsetTop + aboutSec;
//     let coreSecOffsetTop = $("#core-sec").offset().top;
//     let coreSec = $("#core-sec").height();
//     let mix2 = coreSecOffsetTop + coreSec;
//     let recruitmentSecOffsetTop = $("#recruitment-sec").offset().top;
//     let recruitmentSec = $("#recruitment-sec").height();
//     let mix3 = recruitmentSecOffsetTop + recruitmentSec;
//     let candidateClickEmptyOffsetTop = $("#candidate-click-empty").offset().top;
//     let candidateClickEmpty = $("#candidate-click-empty").height();
//     let mix4 = candidateClickEmptyOffsetTop + candidateClickEmpty;
//     let contactSecOffsetTop = $("#contact-sec").offset().top;
//     let contactSec = $("#contact-sec").height();
//     let mix5 = contactSecOffsetTop + contactSec;

//     $(".nav-link").removeClass("active");

//     if (
//       Math.ceil(documentScrollTop) > mix0 - 300 &&
//       Math.ceil(documentScrollTop) <= mix2
//     ) {
//       $("#about").addClass("active");
//     } else if (
//       Math.ceil(documentScrollTop) > mix2 &&
//       Math.ceil(documentScrollTop) <= mix3
//     ) {
//       $("#recruitment").addClass("active");
//     } else if (
//       Math.ceil(documentScrollTop) > mix3 &&
//       Math.ceil(documentScrollTop) <= mix4 + 450
//     ) {
//       $("#candidate").addClass("active");
//     } else if (
//       Math.ceil(documentScrollTop) > mix4 + 300 &&
//       Math.ceil(documentScrollTop) <= mix5
//     ) {
//       $("#contact").addClass("active");
//     }
//   });
// });
