// เพิ่ม email
let max_fields = 5,
  fieldMail = document.querySelector(".fieldMail"),
  addMail = document.querySelector(".addMail"),
  x = 1;

addMail.onclick = () => {
  if (x < max_fields) {
    x++;
    const copy = `
      <div class="gridMail mb-3">
        <input type="email" class="form-control formControl" name="emailUser" placeholder="ระบุอีเมล์"/>
        <label class="showDisplay pointer"><input type="checkbox"/> แสดงหน้าเว็บ</label>
        <button class="removeMail" type="button"><i class="fas fa-trash-alt"></i> ลบ</button>
      </div>`;
    fieldMail.insertAdjacentHTML("beforeend", copy);
  }
  if (x > 1) {
    removeMail = document.querySelectorAll(".removeMail");
    removeMail[0].style.display = "block";
  }
};

fieldMail.onclick = (e) => {
  if (e.target.matches(".removeMail")) {
    const removeMail = e.target.parentElement;
    removeMail.remove();
    x--;

    if (x === 1) {
      removeMail.querySelectorAll(".removeMail")[0].style.display = "none";
    }
  }
};
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

// คุณสมบัติด้านความรู้และความสามารถ
const maxSkill = 20;
const fieldSkill = $("#fieldSkill");
const btnAddSkill = $(".btnAddSkill");
const btnRemoveSkill = document.getElementsByClassName("btnRemoveSkill");

let sectionSkill = 5;
$(btnAddSkill).on("click", (e) => {
  e.preventDefault();
  if (sectionSkill < maxSkill) {
    sectionSkill++;
    $(fieldSkill).append(
      `<div class="gridSkillEx mb-3">     
          <p>${sectionSkill}</p>
          <input type="text" class="form-control formControl dummy1" placeholder="ระบุคุณสมบัติด้านความรู้และความสามารถ" name="skillSkill${sectionSkill}">
          <div class="flexAddPlus">
            <button class="btnRemoveSkill"><i class="fas fa-trash-alt"></i> ลบ</button>
          </div>
        </div>`
    );
  }

  if (sectionSkill > 1) {
    btnRemoveSkill[0].style.display = "block";
  }
});

$(fieldSkill).on("click", ".btnRemoveSkill", function (e) {
  e.preventDefault();
  $(this).closest("div.flexAddPlus").parent("div").remove();
  sectionSkill--;
  for (let index = 0; index < sectionSkill; index++) {
    var num = index + 1;
    document
      .querySelectorAll(".gridSkillEx")
      [index].getElementsByTagName("p")[0].innerHTML = index + 1;
    $(document.getElementsByClassName("gridSkillEx")[index])
      .find(".dummy1")
      .attr("name", "skillSkill" + num);
  }
  if (sectionSkill == 1) {
    btnRemoveSkill[0].style.display = "none";
  }
});
// end คุณสมบัติด้านความรู้และความสามารถ

// หน้าที่และความรับผิดชอบ
const maxResponsibilities = 20;
const fieldResponsibilities = $("#fieldResponsibilities");
const btnAddResponsibilities = $(".btnAddResponsibilities");
const btnRemoveResponsibilities = document.getElementsByClassName(
  "btnRemoveResponsibilities"
);
// const btnRemoveResponsibilities = $('.btnRemoveResponsibilities');

let responsibilities = 5;
btnAddResponsibilities.on("click", (e) => {
  e.preventDefault();
  if (responsibilities < maxResponsibilities) {
    responsibilities++;
    $(fieldResponsibilities).append(
      `<div class="gridResponsibilitiesEx mb-3">     
            <p>${responsibilities}</p>
            <input type="text" class="form-control formControl dummy2" placeholder="ระบุหน้าที่และความรับผิดชอบ" name="responsibilities${responsibilities}">
            <div class="flexAddPlus">
              <button class="btnRemoveResponsibilities" type="button"><i class="fas fa-trash-alt"></i> ลบ</button>
            </div>
        </div>`
    );
  }

  if (responsibilities > 1) {
    btnRemoveResponsibilities[0].style.display = "block";
  }
});

