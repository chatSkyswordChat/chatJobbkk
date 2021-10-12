var searchResume = "";

let listUrgents = [
  {
    img: "images/pic1.jpg",
    position: `วิศวกรชีวการแพทย์,พนักงานขายเครื่องมือแพทย์,วิศวกรบริการเครื่องมือแพทย์(service engineer)`,
    sub: `วิศวกรรม - วิศวกรชีวการแพทย์`,
    age: "33",
    money: "45,000-70,000",
    area: "กรุงเทพมหานคร",
    scoreWidth: "85%",
    time: "56 นาทีที่แล้ว",
    year: "10",
  },
  {
    img: "images/pic2.jpg",
    position: `cost engineer,office engineer,site engineer`,
    sub: `วิศวกรรม - วิศวกรโยธา`,
    age: "33",
    money: "35,000-70,000",
    area: "ฉะเชิงเทรา",
    scoreWidth: "35%",
    time: "6 นาทีที่แล้ว",
    year: "5",
  },
  {
    img: "images/pic3.jpg",
    position: `เจ้าหน้าที่จัดซื้อในประเทศ,เจ้าหน้าที่จัดซื้อต่างประเทศ,เจ้าหน้าที่ธุรการฝ่ายขาย,ประสานงานทั่วไป,เลขานุการ,เจ้าหน้าที่บุคคล , เจ้าหน้าที่สรรหาว่าจ้าง`,
    sub: ` จัดซื้อ - จัดซื้อ/จัดหา `,
    age: "33",
    money: "35,000-70,000",
    area: "สมุทรปราการ",
    scoreWidth: "65%",
    time: "36 นาทีที่แล้ว",
    year: "7",
  },
  {
    img: "images/pic1.jpg",
    position: `พนักงานขับรถส่งขนมปัง.บรรทุก,พนักงานขับรถส่งขนมปัง,คนขัรถส่งขนมปัง.`,
    sub: `คนขับรถ - คนขับรถส่งสินค้า`,
    age: "33",
    money: "65,000-80,000",
    area: "สมุทรปราการ",
    scoreWidth: "65%",
    time: "36 นาทีที่แล้ว",
    year: "7",
  },
  {
    img: "images/pic2.jpg",
    position: `ผู้ช่วยวิศวกรรมและบริหารการผลิต,เจ้าหน้าที่วิศวกร ( Engineer )`,
    sub: `วิศวกรรม - วิศวกรการผลิต/วิศวกรโรงงาน `,
    age: "33",
    money: "65,000-80,000",
    area: "สมุทรปราการ",
    scoreWidth: "65%",
    time: "36 นาทีที่แล้ว",
    year: "7",
  },
  {
    img: "images/pic1.jpg",
    position: `วิศวกรชีวการแพทย์,พนักงานขายเครื่องมือแพทย์,วิศวกรบริการเครื่องมือแพทย์(service engineer)`,
    sub: `วิศวกรรม - วิศวกรชีวการแพทย์`,
    age: "33",
    money: "45,000-70,000",
    area: "กรุงเทพมหานคร",
    scoreWidth: "85%",
    time: "56 นาทีที่แล้ว",
    year: "10",
  },
  {
    img: "images/pic2.jpg",
    position: `cost engineer,office engineer,site engineer`,
    sub: `วิศวกรรม - วิศวกรโยธา`,
    age: "33",
    money: "35,000-70,000",
    area: "ฉะเชิงเทรา",
    scoreWidth: "35%",
    time: "6 นาทีที่แล้ว",
    year: "5",
  },
  {
    img: "images/pic3.jpg",
    position: `เจ้าหน้าที่จัดซื้อในประเทศ,เจ้าหน้าที่จัดซื้อต่างประเทศ,เจ้าหน้าที่ธุรการฝ่ายขาย,ประสานงานทั่วไป,เลขานุการ,เจ้าหน้าที่บุคคล , เจ้าหน้าที่สรรหาว่าจ้าง`,
    sub: ` จัดซื้อ - จัดซื้อ/จัดหา `,
    age: "33",
    money: "35,000-70,000",
    area: "สมุทรปราการ",
    scoreWidth: "65%",
    time: "36 นาทีที่แล้ว",
    year: "7",
  },
  {
    img: "images/pic1.jpg",
    position: `พนักงานขับรถส่งขนมปัง.บรรทุก,พนักงานขับรถส่งขนมปัง,คนขัรถส่งขนมปัง.`,
    sub: `คนขับรถ - คนขับรถส่งสินค้า`,
    age: "33",
    money: "65,000-80,000",
    area: "สมุทรปราการ",
    scoreWidth: "65%",
    time: "36 นาทีที่แล้ว",
    year: "7",
  },
  {
    img: "images/pic2.jpg",
    position: `ผู้ช่วยวิศวกรรมและบริหารการผลิต,เจ้าหน้าที่วิศวกร ( Engineer )`,
    sub: `วิศวกรรม - วิศวกรการผลิต/วิศวกรโรงงาน `,
    age: "33",
    money: "65,000-80,000",
    area: "สมุทรปราการ",
    scoreWidth: "65%",
    time: "36 นาทีที่แล้ว",
    year: "7",
  },
];

