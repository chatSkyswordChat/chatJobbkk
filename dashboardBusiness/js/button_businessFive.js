let button_businessFive = "";

button_businessFive += `
<li>
    <a href="premiumJobAnnouncement.html">
        <img src="images/dashbaordBusiness_6.svg" alt="" />
        <p>ประกาศงาน</p>
    </a>
</li>
<li>
    <a href="">
        <img src="images/dashbaordBusiness_7.svg" alt="" />
        <p>รายการตำแหน่งงาน</p>
    </a>
</li>
<li>
    <a href="${path}dashboardBusiness/ICMS_job_application_by_applicant.html">
        <img src="images/dashbaordBusiness_9.svg" alt="" />
        <p>จัดการใบสมัครงาน iCMS</p>
    </a>
</li>
<li>
    <a href="">
    <img src="images/dashbaordBusiness_8.svg" alt="" />
    <p>รายงาน</p>
    </a>
</li>
<li>
    <a href="">
        <img src="images/dashbaordBusiness_5.svg" alt="" />
        <p>สั่งซื้อ</p>
    </a>
</li>
`;

document.querySelector(".flexButtonBusiness").innerHTML = button_businessFive;

const flexButtonBusiness = document.querySelectorAll(
  ".flexButtonBusiness li a"
);

flexButtonBusiness.forEach((flexButtonBusiness) => {
  if (flexButtonBusiness.getAttribute("href").includes(loPath)) {
    flexButtonBusiness.classList.add("active");
  }
});

const flex_business_nth = document
  .querySelectorAll(".flexButtonBusiness li")[2]
  .querySelector("a");
if (
  loPath === "ICMS_fast_resume_application.html" ||
  loPath === "ICMS_fast_resume_register.html" ||
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
  loPath === "ICMS_application6.html" ||
  loPath === "ICMS_job_history.html"
) {
  flex_business_nth.classList.add("active");
}
