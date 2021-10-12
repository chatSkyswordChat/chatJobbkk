let menu_icms = "";
menu_icms += `
<button id="icms" class="btn_red" data-icms>เมนู ICMS</button>          
<ul>
    <li><a href="${path}dashboardBusiness/ICMS_job_application_by_applicant.html">ใบสมัครงานโดยผู้สมัคร<span> (0) </span></a></li>
    <li><a href="${path}dashboardBusiness/ICMS_fast_resume_application.html">ใบสมัคร Fast Resume<span> (0) </span></a></li>
    <li><a href="${path}dashboardBusiness/ICMS_selected_job_application.html"> ใบสมัครงานที่เลือก </a></li>
    <li><a href="${path}dashboardBusiness/ICMS_request_status_covert_job.html"> สถานะขอดูใบสมัครงานที่ปกปิด </a></li>
    <li><a href="${path}dashboardBusiness/ICMS_condition_seven_day.html"> ใบสมัครงานตรงเงื่อนไข 7 วันล่าสุด </a></li>
    <li><a href="${path}dashboardBusiness/ICMS_job_all_condition.html"> ใบสมัครงานตรงเงื่อนไขทั้งหมด </a></li>
    <li><a href="${path}dashboardBusiness/ICMS_job_history.html"> ประวัติการเปิดใบสมัครงาน </a></li>
    <li><a href="${path}dashboardBusiness/schedule_job_interview.html"> ขั้นตอนการนัดสัมภาษณ์ </a></li>
    <li><a href="${path}dashboardBusiness/ICMS_delete_job.html"> ใบสมัครงานที่ลบ </a></li>
    <li><a href="${path}dashboardBusiness/ICMS_jobfair_resume.html"> Job Fair Resume </a></li>
    <li><a href="${path}dashboardBusiness/ICMS_application6.html"> ใบสมัคร 6 ภาค </a></li>
</ul>`;

document.querySelector(".menu_icms").innerHTML = menu_icms;

// menu icms
const head_menuIcms = document.querySelector(".menu_icms");
const icms_size = 991;
head_menuIcms.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-icms")) {
    const return_icms = e.target.parentElement;
    if (return_icms.lastElementChild.classList.contains("active")) {
      icms_remove();
    } else {
      const icms_last = return_icms.lastElementChild;
      icms_last.classList.add("active");
      icms_last.style.maxHeight = icms_last.scrollHeight + "px";
    }
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > icms_size) {
    resize_icms();
  }
});

const icms_remove = () => {
  head_menuIcms.querySelector("ul.active").removeAttribute("style");
  head_menuIcms.querySelector("ul.active").classList.remove("active");
};

const resize_icms = () => {
  if (head_menuIcms.querySelector("ul.active")) {
    icms_remove();
  }
};
// end menu icms

// active menu icms
const active_icmses = document.querySelectorAll("#icms ~ ul li a");

active_icmses.forEach((active_icms) => {
  if (active_icms.getAttribute("href").includes(loPath)) {
    active_icms.className = "active";
  }
});

const icms_one = document
  .querySelectorAll("#icms ~ ul li")[0]
  .querySelector("a");
if (loPath === "ICMS_compare.html") {
  icms_one.className = "active";
}

const icms_two = document
  .querySelectorAll("#icms ~ ul li")[1]
  .querySelector("a");
if (
  loPath === "ICMS_fast_resume_register.html" ||
  loPath === "ICMS_easy_sms_group.html" ||
  loPath === "ICMS_easy_sms_tel.html" ||
  loPath === "ICMS_easy_sms_send.html" ||
  loPath === "ICMS_easy_sms_history.html"
) {
  icms_two.className = "active";
}

const icms_four = document
  .querySelectorAll("#icms ~ ul li")[3]
  .querySelector("a");
if (loPath === "ICMS_request_status_covert_job.html") {
  icms_four.className = "active";
}
// end active menu icms
