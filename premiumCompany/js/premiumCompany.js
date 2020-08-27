var gridPremium = ''
let workPremiums = [
    '1', '2', '3', '4', '5','1', '2', '3', '4', '5','1', '2', '3', '4', '5'
]
for (let workPremium = 0; workPremium < workPremiums.length; workPremium++) {
    gridPremium += `<li>
    <a href="javascript:void(0)" onclick="link()"><img
        src="images/premium${workPremiums[workPremium]}.jpg" alt=""></a>
    </li>`   
}

document.getElementsByClassName('gridPremium')[0].innerHTML = gridPremium