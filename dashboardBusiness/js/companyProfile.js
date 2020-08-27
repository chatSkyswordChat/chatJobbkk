// ต้องการงานด่วน
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
// end ต้องการงานด่วน

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
$(".save").click(function () {
    $('.tooltip').removeClass('show')
    Swal.fire({
        title: "คุณบันทึกงานสำเร็จแล้ว",
        icon: "success",
        showConfirmButton: true,
        confirmButtonColor: "#d40101",
    });
});
// end บันทึกงาน

// share
$(".share").on("click", function () {
    $('.tooltip').removeClass('show')
    swal.fire({
        title: "คุณต้องการที่จะแชร์ตำแหน่งงานใช่ไหม ?",
        icon: "info",
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: "ยกเลิก",
        html:
            `<ul class="socialShare">
                <li><button class="fb" data-toggle="tooltip" data-placement="bottom" title="คัดลอกลิงค์ facebook"></button></li>
                <li><button class="tw" data-toggle="tooltip" data-placement="bottom" title="คัดลอกลิงค์ twister"></button></li>
                <li><button class="line" data-toggle="tooltip" data-placement="bottom" title="คัดลอกลิงค์ line"></button></li>
                <li><button class="link" data-toggle="tooltip" data-placement="bottom" title="คัดลอกลิงค์"></button></li>
            </ul>`
    });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
});
// end share

// tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
// end tooltip

// สลับมุมมอง gridView listView
$('.gridView').css({ "display": "none" })

// List View
function listView() {
    $('.listView').css({ "display": "block" })
    $('.gridView').css({ "display": "none" })
    $('.btnTab').removeClass('active')
}

// Grid View
function gridView() {
    $('.listView').css({ "display": "none" })
    $('.gridView').css({ "display": "block" })
    $('.btnTab').removeClass('active')
}

var container = document.getElementById("btnList");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
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