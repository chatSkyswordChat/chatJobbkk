const registers = [
  { name: "ผู้สมัครงาน", link: path + "login/loginJobSeeker.html" },
  { name: "ผู้ประกอบการ", link: path + "login/loginBusiness.html" },
  { name: "สมัครสมาชิก", link: path + "login/register.html" },
];

let topbarBusiness = "";

topbarBusiness += `<div class="fixBg"></div>`;
// banner king
topbarBusiness += `
      <section class="king calC">
        <figure><img src="${path}assets/images/king.jpg" alt=""></figure>
      </section>`;
// end banner king

// navbar
topbarBusiness += `
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
topbarBusiness += `
<section class="flexNav iShow calC">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <article class="flexMenuBusiness">
                    <div><a href="${path}dashboardBusiness/premiumCompanyProfile.html" class="theFirst">ตำแหน่งงาน</a></div>
                    <div><a href="${path}dashboardBusiness/premiumAbout.html" class="theFirst">เกี่ยวกับเรา</a></div>
                    <div><a href="${path}dashboardBusiness/premiumBranch.html" class="theFirst">สาขาเรา</a></div>
                    <div><a href="${path}dashboardBusiness/premiumContact.html" class="theFirst">ติดต่อเรา</a></div>
                </article>
            </div>
        </div>
    </div>   
</section>`;
// end menu PC

document.querySelector(".topbar").innerHTML = topbarBusiness;

// active menu
const theFirst = document.querySelectorAll(".theFirst");

theFirst.forEach((theFirst) => {
  if (theFirst.getAttribute("href").includes(loPath)) {
    theFirst.className = "theFirst active";
  }
});

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
