// modal คุณต้องการงานด่วนภายในกี่วัน
$(".modalUrgent").on("click", function () {
  swal.fire({
    title: "คุณต้องการงานด่วนภายในกี่วัน",
    icon: "info",
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
            <div class="form-check">
                <label class="form-check-label formCheckLabel">
                    <input class="form-check-input formCheckInput" type="radio" value="1" name="1" id="checkbox1"> 7 วัน
                </label>
            </div>
            <div class="form-check">
                <label class="form-check-label formCheckLabel">
                    <input class="form-check-input formCheckInput" type="radio" value="1" name="1" id="checkbox1"> 15 วัน
                </label>
            </div>
            <div class="form-check">
                <label class="form-check-label formCheckLabel">
                    <input class="form-check-input formCheckInput" type="radio" value="1" name="1" id="checkbox1"> 30 วัน
                </label>
            </div>
            <div class="form-check">
                <label class="form-check-label formCheckLabel">
                    <input class="form-check-input formCheckInput" type="radio" value="1" name="1" id="checkbox1"> มากกว่า 30 วัน
                </label>
            </div>
        </div>`,
  });
});
// end modal คุณต้องการงานด่วนภายในกี่วัน

// คุณต้องการงานด่วนภายในกี่วัน
let modalUrgent = "";
modalUrgent += `
    <div class="modal fade" id="modalUrgents" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modalDialog">
            <div class="modal-content" style="max-width:50rem; margin: 0 auto;">
                <div class="modal-header">
                    <div class="flexHeadModal">
                        <h2 class="fontSubHead textWhite lineH">คุณต้องการงานด่วนภายในกี่วัน</h2>
                    </div>
                    <button type="button" class="close fontSuperHead textWhite" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times-circle"></i></span>
                    </button>
                </div>

                <div class="modal-body text-center">
                    <div class="flexCheck">
                        <div class="form-check">
                            <label class="form-check-label formCheckLabel">
                                <input class="form-check-input formCheckInput" type="radio" value="1" name="1" id="checkbox1"> 7 วัน
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label formCheckLabel">
                                <input class="form-check-input formCheckInput" type="radio" value="1" name="1" id="checkbox1"> 15 วัน
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label formCheckLabel">
                                <input class="form-check-input formCheckInput" type="radio" value="1" name="1" id="checkbox1"> 30 วัน
                            </label>
                        </div>
                        <div class="form-check">
                            <label class="form-check-label formCheckLabel">
                                <input class="form-check-input formCheckInput" type="radio" value="1" name="1" id="checkbox1"> มากกว่า 30 วัน
                            </label>
                        </div>
                    </div>
                </div>

                <div class="modal-footer flexCenter">
                    <button class="btn_red">ตกลง</button>
                    <button type="button" class="btn_white" data-dismiss="modal">ยกเลิก</button>
                </div>

            </div>
        </div>
    </div>
`;

document.querySelector("#modalUrgent").innerHTML = modalUrgent;
// end คุณต้องการงานด่วนภายในกี่วัน

// กรุณาออนไลน์เรซูเม่ของคุณ
let online_resumeYour = "";
online_resumeYour += `
    <div class="modal fade" id="modal_online_resumeYour" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modalDialog">
            <div class="modal-content" style="max-width:50rem; margin: 0 auto;">
                <div class="modal-header">
                    <div class="flexHeadModal">
                        <h2 class="fontSubHead textWhite lineH">ต้องการงานด่วน</h2>
                    </div>
                    <button type="button" class="close fontSuperHead textWhite" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times-circle"></i></span>
                    </button>
                </div>

                <div class="modal-body text-center">
                    <p>กรุณาออนไลน์เรซูเม่ของคุณ</p>
                    <p>แล้วกดปุ่ม <span class="textRed">"ต้องการงานด่วน"</span> อีกครั้ง</p>
                </div>

                <div class="modal-footer flexCenter">
                    <a href="#" class="btn_red">ออนไลน์เรซูเม่</a>
                    <button type="button" class="btn_white" data-dismiss="modal">ยกเลิก</button>
                </div>

            </div>
        </div>
    </div>
`;

document.querySelector("#online_resumeYour").innerHTML = online_resumeYour;
// end กรุณาออนไลน์เรซูเม่ของคุณ

// กรุณาออนไลน์เรซูเม่ของคุณ
let you_urgent = "";
you_urgent += `
    <div class="modal fade" id="modal_you_urgent" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modalDialog">
            <div class="modal-content" style="max-width:50rem; margin: 0 auto;">
                <div class="modal-header">
                    <div class="flexHeadModal">
                        <h2 class="fontSubHead textWhite lineH">ต้องการงานด่วน</h2>
                    </div>
                    <button type="button" class="close fontSuperHead textWhite" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times-circle"></i></span>
                    </button>
                </div>

                <div class="modal-body text-center">
                    <p class="mb-5">คุณต้องการ<span class="textRed">งานด่วน</span>ใช่หรือไม่ ?</p>
                    <div class="clWhitetGray p-3" style="border-radius: 1rem">
                        <p>ให้ผู้ประกอบการเขารับทราบ</p>
                        <p><span class="textRed">*หมายเหตุ</span> ระบบจะแสดงสถานะต้องการงานด่วน</p>
                        <p><b>ผู้สมัครกำลังต้องการงานด่วน <span class="textRed">สถานะมีอายุ 7 วัน</span></b></p>
                        <p><b>ผู้สมัครสามารถกดใหม่ได้อีกครั้ง</b></p>
                    </div>
                </div>

                <div class="modal-footer flexCenter">
                    <button class="btn_red">ใช่</button>
                    <button type="button" class="btn_white" data-dismiss="modal">ไม่ใช่</button>
                </div>
            </div>
        </div>
    </div>
`;

document.querySelector("#you_urgent").innerHTML = you_urgent;
// end กรุณาออนไลน์เรซูเม่ของคุณ

// create resume
let create_resume = "";
create_resume += `
    <div class="modal fade" id="modal_create_resume" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modalDialog">
            <div class="modal-content" style="max-width:50rem; margin: 0 auto;">
                <div class="modal-header">
                    <div class="flexHeadModal">
                        <h2 class="fontSubHead textWhite lineH">สร้างเรซูเม่</h2>
                    </div>
                    <button type="button" class="close fontSuperHead textWhite" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times-circle"></i></span>
                    </button>
                </div>

                <div class="modal-body text-center">
                    <div class="flexCenter py-3">
                        <button type="button" class="btn_red">สร้างเรซูเม่ภาษาไทย</button>
                        <button type="button" class="btn_white">สร้างเรซูเม่ภาษาอังกฤษ</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

document.querySelector("#create_resume").innerHTML = create_resume;
// end create resume

// คุณได้เลือกสถานะต้องการงานด่วนแล้ว
let status_urgent = "";
status_urgent += `
    <div class="modal fade" id="modal_status_urgent" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modalDialog">
            <div class="modal-content" style="max-width:50rem; margin: 0 auto;">
                <div class="modal-header">
                    <div class="flexHeadModal">
                        <h2 class="fontSubHead textWhite lineH">ต้องการงานด่วน</h2>
                    </div>
                    <button type="button" class="close fontSuperHead textWhite" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i class="fas fa-times-circle"></i></span>
                    </button>
                </div>

                <div class="modal-body text-center">
                    <p class="mb-5">คุณได้เลือกสถานะ <span class="textRed">"ต้องการงานด่วน"</span> แล้ว</p>
                    <div class="clWhitetGray p-3" style="border-radius: 1rem">
                        <p>ผู้สมัครสามาร "กด" ต้องการงานด่วนได้อีกครั้ง <span class="textRed">ในอีก 7 วัน</span></p>
                        
                    </div>
                </div>

                <div class="modal-footer flexCenter">
                    <button type="button" class="btn_red" data-dismiss="modal">ตกลง</button>
                </div>
            </div>
        </div>
    </div>
`;

document.querySelector("#status_urgent").innerHTML = status_urgent;
// end คุณได้เลือกสถานะต้องการงานด่วนแล้ว

// สมัครงานด่วน
$(".applyNow").click(function () {
  Swal.fire({
    title: "คุณสมัครงานสำเร็จแล้ว",
    icon: "success",
    showConfirmButton: true,
    confirmButtonColor: "#d40101",
  });
});
// end สมัครงานด่วน

// บันทึกงาน
const saved = document.querySelectorAll(".flexStep2 button.save");

saved.forEach((save) => {
  save.addEventListener("click", () => {
    if (save.classList.contains("active") === false) {
      $(".tooltip").removeClass("show");
      Swal.fire({
        title: "คุณยืนยันที่จะบันทึกงาน ?",
        icon: "info",
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ตกลง",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "คุณบันทึกงานสำเร็จแล้ว",
            icon: "success",
            showConfirmButton: true,
            confirmButtonText: "ตกลง",
          });
        }
      });

      const swal2_confirm = document.querySelector(".swal2-confirm");
      swal2_confirm.addEventListener("click", (e) => {
        e.target = save.setAttribute("data-original-title", "คุณบันทึกงานแล้ว");
        e.target = save.classList.add("active");
      });
    } else {
      $(".tooltip").removeClass("show");
      Swal.fire({
        title: "คุณเคยบันทึกงานนี้แล้ว",
        text: "คุณต้องการยกเลิก การบันทึกใช่หรือไม่ ?",
        icon: "info",
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonText: "ยกเลิก",
        confirmButtonText: "ตกลง",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "คุณยกเลิกการบันทึกงานสำเร็จแล้ว",
            icon: "success",
            showConfirmButton: true,
            confirmButtonText: "ตกลง",
          });
        }
      });

      const swal2_confirm = document.querySelector(".swal2-confirm");
      swal2_confirm.addEventListener("click", (e) => {
        e.target = save.setAttribute(
          "data-original-title",
          "บันทึกงานไว้ดูภายหลัง"
        );
        e.target = save.classList.remove("active");
      });
    }
  });
});
// end บันทึกงาน