let provincing = [
  { name: "กรุงเทพมหานคร", how: "20,000" },
  { name: "กาญจนบุรี", how: "80,000" },
  { name: "สมุทรปราการ", how: "10,000" },
  { name: "นครปฐม", how: "70,000" },
  { name: "สมุทรสงคราม", how: "80,000" },
  { name: "เชียงใหม่", how: "5,000" },
  { name: "เชียงราย", how: "60,000" },
  { name: "น่าน", how: "8,000" },
  { name: "ลำปาง", how: "1,000" },
  { name: "ภูเก็ต", how: "2,000" },
  { name: "ตรัง", how: "7,000" },
  { name: "ชลบุรี", how: "40,000" },
];

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

// ค้นหาประวัติ
searchResume += `
<article>
  <div class="gridResumeColumn mb-5">
    ${/* all resume */ ""}
    <section>
      ${/* resume */ ""}
      ${listUrgents
        .map(
          (listUrgent, banner) => `
      <div class="borderStyle borderRadiusStyle p-3 mb-3 resumeUrgent">
        <div class="flexPicResume between mb-2">
          <div class="flexAlign">
            <figure><img src="${listUrgent.img}" alt=""></figure>
            <div>
              <p>Resume Score</p>
              <div class="progress">
                <div class="progress-bar clGreen" role="progressbar"
                  style="width: ${
                    listUrgent.scoreWidth
                  };" aria-valuenow="25" aria-valuemin="0"
                  aria-valuemax="100">${listUrgent.scoreWidth}
                </div>
              </div>
            </div>

            <div class="statusBtn mt-4">
              <div>
                <button type="button" class="status mobile success" title="ยืนยันเบอร์โทรแล้ว" data-toggle="tooltip" data-placement="bottom">
                  <i class="fas fa-mobile-alt"></i>
                </button>
              </div>

              <div>
                <button type="button" class="status email success" title="ยืนยันอีเมลแล้ว" data-toggle="tooltip" data-placement="bottom">
                  <i class="fas fa-envelope"></i>
                </button>
              </div>

              <div>
              <button type="button" class="status eng disabled" title="ยังไม่มีเรซูเม่ภาษาอังกฤษ" data-toggle="tooltip" data-placement="bottom">EN</button>
            </div>
            </div>
          </div>

          <div class="flexTwo">
            <div>
              <h6 class="ellipsisPosition"><span class="font-weight-bold">ตำแหน่งงานที่สมัคร :</span> <span
                class="textRed">${listUrgent.position}</span>
              </h6>

              <div>
                <p><span class="font-weight-bold">สาขาอาชีพ : </span>${
                  listUrgent.sub
                }</p>
                <p><span class="font-weight-bold">อายุ :</span> ${
                  listUrgent.age
                } ปี</p>
                <p><span class="font-weight-bold">ประสบการณ์ (ปี) : </span>${
                  listUrgent.year
                }</p>  
                <p><span class="font-weight-bold">เงินเดือน (บาท) :</span> ${
                  listUrgent.money
                }</p>
                <p><span class="font-weight-bold">พื้นที่ที่ต้องการทำงาน : </span>${
                  listUrgent.area
                }</p>             
              </div>
            </div>

            <div class="growFlex">
                <p class="textSky"><i class="far fa-clock"></i> ${
                  listUrgent.time
                }</p>
                <div class="save">
                  <button type="button" data-toggle="modal" data-target="#resumeSelect"><i class="fas fa-bookmark"></i> บันทึก</button>
                </div>
            </div>  
          </div>
        </div>
      </div>

      ${
        banner % 5 === 4
          ? `
        <div class="mb-3"><figure class="borderStyle">
          <a href="" target="_blank"><img src="images/js.gif" alt=""/></a></figure>
        </div>`
          : ""
      }
      `
        )
        .join("\n")}
        ${/* end resume */ ""}

      ${/* pagination */ ""}
      <nav aria-label="Page navigation example">
        <ul class="pagination flexPagination mb-3">
          <li class="page-item"><a class="page-link" href="#">Previous</a></li>
          <li class="page-item"><a class="page-link active" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
      </nav>
      ${/* end pagination */ ""}
    </section>
    ${/* end all resume */ ""}

    ${/* banner tag */ ""}
    <section>
      ${/* banner */ ""} 
      <div class="bannerUrgent">
        <figure class="borderStyle mb-3"><a href="javascript:void(0)">
          <img src="images/bn.jpg" alt=""></a>
        </figure>                                        
      </div>
      ${/* end banner */ ""}

      ${/* resume ทั้งหมด */ ""}
      <div class="careerHit clLightGray p-3">
        <h2 class="fontSubHead">resume ทั้งหมด <span class="textRed"> 2,750,450</span> ฉบับ</h2>
        <div class="lineDashUrgent"></div>
        <ul>
          ${provincing
            .map(
              (province) =>
                `  <li><a href="javascript:void(0)" class="textBlackGray">
          ${province.name} <span class="textRed">${province.how}</span> เรซูเม่</a></li>`
            )
            .join("\n")}
        </ul>
      </div>
      ${/* end resume ทั้งหมด */ ""}

      ${/* resume ตามสาขาอาชีพ */ ""}
      <div class="careerHit clLightGray p-3">
        <h2 class="fontSubHead">resume ตามสาขาอาชีพ</h2>
        <div class="lineDashUrgent"></div>
        <ul>
          ${hits
            .map(
              (hit) =>
                `  <li><a href="javascript:void(0)" class="textBlackGray">
          ${hit.name} <span class="textRed">${hit.how}</span></a></li>`
            )
            .join("\n")}
        </ul>
      </div>
      ${/* end resume ตามสาขาอาชีพ */ ""}
    </section>
    ${/* end banner tag */ ""}
  </div>
</article>`;
// end ค้นหาประวัติ

