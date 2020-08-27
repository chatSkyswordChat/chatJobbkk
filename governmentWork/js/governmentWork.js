let governments = [
    {
        img: '1',
        head: 'JOBBKK.COM ภาคใต้ ร่วมเป็นเจ้าภาพกิจกรรมเทศน์มหาชาติ ชมรมศิลปฯ ราชภัฏนครฯ',
        sub: `ไม่ได้จะหางานตอนนี้ ต้องอัปเดตเรซูเม่ด้วยเหรอ ? เรียกได้ว่าเป็นการวางแผนรายได้ในอนาคตของคุณอย่างมีคุณภาพสูงสุดเลยครับ`,
        class1: 'row2'
    },
    {
        img: '2',
        head: 'อยาก Up เงินเดือน ต้อง Update เรซูเม่ >> เรซูเม่ที่ Update ทุก 6 เดือน สามารถเรียกเงินเดือนสูงขึ้นได้ 20 เปอร์เซ็นต์',
        sub: `เว็บไซต์ จ็อบบีเคเค ดอท คอม สำนักงานภาคใต้ ร่วมเป็นเจ้าภาพและสบทบกิจกรรมเทศน์มหาชาติพระเวสสันดรชาดก ๑๓ กัณฑ์ 
                ๑,๐๐๐ พระคาถา  ณ มหาวิทยาลัยราชภัฏนครศรีธรรมราช เพื่อสืบสานวัฒนธรรมอันดีงานในส่วนภูมิภาค`,
        class1: ''
    },
    {
        img: '3',
        head: 'www.jobbkk.com บริษัท จัดหางาน จ๊อบบีเคเค ร่วมมือด้านสหกิจศึกษา กับ มทส. เตรียมความพร้อมนักศึกษา ก่อนออกสู่สถานประกอบการยุคดิจิทัล',
        sub: `รองศาสตราจารย์ เรืออากาศเอก ดร.กนต์ธร ชำนิประศาสน์ รองอธิการบดีฝ่ายวิชาการและพัฒนาความเป็นสากล 
        มหาวิทยาลัยเทคโนโลยีสุรนารี (มทส.) เป็นประธานในพิธีลงนามบันทึกข้อตกลงความร่วมมือทางวิชาการระหว่าง 
        มหาวิทยาลัย กับ บริษัท จัดหางาน จ๊อบบีเคเค ดอท คอม จำกัด (www.jobbkk.com) โดย นายทัศไนย เหมือนเสน ผู้ช่วยกรรมการผู้จัดการ`,
        class1: ''
    },
    {
        img: '4',
        head: '“ความสำเร็จสูงสุด” ในชีวิตคุณคืออะไร คำถามชวนตกม้าตาย...ตอบยังไงดี',
        sub: `ถามมาแบบนี้ คำตอบต้องสวยหรู ยิ่งใหญ่ขนาดไหนกัน ถึงจะได้ใจคนสัมภาษณ์`,
        class1: ''
    },
    {
        img: '5',
        head: 'JOBBKK.COM ร่วมจัดงาน KMITL career exploration 2020. GO beyond the limit',
        sub: `เมื่อวันที่ 20 - 21 กุมภาพันธ์ 2563  บริษัท จัดหางาน จ๊อบบีเคเค ดอท คอม จำกัด ร่วมกับ 
        สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง จัดงาน KMITL career exploration 2020. GO beyond the limit 
        “ที่นี่ตอบโจทย์ งานยุค Disruption” ณ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง หอประชุมเจ้าพระยาสุรวงษ์ไวยวัฒน์ (วร บุนนาค)`,
        class1: ''
    },
    {
        img: '6',
        head: 'สมัครไปตั้งนานแล้ว ไม่เห็นมี HR ติดต่อมาเลย คุณขายของในเรซูเม่รึยัง ?',
        sub: `HR จะติดต่อมาทันทีครับ ถ้าคุณเอา “ความสามารถ” ออกมา “ขาย” ในเรซูเม่ มันคือส่วนของ “ประสบการณ์” ที่คุณต้องบอกว่า`,
        class1: ''
    },
    {
        img: '7',
        head: 'ทำไมคุณถึงอยากร่วมงานกับเรา จริงใจ VS โลกสวย ตอบแบบไหนถึงโดนใจคนสัมภาษณ์',
        sub: `จริงใจเลย กำลังหางาน อยากมีรายได้ มันคือเรื่องนี้เลยจริงๆ ถ้าแบบโลกสวย ก็ประมาณว่า อยากทำงานกับบริษัทที่มั่นคง 
        มีชื่อเสียง อยากนำความสามารถออกมาพัฒนาบริษัทและพัฒนาตัวเอง`,
        class1: ''
    },
]

var gridLowGovernment = ''

governments.forEach((government) => {
    gridLowGovernment += `<li>
    <a href="javascript:void(0)" onclick="link()">
        <figure class="mb-3"><img src="images/new${government.img}.jpg" alt=""></figure>
        <section class="flexBegin">
            <div>
                <h6 class="cutHead font-weight-bold mb-2">${government.head}</h6>
                <p class="cutSub mb-2">${government.sub}</p>
            </div>
            <div class="readNews"><p>สมัครงาน</p></div>
        </section>
    </a>
</li>`
})

document.getElementsByClassName('gridLowGovernment')[0].innerHTML = gridLowGovernment

// ตัดคำ งานราชการ
$(".cutHead").dotdotdot({
    height: 48,
    fallbackToLetter: true,
    watch: true,
});

$(".cutSub").dotdotdot({
    height: 48,
    fallbackToLetter: true,
    watch: true,
});