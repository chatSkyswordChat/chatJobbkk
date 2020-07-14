var searchWork = "";

let listSelectWorks = [
  "หางาน โลจิสติกส์",
  "หางาน คอมพิวเตอร์",
  "หางาน พนักงานชั่วคราว",
  "หางาน Mobile Application Developer",
  "หางาน เจ้าหน้าที่รักษาความปลอดภัย",
];

let selectWorks = [
  "หางาน โลจิสติกส์",
  "หางาน คอมพิวเตอร์",
  "หางาน พนักงานชั่วคราว",
  "หางาน Mobile Application Developer",
  "หางาน เจ้าหน้าที่รักษาความปลอดภัย",
  "หางาน การเงิน",
  "หางาน Part Time",
  "หางาน ท่องเที่ยว",
  "หางาน นักศึกษาฝึกงาน",
];

let provinces = [
  "กรุงเทพมหนคร",
  "ชลบุรี",
  "พระนครศรีอยุธยา",
  "นครปฐม",
  "เพรชบุรี",
  "ลพบุรี",
  "กาญจนบุรี",
  "สมุทรปราการ",
  "สมุทรสงคราม",
  "เชียงใหม่",
  "เชียงราย",
  "สมุทรปราการ",
  "สมุทรปราการ",
];

let countys = [
  "ทั้งหมด",
  "บางกะปิ",
  "บึงกุ่ม",
  "ลาดพร้าว",
  "วังทองหลาง",
  "ยานนาวา",
  "บางใหญ่",
  "บางบอน",
  "มหาชัย",
];

let moneys = [
  "5,000 บาท",
  "10,000 บาท",
  "15,000 บาท",
  "20,000 บาท",
  "25,000 บาท",
  "30,000 บาท",
  "35,000 บาท",
  "40,000 บาท",
  "45,000 บาท",
];

// ประเภทงานทั้งหมด
searchWork += `<div class="dropDownTabWork">`;
searchWork += `<div class="button-group">`;
searchWork += `<a class="dropdown-toggle category-work formControl" data-toggle="dropdown">`;
searchWork += `<p class="cut-ellipsis"><span class="fa fa-id-card-o text-red"> </span> ประเภทงานทั้งหมด (สาขาอาชีพ)</p>`;
searchWork += `<div>`;
searchWork += `<span class="fa fa-angle-down text-blue"></span>`;
searchWork += `</div>`;
searchWork += `</a>`;

searchWork += `<ul class="dropdown-menu dropDrop">`;
searchWork += `<div class="flexSelect">`;
searchWork += `<ul class="listSelectWork">`;
for (let work = 0; work < listSelectWorks.length; work++) {
  searchWork += `<li><button>${listSelectWorks[work]}`;
  searchWork += ` <i class="fa fa-times-circle" aria-hidden="true"></i>`;
  searchWork += `</button></li>`;
}
searchWork += `</ul>`;
searchWork += `<button class="confirmButton">ตกลง</button>`;
searchWork += `</div>`;

searchWork += `<div class="lineDash"></div>`;

searchWork += `<div class="dropdown-menuLeftRight">`;
searchWork += `<div class="dropdown-menu-left">`;
for (let working = 0; working < selectWorks.length; working++) {
  searchWork += `<li><a href="javascript:void(0)" onclick="newpage()" class="">- ${selectWorks[working]}</a></li>`;
}
searchWork += `</div>`;

// selectWorkFlex ไว้ทำ เลือกประเภทงานได้สูงสุดถึง 5 รายการ อยู่กึ่งกลางกรอบ
searchWork += `<div class="dropdown-menu-right selectWorkFlex">`;
searchWork += `<div class="selectWork5">`;
searchWork += `<figure><img src="assets/images/arrow.png"></figure>`;
searchWork += `<figcaption>เลือกประเภทงานได้สูงสุดถึง 5 รายการ</figcaption>`;
searchWork += `</div>`;
searchWork += `</div>`;
searchWork += `</div>`;
searchWork += `</ul>`;
searchWork += `</div>`;
searchWork += `</div>`;
// end ประเภทงานทั้งหมด

// สถานที่ทำงานทั้งหมด
searchWork += `<div class="dropDownTabWork">`;
searchWork += `<div class="button-group">`;
searchWork += `<a class="dropdown-toggle category-work formControl" data-toggle="dropdown">`;
searchWork += `<p class="cut-ellipsis"><span class="fa fa-map-marker text-red"></span> สถานที่ทำงานทั้งหมด (สาขาอาชีพ)</p>`;
searchWork += `<div>`;
searchWork += `<span class="fa fa-angle-down text-blue"></span>`;
searchWork += `</div>`;
searchWork += `</a>`;

