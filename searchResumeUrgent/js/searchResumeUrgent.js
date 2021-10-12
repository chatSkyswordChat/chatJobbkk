var searchResumeUrgent = "";

// Resume Urgent แนะนำสำหรับคุณ
searchResumeUrgent += `<article class="clLightGray borderRadiusStyle p-3">`;
searchResumeUrgent += `<h2 class="fontSubHead textRed mb-3">Resume Urgent แนะนำสำหรับคุณ</h2>`;
searchResumeUrgent += `<section class="gridResumeUrgentList">`;
let searchUrgents = [
  {
    img: "images/pic1.jpg",
    position: "Web Designer",
    sex: "หญิง",
    age: "33",
    money: "45,000-70,000",
    exp1: "พนักงานขาย",
    exp2: "Telesales",
    exp3: "Call Center",
    area: "กรุงเทพมหานคร",
    scoreWidth: "85%",
    urgent: "7 วัน",
    time: "56 นาทีที่แล้ว",
  },
  {
    img: "images/pic2.jpg",
    position: "Graphic Designer",
    sex: "หญิง",
    age: "33",
    money: "75,000-90,000",
    exp1: "sales representative",
    exp2: "วิทยาศาสตร์ /Lab/วิจัยและพัฒนา",
    exp3: "วิศวกรรม",
    area: "พระนครศรีอยุธยา",
    scoreWidth: "55%",
    urgent: "15 วัน",
    time: "26 นาทีที่แล้ว",
  },
  {
    img: "images/pic3.jpg",
    position: "ขนส่ง/คลังสินค้า",
    sex: "ชาย",
    age: "33",
    money: "95,000-130,000",
    exp1: "โฆษณา /สื่อ",
    exp2: "ท่องเที่ยว/โรงเเรม",
    exp3: "general manager",
    area: "สมุทรสาคร",
    scoreWidth: "35%",
    urgent: "3 วัน",
    time: "45 นาทีที่แล้ว",
  },
];

searchUrgents.forEach((searchUrgent) => {
  searchResumeUrgent += `
  <div class="borderStyle borderRadiusStyle p-3 resumeUrgent">
    <a href="javascript:void(0)" onclick="link()">
      <div class="flexPicResume mb-2">
        <div class="growFlex">
          <figure><img src="${searchUrgent.img}" alt=""></figure>
        </div>

        <div class="basis">
          <h6><span class="font-weight-bold">ตำแหน่งงานที่สมัคร :</span> 
            <span class="textRed word_break">${searchUrgent.position}</span>
          </h6>
          
          <div>
            <p><span class="font-weight-bold">เพศ :</span> ${searchUrgent.sex}</p>
            <p><span class="font-weight-bold">อายุ :</span> ${searchUrgent.age} ปี</p>
            <p><span class="font-weight-bold">เงินเดือนที่ต้องการ (บาท) :</span>
                ${searchUrgent.money}</p>
          </div>
        </div>                           
      </div>

      <div class="lineDashUrgent"></div>

      <div class="mb-2">
        <h6 class="font-weight-bold">ประสบการณ์ตามตำแหน่งงาน</h6>
        <ul class="expWork">
          <li>
            <span>1.</span>
            <p>${searchUrgent.exp1}</p>
          </li>
          <li>
            <span>2.</span>
            <p>${searchUrgent.exp2}</p>
          </li>
          <li>
            <span>3.</span>
            <p>${searchUrgent.exp3}</p>
          </li>     
        </ul>
      </div>

      <div class="gridArea mb-2">
        <p><span class="font-weight-bold">พื้นที่ที่ต้องการทำงาน : </span>${searchUrgent.area}</p>
        <div>
          <p class="font-weight-bold">Resume Score :</p>
          <div class="progress">
            <div class="progress-bar clGreen" role="progressbar"
              style="width: ${searchUrgent.scoreWidth};" aria-valuenow="25" aria-valuemin="0"
                  aria-valuemax="100">${searchUrgent.scoreWidth}
            </div>
          </div>
        </div>                   
      </div>                      

      <div class="gridArea mb-2">
        <p class="flexColumns textRed">
          <span class="font-weight-bold">Resume Urgent : </span>
          <span>${searchUrgent.urgent}</span>
        </p>
        <p><span class="font-weight-bold">อัพเดทเรซูเม่ล่าสุด : </span>${searchUrgent.time}</p>
      </div>
    </a>
  </div>`;
});

