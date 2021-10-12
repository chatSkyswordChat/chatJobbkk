let btnRegion = "";

const condition =
  loPath === "regionCenter.html" ||
  loPath === "regionEast.html" ||
  loPath === "regionEastNorth.html" ||
  loPath === "regionSouth.html" ||
  loPath === "regionNorth.html" ||
  loPath === "regionWest.html";

if (condition) {
  (linkRegion = "regionCenter.html"),
    "regionEast.html",
    "regionEastNorth.html",
    "regionSouth.html",
    "regionNorth.html",
    "regionWest.html";
} else {
  linkRegion = "";
}

btnRegion += `
<ul class="my-5">
  <li>
    <a href="${path}regionWork/${linkRegion}">
      <figure>
        <img src="images/regionWork-01.svg" alt="" />
      </figure>
      <p>ไฮไลท์งานในแต่ละภูมิภาค</p>
    </a>
  </li>

  <li>
    <a href="${path}regionWork/jobfair.html">
      <figure>
        <img src="images/regionWork-02.svg" alt="" />
      </figure>
      <p>Job Fair</p>
    </a>
  </li>

  <li>
    <a href="${path}article/article.html">
      <figure>
        <img src="images/regionWork-03.svg" alt="" />
      </figure>
      <p>คลังความรู้</p>
    </a>
  </li>

  <li>
    <a href="${path}regionWork/highLight.html">
      <figure>
        <img src="images/regionWork-04.svg" alt="" />
      </figure>
      <p>ไฮไลท์</p>
    </a>
  </li>
</ul>
`;

document.querySelector(".btnRegion").innerHTML = btnRegion;

// const menuRegion = document.querySelectorAll(".btnRegion ul li a")[0];
// menuRegion.classList.add("active");

const menuRegions = document.querySelectorAll(".btnRegion ul li a"),
  menuRegionOne = document.querySelectorAll(".btnRegion ul li a")[0];

for (const menuRegion of menuRegions) {
  if (menuRegion.getAttribute("href").includes(loPath)) {
    menuRegion.classList.add("active");
  }
}

if (condition) {
  menuRegionOne.classList.add("active");
}
