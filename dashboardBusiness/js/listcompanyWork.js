var gridWorks = [
    {
        img: '1',
        career: 'Web Designer',
        position: 'Graphic Designer',
        area: 'กรุงเทพมหานคร',
        money: '20,000',
        exp: 'ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ',
        transport: 'MRT ลาดพร้าว / BTS สะพานควาย',
        time: '3 วันที่แล้ว',
        target: 'ด่วน',
        color: 'urgent'
    },
    {
        img: '1',
        career: 'Video Designer',
        position: 'Super Designer',
        area: 'สมุทรปราการ',
        money: '40,000',
        exp: 'ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ',
        transport: 'MRT ลาดพร้าว / BTS สะพานควาย',
        time: '7 วันที่แล้ว',
        target: 'ด่วน',
        color: 'urgent'
    },
    {
        img: '1',
        career: 'XD Designer',
        position: 'Train Super Designer',
        area: 'เชียงใหม่',
        money: '50,000',
        exp: 'ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ',
        transport: 'MRT ลาดพร้าว / BTS สะพานควาย',
        time: '1 วันที่แล้ว',
        target: 'ด่วน',
        color: 'urgent'
    },
    {
        img: '1',
        career: 'ผู้จัดการสาขา',
        position: 'Event Designer',
        area: 'เชียงราย',
        money: '100,000',
        exp: 'ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ',
        transport: 'MRT ลาดพร้าว / BTS สะพานควาย',
        time: '12 วันที่แล้ว',
        target: 'ใหม่',
        color: 'new'
    },
    {
        img: '1',
        career: 'เจ้าหน้าที่การเงิน',
        position: 'เจ้าหน้าที่การเงิน Designer',
        area: 'สมุทรปราการ',
        money: '10,000',
        exp: 'ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ',
        transport: 'MRT ลาดพร้าว / BTS สะพานควาย',
        time: '30 วันที่แล้ว',
        target: 'ด่วน',
        color: 'urgent'
    },
    {
        img: '1',
        career: 'พนักงานเก็บตัวอย่างน้ำตาล inspector (receiving sugar inspection)',
        position: 'พนักงานเก็บตัวอย่างน้ำตาล Designer',
        area: 'ภูเก็ต',
        money: '80,000',
        exp: 'ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ',
        transport: 'MRT ลาดพร้าว / BTS สะพานควาย',
        time: '3 วันที่แล้ว',
        target: 'ใหม่',
        color: 'new'
    },
    {
        img: '1',
        career: 'Web Designer',
        position: 'Graphic Designer',
        area: 'กรุงเทพมหานคร',
        money: '20,000',
        exp: 'ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ',
        transport: 'MRT ลาดพร้าว / BTS สะพานควาย',
        time: '3 วันที่แล้ว',
        target: 'ด่วน',
        color: 'urgent'
    },
    {
        img: '1',
        career: 'Video Designer',
        position: 'Super Designer',
        area: 'สมุทรปราการ',
        money: '40,000',
        exp: 'ยินดีรับนักศึกษาจบใหม่ / ผู้ไม่มีประสบการณ์ / ผู้พิการ',
        transport: 'MRT ลาดพร้าว / BTS สะพานควาย',
        time: '7 วันที่แล้ว',
        target: 'ใหม่',
        color: 'new'
    },
]

var gridcompanyWork = ''

gridWorks.forEach((gridWork) => [
    gridcompanyWork += `<a href="premiumJobDetail.html" target="_blank">
    <div class="borderStyle borderRadiusStyle p-3 companyHeight">
        <div class="logoCompanyProfile mb-3">
            <figure><img src="images/lo${gridWork.img}.jpg" alt=""></figure>
            <p class="${gridWork.color}">${gridWork.target}</p>
        </div>

        <div class="listAlign">
            <p><span class="textRed font-weight-bold">ชื่อตำแหน่งงาน : </span>${gridWork.position}</p>
            <h6><span class="textRed font-weight-bold">สาขาอาชีพ : </span>${gridWork.career}</h6>

            <div class="lineDashUrgent"></div>

            <p><span class="font-weight-bold">สถานที่ปฏิบัติงาน : </span>${gridWork.area}</p>
            <p><span class="font-weight-bold">เงินเดือน(บาท) : </span>${gridWork.money}</p>
            <div>
                <p>${gridWork.exp}</p>
                <p>${gridWork.transport}</p>
            </div>
            <div>
                <p class="fontSubText textSky"><i class="far fa-clock"></i> ${gridWork.time}</p>
            </div>
        </div>
    </div>
</a>`
])

document.getElementsByClassName('gridViewView')[0].innerHTML = gridcompanyWork

var listCompanyWork = ''

gridWorks.forEach((gridWork) => {
    listCompanyWork += `<div class="borderStyle borderRadiusStyle p-3 gridLineView">
    <div class="logoCompanyProfile mb-3">
        <figure><img src="images/lo${gridWork.img}.jpg" alt=""></figure>
    </div>

    <div class="listAlign">
        <h6><span class="textRed font-weight-bold">สาขาอาชีพ :
            </span>${gridWork.career}</h6>
        <p><span class="textRed font-weight-bold">ชื่อตำแหน่งงาน :
            </span>${gridWork.position} <span class="${gridWork.color}">${gridWork.target}</span></p>

        <p><span class="font-weight-bold">สถานที่ปฏิบัติงาน :
            </span>${gridWork.area}</p>
        <p><span class="font-weight-bold">เงินเดือน(บาท) :
            </span>${gridWork.money}</p>
        <div>
            <p>${gridWork.exp}</p>
            <p>${gridWork.transport}</p>
            <p class="fontSubText textSky"><i class="far fa-clock"></i>
                ${gridWork.time}</p>
        </div>
    </div>

    <div class="flexStep1">
        <section>
            <ul class="flexStep2">
                <li><button class="share" data-toggle="tooltip"
                        data-placement="bottom" title="แชร์ตำแหน่งงาน"><i
                            class="fas fa-share-alt"></i></button></li>
                <li>
                    <button class="save" data-toggle="tooltip"
                        data-placement="bottom" title="บันทึกงานไว้ดูภายหลัง"><i
                            class="fas fa-heart"></i>
                    </button>
                </li>
                <li><button class="applyNow">สมัครงานด่วน</button></li>
            </ul>
        </section>
        <div><a href="premiumJobDetail.html" target="_blank">อ่านรายละเอียดเพิ่มเติม</a></div>
    </div>
</div>`
})

document.getElementsByClassName('gridListView')[0].innerHTML = listCompanyWork

