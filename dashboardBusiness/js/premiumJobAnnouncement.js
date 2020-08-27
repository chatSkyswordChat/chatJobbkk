// เพิ่ม email
var max_fields = 5; //maximum input boxes allowed
var fieldMail = $(".fieldMail"); //Fields fieldMail
var addMail = $(".addMail"); //Add button ID

var x = 1; //initlal text box count
$(addMail).click(function (e) {
  //on add input button click
  e.preventDefault();
  if (x < max_fields) {
    //max input box allowed
    x++; //text box increment
    $(fieldMail).append(`
                <div class="gridMail mb-3">
                    <input type="email" class="form-control formControl" name="emailUser" placeholder="ระบุอีเมล์"/>
                    <label class="showDisplay pointer"><input type="checkbox"/> แสดงหน้าเว็บ</label>
                    <button class="removeMail"><i class="fas fa-trash-alt"></i> ลบ</button>
                </div>`); //add input box
  }
});

$(fieldMail).on("click", ".removeMail", function (e) {
  //user click on remove text
  e.preventDefault();
  $(this).parent("div").remove();
  x--;
});
// end เพิ่ม email

// เพิ่มเพิ่มที่อยู่
var max_address = 5; //maximum input boxes allowed
var fieldAddress = $(".fieldAddress"); //Fields fieldAddress
var addAddress = $(".addAddress"); //Add button ID

var y = 1; //initlal text box count
$(addAddress).click(function (e) {
  //on add input button click
  e.preventDefault();
  if (y < max_address) {
    //max input box allowed
    y++; //text box increment
    $(fieldAddress).append(`
            <div class="gridAddress mb-3">
                <div>
                    <label>ที่อยู่</label>
                    <input type="text" class="form-control formControl"
                    name="address" placeholder="ที่อยู่">
                </div>

                <div>
                    <label>แขวง/ตำบล</label>
                    <select name="districtAdd" class="form-control formControl">
                        <option value="">เลือกแขวง/ตำบล</option>
                        <option>คลองจั่น</option>
                        <option>ลาดพร้าว</option>
                        <option>บึงกุ่ม</option>
                        <option>ประชาชื่น</option>
                    </select>
                </div>

                <div>
                    <label>เขต/อำเภอ</label>
                    <select name="county" class="form-control formControl">
                        <option value="">เลือกเขต/อำเภอ</option>
                        <option>บางกะปิ</option>
                        <option>วังทองหลาง</option>
                        <option>รามคำแหง</option>
                        <option>ลาดพร้าว</option>
                    </select>
                </div>

                <div>
                    <label>รหัสไปรษณีย์</label>
                    <input type="text" class="form-control formControl"
                        name="postalcode" placeholder="รหัสไปรษณีย์">
                </div>

                <div>
                    <label>จังหวัด</label>
                    <select name="provinceAdd" class="form-control formControl">
                        <option value="">เลือกจังหวัด</option>
                        <option>กรุงเทพมหานคร</option>
                        <option>อยุธยา</option>
                        <option>สมุทรปราการ</option>
                        <option>น่าน</option>
                    </select>
                </div>
                <button class="removeAddress"><i class="fas fa-trash-alt"></i> ลบ</button>
            </div>`); //add input box
  }
});

$(fieldAddress).on("click", ".removeAddress", function (e) {
  //user click on remove text
  e.preventDefault();
  $(this).parent("div").remove();
  x--;
});
// end เพิ่มที่อยู่

