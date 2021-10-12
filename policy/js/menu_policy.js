let menu_policy = "";
menu_policy += `
<div class="clWhitetGray calC">
    <ul>
        <li><a href="${path}policy/term_condition_business.html">ข้อตกลงและเงื่อนไขการใช้บริการสมาชิกผู้ประกอบการ</a></li>
        <li><a href="${path}policy/term_condition_jobseeker.html">ข้อตกลงและเงื่อนไขการใช้บริการสมาชิกผู้สมัครงาน</a></li>
        <li><a href="${path}policy/privacy_policy.html">นโยบายความเป็นส่วนตัว</a></li>
        <li><a href="${path}policy/cookie_policy.html">นโยบายคุกกี้</a></li>
    </ul>
</div>            
`;

document.querySelector("#menu_policy").innerHTML = menu_policy;

const path_policy = location.href.split("/").pop();
const menu_policy_actives = document.querySelectorAll("#menu_policy ul li a");
for (const menu_policy_active of menu_policy_actives) {
  if (menu_policy_active.getAttribute("href").includes(path_policy)) {
    menu_policy_active.className = "active";
  }
}
