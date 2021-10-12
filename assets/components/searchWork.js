const positionHits = [
  "พนักงานขาย",
  "Sale Engineer",
  "Digital Marketing",
  "Programmer",
  "Call Center",
  "AE",
  "เจ้าหน้าที่บัญชีต้นทุน",
];

const careers = [
  {
    id: 1,
    name: "Part-time / พนักงานสัญญาจ้าง",
    collapes: [
      "นักศึกษาฝึกงาน",
      "พนักงาน part-time",
      "พนักงานสัญญาจ้าง",
      "สหกิจศึกษา",
    ],
  },
  {
    id: 2,
    name: "กฎหมาย",
    collapes: ["กฎหมาย อื่นๆ", "ทนายความ", "ที่ปรึกษาด้านกฎหมาย", "นักกฎหมาย"],
  },
  {
    id: 3,
    name: "ก่อสร้าง",
    collapes: [
      "ก่อสร้าง ควบคุมอาคาร",
      "ก่อสร้างอื่นๆ",
      "ช่าง/คนงานทั่วไป",
      "ตรวจสอบอาคาร/สำรวจ",
    ],
  },
];

const areas = [
  {
    id: 1,
    name: "กรุงเทพมหานคร",
    collapes: ["รามคำแหง", "ลาดพร้าว", "รัชดา", "พระราม9"],
  },
  {
    id: 2,
    name: "เชียงใหม่",
    collapes: ["ม่อนแจ่ม", "ม่อนอิงดาว", "ม่อนเหนือ", "ม่อนใต้"],
  },
  {
    id: 3,
    name: "กาญจนบุรี",
    collapes: ["สังขละบุรี", "ทองผาภูมิ", "ไทรโยค", "ปิล็อค"],
  },
];

const positions = [
  "ระดับหัวหน้างาน",
  "ระดับเจ้าหน้าที่",
  "ระดับผู้บริหาร",
  "ระดับหัวหน้าแผนก",
];

const minMoneys = [
  "10,000 บาท",
  "20,000 บาท",
  "30,000 บาท",
  "40,000 บาท",
  "50,000 บาท",
];
const maxMoneys = [
  "50,000 บาท",
  "60,000 บาท",
  "70,000 บาท",
  "80,000 บาท",
  "90,000 บาท",
];
const types = ["อสังหาริมทรัพย์", "IT", "บริการ", "รักษาความปลอดภัย"];
const works = ["งานประจำ", "งานพาร์ทไทม์", "งานนอกเวลา", "งานอิสระ"];

const transports = [
  {
    id: 1,
    name: "BTS",
    collapes: [
      "สถานีหมอชิต",
      "สถานีสะพานควาย",
      "สถานีพญาไท",
      "สถานีราชเทวี",
      "สถานีสยาม",
      "สถานีช่องนนทรี",
    ],
  },
  {
    id: 2,
    name: "MRT",
    collapes: [
      "สถานีลาดพร้าว",
      "สถานีรัชดา",
      "สถานีสุทธิสาร",
      "สถานีห้วยขวาง",
      "สถานีศูนย์วัฒนธรรม",
      "สถานีพระราม9",
    ],
  },
  {
    id: 3,
    name: "Airport Rail Link",
    collapes: ["สถานีมักกะสัน", "สถานีรามคำแหง", "สถานีสุวรรณภูมิ"],
  },
  {
    id: 4,
    name: "รถประจำทาง",
    collapes: [
      "สาย 8",
      "สาย 96",
      "สาย ปอ.137",
      "สาย 36ก",
      "สาย 44",
      "สาย ปอ 73ก",
    ],
  },
];

const others = [
  "Work From Home",
  "ยินดีรับนักศึกษาจบใหม่",
  "ยินดีรับผู้ไม่มีประสบการณ์",
  "ยินดีรับคนพิการ",
  "งานด่วน",
];

const lists = [
  "พนักงานขาย",
  "Sale Engineer",
  "Digital Marketing",
  "Programmer",
  "Call Center",
  "AE",
  "เจ้าหน้าที่บัญชีต้นทุน",
];

