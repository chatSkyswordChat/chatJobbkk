function searchResumeUrgentPremium() {
  let resumeUrgent = "";
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

  resumeUrgent += `
    <div class="container">
        <div class="row">
            <div class="col-12">
                ${/*Resume Urgent*/ ""}
                <div class="accordion" id="resumeUrgentButton">
                    <div id="headButton">
                        <h6 class="fontHead flexCollapse">
                            <span>Resume Urgent </span>
                            <div>
                                <button class="btn btn-link btn-block text-left aBox" type="button" data-toggle="collapse"
                                    data-target="#colButton" aria-expanded="true" aria-controls="colButton" id="getBox">ซ่อนข้อความ
                                </button>
                            </div>
                        </h6>
                    </div>
    
                    <div id="colButton" class="collapse show" aria-labelledby="headButton" data-parent="#resumeUrgentButton">
                        <div class="card-body cardBody mt-4 text-center">
                            <h6 class="fontSubHead mb-3"><span class="textRed">Resume Urgent</span> คือ
                                สถานะของผู้สมัครงานที่กด
                                <span class="textRed">ปุ่มต้องการงานด่วน</span>
                                เพื่อแสดงให้ผู้ประกอบการเห็นถึงความพร้อมในการเริ่มงานได้ทันทีตั้งแต่ 7/15/30
                                วัน</h6>
                            <p class="fontSubText">* ผู้สมัครที่ <span class="textRed">กดปุ่มต้องการงานด่วน</span> ได้นั่น
                                ต้องผ่านการตรวจสอบคุณภาพเรซูเม่จากระบบคัดกรอง ว่าคุณภาพเรซูเม่ตั้งแต่ 85%
                                ขึ้นไป เพื่อความสมบูรณ์ในการสมัครงานกับผู้ประกอบการ</p>
                        </div>
                    </div>
                </div>
                ${/*end Resume Urgent*/ ""}
    
                ${/*ค้นหาจาก filter ค้นหาจากการพิมพ์*/ ""}
                <section>
                    ${/*ปุ่ม ค้นหาจากตัวกรองข้อมูล ค้นหาจากการพิมพ์*/ ""}
                    <article class="btnList mb-3 mt-4" id="btnList">
                        <div><button class="btn btnTab active" onclick="selectFilter()" id="filter">ค้นหาจากตัวกรองข้อมูล</button></div>
                        <div><button class="btn btnTab" onclick="selectPim()" id="pim">ค้นหาจากการพิมพ์</button></div>
                    </article>
                    ${/*end ปุ่ม ค้นหาจากตัวกรองข้อมูล ค้นหาจากการพิมพ์*/ ""}
    
                    ${/*ขั้นตอนที่ 1-6*/ ""}
                    <article id="selectFilter">
                        <h2 class="fontSubHead font-weight-bold mb-3">ค้นหาประวัติพร้อมใช้ เปิด Resume Urgent ทันใจ ได้คนที่ต้องการ</h2>
                        <section class="formSearch gridResumeUrgent">
                            ${/*ขั้นตอนที่ 1 เลือกสาขาอาชีพที่ต้องการค้นหา*/ ""}
                            <article class="flexSmall">
                                <label class="mb-2 textRed">1. เลือกสาขาอาชีพที่ต้องการค้นหา</label>
                                ${/*เลือกสาขาอาชีพหลัก*/ ""}
                                <label class="selectCus">
                                    <select class="form-control formControl">
                                        <option value="">เลือกสาขาอาชีพหลัก</option>
                                        <option>ทั้งหมด</option>
                                        <option>การแพทย์</option>
                                        <option>การศึกษา/วิชาการ</option>
                                        <option>ขนสั่ง/คลังสินค้า</option>
                                        <option>ขาย</option>
                                        <option>คนขับรถ</option>
                                        <option>โฆษณา/สื่อ</option>
                                    </select>                   
                                </label>
                                ${/*end เลือกสาขาอาชีพหลัก*/ ""}
    
                                ${/*เลือกสาขาอาชีพรอง*/ ""}
                                <label class="selectCus">
                                    <select class="form-control formControl">
                                        <option value="">เลือกสาขาอาชีพรอง</option>
                                        <option>ทั้งหมด</option>
                                        <option>การแพทย์</option>
                                        <option>การศึกษา/วิชาการ</option>
                                        <option>ขนสั่ง/คลังสินค้า</option>
                                        <option>ขาย</option>
                                        <option>คนขับรถ</option>
                                        <option>โฆษณา/สื่อ</option>
                                    </select>                
                                </label>
                                ${/*end เลือกสาขาอาชีพรอง*/ ""}
                            </article>
                            ${/*ขั้นตอนที่ 1 เลือกสาขาอาชีพที่ต้องการค้นหา*/ ""}
    
                            ${/*ขั้นตอนที่ 2 เลือกพื้นที่ที่ต้องการค้นหา*/ ""}
                            <article class="flexSmall">
                                <label class="mb-2 textRed">2. เลือกพื้นที่ที่ต้องการค้นหา</label>
                                ${/*เลือกจังหวัด*/ ""}
                                <div class="dropdown dropdownFilter">
                                    <button class="form-control formControl buttonFilter" type="button" data-toggle="dropdown" 
                                        aria-haspopup="true" aria-expanded="false">
                                        <span class="searchEllipsis">เลือกจังหวัด</span>
                                        <i class="fas fa-chevron-down"></i>
                                    </button>
    
                                    <div class="dropdown-menu dropdownNative p-3">
                                        <div class="allWorkList">
                                            <label><input type="checkbox"> ทั้งหมด</label>
                                            <button>ตกลง</button>   
                                        </div>
    
                                        <div class="lineDashUrgent"></div>
    
                                        <ul class="workList listAgain">
                                            ${provinces
                                              .map(
                                                (province) => `
                                            <li><label><input type="checkbox"> ${province}</label></li>
                                            `
                                              )
                                              .join("\n")}
                                        </ul>
                                    </div>
                                </div>
                                ${/*end เลือกจังหวัด*/ ""}
    
                                ${/*เลือกอำเภอ*/ ""}
                                <div class="dropdown dropdownFilter">
                                    <button class="form-control formControl buttonFilter" type="button"
                                        data-toggle="dropdown" aria-haspopup="true"
                                        aria-expanded="false">
                                        <span class="searchEllipsis">เลือกอำเภอ</span>
                                        <i class="fas fa-chevron-down"></i>     
                                    </button>
    
                                    <div class="dropdown-menu dropdownNative p-3">
                                        <div class="allWorkList">
                                            <label><input type="checkbox"> ทั้งหมด</label>
                                            <button>ตกลง</button>                 
                                        </div>
    
                                        <div class="lineDashUrgent"></div>
    
    
                                        <ul class="workList listAgain">
                                            ${districts
                                              .map(
                                                (district) => `
                                            <li><label><input type="checkbox"> ${district}</label></li>
                                            `
                                              )
                                              .join("\n")}
                                        </ul>
                                    </div>
                                </div>
                                ${/*end เลือกอำเภอ*/ ""}
                            </article>
                            ${
                              /*end ขั้นตอนที่ 2 เลือกพื้นที่ที่ต้องการค้นหา*/ ""
                            }
                        </section>
    
                        <div class="lineDash"></div>
    
                        <section class="formSearch gridResumeUrgent">
                            ${
                              /*ขั้นตอนที่ 3 เลือกระดับการศึกษา ที่ต้องการค้นหา*/ ""
                            }
                            <article class="flexSmall">
                                <label class="mb-2 textRed">3. เลือกระดับการศึกษา ที่ต้องการค้นหา</label>
                                ${/*เลือกระดับการศึกษาต่ำสุด*/ ""}
                                <label class="selectCus">
                                    <select class="form-control formControl">
                                        <option value="">เลือกระดับการศึกษาต่ำสุด</option>
                                        <option>ปริญญาตรี</option>
                                        <option>ปริญญาโท</option>
                                        <option>ปริญญาเอก</option>
                                    </select>                       
                                </label>
                                ${/*end เลือกระดับการศึกษาต่ำสุด*/ ""}
    
                                ${/*เลือกระดับการศึกษาสูงสุด*/ ""}
                                <label class="selectCus">
                                    <select class="form-control formControl">
                                        <option value="">เลือกระดับการศึกษาสูงสุด</option>
                                        <option>ปริญญาตรี</option>
                                        <option>ปริญญาโท</option>
                                        <option>ปริญญาเอก</option>
                                    </select>           
                                </label>
                                ${/*end เลือกระดับการศึกษาสูงสุด*/ ""}
                            </article>
                            ${
                              /*end ขั้นตอนที่ 3 เลือกระดับการศึกษา ที่ต้องการค้นหา*/ ""
                            }
    
                            ${
                              /*ขั้นตอนที่ 4 เลือกประสบการณ์ทำงาน ที่ต้องการค้นหา*/ ""
                            }
                            <article class="flexSmall">
                                <label class="mb-2 textRed">4. เลือกประสบการณ์ทำงาน ที่ต้องการค้นหา</label>
                                ${/*เลือกประสบการณ์สูงสุด*/ ""}
                                <label class="selectCus">
                                    <select class="form-control formControl">
                                        <option value="">เลือกประสบการณ์สูงสุด</option>
                                        <option>1 ปี</option>
                                        <option>2 ปี</option>
                                        <option>3 ปี</option>
                                        <option>4 ปี</option>
                                        <option>5 ปี</option>
                                        <option>6 ปี</option>
                                    </select>
                                </label>
                                ${/*end เลือกประสบการณ์สูงสุด*/ ""}
    
                                ${/*เลือกประสบการณ์ต่ำสุด*/ ""}
                                <label class="selectCus">
                                    <select class="form-control formControl">
                                        <option value="">เลือกประสบการณ์ต่ำสุด</option>
                                        <option>1 ปี</option>
                                        <option>2 ปี</option>
                                        <option>3 ปี</option>
                                        <option>4 ปี</option>
                                        <option>5 ปี</option>
                                        <option>6 ปี</option>
                                    </select>
                                </label>
                                ${/*end เลือกประสบการณ์ต่ำสุด*/ ""}
                            </article>
                            ${
                              /*end ขั้นตอนที่ 4 เลือกประสบการณ์ทำงาน ที่ต้องการค้นหา*/ ""
                            }
                        </section>
    
                        <div class="lineDash"></div>
    
                        <section class="formSearch gridResumeUrgent">
                            ${/*ขั้นตอนที่ 5 เลือกอายุ ที่ต้องการค้นหา*/ ""}
                            <article class="flexSmall">
                                <label class="mb-2 textRed">5. เลือกอายุ ที่ต้องการค้นหา</label>
                                ${/*เลือกอายุต่ำสุด*/ ""}
                                <label class="selectCus">
                                    <select class="form-control formControl">
                                        <option value="">เลือกอายุต่ำสุด</option>
                                        <option>1 ปี</option>
                                        <option>2 ปี</option>
                                        <option>3 ปี</option>
                                        <option>4 ปี</option>
                                        <option>5 ปี</option>
                                        <option>6 ปี</option>
                                    </select>
                                </label>
                                ${/*end เลือกอายุต่ำสุด*/ ""}
    
                                ${/*เลือกอายุสูงสุด*/ ""}
                                <label class="selectCus">
                                    <select class="form-control formControl">
                                        <option value="">เลือกประสบการณ์สูงสุด</option>
                                        <option>1 ปี</option>
                                        <option>2 ปี</option>
                                        <option>3 ปี</option>
                                        <option>4 ปี</option>
                                        <option>5 ปี</option>
                                        <option>6 ปี</option>
                                    </select>          
                                </label>
                                ${/*end เลือกอายุสูงสุด*/ ""}
                            </article>
                            ${/*end ขั้นตอนที่ 5 เลือกอายุ ที่ต้องการค้นหา*/ ""}
    
                            ${
                              /*ขั้นตอนที่ 6 เลือกคุณสมบัติอื่นๆ ที่ต้องการ*/ ""
                            }
                            <article class="flexSmall">
                                <label class="mb-2 textRed">6. เลือกคุณสมบัติอื่นๆ ที่ต้องการ</label>
                                <div class="gridOther">
                                    ${/*เลือกเพศ*/ ""}
                                    <label class="selectCus">
                                        <select class="form-control formControl">
                                            <option value="">เลือกเพศ</option>
                                            <option>ชาย</option>
                                            <option>หญิง</option>
                                            <option>ชาย/หญิง</option>
                                        </select>      
                                    </label>
                                    ${/*end เลือกเพศ*/ ""}
    
                                    ${/*เลือกระดับการทำงาน*/ ""}
                                    <label class="selectCus">
                                        <select class="form-control formControl">
                                            <option value="">เลือกระดับการทำงาน</option>
                                            <option>ระดับเจ้าหน้าที่</option>
                                            <option>ระดับหัวหน้างาน</option>
                                            <option>ระดับชำนาญ</option>
                                            <option>ระดับหัวหน้าแผนก</option>
                                        </select>     
                                    </label>
                                    ${/*end เลือกระดับการทำงาน*/ ""}
    
                                    ${/*เลือกสถานะผู้สมัครงาน*/ ""}
                                    <label class="selectCus">
                                        <select class="form-control formControl">
                                            <option value="">เลือกสถานะผู้สมัครงาน</option>
                                            <option>งานประจำ</option>
                                            <option>งานพาร์ทไทม์</option>
                                            <option>งานเป็นกะ</option>
                                            <option>งานปรีแลนซ์</option>
                                        </select>                  
                                    </label>
                                    ${/*end เลือกสถานะผู้สมัครงาน*/ ""}
    
                                    ${/*เลือกยานพาหนะส่วนตัว*/ ""}
                                    <label class="selectCus">
                                        <select class="form-control formControl">
                                            <option value="">เลือกยานพาหนะส่วนตัว</option>
                                            <option>รถส่วนตัว</option>
                                            <option>จักรยานยนต์</option>
                                            <option>รถบรรทุก</option>
                                        </select>
                                    </label>
                                    ${/*end เลือกยานพาหนะส่วนตัว*/ ""}
                                </div>
                            </article>
                            ${
                              /*end ขั้นตอนที่ 6 เลือกคุณสมบัติอื่นๆ ที่ต้องการ*/ ""
                            }
                        </section>
    
                        ${/*ค้นหา Resume Urgent*/ ""}
                        <div class="flexReset_urgent fontSubHead mt-5">
                            <div class="urgentSearch"><button>ค้นหา Resume Urgent</button></div>
                            <div class="resetCondition"><button>รีเซ็ตเงื่อนไข</button></div>
                        </div>
                        ${/*end ค้นหา Resume Urgent*/ ""}
                    </article>
                    ${/*end ขั้นตอนที่ 1 -6*/ ""}
    
                    ${/*ค้นหาจากการพิมพ์*/ ""}
                    <article id="searchPim">
                        <h2 class="fontSubHead font-weight-bold mb-3" id="pim">ค้นหาจากการพิมพ์</h2>
                        <section class="gridTextSearch mb-3">
                            ${/*พิมพ์ชื่อตำแหน่งงานหรือคำค้นหา */ ""}
                            <div>
                                <input type="text" class="form-control formControl" placeholder="พิมพ์ชื่อตำแหน่งงานหรือคำค้นหา">
                                <p class="fontSubText textlightGreen mt-1">ตัวอย่าง เช่น พนักงานขายรถยนต์, วิศวกรไฟฟ้า, ช่างอาคาร เป็นต้น</p>
                            </div>        
                            ${/*end พิมพ์ชื่อตำแหน่งงานหรือคำค้นหา */ ""}
    
                            ${/*เลือกสถานที่ทำงาน */ ""}
                            <div>
                                <label class="selectCus">
                                    <select class="form-control formControl">
                                        <option value="">เลือกสถานที่ทำงาน</option>
                                        <option>รัชดา</option>
                                        <option>ลาดพร้าว</option>
                                        <option>รามคำแหง</option>
                                        <option>พหลโยธิน</option>
                                        <option>เกษตรนวมินทร์</option>
                                        <option>สุขุมวิท</option>
                                        <option>ทองหล่อ</option>
                                    </select>
                                </label>
                            </div>
                            ${/*end เลือกสถานที่ทำงาน */ ""}
    
                            <div>
                                <button class="urgentSearch">ค้นหา Resume Urgent</button>
                            </div>
                        </section>
    
                        ${/* คำค้นหายอดนิยม */ ""}
                        <section class="hiddenHit">
                            <h6 class="mb-3 fontText font-weight-bold">คำค้นหายอดนิยม</h6>
    
                            <ul class="flexSearch mb-3">
                                ${searchs
                                  .map(
                                    (search) => `
                                <li class="mr-2 mb-2 fontSubText"><a href="${path}index.html" onclick="link()">${search}</a></li>
                                `
                                  )
                                  .join("\n")}
                            </ul>
                        </section>
                        ${/* end คำค้นหายอดนิยม */ ""}
                    </article>
                    ${/*end ค้นหาจากการพิมพ์*/ ""}
                </section>
                ${/*end ค้นหาจาก filter ค้นหาจากการพิมพ์*/ ""}
            </div>
        </div>
    </div>`;

  document.querySelector("#resumeUrgent").innerHTML = resumeUrgent;
}
searchResumeUrgentPremium();

