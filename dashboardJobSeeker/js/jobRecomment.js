var job_recomment = ''

let recomments = [
    {
        img: '1',
        name: 'พนักงานขายรถยนต์ (โชว์รูม เจริญนคร )'
    },
    {
        img: '2',
        name: 'ช่างซ่อมบำรุงรักษาอาคาร'
    },
    {
        img: '3',
        name: 'ผู้บริหารงานตัวถังและสี'
    },
    {
        img: '4',
        name: 'พนักงานขายรถยนต์ (โชว์รูม ประชาอุทิศ)'
    },
    {
        img: '5',
        name: 'ผู้บริหารงานบริการ'
    },
    {
        img: '6',
        name: 'เจ้าหน้าที่พัฒนาธุรกิจงานตัวถังและสี'
    },
    {
        img: '7',
        name: 'หัวหน้าทีมขาย'
    },
    {
        img: '1',
        name: 'พนักงานขายรถยนต์ (โชว์รูม ถนนจันทน์ )'
    },
];

job_recomment += `
<div class="lineDash"></div>
<h2 class="fontHead textRed mb-3">Job we recomment</h2>
<article class="gridRec mb-5">
    ${recomments.map(recomment => `
    <div class="borderStyle p-3 under">
        <a href="javascript:void(0)" onclick="link()" class="flexReco">
            <figure><img src="images/lo${recomment.img}.jpg" alt=""></figure>
            <div>
                <h6 class="cutCut">${recomment.name}</h6>
                <p class="cutCut mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur ullam,
                    iure natus necessitatibus itaque expedita numquam molestias, aliquid nihil
                    est cupiditate similique quisquam qui ipsa beatae, enim accusamus earum
                    deserunt.</p>
                <p class="fontMark"><span class="date"> 10 ตุลาคม 2020</span</p>
            </div>
        </a>
    </div>
    `).join('\n')}      
</article>

<div class="readNews">
    <a href="">ดูทั้งหมด</a>
</div>`

document.querySelector('#job_recomment').innerHTML = job_recomment;