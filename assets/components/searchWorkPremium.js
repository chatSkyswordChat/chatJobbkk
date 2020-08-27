var searchWorkPremium = "";

searchWorkPremium += `<div class="container mb-5">`;
searchWorkPremium += `<div class="row">`;
searchWorkPremium += `<section class="col-12">`;
searchWorkPremium += `<div class="searchWorkPremium py-3 mt-4">`;
searchWorkPremium += `<h2 class="fontSubHead">คุณกำลังต้องการงานด่วน ใช่ไหม!
                                <button class="clRed urgentButton modalUrgent" href="javascript:void(0)">คลิก ปุ่มต้องการงานด่วน</button></h2>`;

searchWorkPremium += `<h6 class="fontSubText"><span class="textRed">*เพิ่มโอกาสในการได้งาน</span> ด้วย
                                <span class="textRed">ปุ่มต้องการงานด่วน</span> 
                                ที่ช่วยให้ผู้ประกอบการคัดเลือกเรซูเม่ของคุณ และทราบถึงความพร้อมในการ สมัคร
                                สัมภาษณ์ และเริ่มงานได้ทันทีของคุณ</h6>`;
searchWorkPremium += `</div>`;

searchWorkPremium += `<div class="lineDash"></div>`;

// ค้นหาจากตัวกรองข้อมูล ค้นหาจากการพิมพ์
searchWorkPremium += `<section>`

// ปุ่ม ค้นหาจากตัวกรองข้อมูล ค้นหาจากการพิมพ์
searchWorkPremium += `<article class="btnList mb-3" id="btnList">
    <div><button class="btn btnTab active" onclick="searchFilter()">ค้นหาจากตัวกรองข้อมูล</button></div>
    <div><button class="btn btnTab" onclick="searchPim()">ค้นหาจากการพิมพ์</button></div>
  </article>`
// end ปุ่ม ค้นหาจากตัวกรองข้อมูล ค้นหาจากการพิมพ์

// เริ่มการค้นหาจากตัวกรองข้อมูล
searchWorkPremium += `<div class="dataFilter mb-5" id="selectFilter">`;
searchWorkPremium += `<h2 class="fontSubHead textRed mb-3">เริ่มการค้นหาจากตัวกรองข้อมูล</h2>`;
searchWorkPremium += `<section class="hiddenText">`;
searchWorkPremium += `<h6 class="mb-3 fontText font-weight-bold">ตำแหน่งงานยอดนิยม</h6>`;

let linkPositionHit = (location.href.split("/").length == 5) ? "" : "../";
let positionHits = [
  "พนักงานขาย",
  "Sale Engineer",
  "Digital Marketing",
  "Programmer",
  "Call Center",
  "AE",
  "เจ้าหน้าที่บัญชีต้นทุน",
];
searchWorkPremium += `<ul class="flexPositionHit mb-3">`;
for (let hit = 0; hit < positionHits.length; hit++) {
  searchWorkPremium += `<li class="mr-2 mb-2 fontSubText">
                    <a href="${linkPositionHit}index.html" onclick="link()">${positionHits[hit]}</a></li>`;
}
searchWorkPremium += `</ul>`;
searchWorkPremium += `</section>`;

searchWorkPremium += `<section class="gridFilter">`;
// เลือกสาขาอาชีพ
searchWorkPremium += `<div class="dropdown dropdownFilter">`;
searchWorkPremium += `<button class="form-control formControl buttonFilter" type="button" 
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`;
searchWorkPremium += `<span class="searchEllipsis"><i class="fas fa-briefcase"></i> เลือกสาขาอาชีพ</span>`;
searchWorkPremium += `<i class="fas fa-chevron-down"></i>`;
searchWorkPremium += `</button>`;

searchWorkPremium += `<div class="dropdown-menu dropDownScroll">`;
searchWorkPremium += `<article class="accordion" id="accordionExample">`;

