// const path = location.href.split("/").length === 6 ? "" : "../";
const path = location.pathname.split("/")[2] ? "" : "../";
console.log(path);

// active menu
const loPath = location.href.split("/").pop();
