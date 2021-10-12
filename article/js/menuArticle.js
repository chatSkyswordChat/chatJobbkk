let btnArticle = "";

btnArticle += `
<ul class="my-5">
    <li>
        <a href="${path}article/knowledge.html">
            <figure><img src="images/article-01.svg" alt="" /></figure>
            <p>คลังความรู้</p>
        </a>
    </li>

    <li>
        <a href="${path}article/inspiration.html">
            <figure><img src="images/article-02.svg" alt="" /></figure>
            <p>บุคคลแรงบันดาลใจ</p>
        </a>
    </li>

    <li>
        <a href="${path}article/hrSociety.html">
            <figure><img src="images/article-03.svg" alt="" /></figure>
            <p>Hr Society</p>
        </a>
    </li>

    <li>
        <a href="${path}article/jobEat.html">
            <figure><img src="images/article-04.svg" alt="" /></figure>
            <p>จ๊อบชวนเจี๊ยะ</p>
        </a>
    </li>

    <li>
        <a href="${path}article/vdo.html">
            <figure><img src="images/article-05.svg" alt="" /></figure>
            <p>VDO</p>
        </a>
    </li>

    <li>
        <a href="${path}article/lifeStyle.html">
            <figure>
            <img src="images/article-06.svg" alt="" />
            </figure>
            <p>Lifestyle</p>
        </a>
    </li>
</ul>
`;

document.querySelector(".btnArticle").innerHTML = btnArticle;

const btnArticles = document.querySelectorAll(".btnArticle li a");

for (const btnArticle of btnArticles) {
  if (btnArticle.getAttribute("href").includes(loPath)) {
    btnArticle.classList.add("active");
  }
}
