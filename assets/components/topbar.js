var topbar = "";

let linkWeb = (location.href.split("/").length == 5) ? "" : "../";

let linkRegister = (location.href.split("/").length == 5) ? "" : "../";
let registers = [
  { name: "ผู้สมัครงาน", link: linkRegister + "login/loginJobSeeker.html" },
  { name: "ผู้ประกอบการ", link: linkRegister + "login/loginBusiness.html" },
  { name: "สมัครสมาชิก", link: linkRegister + "login/register.html" },
];

topbar += `<div class="fixBg"></div>`;
// banner king
topbar += `<section class="king calC">`;
topbar += `<figure><img src="${linkWeb}assets/images/king.jpg" alt=""></figure>`;
topbar += `</section>`;
// end banner king

// ปุ่มแฮมเบอเกอ logo jobbkk banner topPage เข้าสู่ระบบ
topbar += `<article class="bgTopbar calC py-3 px-5">`;
topbar += `<section class="flexTop">`;
// ปุ่มแฮมเบอเกอ
topbar += `<button type="button" class="btn slide-menu-control" data-target="test-menu-left" data-action="toggle">`;
topbar += `<i class="fas fa-bars"></i>`;
topbar += `</button>`;
// end ปุ่มแฮมเบอเกอ

// logo jobbkk
topbar += `<figure class="mr-2 logo">`;
topbar += `<a href="${linkWeb}index.html"><img src="${linkWeb}assets/images/logo.png" alt=""></a>`;
topbar += `</figure>`;
// end logo jobbkk

// banner topPage PC
topbar += `<figure class="borderStyle banner mr-2">`;
topbar += `<a href="javascript:void(0)" onclick="link()"></a>`;
topbar += `<img src="${linkWeb}assets/images/toppage-ad.jpg" alt="">`;
topbar += ` </a>`;
topbar += `</figure>`;
// end banner topPage PC

topbar += `<section class="flexLangEnter">`;
// ภาษา
topbar += `<div class="flexLang mb-2">`;
topbar += `<button class="active">TH</button>`;
topbar += `<button>EN</button>`;
topbar += `</div>`;
// end ภาษา

// เข้าสู่ระบบ
topbar += `<div class="dropdown enterSystem">`;
topbar += `<button class="dropdown-toggle dropdownToggle clWhite fontText" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`;
topbar += `<span class="mr-2">เข้าสู่ระบบ</span> <i class="fas fa-angle-down"></i>`;
topbar += `</button>`;

topbar += `<div class="dropdown-menu dropdownMenu dropdown-menu-right" aria-labelledby="dropdownMenuButton">`;
registers.forEach((register) => {
  topbar += `<a class="dropdown-item dropdownItem" href="${register.link}">${register.name}</a>`;
});
topbar += `</div>`;
topbar += `</div>`;
// end เข้าสู่ระบบ

// user เข้าสู่ระบบ
let userLogin = (location.href.split('/').length == 5) ? '' : '../'
topbar += `<div class="dropdown userLogin">`;
topbar += `<button class="dropdown-toggle dropdownToggle userToggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`;
topbar += `<figure class="picUser mb-1"><img src="${userLogin}assets/images/pic.jpg" alt=""/> <i class="fas fa-angle-down"></i></figure>`;
topbar += `<p class="idUser fontMark">ID : 123456</p>`;
topbar += `</button>`;

topbar += `<div class="dropdown-menu dropdown-menu-right dropdownMenuUser">`;
topbar += `<section>`;
topbar += `<div class="flexUserAlign mb-3">
            <figure class="mb-2"><img src="${userLogin}assets/images/pic.jpg" alt=""/></figure>
            <p>ID : 123456</p>
            <p>dynastystrike@gmail.com</p>
            <p class="editProfile mt-1"><a href="javascript:void(0)">Edit Profile</a></p>
          </div>`;

