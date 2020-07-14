$(() => {
    let navbar = ''

    let menuAll = ($(location).attr('href').split('/').length == 7) ? '' : '../'
    let menus = [
        { name: 'หน้าแรก', linked: menuAll + 'index.html', classDropdown: '', arrowDown: '', action: '' },
        {
            name: 'ค้นหางาน', linked: menuAll + 'searchWork/searchWork.html', classDropdown: 'dropdown dropdown-toggle',
            arrowDown: '<i class="fa fa-angle-down"></i>',
            action: `aria-haspopup="true" aria-expanded="false"`,
            dropdown: [
                { name: 'กรุงเทพปริมณฑล', linked: menuAll + 'searchWork/searchWork.html' },
                { name: 'งานใกล้รถไฟฟ้า', linked: menuAll + 'searchWork/searchWork.html' },
                { name: 'งานตามสาขาอาชีพ', linked: menuAll + 'searchWork/searchWork.html' },
                { name: 'บริษัทชั้นนำ', linked: menuAll + 'searchWork/searchWork.html' }
            ]
        },
        {
            name: 'ค้นหางานภูมิภาค', linked: menuAll + 'region/regionWork.html', classDropdown: 'dropdown dropdown-toggle',
            arrowDown: '<i class="fa fa-angle-down"></i>',
            action: `aria-haspopup="true" aria-expanded="false"`,
            dropdown: [
                { name: 'ภาคกลาง', linked: menuAll + 'region/regionWork.html' },
                { name: 'ภาคตะวันออก', linked: menuAll + 'region/regionWork.html' },
                { name: 'ภาคเหนือ', linked: menuAll + 'region/regionWork.html' },
                { name: 'ภาคอีสาน', linked: menuAll + 'region/regionWork.html' },
                { name: 'ภาคใต้', linked: menuAll + 'region/regionWork.html' },
                { name: 'ภาคตะวันตก', linked: menuAll + 'region/regionWork.html' }
            ]
        },
        { name: 'ค้นหางานราชการ', linked: menuAll + 'searchWork/searchWork.html', classDropdown: '', arrowDown: '', action: '' },
        {
            name: 'บทความและคลังความรู้', linked: menuAll + 'knowledgeBase/knowledge.html', classDropdown: 'dropdown dropdown-toggle',
            arrowDown: '<i class="fa fa-angle-down"></i>',
            action: `aria-haspopup="true" aria-expanded="false"`,
            dropdown: [
                { name: 'คลังความรู้', linked: menuAll + 'knowledgeBase/knowledge.html' },
                { name: 'HR Society', linked: menuAll + 'knowledgeBase/knowledge.html' },
                { name: 'บุคคลสร้างแรงบันดาลใจ', linked: menuAll + 'knowledgeBase/knowledge.html' },
                { name: 'วาไรตี้', linked: menuAll + 'knowledgeBase/knowledge.html' }
            ]
        },
        {
            name: 'ข่าวและกิจกรรม', linked: menuAll + 'knowledgeBase/newsActivities.html', classDropdown: 'dropdown dropdown-toggle',
            arrowDown: '<i class="fa fa-angle-down"></i>',
            action: `aria-haspopup="true" aria-expanded="false"`,
            dropdown: [
                { name: 'ข่าวประชาสัมพันธ์', linked: menuAll + 'knowledgeBase/newsActivities.html' },
                { name: 'กิจกรรม', linked: menuAll + 'knowledgeBase/newsActivities.html' },
                { name: 'จ๊อบแฟร์ออนไลน์', linked: menuAll + 'knowledgeBase/newsActivities.html' }
            ]
        },
        {
            name: 'สำหรับผู้ประกอบการ', linked: menuAll + 'searchHistory/searchHistory.html', classDropdown: 'dropdown dropdown-toggle',
            arrowDown: '<i class="fa fa-angle-down"></i>',
            action: `aria-haspopup="true" aria-expanded="false"`,
            dropdown: [
                { name: 'ค้นหาประวัติ', linked: menuAll + 'searchHistory/searchHistory.html' },
                { name: 'อัตราค่าโฆษณา', linked: menuAll + 'searchHistory/searchHistory.html' },
                { name: 'วิธีการชำระเงิน', linked: menuAll + 'searchHistory/searchHistory.html' }
            ]
        },
        {
            name: 'เกี่ยวกับจ็อบบีเคเค', linked: menuAll + 'about/about.html', classDropdown: 'dropdown dropdown-toggle',
            arrowDown: '<i class="fa fa-angle-down"></i>',
            action: `aria-haspopup="true" aria-expanded="false"`,
            dropdown: [
                { name: 'ค้นหาประวัติ', linked: menuAll + 'about/about.html' },
                { name: 'อัตราค่าโฆษณา', linked: menuAll + 'about/about.html' },
                { name: 'วิธีการชำระเงิน', linked: menuAll + 'about/about.html' }
            ]
        },

    ]

    let path = $(location).attr('href').split("/");
    console.log(path);
    let last_part = path[path.length - 1];

    navbar += `<ul class="nav navbar-nav navbarMenu">`
    menus.forEach((menu) => {
        let classActive = ''
        if (menu.linked.includes(last_part)) {
            classActive = 'active'
        }
        navbar += `<li class="${classActive}${menu.classDropdown}" ${menu.action}>`
        navbar += `<a href="${menu.linked}">${menu.name}`
        navbar += ` ${menu.arrowDown}`
        navbar += `</a>`

        if (menu.dropdown != null && menu.dropdown != "") {
            navbar += `<ul class="dropdown-menu" role="menu">`
            menu.dropdown.forEach((dropdownSub) => {
                navbar += `<li>`
                navbar += `<a href="${dropdownSub.linked}">${dropdownSub.name}`
                navbar += `</a>`
                navbar += `</li>`
            })
            navbar += `</ul>`
        }
        navbar += `</li>`
    })
    navbar += `</ul>`

    $('.bgnavbarMenu').html(navbar)
})