var carousel = "";

carousel += `
<ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
</ol>

<div class="carousel-inner">
    <div class="carousel-item active">
        <a href="javascript:void(0)"><img src="${path}dashboardBusiness/images/pic1.jpg" class="d-block w-100" alt="..."></a>
    </div>
    <div class="carousel-item">
        <a href="javascript:void(0)"><img src="${path}dashboardBusiness/images/pic2.jpg" class="d-block w-100" alt="..."></a>
    </div>
    <div class="carousel-item">
        <a href="javascript:void(0)"><img src="${path}dashboardBusiness/images/pic3.jpg" class="d-block w-100" alt="..."></a>
    </div>
</div>

<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
</a>`;

document.getElementsByClassName("carousel")[0].innerHTML = carousel;
