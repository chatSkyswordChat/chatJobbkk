var carousel = "";

carousel += `<ol class="carousel-indicators">`;
carousel += `<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>`;
carousel += `<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>`;
carousel += `<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>`;
carousel += `</ol>`;

carousel += `<div class="carousel-inner">`;
carousel += `<div class="carousel-item active">`;
carousel += `<a href="javascript:void(0)" onclick="link()"><img src="${path}assets/images/hero1.gif" class="d-block w-100" alt="..."></a>`;
carousel += `</div>`;
carousel += `<div class="carousel-item">`;
carousel += `<a href="javascript:void(0)" onclick="link()"><img src="${path}assets/images/hero2.gif" class="d-block w-100" alt="..."></a>`;
carousel += `</div>`;
carousel += `<div class="carousel-item">`;
carousel += `<a href="javascript:void(0)" onclick="link()"><img src="${path}assets/images/hero3.gif" class="d-block w-100" alt="..."></a>`;
carousel += `</div>`;
carousel += `</div>`;
carousel += `<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">`;
carousel += `<span class="carousel-control-prev-icon" aria-hidden="true"></span>`;
carousel += `<span class="sr-only">Previous</span>`;
carousel += `</a>`;
carousel += `<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">`;
carousel += `<span class="carousel-control-next-icon" aria-hidden="true"></span>`;
carousel += `<span class="sr-only">Next</span>`;
carousel += `</a>`;

document.getElementsByClassName("carousel")[0].innerHTML = carousel;