searchWork += `<ul class="dropdown-menu dropDrop">`;
searchWork += `<div class="flexSelect">`;
searchWork += `<ul class="listSelectWork">`;
for (let work = 0; work < listSelectWorks.length; work++) {
  searchWork += `<li><button>${listSelectWorks[work]}`;
  searchWork += ` <i class="fa fa-times-circle" aria-hidden="true"></i>`;
  searchWork += `</button></li>`;
}
searchWork += `</ul>`;
searchWork += `<button class="confirmButton">ตกลง</button>`;
searchWork += `</div>`;

searchWork += `<div class="lineDash"></div>`;

searchWork += `<div class="dropdown-menuLeftRight">`;
searchWork += `<div class="dropdown-menu-left">`;
for (let province = 0; province < provinces.length; province++) {
  searchWork += `<li><a href="javascript:void(0)">- ${provinces[province]}</a></li>`;
}
searchWork += `</div>`;

searchWork += `<div class="dropdown-menu-right selectWorkFlex">`;
searchWork += `<ul class="flexDi">`;
for (let county = 0; county < countys.length; county++) {
  searchWork += `<li>`;
  searchWork += `<label><input type="checkbox"> ${countys[county]}</label>`;
  searchWork += `</li>`;
}
searchWork += `</ul>`;
searchWork += `</div>`;
searchWork += `</div>`;
searchWork += `</ul>`;
searchWork += `</div>`;
searchWork += `</div>`;
// end สถานที่ทำงานทั้งหมด

// ใส่ชื่อตำแหน่งงานหรือชื่อบริษัท
searchWork += `<div class="dropDownTabWork">`;
searchWork += `<input type="text" class="form-control formControl" aria-describedby="text" placeholder="ใส่ชื่อตำแหน่งงานหรือชื่อบริษัท">`;
searchWork += `<span class="fa fa-search form-control-feedback" aria-hidden="true"></span>`;
searchWork += `</div>`;
// end ใส่ชื่อตำแหน่งงานหรือชื่อบริษัท

searchWork += `<div class="dropDownTabWork">`;
searchWork += `<section class="gridMoney">`
// เงินเดือนขั้นต่ำ
searchWork += `<div class="button-group">`;
searchWork += `<a class="dropdown-toggle category-work formControl radiusLeft" data-toggle="dropdown">`;
searchWork += `<p class="cut-ellipsis"><span class="fa fa-money text-red"></span> เงินเดือนขั้นต่ำ</p>`;
searchWork += `<div><span class="fa fa-angle-down text-blue"></span></div>`;
searchWork += `</a>`;

searchWork += `<ul class="dropdown-menu dropDrop dropPad">`;
for (let money = 0; money < moneys.length; money++) {
  searchWork += `<li><a href="javascript:void(0)">${moneys[money]}</a></li>`;
}
searchWork += `</ul>`;
searchWork += `</div>`;
// end เงินเดือนขั้นต่ำ

// เงินเดือนสูงสุด
searchWork += `<div class="button-group">`;
searchWork += `<a class="dropdown-toggle category-work formControl radiusRight" data-toggle="dropdown">`;
searchWork += `<p class="cut-ellipsis"><span class="fa fa-money text-red"></span> เงินเดือนสูงสุด</p>`;
searchWork += `<div><span class="fa fa-angle-down text-blue"></span></div>`;
searchWork += `</a>`;

searchWork += `<ul class="dropdown-menu dropDrop dropPad">`;
for (let money = 0; money < moneys.length; money++) {
  searchWork += `<li><a href="javascript:void(0)">${moneys[money]}</a></li>`;
}
searchWork += `</ul>`;
searchWork += `</div>`;
// end เงินเดือนสูงสุด
searchWork += `</section>`
searchWork += `</div>`;

searchWork += `<div class="dropDownTabWork">`;
// เงินเดือนขั้นต่ำ
searchWork += `<div class="button-group">`;
searchWork += `<a class="dropdown-toggle category-work formControl" data-toggle="dropdown">`;
searchWork += `<p class="cut-ellipsis"><span class="fa fa-money text-red"></span> เงินเดือนขั้นต่ำ</p>`;
searchWork += `<div><span class="fa fa-angle-down text-blue"></span></div>`;
searchWork += `</a>`;

searchWork += `<ul class="dropdown-menu dropDrop dropPad">`;
for (let money = 0; money < moneys.length; money++) {
  searchWork += `<li><a href="javascript:void(0)">${moneys[money]}</a></li>`;
}
searchWork += `</ul>`;
searchWork += `</div>`;
// end เงินเดือนขั้นต่ำ
searchWork += `</div>`;

document.getElementsByClassName("gridSearch")[0].innerHTML = searchWork;

$(".dropdown-menu").on("click", function (e) {
  if ($(this).hasClass("dropDrop")) {
    e.stopPropagation();
  }
});
