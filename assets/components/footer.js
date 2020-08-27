var footerJobbkk = "";

let linklink = (location.href.split('/').length == 5) ? '':'../'
// สะพาน bot
footerJobbkk += `<section class="bgBot clWhitetGray p-5">`;
footerJobbkk += `<article class="gridBot">`;
footerJobbkk += `<div>`;
footerJobbkk += `<h2 class="fontText font-weight-bold mb-3">หางานตามสาขาอาชีพ</h2>`;
footerJobbkk += `<ul class="gridCareerIndex">`;

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
for (let occupation = 0; occupation < occupations.length; occupation++) {
  footerJobbkk += `<li>
                                <a href="javascript:void(0)" onclick="link()">${occupations[occupation]}</a></li>`;
}
footerJobbkk += `</ul>`;
footerJobbkk += `</div>`;

footerJobbkk += `<div>`;
footerJobbkk += `<h2 class="fontText font-weight-bold mb-3">หางานตามพื้นที่</h2>`;
footerJobbkk += `<ul class="gridCareerIndex">`;

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
for (let area = 0; area < areas.length; area++) {
  footerJobbkk += `<li><a href="javascript:void(0)" onclick="link()">${areas[area]}</a></li>`;
}
footerJobbkk += `</ul>`;
footerJobbkk += `</div>`;

footerJobbkk += `<div>`;
footerJobbkk += `<h2 class="fontText font-weight-bold mb-3">เกี่ยวกับเรา</h2>`;
footerJobbkk += `<ul class="flexAbout">`;

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
for (let about = 0; about < abouts.length; about++) {
  footerJobbkk += `<li><a href="javascript:void(0)" onclick="link()">${abouts[about]}</a></li>`;
}
footerJobbkk += `</ul>`;
footerJobbkk += `</div>`;
footerJobbkk += `</article>`;
footerJobbkk += `</section>`;
// end สะพาน bot

// ที่อยู่
footerJobbkk += `<section class="bgAdress clRed p-5">`;
footerJobbkk += `<div class="gridAdress">`;
footerJobbkk += `<article class="flexAdress">`;
footerJobbkk += `<figure><a href="javascript:void(0)"><img src="${linklink}assets/images/logo.png" alt=""></a></figure>`;
footerJobbkk += `<p>บริษัท จัดหางาน จ๊อบบีเคเค ดอท คอม จำกัด <br>
                            เลขที่ 625 อาคารทัศนียา ห้องเลขที่ ยูนิต ดี ชั้น 5
                            ซอยรามคำแหง 39 <br> ถนนประชาอุทิศ แขวงวังทองหลาง เขตวังทองหลาง กรุงเทพฯ 10310</p>`;
footerJobbkk += `<ul>`;
footerJobbkk += `<li>ฝ่ายบริการลูกค้า</li>
                            <li>0-2514-7474</li>
                            <li>แฟ็กซ์ 0-2514-7447</li>
                            <li>อีเมล sales@jobbkk.com, help@jobbkk.com</li>`;
footerJobbkk += `</ul>`;
footerJobbkk += `</article>`;

footerJobbkk += `<article>`;
footerJobbkk += `<ul class="social mb-3">`;
footerJobbkk += `<li><a href="javascript:void(0)" onclick="link()" class="fb"></a></li>
                            <li><a href="javascript:void(0)" onclick="link()" class="tw"></a></li>
                            <li><a href="javascript:void(0)" onclick="link()" class="yt"></a></li>
                            <li><a href="javascript:void(0)" onclick="link()" class="ig"></a></li>
                            <li><a href="javascript:void(0)" onclick="link()" class="in"></a></li>
                            <li><a href="javascript:void(0)" onclick="link()" class="line"></a></li>`;
footerJobbkk += `</ul>`;

footerJobbkk += `<ul class="app mb-3">`;
footerJobbkk += `<li><a href="javascript:void(0)" onclick="link()"><img src="${linklink}assets/images/app1.png"
                                        alt=""></a></li>
                            <li><a href="javascript:void(0)" onclick="link()"><img src="${linklink}assets/images/app2.png"
                                        alt=""></a></li>
                            <li><a href="javascript:void(0)" onclick="link()"><img src="${linklink}assets/images/app3.png"
                                        alt=""></a></li>`;
footerJobbkk += `</ul>`;
footerJobbkk += `</article>`;
footerJobbkk += `</div>`;
footerJobbkk += `</section>`;
// end ที่อยู่

// copyright
footerJobbkk += `<section class="clBlack p-3">
                <p class="fontSubText textWhite text-center">JOBBKK.COM © สงวนลิขสิทธิ์ 
                All Right Reserved including text, graphics, interfaces and design
                    thereof are all rights reserved.</p>
            </section>`;
// end copyright

document.getElementsByClassName("footerJobbkk")[0].innerHTML = footerJobbkk;