let id = 0;
let careers = [
  {
    name: "Part-time / พนักงานสัญญาจ้าง",
    collapes: [
      "นักศึกษาฝึกงาน",
      "พนักงาน part-time",
      "พนักงานสัญญาจ้าง",
      "สหกิจศึกษา",
    ],
  },
  {
    name: "กฎหมาย",
    collapes: ["กฎหมาย อื่นๆ", "ทนายความ", "ที่ปรึกษาด้านกฎหมาย", "นักกฎหมาย"],
  },
  {
    name: "ก่อสร้าง",
    collapes: [
      "ก่อสร้าง ควบคุมอาคาร",
      "ก่อสร้างอื่นๆ",
      "ช่าง/คนงานทั่วไป",
      "ตรวจสอบอาคาร/สำรวจ",
    ],
  },
];

careers.forEach((career) => {
  searchWorkPremium += `<section>`;
  searchWorkPremium += `<button class="btn btn-link btn-block text-left flexPositionPre"
                                    type="button" data-toggle="collapse" data-target="#colCareer${
    id + 1
    }" aria-expanded="true"
                                    aria-controls="colCareer${id + 1}">`;
  searchWorkPremium += `<span>${career.name}</span>`;
  searchWorkPremium += `<i class="fas fa-chevron-down"></i>`;
  searchWorkPremium += `</button>`;

  searchWorkPremium += `<div id="colCareer${
    id + 1
    }" class="collapse" aria-labelledby="heading${id + 1}" 
                                    data-parent="#accordionExample">`;
  searchWorkPremium += ` <div class="card-body p-3">`;
  searchWorkPremium += `<div class="allWorkList">`;
  searchWorkPremium += `<label><input type="checkbox"> ทั้งหมด</label> <button>ตกลง</button>`;
  searchWorkPremium += `</div>`;

  searchWorkPremium += `<div class="lineDashUrgent"></div>`;

  if (career.collapes != null && career.collapes != "") {
    searchWorkPremium += `<ul>`;
    for (let collape = 0; collape < career.collapes.length; collape++) {
      searchWorkPremium += `<li><label><input type="checkbox"> ${career.collapes[collape]}</label></li>`;
    }
    searchWorkPremium += `</ul>`;
  }
  searchWorkPremium += `</div>`;
  searchWorkPremium += `</div>`;
  searchWorkPremium += `</section>`;
  id += 1;
});
searchWorkPremium += `</article>`;
searchWorkPremium += `</div>`;
searchWorkPremium += `</div>`;
// end เลือกสาขาอาชีพ

// เลือกสถานที่ทำงาน
searchWorkPremium += `<div class="dropdown dropdownFilter">`;
searchWorkPremium += `<button class="form-control formControl buttonFilter" type="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`;
searchWorkPremium += `<span class="searchEllipsis"><i class="fas fa-map-marked-alt"></i> เลือกสถานที่ทำงาน</span>`;
searchWorkPremium += `<i class="fas fa-chevron-down"></i>`;
searchWorkPremium += `</button>`;

searchWorkPremium += `<div class="dropdown-menu dropDownScroll">`;
searchWorkPremium += `<article class="accordion" id="accordionExample1">`;

