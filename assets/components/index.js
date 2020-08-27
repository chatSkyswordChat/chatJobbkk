var need = ''
let workNeeds = [
    '1', '2', '3', '4', '5', '6', '7', '1', '2', '3', '4', '5', '6', '7', '1', '2'
]
for (let workNeed = 0; workNeed < workNeeds.length; workNeed++) {
    need += `<li>
    <a href="javascript:void(0)" onclick="link()"><img src="assets/images/logo${workNeeds[workNeed]}.jpg" alt=""></a>
    </li>`
}

document.getElementsByClassName('gridNeed')[0].innerHTML = need

var fair = ''
let workFairs = [
    '1', '2', '3'
]
for (let workFair = 0; workFair < workFairs.length; workFair++) {
    fair += `<li>
    <a href="javascript:void(0)" onclick="link()"><img src="assets/images/fair${workFairs[workFair]}.png" alt=""></a>
    </li>`
}

document.getElementsByClassName('gridFair')[0].innerHTML = fair

var premium = ''
let workPremiums = [
    '1', '2', '3', '4', '5'
]
for (let workPremium = 0; workPremium < workPremiums.length; workPremium++) {
    premium += `<li>
    <a href="javascript:void(0)" onclick="link()"><img src="assets/images/premium${workPremiums[workPremium]}.jpg" alt=""></a>
    </li>`
}

document.getElementsByClassName('gridPremium')[0].innerHTML = premium

var gridRegion = ''
let workRegions = [
    { name: 'งานกรุงเทพฯ', img: '1' },
    { name: 'งานภาคกลาง', img: '2' },
    { name: 'งานภาคตะวันออก', img: '3' },
    { name: 'งานภาคอีสาน', img: '4' },
    { name: 'งานภาคใต้', img: '5' },
    { name: 'งานภาคเหนือ', img: '6' },
    { name: 'งานภาคตะวันตก', img: '7' },
    { name: 'รวมงานทุกภาค', img: '8' },
]

workRegions.forEach((workRegion) => {
    gridRegion += `<li>
                <a href="javascript:void(0)" onclick="link()">
                    <figure><img src="assets/images/region${workRegion.img}.jpg" alt=""></figure>
                    <div class="flexGo clWhitetGray textBlackGray">
                        <p>${workRegion.name}</p>
                        <p class="readMore"><span>อ่านต่อ</span></p>
                    </div>
                </a>
            </li>`
})

document.getElementsByClassName('gridRegion')[0].innerHTML = gridRegion

