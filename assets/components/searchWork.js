var searchWork = ''

searchWork += `<div class="container">`
searchWork += `<div class="row">`
searchWork += `<div class="col-12">`
searchWork += `<section class="gridFilter">`

// ประเภทงานทั้งหมด (สาขาอาชีพ)
searchWork += `<div class="dropdown dropdownFilter">`
searchWork += `<button class="form-control formControl buttonFilter" type="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="searchEllipsis"><i class="fas fa-briefcase"></i>
                                                ประเภทงานทั้งหมด (สาขาอาชีพ)</span>
                                            <i class="fas fa-chevron-down"></i>
                                        </button>`

searchWork += `<div class="dropdown-menu dropDownScroll">`
searchWork += `<article class="accordion" id="workAll">`

let idWorkall = 0
let workAlls = [
    {
        name: 'Part-time / พนักงานสัญญาจ้าง',
        collapes: ["นักศึกษาฝึกงาน", "พนักงาน part-time", "พนักงานสัญญาจ้าง", "สหกิจศึกษา"]
    },
    {
        name: "กฎหมาย",
        collapes: ["กฎหมาย อื่นๆ", "ทนายความ", "ที่ปรึกษาด้านกฎหมาย", "นักกฎหมาย"]
    },
    {
        name: "ก่อสร้าง",
        collapes: ["ก่อสร้าง ควบคุมอาคาร", "ก่อสร้างอื่นๆ", "ช่าง/คนงานทั่วไป", "ตรวจสอบอาคาร/สำรวจ"]
    },
]
workAlls.forEach((workAll) => {
    searchWork += `<section>`
    searchWork += `<button class="btn btn-link btn-block text-left flexPositionPre"
    id="headWork${idWorkall + 1}" type="button" data-toggle="collapse" data-target="#colWork${idWorkall + 1}"
    aria-expanded="true" aria-controls="colWork${idWorkall + 1}">
        <span>${workAll.name}</span>
        <i class="fas fa-chevron-down"></i>
    </button>`

    searchWork += `<div id="colWork${idWorkall + 1}" class="collapse" aria-labelledby="headWork${idWorkall + 1}"
    data-parent="#workAll">`
    searchWork += `<div class="card-body p-3">`
    searchWork += `<div class="allWorkList">
            <label><input type="checkbox"> ทั้งหมด</label>
            <button>ตกลง</button>
        </div>`

    searchWork += `<div class="lineDashUrgent"></div>`

    if (workAll.collapes != null && workAll.collapes != '') {
        searchWork += `<ul>`
        for (let collape = 0; collape < workAll.collapes.length; collape++) {
            searchWork += `<li><label><input type="checkbox"> ${workAll.collapes[collape]}</label></li>`
        }
        searchWork += `</ul>`
    }
    searchWork += `</div>`
    searchWork += `</div>`
    searchWork += `</section>`
    idWorkall += 1
})
searchWork += `</article>`
searchWork += `</div>`
searchWork += `</div>`
// end ประเภทงานทั้งหมด (สาขาอาชีพ)

// สถานที่ทำงานทั้งหมด
searchWork += `<div class="dropdown dropdownFilter">`
searchWork += `<button class="form-control formControl buttonFilter" type="button"
                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span class="searchEllipsis"><i class="fas fa-map-marked-alt"></i>
                                                สถานที่ทำงานทั้งหมด</span>
                                            <i class="fas fa-chevron-down"></i>
                                        </button>`

searchWork += `<div class="dropdown-menu dropDownScroll">`
searchWork += `<article class="accordion" id="areaAll">`

idArea = 0
let areas = [
    {
        name: "กรุงเทพมหานคร",
        collapes: ["รามคำแหง", "ลาดพร้าว", "รัชดา", "พระราม9"],
    },
    {
        name: "เชียงใหม่",
        collapes: ["ม่อนแจ่ม", "ม่อนอิงดาว", "ม่อนเหนือ", "ม่อนใต้"],
    },
    {
        name: "กาญจนบุรี",
        collapes: ["สังขละบุรี", "ทองผาภูมิ", "ไทรโยค", "ปิล็อค"],
    },
]