let bgSearchPremium = "";
bgSearchPremium += `
  <div class="container mb-5">
    <div class="row">
      <section class="col-12">
        ${/*ค้นหาจากตัวกรองข้อมูล ค้นหาจากการพิมพ์*/ ""}
        <section class="pt-5">
          ${/*ปุ่ม ค้นหาจากตัวกรองข้อมูล ค้นหาจากการพิมพ์*/ ""}
          <article class="btnList mb-3" id="btnList">
            <div><button class="btn btnTab active" onclick="searchFilter()">ค้นหาจากตัวกรองข้อมูล</button></div>
            <div><button class="btn btnTab" onclick="searchPim()">ค้นหาจากการพิมพ์</button></div>
          </article>
          ${/*end ปุ่ม ค้นหาจากตัวกรองข้อมูล ค้นหาจากการพิมพ์*/ ""}

          ${/*เริ่มการค้นหาจากตัวกรองข้อมูล*/ ""}
          <div class="dataFilter mb-5" id="selectFilter">
            <h2 class="fontSubHead textRed mb-3">เริ่มการค้นหาจากตัวกรองข้อมูล</h2>
            <section class="hiddenText">
              <h6 class="mb-3 fontText font-weight-bold">ตำแหน่งงานยอดนิยม</h6>
              <ul class="flexPositionHit mb-3">
                ${positionHits
                  .map(
                    (positionHit) => `
                <li class="mr-2 mb-2 fontSubText">
                  <a href="${path}searchWork/premiumUrgent.html">${positionHit}</a>
                </li>
                `
                  )
                  .join("\n")}
              </ul>
            </section>

            ${/*gridFilter*/ ""}
            <section class="gridFilter mb-5">
              ${/*เลือกสาขาอาชีพ*/ ""}
              <div class="dropdown dropdownFilter">
                <button class="form-control formControl buttonFilter" type="button" 
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span class="searchEllipsis"><i class="fas fa-briefcase"></i> เลือกสาขาอาชีพ</span>
                  <i class="fas fa-chevron-down"></i>
                </button>
      
                <div class="dropdown-menu dropDownScroll">
                  <article class="accordion" id="accordionExample">
                    ${careers
                      .map(
                        (career) => `
                    <section>
                      <button class="btn btn-link btn-block text-left flexPositionPre"
                        type="button" data-toggle="collapse" data-target="#colCareer${
                          career.id
                        }" aria-expanded="true"
                        aria-controls="colCareer${career.id}">
                        <span>${career.name}</span>
                        <i class="fas fa-chevron-down"></i>
                      </button>
                                            
                      <div id="colCareer${
                        career.id
                      }" class="collapse" aria-labelledby="heading${career.id}" 
                        data-parent="#accordionExample">
                        <div class="card-body p-3">
                          <div class="allWorkList">
                            <label><input type="checkbox"> ทั้งหมด</label> <button>ตกลง</button>
                          </div>
                                            
                          <div class="lineDashUrgent"></div>
      
                          <ul>
                            ${career.collapes
                              .map(
                                (collape) => `
                            <li><label><input type="checkbox"> ${collape}</label></li>
                            `
                              )
                              .join("\n")}
                          </ul> 
                        </div>
                      </div>
                    </section>
                    `
                      )
                      .join("\n")}
                  </article>
                </div>
              </div>  
              ${/*end เลือกสาขาอาชีพ*/ ""}

              ${/*เลือกสถานที่ทำงาน*/ ""}
              <div class="dropdown dropdownFilter">
                <button class="form-control formControl buttonFilter" type="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">
                    <span class="searchEllipsis"><i class="fas fa-map-marked-alt"></i> เลือกสถานที่ทำงาน</span>
                    <i class="fas fa-chevron-down"></i>
                </button>

                <div class="dropdown-menu dropDownScroll">
                  <article class="accordion" id="accordionExample1">
                    ${areas
                      .map(
                        (area) => `
                    <section>
                      <button class="btn btn-link btn-block text-left flexPositionPre" type="button"
                        data-toggle="collapse" data-target="#colArea${
                          area.id
                        }" aria-expanded="true"
                        aria-controls="colArea${area.id}">
                        <span>${area.name}</span>
                        <i class="fas fa-chevron-down"></i>
                      </button>

                      <div id="colArea${
                        area.id
                      }" class="collapse" aria-labelledby="heading${area.id}"
                        data-parent="#accordionExample1">
                        <div class="card-body p-3">
                          <div class="allWorkList">
                            <label><input type="checkbox"> ทั้งหมด</label><button>ตกลง</button>
                          </div>

                          <div class="lineDashUrgent"></div>

                          <ul>
                            ${area.collapes
                              .map(
                                (collape) => `
                            <li><label><input type="checkbox"> ${collape}</label></li>
                            `
                              )
                              .join("\n")}
                          </ul>
                        </div>
                      </div>
                    </section>
                    `
                      )
                      .join("\n")}
                    </article>
                </div>
              </div>
              ${/*end เลือกสถานที่ทำงาน*/ ""}

              ${/*เลือกระดับการทำงาน*/ ""}
              <div class="dropdown dropdownFilter">
                <button class="form-control formControl buttonFilter" type="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <span class="searchEllipsis"><i class="fas fa-layer-group"></i> เลือกระดับการทำงาน</span>
                  <i class="fas fa-chevron-down"></i>
                </button>

                <div class="dropdown-menu dropDownMenu">
                  ${positions
                    .map(
                      (position) => `
                  <a class="dropdown-item" href="javascript:void(0)">${position}</a>
                  `
                    )
                    .join("\n")}
                </div>
              </div>
              ${/*end เลือกระดับการทำงาน*/ ""}

              ${/*เลือกเงินเดือนที่ต้องการ ต่ำสุด*/ ""}
              <div class="dropdown dropdownFilter">
                <button class="form-control formControl buttonFilter" type="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <span class="searchEllipsis"><i class="fas fa-money-bill-wave"></i> เลือกเงินเดือนที่ต้องการต่ำสุด</span>
                  <i class="fas fa-chevron-down"></i>
                </button>

                <div class="dropdown-menu dropDownMenu dropDownHeight">
                  ${minMoneys
                    .map(
                      (minMoney) => `
                  <a class="dropdown-item" href="javascript:void(0)">${minMoney}</a>
                  `
                    )
                    .join("\n")}
                </div>
              </div>
              ${/*end เลือกเงินเดือนที่ต้องการ สูงสุด*/ ""}

              ${/*เลือกเงินเดือนที่ต้องการ สูงสุด*/ ""}
              <div class="dropdown dropdownFilter">
                <button class="form-control formControl buttonFilter" type="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <span class="searchEllipsis"><i class="fas fa-money-bill-wave"></i> เลือกเงินเดือนที่ต้องการสูงสุด</span>
                  <i class="fas fa-chevron-down"></i>
                </button>

                <div class="dropdown-menu dropDownMenu dropDownHeight">
                  ${maxMoneys
                    .map(
                      (maxMoney) => `
                  <a class="dropdown-item" href="javascript:void(0)">${maxMoney}</a>
                  `
                    )
                    .join("\n")}
                </div>
              </div>
              ${/*end เลือกเงินเดือนที่ต้องการ สูงสุด*/ ""}

              ${/*เลือกประเภทธุรกิจ*/ ""}
              <div class="dropdown dropdownFilter">
                <button class="form-control formControl buttonFilter" type="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <span class="searchEllipsis"><i class="fas fa-building"></i> เลือกประเภทธุรกิจ</span>
                  <i class="fas fa-chevron-down"></i>
                </button>

                <div class="dropdown-menu dropDownMenu dropDownHeight">
                  ${types
                    .map(
                      (type) => `
                  <a class="dropdown-item" href="javascript:void(0)">${type}</a>
                  `
                    )
                    .join("\n")}
                </div>
              </div>
              ${/*end เลือกประเภทธุรกิจ*/ ""}

              ${/*เลือกรูปแบบงาน*/ ""}
              <div class="dropdown dropdownFilter">
                <button class="form-control formControl buttonFilter" type="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <span class="searchEllipsis"><i class="fas fa-user-tie"></i> เลือกรูปแบบงาน</span>
                  <i class="fas fa-chevron-down"></i>
                </button>

                <div class="dropdown-menu dropDownMenu">
                  ${works
                    .map(
                      (work) => `
                  <a class="dropdown-item" href="javascript:void(0)">${work}</a>
                  `
                    )
                    .join("\n")}
                </div>
              </div>
              ${/*end เลือกรูปแบบงาน*/ ""}

              ${/*เลือกการเดินทาง*/ ""}
              <div class="dropdown dropdownFilter">
                <button class="form-control formControl buttonFilter" type="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <span class="searchEllipsis"><i class="fas fa-bus"></i> เลือกการเดินทาง</span>
                  <i class="fas fa-chevron-down"></i>
                </button>

                <div class="dropdown-menu dropDownAuto">
                  <article class="accordion" id="accordionExampleTransport">
                    ${transports
                      .map(
                        (transport) => `
                    <section>
                      <button class="btn btn-link btn-block text-left flexPositionPre" type="button"
                        data-toggle="collapse" data-target="#colTransport${
                          transport.id
                        }"
                        aria-expanded="true" aria-controls="colTransport${
                          transport.id
                        }">
                        <span>${transport.name}</span>
                        <i class="fas fa-chevron-down"></i>
                      </button>

                      <div id="colTransport${transport.id}" class="collapse"
                        aria-labelledby="heading${
                          transport.id
                        }" data-parent="#accordionExampleTransport">
                        <div class="card-body p-3">
                          <section class="flexTransport_list" style="border: none">
                            <ul>
                              ${transport.collapes
                                .map(
                                  (collape) => `
                              <li><label><input type="checkbox"> ${collape}</label></li>
                              `
                                )
                                .join("\n")}
                            </ul>

                            <div class="allWorkList allWorkList_transport">
                              <label><button>ตกลง</button>
                            </div>
                          </section>
                        </div>
                      </div>
                    </section>
                    `
                      )
                      .join("\n")}
                  </article>
                </div>
              </div>
              ${/*end เลือกการเดินทาง*/ ""}

              ${/*อื่นๆ*/ ""}
              <div class="dropdown dropdownFilter">
                <button class="form-control formControl buttonFilter" type="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <span class="searchEllipsis other"><i class="fab fa-ethereum"></i> อื่นๆ ( เลือกได้มากกว่า 1 )</span>
                  <i class="fas fa-chevron-down"></i>
                </button>

                <div class="dropdown-menu dropDownMenu dropDownHeightAuto">
                  <div class="px-3 pt-3">
                    <div class="allWorkList">
                      <label><input type="checkbox"> ทั้งหมด</label><button id="confirm_other">ตกลง</button>
                    </div>
                  </div>

                  <div class="lineDashUrgent px-3"></div>

                  <div>
                    ${others
                      .map(
                        (other) => `
                    <a class="dropdown-item other" data-value="${other}" style="padding: .25rem 15px">
                      <label><input type="checkbox" /> ${other}</label>
                    </a>
                    `
                      )
                      .join("\n")}
                  </div>
                </div>
              </div>
              ${/*end อื่นๆ*/ ""}
            </section>
            ${/*end gridFilter*/ ""}

            ${/*ค้นหา รีเซ็ตเงื่อนไข*/ ""}
            <div class="searchColumn fontSubHead">
              <section class="flexSearch_condition">
                <div class="search"><button>ค้นหา</button></div>
                <div class="resetCondition"><button>รีเซ็ตเงื่อนไข</button></div>
              </section>
            </div>
            ${/*end ค้นหา รีเซ็ตเงื่อนไข*/ ""} 
          </div>
          ${/*end เริ่มการค้นหาจากตัวกรองข้อมูล*/ ""}

          ${/*เริ่มการค้นหาจากการพิมพ์*/ ""}
          <div class="dataFilter mb-5" id="searchPim">
            <h2 class="fontSubHead textRed mb-3">เริ่มการค้นหาจากการพิมพ์</h2>
            <section class="gridFilterPim mb-3">
              ${/*พิมพ์ชื่อตำแหน่งงานหรือคำค้นหา*/ ""}
              <div class="form-group">
                <div class="inputSearch">
                  <span class="iconSearch"><i class="fas fa-search"></i></span>
                  <input type="email" class="form-control formControl formClLeft"
                    id="exampleInputEmail1" placeholder="พิมพ์ชื่อตำแหน่งงานหรือคำค้นหา">
                </div>
              </div>
              ${/*end พิมพ์ชื่อตำแหน่งงานหรือคำค้นหา*/ ""}
                                  
              <div class="search pim fontSubHead"><button>ค้นหา</button></div>

              <section class="hiddenText">
                <h6 class="mb-3 fontText font-weight-bold">คำค้นหายอดนิยม</h6>
                <ul class="flexPositionHit">
                  ${lists
                    .map(
                      (list) => `
                  <li class="mr-2 mb-2 fontSubText"><a href="javascript:void(0)" onclick="link()">${list}</a></li>
                  `
                    )
                    .join("\n")}
                </ul>
              </section>
            </section>
          </div>
          ${/*end เริ่มการค้นหาจากการพิมพ์*/ ""}
        </section>
        ${/*end ค้นหาจากตัวกรองข้อมูล ค้นหาจากการพิมพ์*/ ""}
      </section>
    </div>
  </div>`;

