var branch = ''
let branchIMs = [
    {
        img: '1',
        name: 'เอ็กซ์ตร้า',
        target1: 'ขนาด : 5,000-10,000 ตรม.',
        target2: 'จุดหมายในการช๊อปปิ้ง : ซื้อของครบในที่เดียว',
        target3: 'สินค้า : อาหาร 22,000 รายการ / ของใช้ 29,000 รายการ',
        target4: 'ส่วนศูนย์การค้า : 5,000-10,000 ตรม.',
        circle: '<i class="fas fa-circle"></i>'
    },
    {
        img: '2',
        name: 'ไฮเปอร์มาร์เก็ต',
        target1: 'ขนาด : 7,000-10,000 ตรม.',
        target2: 'จุดหมายในการช๊อปปิ้ง : ซื้อของครบในที่เดียว',
        target3: 'สินค้า : อาหาร 12,000 รายการ / ของใช้ 24,000 รายการ',
        target4: 'ส่วนศูนย์การค้า : 7,000-10,000 ตรม.',
        circle: '<i class="fas fa-circle"></i>'
    },
    {
        img: '3',
        name: 'เอ็กซ์เพรส',
        target1: 'ขนาด : 2,000-5,000 ตรม.',
        target2: 'จุดหมายในการช๊อปปิ้ง : ซื้อของครบในที่เดียว',
        target3: 'สินค้า : อาหาร 2,000 รายการ / ของใช้ 9,000 รายการ',
        target4: 'ส่วนศูนย์การค้า : 2,000-5,000 ตรม.',
        circle: '<i class="fas fa-circle"></i>'
    }, {
        img: '1',
        name: 'เอ็กซ์ตร้า',
        target1: 'ขนาด : 5,000-10,000 ตรม.',
        target2: 'จุดหมายในการช๊อปปิ้ง : ซื้อของครบในที่เดียว',
        target3: 'สินค้า : อาหาร 22,000 รายการ / ของใช้ 29,000 รายการ',
        target4: 'ส่วนศูนย์การค้า : 5,000-10,000 ตรม.',
        circle: '<i class="fas fa-circle"></i>'
    },
    {
        img: '2',
        name: 'ไฮเปอร์มาร์เก็ต',
        target1: 'ขนาด : 7,000-10,000 ตรม.',
        target2: 'จุดหมายในการช๊อปปิ้ง : ซื้อของครบในที่เดียว',
        target3: 'สินค้า : อาหาร 12,000 รายการ / ของใช้ 24,000 รายการ',
        target4: 'ส่วนศูนย์การค้า : 7,000-10,000 ตรม.',
        circle: '<i class="fas fa-circle"></i>'
    },
    {
        img: '3',
        name: 'เอ็กซ์เพรส',
        target1: 'ขนาด : 2,000-5,000 ตรม.',
        target2: 'จุดหมายในการช๊อปปิ้ง : ซื้อของครบในที่เดียว',
        target3: 'สินค้า : อาหาร 2,000 รายการ / ของใช้ 9,000 รายการ',
        target4: 'ส่วนศูนย์การค้า : 2,000-5,000 ตรม.',
        circle: '<i class="fas fa-circle"></i>'
    }
]
branchIMs.forEach((branchIM) => {
    branch += `<section class="gridIm mb-3">
    <figure><img src="images/ab${branchIM.img}.jpg" alt=""></figure>
    <div>
        <p class="fontSubHead font-weight-bold">${branchIM.name}</p>
        <ul>
            <li class="flexCircle"><span class="circle">${branchIM.circle}</span> ${branchIM.target1}</li>
            <li class="flexCircle"><span class="circle">${branchIM.circle}</span> ${branchIM.target2}</li>
            <li class="flexCircle"><span class="circle">${branchIM.circle}</span> ${branchIM.target3}</li>
            <li class="flexCircle"><span class="circle">${branchIM.circle}</span> ${branchIM.target4}</li>
        </ul>
    </div>
</section>`

    branch += `<div class="lineDash"></div>`
})

document.getElementById('branch').innerHTML = branch