topbar += `<ul class="userMargin">`;
let linkUser = (location.href.split("/").length == 5) ? "" : "../";
userdropdowns = [
  {
    name: "หน้าสมาชิก",
    link: linkUser + "index.html",
    down: "",
    dropdownClass: "",
    class: "",
    dropdownShow: "",
    data: "",
    span: "",
    arrowShow: "",
    badge: `<span class="badgeNew">ใหม่</span>`
  },
  {
    name: "สร้าง/แก้ไขเรซูเม่",
    link: linkUser + "index.html",
    down: "",
    dropdownClass: "",
    class: "",
    dropdownShow: "",
    data: "",
    span: "",
    arrowShow: "",
    badge: ""
  },
  {
    name: "จัดการข้อมูล",
    link: linkUser + "",
    down: '<i class="fas fa-angle-down"></i>',
    dropdownClass: "dropdownList",
    class: "dropdownHead",
    dropdownShow: "dropdown dropdownCl",
    data: 'data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"',
    span: "mr-1",
    arrowShow: '<i class="fas fa-angle-down"></i>',
    badge: "",
    dropdowns: [
      { name: "ประวัติการสมัครงาน", link: linkUser + "index.html" },
      { name: "งานที่บันทึก", link: linkUser + "index.html" },
      { name: "ผู้ประกอบการเปิดดูประวัติ", link: linkUser + "index.html" },
      { name: "นัดสัมภาษณ์", link: linkUser + "index.html" },
      { name: "Job Match", link: linkUser + "index.html" },
      { name: "ขอดูใบสมัคร", link: linkUser + "index.html" },
      { name: "ตารางนัดหมาย", link: linkUser + "index.html" },
      { name: "ความเป็นส่วนตัว", link: linkUser + "index.html" },
      { name: "ตั้งค่าการใช้งาน", link: linkUser + "index.html" },
    ],
  },
  {
    name: "ออกจากระบบ",
    down: "",
    dropdownClass: "",
    class: "",
    dropdownShow: "",
    data: "",
    span: "",
    arrowShow: "",
    badge: ""
  },
];
userdropdowns.forEach((userdropdown) => {
  if (userdropdown.dropdowns != null && userdropdown.dropdowns != "") {
    topbar += `<li>`;
    topbar += `<a class="dropdown-item dropdownItem py-2 px-3 ${userdropdown.dropdownClass}" href="javascript:void(0)">${userdropdown.name} ${userdropdown.down}</a>`;
    topbar += `<ul class="dropdownNone">`;
    userdropdown.dropdowns.forEach((dropdown) => {
      topbar += `<li><a class="dropdown-item dropdownItem py-2 px-3" href="${dropdown.link}"><i class="fas fa-chevron-right"></i> ${dropdown.name}</a></li>`;
    });
    topbar += `</ul>`;
    topbar += `</li>`;
  } else {
    topbar += `<a class="dropdown-item dropdownItem py-2 px-3" href="${userdropdown.link}">${userdropdown.name} ${userdropdown.down}</a>`;
  }
});
topbar += `</ul>`;
topbar += `</section>`;
topbar += `</div>`;
topbar += `</div>`;
// end user เข้าสู่ระบบ

// business เข้าสู่ระบบ
let businessLog = (location.href.split('/').length == 5) ? '' : '../'
topbar += `<div class="dropdown businessLogin">`;
topbar += `<button class="dropdown-toggle dropdownToggle userToggle" type="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <figure class="picUser mb-1"><img src="${businessLog}assets/images/skysword.jpg" alt="" /> <i
                                class="fas fa-angle-down"></i></figure>
                        <p class="idUser fontMark">ID : 456789</p>
                    </button>`;
topbar += `<div class="dropdown-menu dropdown-menu-right dropdownMenuUser">`;
topbar += `<section>`;
topbar += `<div class="flexUserAlign mb-3">
                                <figure class="mb-2"><img src="${businessLog}assets/images/skysword.jpg" alt="" /></figure>
                                <p>ID : 123456</p>
                                <p>dynastystrike@gmail.com</p>
                                <p class="editProfile mt-1"><a href="javascript:void(0)">Edit Profile</a></p>
                            </div>`;

