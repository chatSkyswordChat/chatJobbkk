let breadcrumb = "";

if (loPath === "hrSociety.html") {
  article = "Hr Society";
} else if (loPath === "knowledge.html") {
  article = "คลังความรุ้";
} else if (loPath === "inspiration.html") {
  article = "บุคคลแรงบันดาลใจ";
} else if (loPath === "jobEat.html") {
  article = "จ๊อบชวนเจี๊ยะ";
} else if (loPath === "vdo.html") {
  article = "VDO";
} else if (loPath === "lifeStyle.html") {
  article = "Life Style Worker";
} else if (loPath === "new.html") {
  article = "ข่าว";
} else if (loPath === "activity.html") {
  article = "กิจกรรม";
}

breadcrumb += `
<ol class="breadcrumb breadcrumbJobbkk">
    <li class="breadcrumb-item">
        <a href="${path}article/article.html">บทความ</a>
    </li>
    <li class="breadcrumb-item active" aria-current="page">${article}</li>
</ol>
`;

document.querySelector("#breadcrumb").innerHTML = breadcrumb;