$(function () {
  // select2
  let province = $(".province").select2({
    placeholder: "เลือกได้ทีละ 1 จังหวัด",
    allowClear: true,
  });

  let district = $(".district").select2({
    placeholder: "เลือกได้ไม่เกิน 5 เขต/อำเภอ",
    maximumSelectionLength: 5,
  });

  let industrialEstate = $(".industrialEstate").select2({
    placeholder: "เลือกได้ไม่เกิน 5 นิคมอุตสาหกรรม",
    maximumSelectionLength: 5,
  });

  let BTS = $(".BTS").select2({
    placeholder: "เลือกได้มากกว่า 1 สถานี",
  });

  let MRT = $(".MRT").select2({
    placeholder: "เลือกได้มากกว่า 1 สถานี",
  });

  let airportRailLink = $(".airportRailLink").select2({
    placeholder: "เลือกได้มากกว่า 1 สถานี",
  });

  let bus = $(".bus").select2({
    placeholder: "เลือกได้มากกว่า 1 สาย",
  });

  let welfare = $(".welfare").select2({
    placeholder: "เลือกได้มากกว่า 1 สวัสดิการ",
  });

  $(".select2-container--default .select2-selection--single ").css({
    "border-radius": "50px",
    padding: ".375rem .75rem",
    height: "calc(1.5em + .75rem + 2px)",
  });
  $(".select2-container--default .select2-selection--multiple").css({
    "border-radius": "50px",
    padding: "0rem .75rem",
  });
  $(
    ".select2-container, .select2-container--default .select2-search--inline .select2-search__field"
  ).css({ width: "100%" });
  $(
    ".select2-container--default .select2-selection--multiple .select2-selection__rendered li"
  ).css({ width: "100%" });
  $(".select2-container .select2-search--inline").css({ float: "inherit" });
  // end select2

  // jquery varidate
  $.validator.addMethod(
    "nourl",
    function (value, element) {
      return !/http\:\/\/|www\.|link\=|url\=/.test(value);
    },
    "No URL's"
  );
  var valid = $(".formVaridate").validate({
    errorClass: "error",
    errorElement: "p",
    onfocusout: false,

    errorPlacement: function (error, element) {
      var elem = $(element);
      error.insertAfter(element);
    },

    highlight: function (element, errorClass, validClass) {
      var elem = $(element);
      // select2 เพิ่มขอบแดง
      var checkselect2 = elem.attr("class").split(/\s+/);
      for (let index = 0; index < checkselect2.length; index++) {
        if (checkselect2[index].includes("select2")) {
          if (elem.next().find(".selection").length == 0) {
            $(elem.next().next().find(".selection")[0])
              .find(".select2-selection")
              .addClass(errorClass);
          } else {
            $(elem.next().find(".selection")[0])
              .find(".select2-selection")
              .addClass(errorClass);
          }
        }
      }
      // end select2 เพิ่มขอบแดง

      elem.addClass(errorClass); // เพิ่มขอบแดง อันอื่นที่ไม่ใช่ select2
    },

    unhighlight: function (element, errorClass, validClass) {
      var elem = $(element);
      // select2 ลบขอบแดง
      var checkselect2 = elem.attr("class").split(/\s+/);
      for (let index = 0; index < checkselect2.length; index++) {
        if (checkselect2[index].includes("select2")) {
          if (elem.next().find(".selection").length == 0) {
            $(elem.next().next().find(".selection")[0])
              .find(".select2-selection")
              .removeClass(errorClass);
          } else {
            $(elem.next().find(".selection")[0])
              .find(".select2-selection")
              .removeClass(errorClass);
          }
        }
      }
      // end select2 ลบขอบแดง

      elem.removeClass(errorClass); // ลบขอบแดง อันอื่นที่ไม่ใช่ select2
    },

    rules: {
      careerMain: { required: true },
      careerSub: { required: true },
      position: { required: true },
      theRate: { required: true },
      jobType: { required: true },
      workingLevel: { required: true },
      salary: { required: true },
      salaryStart: { required: true },
      salaryEnd: { required: true },
      salarySpecify: { required: true },
      sex: { required: true },
      ageStart: { required: true },
      educationStart: { required: true },
      expStart: { required: true },
      knowledge: { required: true, minlength: 5, nourl: true },
      knowledgePlus: { required: true },
      responsibilities: { required: true, minlength: 5, nourl: true },
      province: { required: true },
      district: { required: true },
      MRT: { required: true },
      BTS: { required: true },
      airportRailLink: { required: true },
      bus: { required: true },
      dayWork: { required: true },
      holiday: { required: true },
      timeStart: { required: true },
      timeEnd: { required: true },
      welfare: { required: true },
      name: { required: true },
      email: { required: true, email: true },
      tel: { required: true, number: true, minlength: 10 },
    },
    messages: {
      careerMain: { required: "กรุณาเลือกสาขาอาชีพหลัก" },
      careerSub: { required: "กรุณาเลือกสาขาอาชีพรอง" },
      position: { required: "กรุณาระบุชื่อตำแหน่งงาน" },
      theRate: { required: "กรุณาเลือกจำนวนอัตราที่รับ" },
      jobType: { required: "กรุณาเลือกประเภทงาน" },
      workingLevel: { required: "กรุณาเลือกระดับการทำงาน" },
      salary: { required: "กรุณาเลือกสถานะเงินเดือน" },
      salaryStart: { required: "กรุณาเลือกเงินเดือนเริ่มต้น" },
      salaryEnd: { required: "กรุณาเลือกเงินเดือนสูงสุด" },
      salarySpecify: { required: "กรุณาเลือกการแสดงเงินเดือน" },
      sex: { required: "กรุณาเลือกเพศ" },
      ageStart: { required: "กรุณาเลือกอายุผู้สมัคร" },
      educationStart: { required: "กรุณาเลือกระดับการศึกษา" },
      expStart: { required: "กรุณาเลือกประสบการณ์ทำงาน" },
      knowledge: {
        required: "กรุณาระบุคุณสมบัติด้านความรู้และความสามารถ",
        minlength: "จำนวนไม่น้อยกว่า 5 คำ",
        nourl: "ห้ามใส่เว็ปไซต์",
      },
      knowledgePlus: { required: "กรุณาเลือกคุณสมบัติผู้สมัครงานเพิ่มเติม" },
      responsibilities: {
        required: "กรุณาระบุหน้าที่และความรับผิดชอบ",
        minlength: "จำนวนไม่น้อยกว่า 5 คำ",
        nourl: "ห้ามใส่เว็ปไซต์",
      },
      province: { required: "กรุณาเลือกจังหวัด" },
      district: { required: "กรุณาเลือกอำเภอ" },
      BTS: { required: "กรุณาเลือกเดินทางด้วย BTS" },
      MRT: { required: "กรุณาเลือกเดินทางด้วย MRT" },
      airportRailLink: { required: "กรุณาเลือกเดินทางด้วย Airport Rail Link" },
      bus: { required: "กรุณาเลือกเดินทางด้วย รถเมล์" },
      dayWork: { required: "กรุณาเลือกวันทำงาน" },
      holiday: { required: "กรุณาเลือกวันหยุด" },
      timeStart: { required: "กรุณาเลือกเวลาทำงานตั้งแต่" },
      timeEnd: { required: "กรุณาเลือกเวลาทำงานถึง" },
      welfare: { required: "กรุณาเลือกสวัสดิการ" },
      name: { required: "กรุณาระบุชื่อ-นามสกุล" },
      email: { required: "กรุณาระบุอีเมล์", email: "ใส่อีเมล์เท่านั้น" },
      tel: {
        required: "กรุณาระบุเบอร์โทรศัพท์",
        number: "ใส่เบอร์โทรเท่านั้น",
      },
    },
  });

  province.on("change", function () {
    if (!$.isEmptyObject(valid.submitted)) {
      valid.form();
    }
  });

  district.on("change", function () {
    if (!$.isEmptyObject(valid.submitted)) {
      valid.form();
    }
  });

  BTS.on("change", function () {
    if (!$.isEmptyObject(valid.submitted)) {
      valid.form();
    }
  });

  MRT.on("change", function () {
    if (!$.isEmptyObject(valid.submitted)) {
      valid.form();
    }
  });

  airportRailLink.on("change", function () {
    if (!$.isEmptyObject(valid.submitted)) {
      valid.form();
    }
  });

  bus.on("change", function () {
    if (!$.isEmptyObject(valid.submitted)) {
      valid.form();
    }
  });

  industrialEstate.on("change", function () {
    if (!$.isEmptyObject(valid.submitted)) {
      valid.form();
    }
  });

  welfare.on("change", function () {
    if (!$.isEmptyObject(valid.submitted)) {
      valid.form();
    }
  });

  $(".cancel").on("click", function () {
    valid.resetForm();
    valid[0].reset();
    $('.cancel').removeClass('select2-selection__rendered')
  });
  // end jquery varidate

  // tooltip
  $('[data-toggle="tooltip"]').tooltip();
});

// เลือกภาษา
const swalWithBootstrapButtons = Swal.mixin({});
$(".modalLang").on("click", function () {
  $(".tooltip").removeClass("show");
  swalWithBootstrapButtons
    .fire({
      title: "เลือกภาษาที่ต้องการประกาศงาน",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "ภาษาอังกฤษ",
      cancelButtonText: "ภาษาไทย",
      reverseButtons: true,
    })
    .then((result) => {
      if (result.value) {
        window.location.href = "https://www.jobbkk.com/home";
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        window.location.href = "https://www.jobbkk.com/home";
      }
    });
});
// end เลือกภาษา

// ตรวจสอบข้อมูลเพื่อประกาศงาน
$("#confirm").on("click", function () {
  Swal.fire({
    title: "ตรวจสอบข้อมูลเพื่อประกาศงาน?",
    icon: "info",
    showCancelButton: true,
    showconfirmButton: true,
    confirmButtonText: "ตกลง",
    cancelButtonText: "ยกเลิก",
  }).then((result) => {
    if (result.value) {
      window.location.href = "previewJobAnnouncement.html";
    }
  });
});
// end ตรวจสอบข้อมูลเพื่อประกาศงาน
