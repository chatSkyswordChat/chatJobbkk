let menu_dashboard_jobseeker = "";

menu_dashboard_jobseeker += `
<div class="nav_menu_jobseeker p-3">
    <h2 class="fontSubHead">เมนูสำหรับผู้สมัครงาน</h2>
    <div id="toggle_menu_jobseeker"><button><i class="fas fa-bars"></i></button></div>
</div>

<ul class="menu_dashboard_jobseeker">
    <li>
        <a href="index.html">
            <figure><img src="images/dashboard_jobseeker-01.svg" alt=""> หน้าหลัก <small>ใหม่</small>
            </figure>
        </a>
    </li>
    <li>
        <a href="createCorrect_resume.html">
            <figure><img src="images/dashboard_jobseeker-02.svg" alt=""> สร้าง/แก้ไขประวัติ</figure>
        </a>
    </li>
    <li>
        <a href="javascript:void(0)" data-dropdown>
            <figure><img src="images/dashboard_jobseeker-03.svg" alt=""> จัดการข้อมูล</figure>
            <i class="fas fa-angle-down"></i>
        </a>

        <ul>
            <li><a href=""><i class="fas fa-chevron-right"></i> ประวัติการสมัครงาน</a></li>
            <li><a href=""><i class="fas fa-chevron-right"></i> งานที่บันทึก</a></li>
            <li><a href=""><i class="fas fa-chevron-right"></i> ผู้ประกอบการเปิดดูประวัติ</a></li>
            <li><a href=""><i class="fas fa-chevron-right"></i> นัดสัมภาษณ์</a></li>
            <li><a href=""><i class="fas fa-chevron-right"></i> Job Match</a></li>
            <li><a href=""><i class="fas fa-chevron-right"></i> ขอดูใบสมัคร</a></li>
            <li><a href=""><i class="fas fa-chevron-right"></i> ตารางนัดหมาย</a></li>
            <li><a href=""><i class="fas fa-chevron-right"></i> ความเป็นส่วนตัว</a></li>
            <li><a href="manage_account.html"><i class="fas fa-chevron-right"></i> จัดการบัญชี</a></li>
        </ul>
    </li>
    <li>
        <a href="javascript:void(0)" data-dropdown>
            <figure><img src="images/dashboard_jobseeker-04.svg" alt=""> ทักษะแห่งอนาคต </figure>
            <i class="fas fa-angle-down"></i>
        </a>

        <ul>
            <li><a href=""><i class="fas fa-chevron-right"></i> ทำแบบทดสอบ</a></li>
            <li><a href=""><i class="fas fa-chevron-right"></i> ผลการทดสอบ</a></li>
        </ul>
    </li>
    <li>
        <a href="">
            <figure><img src="images/dashboard_jobseeker-05.svg" alt=""> แบบสอบถาม</figure>
        </a>
    </li>
    <li>
        <a href="">
            <figure><img src="images/dashboard_jobseeker-06.svg" alt=""> เว็บบอร์ด</figure>
        </a>
    </li>
    <li>
        <a href="">
            <figure><img src="images/dashboard_jobseeker-07.svg" alt=""> ตั้งค่ากการใช้งาน</figure>
        </a>
    </li>
    <li>
        <a href="">
            <figure><img src="images/dashboard_jobseeker-08.svg" alt=""> แนะนำการใช้งาน</figure>
        </a>
    </li>
</ul>
`;
document.querySelector("#menu_dashboard_jobseeker").innerHTML =
  menu_dashboard_jobseeker;

const dashboard_jobseeker = document.querySelector(".menu_dashboard_jobseeker"),
  toggle_menu_jobseeker = document.querySelector("#toggle_menu_jobseeker"),
  menu_dashboard_jobseekers = document.querySelectorAll(
    ".menu_dashboard_jobseeker li a"
  ),
  path_jobseekers = location.href.split("/").pop();

toggle_menu_jobseeker.addEventListener("click", () => {
  toggle();
});

dashboard_jobseeker.addEventListener("click", (e) => {
  if (e.target.hasAttribute("data-dropdown")) {
    dropdown = e.target.parentElement;
    if (dropdown.lastElementChild.classList.contains("active")) {
      remove_active();
    } else {
      if (dashboard_jobseeker.querySelector("ul li a ~ ul.active")) {
        remove_active();
      }
      dropdown.lastElementChild.classList.add("active");
      dropdown.lastElementChild.style.maxHeight =
        dropdown.lastElementChild.scrollHeight + "px";
    }
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 991) {
    resize();
  }
});

const toggle = () => {
  if (dashboard_jobseeker.classList.contains("active")) {
    dashboard_jobseeker.classList.remove("active");
    dashboard_jobseeker.removeAttribute("style");
  } else {
    dashboard_jobseeker.classList.add("active");
    dashboard_jobseeker.style.maxHeight =
      dashboard_jobseeker.scrollHeight + "vh";
  }
};

const remove_active = () => {
  dashboard_jobseeker.querySelector("ul.active").removeAttribute("style");
  dashboard_jobseeker.querySelector("ul.active").classList.remove("active");
};

const resize = () => {
  if (dashboard_jobseeker.classList.contains("active")) {
    toggle();
  }
  if (dashboard_jobseeker.querySelector("ul.active")) {
    remove_active();
  }
};

menu_dashboard_jobseekers.forEach((menu_dashboard_jobseeker) => {
  if (menu_dashboard_jobseeker.getAttribute("href").includes(path_jobseekers)) {
    menu_dashboard_jobseeker.className = "active";
  }
});

const manage_account = document
  .querySelectorAll(".menu_dashboard_jobseeker li")[2]
  .querySelector("a");
if (path_jobseekers === "manage_account.html") {
  manage_account.className = "active";
}
