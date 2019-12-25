// Initial
// 우클릭, 선택, 드래그 금지
document.oncontextmenu = function() {
  return false;
}
document.onselectstart = function() {
  return false;
}
document.ondragstart = function() {
  return false;
}

// Navigation
// div.top_button : 일정 높이 이상 스크롤 시 top button 생성
$(document).ready(function() {
  $("div.top_button").hide();
  $(function() {
    $(window).scroll(function() {
      if($(this).scrollTop() > 100) {
        $("div.top_button").fadeIn();
      }
      else {
        $("div.top_button").fadeOut();
      }
    });
  });
});

// Section 3
// div.back-span, div.gallery-exterior, div.gallery-interior : 처음 화면에서 숨김
$(document).ready(function() {
  $("div.back-span").hide();
  $("div.gallery-exterior").hide();
  $("div.gallery-interior").hide();
});
// div.gallery-img : 클릭 시 해당 갤러리 화면에 출력 또는 숨김
function imgClick(imgNum) {
  var text = document.getElementById("gallery-text");
  if (imgNum == 0) {
    text.innerHTML = "Gallery";
    $("div.back-span").fadeOut();
    $("div.gallery-exterior").fadeOut();
    $("div.gallery-interior").fadeOut();
    $("div.price-main").fadeIn();
    $("div.gallery-main").fadeIn();
  }
  if (imgNum == 1) {
    text.innerHTML = "Exterior";
    $("div.price-main").fadeOut();
    $("div.gallery-main").fadeOut();
    $("div.back-span").fadeIn();
    $("div.gallery-exterior").fadeIn();
  }
  else if (imgNum == 2) {
    text.innerHTML = "Interior"
    $("div.price-main").fadeOut();
    $("div.gallery-main").fadeOut();
    $("div.back-span").fadeIn();
    $("div.gallery-interior").fadeIn();
  }
}

// Section 4
// input#input-number : 한글 입력 불가능
function noKorean(obj) {
  obj.value = obj.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}
// input#input-number : 자동 "-" 삽입
function inputPhoneNumber(obj) {
  var number = obj.value.replace(/[^0-9]/g, "");
  var phone = "";

  if(number.length < 4) {
    return number;
  }
  else if(number.length < 7) {
    phone += number.substr(0, 3);
    phone += "-";
    phone += number.substr(3);
  }
  else if(number.length < 11) {
    phone += number.substr(0, 3);
    phone += "-";
    phone += number.substr(3, 3);
    phone += "-";
    phone += number.substr(6);
  }
  else {
    phone += number.substr(0, 3);
    phone += "-";
    phone += number.substr(3, 4);
    phone += "-";
    phone += number.substr(7);
  }
  obj.value = phone;
}
// form : submit 클릭 시 alert 출력
function submitCheck() {
  var name = $("#input-name").val();
  var email = $("#input-email").val();
  var number = $("#input-number").val();
  var text = $("#input-text").val();
  if((name == "") || (email == "") || (number == "") || (text == "")) {
    return false;
  }
  var result = confirm("이대로 전송하시겠습니까?");
  if(result) {
    alert("전송되었습니다.");
    return true;
  }
  return false;
}
