var carousel = "";
// let url = (location.href.split('/').length == 5) ? '':'../'
let url = location.href.split("/").length == 7 ? "" : "../";

slides = [
  { img: url + "assets/images/carousel-1.jpg", alt: "1", class: "active" },
  { img: url + "assets/images/carousel-2.jpg", alt: "2", class: "" },
  { img: url + "assets/images/carousel-3.jpg", alt: "3", class: "" },
];
actives = [
  { data: "0", class: "active" },
  { data: "1", class: "" },
  { data: "2", class: "" },
];

// Indicators
carousel += `<ol class="carousel-indicators">`;
actives.forEach((active) => {
  carousel += `<li data-target="#carousel-example-generic" data-slide-to="${active.data}" class="${active.class}"></li>`;
});
carousel += `</ol>`;

// Wrapper for slides
carousel += `<div class="carousel-inner" role="listbox">`;
slides.forEach((slide) => {
  carousel += `<div class="item ${slide.class}">`;
  carousel += `<a href="javascript:void(0)"><img src="${slide.img}" alt="${slide.alt}"></a>`;
  carousel += `</div>`;
});
carousel += `</div>`;

// control
carousel += `<a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">`;
carousel += `<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>`;
carousel += `<span class="sr-only">Previous</span>`;
carousel += `</a>`;

carousel += `<a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">`;
carousel += `<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>`;
carousel += `<span class="sr-only">Next</span>`;
carousel += `</a>`;

$("#carousel-example-generic").html(carousel);

$('.carousel-indicators li').css({'margin':'0 5px'})
