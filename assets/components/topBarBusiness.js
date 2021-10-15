const registers = [
  { name: "ผู้สมัครงาน", link: path + "login/loginJobSeeker.html" },
  { name: "ผู้ประกอบการ", link: path + "login/loginBusiness.html" },
  { name: "สมัครสมาชิก", link: path + "login/register.html" },
];

let topbar = "";

topbar += `<div class="fixBg"></div>`;

// navbar
topbar += `
  <article class="bgTopbar calC py-3 px-5">
    <section class="flexTop">
      ${/* ปุ่มแฮมเบอเกอ */ ""}
      <button type="button" class="btn slide-menu-control" data-target="test-menu-left" data-action="toggle">
        <i class="fas fa-bars"></i>
      </button>
      ${/* end ปุ่มแฮมเบอเกอ */ ""}

      ${/* logo jobbkk */ ""}
      <figure class="mr-2 logo">
        <a href="${path}index.html"><img src="${path}assets/images/logo.png" alt=""></a>
      </figure>
      ${/* end logo jobbkk */ ""}

      ${/* banner topPage PC */ ""}
      <figure class="borderStyle banner mr-2">
        <a href="javascript:void(0)" onclick="link()"></a>
          <img src="${path}assets/images/toppage-ad.jpg" alt="">
        </a>
      </figure>
      ${/* end banner topPage PC */ ""}

      ${/* ภาษา เข้าสู่ระบบ */ ""}
      <section class="flexLangEnter">
        ${/* ภาษา */ ""}
        <div class="flexLang mb-2">
          <button class="active">TH</button>
          <button>EN</button>
        </div>
        ${/* end ภาษา */ ""}

        ${/* business เข้าสู่ระบบ */ ""}
        <div class="dropdown businessLogin">
          <button class="dropdown-toggle dropdownToggle userToggle" type="button"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <figure class="picUser mb-1"><img src="${path}assets/images/skysword.jpg" alt="" /> 
              <i class="fas fa-angle-down"></i>
            </figure>
            <div class="idUser fontMark text-center">
              <p>ID : 456789</p>
              <p>Chatthong Hongwisuthikul</p>
            </div>
          </button>

          <div class="dropdown-menu dropdown-menu-right dropdownMenuUser">
            <section>
              <div class="flexUserAlign mb-3">
                <figure class="mb-2"><img src="${path}assets/images/skysword.jpg" alt="" /></figure>
                <p>ID : 123456</p>
                <p>dynastystrike@gmail.com</p>
                <p class="editProfile mt-1"><a href="javascript:void(0)">Edit Profile</a></p>
              </div>

              <ul class="userMargin">
                <li>
                  <a class="dropdown-item dropdownItem py-2 px-3" href="${path}index.html">หน้าสมาชิก</a>
                </li>
                <li>
                  <a class="dropdown-item dropdownItem py-2 px-3" href="${path}index.html">ประกาศงาน</a>
                </li>
                <li>
                  <a class="dropdown-item dropdownItem py-2 px-3" href="">ค้นหาเรซูเม่ด่วน</a>
                </li>
                <li>
                  <a class="dropdown-item dropdownItem py-2 px-3" href="${path}index.html">อัพเดท/แก้ไขตำแหน่งงาน</a>
                </li>
                <li>
                  <a class="dropdown-item dropdownItem py-2 px-3" href="${path}index.html">JobFair Online</a>
                </li>
                <li>
                  <a class="dropdown-item dropdownItem py-2 px-3" href="${path}index.html">Resume Quick</a>
                </li>
                <li>
                  <a class="dropdown-item dropdownItem py-2 px-3" href="${path}index.html">จัดการใบสมัครงาน iCMS</a>
                </li>
                <li>
                  <a class="dropdown-item dropdownItem py-2 px-3" href="${path}index.html">รายงาน</a>
                </li>
                <li>
                  <a class="dropdown-item dropdownItem py-2 px-3" href="${path}index.html">ตั้งค่า</a>
                </li>
                <li>
                  <a class="dropdown-item dropdownItem py-2 px-3" href="${path}index.html">ออกจากระบบ</a>
                </li>
              </ul>
            </section>
          </div>
        </div>
        ${/* end business เข้าสู่ระบบ */ ""}
      </section>
      ${/* end ภาษา เข้าสู่ระบบ */ ""}
    </section>

    ${/* banner topPage Mobile */ ""}
    <section class="bannerMobile mt-3">
      <figure> <a href="javascript:void(0)" onclick="link()" class="borderStyle">
        <img src="${path}assets/images/toppage-ad.jpg" alt=""></a>
      </figure>
    </section>
    ${/* end banner topPage Mobile */ ""}
  </article>`;
