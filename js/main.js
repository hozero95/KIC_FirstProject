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
