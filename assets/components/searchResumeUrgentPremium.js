var resumeUrgent = ''

resumeUrgent += `<div class="container">`
resumeUrgent += `<div class="row">`
resumeUrgent += `<div class="col-12">`
// Resume Urgent
resumeUrgent += `<div class="accordion" id="resumeUrgentButton">
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
        <div class="card-body cardBody mt-3 text-center">
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
</div>`
// Resume Urgent

resumeUrgent += `<div class="lineDash"></div>`

resumeUrgent += `<div>`
resumeUrgent += `<section class="flexGetPim mb-3">
                    <h2 class="fontSubHead font-weight-bold">ค้นหาประวัติพร้อมใช้ เปิด Resume Urgent ทันใจ ได้คนที่ต้องการ</h2>
                    <div class="getPim">
                        <button onclick="getPim()">ค้นหาจากการพิมพ์</button>
                    </div>
                </section>`

// ขั้นตอน 1-2
resumeUrgent += `<section class="formSearch gridResumeUrgent">`
// ขั้นตอนที่ 1 เลือกสาขาอาชีพที่ต้องการค้นหา
resumeUrgent += `<article class="flexSmall">`
resumeUrgent += `<label class="mb-2 textRed">1. เลือกสาขาอาชีพที่ต้องการค้นหา</label>`
// เลือกสาขาอาชีพหลัก
resumeUrgent += `<label class="selectCus">
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
                    </label>`
// end เลือกสาขาอาชีพหลัก

// เลือกสาขาอาชีพรอง
resumeUrgent += `<label class="selectCus">
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
                    </label>`
// end เลือกสาขาอาชีพรอง
resumeUrgent += `</article>`
// end ขั้นตอนที่ 1 เลือกสาขาอาชีพที่ต้องการค้นหา

// ขั้นตอนที่ 2 เลือกพื้นที่ที่ต้องการค้นหา
resumeUrgent += `<article class="flexSmall">`
resumeUrgent += `<label class="mb-2 textRed">2. เลือกพื้นที่ที่ต้องการค้นหา</label>`
// เลือกจังหวัด
resumeUrgent += `<div class="dropdown dropdownFilter">`
resumeUrgent += `<button class="form-control formControl buttonFilter" type="button" data-toggle="dropdown" 
                aria-haspopup="true" aria-expanded="false">
                <span class="searchEllipsis">เลือกจังหวัด</span>
                <i class="fas fa-chevron-down"></i>
            </button>`

resumeUrgent += `<div class="dropdown-menu dropdownNative p-3">`
resumeUrgent += `<div class="allWorkList">
                    <label><input type="checkbox"> ทั้งหมด</label>
                        <button>ตกลง</button>
                </div>`

resumeUrgent += `<div class="lineDashUrgent"></div>`

let provinces = [
    'กรุงเทพมหานคร',
    'กาญจนบุรี',
    'สมุทรปราการ',
    'เชียงใหม่',
    'นครปฐม',
    'น่าน'
]
resumeUrgent += `<ul class="workList listAgain">`
for (let province = 0; province < provinces.length; province++) {
    resumeUrgent += `<li><label>${provinces[province]}</label></li>`
}
resumeUrgent += `</ul>`
resumeUrgent += `</div>`
resumeUrgent += `</div>`
// end เลือกจังหวัด

// เลือกอำเภอ
resumeUrgent += `<div class="dropdown dropdownFilter">`
resumeUrgent += `<button class="form-control formControl buttonFilter" type="button"
                data-toggle="dropdown" aria-haspopup="true"
                aria-expanded="false">
                <span class="searchEllipsis">เลือกอำเภอ</span>
                <i class="fas fa-chevron-down"></i>
            </button>`

resumeUrgent += `<div class="dropdown-menu dropdownNative p-3">`
resumeUrgent += `<div class="allWorkList">
                    <label><input type="checkbox"> ทั้งหมด</label>
                    <button>ตกลง</button>
                </div>`

