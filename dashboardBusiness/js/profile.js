var profile = ''
profile += `
<article class="clWhite borderRadiusStyle p-3 mb-3">
    <div class="flexDataCompany mb-3">
        <h6 class="fontSubHead">ข้อมูลบริษัท</h6>
        <div class="create"><a href="create_edit.html">สร้างข้อมูล/แก้ไข</a></div>
    </div>

    <div class="lineDashUrgent"></div>

    <div class="flexPic mb-3">
        <figure class="mb-3"><img src="images/logo.jpg" alt=""></figure>
        <h6 class="textRed text-center">JOBBKK Monitoring System</h6>
        <p class="text-center">เลขที่ 625 อาคารทัศนียา ห้องเลขที่ ยูนิต เอบีซีดี ชั้น 5 แขวงวงศ์สว่าง เขตบางซื่อ, กรุงเทพมหานคร 10470</p>
    </div>

    <div class="doProfile text-center"><a href="${path}dashboardBusiness/profile_company.html">ดูโปรไฟล์</a></div>
</article>`

document.getElementById('profile').innerHTML = profile