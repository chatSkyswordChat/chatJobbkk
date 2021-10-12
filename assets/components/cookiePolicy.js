let policy = "";
policy += `
<div class="policy">
    <section class="container-fluid" style="position:relative">
        <ul>
            <li>JOBBKK.COM © สงวนลิขสิทธิ์ All Right Reserved</li>
            <li><a href="${path}policy/term_condition_business.html">ข้อตกลงและเงื่อนไขการใช้บริการสมาชิกผู้ประกอบการ</a></li>
            <li><a href="${path}policy/term_condition_jobseeker.html">ข้อตกลงและเงื่อนไขการใช้บริการสมาชิกผู้สมัครงาน</a></li>
            <li><a href="${path}policy/privacy_policy.html">นโยบายความเป็นส่วนตัว</a></li>
            <li><a href="${path}policy/cookie_policy.html">นโยบายคุกกี้</a></li>
        </ul>
    </section>              
</div>

<div class="dbd">
    <section class="container-fluid text-center" style="position:relative">
        <p>jobbkk มีเพียงเว็บเดียวเท่านั้น ไม่มีเว็บเครือข่าย โปรดอย่าหลงเชื่อผู้แอบอ้าง และหากผู้ใดแอบอ้าง 
            ไม่ว่าทาง Email, โทรศัพท์, SMS หรือทางใดก็ตาม จะถูกดำเนินคดีตามที่กฎหมายบัญญัติไว้สูงสุด 
            <span><img src="${path}assets/images/dbd-logo.png" /></span>
        </p>                
    </section>  
</div>

<div class="policy_fix p-3">
  <section class="container">
    <p class="fontSubText">เว็บไซต์นี้มีการจัดเก็บคุกกี้เพื่อมอบประสบการณ์การใช้งานเว็บไซต์ของคุณให้ดียิ่งขึ้นการดำเนินการต่อบนเว็บไซต์นี้ถือว่าคุณยอมรับการใช้งานคุกกี้
      <span><a href="${path}policy/privacy_policy.html">อ่านเพิ่มเติม</a></span>
    </p>

    <div class="confirm_close">
      <button type="button" id="confirm_policy">ยอมรับ</button>
      <button type="button" id="close_policy">ปิด</button>
    </div>  
  </section> 
</div>
`;
document.querySelector("#policy").innerHTML = policy;

// policy
const confirm = document.querySelector("#confirm_policy"),
  close = document.querySelector("#close_policy"),
  policy_fix = document.querySelector(".policy_fix");

confirm.addEventListener("click", () => {
  confirm.closest(".policy_fix").remove();
});

close.addEventListener("click", () => {
  close.closest(".policy_fix").remove();
});

window.addEventListener("scroll", () => {
  const documents = document.documentElement;
  if (documents.scrollTop + window.innerHeight >= documents.offsetHeight) {
    policy_fix.classList.add("bottom");
  } else {
    policy_fix.classList.remove("bottom");
  }
});
// end policy
