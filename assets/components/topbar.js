$(()=>{
    let topbar = ''
    let url = $(location).attr('href')
    let link = url.split('/')
    let linkLogo = ''
    let picLogo = ''
    let banner = ''
    console.log(link) 

    if(link.length == 6 && 4){
        linkLogo = 'index.html'
        picLogo = 'assets/images/logo.png'
        banner = 'assets/images/toppage-ad.jpg'
        var logins =[
            { name: 'ผู้สมัครงาน', link: 'login/login-applicant.html'},
            { name: 'ผู้ประกอบการ', link: 'login/login-owner.html'},
            { name: 'สมัครสมาชิก', link: 'login/register.html'}
        ]
    }else{
        linkLogo = '../index.html'
        picLogo = '../assets/images/logo.png'
        banner = '../assets/images/toppage-ad.jpg'
        var logins =[
            { name: 'ผู้สมัครงาน', link: '../login/login-applicant.html'},
            { name: 'ผู้ประกอบการ', link: '../login/login-owner.html'},
            { name: 'สมัครสมาชิก', link: '../login/register.html'}
        ]
    }

    topbar +=`<div class="btn-list" style="display: none;">`
		topbar +=`<button type="button" class="btn slide-menu-control" data-target="test-menu-left" data-action="toggle">`
		    topbar +=`<i class="fa fa-bars" aria-hidden="true">`            
            topbar +=`</i>`
		topbar +=`</button>`
	topbar +=`</div>`

	topbar +=`<div class="flexLogo">`
		topbar +=`<div class="logo">`
			topbar +=`<a href="${linkLogo}"><img src="${picLogo}">`
            topbar +=`</a>`
		topbar +=`</div>`

		topbar +=`<div class="banner">`
			topbar +=`<a href="javascript:void(0)">`
                topbar +=`<img src="${banner}">`
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