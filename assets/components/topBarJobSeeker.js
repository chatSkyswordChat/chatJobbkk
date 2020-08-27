var topBarJobSeeker = ''

topBarJobSeeker += `<section class="container">`;
topBarJobSeeker += `<article class="row">`;
topBarJobSeeker += `<div class="col-12">`;
topBarJobSeeker += `<section class="flexMenushowUser">`;
userdropdowns.forEach((userdropdown) => {
    topBarJobSeeker += `<div class="${userdropdown.dropdownShow}">`;
    topBarJobSeeker += `${userdropdown.badge}`
    topBarJobSeeker += `<a href="javascript:void(0)" class="${userdropdown.class} theFirst" ${userdropdown.data}>
  <span class="${userdropdown.span}">${userdropdown.name}</span> ${userdropdown.arrowShow}</a>`;

    if (userdropdown.dropdowns != null && userdropdown.dropdowns != "") {
        topBarJobSeeker += `<div class="dropdown-menu dropdownListUser">`;
        userdropdown.dropdowns.forEach((dropdown) => {
            topBarJobSeeker += `<a class="dropdown-item dropdownItem" href="javascript:void(0)"> ${dropdown.name}</a>`;
        });
        topBarJobSeeker += `</div>`;
    }
    topBarJobSeeker += `</div>`;
});
topBarJobSeeker += `</section>`;
topBarJobSeeker += `</div> `;
topBarJobSeeker += `</article>`;
topBarJobSeeker += `</section>`

document.getElementsByClassName('userMenuShow')[0].innerHTML = topBarJobSeeker