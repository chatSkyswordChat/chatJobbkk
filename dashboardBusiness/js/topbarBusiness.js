var topbarBusiness = "";

let linkWeb = (location.href.split("/").length == 5) ? "" : "../";

let linkRegister = (location.href.split("/").length == 5) ? "" : "../";
let registers = [
    { name: "ผู้สมัครงาน", link: linkRegister + "login/loginApplicant.html" },
    { name: "ผู้ประกอบการ", link: linkRegister + "login/loginBusiness.html" },
    { name: "สมัครสมาชิก", link: linkRegister + "login/register.html" },
];

topbarBusiness += `<div class="fixBg"></div>`;
// banner king
topbarBusiness += `<section class="king calC">`;
topbarBusiness += `<figure><img src="${linkWeb}assets/images/king.jpg" alt=""></figure>`;
topbarBusiness += `</section>`;
// end banner king

// ปุ่มแฮมเบอเกอ logo jobbkk banner topPage เข้าสู่ระบบ
topbarBusiness += `<article class="bgTopbar calC py-3 px-5">`;
topbarBusiness += `<section class="flexTop">`;
// ปุ่มแฮมเบอเกอ
topbarBusiness += `<button type="button" class="btn slide-menu-control" data-target="test-menu-left" data-action="toggle">`;
topbarBusiness += `<i class="fas fa-bars"></i>`;
topbarBusiness += `</button>`;
// end ปุ่มแฮมเบอเกอ

// logo jobbkk
topbarBusiness += `<figure class="mr-2 logo">`;
topbarBusiness += `<a href="javascript:void(0)"><img src="${linkWeb}assets/images/logo.png" alt=""></a>`;
topbarBusiness += `</figure>`;
// end logo jobbkk

// banner topPage PC
topbarBusiness += `<figure class="borderStyle banner mr-2">`;
topbarBusiness += `<a href="javascript:void(0)" onclick="link()"></a>`;
topbarBusiness += `<img src="${linkWeb}assets/images/toppage-ad.jpg" alt="">`;
topbarBusiness += ` </a>`;
topbarBusiness += `</figure>`;
// end banner topPage PC

topbarBusiness += `<section class="flexLangEnter">`;
// ภาษา
topbarBusiness += `<div class="flexLang mb-2">`;
topbarBusiness += `<button class="active">TH</button>`;
topbarBusiness += `<button>EN</button>`;
topbarBusiness += `</div>`;
// end ภาษา

// เข้าสู่ระบบ
topbarBusiness += `<div class="dropdown enterSystem">`;
topbarBusiness += `<button class="dropdown-toggle dropdownToggle clWhite fontText" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`;
topbarBusiness += `<span class="mr-2">เข้าสู่ระบบ</span> <i class="fas fa-angle-down"></i>`;
topbarBusiness += `</button>`;

topbarBusiness += `<div class="dropdown-menu dropdownMenu dropdown-menu-right" aria-labelledby="dropdownMenuButton">`;
registers.forEach((register) => {
    topbarBusiness += `<a class="dropdown-item dropdownItem" href="${register.link}">${register.name}</a>`;
});
topbarBusiness += `</div>`;
topbarBusiness += `</div>`;
// end เข้าสู่ระบบ

// user เข้าสู่ระบบ
let userLogin = (location.href.split('/').length == 5) ? '' : '../'
topbarBusiness += `<div class="dropdown userLogin">`;
topbarBusiness += `<button class="dropdown-toggle dropdownToggle userToggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`;
topbarBusiness += `<figure class="picUser mb-1"><img src="${userLogin}assets/images/pic.jpg" alt=""/> <i class="fas fa-angle-down"></i></figure>`;
topbarBusiness += `<p class="idUser fontMark">ID : 123456</p>`;
topbarBusiness += `</button>`;

topbarBusiness += `<div class="dropdown-menu dropdown-menu-right dropdownMenuUser">`;
topbarBusiness += `<section>`;
topbarBusiness += `<div class="flexUserAlign mb-3">
            <figure class="mb-2"><img src="${userLogin}assets/images/pic.jpg" alt=""/></figure>
            <p>ID : 123456</p>
            <p>dynastystrike@gmail.com</p>
            <p class="editProfile mt-1"><a href="javascript:void(0)">Edit Profile</a></p>
          </div>`;