// end navbar

// menu PC
topbar += `
  <section class="flexNav calC">
    <div><a href="${path}index.html" class="theFirst">หน้าแรก</a></div>
    <div><a href="${path}searchWorkUrgent/premiumUrgent.html" class="theFirst">หางานด่วน</a></div>

    <div class="dropdown dropdownHover dropdownCl">
      <a href="${path}searchWork/searchWork.html" class="dropdownHead theFirst" aria-haspopup="true"
        aria-expanded="false">ค้นหางาน <i class="fas fa-angle-down"></i>
      </a>
      <div class="dropdown-menu dropdownHeadDown">
        <a class="dropdown-item dropdownItem" href="${path}searchWork/searchWork.html">งานกรุงเทพปริมณฑล</a>
        <a class="dropdown-item dropdownItem" href="${path}searchWork/searchWork.html">งานนักศึกษาฝึกงาน</a>
        <a class="dropdown-item dropdownItem" href="${path}searchWork/searchWork.html">งานสหกิจศึกษา</a>
        <a class="dropdown-item dropdownItem" href="${path}searchWork/searchWork.html">งานสำหรับคนพิการ</a>
        <a class="dropdown-item dropdownItem" href="${path}searchWork/searchWork.html">งาน Jobfair</a>
      </div>
    </div>

    <div>
      <a href="${path}searchResume/searchResume.html" class="theFirst">ค้นหาประวัติ</a>
    </div>

    <div class="dropdown dropdownHover dropdownCl">
      <a href="${path}regionWork/regionIndex.html" class="dropdownHead theFirst" aria-haspopup="true"
        aria-expanded="false">งานภุมิภาค <i class="fas fa-angle-down"></i>
      </a>

      <div class="dropdown-menu dropdownHeadDown">
        <a class="dropdown-item dropdownItem" href="${path}regionWork/regionCenter.html">งานภาคกลาง</a>
        <a class="dropdown-item dropdownItem" href="${path}regionWork/regionEast.html">งานภาคตะวันออก</a>
        <a class="dropdown-item dropdownItem" href="${path}regionWork/regionNorth.html">งานภาคเหนือ</a>
        <a class="dropdown-item dropdownItem" href="${path}regionWork/regionEastNorth.html">งานภาคอีสาน</a>
        <a class="dropdown-item dropdownItem" href="${path}regionWork/regionSouth.html">งานภาคใต้</a>
        <a class="dropdown-item dropdownItem" href="${path}regionWork/regionWest.html">งานภาคตะวันตก</a>
      </div>
    </div>
    
    <div><a href="${path}" class="theFirst">งานสหกิจ/พาร์ทไทม์</a></div>
    
    <div class="dropdown dropdownHover dropdownCl">
      <a href="${path}article/article.html" class="dropdownHead theFirst" aria-haspopup="true"
        aria-expanded="false">บทความ <i class="fas fa-angle-down"></i>
      </a>

      <div class="dropdown-menu dropdownHeadDown">
        <a class="dropdown-item dropdownItem" href="${path}article/hrSociety.html">HR Society</a>
        <a class="dropdown-item dropdownItem" href="${path}article/inspiration.html">Inspiration</a>
        <div class="dropdown dropright dropdownCl">
          <a class="dropdownHead dropdown-item" href="javascript(void):0" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">วาไรตี้ <i class="fas fa-chevron-right iconAB"></i>
          </a>

          <div class="dropdown-menu dropdownHeadDown">
            <a class="dropdown-item dropdownItem" href="${path}article/new.html">ข่าวน่าสนใจ</a>
            <a class="dropdown-item dropdownItem" href="${path}article/activity.html">กิจกรรม</a>
            <a class="dropdown-item dropdownItem" href="${path}article/knowledge.html">คลังความรู้</a>
            <a class="dropdown-item dropdownItem" href="${path}article/lifeStyle.html">Lifestyle</a>
            <a class="dropdown-item dropdownItem" href="${path}article/jobEat.html">จ๊อบชวนเจี๊ยะ</a>
            <a class="dropdown-item dropdownItem" href="${path}article/vdo.html">วีดีโอ</a>
          </div>
        </div>
      </div>
    </div>

    <div class="dropdown dropdownHover dropdownCl">
      <a href="javascript:void(0)" class="dropdownHead theFirst" aria-haspopup="true"
        aria-expanded="false">เกี่ยวกับจ๊อบบีเคเค <i class="fas fa-angle-down"></i>
      </a>

      <div class="dropdown-menu dropdownHeadDown">
        <a class="dropdown-item dropdownItem" href="">ข่าวและกิจกรรม</a>
        <a class="dropdown-item dropdownItem" href="${path}contact/contact.html">ติดต่อเรา</a>
        <a class="dropdown-item dropdownItem" href="${path}work_with_us/work_with_us.html">ร่วมงานกับเรา</a>
        <a class="dropdown-item dropdownItem" href="">แนะนำการใช้งานเว็ปไซต์</a>
        <a class="dropdown-item dropdownItem" href="">อัตราค่าโฆษณา</a>
        <a class="dropdown-item dropdownItem" href="">วิธีการชำระเงิน</a>
      </div>
    </div>
  </section>`;