searchResumeUrgent += `</section>`;
searchResumeUrgent += `</article>`;
// end Resume Urgent แนะนำสำหรับคุณ

searchResumeUrgent += `<div class="lineDash"></div>`;

// Resume Urgent
searchResumeUrgent += `<article>`;
searchResumeUrgent += `<div class="flexProcessList mb-3">
                                <h2 class="fontSubHead">เรียงลำดับงานตาม </h2>
                                <div class="form-group">
                                    <select class="form-control formControlList">
                                        <option>ประวัติใหม่ล่าสุด</option>
                                        <option>งานใหม่ล่าสุด</option>
                                        <option>เงินเดือนสูงสุด-ต่ำสุด</option>
                                        <option>เงินเดือนต่ำสุด-สูงสุด</option>
                                    </select>
                                </div>
                            </div>`;

searchResumeUrgent += `<div class="gridUrgentColumn mb-5">`;
// list urgent
searchResumeUrgent += `<section>`;

let listUrgents = [
  {
    img: "images/pic1.jpg",
    position: "Web Designer",
    sex: "หญิง",
    age: "33",
    money: "45,000-70,000",
    exp1: "พนักงานขาย",
    exp2: "Telesales",
    exp3: "Call Center",
    area: "กรุงเทพมหานคร",
    scoreWidth: "85%",
    urgent: "7 วัน",
    time: "56 นาทีที่แล้ว",
    study: "ออกแบบนิเทศศิลป์, มหาวิทยาลัยราชภัฏสวนสุนันทา",
    year: "10",
  },
  {
    img: "images/pic2.jpg",
    position: "แม่บ้าน/พี่เลี้ยง/คนสวน/รปภ",
    sex: "หญิง",
    age: "33",
    money: "35,000-70,000",
    exp1: "บุคคล/ฝึกอบรม",
    exp2: "บริการลูกค้า/ลูกค้าสัมพันธ์/Call Center",
    exp3: "มัคคุเทศก์/จองห้อง/จองตั๋ว",
    area: "ฉะเชิงเทรา",
    scoreWidth: "35%",
    urgent: "30 วัน",
    time: "6 นาทีที่แล้ว",
    study: "ออกแบบนิเทศศิลป์, มหาวิทยาลัยราชภัฏสวนสุนันทา",
    year: "5",
  },
  {
    img: "images/pic3.jpg",
    position: "ก่อสร้าง",
    sex: "ชาย",
    age: "33",
    money: "35,000-70,000",
    exp1: "การตลาด / PR",
    exp2: "การผลิต / QA&QC",
    exp3: "การผลิต / QA&QC",
    area: "สมุทรปราการ",
    scoreWidth: "65%",
    urgent: "15 วัน",
    time: "36 นาทีที่แล้ว",
    study: "ออกแบบนิเทศศิลป์, มหาวิทยาลัยราชภัฏสวนสุนันทา",
    year: "7",
  },
  {
    img: "images/pic1.jpg",
    position: "ก่อสร้าง",
    sex: "หญิง",
    age: "33",
    money: "65,000-80,000",
    exp1: "การตลาด / PR",
    exp2: "การผลิต / QA&QC",
    exp3: "การศึกษา/ วิชาการ",
    area: "สมุทรปราการ",
    scoreWidth: "65%",
    urgent: "15 วัน",
    time: "36 นาทีที่แล้ว",
    study: "ออกแบบนิเทศศิลป์, มหาวิทยาลัยราชภัฏสวนสุนันทา",
    year: "7",
  },
  {
    img: "images/pic2.jpg",
    position: "ก่อสร้าง",
    sex: "หญิง",
    age: "33",
    money: "65,000-80,000",
    exp1: "การตลาด / PR",
    exp2: "การผลิต / QA&QC",
    exp3: "บริการลูกค้า/ลูกค้าสัมพันธ์/Call Center",
    area: "สมุทรปราการ",
    scoreWidth: "65%",
    urgent: "15 วัน",
    time: "36 นาทีที่แล้ว",
    study: "ออกแบบนิเทศศิลป์, มหาวิทยาลัยราชภัฏสวนสุนันทา",
    year: "7",
  },
];
listUrgents.forEach((listUrgent) => {
  searchResumeUrgent += `<div class="borderStyle borderRadiusStyle p-3 mb-3 resumeUrgent">`;
  searchResumeUrgent += `
    <div class="flexPicResume between mb-2">
        <div class="flexAlign growFlex">
            <figure><img src="${listUrgent.img}" alt=""></figure>
            <div>
                <p>Resume Score</p>
                <div class="progress">
                    <div class="progress-bar clGreen" role="progressbar"
                        style="width: ${listUrgent.scoreWidth};" aria-valuenow="25" aria-valuemin="0"
                        aria-valuemax="100">${listUrgent.scoreWidth}
                    </div>
                </div>
            </div>
        </div>

        <div class="flexTwo">
            <div>
                <h6><span class="font-weight-bold">ตำแหน่งงานที่สมัคร :</span> <span
                        class="textRed">${listUrgent.position}</span></h6>
                <div>
                    <p><span class="font-weight-bold">เพศ :</span> ${listUrgent.sex}</p>
                    <p><span class="font-weight-bold">อายุ :</span> ${listUrgent.age} ปี</p>
                    <p><span class="font-weight-bold">ปริญญาตรี : </span>${listUrgent.study}</p>
                    <p><span class="font-weight-bold">เงินเดือนที่ต้องการ (บาท) :</span> ${listUrgent.money}</p>
                    <p><span class="font-weight-bold">พื้นที่ที่ต้องการทำงาน : </span>${listUrgent.area}</p>
                    <p><span class="font-weight-bold">ประสบการณืทำงาน(ปี) : </span>${listUrgent.year}</p>
                </div>
            </div>

            <div class="growFlex">
                <p class="textRed"><span class="textRed font-weight-bold">Resume Urgent : </span> ${listUrgent.urgent}</p>
                <div class="saveWork">
                    <button class="active saveHeart" data-toggle="modal" data-target="#heart">
                        <i class="fas fa-heart"></i>
                    </button>
                    <p class="textSky"><i class="far fa-clock"></i> ${listUrgent.time}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="lineDashUrgent"></div>

    <div class="flexSuper mb-2">
        <div class="listGrow">
            <h6 class="font-weight-bold">ประสบการณ์ตามตำแหน่งงาน</h6>
            <ul class="expWork">
                <li>
                    <span>1.</span>
                    <p>${listUrgent.exp1}</p>
                </li>
                <li>
                    <span>2.</span>
                    <p>${listUrgent.exp2}</p>
                </li>
                <li>
                    <span>3.</span>
                    <p>${listUrgent.exp3}</p>
                </li>
            </ul>
        </div>

        <div><a href="javascript:void(0)" onclick="link()">อ่านประวัติผู้สมัคร</a></div>
    </div>`;
  searchResumeUrgent += `</div>`;
});

