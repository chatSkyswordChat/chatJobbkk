let resumeFilterSearch = "";
const careers = [
  "นักศึกษาฝึกงาน",
  "พนักงาน part-time",
  "พนักงานสัญญาจ้าง",
  "สหกิจศึกษา",
  "กฎหมาย อื่นๆ",
  "ทนายความ",
  "ที่ปรึกษาด้านกฎหมาย",
  "นักกฎหมาย",
  "ก่อสร้าง ควบคุมอาคาร",
  "ก่อสร้างอื่นๆ",
  "ช่าง/คนงานทั่วไป",
  "ตรวจสอบอาคาร/สำรวจ",
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

const minMoneys = [
  "10,000 บาท",
  "20,000 บาท",
  "30,000 บาท",
  "40,000 บาท",
  "50,000 บาท",
  "60,000 บาท",
  "70,000 บาท",
  "80,000 บาท",
  "90,000 บาท",
  "100,000 บาท",
  "110,000 บาท",
  "120,000 บาท",
  "130,000 บาท",
];

const maxMoneys = [
  "10,000 บาท",
  "20,000 บาท",
  "30,000 บาท",
  "40,000 บาท",
  "50,000 บาท",
  "60,000 บาท",
  "70,000 บาท",
  "80,000 บาท",
  "90,000 บาท",
  "100,000 บาท",
  "110,000 บาท",
  "120,000 บาท",
  "130,000 บาท",
];

const minEducations = [
  "ต่ำสุด",
  "ต่ำกว่า ม.6",
  "ม.6",
  "ปวช.",
  "ปวส.",
  "ปริญญาตรี",
  "ปริญญาโท",
  "ปริญญาเอก",
];

const maxEducations = [
  "ต่ำสุด",
  "ต่ำกว่า ม.6",
  "ม.6",
  "ปวช.",
  "ปวส.",
  "ปริญญาตรี",
  "ปริญญาโท",
  "ปริญญาเอก",
];

const minExps = [
  "ประสบการณ์ต่ำสุด",
  "1 ปี",
  "2 ปี",
  "3 ปี",
  "4 ปี",
  "5 ปี",
  "มากกว่า 5 ปี",
];

const maxExps = [
  "ประสบการณ์สูงสุด",
  "1 ปี",
  "2 ปี",
  "3 ปี",
  "4 ปี",
  "5 ปี",
  "มากกว่า 5 ปี",
];

const minAges = [
  "อายุต่ำสุด",
  "22 ปี",
  "23 ปี",
  "24 ปี",
  "25 ปี",
  "26 ปี",
  "27 ปี",
  "28 ปี",
  "29 ปี",
  "30 ปี",
  "31 ปี",
  "32 ปี",
  "33 ปี",
  "34 ปี",
  "35 ปี",
];

const maxAges = [
  "อายุต่ำสุด",
  "22 ปี",
  "23 ปี",
  "24 ปี",
  "25 ปี",
  "26 ปี",
  "27 ปี",
  "28 ปี",
  "29 ปี",
  "30 ปี",
  "31 ปี",
  "32 ปี",
  "33 ปี",
  "34 ปี",
  "35 ปี",
];

const provinces = [
  "กรุงเทพมหานคร",
  "กาญจนบุรี",
  "สมุทรปราการ",
  "เชียงใหม่",
  "นครปฐม",
  "น่าน",
];

const districts = [
  "บางกะปิ",
  "สะพานสูง",
  "วังทองหลาง",
  "ลาดพร้าว",
  "บางใหญ่",
  "บางบัวทอง",
];

const searchs = [
  "พนักงานขาย",
  "Digital Marketing",
  "sales",
  "programmer",
  "sale engineer",
  "IT support",
  "บัญชีต้นทุน",
  "วิศวกร",
  "ช่างเทคนิค",
  "AE",
  "พนักงานพีซี",
  "Mobile Application",
];

resumeFilterSearch += `
    <div class="container">
        <div class="row">
            <div class="col-12">   
                ${/*filter ค้นหาประวัติ*/ ""}
                <section id="gridFilter">
                    ${/* พิมพ์ชื่อตำแหน่งงานหรือคำค้นหา */ ""}
                    <div class="form-group dropdownFilter dropdownColumns-3">
                        <div class="inputSearch">
                            <span class="iconSearch"><i class="fas fa-search"></i></span>
                            <input type="email" class="form-control formControlFilter pl-6" 
                                placeholder="พิมพ์ชื่อตำแหน่งงานหรือคำค้นหา">
                         </div>
                    </div>
                    ${/* end พิมพ์ชื่อตำแหน่งงานหรือคำค้นหา */ ""}

                    ${/*สถานที่ทำงานทั้งหมด*/ ""}
                    <div class="dropdown dropdownFilter dropdownColumns-3">
                        <button class="form-control formControlFilter buttonFilter" type="button" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="filterEllipsis"><i class="fas fa-map-marked-alt"></i> สถานที่ทำงานทั้งหมด</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
          
                        <div class="dropdown-menu dropDownScroll">
                            <article class="accordion" id="accordionExample">
                                ${areas
                                  .map(
                                    (area) => `
                                <section>
                                    <button class="btn btn-link btn-block text-left flexPositionPre"
                                        type="button" data-toggle="collapse" data-target="#colCareer${
                                          area.id
                                        }" aria-expanded="true"
                                        aria-controls="colCareer${area.id}">
                                        <span>${area.name}</span>
                                        <i class="fas fa-chevron-down"></i>
                                    </button>
                                                        
                                    <div id="colCareer${
                                      area.id
                                    }" class="collapse" aria-labelledby="heading${
                                      area.id
                                    }" 
                                            data-parent="#accordionExample">
                                        <div class="card-body p-3">
                                            <div class="allWorkList">
                                                <label><input type="checkbox"> ทั้งหมด</label> <button>ตกลง</button>
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
                    ${/*end สถานที่ทำงานทั้งหมด*/ ""}

                    ${/*ประเภทงานทั้งหมด (สาขาอาชีพ)*/ ""}
                    <div class="dropdown dropdownFilter dropdownColumns-3">
                        <button class="form-control formControlFilter buttonFilter" type="button" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="filterEllipsis"><i class="fas fa-briefcase"></i> ประเภทงานทั้งหมด (สาขาอาชีพ)</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
      
                        <div class="dropdown-menu dropdown-menu-right p-3 dropDownScroll">
                            <div class="allWorkList">
                                <label><input type="checkbox"> ทั้งหมด</label> <button>ตกลง</button>
                            </div>
                                        
                            <div class="lineDashUrgent"></div>

                            <ul>
                                ${careers
                                  .map(
                                    (career) => `
                                <li><label><input type="checkbox"> ${career}</label></li>
                              `
                                  )
                                  .join("\n")}
                            </ul> 
                        </div>
                    </div>        
                    ${/*end ประเภทงานทั้งหมด (สาขาอาชีพ)*/ ""}

                    ${/*เงินเดือนขั้นต่ำ ถึง เงินเดือนสูงสุด*/ ""}
                    <div class="dropdown dropdownFilter dropdownColumns-3 dropdownGrid">
                        ${/*เงินเดือนขั้นต่ำ*/ ""}
                        <div class="dropdown">
                            <button class="form-control buttonFilter dropdownLeft" type="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <span class="filterEllipsis"><i class="fas fa-money-bill-wave"></i> เงินเดือนขั้นต่ำ</span>
                                <i class="fas fa-chevron-down"></i>
                            </button>

                            <div class="dropdown-menu dropdownButton dropdownNative">
                                ${minMoneys
                                  .map(
                                    (minMoney) => `
                                <button class="dropdown-item" type="button">${minMoney}</button>
                                `
                                  )
                                  .join("\n")}
                            </div>
                        </div>
                        ${/*end เงินเดือนขั้นต่ำ*/ ""}

                        ${/*ถึง เงินเดือนสูงสุด*/ ""}
                        <div class="dropdown">
                          <button class="form-control buttonFilter dropdownRight" type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <span class="filterEllipsis">เงินเดือนสูงสุด</span>
                            <i class="fas fa-chevron-down"></i>
                          </button>
          
                          <div class="dropdown-menu dropdownButton dropdownNative">
                            ${maxMoneys
                              .map(
                                (maxMoney) => `
                            <button class="dropdown-item" type="button">${maxMoney}</button>
                            `
                              )
                              .join("\n")}
                          </div>
                        </div>
                        ${/*end ถึง เงินเดือนสูงสุด*/ ""}
                    </div>
                    ${/*end เงินเดือนขั้นต่ำ ถึง เงินเดือนสูงสุด*/ ""}

                    ${/*เลือกรูปแบบงาน*/ ""}
                    <div class="dropdown dropdownFilter dropdownColumns-3">
                      <button class="form-control formControlFilter buttonFilter" type="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <span class="filterEllipsis"><i class="fas fa-user"></i> รูปแบบงาน</span>
                        <i class="fas fa-chevron-down"></i>
                      </button>

                      <div class="dropdown-menu dropdownButton dropdownWidth">
                        <button class="dropdown-item" type="button">รูปแบบงานทั้งหมด</button>
                        <button class="dropdown-item" type="button">งานประจำ</button>
                        <button class="dropdown-item" type="button">งานนอกเวลา</button>
                        <button class="dropdown-item" type="button">งานอิสระ</button>
                        <button class="dropdown-item" type="button">นักศึกษาฝึกงาน</button>
                        <button class="dropdown-item" type="button">สัญญาจ้าง</button>
                        <button class="dropdown-item" type="button">สหกิจศึกษา</button>
                      </div>
                    </div>
                    ${/*end เลือกรูปแบบงาน*/ ""}

                    ${/*รูปแบบค้นหางาน*/ ""}
                    <div class="dropdown dropdownFilter dropdownColumns-3">
                      <button class="form-control formControlFilter buttonFilter" type="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <span class="filterEllipsis"><i class="fas fa-folder-open"></i> รูปแบบค้นหางาน</span>
                        <i class="fas fa-chevron-down"></i>
                      </button>

                      <div class="dropdown-menu dropdownButton dropdownWidth">
                        <button class="dropdown-item" type="button">อัพเดตล่าสุด</button>
                        <button class="dropdown-item" type="button">ประวัติมาใหม่</button>
                        <button class="dropdown-item" type="button">จ๊อบแฟร์</button>
                      </div>
                    </div>
                    ${/*end รูปแบบค้นหางาน*/ ""}

                    ${/*ระดับการศึกษา*/ ""}
                    <div class="dropdown dropdownFilter dropdownColumns-3 dropdownGrid">
                        ${/*ระดับการศึกษาขั้นต้น*/ ""}
                        <div class="dropdown">
                            <button class="form-control buttonFilter dropdownLeft" type="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <span class="filterEllipsis"><i class="fas fa-graduation-cap"></i> ระดับการศึกษา</span>
                                <i class="fas fa-chevron-down"></i>
                            </button>

                            <div class="dropdown-menu dropdownButton dropdownWidth">
                                ${minEducations
                                  .map(
                                    (minEducation) => `
                                <button class="dropdown-item" type="button">${minEducation}</button>
                                `
                                  )
                                  .join("\n")}
                            </div>
                        </div>
                        ${/*end ระดับการศึกษาขั้นต้น*/ ""}

                        ${/*ระดับการศึกษาสูงสุด*/ ""}
                        <div class="dropdown">
                          <button class="form-control buttonFilter dropdownRight" type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <span class="filterEllipsis">ระดับการศึกษาสูงสุด</span>
                            <i class="fas fa-chevron-down"></i>
                          </button>
          
                          <div class="dropdown-menu dropdownButton dropdownWidth">
                            ${maxEducations
                              .map(
                                (maxEducation) => `
                            <button class="dropdown-item" type="button">${maxEducation}</button>
                            `
                              )
                              .join("\n")}
                          </div>
                        </div>
                        ${/*end ระดับการศึกษาสูงสุด*/ ""}
                    </div>
                    ${/*end ระดับการศึกษา*/ ""}

                    ${/*ประสบการณ์*/ ""}
                    <div class="dropdown dropdownFilter dropdownColumns-3 dropdownGrid">
                        ${/*ประสบการณ์ต่ำสุด*/ ""}
                        <div class="dropdown">
                            <button class="form-control buttonFilter dropdownLeft" type="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <span class="filterEllipsis"><i class="fas fa-chart-line"></i> ประสบการณ์ต่ำสุด</span>
                                <i class="fas fa-chevron-down"></i>
                            </button>

                            <div class="dropdown-menu dropdownButton dropdownWidth">
                                ${minExps
                                  .map(
                                    (minExp) => `
                                <button class="dropdown-item" type="button">${minExp}</button>
                                `
                                  )
                                  .join("\n")}
                            </div>
                        </div>
                        ${/*end ประสบการณ์ต่ำสุด*/ ""}

                        ${/*ถึง ประสบการณ์สูงสุด*/ ""}
                        <div class="dropdown">
                          <button class="form-control buttonFilter dropdownRight" type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <span class="filterEllipsis">ประสบการณ์สูงสุด</span>
                            <i class="fas fa-chevron-down"></i>
                          </button>
          
                          <div class="dropdown-menu dropdownButton dropdownWidth">
                            ${maxExps
                              .map(
                                (maxExp) => `
                            <button class="dropdown-item" type="button">${maxExp}</button>
                            `
                              )
                              .join("\n")}
                          </div>
                        </div>
                        ${/*end ถึง ประสบการณ์สูงสุด*/ ""}
                    </div>
                    ${/*end ประสบการณ์*/ ""}

                    ${/*อายุ*/ ""}
                    <div class="dropdown dropdownFilter dropdownColumns-3 dropdownGrid">
                        ${/*อายุต่ำสุด*/ ""}
                        <div class="dropdown">
                            <button class="form-control buttonFilter dropdownLeft" type="button" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <span class="filterEllipsis"><i class="fas fa-child"></i> อายุต่ำสุด</span>
                                <i class="fas fa-chevron-down"></i>
                            </button>

                            <div class="dropdown-menu dropdownButton dropdownAge">
                                ${minAges
                                  .map(
                                    (minAge) => `
                                <button class="dropdown-item" type="button">${minAge}</button>
                                `
                                  )
                                  .join("\n")}
                            </div>
                        </div>
                        ${/*end อายุต่ำสุด*/ ""}

                        ${/*ถึง อายุสูงสุด*/ ""}
                        <div class="dropdown">
                          <button class="form-control buttonFilter dropdownRight" type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <span class="filterEllipsis">อายุสูงสุด</span>
                            <i class="fas fa-chevron-down"></i>
                          </button>
          
                          <div class="dropdown-menu dropdownButton dropdownAge">
                            ${maxAges
                              .map(
                                (maxAge) => `
                            <button class="dropdown-item" type="button">${maxAge}</button>
                            `
                              )
                              .join("\n")}
                          </div>
                        </div>
                        ${/*end ถึง อายุสูงสุด*/ ""}
                    </div>
                    ${/*end อายุ*/ ""}

                    ${/*ระยะเวลาเริ่มงาน*/ ""}
                    <div class="dropdown dropdownFilter dropdownColumns-3">
                      <button class="form-control formControlFilter buttonFilter" type="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <span class="filterEllipsis"><i class="fas fa-calendar-alt"></i> ระยะเวลาเริ่มงาน</span>
                        <i class="fas fa-chevron-down"></i>
                      </button>

                      <div class="dropdown-menu dropdownButton dropdownWidth">
                        <button class="dropdown-item" type="button">ระยะเวลาเริ่มงาน</button>
                        <button class="dropdown-item" type="button">เริ่มงานได้ทันที</button>
                        <button class="dropdown-item" type="button">ภายใน 7 วัน</button>
                        <button class="dropdown-item" type="button">ภายใน 2 สัปดาห์</button>
                        <button class="dropdown-item" type="button">ภายใน 1 เดือน</button>
                        <button class="dropdown-item" type="button">มากกว่า 1 เดือน</button>
                      </div>
                    </div>
                    ${/*end ระยะเวลาเริ่มงาน*/ ""}

                    ${/*เพศ*/ ""}
                    <div class="dropdown dropdownFilter dropdownColumns-3">
                      <button class="form-control formControlFilter buttonFilter" type="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <span class="filterEllipsis"><i class="fas fa-venus-mars"></i> ทุกเพศ</span>
                        <i class="fas fa-chevron-down"></i>
                      </button>

                      <div class="dropdown-menu dropdownButton dropdownWidth">
                        <button class="dropdown-item" type="button">ทุกเพศ</button>
                        <button class="dropdown-item" type="button">ชาย</button>
                        <button class="dropdown-item" type="button">หญิง</button>
                      </div>
                    </div>
                    ${/*end เพศ*/ ""}

                    ${/*ยานพาหนะส่วนตัว*/ ""}
                    <div class="dropdown dropdownFilter dropdownColumns-3">
                        <button class="form-control formControlFilter buttonFilter" type="button" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="filterEllipsis"><i class="fas fa-car"></i> ยานพาหนะส่วนตัว</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
      
                        <div class="dropdown-menu p-3 dropdownSelect">
                            <ul>     
                                <li><label><input type="checkbox"> รถยนต์</label></li>
                                <li><label><input type="checkbox"> รถจักรยานยนต์</label></li>
                                <li><label><input type="checkbox"> อิ่นๆ</label></li>
                            </ul> 
                        </div>
                    </div>        
                    ${/*end ยานพาหนะส่วนตัว*/ ""}

                    ${/*ใบอนุญาตขับขี่*/ ""}
                    <div class="dropdown dropdownFilter dropdownColumns-3">
                        <button class="form-control formControlFilter buttonFilter" type="button" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="filterEllipsis"><i class="fas fa-address-card"></i> ใบอนุญาตขับขี่</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
      
                        <div class="dropdown-menu p-3 dropdownSelect">
                            <ul>     
                                <li><label><input type="checkbox"> รถยนต์</label></li>
                                <li><label><input type="checkbox"> รถจักรยานยนต์</label></li>
                                <li><label><input type="checkbox"> อิ่นๆ</label></li>
                            </ul> 
                        </div>
                    </div>        
                    ${/*end ใบอนุญาตขับขี่*/ ""}

                    ${/*อื่นๆ*/ ""}
                    <div class="dropdown dropdownFilter dropdownColumns-3">
                        <button class="form-control formControlFilter buttonFilter" type="button" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="filterEllipsis"><i class="fab fa-ethereum"></i> อื่นๆ</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
      
                        <div class="dropdown-menu p-3 dropdownSelect">
                            <ul>     
                                <li><label><input type="checkbox"> นักศึกษาจบใหม่</label></li>
                                <li><label><input type="checkbox"> รับผู้ไม่มีประสบการณ์</label></li>
                                <li><label><input type="checkbox"> รับคนพิการ</label></li>
                            </ul> 
                        </div>
                    </div>        
                    ${/*end อื่นๆ*/ ""}

                    <div class="dropdownFilter dropdownColumns-3 dropdownColumns">
                      <div class="btnSearchReset">
                        <div><button class="search" type="button">ค้นหา</button></div>
                        <div><button class="reset" type="button">รีเซตเงื่อนไข</button></div>
                      </div>
                    </div>
                </section>
                ${/*end filter ค้นหาประวัติ*/ ""}
            </div>
        </div>
    </div>`;

document.querySelector("#resumeFilterSearch").innerHTML = resumeFilterSearch;

// เลือกตรงดรอปดาว
$(document).on("click", ".dropDownScroll, .dropdownSelect", function (e) {
  e.stopPropagation();
});

// ตัดคำ
$(".filterEllipsis").dotdotdot({
  height: 24,
  fallbackToLetter: true,
  watch: true,
});

// กดตกลง เพื่อปิดดรอปดาว ตรง filter
const buttonFilters = document.querySelectorAll(".allWorkList button");
for (const button of buttonFilters) {
  button.addEventListener("click", () => {
    button.closest(".dropdown-menu").classList.toggle("show");
  });
}