// end menu PC

// menu mobile
topbar += `
  <nav class="slide-menu" id = "test-menu-left">
    <button type="button" class="btn slide-menu-control slideClose" data-action="close">
      <i class="fa fa-times" aria-hidden="true"></i>
    </button>

    <ul>
      <li>
        <a href ="${path}index.html" class="menu-mobile"><img src ="${path}assets/images/iconMenuHomeMobile-1.png"> หน้าแรก</a>
      </li>
      <li>
        <a href ="${path}searchWorkUrgent/premiumUrgent.html" class="menu-mobile"><img src ="${path}assets/images/iconMenuHomeMobile-2.png"> หางานด่วน</a>
      </li>
      <li>
        <a href ="่javascript:void(0)" class="menu-mobile">
          <img src ="${path}assets/images/iconMenuHomeMobile-4.png"> ค้นหางาน
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </a>
        <ul>
          <li>
            <a href="${path}searchWork/searchWork.html" class="menu-mobile"> งานกรุงเทพปริมณฑล</a>
          </li>
          <li>
            <a href="${path}searchWork/searchWork.html" class="menu-mobile"> งานนักศึกษาฝึกงาน</a>
          </li>
          <li>
            <a href="${path}searchWork/searchWork.html" class="menu-mobile"> งานสหกิจศึกษา</a>
          </li>
          <li>
            <a href="${path}searchWork/searchWork.html" class="menu-mobile"> งานสำหรับคนพิการ</a>
          </li>
          <li>
            <a href="${path}searchWork/searchWork.html" class="menu-mobile"> งาน Jobfair</a>
          </li>
        </ul>
      </li>
      <li>
        <a href ="${path}searchResume/searchResume.html" class="menu-mobile">
          <img src ="${path}assets/images/iconMenuHomeMobile-3.png"> ค้นหาประวัติ
        </a>
      </li>
      <li>
        <a href ="${path}regionWork/regionIndex.html" class="menu-mobile">
          <img src ="${path}assets/images/iconMenuHomeMobile-5.png"> งานภุมิภาค
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </a>
        <ul>
          <li>
            <a href="${path}regionWork/regionCenter.html" class="menu-mobile"> งานภาคกลาง</a>
          </li>
          <li>
            <a href="${path}regionWork/regionIndex.html" class="menu-mobile"> งานภาคตะวันออก</a>
          </li>
          <li>
            <a href="${path}regionWork/regionIndex.html" class="menu-mobile"> งานภาคเหนือ</a>
          </li>
          <li>
            <a href="${path}regionWork/regionIndex.html" class="menu-mobile"> งานภาคอีสาน</a>
          </li>
          <li>
            <a href="${path}regionWork/regionIndex.html" class="menu-mobile"> งานภาคใต้</a>
          </li>
          <li>
            <a href="${path}regionWork/regionIndex.html" class="menu-mobile"> งานภาคตะวันตก</a>
          </li>
        </ul>
      </li>
      <li>
        <a href ="${path}governmentWork/governmentWork.html" class="menu-mobile">
          <img src ="${path}assets/images/iconMenuHomeMobile-9.png"> งานราชการ
        </a>
      </li>
      <li>
        <a href ="${path}searchWork/premiumUrgent.html" class="menu-mobile">
          <img src ="${path}assets/images/iconMenuHomeMobile-6.png"> งานสหกิจ/พาร์ทไทม์
        </a>
      </li>
      <li>
        <a href ="่${path}article/article.html" class="menu-mobile">
          <img src ="${path}assets/images/iconMenuHomeMobile-7.png"> บทความ
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </a>
        <ul>
          <li>
            <a href="${path}article/hrSociety.html" class="menu-mobile"> HR Society</a>
          </li>
          <li>
            <a href="${path}article/inspiration.html" class="menu-mobile"> Inspiration</a>
          </li>
          <li>
            <a href="javascript:void(0)" class="menu-mobile"> วาไรตี้ 
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </a>
            <ul>
              <li>
                <a href="${path}article/new.html" class="menu-mobile">ข่าวน่าสนใจ</a>
              </li>
              <li>
                <a href="${path}article/activity.html" class="menu-mobile">กิจกรรม</a>
              </li>
              <li>
                <a href="${path}article/knowledge.html" class="menu-mobile">คลังความรู้</a>
              </li>
              <li>
                <a href="${path}article/lifeStyle.html" class="menu-mobile">Lifestyle</a>
              </li>
              <li>
                <a href="${path}article/jobEat.html" class="menu-mobile">จ๊อบชวนเจี๊ยะ</a>
              </li>
              <li>
                <a href="${path}article/vdo.html" class="menu-mobile">วีดีโอ</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a href ="่javascript:void(0)" class="menu-mobile">
          <img src ="${path}assets/images/iconMenuHomeMobile-8.png"> เกี่ยวกับจ๊อบบีเคเค
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </a>
        <ul>
          <li>
            <a href="" class="menu-mobile"> ข่าวและกิจกรรม</a>
          </li>
          <li>
            <a href="${path}contact/contact.html" class="menu-mobile"> ติดต่อเรา</a>
          </li>
          <li>
            <a href="${path}work_with_us/work_with_us.html" class="menu-mobile"> ร่วมงานกับเรา</a>
          </li>
          <li>
            <a href="" class="menu-mobile"> แนะนำการใช้งานเว็ปไซต์</a>
          </li>
          <li>
            <a href="" class="menu-mobile"> อัตราค่าโฆษณา</a>
          </li>
          <li>
            <a href="" class="menu-mobile"> วิธีการชำระเงิน</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>`;
