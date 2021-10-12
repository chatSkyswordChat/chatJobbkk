const highLights = [
  "logo1.jpg",
  "logo2.jpg",
  "logo3.jpg",
  "logo4.jpg",
  "logo5.jpg",
  "logo6.jpg",
];

const interestings = [
  {
    brand: `logo1.jpg`,
    jd: `Web Programmer Manager ด่วน`,
  },
  {
    brand: `logo2.jpg`,
    jd: `ผู้จัดการฝ่ายคลังสินค้าและ logistic`,
  },
  {
    brand: `logo3.jpg`,
    jd: `call collector ประจำสำนักงานใหญ่แจ้งวัฒนะ 50 อัตรา`,
  },
  {
    brand: `logo4.jpg`,
    jd: ` เว็ปดีไซน์ & กราฟิกดีไซน์ ประจำสาขากรุงเทพ 1 อัตรา ด่วน!!`,
  },
  {
    brand: `logo5.jpg`,
    jd: `เจ้าหน้าที่ปฏิบัติการภาคสนาม (field collector) ด่วน!!!! 50 อัตรา`,
  },
];

const newsPromotes = [
  {
    head: `JOBBKK.COM ร่วมจัดกิจกรรม SWU JOB FAIR 2020 รับสมัครงานกว่า 5,000 อัตรา`,
    sub: `เมื่อวันที่ 4 – 6 กุมภาพันธ์ 2563 บริษัท จัดหางาน
    จ๊อบบีเคเค ดอท คอม จำกัด ร่วมกับ
    มหาวิทยาลัยศรีนครินทรวิโรฒ ประสานมิตร จัดกิจกรรม SWU
    JOB FAIR 2020 เปิดรับสมัครงานกว่า 5,000 อัตรา จาก 150
    บริษัทชั้นนำ ณ อาคารนวัตกรรม : ศาสตราจารย์ ดร.สาโรช
    บัวศรี`,
    img: `pic1.jpg`,
  },
  {
    head: `JOBBKK.COM ร่วมกับ มหาวิทยาลัยศิลปากร วิทยาเขตสารสนเทศเพชรบุรี จัดงาน " Education & Jobfair 2019`,
    sub: `ในวันที่ 16 ตุลาคม 2562 JOBBKK.COM ร่วมกับ
    คณะวิทยาการการจัดการ จัดงาน " Education & Jobfair 2019
    " ณ อาคารเรียนรวม 2 มหาวิทยาลัยศิลปากร
    วิทยาเขตสารสนเทศเพชรบุรี`,
    img: `pic2.jpg`,
  },
  {
    head: `JOBBKK.COM ร่วมงาน " นัดพบแรงงานจังหวัดฉะเชิงเทรา " ณ ศาลาจตุรมุข ครั้งที่ 2`,
    sub: `ในวันที่ 23 สิงหาคม 2562 สำนักงานจัดหางานจังหวัดฉะเชิงเทรา จัดงาน "
    นัดพบแรงงานจังหวัดฉะเชิงเทรา " ณ ศาลาจตุรมุข`,
    img: `pic3.jpg`,
  },
  {
    head: `JOBBKK.COM นัดพบแรงงาน วิทยาลัยเทคนิคปราจีนบุรี`,
    sub: `เมื่อวันที่ 1 มีนาคม 2562 ที่ผ่านมา JOBBKK เข้าร่วมรับสมัครงานนัดพบแรงงาน ณ
    วิทยาลัยเทคนิคปราจีนบุรี`,
    img: `pic4.jpg`,
  },
  {
    head: `สำนักงานจัดหางานจังหวัดระยองร่วมกับนิคมอุตสาหกรรมอมตะซิตี้ระยอง จัดงานมหกรรมนัดพบแรงงานจังหวัดระยอง ประจำปี 2562`,
    sub: ` สำนักงานจัดหางานจังหวัดระยองร่วมกับนิคมอุตสาหกรรมอมตะซิตี้ระยอง
    จัดงานมหกรรมนัดพบแรงงานจังหวัดระยอง ประจำปี 2562 ณ
    สนามกีฬานิคมอุตสาหกรรมอมตะซิตี้ ระยอง`,
    img: `pic5.jpg`,
  },
  {
    head: `กรมการจัดหางานจังหวัดฉะเชิงเทรา ร่วมกับ บริษัท จัดหางาน จ๊อบบีเคเค ดอท คอม จำกัด
    เข้าบรรยายผู้เข้าอบรมบำบัดยาเสพติด ณ ศูนย์การเรียนรู้ปรัชญาเศรษฐกิจพอเพียงตามแนวพระราชดำริ
    กองพล 11 จังหวัดฉะเชิงเทรา`,
    sub: `ในวันที่ 28 มิถุนายน 2562 สำนักงานจัดหางานจังหวัดฉะเชิงเทรา ร่วมกับ บริษัท
    จัดหางาน จ๊อบบีเคเค ดอท คอม จำกัด เข้าบรรยายผู้เข้าอบรมบำบัดยาเสพติด ณ
    ศูนย์การเรียนรู้ปรัชญาเศรษฐกิจพอเพียงตามแนวพระราชดำริ กองพล 11 จังหวัดฉะเชิงเทรา`,
    img: `pic6.jpg`,
  },
];