searchResumeUrgent += `<nav aria-label="Page navigation example">
                                        <ul class="pagination flexPagination mb-3">
                                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                            <li class="page-item"><a class="page-link active" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                        </ul>
                                    </nav>`;

searchResumeUrgent += `</section>`;
// end list urgent

// banner tag
searchResumeUrgent += `<section>`;

// banner
searchResumeUrgent += `<div class="bannerUrgent">
                                        <figure class="borderStyle mb-3"><a href="javascript:void(0)" onclick="link()">
                                                <img src="images/bn.jpg" alt=""></a>
                                        </figure>
                                    </div>`;
// end banner

//  คุณกำลังต้องการคนด่วนใช่ไหม
searchResumeUrgent += `<div class="popUpUrgent mb-3">
                                        <h2 class="fontText mb-2 font-weight-bold">คุณกำลังต้องการคนด่วนใช่ไหม</h2>
                                        <button class="modalUrgent mb-2" id="recommentUrgent">
                                            <h6>แนะนำการใช้งาน<br>Resume Urgent คลิก</h6>
                                        </button>
                                        <p class="fontSubText">*ผู้สมัครที่เป็น <span class="textRed">Resume Urgent
                                            </span>ได้นั่น ต้องผ่านการตรวจสอบคุณภาพเรซูเม่จากระบบคัดกรอง
                                            ว่ามีคุณภาพเรซูเม่ตั้งแต่ 85% ขึ้นไป
                                            เพื่อความสมบูรณ์ในการสมัครงานกับผู้ประกอบการ</p>
                                        <div class="mt-1">
                                            <button class="closed">close</button>
                                        </div>
                                    </div>`;