var businessLink = (location.href.split("/").length == 5) ? "" : "../";
var businesses = [
  { name: "หน้าสมาชิก", link: businessLink + "index.html", badge: `<span class="badgeNew">ใหม่</span>` },
  { name: "ประกาศงาน", link: businessLink + "index.html", badge: '' },
  { name: "อัพเดท/แก้ไขตำแหน่งงาน", link: businessLink + "index.html", badge: '' },
  { name: "JobFair Online", link: businessLink + "index.html", badge: '' },
  { name: "Resume Quick", link: businessLink + "index.html", badge: '' },
  { name: "จัดการใบสมัครงาน iCMS", link: businessLink + "index.html", badge: '' },
  { name: "รายงาน", link: businessLink + "index.html", badge: '' },
  { name: "ตั้งค่า", link: businessLink + "index.html", badge: '' },
  { name: "ออกจากระบบ", link: businessLink + "index.html", badge: '' },
];
topbar += `<ul class="userMargin">`;
businesses.forEach((business) => {
  topbar += `<li>
                              <a class="dropdown-item dropdownItem py-2 px-3"
                                  href="${business.link}">${business.name}</a>
                          </li>`;
});
topbar += `</ul>`;
topbar += `</section>`;
topbar += `</div>`;
topbar += `</div>`;
// end business เข้าสู่ระบบ

topbar += `</section>`;
topbar += `</section>`;

// banner topPage Mobile
topbar += `<section class="bannerMobile mt-3">`;
topbar += `<figure> <a href="javascript:void(0)" onclick="link()" class="borderStyle">`;
topbar += `<img src="${linkWeb}assets/images/toppage-ad.jpg" alt=""></a>`;
topbar += `</figure>`;
topbar += `</section>`;
// end banner topPage Mobile
topbar += `</article>`;
// end ปุ่มแฮมเบอเกอ logo jobbkk banner topPage เข้าสู่ระบบ