resumeUrgent += `<div class="lineDashUrgent"></div>`

let districts = [
    'บางกะปิ',
    'สะพานสูง',
    'วังทองหลาง',
    'ลาดพร้าว',
    'บางใหญ่',
    'บางบัวทอง'
]
resumeUrgent += `<ul class="workList listAgain">`
for (let district = 0; district < districts.length; district++) {
    resumeUrgent += `<li><label><input type="checkbox"> ${districts[district]}</label></li>`
}
resumeUrgent += `</ul>`
resumeUrgent += `</div>`
resumeUrgent += `</div>`
// end เลือกอำเภอ

resumeUrgent += `</article>`
// end ขั้นตอนที่ 2 เลือกพื้นที่ที่ต้องการค้นหา
resumeUrgent += `</section>`
// end ขั้นตอน 1-2

resumeUrgent += `<div class="lineDash"></div>`

// ขั้นตอน 3-4
resumeUrgent += `<section class="formSearch gridResumeUrgent">`
// ขั้นตอนที่ 3 เลือกระดับการศึกษา ที่ต้องการค้นหา
resumeUrgent += `<article class="flexSmall">`
resumeUrgent += `<label class="mb-2 textRed">3. เลือกระดับการศึกษา ที่ต้องการค้นหา</label>`
// เลือกระดับการศึกษาต่ำสุด
resumeUrgent += `<label class="selectCus">
                        <select class="form-control formControl">
                            <option value="">เลือกระดับการศึกษาต่ำสุด</option>
                            <option>ปริญญาตรี</option>
                            <option>ปริญญาโท</option>
                            <option>ปริญญาเอก</option>
                        </select>
                    </label>`
// end เลือกระดับการศึกษาต่ำสุด

// เลือกระดับการศึกษาสูงสุด
resumeUrgent += `<label class="selectCus">
            <select class="form-control formControl">
                <option value="">เลือกระดับการศึกษาสูงสุด</option>
                <option>ปริญญาตรี</option>
                <option>ปริญญาโท</option>
                <option>ปริญญาเอก</option>
            </select>
        </label>`
// <!--end เลือกระดับการศึกษาสูงสุด
resumeUrgent += `</article>`
// end ขั้นตอนที่ 3 เลือกระดับการศึกษา ที่ต้องการค้นหา

// ขั้นตอนที่ 4 เลือกประสบการณ์ทำงาน ที่ต้องการค้นหา
resumeUrgent += `<article class="flexSmall">`
resumeUrgent += `<label class="mb-2 textRed">4. เลือกประสบการณ์ทำงาน ที่ต้องการค้นหา</label>`
// เลือกประสบการณ์สูงสุด
resumeUrgent += `<label class="selectCus">`
resumeUrgent += `<select class="form-control formControl">
                <option value="">เลือกประสบการณ์สูงสุด</option>
                <option>1 ปี</option>
                <option>2 ปี</option>
                <option>3 ปี</option>
                <option>4 ปี</option>
                <option>5 ปี</option>
                <option>6 ปี</option>
            </select>`
resumeUrgent += `</label>`
// end เลือกประสบการณ์ทำงานสูงสุด

// เลือกประสบการณ์ต่ำสุด
resumeUrgent += `<label class="selectCus">`
resumeUrgent += `<select class="form-control formControl">
            <option value="">เลือกประสบการณ์ต่ำสุด</option>
            <option>1 ปี</option>
            <option>2 ปี</option>
            <option>3 ปี</option>
            <option>4 ปี</option>
            <option>5 ปี</option>
            <option>6 ปี</option>
        </select>`
resumeUrgent += `</label>`
// end เลือกประสบการณ์ต่ำสุด
resumeUrgent += `</article>`
// end ขั้นตอนที่ 4 เลือกประสบการณ์ทำงาน ที่ต้องการค้นหา
resumeUrgent += `</section>`
// end ขั้นตอน 3-4