areas.forEach((area) => {
    searchWork += `<section>`
    searchWork += `<button class="btn btn-link btn-block text-left flexPositionPre"
                    id="headArea${idArea + 1}" type="button" data-toggle="collapse" data-target="#colArea${idArea + 1}"
                    aria-expanded="true" aria-controls="colArea${idArea + 1}">
                        <span>${area.name}</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>`

    searchWork += `<div id="colArea${idArea + 1}" class="collapse" aria-labelledby="headArea${idArea + 1}" data-parent="#areaAll">`
    searchWork += `<div class="card-body p-3">`
    searchWork += `<div class="allWorkList">
                        <label><input type="checkbox"> ทั้งหมด</label>
                        <button>ตกลง</button>
                    </div>`

    searchWork += `<div class="lineDashUrgent"></div>`

    if (area.collapes != null && area.collapes != '') {
        searchWork += `<ul>`
        for (let collape = 0; collape < area.collapes.length; collape++) {
            searchWork += `<li><label><input type="checkbox"> ${area.collapes[collape]}</label></li>`
        }
        searchWork += `</ul>`
    }
    searchWork += `</div>`
    searchWork += `</div>`
    searchWork += `</section>`
    idArea += 1
})
searchWork += `</article>`
searchWork += `</div>`
searchWork += `</div>`
// end สถานที่ทำงานทั้งหมด

// พิมพ์ชื่อตำแหน่งงานหรือคำค้นหา
searchWork += `<div class="form-group">
                <div class="inputSearch">
                    <span class="iconSearch"><i class="fas fa-search"></i></span>
                    <input type="email" class="form-control formControl formClLeft" id="exampleInputEmail1" 
                    list="dataList" placeholder="พิมพ์ชื่อตำแหน่งงานหรือคำค้นหา">
                    <datalist id="dataList">
                        <option value="พนักงานขาย">
                        <option value="Web Designer">
                        <option value="Graphic Designer">
                        <option value="พนักงานสวน">
                        <option value="การตลาด">
                        <option value="Call Center">
                    </datalist>
                </div>
            </div>`
// end พิมพ์ชื่อตำแหน่งงานหรือคำค้นหา

// เลือกเงินเดือนที่ต้องการ ต่ำสุด
searchWork += `<div class="dropdown dropdownFilter">`;
searchWork += `<button class="form-control formControl buttonFilter" type="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`;
searchWork += `<span class="searchEllipsis"><i class="fas fa-money-bill-wave"></i> เลือกเงินเดือนที่ต้องการ ต่ำสุด</span>`;
searchWork += `<i class="fas fa-chevron-down"></i>`;
searchWork += `</button>`;

searchWork += `<div class="dropdown-menu dropDownMenu">`;
let minMoneys = ["10,000 บาท", "20,000 บาท", "30,000 บาท", "40,000 บาท", "50,000 บาท"];
for (let minMoney = 0; minMoney < minMoneys.length; minMoney++) {
  searchWork += `<a class="dropdown-item" href="javascript:void(0)">${minMoneys[minMoney]}</a>`;
}
searchWork += `</div>`;
searchWork += `</div>`;
// end เลือกเงินเดือนที่ต้องการ ต่ำสุด

// เลือกเงินเดือนที่ต้องการ สูงสุด
searchWork += `<div class="dropdown dropdownFilter">`;
searchWork += `<button class="form-control formControl buttonFilter" type="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`;
searchWork += `<span class="searchEllipsis"><i class="fas fa-money-bill-wave"></i> เลือกเงินเดือนที่ต้องการ สูงสุด</span>`;
searchWork += `<i class="fas fa-chevron-down"></i>`;
searchWork += `</button>`;

searchWork += `<div class="dropdown-menu dropDownMenu">`;
let maxMoneys = ["50,000 บาท", "60,000 บาท", "70,000 บาท", "80,000 บาท", "90,000 บาท"];
for (let maxMoney = 0; maxMoney < maxMoneys.length; maxMoney++) {
  searchWork += `<a class="dropdown-item" href="javascript:void(0)">${maxMoneys[maxMoney]}</a>`;
}
searchWork += `</div>`;
searchWork += `</div>`;
// end เลือกเงินเดือนที่ต้องการ สูงสุด

// เลือกรูปแบบงานทั้งหมด
searchWork += `<div class="hiddenMobile">
                <label class="selectCus">
                    <select class="form-control formControl">
                        <option value="">เลือกรูปแบบงานทั้งหมด</option>
                        <option>งานประจำ</option>
                        <option>งานนอกเวลา</option>
                        <option>งานอิสระ</option>
                        <option>นักศึกษาฝึกงาน</option>
                    </select>
                </label>
            </div>`
// end เลือกรูปแบบงานทั้งหมด

// เลือกการเดินทาง
searchWork += `<div class="dropdown dropdownFilter hiddenMobile">`
searchWork += `<button class="form-control formControl buttonFilter" type="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="searchEllipsis"><i class="fas fa-bus"></i> เลือกการเดินทาง</span>
                        <i class="fas fa-chevron-down"></i>
            </button>`

searchWork += `<div class="dropdown-menu dropDownScroll">`
searchWork += `<article class="accordion" id="transport">`