let bodyCenterRegion = "";

if (loPath === "regionCenter.html") {
  region = "ภาคกลาง";
} else if (loPath === "regionEast.html") {
  region = "ภาคตะวันออก";
} else if (loPath === "regionEastNorth.html") {
  region = "ภาคอีสาน";
} else if (loPath === "regionSouth.html") {
  region = "ภาคใต้";
} else if (loPath === "regionNorth.html") {
  region = "ภาคเหนือ";
} else if (loPath === "regionWest.html") {
  region = "ภาคตะวันตก";
}

bodyCenterRegion += `
    ${/* <!-- ไฮไลท์งาน --> */ ""}
    <article class="mb-5">
        <div class="flexHead mb-4">
            <h2 class="fontHead">ไฮไลท์งานใน ${region}</h2>
            <div class="read">
            <a href="" target="_blank">อ่านทั้งหมด</a>
            </div>
        </div>

        <ul class="gridHighlight">
            ${highLights
              .map(
                (highLight) => `
                <li><a href="${path}dashboardBusiness/premiumJobDetail.html"><img src="images/${highLight}" alt=""/></a></li>
            `
              )
              .join("\n")}
        </ul>
    </article>
    ${/* <!-- end ไฮไลท์งาน --> */ ""}

    ${/* <!-- ตำแหน่งงานน่าสนใจ --> */ ""}
    <article class="mb-5">
      <div class="flexHead mb-4">
        <h2 class="fontHead">ตำแหน่งงานน่าสนใจ</h2>
        <div class="read">
          <a href="" target="_blank">อ่านทั้งหมด</a>
        </div>
      </div>

      <ul class="gridInteresting">
        ${interestings
          .map(
            (interesting) => `
        <li>
            <div class="recommentRegion">
                <p>แนะนำ</p>
            </div>
            <a href="${path}dashboardBusiness/premiumJobDetail.html">
                <figure><img src="images/${interesting.brand}" alt="" /></figure>
                <div>
                <figcaption>${interesting.jd}</figcaption>
                </div>
            </a>
        </li>
      `
          )
          .join("\n")}
      </ul>
    </article>
    ${/* <!-- end ตำแหน่งงานน่าสนใจ --> */ ""}

    ${/* <!-- ข่าวประชาสัมพันธ์ใหม่ --> */ ""}
    <article class="mb-5">
      <div class="flexHead mb-4">
        <h2 class="fontHead">ข่าวประชาสัมพันธ์ใหม่</h2>
        <div class="read">
          <a href="" target="_blank">อ่านทั้งหมด</a>
        </div>
      </div>

      <ul class="gridNewsPromote">
      ${newsPromotes
        .map(
          (newsPromote) => `
        <li>
            <a href="https://www.jobbkk.com/regional/detail/central/5543/JOBBKK.COM%20%E0%B8%A3%E0%B9%88%E0%B8%A7%E0%B8%A1%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%81%E0%B8%A3%E0%B8%A3%E0%B8%A1%20SWU%20JOB%20FAIR%202020%20%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%A7%E0%B9%88%E0%B8%B2%205,000%20%E0%B8%AD%E0%B8%B1%E0%B8%95%E0%B8%A3%E0%B8%B2">
                <figure><img src="images/${newsPromote.img}" alt="" /></figure>
                <div>
                    <h6 class="font-weight-bold mb-4 textCut">${newsPromote.head}</h6>
                    <p class="mb-4 textCut">${newsPromote.sub}</p>
                    <div class="text-right">
                        <button type="button">อ่านต่อ</button>
                    </div>
                </div>
            </a>
        </li>
      `
        )
        .join("\n")}
      </ul>
    </article>
    ${/* <!-- end ข่าวประชาสัมพันธ์ใหม่ --> */ ""}
`;

document.querySelector(".bodyCenterRegion").innerHTML = bodyCenterRegion;