resumeUrgent += `<div class="lineDash"></div>`

// ขั้นตอน 5-6
resumeUrgent += `<section class="formSearch gridResumeUrgent">`
// ขั้นตอนที่ 5 เลือกอายุ ที่ต้องการค้นหา
resumeUrgent += `<article class="flexSmall">`
resumeUrgent += `<label class="mb-2 textRed">5. เลือกอายุ ที่ต้องการค้นหา</label>`
// เลือกอายุต่ำสุด
resumeUrgent += `<label class="selectCus">
                            <select class="form-control formControl">
                                <option value="">เลือกอายุต่ำสุด</option>
                                <option>1 ปี</option>
                                <option>2 ปี</option>
                                <option>3 ปี</option>
                                <option>4 ปี</option>
                                <option>5 ปี</option>
                                <option>6 ปี</option>
                            </select>
                        </label>`
// end เลือกอายุต่ำสุด

// เลือกอายุสูงสุด
resumeUrgent += `<label class="selectCus">
            <select class="form-control formControl">
                <option value="">เลือกประสบการณ์สูงสุด</option>
                <option>1 ปี</option>
                <option>2 ปี</option>
                <option>3 ปี</option>
                <option>4 ปี</option>
                <option>5 ปี</option>
                <option>6 ปี</option>
            </select>
        </label>`
// end เลือกอายุสูงสุด
resumeUrgent += `</article>`
// end ขั้นตอนที่ 5 เลือกอายุ ที่ต้องการค้นหา

// ขั้นตอนที่ 6 เลือกคุณสมบัติอื่นๆ ที่ต้องการ
resumeUrgent += `<article class="flexSmall">`
resumeUrgent += `<label class="mb-2 textRed">6. เลือกคุณสมบัติอื่นๆ ที่ต้องการ</label>`
resumeUrgent += `<div class="gridOther">`
// เลือกเพศ
resumeUrgent += `<label class="selectCus">
        <select class="form-control formControl">
            <option value="">เลือกเพศ</option>
            <option>ชาย</option>
            <option>หญิง</option>
            <option>ชาย/หญิง</option>
        </select>
    </label>`
// end เลือกเพศ

// เลือกระดับการทำงาน
resumeUrgent += `<label class="selectCus">
            <select class="form-control formControl">
                <option value="">เลือกระดับการทำงาน</option>
                <option>ระดับเจ้าหน้าที่</option>
                <option>ระดับหัวหน้างาน</option>
                <option>ระดับชำนาญ</option>
                <option>ระดับหัวหน้าแผนก</option>
            </select>
        </label>`
// end เลือกระดับการทำงาน

// เลือกสถานะผู้สมัครงาน
resumeUrgent += `<label class="selectCus">
            <select class="form-control formControl">
                <option value="">เลือกสถานะผู้สมัครงาน</option>
                <option>งานประจำ</option>
                <option>งานพาร์ทไทม์</option>
                <option>งานเป็นกะ</option>
                <option>งานปรีแลนซ์</option>
            </select>
        </label>`
// end เลือกสถานะผู้สมัครงาน

// เลือกยานพาหนะส่วนตัว
resumeUrgent += `<label class="selectCus">
        <select class="form-control formControl">
            <option value="">เลือกยานพาหนะส่วนตัว</option>
            <option>รถส่วนตัว</option>
            <option>จักรยานยนต์</option>
            <option>รถบรรทุก</option>
        </select>
    </label>`
// end เลือกยานพาหนะส่วนตัว
resumeUrgent += `</div>`
resumeUrgent += `</article>`
// end ขั้นตอนที่ 6 เลือกคุณสมบัติอื่นๆ ที่ต้องการ
resumeUrgent += `</section>`
// ขั้นตอน 5-6