let idTransport = 0
let transports = [
    {
        name: "BTS",
        collapes: ["สถานีหมอชิต", "สถานีสะพานควาย", "สถานีพญาไท", "สถานีราชเทวี", "สถานีสยาม", "สถานีช่องนนทรี"],
    },
    {
        name: "MRT",
        collapes: ["สถานีลาดพร้าว", "สถานีรัชดา", "สถานีสุทธิสาร", "สถานีห้วยขวาง", "สถานีศูนย์วัฒนธรรม", "สถานีพระราม9"],
    },
    {
        name: "Airport Rail Link",
        collapes: ["สถานีมักกะสัน", "สถานีรามคำแหง", "สถานีสุวรรณภูมิ"],
    },
    {
        name: "รถประจำทาง",
        collapes: ["สาย 8", "สาย 96", "สาย ปอ.137", "สาย 36ก", "สาย 44", "สาย ปอ 73ก"],
    }
];
transports.forEach((transport) => {
    searchWork += `<section>`
    searchWork += `<button class="btn btn-link btn-block text-left flexPositionPre"
                    id="headTransport${idTransport + 1}" type="button" data-toggle="collapse" 
                    data-target="#coltransport${idTransport + 1}"
                    aria-expanded="true" aria-controls="coltransport${idTransport + 1}">
                        <span>${transport.name}</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>`

    searchWork += `<div id="coltransport${idTransport + 1}" class="collapse" aria-labelledby="headTransport${idTransport + 1}" 
                        data-parent="#transport">`
    searchWork += `<div class="card-body p-3">`
    searchWork += `<div class="allWorkList">
                    <label><input type="checkbox"> ทั้งหมด</label>
                    <button>ตกลง</button>
                   </div>`

    searchWork += `<div class="lineDashUrgent"></div>`

    if (transport.collapes != null && transport.collapes != '') {
        searchWork += `<ul>`
        for (let collape = 0; collape < transport.collapes.length; collape++) {
            searchWork += `<li><label><input type="checkbox"> ${transport.collapes[collape]}</label></li>`
        }
        searchWork += `</ul>`
    }
    searchWork += `</div>`
    searchWork += `</div>`
    searchWork += `</section>`
    idTransport += 1
})
searchWork += `</article>`
searchWork += `</div>`
searchWork += `</div>`
// end เลือกการเดินทาง

// อื่นๆ
searchWork += `<div class="grid4 hiddenMobile">
                <div class="clWhite flexOther formControl borderStyle border10">
                    <p><i class="fab fa-ethereum"></i> อื่นๆ</p>
                    <label><input type="checkbox"> ยินดีรับนักศึกษาจบใหม่</label>
                    <label><input type="checkbox"> ยินดีรับผู้ไม่มีประสบการณ์</label>
                    <label><input type="checkbox"> ยินดีรับคนพิการ</label>
                    <label><input type="checkbox"> งานด่วน</label>
                </div>
            </div>`
// end อื่นๆ

// search Mobile
searchWork += `<div class="accordion" id="searchHidden">`
searchWork += `<div id="colSearch" class="collapse" aria-labelledby="search1" data-parent="#searchHidden">`
searchWork += `<div class="flexGap">`

// เลือกเงินเดือนที่ต้องการ ต่ำสุด mobile
searchWork += `<div class="dropdown dropdownFilter">`;
searchWork += `<button class="form-control formControl buttonFilter" type="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`;
searchWork += `<span class="searchEllipsis"><i class="fas fa-money-bill-wave"></i> เลือกเงินเดือนที่ต้องการ ต่ำสุด</span>`;
searchWork += `<i class="fas fa-chevron-down"></i>`;
searchWork += `</button>`;

searchWork += `<div class="dropdown-menu dropDownMenu">`;
for (let minMoney = 0; minMoney < minMoneys.length; minMoney++) {
  searchWork += `<a class="dropdown-item" href="javascript:void(0)">${minMoneys[minMoney]}</a>`;
}
searchWork += `</div>`;
searchWork += `</div>`;
// end เลือกเงินเดือนที่ต้องการ ต่ำสุด mobile

// เลือกเงินเดือนที่ต้องการ สูงสุด mobile
searchWork += `<div class="dropdown dropdownFilter">`;
searchWork += `<button class="form-control formControl buttonFilter" type="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">`;
searchWork += `<span class="searchEllipsis"><i class="fas fa-money-bill-wave"></i> เลือกเงินเดือนที่ต้องการ สูงสุด</span>`;
searchWork += `<i class="fas fa-chevron-down"></i>`;
searchWork += `</button>`;

searchWork += `<div class="dropdown-menu dropDownMenu">`;
for (let maxMoney = 0; maxMoney < maxMoneys.length; maxMoney++) {
  searchWork += `<a class="dropdown-item" href="javascript:void(0)">${maxMoneys[maxMoney]}</a>`;
}
searchWork += `</div>`;
searchWork += `</div>`;
// end เลือกเงินเดือนที่ต้องการ สูงสุด mobile

