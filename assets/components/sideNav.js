var menuMobile = "";

// let menuAll = ($(location).attr('href').split('/').length == 5) ? '' : '../'
let menuAll = $(location).attr("href").split("/").length == 7 ? "" : "../";
let link = location.href.split("/");
let linked = link[link.length - 1];
console.log(linked);

let menus = [
  {
    name: "หน้าแรก",
    linked: menuAll + "index.html",
    icon: menuAll + "assets/images/iconMenuHomeMobile-1.png",
    arrow: "",
  },

  {
    name: "ค้นหางาน",
    linked: menuAll + "searchWork/searchWork.html",
    icon: menuAll + "assets/images/iconMenuHomeMobile-2.png",
    arrow: `<i class="fa fa-angle-right" aria-hidden="true"></i>`,
    dropdowns: [
      {
        name: "กรุงเทพปริมณฑล",
        linked: menuAll + "searchWork/searchWork.html",
      },
      {
        name: "งานใกล้รถไฟฟ้า",
        linked: menuAll + "searchWork/searchWork.html",
      },
      {
        name: "งานตามสาขาอาชีพ",
        linked: menuAll + "searchWork/searchWork.html",
      },
      { name: "บริษัทชั้นนำ", linked: menuAll + "searchWork/searchWork.html" },
    ],
  },

  {
    name: "ค้นหางานภูมิภาค",
    linked: menuAll + "region/regionWork.html",
    icon: menuAll + "assets/images/iconMenuHomeMobile-3.png",
    arrow: `<i class="fa fa-angle-right" aria-hidden="true"></i>`,
    dropdowns: [
      { name: "ภาคกลาง", linked: menuAll + "region/regionWork.html" },
      { name: "ภาคตะวันออก", linked: menuAll + "region/regionWork.html" },
      { name: "ภาคเหนือ", linked: menuAll + "region/regionWork.html" },
      { name: "ภาคอีสาน", linked: menuAll + "region/regionWork.html" },
      { name: "ภาคใต้", linked: menuAll + "region/regionWork.html" },
      { name: "ภาคตะวันตก", linked: menuAll + "region/regionWork.html" },
    ],
  },

  {
    name: "ค้นหางานราชการ",
    linked: menuAll + "searchWork/searchWork.html",
    icon: menuAll + "assets/images/iconMenuHomeMobile-4.png",
    arrow: "",
  },

  {
    name: "บทความและคลังความรู้",
    linked: menuAll + "knowledgeBase/knowledge.html",
    icon: menuAll + "assets/images/iconMenuHomeMobile-5.png",
    arrow: `<i class="fa fa-angle-right" aria-hidden="true"></i>`,
    dropdowns: [
      { name: "คลังความรู้", linked: menuAll + "knowledgeBase/knowledge.html" },
      { name: "HR Society", linked: menuAll + "knowledgeBase/knowledge.html" },
      {
        name: "บุคคลสร้างแรงบันดาลใจ",
        linked: menuAll + "knowledgeBase/knowledge.html",
      },
      { name: "วาไรตี้", linked: menuAll + "knowledgeBase/knowledge.html" },
    ],
  },

  {
    name: "ข่าวและกิจกรรม",
    linked: menuAll + "knowledgeBase/newsActivities.html",
    icon: menuAll + "assets/images/iconMenuHomeMobile-6.png",
    arrow: `<i class="fa fa-angle-right" aria-hidden="true"></i>`,
    dropdowns: [
      {
        name: "ข่าวประชาสัมพันธ์",
        linked: menuAll + "knowledgeBase/newsActivities.html",
      },
      {
        name: "กิจกรรม",
        linked: menuAll + "knowledgeBase/newsActivities.html",
      },
      {
        name: "จ๊อบแฟร์ออนไลน์",
        linked: menuAll + "knowledgeBase/newsActivities.html",
      },
    ],
  },

  {
    name: "สำหรับผู้ประกอบการ",
    linked: menuAll + "searchHistory/searchHistory.html",
    icon: menuAll + "assets/images/iconMenuHomeMobile-7.png",
    arrow: `<i class="fa fa-angle-right" aria-hidden="true"></i>`,
    dropdowns: [
      {
        name: "ค้นหาประวัติ",
        linked: menuAll + "searchHistory/searchHistory.html",
      },
      {
        name: "อัตราค่าโฆษณา",
        linked: menuAll + "searchHistory/searchHistory.html",
      },
      {
        name: "วิธีการชำระเงิน",
        linked: menuAll + "searchHistory/searchHistory.html",
      },
    ],
  },

  {
    name: "เกี่ยวกับจ็อบบีเคเค",
    linked: menuAll + "about/about.html",
    icon: menuAll + "assets/images/iconMenuHomeMobile-8.png",
    arrow: `<i class="fa fa-angle-right" aria-hidden="true"></i>`,
    dropdowns: [
      { name: "ค้นหาประวัติ", linked: menuAll + "about/about.html" },
      { name: "อัตราค่าโฆษณา", linked: menuAll + "about/about.html" },
      { name: "วิธีการชำระเงิน", linked: menuAll + "about/about.html" },
    ],
  },
];

menuMobile += `<div class="controls">`;
menuMobile += `<section>`;
menuMobile += `<button type="button" class="flag active">TH</button>`;
menuMobile += `<button type="button" class="flag">EN</button>`;
menuMobile += `</section>`;
menuMobile += `<button type="button" class="btn slide-menu-control closeControl" data-action="close">`;
menuMobile += `<i class="fa fa-times" aria-hidden="true"></i>`;
menuMobile += `</button>`;
menuMobile += `</div>`;

menuMobile += `<ul class="MobileMenu">`;
menus.forEach((menu) => {
  let activeClass = "";
  if (menu.linked.includes(linked)) {
    activeClass = "active";
  }
  menuMobile += `<li>`;
  menuMobile += `<a href="${menu.linked}" class="menu-mobile ${activeClass}"><img src="${menu.icon}"> ${menu.name}`;
  menuMobile += ` ${menu.arrow}`;
  menuMobile += `</a>`;
  if (menu.dropdowns != null) {
    menuMobile += `<ul>`;
    menu.dropdowns.forEach((dropdown) => {
      menuMobile += `<li><a href="${dropdown.linked}" class="menu-mobile"> ${dropdown.name}</a></li>`;
    });
    menuMobile += `</ul>`;
  }
  menuMobile += `</li>`;
});
menuMobile += `</ul>`;

$("#test-menu-left").html(menuMobile);

$(document).ready(function () {
  var menuLeft = $("#test-menu-left").slideMenu({
    position: "left",
    submenuLinkAfter: " >",
    backLinkBefore: '<i class="fa fa-caret-left" aria-hidden="true"></i> ',
  });

  var menuRight = $("#test-menu-right").slideMenu({
    submenuLinkAfter: " ⇒",
    backLinkBefore: "⇐ ",
  });

  if ($(window).width() > 767) {
    menuRight.open(false);
  }
});
