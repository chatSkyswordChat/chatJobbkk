let list_group = "";

list_group += `
<ul>
    <li><a href="ICMS_easy_sms_tel.html">รายชื่อติดต่อ</a></li>
    <li><a href="ICMS_easy_sms_group.html">กลุ่ม</a></li>
</ul>                     
`;

document.querySelector(".list_group").innerHTML = list_group;

const list_group_all = document.querySelectorAll(".list_group ul li a");
const path_list_group = location.href.split("/")[4];

list_group_all.forEach((list_group_all) => {
  if (list_group_all.getAttribute("href").includes(path_list_group)) {
    list_group_all.className = "active";
  }
});