fieldResponsibilities.on("click", ".btnRemoveResponsibilities", function (e) {
  e.preventDefault();
  $(this).closest("div.flexAddPlus").parent("div").remove();
  responsibilities--;
  for (let index = 0; index < responsibilities; index++) {
    var number = index + 1;
    document
      .querySelectorAll(".gridResponsibilitiesEx")
      [index].getElementsByTagName("p")[0].innerHTML = index + 1;
    // $($('.gridResponsibilitiesEx')[index]).$($('p')[0]).html = index + 1
    $($("gridResponsibilitiesEx")[index])
      .find(".dummy2")
      .attr("name", "responsibilities" + number);
  }
  if (responsibilities == 1) {
    btnRemoveResponsibilities[0].style.display = "none";
  }
});
// end หน้าที่และความรับผิดชอบ

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
    placeholder: "เลือกได้ไม่เกิน 5 นิคมอุตสาหกรรม (ไม่บังคับ)",
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
  });
  $(
    ".select2-container, .select2-container--default .select2-search--inline .select2-search__field"
  ).css({ width: "100%" });
  $(
    ".select2-container--default .select2-selection--multiple .select2-selection__rendered li"
  ).css({ width: "100%" });
  $(".select2-container .select2-search--inline").css({ float: "inherit" });
  $(".select2-search__field").css({ color: "#333" });
  // end select2

  // เลือกสาขาอาชีพหลัก และ รอง เพื่อโชว์ปุ่ม ดูประกาศงาน
  const careerMain = document.querySelector("#careerMain");
  const careerSub = document.querySelector("#careerSub");
  const btnExample = document.querySelector("#btnExample");

  // เลือกสาขาอาชีพหลัก
  careerMain.addEventListener("change", function () {
    let main = careerMain.value;
    let sub = careerSub.value;
    if (main == "1") {
      if (sub == "2") {
        btnExample.style.display = "block";
      } else {
        btnExample.style.display = "none";
      }
    } else {
      btnExample.style.display = "none";
    }
  });
  // end เลือกสาขาอาชีพหลัก

  // เลือกสาขาอาชีพรอง
  careerSub.addEventListener("change", function () {
    let main = careerMain.value;
    let sub = careerSub.value;
    if (main == "1") {
      if (sub == "2") {
        btnExample.style.display = "block";
      } else {
        btnExample.style.display = "none";
      }
    } else {
      btnExample.style.display = "none";
    }
  });
  // end เลือกสาขาอาชีพรอง
  // end เลือกสาขาอาชีพหลัก และ รอง เพื่อโชว์ปุ่ม ดูประกาศงาน

  // jquery varidate
  $(".formVaridate").submit(function () {
    $(".gridSkillEx, .gridResponsibilitiesEx").each(function () {
      $(this)
        .find(".dummy1, .dummy2")
        .rules("add", {
          required: true,
          messages: {
            required: "",
          },
        });
    });
  });

  $(".dummy1").keyup(function () {
    var count = 0;
    for (let index = 0; index < $(".dummy1").length; index++) {
      if ($(".dummy1")[index].value != "") {
        count++;
      }
    }
    if (count == $(".dummy1").length) {
      $("#skillSkill_error").empty();
    }
  });

  $(".dummy2").keyup(function () {
    var count = 0;
    for (let index = 0; index < $(".dummy2").length; index++) {
      if ($(".dummy2")[index].value != "") {
        count++;
      }
    }
    if (count == $(".dummy2").length) {
      $("#responsibilities_error").empty();
    }
  });

  $.validator.addMethod(
    "letter",
    function (value, element) {
      return this.optional(element) || /^[a-zA-Zก-ฮะ-์0-9-.,() ]+$/.test(value);
    },
    "ใส่ได้ a-z, A-Z, ก-ฮ, สระต่างๆ"
  );

  var valid = $(".formVaridate").validate({
    errorClass: "error",
    errorElement: "p",
    onfocusout: false,

    // errorPlacement: function (error, element) {
    //   var elem = $(element);
    //   error.insertAfter(element);
    // },

    errorPlacement: function (error, element) {
      //console.log(element)
      if (
        element.attr("name") == "jobbkk" ||
        element.attr("name") == "postOffice"
      ) {
        $(element)
          .closest("form")
          .find("p[id='" + element.attr("name") + "_error']")
          .html(error[0].innerHTML);
      } else if (element.attr("name").includes("skillSkill")) {
        $(element)
          .closest("form")
          .find("p[id='skillSkill_error']")
          .html(
            "กรุณาระบุคุณสมบัติด้านความรู้และความสามารถ อย่างน้อย 1 คุณสมบัติ"
          );
      } else if (element.attr("name").includes("responsibilities")) {
        $(element)
          .closest("form")
          .find("p[id='responsibilities_error']")
          .html("กรุณาระบุหน้าที่และความรับผิดชอบ อย่างน้อย 1 คุณสมบัติ");
      } else {
        var elem = $(element);
        error.insertAfter(element);
      }
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
      count = 0;
      var elem = $(element);
      // select2 ลบขอบแดง
      var checkselect2 = elem.attr("class").split(/\s+/);
      for (let index = 0; index < checkselect2.length; index++) {
        if (checkselect2[index] == "dummy") {
          $("#jobbkk_error, #skill_error").empty();
        }
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
      position: { required: true, maxlength: 50, letter: true },
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
      day: { required: true },
      month: { required: true },
      year: { required: true },
      day1: { required: true },
      month1: { required: true },
      year1: { required: true },
      jobbkk: { required: true },
      other: { required: true },
    },
    messages: {
      careerMain: { required: "กรุณาเลือกสาขาอาชีพหลัก" },
      careerSub: { required: "กรุณาเลือกสาขาอาชีพรอง" },
      position: {
        required: "กรุณาระบุชื่อตำแหน่งงาน",
        maxlength: "เกิน 50 ตัวอักษร",
      },
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
      day: { required: "กรุณาระบุวัน" },
      month: { required: "กรุณาระบุเดือน" },
      year: { required: "กรุณาระบุปี" },
      day1: { required: "กรุณาระบุวัน" },
      month1: { required: "กรุณาระบุเดือน" },
      year1: { required: "กรุณาระบุปี" },
      jobbkk: { required: "กรุณาเลือกวิธีการสมัครงาน" },
      other: { required: "กรุณาระบุนิคมอุตสาหกรรม" },
    },

    onkeyup: function (element, event) {
      $(element).valid();
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
    // valid[0].reset();
    $(".cancel").removeClass("select2-selection__rendered");
    $("#responsibilities_error").empty();
    $("#skillSkill_error").empty();
  });
  // end jquery varidate

  // tooltip
  $('[data-toggle="tooltip"]').tooltip();
});

