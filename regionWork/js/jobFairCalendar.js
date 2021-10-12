const jobfairEvents = [
  "เลือก Job Fair event",
  "จ๊อบแฟร์ออนไลน์ KMUTT 2021",
  "SRU2021 ปัจฉิมนิเทศ มหาวิทยาลัยราชภัฏสุราษฎร์ธานี",
  "Road show ปัจฉิมนิเทศ ราชภัฏวไลยอลงกรณ์2021",
];

const years = [
  "เลือกปี",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
];

const provinces = [
  "เลือกจังหวัด",
  "กรุงเทพมหานคร",
  "สมุทรปราการ",
  "สมุทรสงคราม",
  "นครปฐม",
  "กาญจนบุรี",
  "เชียงใหม่",
];

const events = [
  {
    start: `2021-07-05 - 2021-07-31`,
    name: `จ๊อบแฟร์ออนไลน์ภาคใต้ ครั้งที่ 1 South`,
    area: `นครศรีธรรมราช`,
  },
  {
    start: `2021-04-23 - 2021-05-20`,
    name: `จ๊อบแฟร์ออนไลน์ KMUTT 2021`,
    area: `กรุงเทพมหานคร`,
  },
  {
    start: `2021-03-31 - 2021-04-10`,
    name: `SRU2021 ปัจฉิมนิเทศ มหาวิทยาลัยราชภัฏสุราษฎร์ธานี`,
    area: `สุราษฎร์ธานี`,
  },
  {
    start: `2021-03-22 - 2021-05-05`,
    name: `ปัจฉิมนิเทศ มหาวิทยาลัยราชภัฏสงขลา 2564`,
    area: `สงขลา`,
  },
  {
    start: `2021-03-19 - 2021-03-30`,
    name: `Road show ปัจฉิมนิเทศ ราชภัฏวไลยอลงกรณ์2021`,
    area: `ปทุมธานี`,
  },
  {
    start: `2021-07-05 - 2021-07-31`,
    name: `จ๊อบแฟร์ออนไลน์ภาคใต้ ครั้งที่ 1 South`,
    area: `นครศรีธรรมราช`,
  },
  {
    start: `2021-04-23 - 2021-05-20`,
    name: `จ๊อบแฟร์ออนไลน์ KMUTT 2021`,
    area: `กรุงเทพมหานคร`,
  },
  {
    start: `2021-03-31 - 2021-04-10`,
    name: `SRU2021 ปัจฉิมนิเทศ มหาวิทยาลัยราชภัฏสุราษฎร์ธานี`,
    area: `สุราษฎร์ธานี`,
  },
  {
    start: `2021-03-22 - 2021-05-05`,
    name: `ปัจฉิมนิเทศ มหาวิทยาลัยราชภัฏสงขลา 2564`,
    area: `สงขลา`,
  },
  {
    start: `2021-03-19 - 2021-03-30`,
    name: `Road show ปัจฉิมนิเทศ ราชภัฏวไลยอลงกรณ์2021`,
    area: `ปทุมธานี`,
  },
];

let jobFairCalendar = "";

jobFairCalendar += `
<div class="flexHead">
    <h2 class="fontHead">Job Fair ของเดือนนี้</h2>
</div>

<nav aria-label="breadcrumb">
    <ol class="breadcrumb breadcrumbJobbkk">
        <li class="breadcrumb-item">
            <a href="${path}regionWork/jobfair.html">Job Fair</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Job Fair Online ของเดือนนี้</li>
    </ol>
</nav>

<h6 class="mt-5 mb-2 font-weight-bold">2021 / กันยายน</h6>

${/* filter ค้นหา job fair */ ""}
<section class="gridJobfairSearch">
  <div>
    <select id="jobfairEvent" class="form-control formControl disabled">
      ${jobfairEvents
        .map(
          (jobfairEvent) => `
      <option value="${jobfairEvent}">${jobfairEvent}</option>
      `
        )
        .join("\n")}
    </select>
  </div>

  <div>
    <select id="year" class="form-control formControl disabled">
      ${years
        .map(
          (year) => `
      <option value="${year}">${year}</option>
      `
        )
        .join("\n")}
    </select>
  </div>

  <div>
    <select id="province" class="form-control formControl disabled">
        ${provinces
          .map(
            (province) => `
        <option value="${province}">${province}</option>
        `
          )
          .join("\n")}
    </select>
  </div>

  <div><button type="button" class="search">ค้นหา</button></div>
</section>
${/* end filter ค้นหา job fair */ ""}

${/* table job fair */ ""}
<section>
  <table class="table table-bordered table-striped my-5 tableJobfairEvent">
    <thead>
      <tr>
        <th>วันที่เริ่ม - จบงาน</th>
        <th>ชื่องาน</th>
        <th>สถานที่จัดงาน</th>
        <th>รายละเอียด</th>
        <th>ถ่ายทอดสด</th>
      </tr>
    </thead>

    <tbody>
      ${events
        .map(
          (event) => `
      <tr>
        <td data-label="วันที่เริ่ม - จบงาน">${event.start}</td>
        <td data-label="ชื่องาน">${event.name}</td>
        <td data-label="สถานที่จัดงาน">${event.area}</td>
        <td data-label="รายละเอียด">
            <a href="https://www.jobbkk.com/jobfair/view_jobfair/330" target="_blank">ดูรายละเอียด</a>
        </td>
        <td data-label="ถ่ายทอดสด">
            <button type="button" class="live" data-toggle="modal" data-target="#liveWatch">Live</button>
        </td>
      </tr>
      `
        )
        .join("\n")}
    </tbody>

    ${/* modal live สด */ ""}
    <div class="modal fade" id="liveWatch" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modalDialog">
        <div class="modal-content" style="max-width:57.6rem; margin: 0 auto;">
          <div class="modal-header">
            <div class="flexHeadModal">
              <h2 class="fontSubHead textWhite lineH">Live สด (งาน: ปัจฉิมนิเทศ มหาวิทยาลัยราชภัฏสงขลา 2564)</h2>
            </div>
            
            <button type="button" class="close fontSuperHead textWhite" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"><i class="fas fa-times-circle"></i></span>
            </button>
          </div>

          <div class="modal-body">
            <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/-CCN_VrUCGQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe>
          </div>

          <div class="modal-footer" style="justify-content: center;">
            <button type="button" class="btn_white" data-dismiss="modal">ปิด</button>
          </div>
        </div>
      </div>
    </div>
    ${/* end modal live สด */ ""}
  </table>
</section>
${/* end table job fair */ ""}
`;

document.querySelector(".bodyContent").innerHTML = jobFairCalendar;

const disableds = document.querySelectorAll(".disabled");

for (const disabled of disableds) {
  disabled.firstElementChild.setAttribute("disabled", "disabled");
}
