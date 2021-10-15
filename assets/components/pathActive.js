const path = location.href.split("/").length === 5 ? "" : "../";
// const path = location.href.split("/").length === 7 ? "" : "../";
console.log(path);

// active menu
const loPath = location.href.split("/").pop();