let ids = 0;
let areas = [
  {
    name: "กรุงเทพมหานคร",
    collapes: ["รามคำแหง", "ลาดพร้าว", "รัชดา", "พระราม9"],
  },
  {
    name: "เชียงใหม่",
    collapes: ["ม่อนแจ่ม", "ม่อนอิงดาว", "ม่อนเหนือ", "ม่อนใต้"],
  },
  {
    name: "กาญจนบุรี",
    collapes: ["สังขละบุรี", "ทองผาภูมิ", "ไทรโยค", "ปิล็อค"],
  },
];
areas.forEach((area) => {
  searchWorkPremium += `<section>`;
  searchWorkPremium += `<button class="btn btn-link btn-block text-left flexPositionPre" type="button" 
                                data-toggle="collapse" data-target="#colArea${
    ids + 1
    }" aria-expanded="true" aria-controls="colArea${
    ids + 1
    }">`;
  searchWorkPremium += `<span>${area.name}</span>`;
  searchWorkPremium += `<i class="fas fa-chevron-down"></i>`;
  searchWorkPremium += `</button>`;

  searchWorkPremium += `<div id="colArea${
    ids + 1
    }" class="collapse" aria-labelledby="heading${ids + 1}"
                                                    data-parent="#accordionExample1">`;
  searchWorkPremium += `<div class="card-body p-3">`;
  searchWorkPremium += `<div class="allWorkList">`;
  searchWorkPremium += `<label><input type="checkbox"> ทั้งหมด</label><button>ตกลง</button>`;
  searchWorkPremium += `</div>`;

  searchWorkPremium += `<div class="lineDashUrgent"></div>`;

  if (area.collapes != null && area.collapes != "") searchWorkPremium += `<ul>`;
  for (let collape = 0; collape < area.collapes.length; collape++) {
    searchWorkPremium += `<li><label><input type="checkbox"> ${area.collapes[collape]}</label></li>`;
  }
  searchWorkPremium += `</div>`;
  searchWorkPremium += `</div>`;
  searchWorkPremium += `</section>`;
  ids += 1;
});
searchWorkPremium += `</article>`;
searchWorkPremium += `</div>`;
searchWorkPremium += `</div>`;
// end เลือกสถานที่ทำงาน

// เลือกระดับการทำงาน
searchWorkPremium += `<div class="dropdown dropdownFilter">`;
searchWorkPremium += `<button class="form-control formControl buttonFilter" type="button"
                    data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">`;
searchWorkPremium += `<span class="searchEllipsis"><i class="fas fa-layer-group"></i>
                        เลือกระดับการทำงาน</span>`;
searchWorkPremium += `<i class="fas fa-chevron-down"></i>`;
searchWorkPremium += `</button>`;

let positions = [
  "ระดับหัวหน้างาน",
  "ระดับเจ้าหน้าที่",
  "ระดับผู้บริหาร",
  "ระดับหัวหน้าแผนก",
];
searchWorkPremium += `<div class="dropdown-menu dropDownMenu">`;
for (let position = 0; position < positions.length; position++) {
  searchWorkPremium += `<a class="dropdown-item" href="javascript:void(0)">${positions[position]}</a>`;
}
searchWorkPremium += `</div>`;
searchWorkPremium += `</div>`;
// end เลือกระดับการทำงาน

// เลือกเงินเดือนที่ต้องการ ต่ำสุด-สูงสุด
searchWorkPremium += `<div class="dropdown dropdownFilter">`;
searchWorkPremium += `<button class="form-control formControl buttonFilter" type="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`;
searchWorkPremium += `<span class="searchEllipsis">
                        <i class="fas fa-money-bill-wave"></i> เลือกเงินเดือนที่ต้องการ ต่ำสุด-สูงสุด</span>`;
searchWorkPremium += `<i class="fas fa-chevron-down"></i>`;
searchWorkPremium += `</button>`;

searchWorkPremium += `<div class="dropdown-menu dropDownScroll">`;
searchWorkPremium += `<article class="accordion" id="accordionExample2">`;
searchWorkPremium += `<section>`;
searchWorkPremium += `<button class="btn btn-link btn-block text-left flexPositionPre" type="button" data-toggle="collapse"
                                    data-target="#collapse7" aria-expanded="true" aria-controls="collapse7">`;
searchWorkPremium += `<span>เงินเดือนที่ต้องการ ต่ำสุด</span>`;
searchWorkPremium += `<i class="fas fa-chevron-down"></i>`;
searchWorkPremium += `</button>`;