// end menu mobile

document.querySelector(".topbar").innerHTML = topbar;

// active menu
const theFirst = document.querySelectorAll(".theFirst");

theFirst.forEach((theFirst) => {
  if (theFirst.getAttribute("href").includes(loPath)) {
    theFirst.className = "theFirst active";
  }
});
// end active menu

// ค้นหาประวัติ
const theThird = document.querySelectorAll(".theFirst")[3];

if (loPath === "resumeUrgentPremium.html") {
  theThird.classList.add("active");
}
// end ค้นหาประวัติ

// menu ภูมิภาค
const theFour = document.querySelectorAll(".theFirst")[4],
  theFour1 = theFour.nextElementSibling.querySelectorAll(".dropdownItem")[0],
  theFour2 = theFour.nextElementSibling.querySelectorAll(".dropdownItem")[1],
  theFour3 = theFour.nextElementSibling.querySelectorAll(".dropdownItem")[2],
  theFour4 = theFour.nextElementSibling.querySelectorAll(".dropdownItem")[3],
  theFour5 = theFour.nextElementSibling.querySelectorAll(".dropdownItem")[4],
  theFour6 = theFour.nextElementSibling.querySelectorAll(".dropdownItem")[5];

if (
  loPath === "regionCenter.html" ||
  loPath === "regionEast.html" ||
  loPath === "regionNorth.html" ||
  loPath === "regionEastNorth.html" ||
  loPath === "regionSouth.html" ||
  loPath === "regionWest.html"
) {
  theFour.classList.add("active");
}
if (loPath === "regionCenter.html") {
  theFour1.classList.add("active");
}
if (loPath === "regionEast.html") {
  theFour2.classList.add("active");
}
if (loPath === "regionNorth.html") {
  theFour3.classList.add("active");
}
if (loPath === "regionEastNorth.html") {
  theFour4.classList.add("active");
}
if (loPath === "regionSouth.html") {
  theFour5.classList.add("active");
}
if (loPath === "regionWest.html") {
  theFour6.classList.add("active");
}
// end menu ภูมิภาค

