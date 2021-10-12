const vdos = [
  {
    vdo: `https://www.youtube.com/embed/-CCN_VrUCGQ`,
    head: `JOBBKK งานทั่วไทยไปทุกภาค - วิทยาลัยนานาชาติ มรภ.สวนสุนันทา`,
    sub: `เมื่อเร็ว ๆ นี้ทาง JOBBKK.COM กับวิทยาลัยนานาชาติ ม.ราชภัฎสวนสุนันทา`,
  },
  {
    vdo: `https://www.youtube.com/embed/-CCN_VrUCGQ`,
    head: `14 พ.ค. 59 - JOBBKK งานทั่วไทย ไปทุกภาค - มรภ.สุราษฎร์ธานี`,
    sub: `มหาวิทยาลัยราชภัฎสุราษฎร์ธานี ร่วมกับ JOBBKK.COM จัดงาน JOB FAIR 2016 เมื่อวันที่`,
  },
  {
    vdo: `https://www.youtube.com/embed/-CCN_VrUCGQ`,
    head: `JOBBKK งานทั่วไทยไปทุกภาค - วิทยาลัยนานาชาติ มรภ.สวนสุนันทา`,
    sub: `เมื่อเร็ว ๆ นี้ทาง JOBBKK.COM กับวิทยาลัยนานาชาติ ม.ราชภัฎสวนสุนันทา`,
  },
  {
    vdo: `https://www.youtube.com/embed/-CCN_VrUCGQ`,
    head: `14 พ.ค. 59 - JOBBKK งานทั่วไทย ไปทุกภาค - มรภ.สุราษฎร์ธานี`,
    sub: `มหาวิทยาลัยราชภัฎสุราษฎร์ธานี ร่วมกับ JOBBKK.COM จัดงาน JOB FAIR 2016 เมื่อวันที่`,
  },
];

const vdoRecomments = [
  {
    vdo: `https://www.youtube.com/embed/-CCN_VrUCGQ`,
    head: `JOBBKK งานทั่วไทยไปทุกภาค - วิทยาลัยนานาชาติ มรภ.สวนสุนันทา`,
    sub: `เมื่อเร็ว ๆ นี้ทาง JOBBKK.COM กับวิทยาลัยนานาชาติ ม.ราชภัฎสวนสุนันทา`,
  },
  {
    vdo: `https://www.youtube.com/embed/-CCN_VrUCGQ`,
    head: `14 พ.ค. 59 - JOBBKK งานทั่วไทย ไปทุกภาค - มรภ.สุราษฎร์ธานี`,
    sub: `มหาวิทยาลัยราชภัฎสุราษฎร์ธานี ร่วมกับ JOBBKK.COM จัดงาน JOB FAIR 2016 เมื่อวันที่`,
  },
  {
    vdo: `https://www.youtube.com/embed/-CCN_VrUCGQ`,
    head: `JOBBKK งานทั่วไทยไปทุกภาค - วิทยาลัยนานาชาติ มรภ.สวนสุนันทา`,
    sub: `เมื่อเร็ว ๆ นี้ทาง JOBBKK.COM กับวิทยาลัยนานาชาติ ม.ราชภัฎสวนสุนันทา`,
  },
  {
    vdo: `https://www.youtube.com/embed/-CCN_VrUCGQ`,
    head: `14 พ.ค. 59 - JOBBKK งานทั่วไทย ไปทุกภาค - มรภ.สุราษฎร์ธานี`,
    sub: `มหาวิทยาลัยราชภัฎสุราษฎร์ธานี ร่วมกับ JOBBKK.COM จัดงาน JOB FAIR 2016 เมื่อวันที่`,
  },
];

let bodyContent = "";

bodyContent += `
  ${/* <!-- vdo เนื้อหาแนะนำ --> */ ""}
  <article class="gridContent">
    ${/* <!-- vdo --> */ ""}
    <div>
      <ul class="articleContentAll">
        ${vdos
          .map(
            (vdo) => `
        <li>
            <iframe
            width="100%"
            height="auto"
            src="${vdo.vdo}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe>
            <figcaption>
                <div>
                    <h6 class="font-weight-bold mb-2 textCut">${vdo.head}</h6>
                    <p class="textCut mb-4">${vdo.sub}</p>

                    <ul class="tagContent">
                        <li><a href="https://www.jobbkk.com/variety/detail/3417/JOBBKK%20%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B9%84%E0%B8%9B%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%A0%E0%B8%B2%E0%B8%84%20-%20%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%99%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%20%E0%B8%A1%E0%B8%A3%E0%B8%A0.%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%AA%E0%B8%B8%E0%B8%99%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B2" class="fontMark">HR Society</a></li>
                    </ul>
                </div>

                <div class="text-right">
                    <a
                        class="read"
                        href="https://www.jobbkk.com/variety/detail/3417/JOBBKK%20%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B9%84%E0%B8%9B%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%A0%E0%B8%B2%E0%B8%84%20-%20%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%99%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%20%E0%B8%A1%E0%B8%A3%E0%B8%A0.%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%AA%E0%B8%B8%E0%B8%99%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B2"
                        target="_blank">
                        อ่านต่อ
                    </a>
                </div>
            </figcaption>
        </li>
        `
          )
          .join("\n")}
      </ul>

      ${/* pagination */ ""}
      <nav aria-label="Page navigation example">
        <ul class="pagination flexPagination mb-3">
          <li class="page-item">
            <a class="page-link" href="#">Previous</a>
          </li>
          <li class="page-item">
            <a class="page-link active" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
      ${/* end pagination */ ""}
    </div>
    ${/* <!-- end vdo --> */ ""}

    ${/* <!-- เนื้อหาแนะนำ --> */ ""}
    <div>
      <h2 class="fontHead mb-5">เนื้อหาแนะนำ</h2>
      <ul class="vdoRecommentList">
        ${vdoRecomments
          .map(
            (vdoRecomment) => `
        <li>
            <iframe
            width="100%"
            height="auto"
            src="${vdoRecomment.vdo}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            ></iframe>
            <figcaption>
              <h6 class="font-weight-bold mb-2 textCut">${vdoRecomment.head}</h6>
              <p class="textCut mb-4">${vdoRecomment.sub}</p>
              <div class="text-right">
                <a href="https://www.jobbkk.com/variety/detail/3417/JOBBKK%20%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B9%84%E0%B8%9B%E0%B8%97%E0%B8%B8%E0%B8%81%E0%B8%A0%E0%B8%B2%E0%B8%84%20-%20%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%99%E0%B8%B2%E0%B8%99%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%20%E0%B8%A1%E0%B8%A3%E0%B8%A0.%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%AA%E0%B8%B8%E0%B8%99%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B2" class="read" target="_blank">
                  อ่านต่อ
                </a>
              </div>
            </figcaption>
        </li>
        `
          )
          .join("\n")}
      </ul>
    </div>
    ${/* <!-- end เนื้อหาแนะนำ --> */ ""}
  </article>
  ${/* <!-- end ไฮไลท์ เนื้อหาแนะนำ --> */ ""}
`;

document.querySelector(".bodyContent").innerHTML = bodyContent;