topbarBusiness += `<ul class="userMargin">`;
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
        topbarBusiness += `<li>`;
        topbarBusiness += `<a class="dropdown-item dropdownItem py-2 px-3 ${userdropdown.dropdownClass}" href="javascript:void(0)">${userdropdown.name} ${userdropdown.down}</a>`;
        topbarBusiness += `<ul class="dropdownNone">`;
        userdropdown.dropdowns.forEach((dropdown) => {
            topbarBusiness += `<li><a class="dropdown-item dropdownItem py-2 px-3" href="${dropdown.link}"><i class="fas fa-chevron-right"></i> ${dropdown.name}</a></li>`;
        });
        topbarBusiness += `</ul>`;
        topbarBusiness += `</li>`;
    } else {
        topbarBusiness += `<a class="dropdown-item dropdownItem py-2 px-3" href="${userdropdown.link}">${userdropdown.name} ${userdropdown.down}</a>`;
    }
});
topbarBusiness += `</ul>`;
topbarBusiness += `</section>`;
topbarBusiness += `</div>`;
topbarBusiness += `</div>`;
// end user เข้าสู่ระบบ

// business เข้าสู่ระบบ
let businessLog = (location.href.split('/').length == 5) ? '' : '../'
topbarBusiness += `<div class="dropdown businessLogin">`;
topbarBusiness += `<button class="dropdown-toggle dropdownToggle userToggle" type="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <figure class="picUser mb-1"><img src="${businessLog}assets/images/skysword.jpg" alt="" /> <i
                                class="fas fa-angle-down"></i></figure>
                        <p class="idUser fontMark">ID : 456789</p>
                    </button>`;
topbarBusiness += `<div class="dropdown-menu dropdown-menu-right dropdownMenuUser">`;
topbarBusiness += `<section>`;
topbarBusiness += `<div class="flexUserAlign mb-3">
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
topbarBusiness += `<ul class="userMargin">`;
businesses.forEach((business) => {
    topbarBusiness += `<li>
                              <a class="dropdown-item dropdownItem py-2 px-3"
                                  href="${business.link}">${business.name}</a>
                          </li>`;
});
topbarBusiness += `</ul>`;
topbarBusiness += `</section>`;
topbarBusiness += `</div>`;
topbarBusiness += `</div>`;
// end business เข้าสู่ระบบ

topbarBusiness += `</section>`;
topbarBusiness += `</section>`;

// banner topPage Mobile
topbarBusiness += `<section class="bannerMobile mt-3">`;
topbarBusiness += `<figure> <a href="javascript:void(0)" onclick="link()" class="borderStyle">`;
topbarBusiness += `<img src="${linkWeb}assets/images/toppage-ad.jpg" alt=""></a>`;
topbarBusiness += `</figure>`;
topbarBusiness += `</section>`;
// end banner topPage Mobile
topbarBusiness += `</article>`;
// end ปุ่มแฮมเบอเกอ logo jobbkk banner topPage เข้าสู่ระบบ

let linkMenu = ((location.href.split("/").length == 5)) ? "" : "../";
let path = location.href.split("/");
let lastPath = path[path.length - 1];
console.log(lastPath);

let menus = [
    {
        name: "ตำแหน่งงาน",
        link: linkMenu + "dashboardBusiness/premiumCompanyProfile.html",
    },
    {
        name: "เกี่ยวกับเรา",
        link: linkMenu + "dashboardBusiness/premiumAbout.html",
    },
    {
        name: "สาขาเรา",
        link: linkMenu + "dashboardBusiness/premiumBranch.html",
    },
    {
        name: "ติดต่อเรา",
        link: linkMenu + "dashboardBusiness/premiumContact.html",
    }
];

// menu PC
topbarBusiness += `<section class="flexNav iShow calC">`;
topbarBusiness += `<div class="container">`
topbarBusiness += `<div class="row">`
topbarBusiness += `<div class="col-12">`
topbarBusiness += `<article class="flexMenuBusiness">`
menus.forEach((menu) => {
    let activeClass = "";
    if (menu.link.includes(lastPath)) {
        activeClass = "active";
    }
    if(menu.link == '../dashboardBusiness/premiumCompanyProfile.html'){
        if(lastPath == 'premiumJobDetail.html'){
            activeClass = "active";
        }
    }

    topbarBusiness += `<div>`;
    topbarBusiness += `<a href="${menu.link}" class="${activeClass} theFirst">${menu.name}</a>`;
    topbarBusiness += `</div>`;
});
topbarBusiness += `</article>`
topbarBusiness += `</div>`
topbarBusiness += `</div>`
topbarBusiness += `</div>`
topbarBusiness += `</section>`;
// end menu PC

document.getElementsByClassName("topbar")[0].innerHTML = topbarBusiness;

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
