// const path = location.href.split("/").length === 6 ? "" : "../";
const path = location.href.split("/").length === 3 ? "" : "../";
console.log(path);

// active menu
const loPath = location.href.split("/").pop();