let linkMenu = (location.href.split("/").length == 5) ? "" : "../";
let path = location.href.split("/");
let lastPath = path[path.length - 1];
let menus = [
  {
    name: "หน้าแรก",
    link: linkMenu + "index.html",
    img: linkMenu + "assets/images/iconMenuHomeMobile-1.png",
    classOrigin: "",
    class: "",
    data: "",
    arrow: "",
    arrowMobile: "",
    none: '',
  },
  {
    name: "หางานด่วน",
    link: linkMenu + "searchWork/premiumUrgent.html",
    img: linkMenu + "assets/images/iconMenuHomeMobile-2.png",
    classOrigin: "",
    class: "",
    data: "",
    arrow: "",
    arrowMobile: "",
    none: '',
  },
  {
    name: "ค้นหางาน ",
    link: linkMenu + "searchWork/premiumUrgent.html",
    img: linkMenu + "assets/images/iconMenuHomeMobile-3.png",
    classOrigin: "dropdown dropdownHover dropdownCl",
    class: "dropdownHead",
    data: `data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"`,
    arrowMobile: `<i class="fa fa-angle-right" aria-hidden="true"></i>`,
    arrow: '<i class="fas fa-angle-down"></i>',
    none: '',
    dropdowns: [
      {
        name: "งานกรุงเทพปริมณฑล",
        link: linkMenu + "searchWork/premiumUrgent.html",
        arrow: "",
        arrowMobile: "",
      },
      {
        name: "งานนักศึกษาฝึกงาน",
        link: linkMenu + "searchWork/premiumUrgent.html",
        arrow: "",
        arrowMobile: "",
      },
      {
        name: "งานสหกิจศึกษา",
        link: linkMenu + "searchWork/premiumUrgent.html",
        arrow: "",
        arrowMobile: "",
      },
      {
        name: "งานสำหรับคนพิการ",
        link: linkMenu + "searchWork/premiumUrgent.html",
        arrow: "",
        arrowMobile: "",
      },
      {
        name: "งาน Jobfair",
        link: linkMenu + "searchWork/premiumUrgent.html",
        arrow: "",
        arrowMobile: "",
      },
    ],
  },
  {
    name: "ค้นหาประวัติ",
    link: linkMenu + "searchResume/resumeUrgentPremium.html",
    img: linkMenu + "assets/images/iconMenuHomeMobile-4.png",
    classOrigin: "",
    class: "",
    data: "",
    arrow: "",
    arrowMobile: "",
    none: '',
  },
  {
    name: "งานภุมิภาค ",
    link: linkMenu + "javascirpt:void(0)",
    img: linkMenu + "assets/images/iconMenuHomeMobile-5.png",
    classOrigin: "dropdown dropdownHover dropdownCl",
    class: "dropdownHead",
    data: `data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"`,
    arrowMobile: `<i class="fa fa-angle-right" aria-hidden="true"></i>`,
    arrow: '<i class="fas fa-angle-down"></i>',
    none: '',
    dropdowns: [
      {
        name: "งานภาคกลาง",
        link: linkMenu + "index.html",
        arrow: "",
        arrowMobile: "",
      },
      {
        name: "งานภาคตะวันออก",
        link: linkMenu + "index.html",
        arrow: "",
        arrowMobile: "",
      },
      {
        name: "งานภาคเหนือ",
        link: linkMenu + "index.html",
        arrow: "",
        arrowMobile: "",
      },
      {
        name: "งานภาคอีสาน",
        link: linkMenu + "index.html",
        arrow: "",
        arrowMobile: "",
      },
      {
        name: "งานภาคใต้",
        link: linkMenu + "index.html",
        arrow: "",
        arrowMobile: "",
      },
      {
        name: "งานภาคตะวันตก",
        link: linkMenu + "index.html",
        arrow: "",
        arrowMobile: "",
      },
    ],
  },
  {
    name: "งานราชการ",
    link: linkMenu + "governmentWork/governmentWork.html",
    img: linkMenu + "assets/images/iconMenuHomeMobile-9.png",
    classOrigin: "",
    class: "",
    data: "",
    arrow: "",
    arrowMobile: "",
    none: 'goverment',
  },
  {
    name: "งานสหกิจ/พาร์ทไทม์",
    link: linkMenu + "javascirpt:void(0)",
    img: linkMenu + "assets/images/iconMenuHomeMobile-6.png",
    classOrigin: "",
    class: "",
    data: "",
    arrow: "",
    arrowMobile: "",
    none: '',
  },
  {
    name: "บทความ ",
    link: linkMenu + "javascirpt:void(0)",
    img: linkMenu + "assets/images/iconMenuHomeMobile-7.png",
    classOrigin: "dropdown dropdownHover dropdownCl",
    class: "dropdownHead",
    data: `data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"`,
    arrowMobile: `<i class="fa fa-angle-right" aria-hidden="true"></i> `,
    arrow: '<i class="fas fa-angle-down"></i>',
    none: '',
    dropdowns: [
      {
        name: "HR Society",
        link: linkMenu + "index.html",
        arrow: "",
        arrowMobile: "",
      },
      {
        name: "Inspiration",
        link: linkMenu + "index.html",
        arrow: "",
        arrowMobile: "",
      },
      {
        name: "วาไรตี้ ",
        link: linkMenu + "",
        arrow: '<i class="fas fa-chevron-right iconAB"></i>',
        arrowMobile: `<i class="fa fa-angle-right" aria-hidden="true"></i> `,
        dropdownsTwo: [
          { name: "ข่าวน่าสนใจ", link: linkMenu + "index.html" },
          { name: "กิจกรรม", link: linkMenu + "index.html" },
          { name: "คลังความรู้", link: linkMenu + "index.html" },
          { name: "Lifestyle", link: linkMenu + "index.html" },
          { name: "จ๊อบชวนเจี๊ยะ", link: linkMenu + "index.html" },
          { name: "วีดีโอ", link: linkMenu + "index.html" },
        ],
      },
    ],
  },
  {
    name: "เกี่ยวกับจ๊อบบีเคเค ",
    link: linkMenu + "javascirpt:void(0)",
    img: linkMenu + "assets/images/iconMenuHomeMobile-8.png",
    classOrigin: "dropdown dropdownHover dropdownCl",
    class: "dropdownHead",
    data: `data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"`,
    arrowMobile: `<i class="fa fa-angle-right" aria-hidden="true"></i>`,
    arrow: '<i class="fas fa-angle-down"></i>',
    none: '',
    dropdowns: [
      {
        name: "ข่าวและกิจกรรม",
        link: linkMenu + "index.html",
        arrow: "",
        arrowMobile: "",
      },
      {
        name: "ติดต่อเรา",
        link: linkMenu + "index.html",
        arrow: "",
        arrowMobile: "",
      },
      {
        name: "ร่วมงานกับเรา",
        link: linkMenu + "index.html",
        arrow: "",
        arrowMobile: "",
      },
      {
        name: "แนะนำการใช้งานเว็ปไซต์",
        link: linkMenu + "index.html",
        arrow: "",
        arrowMobile: "",
      },
      {
        name: "อัตราค่าโฆษณา",
        link: linkMenu + "index.html",
        arrow: "",
        arrowMobile: "",
      },
      {
        name: "วิธีการชำระเงิน",
        link: linkMenu + "index.html",
        arrow: "",
        arrowMobile: "",
      },
    ],
  },
];