// เลือกรูปแบบงานทั้งหมด mobile
searchWork += `<div>
                <label class="selectCus">
                    <select class="form-control formControl">
                        <option value="">เลือกรูปแบบงานทั้งหมด</option>
                        <option>งานประจำ</option>
                        <option>งานนอกเวลา</option>
                        <option>งานอิสระ</option>
                        <option>นักศึกษาฝึกงาน</option>
                    </select>
                </label>
            </div>`
// end เลือกรูปแบบงานทั้งหมด mobile

// เลือกการเดินทาง mobile
searchWork += `<div class="dropdown dropdownFilter">`
searchWork += `<button class="form-control formControl buttonFilter" type="button"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="searchEllipsis"><i class="fas fa-bus"></i> เลือกการเดินทาง</span>
                        <i class="fas fa-chevron-down"></i>
            </button>`

searchWork += `<div class="dropdown-menu dropDownScroll">`
searchWork += `<article class="accordion" id="transportMobile">`

transports.forEach((transport) => {
    searchWork += `<section>`
    searchWork += `<button class="btn btn-link btn-block text-left flexPositionPre"
                    id="headTransport${idTransport + 1}" type="button" data-toggle="collapse" 
                    data-target="#coltransport${idTransport + 1}"
                    aria-expanded="true" aria-controls="coltransport${idTransport + 1}">
                        <span>${transport.name}</span>
                        <i class="fas fa-chevron-down"></i>
                    </button>`

    searchWork += `<div id="coltransport${idTransport + 1}" class="collapse" aria-labelledby="headTransport${idTransport + 1}" 
                        data-parent="#transportMobile">`
    searchWork += `<div class="card-body p-3">`
    searchWork += `<div class="allWorkList">
                    <label><input type="checkbox"> ทั้งหมด</label>
                    <button>ตกลง</button>
                   </div>`

    searchWork += `<div class="lineDashUrgent"></div>`

    if (transport.collapes != null && transport.collapes != '') {
        searchWork += `<ul>`
        for (let collape = 0; collape < transport.collapes.length; collape++) {
            searchWork += `<li><label><input type="checkbox"> ${transport.collapes[collape]}</label></li>`
        }
        searchWork += `</ul>`
    }
    searchWork += `</div>`
    searchWork += `</div>`
    searchWork += `</section>`
    idTransport += 1
})
searchWork += `</article>`
searchWork += `</div>`
searchWork += `</div>`
// end เลือกการเดินทาง mobile

// อื่นๆ mobile
searchWork += `<div class="grid4">
                <div class="clWhite flexOther formControl borderStyle border10">
                    <p><i class="fab fa-ethereum"></i> อื่นๆ</p>
                        <label><input type="checkbox"> ยินดีรับนักศึกษาจบใหม่</label>
                        <label><input type="checkbox"> ยินดีรับผู้ไม่มีประสบการณ์</label>
                        <label><input type="checkbox"> ยินดีรับคนพิการ</label>
                        <label><input type="checkbox"> งานด่วน</label>
                    </div>
                </div>`
// end อื่นๆ mobile

searchWork += `</div>`
searchWork += `</div>`
searchWork += `</div>`
// end search Mobile

// tag
searchWork += `<div class="grid3">
                <ul class="flexAndWork">
                    <li><a href="javascript:void(0)" onclick="link()">หางานด่วน</a></li>
                    <li><a href="javascript:void(0)" onclick="link()">หางานบริษัทใหม่</a></li>
                    <li><a href="javascript:void(0)" onclick="link()">หางานตำแหน่งใหม่</a></li>
                    <li><a href="javascript:void(0)" onclick="link()">Job Fair</a></li>
                    <li><a href="javascript:void(0)" onclick="link()">หางานพาร์ทไทม์</a></li>
                </ul>
            </div>`
// end tag

// รายละเอียดเพิ่มเติม
searchWork += `<div id="search1">
                    <button class="btn btn-link btn-block text-center" type="button"
                        data-toggle="collapse" data-target="#colSearch" aria-expanded="true" aria-controls="colSearch">
                        รายละเอียดเพิ่มเติม
                    </button>
                </div>`
// end รายละเอียดเพิ่มเติม

// หางาน
searchWork += `<div class="submitColumn">
                    <div class="submit">
                        <button>รีเซตเงื่อนไข</button>
                        <button>หางาน</button>
                    </div>
                </div>`
// end หางาน

searchWork += `</section>`
searchWork += `</div>`
searchWork += `</div>`
searchWork += `</div>`

document.getElementsByClassName('searchWork')[0].innerHTML = searchWork

// เลือกตรงดรอปดาว
$(document).on("click", ".dropDownScroll", function (e) {
    e.stopPropagation();
});

// ตัดคำ
$(".searchEllipsis").dotdotdot({
    height: 24,
    fallbackToLetter: true,
    watch: true,
});