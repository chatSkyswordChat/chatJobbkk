occupations = [
  "หางาน Part Time",
  "หางาน การตลาด",
  "หางาน โปรแกรมเมอร์",
  "หางาน บัญชี",
  "หางาน โรงแรม",
  "หางาน ธุรการ",
  "หางาน IT",
  "หางาน ในห้าง",
  "หางาน พนักงานชั่วคราว",
  "หางาน ประชาสัมพันธ์",
];

abouts = [
  "ติดต่อเรา",
  "ข้อกำหนดและเงื่อนไข",
  "แผนที่เว็บไซต์",
  "แนะนำการใช้งานเว็บไซต์",
  "ขอบคุณทีมงาน",
  "แบบสอบถาม",
  "Business Partners",
  "Partner มหาวิทยาลัย",
  "Job Index",
];

areas = [
  "หางาน ภาคกลาง",
  "หางาน ภาคใต้",
  "หางาน ภาคอีสาน",
  "หางาน ภาคตะวันออก",
  "หางาน ภาคตะวันตก",
  "หางาน ชลบุรี",
  "หางาน กรุงเทพมหานคร",
  "หางาน เชียงใหม่",
  "หางาน ฉะเชิงเทรา",
  "หางาน นนทบุรี",
  "หางาน ปทุมธานี",
  "หางาน พระนครศรีอยุธยา",
];

let footerJobbkk = "";

footerJobbkk += `
${/* สะพาน bot */ ""}
<section class="bgBot clWhitetGray p-5">
  <article class="gridBot">
    <div>
      <h2 class="fontText font-weight-bold mb-3">หางานตามสาขาอาชีพ</h2>
      <ul class="gridCareerIndex">
        ${occupations
          .map(
            (occupation) => `
        <li>
          <a href="#">${occupation}</a>
        </li> 
        `
          )
          .join("\n")}
      </ul>
    </div>

    <div>
      <h2 class="fontText font-weight-bold mb-3">หางานตามพื้นที่</h2>
      <ul class="gridCareerIndex">
        ${areas
          .map(
            (area) => `
          <li><a href="#">${area}</a></li>
          `
          )
          .join("\n")}
      </ul>
    </div>

    <div>
      <h2 class="fontText font-weight-bold mb-3">เกี่ยวกับเรา</h2>
      <ul class="flexAbout">
        ${abouts
          .map(
            (about) => `
        <li><a href="#">${about}</a></li>
        `
          )
          .join("\n")}
      </ul>
    </div>
  </article>
</section>
${/* end สะพาน bot */ ""}

${/* ที่อยู่ */ ""}
<section class="bgAdress clRed p-5">
  <div class="gridAdress">
    <article>
      <figure class="mb-3"><a href="${path}index.html"><img src="${path}assets/images/logo.png" alt=""></a></figure>
      <p class="mb-3">บริษัท จัดหางาน จ๊อบบีเคเค ดอท คอม จำกัด <br>
        เลขที่ 625 อาคารทัศนียา ห้องเลขที่ ยูนิต ดี ชั้น 5
        ซอยรามคำแหง 39 <br> ถนนประชาอุทิศ แขวงวังทองหลาง เขตวังทองหลาง กรุงเทพฯ 10310
      </p>
    </article>

    <article>
      <ul class="app">
        <li><a href="" target="_blank"><img src="${path}assets/images/app1.png" alt=""></a></li>
        <li><a href="" target="_blank"><img src="${path}assets/images/app2.png" alt=""></a></li>
        <li><a href="https://appgallery.huawei.com/#/app/C104544195" target="_blank"><img src="${path}assets/images/appGallery.png" alt=""></a></li>
      </ul>

      <div>
        <p class="mb-3 text-center">ติดตามเรา</p>
        <ul class="social mb-3">
          <li><a href="" target="_blank" class="fb"></a></li>
          <li><a href="" target="_blank" class="tw"></a></li>
          <li><a href="" target="_blank" class="yt"></a></li>
          <li><a href="" target="_blank" class="ig"></a></li>
          <li><a href="" target="_blank" class="in"></a></li>
          <li><a href="" target="_blank" class="line"></a></li>
        </ul>
      </div>
    </article>

    <article>
      <p class="mb-3">ฝ่ายบริการลูกค้า</p>
      <p>เวลาทำการ : จันทร์-ศุกร์ 8.30-18.00 น.</p>
      <p>แฟ็กซ์ : 0-2514-7447</p>
      <div class="help mb-3">
        <p>ขอความช่วยเหลือ : </p>
        <div>
          <p>sales@jobbkk.com</p>
          <p>help@jobbkk.com</p>
        </div>
      </div>
      <section>
        <div class="tel px-3 py-1"><i class="fas fa-phone-alt"></i> 0-2514-7447</div>
        <div class="btn_map"><a href="https://www.jobbkk.com/contactus" class="py-1 px-3" target="_blank">แผนที่</a></div>
      </section>
    </article>
  </div>
</section>
${/* end ที่อยู่ */ ""}`;

document.querySelector(".footerJobbkk").innerHTML = footerJobbkk;
