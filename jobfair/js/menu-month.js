$(document).ready(function(){
  function moveMarker() {
    var activeNav = $('.active a');
    var activewidth = $(activeNav).width();
    var activePadLeft = parseFloat($(activeNav).css('padding-left'));
    var activePadRight = parseFloat($(activeNav).css('padding-right'));
    var totalWidth = activewidth + activePadLeft + activePadRight;
    
    var precedingAnchorWidth = anchorWidthCounter();
    
    // TODO: 
    // ค้นหาความกว้างทั้งหมดของ anchor ทั้งหมดทางด้านซ้ายของตัวยึดที่ใช้งานอยู่

    var activeMarker = $('.active-marker');
    $(activeMarker).css('display','block');
    
    $(activeMarker).css('width', totalWidth);

    $(activeMarker).css('left', precedingAnchorWidth);
    
    // TODO: 
    // ใช้ความกว้างรวมที่คำนวณได้ของ anchors ก่อนหน้า
    // ตั้งค่าสำหรับทางซ้าย: css เป็นตัวเลขนั้นๆ
  }
  moveMarker();
  
  function anchorWidthCounter() {
    var anchorWidths = 0;
    var a;
    var aWidth;
    var aPadLeft;
    var aPadRight;
    var aTotalWidth;
    $('.main-nav li').each(function(index, elem) {
      var activeTest = $(elem).hasClass('active');
      if(activeTest) {
        // หยุดการทำงานของแต่ละฟังก์ชั่น.
        return false;
      }

      a = $(elem).find('a');
      aWidth = a.width();
      aPadLeft = parseFloat(a.css('padding-left'));
      aPadRight = parseFloat(a.css('padding-right'));
      aTotalWidth = aWidth + aPadLeft + aPadRight;

      anchorWidths = anchorWidths + aTotalWidth;
    });

    return anchorWidths;
  }
  
  $('.main-nav a').click(function(e) {
    e.preventDefault();
		$('.main-nav li').removeClass('active');
    $(this).parents('li').addClass('active');
    moveMarker();
  });
});