//  end คุณกำลังต้องการคนด่วนใช่ไหม

// Resume Urgent ยอดนิยม
searchResumeUrgent += `<div class="careerHit clLightGray p-3">`;
searchResumeUrgent += `<h2 class="fontSubHead">Resume Urgent ยอดนิยม</h2>`;

searchResumeUrgent += `<div class="lineDashUrgent"></div>`;
searchResumeUrgent += `<ul>`;
let hits = [
  { name: "1. งานขาย", how: "1,500" },
  { name: "2. งานด่วน", how: "35,500" },
  { name: "3. พาร์ทไทม์", how: "99,500" },
  { name: "4. การตลาด / PR", how: "87,500" },
  { name: "5. โฆษณา /สื่อ", how: "2,500" },
  { name: "6. ท่องเที่ยว/โรงเเรม", how: "4,500" },
  { name: "7. ธุรการ/การจัดการทั่วไป", how: "6,500" },
  { name: "8. ราชการ/บริการสาธารณะ", how: "10,500" },
  { name: "9. วิทยาศาสตร์ /Lab/วิจัยและพัฒนา", how: "45,500" },
  { name: "10. ออกแบบ/เขียนแบบ/กราฟฟิค/ช่างภาพ", how: "12,500" },
];
hits.forEach((hit) => {
  searchResumeUrgent += `<li><a href="javascript:void(0)" onclick="link()" class="textBlackGray">
        ${hit.name} <span class="textRed">${hit.how}</span> เรซูเม่</a></li>`;
});
searchResumeUrgent += `<li><a href="javascript:void(0)" onclick="link()" class="textBlackGray font-weight-bold">
                            Resume Urgent ยอดนิยมทั้งหมด </a></li>`;

searchResumeUrgent += `</ul>`;
searchResumeUrgent += `</div>`;
// end Resume Urgent ยอดนิยม

// Tag
searchResumeUrgent += `<div class="tagHit clLightGray p-3">`;
searchResumeUrgent += `<h2 class="fontSubHead">Tag</h2>`;
searchResumeUrgent += `<div class="lineDashUrgent"></div>`;
searchResumeUrgent += `<ul>`;
let tags = [
  "งานด่วน",
  "ท่องเที่ยว/โรงเเรม",
  "ราชการ/บริการสาธารณะ",
  "งานขาย",
  "พาร์ทไทม์",
];
for (let tag = 0; tag < tags.length; tag++) {
  searchResumeUrgent += `<li><a href="javascript:void(0)" onclick="link()"
    class="textBlackGray">${tags[tag]}</a></li>`;
}
searchResumeUrgent += `</ul>`;
searchResumeUrgent += `</div>`;
// end Tag

searchResumeUrgent += `</section>`;
// end banner tag
searchResumeUrgent += `</div>`;
searchResumeUrgent += `</article>`;
// end Resume Urgent
document.getElementById("super").innerHTML = searchResumeUrgent;

// ตัดคำ
$(".searchEllipsis").dotdotdot({
  height: 24,
  fallbackToLetter: true,
  watch: true,
});

// บันทึกงาน
// $(".saveHeart").on("click", function () {
//   $(".tooltip").removeClass("show");

//   Swal.fire({
//     title: "คุณบันทึกประวัติสำเร็จแล้ว",
//     icon: "success",
//     showConfirmButton: true,
//     confirmButtonColor: "#d40101",
//   });
// });
// end บันทึกงาน

// tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// ปิด คุณกำลังต้องการคนด่วนใช่ไหม
$(".closed").click(function () {
  $(".popUpUrgent").remove();
});
// end ปิด คุณกำลังต้องการคนด่วนใช่ไหม

// แนะนำการใช้งาน
const recommentUrgent = document.querySelector("#recommentUrgent");
recommentUrgent.addEventListener("click", () => {
  Swal.fire({
    title: "แนะนำการใช้งาน",
    icon: "info",
    showconfirmButton: true,
    confirmButtonText: "เข้าใจแล้ว",
    html: `<div class="lineDashUrgent"></div>
            <figure><img src="images/example.jpg"/></figure>`,
  });
  let sweertPopup = document.getElementsByClassName("swal2-popup")[0];
  sweertPopup.style.width = "100%";
  sweertPopup.style.maxWidth = "900px";
});
// end แนะนำการใช้งาน
