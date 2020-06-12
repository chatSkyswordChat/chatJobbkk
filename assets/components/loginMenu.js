$(()=>{
    let loginMenu = ''

    var logins = [
        { name : 'หน้าสมาชิก', linked : ''},
        { name : 'Jobfair Online', linked : ''},
        { name : 'ค้นหา Resume', linked : ''},
        { name : 'Resume Quick', linked : ''},
        { name : 'ประกาศงาน', linked : ''},
        { name : 'ICMS', linked : ''},
        { name : 'รายงาน', linked : ''},
        { name : 'ตั้งค่า', linked : ''},
        { name : 'Logout', linked : ''},
    ]

    loginMenu +=`<ul>`
        logins.forEach((login)=>{
        loginMenu +=`<li>`
            loginMenu +=`<a href="">${login.name}`
            loginMenu +=`</a>`
        loginMenu +=`</li>`
        })
	loginMenu +=`</ul>`

    $('.menuUser').html(loginMenu)
})