searchWorkPremium += `<div id="collapse7" class="collapse" aria-labelledby="heading7" data-parent="#accordionExample2">`;
searchWorkPremium += `<div class="card-body p-3">`;
searchWorkPremium += `<div class="allWorkList">`;
searchWorkPremium += `<label><input type="checkbox"> ทั้งหมด</label><button>ตกลง</button>`;
searchWorkPremium += `</div>`;

searchWorkPremium += `<div class="lineDashUrgent"></div>`;

searchWorkPremium += `<ul>`;
searchWorkPremium += `<li><label><input type="checkbox"> 10,000 บาท</label></li>`;
searchWorkPremium += `<li><label><input type="checkbox"> 20,000 บาท</label></li>`;
searchWorkPremium += `<li><label><input type="checkbox"> 30,000 บาท</label></li>`;
searchWorkPremium += `<li><label><input type="checkbox"> 40,000 บาท</label></li>`;
searchWorkPremium += `</ul>`;
searchWorkPremium += `</div>`;
searchWorkPremium += `</div>`;
searchWorkPremium += `</section>`;

searchWorkPremium += `<section>`;
searchWorkPremium += `<button class="btn btn-link btn-block text-left flexPositionPre" type="button" data-toggle="collapse"
                                data-target="#collapse8" aria-expanded="true" aria-controls="collapse8">`;
searchWorkPremium += `<span>เงินเดือนที่ต้องการ สูงสุด</span>`;
searchWorkPremium += `<i class="fas fa-chevron-down"></i>`;
searchWorkPremium += `</button>`;

searchWorkPremium += `<div id="collapse8" class="collapse" aria-labelledby="heading8" data-parent="#accordionExample2">`;
searchWorkPremium += `<div class="card-body p-3">`;
searchWorkPremium += `<div class="allWorkList">`;
searchWorkPremium += `<label><input type="checkbox"> ทั้งหมด</label><button>ตกลง</button>`;
searchWorkPremium += `</div>`;

searchWorkPremium += `<div class="lineDashUrgent"></div>`;

searchWorkPremium += `<ul>`;
searchWorkPremium += `<li><label><input type="checkbox"> 80,000 บาท</label></li>`;
searchWorkPremium += `<li><label><input type="checkbox"> 90,000 บาท</label></li>`;
searchWorkPremium += `<li><label><input type="checkbox"> 100,000 บาท</label></li>`;
searchWorkPremium += `<li><label><input type="checkbox"> 110,000 บาท</label></li>`;
searchWorkPremium += `</ul>`;
searchWorkPremium += `</div>`;
searchWorkPremium += `</div>`;
searchWorkPremium += `</section>`;
searchWorkPremium += `</article>`;
searchWorkPremium += `</div>`;
searchWorkPremium += `</div>`;
// end เลือกเงินเดือนที่ต้องการ ต่ำสุด-สูงสุด

// เลือกประเภทธุรกิจ
searchWorkPremium += `<div class="dropdown dropdownFilter">`;
searchWorkPremium += `<button class="form-control formControl buttonFilter" type="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`;
searchWorkPremium += `<span class="searchEllipsis"><i class="fas fa-building"></i> เลือกประเภทธุรกิจ</span>`;
searchWorkPremium += `<i class="fas fa-chevron-down"></i>`;
searchWorkPremium += `</button>`;

searchWorkPremium += `<div class="dropdown-menu dropDownMenu">`;
let types = ["อสังหาริมทรัพย์", "IT", "บริการ", "รักษาความปลอดภัย"];
for (let type = 0; type < types.length; type++) {
  searchWorkPremium += `<a class="dropdown-item" href="#">${types[type]}</a>`;
}
searchWorkPremium += `</div>`;
searchWorkPremium += `</div>`;
// end เลือกประเภทธุรกิจ

