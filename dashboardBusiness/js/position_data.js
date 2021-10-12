works = [
    {
        name: 'Customer Support (สัญญา 1 ปี)',
        detail: 'ติดต่อประสานงานกับลูกค้าทางโทรศัพท์ ดูแลเและให้คำแนะนำแก้ไขปัญหาให้กับลูกค้า ประสานงานกับบุคลากรภายในองค์กร จัดทำเอกสารตามทีได้รับมอบหมาย',
        money: '15,000 - 18,000',
        district: 'เขตราชเทวี',
        time: '1 ชั่วโมงที่แล้ว'
    },
    {
        name: 'Customer Support (สัญญา 1 ปี)',
        detail: 'ติดต่อประสานงานกับลูกค้าทางโทรศัพท์ ดูแลเและให้คำแนะนำแก้ไขปัญหาให้กับลูกค้า ประสานงานกับบุคลากรภายในองค์กร จัดทำเอกสารตามทีได้รับมอบหมาย',
        money: '15,000 - 18,000',
        district: 'เขตราชเทวี',
        time: '1 ชั่วโมงที่แล้ว'
    },
    {
        name: 'Customer Support (สัญญา 1 ปี)',
        detail: 'ติดต่อประสานงานกับลูกค้าทางโทรศัพท์ ดูแลเและให้คำแนะนำแก้ไขปัญหาให้กับลูกค้า ประสานงานกับบุคลากรภายในองค์กร จัดทำเอกสารตามทีได้รับมอบหมาย',
        money: '15,000 - 18,000',
        district: 'เขตราชเทวี',
        time: '1 ชั่วโมงที่แล้ว'
    },
    {
        name: 'Customer Support (สัญญา 1 ปี)',
        detail: 'ติดต่อประสานงานกับลูกค้าทางโทรศัพท์ ดูแลเและให้คำแนะนำแก้ไขปัญหาให้กับลูกค้า ประสานงานกับบุคลากรภายในองค์กร จัดทำเอกสารตามทีได้รับมอบหมาย',
        money: '15,000 - 18,000',
        district: 'เขตราชเทวี',
        time: '1 ชั่วโมงที่แล้ว'
    },
    {
        name: 'Customer Support (สัญญา 1 ปี)',
        detail: 'ติดต่อประสานงานกับลูกค้าทางโทรศัพท์ ดูแลเและให้คำแนะนำแก้ไขปัญหาให้กับลูกค้า ประสานงานกับบุคลากรภายในองค์กร จัดทำเอกสารตามทีได้รับมอบหมาย',
        money: '15,000 - 18,000',
        district: 'เขตราชเทวี',
        time: '1 ชั่วโมงที่แล้ว'
    },
]

let position_work = '';
position_work += `
${works.map (work => `
<div class="grid_position p-4 mb-3">
<figure><a href=""><img src="images/logo1.jpg" alt=""></a></figure>
<section>
    <article class="head_name_position mb-3">
        <div>
            <p class="font-weight-bold name_position"><a href="">${work.name}</a>
            </p>
            <div class="detail_position mb-3">
                <p>${work.detail}</p>
            </div>
            <p><span class="font-weight-bold">เงินเดือน(บาท) :</span> ${work.money}
            </p>
            <p><span class="font-weight-bold">กรุงเทพมหานคร :</span> ${work.district}</p>
        </div>
        <div class="time_position">
            <p><a href=""><i class="fas fa-clock"></i> ${work.time}</a> </p>
        </div>
    </article>

    <ul class="btn_position">
        <li><button data-toggle="modal" data-target="#modal_share"><i
                    class="fas fa-share-alt"></i> แชร์</button></li>
        <li><button class="get_work"><i class="fas fa-folder-open"></i> เก็บงาน</button></li>
        <li><button class="apply"><i class="fas fa-check-circle"></i> สมัครงาน</button>
        </li>
    </ul>
</section>                             
</div>
`).join('\n')}
`
document.querySelector('.position_work').innerHTML = position_work;