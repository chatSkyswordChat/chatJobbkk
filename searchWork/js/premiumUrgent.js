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
  gridUrgentRec += `<div class="workUrgent">
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
gridListWork += `<article class="flexListWork">`;
let urgents = [
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
    active: 'active'
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
    active: 'active'
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
    active: 'active'
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
    active: 'active'
  },
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
    active: 'active'
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
    active: 'active'
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
    active: ''
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
    active: ''
  },
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
    active: 'active'
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
    active: ''
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
    active: 'active'
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
    active: ''
  },
];
urgents.forEach((urgent, banner) => {
  gridListWork += `<div class="workUrgent mb-3">
                                    <article>
                                        <div class="flexPic mb-2">
                                            <figure>
                                              <a href="javascript:void(0)" onclick="link()"><img src="${urgent.img}" alt=""></a>
                                            </figure>
                                            <div class="flexIn">
                                                <div>
                                                    <h6 class="fontText workEllipsis linkLink"><a class="textRed "
                                                    href="javascript:void(0)" onclick="link()">${urgent.position}</a></h6>
                                                    <p class="workEllipsis font-weight-bold">${urgent.name}</p>
                                                    <p class="workEllipsis"><span class="font-weight-bold">สถานที่ปฏิบัติงาน :</span> 
                                                        ${urgent.area}</p>
                                                    <p class="workEllipsis"><span class="font-weight-bold">เงินเดือน(บาท) :</span> 
                                                        ${urgent.money}</p>
                                                </div>
                                                <div>
                                                    <span class="saveWork">
                                                        <button class="saveHeart ${urgent.active}" data-toggle="tooltip"
                                                            data-placement="bottom" title="บันทึกงานไว้ดูภายหลัง">
                                                            ${urgent.save}
                                                        </button>
                                                    </span>
                                                    <span class="textSky"><i class="far fa-clock"></i> ${urgent.time}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="gridUnder">
                                            <div class="step1">
                                                <p>${urgent.status}</p>
                                                <p>${urgent.transport}</p>
                                            </div>
                                            <div class="step2">
                                                <a href="javascript:void(0)" onclick="link()">อ่านรายละเอียดงาน</a>
                                            </div>
                                        </div>
                                    </article>
                                </div>`;
  if (banner % 5 == 4) {
    gridListWork += `<div class="mb-3"><figure class="borderStyle">
                            <a href="javascript:void(0)" onclick="link()"><img src="images/js.gif" alt=""/></a></figure>
                        </div>`;
  }
});

// pagination
gridListWork += `<nav aria-label="Page navigation example">
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

// คลิกปุ่มต้องการงานด่วน
gridListWork += `<div class="popUpUrgent mb-3">
                                <h2 class="fontText mb-2 font-weight-bold">คุณกำลังต้องการงานด่วนใช่ไหม</h2>
                                <button class="clGreen modalUrgent mb-2">
                                    <h6>คลิกปุ่มต้องการงานด่วน</h6>
                                </button>
                                <p class="fontSubText"><span class="textRed">*เพิ่มโอกาสในการได้งาน </span>ด้วย
                                    <span class="textRed">ปุ่มต้องการงานด่วน
                                    </span>ที่จะช่วยให้ผู้ประกอบการคัดเลือกเรซูเม่ของคุณ และทราบถึงความพร้อมในการ
                                        สมัคร สัมภาษณ์ และเริ่มงานได้ทันทีของคุณ</p>
                            </div>`;
// end คลิกปุ่มต้องการงานด่วน

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
gridListWork += `<div class="tagHit clLightGray p-3">
                                <h2 class="fontSubHead">Tag</h2>
                                <div class="lineDashUrgent"></div>
                                <ul>
                                    <li><a href="javascript:void(0)" onclick="link()" class="textBlackGray">ค้นหางาน</a></li>
                                    <li><a href="javascript:void(0)" onclick="link()" class="textBlackGray">สาขาอาชีพ</a></li>
                                    <li><a href="javascript:void(0)" onclick="link()" class="textBlackGray">งานด่วน</a></li>
                                    <li><a href="javascript:void(0)" onclick="link()" class="textBlackGray">การตลาด</a></li>
                                    <li><a href="javascript:void(0)" onclick="link()" class="textBlackGray">ผู้จัดการ</a></li>
                                </ul>
                            </div>`;
// end Tag
gridListWork += `</article>`;
// end right

document.getElementsByClassName("gridListWork")[0].innerHTML = gridListWork;

// บันทึกงาน
$(".saveHeart").on("click", function () {
  $('.tooltip').removeClass('show')

  Swal.fire({
    title: "คุณบันทึกงานสำเร็จแล้ว",
    icon: "success",
    showConfirmButton: true,
    confirmButtonColor: "#d40101",
  });
});
// end บันทึกงาน

// ต้องการงานด่วน
$(".modalUrgent").on("click", function () {
  swal.fire({
    title: "คุณต้องการงานด่วนภายในกี่วัน",
    icon: "info",
    showCancelButton: true,
    showConfirmButton: true,
    cancelButtonText: "ยกเลิก",
    confirmButtonText: "ตกลง",
    // showClass: {
    //   popup: "animated fadeInDown faster",
    // },
    // hideClass: {
    //   popup: "animated fadeOutUp faster",
    // },
    html: `
        <div class="flexCheck">
            <div class="form-check">
                <label class="form-check-label formCheckLabel">
                    <input class="form-check-input formCheckInput" type="radio" value="1" name="1" id="checkbox1"> 7 วัน
                </label>
            </div>
            <div class="form-check">
                <label class="form-check-label formCheckLabel">
                    <input class="form-check-input formCheckInput" type="radio" value="1" name="1" id="checkbox1"> 15 วัน
                </label>
            </div>
            <div class="form-check">
                <label class="form-check-label formCheckLabel">
                    <input class="form-check-input formCheckInput" type="radio" value="1" name="1" id="checkbox1"> 30 วัน
                </label>
            </div>
            <div class="form-check">
                <label class="form-check-label formCheckLabel">
                    <input class="form-check-input formCheckInput" type="radio" value="1" name="1" id="checkbox1"> มากกว่า 30 วัน
                </label>
            </div>
        </div>`,
  });
});
// end ต้องการงานด่วน

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
