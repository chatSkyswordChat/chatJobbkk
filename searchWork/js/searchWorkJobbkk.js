var gridUrgentRec = "";

// งานด่วนแนะนำสำหรับคุณ
let workUrgents = [
  {
    name: "บริษัท ยูชิ กรุ๊ป จำกัด",
    position: "Sales (ขายงานระบบ)",
    img: "images/logo1.jpg",
    time: "56นาที ที่แล้ว",
    area: "ปทุมธานี (ทุกเขต/อำเภอ)",
    money: "ตามตกลง",
    save: '<i class="fas fa-heart"></i>',
    status: "ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ",
    transport: "MRT ลาดพร้าว / BTS สะพานควาย",
  },
  {
    name: "พีแอลที อิมเม็กซ์",
    position: "พนักงานขายพื้นไม้ และ Hotel Lock",
    img: "images/logo2.jpg",
    time: "56นาที ที่แล้ว",
    area: "ปทุมธานี (ทุกเขต/อำเภอ)",
    money: "ตามตกลง",
    save: '<i class="fas fa-heart"></i>',
    status: "ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ",
    transport: "MRT ลาดพร้าว / BTS สะพานควาย",
  },
  {
    name: "บริษัท ควิกเซิร์ฟ โปรไวเดอร์ จำกัด",
    position: "Project Sales",
    img: "images/logo3.jpg",
    time: "56นาที ที่แล้ว",
    area: "ปทุมธานี (ทุกเขต/อำเภอ)",
    money: "ตามตกลง",
    save: '<i class="fas fa-heart"></i>',
    status: "ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ",
    transport: "MRT ลาดพร้าว / BTS สะพานควาย",
  },
  {
    name: "บริษัท ไทย สเตมไลฟ์ จำกัด",
    position: "Customer Representative / เจ้าหน้าที่ขาย (กรุงเทพ)",
    img: "images/logo4.jpg",
    time: "56นาที ที่แล้ว",
    area: "ปทุมธานี (ทุกเขต/อำเภอ)",
    money: "ตามตกลง",
    save: '<i class="fas fa-heart"></i>',
    status: "ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ",
    transport: "MRT ลาดพร้าว / BTS สะพานควาย",
  },
];
workUrgents.forEach((workUrgent) => {
  gridUrgentRec += `
  <div class="workUrgent">
    <a href="javascript:void(0)" onclick="link()">
      <div class="flexPic mb-3">
          <figure><img src="${workUrgent.img}" alt=""></figure>
          <span class="textSky fontSubText"><i class="far fa-clock"></i> ${workUrgent.time}</span>
      </div>
      <h6 class="textRed fontText workEllipsis">${workUrgent.position}</h6>
      <p class="workEllipsis font-weight-bold">${workUrgent.name}</p>
      <p class="workEllipsis"><span class="font-weight-bold">สถานที่ปฏิบัติงาน :</span> 
          ${workUrgent.area}</p>
      <p class="workEllipsis"><span class="font-weight-bold">เงินเดือน(บาท) :</span> 
          ${workUrgent.money}
      </p>
    </a>                           
  </div>`;
});
// end งานด่วนแนะนำสำหรับคุณ

document.getElementsByClassName("gridUrgentRec")[0].innerHTML = gridUrgentRec;

var gridListWork = "";

