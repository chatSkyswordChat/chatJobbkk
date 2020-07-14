$(()=>{
    let topbar = ''
    
    let userAll = ($(location).attr('href').split('/').length == 7) ? '':'../'
    console.log(userAll);
    
    let linked = { 
        linkLogo : userAll+'index.html', 
        picLogo : userAll+'assets/images/logo.png', 
        banner : userAll+'assets/images/toppage-ad.jpg'
    }
    let logins = [
        { name: 'ผู้สมัครงาน', link: userAll+'login/login-applicant.html'},
        { name: 'ผู้ประกอบการ', link: userAll+'login/login-owner.html'},
        { name: 'สมัครสมาชิก', link: userAll+'login/register.html'}
    ]

    topbar +=`<div class="flexLogo">`
        topbar +=`<div class="btn-list">`
		    topbar +=`<button type="button" class="btn slide-menu-control" data-target="test-menu-left" data-action="toggle">`
		        topbar +=`<i class="fa fa-bars" aria-hidden="true">`            
                topbar +=`</i>`
		    topbar +=`</button>`
        topbar +=`</div>`
    
		topbar +=`<div class="logo">`
			topbar +=`<a href="${linked.linkLogo}"><img src="${linked.picLogo}">`
            topbar +=`</a>`
		topbar +=`</div>`

		topbar +=`<div class="banner">`
			topbar +=`<a href="javascript:void(0)">`
                topbar +=`<img src="${linked.banner}">`
            topbar +=`</a>`
		topbar +=`</div>`

		topbar +=`<div class="flexRegister">`
			topbar +=`<ul class="flag">`
				topbar +=`<li>`
                    topbar +=`<button class="active">TH`
                    topbar +=`</button>`
                topbar +=`</li>`
				topbar +=`<li>`
                    topbar +=`<button>EN`
                    topbar +=`</button>`
                topbar +=`</li>`
			topbar +=`</ul>`

			topbar +=`<div class="register">`
				topbar +=`<div class="dropdown">`
                    topbar +=`<a href="javascript:void(0)" class="register dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">เข้าสู่ระบบ`
					    topbar +=` <i class="fa fa-angle-down" aria-hidden="true">`
                        topbar +=`</i>`
                    topbar +=`</a>`
                    topbar +=`<ul class="dropdown-menu dropdownMenu" aria-labelledby="dropdownMenu">`
                    logins.forEach((login)=>{
                        topbar +=`<li>`
                            topbar +=`<a href="${login.link}">${login.name}`
                            topbar +=`</a>`
                        topbar +=`</li>`
                    })
					topbar +=`</ul>`
				topbar +=`</div>`
			topbar +=`</div>`
		topbar +=`</div>`
    topbar +=`</div>`
    
    $('.bgTopbar').html(topbar)
})

newpage = ()=>{
    let link = location.href
    window.open( link, '_blank')
}