// menu บทความ
const theSix = document.querySelectorAll(".theFirst")[6],
  theSix1 = theSix.nextElementSibling.querySelectorAll(".dropdownItem")[0],
  theSix2 = theSix.nextElementSibling.querySelectorAll(".dropdownItem")[1],
  theSixSub1 = theSix.nextElementSibling
    .querySelectorAll(".dropdown-item")[2]
    .nextElementSibling.querySelectorAll(".dropdownItem")[0],
  theSixSub2 = theSix.nextElementSibling
    .querySelectorAll(".dropdown-item")[2]
    .nextElementSibling.querySelectorAll(".dropdownItem")[1],
  theSixSub3 = theSix.nextElementSibling
    .querySelectorAll(".dropdown-item")[2]
    .nextElementSibling.querySelectorAll(".dropdownItem")[2],
  theSixSub4 = theSix.nextElementSibling
    .querySelectorAll(".dropdown-item")[2]
    .nextElementSibling.querySelectorAll(".dropdownItem")[3],
  theSixSub5 = theSix.nextElementSibling
    .querySelectorAll(".dropdown-item")[2]
    .nextElementSibling.querySelectorAll(".dropdownItem")[4],
  theSixSub6 = theSix.nextElementSibling
    .querySelectorAll(".dropdown-item")[2]
    .nextElementSibling.querySelectorAll(".dropdownItem")[5];

if (
  loPath === "hrSociety.html" ||
  loPath === "knowledge.html" ||
  loPath === "inspiration.html" ||
  loPath === "jobEat.html" ||
  loPath === "lifeStyle.html" ||
  loPath === "vdo.html" ||
  loPath === "new.html"
) {
  theSix.classList.add("active");
}
if (loPath === "hrSociety.html") {
  theSix1.classList.add("active");
} else if (loPath === "inspiration.html") {
  theSix2.classList.add("active");
} else if (loPath === "new.html") {
  theSixSub1.classList.add("active");
} else if (loPath === "activity.html") {
  theSixSub2.classList.add("active");
} else if (loPath === "knowledge.html") {
  theSixSub3.classList.add("active");
} else if (loPath === "lifeStyle.html") {
  theSixSub4.classList.add("active");
} else if (loPath === "jobEat.html") {
  theSixSub5.classList.add("active");
} else if (loPath === "vdo.html") {
  theSixSub6.classList.add("active");
}
// end menu บทความ

// menu เกี่ยวกับ จ็อบบีเคเค
const the_seven = document.querySelectorAll(".theFirst")[7],
  the_sub_seven1 =
    the_seven.nextElementSibling.querySelectorAll(".dropdownItem")[1],
  the_sub_seven2 =
    the_seven.nextElementSibling.querySelectorAll(".dropdownItem")[2];

if (loPath === "work_with_us.html" || loPath === "contact.html") {
  the_seven.classList.add("active");
}
if (loPath === "contact.html") {
  the_sub_seven1.classList.add("active");
}
if (loPath === "work_with_us.html") {
  the_sub_seven2.classList.add("active");
}
// end menu เกี่ยวกับ จ็อบบีเคเค