var gridHotCareer = ''
let workHotCareers = [
    { name: 'ขาย', img: '1' },
    { name: 'ไอที', img: '2' },
    { name: 'วิศวกรรม', img: '3' },
    { name: 'การตลาด / PR ', img: '4' },
    { name: 'ขนส่ง/คลังสินค้า', img: '5' },
    { name: 'ก่อสร้าง', img: '6' },
    { name: 'โฆษณา /สื่อ', img: '7' },
    { name: 'จัดซื้อ', img: '8' },
    { name: 'ท่องเที่ยว/โรงเเรม', img: '9' },
    { name: 'โทรคมนาคม', img: '10' },
    { name: 'ธุรการ/การจัดการทั่วไป', img: '11' },
    { name: 'การแพทย์', img: '12' },
    { name: 'บัญชี', img: '13' },
    { name: 'ประกันภัย', img: '14' },
    { name: 'ราชการ/บริการสาธารณะ', img: '15' },
    { name: 'วิทยาศาสตร์ /Lab/วิจัยและพัฒนา', img: '16' },
    { name: 'การผลิต / QA&QC', img: '17' },
    { name: 'สุขภาพ /โภชนาการ/ความงาม', img: '18' },
    { name: 'อสังหาริมทรัพย์', img: '19' },
    { name: 'ออกแบบ/เขียนแบบ/กราฟฟิค/ช่างภาพ', img: '20' },
    { name: 'การศึกษา/ วิชาการ', img: '21' },
    { name: 'อื่นๆ', img: '22' },
    { name: 'E-commerce', img: '23' },
    { name: 'สถาปนิก / มัณฑนากร ', img: '24' },
    { name: 'กฎหมาย', img: '25' },
    { name: 'บันเทิง/นักแสดง/นักร้อง', img: '26' },
    { name: 'เจ้าหน้าที่ความปลอดภัย(จป.)/สิ่งแวดล้อม', img: '27' },
    { name: 'ช่าง/ช่างเทคนิค/อิเลคโทรนิค', img: '28' },
    { name: 'นักเขียน/บรรณาธิการ/นักแปลภาษา', img: '29' },
    { name: 'บุคคล/ฝึกอบรม', img: '30' },
    { name: 'แม่บ้าน/พี่เลี้ยง/คนสวน/รปภ.', img: '31' },
    { name: 'บริการลูกค้า/ลูกค้าสัมพันธ์/Call Center', img: '32' },
    { name: 'มัคคุเทศก์/จองห้อง/จองตั๋ว', img: '33' },
    { name: 'เลขานุการ', img: '34' },
    { name: 'นักวิเคราะห์/เศรษฐศาสตร์', img: '35' },
    { name: 'คนขับรถ', img: '36' },
    { name: 'เสื้อผ้า/สิ่งทอ/ช่างแพทเทิร์น', img: '37' },
    { name: 'อัญมณีและเครื่องประดับ', img: '38' },
    { name: 'อาหาร/เครื่องดื่ม/กุ๊ก/บาร์เทนเดอร์/พนักงานเสิร์ฟ', img: '39' },
    { name: 'Part-time/พนักงานสัญญาจ้าง', img: '40' },
    { name: 'มนุษยศาสตร์/ล่าม', img: '41' },
    { name: 'ธรณีวิทยาและป่าไม้', img: '42' },
    { name: 'ภูมิศาสตร์/แผนที่/GIS/ผังเมือง', img: '43' },
    { name: 'ธุรกิจการบิน', img: '44' },
    { name: 'พัฒนาธุรกิจและพัฒนาองค์กร', img: '45' },
    { name: 'ห้างสรรพสินค้า', img: '46' },
    { name: 'เจ้าหน้าที่เร่งรัดหนี้สิน', img: '47' },
    { name: 'ขาย', img: '48' },
    { name: 'ขาย', img: '49' },

]
workHotCareers.forEach((workHotCareer) => {
    gridHotCareer += `<li>
    <a href="javascript:void(0)" onclick="link()">
        <figure class="mb-1"><img src="assets/images/icon${workHotCareer.img}.png" alt=""></figure>
        <div>
            <h6 class="fontSubText textBlackGray careerEllipsis">${workHotCareer.name}</h6>
            <p class="fontMark textRed">96,969 ตำแหน่งงาน</p>
        </div>
    </a>
</li>`
})

document.getElementsByClassName('gridHotCareer')[0].innerHTML = gridHotCareer

var gridPartTime = ''
let workPartTimes = [
    { name: 'sell', img: '1', link: 'searchWork/premiumUrgent.html' },
    { name: 'Payroll Specialist (ปฏิบัติงานที่ The Offices at Central World) Salary 35,000 - 40,000 Baht', img: '2', link: 'searchWork/premiumUrgent.html' },
    { name: 'Sales Representative', img: '3', link: 'searchWork/premiumUrgent.html' },
    { name: 'เจ้าหน้าที่ฝ่ายการตลาด (marketing officer)', img: '4', link: 'searchWork/premiumUrgent.html' },
    { name: 'Mobile/Web Application Developer', img: '5', link: 'searchWork/premiumUrgent.html' },
    { name: 'ผู้จัดการขายผลิตภัณฑ์อาหารสัตว์เลี้ยง', img: '6', link: 'searchWork/premiumUrgent.html' },
    { name: 'Administrative Officer General Coordinator', img: '7', link: 'searchWork/premiumUrgent.html' }
]
workPartTimes.forEach((workPartTime) => {
    gridPartTime += `<li>
    <a href="${workPartTime.link}" target="_blank">
        <figure class="p-2"><img src="assets/images/lo${workPartTime.img}.jpg" alt=""></figure>
        <p class="careerEllipsis clWhitetGray p-2">${workPartTime.name}</p>
    </a>
</li>`
})

