let credit = "";
credit += `
<p>เครดิต <span class="textRed">0</span> ข้อความ</p>
<p>เหลือวันใช้งาน <span class="textRed">0</span> วัน</p>
`;
document.querySelector(".credit").innerHTML = credit;

let group = "";
group += `
<ul>
    <li><a href="ICMS_easy_sms_tel.html">สมุดโทรศัพท์</a></li>
    <li><a href="ICMS_easy_sms_group.html">กลุ่มรายชื่อ</a></li>
    <li><a href="ICMS_easy_sms_send.html">ส่งข้อความ</a></li>
    <li><a href="ICMS_easy_sms_history.html">ประวัติการส่ง</a></li>
</ul>

<div class="lineDashUrgent"></div>
`;

document.querySelector("#group").innerHTML = group;

const group_sms = document.querySelectorAll("#group ul li a");
const path_group_sms = location.href.split("/").pop();
group_sms.forEach((group_sms) => {
  if (group_sms.getAttribute("href").includes(path_group_sms)) {
    group_sms.className = "active";
  }
});
