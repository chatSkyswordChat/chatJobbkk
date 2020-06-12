$(()=>{
    let navbar = ''

    let url = $(location).attr('href')
    let link = url.split('/')
    let active = link[ link.length - 1]

    let activePart = [
        { name : 'index.html'},
        { name : 'searchWork/searchWork.html'},
        { name : 'region/regionWork.html'},
        { name : 'civilService/civilService.html'},
        { name : 'knowledgeBase/knowledge.html'},
        { name : 'knowledgeBase/newsActivities.html'},
        { name : 'searchHistory/searchHistory.html'},
        { name : 'about/about.html'}
    ]

    let classActive = ''
    if( active === activePart){
        classActive = 'active'
    }

     if( link.length === 6 && 4){
        var home = 'index.html'
        var searchWork = 'searchWork/searchWork.html'
        var region = 'region/regionWork.html'
        var civilService = 'civilService/civilService.html'
        var knowledge = 'knowledgeBase/knowledge.html'
        var newsActivities = 'knowledgeBase/newsActivities.html'
        var searchHistory = 'searchHistory/searchHistory.html'
        var about = 'about/about.html'

        var navSearchWorks = [
            { name : 'กรุงเทพปริมณฑล', linked : 'searchWork/searchWork.html'},
            { name : 'งานใกล้รถไฟฟ้า', linked : 'searchWork/searchWork.html'},
            { name : 'งานตามสาขาอาชีพ', linked : 'searchWork/searchWork.html'},
            { name : 'บริษัทชั้นนำ', linked : 'searchWork/searchWork.html'}
        ]
        var navRegions = [
            { name : 'ภาคกลาง', linked : 'region/regionWork.html'},
            { name : 'ภาคตะวันออก', linked : 'region/regionWork.html'},
            { name : 'ภาคเหนือ', linked : 'region/regionWork.html'},
            { name : 'ภาคอีสาน', linked : 'region/regionWork.html'},
            { name : 'ภาคใต้', linked : 'region/regionWork.html'},
            { name : 'ภาคตะวันตก', linked : 'region/regionWork.html'}
        ]
        var navKnowledges = [
            { name : 'คลังความรู้', linked : 'knowledgeBase/knowledge.html'},
            { name : 'HR Society', linked : 'knowledgeBase/knowledge.html'},
            { name : 'บุคคลสร้างแรงบันดาลใจ', linked : 'knowledgeBase/knowledge.html'},
            { name : 'วาไรตี้', linked : 'knowledgeBase/knowledge.html'}
        ]
        var navNewsActivities = [
            { name : 'ข่าวประชาสัมพันธ์', linked : 'knowledgeBase/newsActivities.html'},
            { name : 'กิจกรรม', linked : 'knowledgeBase/newsActivities.html'},
            { name : 'จ๊อบแฟร์ออนไลน์', linked : 'knowledgeBase/newsActivities.html'}
        ]
        var navSearchHistorys = [
            { name : 'ค้นหาประวัติ', linked : 'searchHistory/searchHistory.html'},
            { name : 'อัตราค่าโฆษณา', linked : 'searchHistory/searchHistory.html'},
            { name : 'วิธีการชำระเงิน', linked : 'searchHistory/searchHistory.html'}
        ]
        var navAbouts = [
            { name : 'ติดต่อเรา', linked : 'about/about.html'},
            { name : 'ร่วมงานกับเรา', linked : 'about/about.html'},
            { name : 'แนะนำการใช้งานเว็บไซต์', linked : 'about/about.html'}
        ]
     }else{
        var home = '../index.html'
        var searchWork = '../searchWork/searchWork.html'
        var region = '../region/regionWork.html'
        var civilService = '../civilService/civilService.html'
        var knowledge = '../knowledgeBase/knowledge.html'
        var newsActivities = '../knowledgeBase/newsActivities.html'
        var searchHistory = '../searchHistory/searchHistory.html'
        var about = '../about/about.html'

        var navSearchWorks = [
            { name : 'กรุงเทพปริมณฑล', linked : '../searchWork/searchWork.html'},
            { name : 'งานใกล้รถไฟฟ้า', linked : '../searchWork/searchWork.html'},
            { name : 'งานตามสาขาอาชีพ', linked : '../searchWork/searchWork.html'},
            { name : 'บริษัทชั้นนำ', linked : '../searchWork/searchWork.html'}
        ]
        var navRegions = [
            { name : 'ภาคกลาง', linked : '../region/regionWork.html'},
            { name : 'ภาคตะวันออก', linked : '../region/regionWork.html'},
            { name : 'ภาคเหนือ', linked : '../region/regionWork.html'},
            { name : 'ภาคอีสาน', linked : '../region/regionWork.html'},
            { name : 'ภาคใต้', linked : '../region/regionWork.html'},
            { name : 'ภาคตะวันตก', linked : '../region/regionWork.html'}
        ]
        var navKnowledges = [
            { name : 'คลังความรู้', linked : '../knowledgeBase/knowledge.html'},
            { name : 'HR Society', linked : '../knowledgeBase/knowledge.html'},
            { name : 'บุคคลสร้างแรงบันดาลใจ', linked : '../knowledgeBase/knowledge.html'},
            { name : 'วาไรตี้', linked : '../knowledgeBase/knowledge.html'}
        ]
        var navNewsActivities = [
            { name : 'ข่าวประชาสัมพันธ์', linked : '../knowledgeBase/newsActivities.html'},
            { name : 'กิจกรรม', linked : '../knowledgeBase/newsActivities.html'},
            { name : 'จ๊อบแฟร์ออนไลน์', linked : '../knowledgeBase/newsActivities.html'}
        ]
        var navSearchHistorys = [
            { name : 'ค้นหาประวัติ', linked : '../searchHistory/searchHistory.html'},
            { name : 'อัตราค่าโฆษณา', linked : '../searchHistory/searchHistory.html'},
            { name : 'วิธีการชำระเงิน', linked : '../searchHistory/searchHistory.html'}
        ]
        var navAbouts = [
            { name : 'ติดต่อเรา', linked : '../about/about.html'},
            { name : 'ร่วมงานกับเรา', linked : '../about/about.html'},
            { name : 'แนะนำการใช้งานเว็บไซต์', linked : '../about/about.html'}
        ]
     }

     navbar +=`<ul class="nav navbar-nav navbarMenu">`
		    navbar +=`<li class="${classActive}">`
                navbar +=`<a href="${home}">หน้าแรก`
                navbar +=`</a>`
            navbar +=`</li>`

            navbar +=`<li class="dropdown ${classActive}">`
                navbar +=`<a href="${searchWork}" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">ค้นหางาน`
                    navbar +=` <i class="fa fa-angle-down">`
                    navbar +=`</i>`
                navbar +=`</a>`
                navbar +=`<ul class="dropdown-menu" role="menu">`
                navSearchWorks.forEach((navSearchWork)=>{
                    navbar +=`<li>`
                        navbar +=`<a href="${navSearchWork.linked}">${navSearchWork.name}`
                        navbar +=`</a>`
                    navbar +=`</li>`
                })
                navbar +=`</ul>`
            navbar +=`</li>`

            navbar +=`<li class="dropdown ${classActive}">`
                navbar +=`<a href="${region}" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">ค้นหางานภูมิภาค` 
                    navbar +=` <i class="fa fa-angle-down">`
                    navbar +=`</i>`
                navbar +=`</a>`
			    navbar +=`<ul class="dropdown-menu">`
                    navRegions.forEach((navRegion)=>{
                        navbar +=`<li>`
                            navbar +=`<a href="${navRegion.linked}">${navRegion.name}`
                            navbar +=`</a>`
                        navbar +=`</li>`
                    })
                navbar +=`</ul>`
            navbar +=`</li>`

            navbar +=`<li class="${classActive}">`
                navbar +=`<a href="${civilService}">ค้นหางานราชการ`
                navbar +=`</a>`
            navbar +=`</li>`
		
            navbar +=`<li class="dropdown ${classActive}">`
                navbar +=`<a href="${knowledge}" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">บทความและคลังความรู้` 
                    navbar +=` <i class="fa fa-angle-down">`
                    navbar +=`</i>`
                navbar +=`</a>`
                navbar +=`<ul class="dropdown-menu" role="menu">`
                navKnowledges.forEach((navKnowledge)=>{
                    navbar +=`<li>`
                        navbar +=`<a href="${navKnowledge.linked}">${navKnowledge.name}`
                        navbar +=`</a>`
                    navbar +=`</li>`
                })
            navbar +=`</ul>`
        navbar +=`</li>`

		navbar +=`<li class="dropdown ${classActive}">`
            navbar +=`<a href="${newsActivities}" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">ข่าวและกิจกรรม` 
                navbar +=` <i class="fa fa-angle-down">`
                navbar +=`</i>`
            navbar +=`</a>`
            navbar +=`<ul class="dropdown-menu" role="menu">`
            navNewsActivities.forEach((navNewsActivitie)=>{
                navbar +=`<li>`
                    navbar +=`<a href="${navNewsActivitie.linked}">${navNewsActivitie.name}`
                    navbar +=`</a>`
                navbar +=`</li>`
            })
			navbar +=`</ul>`
        navbar +=`</li>`
        
		navbar +=`<li class="dropdown ${classActive}">`
            navbar +=`<a href="${searchHistory}" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">สำหรับผู้ประกอบการ` 
                navbar +=` <i class="fa fa-angle-down">`
                navbar +=`</i>`
            navbar +=`</a>`
            navbar +=`<ul class="dropdown-menu" role="menu">`
            navSearchHistorys.forEach((navSearchHistory)=>{
                navbar +=`<li>`
                navbar +=`<a href="${navSearchHistory.linked}">${navSearchHistory.name}`
               navbar +=` </a>`
            navbar +=`</li>`
            })
			navbar +=`</ul>`
        navbar +=`</li>`
        
		navbar +=`<li class="dropdown ${classActive}">`
            navbar +=`<a href="${about}" class="dropdown-toggle" aria-haspopup="true" aria-expanded="false">เกี่ยวกับจ๊อบบีเคเค` 
                navbar +=` <i class="fa fa-angle-down">`
                navbar +=`</i>`
            navbar +=`</a>`
            navbar +=`<ul class="dropdown-menu" role="menu">`
            navAbouts.forEach((navAbout)=>{
                navbar +=`<li>`
                    navbar +=`<a href="${navAbout.linked}">${navAbout.name}`
                    navbar +=`</a>`
                navbar +=`</li>`
            })
			navbar +=`</ul>`
		navbar +=`</li>`
    navbar +=`</ul>`
    
    $('.bgnavbarMenu').html(navbar)
})