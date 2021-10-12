// แจ้งเตือน
$(".alertLogin").on("click", function () {
    swal.fire({
      title: "แจ้งเตือน",
      icon: "error",
      showCancelButton: true,
      showConfirmButton: true,
      cancelButtonText: "ยกเลิก",
      confirmButtonText: "ตกลง",
      // showClass: {
      //   popup: "animated fadeInDown faster",
      // },
      // hideClass: {
      //   popup: "animated fadeOutUp faster",
      // },
      html: `
          <div class="flexCheck">
              <p>รหัสผู้ใช้งานนี้ได้ถูกใช้งานอยู่ในระบบ หากคุณต้องการ เข้าสู่ระบบให้ทำการกดปุ่ม <span style="color: #d40101">ยืนยัน</span> ด้านล่าง 
              ซึ่งมีผลให้ผู้ใช้งานก่อนหน้านี้ในระบบ จะถูก Logout ออกจากระบบโดยทันที มีข้อสงสัย 
              <a href="https://www.jobbkk.com//landing/company/3010/20160902/landing" style="text-decoration: underline !important">รายละเอียดเพิ่มเติม</a></p>
          </div>`,
    });
  });
  // end แจ้งเตือน