// menu PC
topbar += `<section class="flexNav calC">`;
menus.forEach((menu) => {

  let activeClass = "";
  if (menu.link.includes(lastPath)) {
    activeClass = "active";
  }

  topbar += `<div class="${menu.classOrigin} ${menu.none}">`;
  topbar += `<a href="${menu.link}" class="${menu.class} ${activeClass} theFirst" ${menu.data}> ${menu.name} ${menu.arrow}</a>`;
  if (menu.dropdowns != null && menu.dropdowns != "") {
    topbar += `<div class="dropdown-menu dropdownHeadDown">`;
    menu.dropdowns.forEach((dropdown) => {
      if (dropdown.dropdownsTwo != null && dropdown.dropdownsTwo != "") {
        topbar += `<div class="dropdown dropright dropdownCl">`;
        topbar += `<a class="${menu.class} dropdown-item" id="${menu.id}" href="javascript:void(0)" ${menu.data}> ${dropdown.name} ${dropdown.arrow}</a>`;
        topbar += `<div class="dropdown-menu dropdownHeadDown">`;
        dropdown.dropdownsTwo.forEach((dropdownTwo) => {
          topbar += `<a class="dropdown-item dropdownItem" href="${dropdownTwo.link}" ${menu.data}> ${dropdownTwo.name}</a>`;
        });
        topbar += `</div>`;
        topbar += `</div>`;
      } else {
        topbar += `<a class="dropdown-item dropdownItem" href="${dropdown.link}" > ${dropdown.name} ${dropdown.arrow}</a>`;
      }
    });
  }
  topbar += `</div>`;
  topbar += `</div>`;
});
topbar += `</section>`;
// end menu PC

// menu mobile
topbar += `<nav class="slide-menu" id = "test-menu-left">`;
topbar += `<button type="button" class="btn slide-menu-control slideClose" data-action="close">`;
topbar += `<i class="fa fa-times" aria-hidden="true"></i>`;
topbar += `</button>`;

topbar += `<ul>`;
menus.forEach((menu) => {
  topbar += `<li>`;
  topbar += `<a href ="${menu.link}" class="menu-mobile">`;
  topbar += `<img src ="${menu.img}"> ${menu.name}`;
  topbar += `${menu.arrowMobile}`;
  topbar += `</a>`;
  if (menu.dropdowns != null && menu.dropdowns != "") {
    topbar += `<ul>`;
    menu.dropdowns.forEach((dropdown) => {
      topbar += `<li>`;
      topbar += `<a href="${dropdown.link}" class="menu-mobile"> ${dropdown.name} ${dropdown.arrowMobile}</a>`;
      if (dropdown.dropdownsTwo != null && dropdown.dropdownsTwo != "") {
        topbar += `<ul>`;
        dropdown.dropdownsTwo.forEach((dropdownTwo) => {
          topbar += `<li><a href="${dropdownTwo.link}" class="menu-mobile">${dropdownTwo.name}</a></li>`;
        });
        topbar += `</ul>`;
      }
      topbar += `</li>`;
    });
    topbar += `</ul>`;
  }
  topbar += `</li>`;
});
topbar += `</ul>`;
topbar += `</nav>`;
// end menu mobile

document.getElementsByClassName("topbar")[0].innerHTML = topbar;

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
  var linked = location.href;
  window.open(linked, "_blank");
}

$(".dropdownMenuUser").on("click", (evt) => {
  evt.stopPropagation();
});

$(".dropdownList").click(() => {
  let next = $(".dropdownList").next();
  if (next.hasClass("dropdownNone")) {
    next.removeClass("dropdownNone");
  } else {
    next.addClass("dropdownNone");
  }
});
