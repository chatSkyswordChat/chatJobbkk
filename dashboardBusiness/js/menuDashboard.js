let menuDashboard = "";

menuDashboard += `
<article class="navMenuBusiness p-3">
    <h2 class="fontSubHead">เมนูสำหรับผู้ประกอบการ</h2>
    <div id="toggleMenuBusiness"><button><i class="fas fa-bars"></i></button></div>
</article>

<ul class="menuStep1">
    <li>
        <a href="${path}dashboardBusiness/indexJobBusiness.html">
            <figure><img src="images/menuDashboardBusiness-01.svg" alt="">
                หน้าสมาชิก</figure>
        </a>
    </li>
    <li class="menu_dropdown">
        <a href="javascript:void(0)" data-dropdown="dropdown_toggle">
            <figure><img src="images/menuDashboardBusiness-02.svg" alt=""> ประกาศงาน</figure>
            <i class="fas fa-chevron-down"></i>
        </a>
        <ul>
            <li><a href="#"><i class="fas fa-chevron-right"></i> ประกาศตำแหน่งงาน</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> อัพเดตตำแหน่งงาน</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> โปรโมทตำแหน่งงาน</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> ตำแหน่งงานที่ลบ</a></li>
        </ul>
    </li>
    <li>
        <a href="${path}dashboardBusiness/ICMS_job_application_by_applicant.html">
            <figure><img src="images/menuDashboardBusiness-03.svg" alt=""> จัดการใบสมัครงาน iCMS</figure>
        </a>
    </li>
    <li>
        <a href="${path}dashboardBusiness/schedule_job_interview.html">
            <figure><img src="images/menuDashboardBusiness-04.svg" alt=""> นัดสัมภาษณ์งาน</figure>
        </a>
    </li>
    <li class="menu_dropdown">
        <a href="javascript:void(0)" data-dropdown="dropdown_toggle">
            <figure><img src="images/menuDashboardBusiness-05.svg" alt=""> Newjobber</figure>
            <i class="fas fa-chevron-down"></i>
        </a>
        <ul>
            <li><a href="#"><i class="fas fa-chevron-right"></i> เข้าสู่เว็บไซต์ Newjobber</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> จัดการใบสมัครงาน (ICMS)</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> ขั้นตอนการนัดสัมภาษณ์</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> ใบสมัครงานที่เลือก</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> ประวัติการเปิดใบสมัครงาน</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> ใบสมัครงานที่ลบ</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> คู่มือการใช้งาน</a></li>
        </ul>
    </li>
    <li>
        <a href="#">
            <figure><img src="images/menuDashboardBusiness-06.svg" alt=""> Interview Jobfair Online</figure>
        </a>
    </li>
    <li>
        <a href="#">
            <figure><img src="images/menuDashboardBusiness-07.svg" alt=""> Resume Quick</figure>
        </a>
    </li>
    <li>
        <a href="#">
            <figure><img src="images/menuDashboardBusiness-08.svg" alt=""> Easy SMS</figure>
        </a>
    </li>
    <li class="menu_dropdown">
        <a href="javascript:void(0)" data-dropdown="dropdown_toggle">
            <figure><img src="images/menuDashboardBusiness-09.svg" alt=""> การชำระเงิน</figure>
            <i class="fas fa-chevron-down"></i>
        </a>
        <ul>
            <li><a href="#"><i class="fas fa-chevron-right"></i> วิธีการชำระเงิน</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> รายการชำระเงิน</a></li>
            <li><a href="#"><i class="fas fa-chevron-right"></i> แจ้งการชำระเงิน</a>
            </li>
        </ul>
    </li>
    <li>
        <a href="#">
            <figure><img src="images/menuDashboardBusiness-10.svg" alt=""> รายงาน</figure>
        </a>
    </li>
    <li>
        <a href="${path}dashboardBusiness/setting_user.html">
            <figure><img src="images/menuDashboardBusiness-11.svg" alt=""> ตั้งค่าบัญชีผู้ใช้</figure>
        </a>
    </li>
    <li>
        <a href="manage_account.html">
            <figure><img src="images/menuDashboardBusiness-12.svg" alt=""> จัดการบัญชี</figure>
        </a>
    </li>
</ul>
`;

document.querySelector("#menuDashboardBusiness").innerHTML = menuDashboard;

// menu dashboard
const toggleMenuBusiness = document.querySelector("#toggleMenuBusiness");
const menuStep1 = document.querySelector(".menuStep1");
const media_size = 991;

toggleMenuBusiness.addEventListener("click", () => {
  toggle();
});

const toggle = () => {
  if (menuStep1.classList.contains("show")) {
    menuStep1.classList.remove("show");
    menuStep1.removeAttribute("style");
  } else {
    menuStep1.classList.add("show");
    menuStep1.style.maxHeight = menuStep1.scrollHeight + "vh";
    menuStep1.style.marginBottom = "1.5rem";
  }
};

menuStep1.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-dropdown")) {
    const drop = e.target.parentElement;
    if (drop.lastElementChild.classList.contains("active")) {
      remove_active();
    } else {
      if (menuStep1.querySelector("li a ~ ul.active")) {
        remove_active();
      }
      drop.lastElementChild.classList.add("active");
      drop.lastElementChild.style.maxHeight =
        drop.lastElementChild.scrollHeight + "px";
    }
  }
});

const remove_active = () => {
  menuStep1.querySelector("ul.active").removeAttribute("style");
  menuStep1.querySelector("ul.active").classList.remove("active");
};

window.addEventListener("resize", () => {
  if (window.innerWidth > media_size) {
    resize();
  }
});

const resize = () => {
  if (menuStep1.classList.contains("show")) {
    toggle();
  }
  if (menuStep1.querySelector("ul.active")) {
    remove_active();
  }
};
// end menu dashboard

// active menu dashboard
const active_menu_icmses = document.querySelectorAll(".menuStep1 li a");

active_menu_icmses.forEach((active_menu_icms) => {
  if (active_menu_icms.getAttribute("href").includes(loPath)) {
    active_menu_icms.className = "active";
  }
});

const nth_three = document
  .querySelectorAll(".menuStep1 > li")[2]
  .querySelector("a");
console.log(nth_three);
if (
  loPath === "ICMS_fast_resume_application.html" ||
  loPath === "ICMS_selected_job_application.html" ||
  loPath === "ICMS_fast_resume_application.html" ||
  loPath === "ICMS_fast_resume_register.html" ||
  loPath === "ICMS_easy_sms_group.html" ||
  loPath === "ICMS_easy_sms_tel.html" ||
  loPath === "ICMS_easy_sms_send.html" ||
  loPath === "ICMS_easy_sms_history.html" ||
  loPath === "ICMS_request_status_covert_job.html" ||
  loPath === "ICMS_compare.html" ||
  loPath === "ICMS_condition_seven_day.html" ||
  loPath === "ICMS_job_all_condition.html" ||
  loPath === "ICMS_delete_job.html" ||
  loPath === "ICMS_jobfair_resume.html" ||
  loPath === "ICMS_application6.html" ||
  loPath === "ICMS_job_history.html" ||
  loPath === "manage_account.html"
) {
  nth_three.className = "active";
}
// end active menu dashboard