// เลือกรูปแบบงาน
searchWorkPremium += `<div class="dropdown dropdownFilter">`;
searchWorkPremium += `<button class="form-control formControl buttonFilter" type="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`;
searchWorkPremium += `<span class="searchEllipsis"><i class="fas fa-user-tie"></i> เลือกรูปแบบงาน</span>`;
searchWorkPremium += `<i class="fas fa-chevron-down"></i>`;
searchWorkPremium += `</button>`;

searchWorkPremium += `<div class="dropdown-menu dropDownMenu">`;
let works = ["งานประจำ", "งานพาร์ทไทม์", "งานนอกเวลา", "งานอิสระ"];
for (let work = 0; work < works.length; work++) {
  searchWorkPremium += `<a class="dropdown-item" href="javascript:void(0)">${works[work]}</a>`;
}
searchWorkPremium += `</div>`;
searchWorkPremium += `</div>`;
// end เลือกรูปแบบงาน

// เลือกการเดินทาง
searchWorkPremium += `<div class="dropdown dropdownFilter">`;
searchWorkPremium += `<button class="form-control formControl buttonFilter" type="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`;
searchWorkPremium += `<span class="searchEllipsis"><i class="fas fa-bus"></i> เลือกการเดินทาง</span>`;
searchWorkPremium += `<i class="fas fa-chevron-down"></i>`;
searchWorkPremium += `</button>`;

searchWorkPremium += `<div class="dropdown-menu dropDownScroll">`;
searchWorkPremium += `<article class="accordion" id="accordionExampleTransport">`;

let iding = 0;
let transports = [
  {
    name: "BTS",
    collapes: ["สถานีหมอชิต", "สถานีสะพานควาย", "สถานีพญาไท", "สถานีราชเทวี", "สถานีสยาม", "สถานีช่องนนทรี"],
  },
  {
    name: "MRT",
    collapes: ["สถานีลาดพร้าว", "สถานีรัชดา", "สถานีสุทธิสาร", "สถานีห้วยขวาง", "สถานีศูนย์วัฒนธรรม", "สถานีพระราม9"],
  },
  {
    name: "Airport Rail Link",
    collapes: ["สถานีมักกะสัน", "สถานีรามคำแหง", "สถานีสุวรรณภูมิ"],
  },
  {
    name: "รถประจำทาง",
    collapes: ["สาย 8", "สาย 96", "สาย ปอ.137", "สาย 36ก", "สาย 44", "สาย ปอ 73ก"],
  }
];
transports.forEach((transport) => {
  searchWorkPremium += `<section>`;
  searchWorkPremium += `<button class="btn btn-link btn-block text-left flexPositionPre" type="button" 
                                data-toggle="collapse" data-target="#colTransport${iding + 1}" 
                                aria-expanded="true" aria-controls="colTransport${iding + 1}">`;
  searchWorkPremium += `<span>${transport.name}</span>`;
  searchWorkPremium += `<i class="fas fa-chevron-down"></i>`;
  searchWorkPremium += `</button>`;

  searchWorkPremium += `<div id="colTransport${iding + 1}" class="collapse" aria-labelledby="heading${iding + 1}"
                            data-parent="#accordionExampleTransport">`;
  searchWorkPremium += `<div class="card-body p-3">`;
  searchWorkPremium += `<div class="allWorkList">`;
  searchWorkPremium += `<label><input type="checkbox"> ทั้งหมด</label><button>ตกลง</button>`;
  searchWorkPremium += `</div>`;

  searchWorkPremium += `<div class="lineDashUrgent"></div>`;

  if (transport.collapes != null && transport.collapes != "") searchWorkPremium += `<ul>`;
  for (let collape = 0; collape < transport.collapes.length; collape++) {
    searchWorkPremium += `<li><label><input type="checkbox"> ${transport.collapes[collape]}</label></li>`;
  }
  searchWorkPremium += `</div>`;
  searchWorkPremium += `</div>`;
  searchWorkPremium += `</section>`;
  iding += 1;
});
searchWorkPremium += `</article>`;
searchWorkPremium += `</div>`;
searchWorkPremium += `</div>`;
// end เลือกการเดินทาง

