let menuDashboard = ''

menuDashboard += `<article class="navMenuBusiness">
                    <h2 class="fontSubHead">เมนูสำหรับผู้ประกอบการ</h2>
                    <div id="toggleMenuBusiness"><button><i class="fas fa-bars"></i></button></div>
                </article>`
let dashboards = [
    {
        name: 'หน้าสมาชิก',
        link: 'index.html',
        img: '01',
        arrow: ''
    },
    {
        name: 'ประกาศงาน',
        link: 'javascript:void(0)',
        img: '02',
        arrow: '<i class="fas fa-chevron-down"></i>',
        dashboardDropdowns: [
            {
                name: 'ประกาศตำแหน่งงาน',
                link: '',
                arrowIn: '<i class="fas fa-chevron-right"></i>'
            },
            {
                name: 'อัพเดตตำแหน่งงาน',
                link: '',
                arrowIn: '<i class="fas fa-chevron-right"></i>'
            },
            {
                name: 'โปรโมทตำแหน่งงาน',
                link: '',
                arrowIn: '<i class="fas fa-chevron-right"></i>'
            },
            {
                name: 'ตำแหน่งงานที่ลบ',
                link: '',
                arrowIn: '<i class="fas fa-chevron-right"></i>'
            }
        ]
    },
    {
        name: 'จัดการใบสมัครงาน iCMS',
        link: 'javascript:void(0)',
        img: '03',
        arrow: ''
    },
    {
        name: 'นัดสัมภาษณ์งาน',
        link: 'javascript:void(0)',
        img: '04',
        arrow: ''
    },
    {
        name: 'Newjobber',
        link: 'javascript:void(0)',
        img: '05',
        arrow: '<i class="fas fa-chevron-down"></i>',
        dashboardDropdowns: [
            {
                name: 'เข้าสู่เว็บไซต์ Newjobber',
                link: 'javascript:void(0)',
                arrowIn: '<i class="fas fa-chevron-right"></i>'
            },
            {
                name: 'จัดการใบสมัครงาน (ICMS)',
                link: 'javascript:void(0)',
                arrowIn: '<i class="fas fa-chevron-right"></i>'
            },
            {
                name: 'ขั้นตอนการนัดสัมภาษณ์',
                link: 'javascript:void(0)',
                arrowIn: '<i class="fas fa-chevron-right"></i>'
            },
            {
                name: 'ใบสมัครงานที่เลือก',
                link: 'javascript:void(0)',
                arrowIn: '<i class="fas fa-chevron-right"></i>'
            },
            {
                name: 'ประวัติการเปิดใบสมัครงาน',
                link: 'javascript:void(0)',
                arrowIn: '<i class="fas fa-chevron-right"></i>'
            },
            {
                name: 'ใบสมัครงานที่ลบ',
                link: 'javascript:void(0)',
                arrowIn: '<i class="fas fa-chevron-right"></i>'
            },
            {
                name: 'คู่มือการใช้งาน',
                link: 'javascript:void(0)',
                arrowIn: '<i class="fas fa-chevron-right"></i>'
            }
        ]
    },
    {
        name: 'Interview Jobfair Online',
        link: 'javascript:void(0)',
        img: '06',
        arrow: ''
    },
    {
        name: 'Resume Quick',
        link: 'javascript:void(0)',
        img: '07',
        arrow: ''
    },
    {
        name: 'Easy SMS',
        link: 'javascript:void(0)',
        img: '08',
        arrow: ''
    },
    {
        name: 'การชำระเงิน',
        link: 'javascript:void(0)',
        img: '09',
        arrow: '<i class="fas fa-chevron-down"></i>',
        dashboardDropdowns: [
            {
                name: 'วิธีการชำระเงิน',
                link: '',
                arrowIn: '<i class="fas fa-chevron-right"></i>'
            },
            {
                name: 'รายการชำระเงิน',
                link: '',
                arrowIn: '<i class="fas fa-chevron-right"></i>'
            },
            {
                name: 'แจ้งการชำระเงิน',
                link: '',
                arrowIn: '<i class="fas fa-chevron-right"></i>'
            }
        ]
    },
    {
        name: 'รายงาน',
        link: 'javascript:void(0)',
        img: '10',
        arrow: ''
    },
    {
        name: 'ตั้งค่าบัญชีผู้ใช้',
        link: 'javascript:void(0)',
        img: '11',
        arrow: ''
    }
]
menuDashboard += `<ul class="menuStep1">`
dashboards.forEach((dashboard) => {
    menuDashboard += `<li>`
    menuDashboard += `<a href="${dashboard.link}">
                        <figure><img src="images/menuDashboardBusiness-${dashboard.img}.svg" alt=""> ${dashboard.name}</figure>
                        ${dashboard.arrow}
                    </a>`
    if (dashboard.dashboardDropdowns != null && dashboard.dashboardDropdowns != '') {
        dashboard.dashboardDropdowns.forEach((dashboardDropdown) => {
            menuDashboard += `<ul>`
            menuDashboard += `<li><a href="${dashboardDropdown.link}">
                ${dashboardDropdown.arrowIn} ${dashboardDropdown.name}</a></li>`
            menuDashboard += `</ul>`
        })
    }
    menuDashboard += `</li>`
})
menuDashboard += `</ul>`

document.querySelector('#menuDashboardBusiness').innerHTML = menuDashboard

// menu dashboard
let toggleMenuBusiness = document.querySelector('#toggleMenuBusiness')
let menuStep1 = document.querySelector('.menuStep1')
toggleMenuBusiness.addEventListener('click', function () {
    menuStep1.classList.toggle('show')
})

$('ul li').click(function () {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
})
// end menu dashboard