// เลือกตรงดรอปดาว
$(document).on("click", ".dropDownScroll, .dropdownNative", function (e) {
  e.stopPropagation();
});

// scroll ค้นหาจากการพิมพ์
// function getPim() {
//     $('html, body').animate({
//         scrollTop: eval($('#mainGetPim').offset().top - 70)
//     }, 1000);
// }

// toggle ซ่อนข้อความ อ่านเพิ่มเติม
$(document).on("click", "#getBox", function () {
  let aBox = `<button class="btn btn-link btn-block text-left aBox" type="button" data-toggle="collapse"
                    data-target="#colButton" aria-expanded="true" aria-controls="colButton" id="getBox">ซ่อนข้อความ
                </button>`;

  let bBox = `<button class="btn btn-link btn-block text-left bBox" type="button" data-toggle="collapse"
                    data-target="#colButton" aria-expanded="true" aria-controls="colButton" id="getBox">อ่านข้อความ
                </button>`;
  let display = $(this).hasClass("aBox")
    ? $(this).replaceWith(bBox)
    : $(this).replaceWith(aBox);
});
// end toggle ซ่อนข้อความ อ่านเพิ่มเติม

// ค้นหาจาก filter ค้นหาจากการพิมพ์
let searchFilter = document.querySelector("#selectFilter");
let searchPim = document.querySelector("#searchPim");
searchPim.style.display = "none";
let btnTab = document.getElementById("pim");
let btnFil = document.getElementById("filter");

// ค้นหาจาก filter
function selectFilter() {
  searchFilter.style.display = "block";
  searchPim.style.display = "none";
  btnTab.classList.remove("active");
}

// ค้นหาจากการพิมพ์
function selectPim() {
  searchPim.style.display = "block";
  searchFilter.style.display = "none";
  btnFil.classList.remove("active");
}

let idFilterPim = document.querySelector("#btnList");
let buttonFilterPims = idFilterPim.querySelectorAll(".btn");
for (let index = 0; index < buttonFilterPims.length; index++) {
  buttonFilterPims[index].addEventListener("click", function () {
    let active = document.querySelectorAll(".active");
    active[0].className = active[0].className.replace(" active", "");
    this.className += " active";
  });
}
// end ค้นหาจาก filter ค้นหาจากการพิมพ์