document.getElementsByClassName('gridPartTime')[0].innerHTML = gridPartTime

var gridHotNew = ''
let workHotNews = [
    {
        img: '1',
        head: 'JOBBKK.COM ภาคใต้ ร่วมเป็นเจ้าภาพกิจกรรมเทศน์มหาชาติ ชมรมศิลปฯ ราชภัฏนครฯ',
        sub: `ไม่ได้จะหางานตอนนี้ ต้องอัปเดตเรซูเม่ด้วยเหรอ ? เรียกได้ว่าเป็นการวางแผนรายได้ในอนาคตของคุณอย่างมีคุณภาพสูงสุดเลยครับ`,
        class1: 'row2',
        class3: ''
    },
    {
        img: '2',
        head: 'อยาก Up เงินเดือน ต้อง Update เรซูเม่ >> เรซูเม่ที่ Update ทุก 6 เดือน สามารถเรียกเงินเดือนสูงขึ้นได้ 20 เปอร์เซ็นต์',
        sub: `เว็บไซต์ จ็อบบีเคเค ดอท คอม สำนักงานภาคใต้ ร่วมเป็นเจ้าภาพและสบทบกิจกรรมเทศน์มหาชาติพระเวสสันดรชาดก ๑๓ กัณฑ์ 
                ๑,๐๐๐ พระคาถา  ณ มหาวิทยาลัยราชภัฏนครศรีธรรมราช เพื่อสืบสานวัฒนธรรมอันดีงานในส่วนภูมิภาค`,
        class1: '',
        class3: 'hotSubEllipsis'
    },
    {
        img: '3',
        head: 'www.jobbkk.com บริษัท จัดหางาน จ๊อบบีเคเค ร่วมมือด้านสหกิจศึกษา กับ มทส. เตรียมความพร้อมนักศึกษา ก่อนออกสู่สถานประกอบการยุคดิจิทัล',
        sub: `รองศาสตราจารย์ เรืออากาศเอก ดร.กนต์ธร ชำนิประศาสน์ รองอธิการบดีฝ่ายวิชาการและพัฒนาความเป็นสากล 
        มหาวิทยาลัยเทคโนโลยีสุรนารี (มทส.) เป็นประธานในพิธีลงนามบันทึกข้อตกลงความร่วมมือทางวิชาการระหว่าง 
        มหาวิทยาลัย กับ บริษัท จัดหางาน จ๊อบบีเคเค ดอท คอม จำกัด (www.jobbkk.com) โดย นายทัศไนย เหมือนเสน ผู้ช่วยกรรมการผู้จัดการ`,
        class1: '',
        class3: 'hotSubEllipsis'
    },
    {
        img: '4',
        head: '“ความสำเร็จสูงสุด” ในชีวิตคุณคืออะไร คำถามชวนตกม้าตาย...ตอบยังไงดี',
        sub: `ถามมาแบบนี้ คำตอบต้องสวยหรู ยิ่งใหญ่ขนาดไหนกัน ถึงจะได้ใจคนสัมภาษณ์`,
        class1: '',
        class3: 'hotSubEllipsis'
    },
    {
        img: '5',
        head: 'JOBBKK.COM ร่วมจัดงาน KMITL career exploration 2020. GO beyond the limit',
        sub: `เมื่อวันที่ 20 - 21 กุมภาพันธ์ 2563  บริษัท จัดหางาน จ๊อบบีเคเค ดอท คอม จำกัด ร่วมกับ 
        สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง จัดงาน KMITL career exploration 2020. GO beyond the limit 
        “ที่นี่ตอบโจทย์ งานยุค Disruption” ณ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง หอประชุมเจ้าพระยาสุรวงษ์ไวยวัฒน์ (วร บุนนาค)`,
        class1: '',
        class3: 'hotSubEllipsis'
    },
    {
        img: '6',
        head: 'สมัครไปตั้งนานแล้ว ไม่เห็นมี HR ติดต่อมาเลย คุณขายของในเรซูเม่รึยัง ?',
        sub: `HR จะติดต่อมาทันทีครับ ถ้าคุณเอา “ความสามารถ” ออกมา “ขาย” ในเรซูเม่ มันคือส่วนของ “ประสบการณ์” ที่คุณต้องบอกว่า`,
        class1: '',
        class3: 'hotSubEllipsis'
    },
    {
        img: '7',
        head: 'ทำไมคุณถึงอยากร่วมงานกับเรา จริงใจ VS โลกสวย ตอบแบบไหนถึงโดนใจคนสัมภาษณ์',
        sub: `จริงใจเลย กำลังหางาน อยากมีรายได้ มันคือเรื่องนี้เลยจริงๆ ถ้าแบบโลกสวย ก็ประมาณว่า อยากทำงานกับบริษัทที่มั่นคง 
        มีชื่อเสียง อยากนำความสามารถออกมาพัฒนาบริษัทและพัฒนาตัวเอง`,
        class1: '',
        class3: 'hotSubEllipsis'
    },
]
workHotNews.forEach((workHotNew) => {
    gridHotNew += `<li class="${workHotNew.class1}">
    <a href="javascript:void(0)" onclick="link()">
        <figure class="mb-3"><img src="assets/images/new${workHotNew.img}.jpg" alt=""></figure>
        <section class="flexBegin">
            <div>
                <h6 class="hotEllipsis font-weight-bold mb-2">${workHotNew.head}</h6>
                <p class="${workHotNew.class3} mb-2">${workHotNew.sub}</p>
            </div>
            <div class="readNews"><p>อ่านต่อ</p></div>
        </section>
    </a>
</li>`
})