// เลือกภาษา
const swalWithBootstrapButtons = Swal.mixin({});
$(".modalLang").on("click", function () {
  $(".tooltip").removeClass("show");
  swalWithBootstrapButtons.fire({
    title: "เลือกภาษาที่ต้องการประกาศงาน",
    icon: "info",
    showCloseButton: true,
    showConfirmButton: false,
    html: `
      <div class="btn_lang">
        <button type="button">ภาษาอังกฤษ</button>
        <button type="button">ภาษาไทย</button>
      </div>`,
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

// disable วันเปิดประกาศ วันปิดประกาศ
function toggleSelect() {
  let isCheck = document.querySelector("#selectDisable").checked;
  let x = document.querySelectorAll(".selectDis");
  let p = document.querySelectorAll(".gridDay p.error");
  for (i = 0; i < x.length; i++) {
    if (isCheck === true) {
      if ($(".gridDay p").hasClass("error")) {
        x[i].disabled = true;
        x[i].classList.remove("error");
        p[i].style.display = "none";
      } else {
        x[i].disabled = true;
      }
    } else {
      if ($(".gridDay p").hasClass("error")) {
        x[i].disabled = false;
        x[i].classList.add("error");
        p[i].style.display = "block";
      } else {
        x[i].disabled = false;
      }
    }
  }
}
// end disable วันเปิดประกาศ วันปิดประกาศ

// ตรวจสอบข้อมูลเพื่อประกาศงาน
const urgentJobsSystem = document.querySelector("#urgentJobsSystem");
urgentJobsSystem.addEventListener("click", () => {
  Swal.fire({
    title: "Urgent Jobs System?",
    icon: "info",
    showconfirmButton: true,
    confirmButtonText: "เข้าใจแล้ว",
    html: `<div class="lineDashUrgent"></div>
            <figure><img src="images/example.jpg"/></figure>`,
  });
  let sweertPopup = document.getElementsByClassName("swal2-popup")[0];
  sweertPopup.style.width = "100%";
  sweertPopup.style.maxWidth = "900px";
});
// end ตรวจสอบข้อมูลเพื่อประกาศงานฆ

// เพิ่มอุตสาหกรรม ยกเลิก
$("#industrial_estate").change(function () {
  var industrial_estate = $("#industrial_estate").val();

  if (jQuery.inArray("5", industrial_estate) != -1) {
    $(".gridDataList").removeClass("none");
    $("#industrial_estate").prop("disabled", true);
    $("#industrial_estate").val(null).trigger("change");
    $("#industrial_estate").val("5");
  } else {
    $("#industrial_estate").prop("disabled", false);
  }
});

$("#cancelBtn").click(() => {
  if (this.value !== 5) {
    $("#cancelBtn").parent("section").addClass("none");
    $("#industrial_estate").prop("disabled", false);
    $("#industrial_estate").val(null).trigger("change");
  } else {
    $("#cancelBtn").parent("section").removeClass("none");
    $("#industrial_estate").prop("disabled", true);
  }
});
// end เพิ่มอุตสาหกรรม ยกเลิก

// คุณต้องการยกเลิกการแก้ไขประกาศงานนี้ใช่หรือไม่
$("#cancel").on("click", function () {
  Swal.fire({
    title: "คุณต้องการยกเลิกการแก้ไขประกาศงานนี้ใช่หรือไม่?",
    icon: "warning",
    showCancelButton: true,
    showconfirmButton: true,
    confirmButtonText: "ตกลง",
    cancelButtonText: "ยกเลิก",
  });
});
// end คุณต้องการยกเลิกการแก้ไขประกาศงานนี้ใช่หรือไม่

$(".radius_change").each(function () {
  $(this).change(() => {
    if ($(this).select2("data").length > 1) {
      $(this).next().children().children().css({ borderRadius: "1rem" });
    } else {
      $(this).next().children().children().css({
        borderRadius: "5rem",
      });
    }
  });
});