// left
let urgents = [
  {
    name: "บริษัท ยูชิ กรุ๊ป จำกัด",
    position: "Sales (ขายงานระบบ)",
    img: "images/logo1.jpg",
    time: "56นาที ที่แล้ว",
    area: "ปทุมธานี (ทุกเขต/อำเภอ)",
    money: "ตามตกลง",
    status: "ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ",
    transport: "MRT ลาดพร้าว / BTS สะพานควาย",
    active: "",
  },
  {
    name: "พีแอลที อิมเม็กซ์",
    position: "พนักงานขายพื้นไม้ และ Hotel Lock",
    img: "images/logo2.jpg",
    time: "56นาที ที่แล้ว",
    area: "ปทุมธานี (ทุกเขต/อำเภอ)",
    money: "ตามตกลง",
    status: "ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ",
    transport: "MRT ลาดพร้าว / BTS สะพานควาย",
    active: "active",
  },
  {
    name: "บริษัท ควิกเซิร์ฟ โปรไวเดอร์ จำกัด",
    position: "Project Sales",
    img: "images/logo3.jpg",
    time: "56นาที ที่แล้ว",
    area: "ปทุมธานี (ทุกเขต/อำเภอ)",
    money: "ตามตกลง",
    status: "ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ",
    transport: "MRT ลาดพร้าว / BTS สะพานควาย",
    active: "active",
  },
  {
    name: "บริษัท ไทย สเตมไลฟ์ จำกัด",
    position: "Customer Representative / เจ้าหน้าที่ขาย (กรุงเทพ)",
    img: "images/logo4.jpg",
    time: "56นาที ที่แล้ว",
    area: "ปทุมธานี (ทุกเขต/อำเภอ)",
    money: "ตามตกลง",
    status: "ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ",
    transport: "MRT ลาดพร้าว / BTS สะพานควาย",
    active: "active",
  },
  {
    name: "บริษัท ยูชิ กรุ๊ป จำกัด",
    position: "Sales (ขายงานระบบ)",
    img: "images/logo1.jpg",
    time: "56นาที ที่แล้ว",
    area: "ปทุมธานี (ทุกเขต/อำเภอ)",
    money: "ตามตกลง",
    status: "ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ",
    transport: "MRT ลาดพร้าว / BTS สะพานควาย",
    active: "active",
  },
  {
    name: "พีแอลที อิมเม็กซ์",
    position: "พนักงานขายพื้นไม้ และ Hotel Lock",
    img: "images/logo2.jpg",
    time: "56นาที ที่แล้ว",
    area: "ปทุมธานี (ทุกเขต/อำเภอ)",
    money: "ตามตกลง",
    status: "ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ",
    transport: "MRT ลาดพร้าว / BTS สะพานควาย",
    active: "active",
  },
  {
    name: "บริษัท ควิกเซิร์ฟ โปรไวเดอร์ จำกัด",
    position: "Project Sales",
    img: "images/logo3.jpg",
    time: "56นาที ที่แล้ว",
    area: "ปทุมธานี (ทุกเขต/อำเภอ)",
    money: "ตามตกลง",
    status: "ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ",
    transport: "MRT ลาดพร้าว / BTS สะพานควาย",
    active: "",
  },
  {
    name: "บริษัท ไทย สเตมไลฟ์ จำกัด",
    position: "Customer Representative / เจ้าหน้าที่ขาย (กรุงเทพ)",
    img: "images/logo4.jpg",
    time: "56นาที ที่แล้ว",
    area: "ปทุมธานี (ทุกเขต/อำเภอ)",
    money: "ตามตกลง",
    status: "ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ",
    transport: "MRT ลาดพร้าว / BTS สะพานควาย",
    active: "",
  },
  {
    name: "บริษัท ยูชิ กรุ๊ป จำกัด",
    position: "Sales (ขายงานระบบ)",
    img: "images/logo1.jpg",
    time: "56นาที ที่แล้ว",
    area: "ปทุมธานี (ทุกเขต/อำเภอ)",
    money: "ตามตกลง",
    status: "ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ",
    transport: "MRT ลาดพร้าว / BTS สะพานควาย",
    active: "active",
  },
  {
    name: "พีแอลที อิมเม็กซ์",
    position: "พนักงานขายพื้นไม้ และ Hotel Lock",
    img: "images/logo2.jpg",
    time: "56นาที ที่แล้ว",
    area: "ปทุมธานี (ทุกเขต/อำเภอ)",
    money: "ตามตกลง",
    status: "ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ",
    transport: "MRT ลาดพร้าว / BTS สะพานควาย",
    active: "",
  },
  {
    name: "บริษัท ควิกเซิร์ฟ โปรไวเดอร์ จำกัด",
    position: "Project Sales",
    img: "images/logo3.jpg",
    time: "56นาที ที่แล้ว",
    area: "ปทุมธานี (ทุกเขต/อำเภอ)",
    money: "ตามตกลง",
    status: "ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ",
    transport: "MRT ลาดพร้าว / BTS สะพานควาย",
    active: "active",
  },
  {
    name: "บริษัท ไทย สเตมไลฟ์ จำกัด",
    position:
      "Customer Representative / เจ้าหน้าที่ขาย (กรุงเทพ) Customer Representative / เจ้าหน้าที่ขาย (กรุงเทพ) Customer Representative / เจ้าหน้าที่ขาย (กรุงเทพ)",
    img: "images/logo4.jpg",
    time: "56นาที ที่แล้ว",
    area: "ปทุมธานี (ทุกเขต/อำเภอ)",
    money: "ตามตกลง",
    save: '<i class="far fa-heart"></i>',
    status: "ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ",
    transport: "MRT ลาดพร้าว / BTS สะพานควาย",
    active: "",
  },
];