// ค้นหา Resume Urgent
resumeUrgent += `<div class="text-center mt-5"><button class="urgentSearch width">ค้นหา Resume Urgent</button></div>`
// end ค้นหา Resume Urgent

// end ขั้นตอนที่ 6 เลือกคุณสมบัติอื่นๆ ที่ต้องการ
resumeUrgent += `</div>`

resumeUrgent += `<div class="lineDash"></div>`

// ค้นหาจากการพิมพ์
resumeUrgent += `<div id="mainGetPim">`
resumeUrgent += `<h2 class="fontSubHead font-weight-bold mb-3" id="pim">ค้นหาจากการพิมพ์</h2>`
resumeUrgent += `<section class="gridTextSearch mb-3">`
// พิมพ์ชื่อตำแหน่งงานหรือคำค้นหา
resumeUrgent += `<div>
                <input type="text" class="form-control formControl"
                    placeholder="พิมพ์ชื่อตำแหน่งงานหรือคำค้นหา">
                    <p class="fontSubText textlightGreen mt-1">ตัวอย่าง เช่น พนักงานขายรถยนต์,
                                                    วิศวกรไฟฟ้า, ช่างอาคาร เป็นต้น</p>
                                            </div>`
// end พิมพ์ชื่อตำแหน่งงานหรือคำค้นหา

// เลือกสถานที่ทำงาน
resumeUrgent += `<div>
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
</div>`
// end เลือกสถานที่ทำงาน

// ค้นหา Resume Urgent
resumeUrgent += `<div>
    <button class="urgentSearch">ค้นหา Resume Urgent</button>
    </div>`
// end // ค้นหา Resume Urgent
resumeUrgent += `</section>`

resumeUrgent += `<section class="hiddenHit">`
resumeUrgent += `<h6 class="mb-3 fontText font-weight-bold">คำค้นหายอดนิยม</h6>`

let hit = (location.href.split('/').length == 6) ? '' : '../'
let searchs = [
    'พนักงานขาย',
    'Digital Marketing',
    'sales',
    'programmer',
    'sale engineer',
    'IT support',
    'บัญชีต้นทุน',
    'วิศวกร',
    'ช่างเทคนิค',
    'AE',
    'พนักงานพีซี',
    'Mobile Application'
]
resumeUrgent += `<ul class="flexSearch mb-3">`
for (let search = 0; search < searchs.length; search++) {
    resumeUrgent += `<li class="mr-2 mb-2 fontSubText"><a href="${hit}index.html" onclick="link()">${searchs[search]}</a></li>`
}
resumeUrgent += `</ul>`
resumeUrgent += `</section>`
resumeUrgent += `</div>`
// end เลือกสถานที่ทำงาน
resumeUrgent += `</div>`
resumeUrgent += `</div>`
resumeUrgent += `</div>`

document.getElementById('resumeUrgent').innerHTML = resumeUrgent

// เลือกตรงดรอปดาว
$(document).on("click", ".dropDownScroll, .dropdownNative", function (e) {
    e.stopPropagation();
});

// scroll ค้นหาจากการพิมพ์
function getPim() {
    $('html, body').animate({
        scrollTop: eval($('#mainGetPim').offset().top - 70)
    }, 1000);
}

// toggle ซ่อนข้อความ อ่านเพิ่มเติม
$(document).on('click', '#getBox', function () {
    let aBox = `<button class="btn btn-link btn-block text-left aBox" type="button" data-toggle="collapse"
                    data-target="#colButton" aria-expanded="true" aria-controls="colButton" id="getBox">ซ่อนข้อความ
                </button>`
                
    let bBox = `<button class="btn btn-link btn-block text-left bBox" type="button" data-toggle="collapse"
                    data-target="#colButton" aria-expanded="true" aria-controls="colButton" id="getBox">อ่านข้อความ
                </button>`
    let display = ($(this).hasClass('aBox')) ? $(this).replaceWith(bBox) : $(this).replaceWith(aBox);
})