document.getElementsByClassName('gridHotNew')[0].innerHTML = gridHotNew

var best = ''
let workBests = [
    '1', '2', '3', '4', '5', '6', '7', '1', '2', '3', '4', '5', '6', '7', '1', '2', '3', '4', '5', '6', '7', 
    '1', '2', '3', '4', '5', '6', '7'
]
for (let workBest = 0; workBest < workBests.length; workBest++) {
    best += `<li>
    <a href="javascript:void(0)" onclick="link()"><img src="assets/images/logo${workBests[workBest]}.jpg" alt=""></a>
    </li>`
}

document.getElementsByClassName('gridBest')[0].innerHTML = best

var part = ''
let workparts = [
    '1', '1', '1', '1'
]
for (let workpart = 0; workpart < workparts.length; workpart++) {
    part += `<li>
    <a href="javascript:void(0)" onclick="link()"><img src="assets/images/part${workparts[workpart]}.jpg" alt=""></a>
    </li>`
}

document.getElementsByClassName('gridPart')[0].innerHTML = part

// ตัดคำ hot career
$(".careerEllipsis").dotdotdot({
    height: 72,
    fallbackToLetter: true,
    watch: true,
});

// ตัดคำ hot news
$(".hotEllipsis").dotdotdot({
    height: 48,
    fallbackToLetter: true,
    watch: true,
});

$(".hotSubEllipsis").dotdotdot({
    height: 48,
    fallbackToLetter: true,
    watch: true,
});

// ปุ่ม slide hot career
$('#buttonScrollLeft').click(function () {
    event.preventDefault();
    $('#buttonScroll').animate({
        scrollLeft: "-=" + ($("#buttonScroll").width() * 90 / 95)
    }, "1000");
});

$('#buttonScrollRight').click(function () {
    event.preventDefault();
    $('#buttonScroll').animate({
        scrollLeft: "+=" + ($("#buttonScroll").width() * 90 / 95)
    }, "1000");
});