var businessMenuShow = ''

businessMenuShow += `<section class="container">`;
businessMenuShow += `<article class="row">`;
businessMenuShow += `<div class="col-12">`;
businessMenuShow += `<section class="flexMenushowBusiness">`;
businesses.forEach((business) => {
    businessMenuShow += `<div>
              ${business.badge}
              <a href="${business.link}">${business.name}</a>
            </div>`;
});
businessMenuShow += `</section>`;
businessMenuShow += `</div>`;
businessMenuShow += `</article>`;
businessMenuShow += `</section>`;


document.getElementsByClassName('businessMenuShow')[0].innerHTML = businessMenuShow