var gridFair = ''
let workFairs = [
    '1', '2', '3', '1', '2', '3', '1', '2', '3'
]
for (let workFair = 0; workFair < workFairs.length; workFair++) {
    gridFair += `<li>
    <a href="javascript:void(0)" onclick="link()"><img src="images/fair${workFairs[workFair]}.png" alt=""></a>
    </li>`
}

document.getElementsByClassName('gridFair')[0].innerHTML = gridFair