$(document).ready(function () {
  // slide menu
  $(".slide-menu-control").click(function () {
    $(".fixBg").addClass("show");
  });
  $(".slideClose").click(function () {
    $(".fixBg").removeClass("show");
  });

  var menuLeft = $("#test-menu-left").slideMenu({
    position: "left",
    submenuLinkAfter: " >",
    backLinkBefore: '<i class="fa fa-caret-left" aria-hidden="true"></i> ',
  });
  // var menuRight = $("#test-menu-right").slideMenu({
  //   submenuLinkAfter: " ⇒",
  //   backLinkBefore: "⇐ ",
  // });
  // if ($(window).width() > 767) {
  //   menuRight.open(false);
  // }
});

function link() {
  window.open(location.href, "_blank");
}

$(".dropdownMenuUser").on("click", (evt) => {
  evt.stopPropagation();
});

const dropdownLists = document.querySelectorAll(".dropdownList");
dropdownLists.forEach((dropdownList) => {
  dropdownList.addEventListener("click", dropdown_open);
});

function dropdown_open(e) {
  dropdownLists.forEach((dropdownList) => {
    if (dropdownList.nextElementSibling.classList.contains("dropdownNone")) {
      dropdownList.nextElementSibling.classList.remove("dropdownNone");
    }
    dropdownList.nextElementSibling.classList.add("dropdownNone");
  });
  e.target.nextElementSibling.classList.remove("dropdownNone");
}

let businessMenuShow = "";

businessMenuShow += `
<section class="container">
  <article class="row">
    <div class="col-12">
      <section class="flexMenushowBusiness">
        <div>
          <span class="badgeNew">ใหม่</span>
          <a href="${path}dashboardBusiness/indexJobBusiness.html">หน้าสมาชิก</a>
        </div>
        <div>
          <a href="${path}dashboardBusiness/premiumJobAnnouncement.html">ประกาศงาน</a>
        </div>
        <div>
          <a href="${path}searchResumeUrgent/resumeUrgentPremium.html">ค้นหาเรซูเม่ด่วน</a>
        </div>
        <div>
          <a href="${path}dashboardBusiness/premiumJobAnnouncement.html">แก้ไขตำแหน่งงาน</a>
        </div>
        <div>
          <a href="">JobFair Online</a>
        </div>
        <div>
          <a href="">Resume Quick</a>
        </div>
        <div>
          <a href="${path}dashboardBusiness/ICMS_job_application_by_applicant.html">จัดการใบสมัครงาน iCMS</a>
        </div>
        <div>
          <a href="">รายงาน</a>
        </div>
        <div>
          <a href="">ตั้งค่า</a>
        </div>
        <div>
          <a href="${path}index.html">ออกจากระบบ</a>
        </div>
      </section>
    </div>
  </article>
</section>
`;
document.querySelector(".businessMenuShow").innerHTML = businessMenuShow;

// path menu active ผู้ประกอบการ
const menu_show_business = document.querySelectorAll(
  ".flexMenushowBusiness div a"
);

menu_show_business.forEach((menu_show_business) => {
  if (menu_show_business.getAttribute("href").includes(loPath)) {
    menu_show_business.className = "active";
  }
});

const menu_top_business = document
  .querySelectorAll(".flexMenushowBusiness div")[6]
  .querySelector("a");

if (
  loPath === "ICMS_fast_resume_application.html" ||
  loPath === "ICMS_easy_sms_group.html" ||
  loPath === "ICMS_easy_sms_tel.html" ||
  loPath === "ICMS_easy_sms_send.html" ||
  loPath === "ICMS_easy_sms_history.html" ||
  loPath === "ICMS_selected_job_application.html" ||
  loPath === "ICMS_request_status_covert_job.html" ||
  loPath === "ICMS_compare.html" ||
  loPath === "ICMS_condition_seven_day.html" ||
  loPath === "ICMS_job_all_condition.html" ||
  loPath === "ICMS_delete_job.html" ||
  loPath === "ICMS_jobfair_resume.html" ||
  loPath === "ICMS_application6.html"
) {
  menu_top_business.className = "active";
}
// end path menu active ผู้ประกอบการ