searchWorkPremium += `<div class="search searchColumn fontSubHead"><button>ค้นหา</button></div>`;
searchWorkPremium += `</section>`;
searchWorkPremium += `</div>`;
// end เริ่มการค้นหาจากตัวกรองข้อมูล

// เริ่มการค้นหาจากการพิมพ์
searchWorkPremium += `<div class="dataFilter mb-5" id="searchPim">`;
searchWorkPremium += `<h2 class="fontSubHead textRed mb-3">เริ่มการค้นหาจากการพิมพ์</h2>`;
searchWorkPremium += `<section class="gridFilterPim mb-3">`;
// พิมพ์ชื่อตำแหน่งงานหรือคำค้นหา
searchWorkPremium += `<div class="form-group">`;
searchWorkPremium += `<div class="inputSearch">`;
searchWorkPremium += `<span class="iconSearch"><i class="fas fa-search"></i></span>`;
searchWorkPremium += `<input type="email" class="form-control formControl formClLeft"
                                                    id="exampleInputEmail1" placeholder="พิมพ์ชื่อตำแหน่งงานหรือคำค้นหา">`;
searchWorkPremium += `</div>`;
searchWorkPremium += `</div>`;
// end พิมพ์ชื่อตำแหน่งงานหรือคำค้นหา
searchWorkPremium += `<div class="search pim fontSubHead"><button>ค้นหา</button></div>`;
searchWorkPremium += `</section>`;

searchWorkPremium += `<section class="hiddenText">`;
searchWorkPremium += `<h6 class="mb-3 fontText font-weight-bold">คำค้นหายอดนิยม</h6>`;
searchWorkPremium += `<ul class="flexPositionHit">`;
let lists = [
  "พนักงานขาย",
  "Sale Engineer",
  "Digital Marketing",
  "Programmer",
  "Call Center",
  "AE",
  "เจ้าหน้าที่บัญชีต้นทุน",
];
for (let list = 0; list < lists.length; list++) {
  searchWorkPremium += `<li class="mr-2 mb-2 fontSubText"><a href="javascript:void(0)" onclick="link()">${lists[list]}</a></li>`;
}
searchWorkPremium += `</ul>`;
searchWorkPremium += `</section>`;
searchWorkPremium += `</div>`;
// end เริ่มการค้นหาจากการพิมพ์
searchWorkPremium += `</section>`
// end ค้นหาจากตัวกรองข้อมูล ค้นหาจากการพิมพ์

searchWorkPremium += `</section>`;
searchWorkPremium += `</div>`;
searchWorkPremium += `</div>`;

document.getElementsByClassName("bgSearchPremium")[0].innerHTML = searchWorkPremium;

// เลือกตรงดรอปดาว
$(document).on("click", ".dropDownScroll", function (e) {
  e.stopPropagation();
});

// ตัดคำ
$(".searchEllipsis").dotdotdot({
  height: 24,
  fallbackToLetter: true,
  watch: true,
});

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

// เลือก filter หรือ ค้นหาจากการพิมพ์
$('#searchPim').css({ 'display': 'none' })

// ค้นหาจาก filter
function searchFilter() {
  $('#selectFilter').css({ 'display': 'block' });
  $('#searchPim').css({ 'display': 'none' });
  $('.btnTab').removeClass('active');
}

// ค้นหาจากพิมพ์
function searchPim() {
  $('#searchPim').css({ 'display': 'block' });
  $('#selectFilter').css({ 'display': 'none' });
  $('.btnTab').removeClass('active');
}

let container = document.getElementById('btnList');
let btns = container.getElementsByClassName('btn')
for (let index = 0; index < btns.length; index++) {
  btns[index].addEventListener('click', function () {
    let current = document.getElementsByClassName('active')
    current[0].className = current[0].className.replace(' active', '')
    this.className += ' active'
  })
}