gridListWork += `<article class="flexListWork">`;
urgents.forEach((urgent, banner) => {
  gridListWork += `
  <div class="workUrgent mb-3">
    <article>
      <div class="flexPic mb-2">
        <figure>
          <a href="javascript:void(0)" onclick="link()"><img src="${
            urgent.img
          }" alt=""></a>
        </figure>
        <div class="flexIn">
            <div>
                <h6 class="fontText workEllipsis linkLink"><a class="textRed "
                href="javascript:void(0)" onclick="link()">${
                  urgent.position
                }</a></h6>
                <p class="workEllipsis font-weight-bold">${urgent.name}</p>
                <p class="workEllipsis"><span class="font-weight-bold">สถานที่ปฏิบัติงาน :</span> 
                    ${urgent.area}</p>
                <p class="workEllipsis"><span class="font-weight-bold">เงินเดือน(บาท) :</span> 
                    ${urgent.money}</p>
            </div>
            <div class="flexTimeWork">
                <span class="textSky"><i class="far fa-clock"></i> ${
                  urgent.time
                }</span>
            </div>
        </div>
      </div>

      <div class="gridUnder">
        <div class="step1">
            <p>${urgent.status}</p>
            <p>${urgent.transport}</p>
        </div>
        <div class="btnApply">
            <button type="button" class="share"><i class="fas fa-share-alt"></i> แชร์</button>
            <button type="button" class="save"><i class="fas fa-bookmark"></i> บันทึก</button>
            <button type="button" class="apply" data-toggle="modal" data-target="#apply"><i class="fas fa-check-circle"></i> สมัครงาน</button>
        </div>
      </div>

      ${/* modal สมัครงาน มีเรซูเม่ */ ""}
      <div class="modal fade" id="apply" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modalDialog">
          <div class="modal-content" style="max-width: 76.8rem; margin: 0 auto">
            <div class="modal-header">
              <div class="flexHeadModal">
                <h2 class="fontSubHead textWhite lineH">สมัครงาน</h2>
              </div>
              <button type="button" class="close fontSuperHead textWhite" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fas fa-times-circle"></i></span>
              </button>
            </div>

            <div class="modal-body">
              <p class="text-center mb-4">
                กรุณากดปุ่ม <span class="textRed">ยืนยัน</span> เพื่อสมัครตำแหน่งงานที่คุณต้องการค่ะ 
                แต่หากคุณต้องการสร้างเรซูเม่ใหม่หรือยังไม่ได้ออนไลน์เรซูเม่ในการสมัครตำแหน่งงาน 
                ให้กดปุ่ม <span class="textRed">สร้างเรซูเม่</span> ค่ะ
              </p>

              <table class="table table-bordered table-striped tableResume mb-4">
                <thead>
                  <tr>
                    <th></th>
                    <th>ใบสมัครงาน</th>
                    <th>วันที่สร้าง</th>
                    <th>วันที่อัพเดท</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td data-label=""><input type="radio" name="resume"></td>
                    <td data-label="ใบสมัครงาน">test_reusme_premium test_reusme_premium test_reusme_premium</td>
                    <td data-label="วันที่สร้าง">09 ก.ค. 2564</td>
                    <td data-label="วันที่อัพเดท">17 ส.ค. 2564</td>
                  </tr>
                  <tr>
                    <td data-label=""><input type="radio" name="resume"></td>
                    <td data-label="ใบสมัครงาน">test_reusme_urgent</td>
                    <td data-label="วันที่สร้าง">09 ก.ค. 2564</td>
                    <td data-label="วันที่อัพเดท">17 ส.ค. 2564</td>
                  </tr>
                </tbody>
              </table>

              <div class="createCopyResume">
                <div>
                  <a href="../dashboardJobSeeker/allResume.html">สร้างเรซูเม่</a>
                </div>

                <div>
                  <label><input type="checkbox" /> ส่งสำเนาเข้าอีเมลของฉัน</label>
                </div>
              </div>

              <div class="lineDashUrgent"></div>

              <p class="text-center detailText">เมื่อคุณคลิก <span class="textRed">"ยืนยัน"</span> จะเป็นการยืนยันว่า 
                ข้อมูลส่วนตัวของคุณทั้งที่อยู่ในใบสมัครงานและในโปรไฟล์จะสามารถเข้าถึงได้โดยบริษัท 
                <span class="textRed">บริษัท อีท แอม อา กรุ๊ป จำกัด</span> และทางเว็บไซต์ 
                โดยการใช้งานจะเป็นไปตามนโยบายข้อมูลส่วนบุคคลที่ระบุอยู่ใน 
                <a href="https://www.jobbkk.com/policy" target="_blank">คำชี้แจงสิทธิส่วนบุคคล</a>
              </p>

              <div class="lineDashUrgent"></div>

              <p class="text-center detailText">
                ใบสมัครงานของคุณจะถูกส่งตรงไปยัง <span class="textRed">บริษัท อีท แอม อา กรุ๊ป จำกัด</span> 
                <b>โปรดระวังประกาศงานเท็จเพื่อเรียกเก็บเงินจากคุณโดยมิชอบด้วยกฎหมาย</b>  ผู้ประกอบการไม่ควรขอให้คุณชำระเงินเพื่อสมัครงาน 
                ดังนั้น โปรดอย่าให้รายละเอียดบัญชีธนาคารหรือบัตรเครดิตของคุณกับผู้ประกอบการใด ๆ โดยเด็ดขาด 
                การลงประกาศงานเท็จเป็นการฝ่าฝืนเงื่อนไขการใช้งานของ <span class="textRed">JOBBKK</span> หากพบเห็นประกาศงานลักษณะดังกล่าว 
                โปรดแจ้งมาที่ 
                <a href="" target="_blank">sales@jobbkk.com</a>
              </p>
            </div>

            <div class="modal-footer flexCenter">
              <button type="button" class="btn_red" data-dismiss="modal">ยืนยัน</button>
              <button type="button" class="btn_white" data-dismiss="modal">ยกเลิก</button>
            </div>
          </div>      
        </div>    
      </div>
      ${/* end modal สมัครงาน มีเรซูเม่ */ ""}

      ${/* modal สมัครงาน ไม่มีเรซูเม่ */ ""}
      <div class="modal fade" id="applyNoResume" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modalDialog">
          <div class="modal-content" style="max-width: 76.8rem; margin: 0 auto">
            <div class="modal-header">
              <div class="flexHeadModal">
                <h2 class="fontSubHead textWhite lineH">สมัครงาน</h2>
              </div>
              <button type="button" class="close fontSuperHead textWhite" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true"><i class="fas fa-times-circle"></i></span>
              </button>
            </div>

            <div class="modal-body">
              <p class="text-center mb-4">
                คุณยังไม่มีเรซูเม่หรือยังไม่ได้ออนไลน์เรซูเม่ในการสมัครตำแหน่งงาน 
                ให้กดปุ่ม <span class="textRed">สร้างเรซูเม่ / แก้ไขเรซูเม่</span> ค่ะ
              </p>

              <div class="noResume">
                <div>
                  <a href="../dashboardJobSeeker/allResume.html">สร้างเรซูเม่ / แก้ไขเรซูเม่</a>
                </div>
              </div>
            </div>

            <div class="modal-footer flexCenter">
              <button type="button" class="btn_white" data-dismiss="modal">ยกเลิก</button>
            </div>
          </div>      
        </div>    
      </div>
      ${/* end modal สมัครงาน ไม่มีเรซูเม่ */ ""}
  </article>
</div>`;

  if (banner % 5 == 4) {
    gridListWork += `
    <div class="mb-3"><figure class="borderStyle">
      <a href="javascript:void(0)" onclick="link()"><img src="images/js.gif" alt=""/></a></figure>
    </div>`;
  }
});