document.querySelector(".bgSearchPremium").innerHTML = bgSearchPremium;

// เลือก filter หรือ ค้นหาจากการพิมพ์
$("#searchPim").css({ display: "none" });

// ค้นหาจาก filter
function searchFilter() {
  $("#selectFilter").css({ display: "block" });
  $("#searchPim").css({ display: "none" });
  $(".btnTab").removeClass("active");
}

// ค้นหาจากพิมพ์
function searchPim() {
  $("#searchPim").css({ display: "block" });
  $("#selectFilter").css({ display: "none" });
  $(".btnTab").removeClass("active");
}

let container = document.getElementById("btnList");
let btns = container.getElementsByClassName("btn");
console.log(btns);
for (let index = 0; index < btns.length; index++) {
  btns[index].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// end เลือก filter หรือ ค้นหาจากการพิมพ์

// เลือกตรงดรอปดาว
$(document).on(
  "click",
  ".dropDownScroll, .dropDownAuto, .dropDownHeightAuto",
  function (e) {
    e.stopPropagation();
  }
);

// ตัดคำ
$(".searchEllipsis").dotdotdot({
  height: 24,
  fallbackToLetter: true,
  watch: true,
});

// กดตกลง เพื่อปิดดรอปดาว ตรง filter
const ddd = document.querySelectorAll(".allWorkList button");
for (let index = 0; index < ddd.length; index++) {
  ddd[index].addEventListener("click", () => {
    ddd[index].closest(".dropdown-menu").classList.toggle("show");
  });
}
