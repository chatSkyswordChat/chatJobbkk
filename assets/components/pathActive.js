const path = location.href.split("/").length === 6 ? "" : "../";
console.log(path);

// active menu
const loPath = location.href.split("/").pop();