// pagination
gridListWork += `
<nav aria-label="Page navigation example">
  <ul class="pagination flexPagination mb-3">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link active" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>`;
// end pagination

gridListWork += `</article>`;
// end left

// right
gridListWork += `<article>`;
// banner
gridListWork += `<div class="bannerUrgent">
                  <figure class="borderStyle mb-3"><a href="javascript:void(0)" onclick="link()">
                    <img src="images/bn.jpg" alt=""></a>
                  </figure>
                </div>`;
// end banner

// สาขาอาชีพยอดนิยม
gridListWork += `<div class="careerHit clLightGray p-3">
                                <h2 class="fontSubHead">10 สาขาอาชีพยอดนิยม</h2>
                                <div class="lineDashUrgent"></div>`;
gridListWork += `<ul>`;
let careerHits = [
  "1. งานขาย",
  "2. ไอที",
  "3. วิศวกรรม",
  "4. Call Center",
  "5. งานขาย",
  "6. ไอที",
  "7. วิศวกรรม",
  "8. Call Center",
  "9. งานขาย",
  "10. ไอที",
];
for (let careerHit = 0; careerHit < careerHits.length; careerHit++) {
  gridListWork += `<li><a href="javascript:void(0)" onclick="link()" 
                                    class="textBlackGray">${careerHits[careerHit]}
                                    <span class="textRed">(409,567)</span> ตำแหน่ง</a></li>`;
}
gridListWork += `<li><a href="javascript:void(0)" onclick="link()" 
                                    class="textBlackGray font-weight-bold">สาขาอาชีพยอดนิยมทั้งหมด
                                    </a></li>`;
