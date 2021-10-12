let menuJobfair = "";

menuJobfair += `
<ul>
  <li>
    <a href="${path}regionWork/jobfair.html">
      <figure>
        <img src="images/regionWork-02.svg" alt="" />
      </figure>
      <p>Job Fair</p>
    </a>
  </li>

  <li>
    <a href="${path}regionWork/jobfairOnline.html">
      <figure>
        <img src="images/regionWork-05.svg" alt="" />
      </figure>
      <p>Job Fair Online</p>
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
    <a href="${path}regionWork/jobFairCalendar.html">
      <figure>
        <img src="images/regionWork-06.svg" alt="" />
      </figure>
      <p>ปฏิทิน</p>
    </a>
  </li>
</ul>
`;

document.querySelector(".menuJobfair").innerHTML = menuJobfair;

const activeJobfairs = document.querySelectorAll(".menuJobfair li a");

for (const activeJobfair of activeJobfairs) {
  if (activeJobfair.getAttribute("href").includes(loPath)) {
    activeJobfair.classList.add("active");
  }
}

const activeJobfairTwo = activeJobfairs[1],
  activeJobfairFour = activeJobfairs[3];

if (loPath === "jobfairOnlineNoData.html") {
  activeJobfairTwo.classList.add("active");
}

if (loPath === "jobFairCalendarNoData.html") {
  activeJobfairFour.classList.add("active");
}