// share
$(".share").on("click", function () {
  $(".tooltip").removeClass("show");
  swal.fire({
    title: "คุณต้องการที่จะแชร์ตำแหน่งงานใช่ไหม ?",
    icon: "info",
    showCancelButton: true,
    showConfirmButton: false,
    cancelButtonText: "ยกเลิก",
    html: `<ul class="socialShare">
                <li><a href="#" class="fb" data-toggle="tooltip" data-placement="bottom" title="คัดลอกลิงค์ facebook"></a></li>
                <li><a href="#" class="tw" data-toggle="tooltip" data-placement="bottom" title="คัดลอกลิงค์ twister"></a></li>
                <li><a href="#" class="line" data-toggle="tooltip" data-placement="bottom" title="คัดลอกลิงค์ line"></a></li>
                <li><a href="#" class="link" data-toggle="tooltip" data-placement="bottom" title="คัดลอกลิงค์"></a></li>
                <li><a href="#" class="google" data-toggle="tooltip" data-placement="bottom" title="คัดลอกลิงค์ google"></a></li>
            </ul>`,
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
});
// end share

// tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
// end tooltip

// สลับมุมมอง gridView listView
$(".gridView").css({ display: "none" });

// List View
function listView() {
  $(".listView").css({ display: "block" });
  $(".gridView").css({ display: "none" });
  $(".btnTab").removeClass("active");
}

// Grid View
function gridView() {
  $(".listView").css({ display: "none" });
  $(".gridView").css({ display: "block" });
  $(".btnTab").removeClass("active");
}

var btns = document.querySelectorAll("#btnList .btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.querySelectorAll(".active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
// end สลับมุมมอง gridView listView

$(".cutCut").dotdotdot({
  height: 120,
  fallbackToLetter: true,
  watch: true,
});