gridListWork += `</ul>`;
gridListWork += `</div>`;
// end สาขาอาชีพยอดนิยม

// Tag
gridListWork += `
<div class="tagHit clLightGray p-3">
  <h2 class="fontSubHead">Tag</h2>
  <div class="lineDashUrgent"></div>
  <ul>
    <li><a href="javascript:void(0)" class="textBlackGray">ค้นหางาน</a></li>
    <li><a href="javascript:void(0)" class="textBlackGray">สาขาอาชีพ</a></li>
    <li><a href="javascript:void(0)" class="textBlackGray">งานด่วน</a></li>
    <li><a href="javascript:void(0)" class="textBlackGray">การตลาด</a></li>
    <li><a href="javascript:void(0)" class="textBlackGray">ผู้จัดการ</a></li>                                    
  </ul>
</div>`;
// end Tag
gridListWork += `</article>`;
// end right

document.getElementsByClassName("gridListWork")[0].innerHTML = gridListWork;

// ตัดคำ
$(".workEllipsis").dotdotdot({
  height: 48,
  fallbackToLetter: true,
  watch: true,
});

// tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// share
$(".share").on("click", function () {
  $(".tooltip").removeClass("show");
  swal.fire({
    title: "คุณต้องการที่จะแชร์ตำแหน่งงานใช่ไหม ?",
    icon: "info",
    showCancelButton: true,
    showConfirmButton: false,
    cancelButtonText: "ยกเลิก",
    html: `<ul class="socialShare">
                <li><a href="#" class="fb" data-toggle="tooltip" data-placement="bottom" title="คัดลอกลิงค์ facebook"></a></li>
                <li><a href="#" class="tw" data-toggle="tooltip" data-placement="bottom" title="คัดลอกลิงค์ twister"></a></li>
                <li><a href="#" class="line" data-toggle="tooltip" data-placement="bottom" title="คัดลอกลิงค์ line"></a></li>
                <li><a href="#" class="link" data-toggle="tooltip" data-placement="bottom" title="คัดลอกลิงค์"></a></li>
            </ul>`,
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
});
// end share

// บันทึกงาน
$(".save").on("click", function () {
  // $(".tooltip").removeClass("show");
  Swal.fire({
    title: "คุณบันทึกงานสำเร็จแล้ว",
    icon: "success",
    showConfirmButton: true,
    confirmButtonColor: "#d40101",
  });

  $(this).addClass("active");
});
// end บันทึกงาน