document.getElementById("super").innerHTML = searchResume;

let gridHotCareer = "";

const careerPageSearchResumes = [
  {
    img: "career1",
    name: "Resume Urgent",
    position: "",
  },
  {
    img: "career2",
    name: "ประวัติมาใหม่",
    position: "",
  },
  {
    img: "career3",
    name: "Resume Quick",
    position: "",
  },
  {
    img: "career4",
    name: "สหกิจและฝึกงาน",
    position: "",
  },
  {
    img: "career5",
    name: "ขาย",
    position: "45,000 ตำแหน่ง",
  },
  {
    img: "career6",
    name: "การตลาด /PR",
    position: "85,000 ตำแหน่ง",
  },
  {
    img: "career7",
    name: "ไอที",
    position: "45,000 ตำแหน่ง",
  },
  {
    img: "career8",
    name: "บัญชี",
    position: "15,000 ตำแหน่ง",
  },
  {
    img: "career9",
    name: "ขนส่ง / คลังสินค้า",
    position: "65,000 ตำแหน่ง",
  },
  {
    img: "career10",
    name: "ก่อสร้าง",
    position: "40,000 ตำแหน่ง",
  },
  {
    img: "career11",
    name: "โฆษณาสื่อ",
    position: "95,000 ตำแหน่ง",
  },
  {
    img: "career12",
    name: "จัดซื้อ",
    position: "23,000 ตำแหน่ง",
  },
  {
    img: "career13",
    name: "ท่องเที่ยว / โรงแรม",
    position: "13,000 ตำแหน่ง",
  },
  {
    img: "career14",
    name: "โทรคมนาคม",
    position: "49,000 ตำแหน่ง",
  },
  {
    img: "career15",
    name: "ธนาคาร / การเงิน",
    position: "79,000 ตำแหน่ง",
  },
  {
    img: "career16",
    name: "ธุรการ / การจัดการทั่วไป",
    position: "3,000 ตำแหน่ง",
  },
  {
    img: "career17",
    name: "การแพทย์",
    position: "35,000 ตำแหน่ง",
  },
  {
    img: "career18",
    name: "บริหาร / ผู้จัดการ",
    position: "93,000 ตำแหน่ง",
  },
  {
    img: "career19",
    name: "กรศึกษา / วิชาการ",
    position: "103,000 ตำแหน่ง",
  },
];

gridHotCareer += `
${careerPageSearchResumes
  .map(
    (careerPageSearchResume) => `
    <li>
      <a href="">
        <figure class="mb-1">
          <img src="images/${careerPageSearchResume.img}.png" alt="${careerPageSearchResume.img}" />
        </figure>
        <div>
          <h6 class="fontSubText textBlackGray careerEllipsis">
            ${careerPageSearchResume.name}
          </h6>
          <p class="fontMark textRed">${careerPageSearchResume.position}</p>
        </div>
      </a>                  
     </li>
`
  )
  .join("\n")}

`;

document.querySelector(".gridHotCareer").innerHTML = gridHotCareer;

// ตัดคำ
$(".searchEllipsis").dotdotdot({
  height: 24,
  fallbackToLetter: true,
  watch: true,
});

// ตัดคำ hot career
$(".careerEllipsis").dotdotdot({
  height: 72,
  fallbackToLetter: true,
  watch: true,
});

// ปุ่ม slide hot career
$("#buttonScrollLeft").click(function (event) {
  event.preventDefault();
  $("#buttonScroll").animate(
    {
      scrollLeft: "-=" + ($("#buttonScroll").width() * 90) / 92,
    },
    "1000"
  );
});

$("#buttonScrollRight").click(function (event) {
  event.preventDefault();
  $("#buttonScroll").animate(
    {
      scrollLeft: "+=" + ($("#buttonScroll").width() * 90) / 92,
    },
    "1000"
  );
});

// tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

const saveActive = document.querySelector(".saveActive");
saveActive.addEventListener("click", function () {
  const closest = saveActive.closest(".closest");
  const actives = closest.querySelectorAll(".save button");

  for (const active of actives) {
    active.classList.add("active");
  }
});
