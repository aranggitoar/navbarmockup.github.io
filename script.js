const colorSwitcher = document.querySelector('#colorSwitcher');
colorSwitcher.addEventListener('click', () => {
    document.querySelector('#colorSwitcher span:nth-child(2)').classList.remove('off');
    document.querySelector('#colorSwitcher span:first-child').classList.remove('off');
    document.querySelector('#colorSwitcher span:last-child').classList.remove('off');
    document.querySelector('#colorSwitcherMenu').classList.remove('off');
    document.querySelector('#colorSwitcher span:nth-child(2)').classList.toggle('on');
    document.querySelector('#colorSwitcher span:first-child').classList.toggle('on');
    document.querySelector('#colorSwitcher span:last-child').classList.toggle('on');
    document.querySelector('#colorSwitcherMenu').classList.toggle('on');
    if (document.querySelector('#colorSwitcherMenu').classList.contains('off') == false) {
        colorSwitcher.addEventListener('click', () => {
            document.querySelector('#colorSwitcher span:nth-child(2)').classList.toggle('off');
            document.querySelector('#colorSwitcher span:first-child').classList.toggle('off');
            document.querySelector('#colorSwitcher span:last-child').classList.toggle('off');
            document.querySelector('#colorSwitcherMenu').classList.toggle('off');
        });
    };
});

document.querySelector('#switchMix').addEventListener('click', () => {
    const tabs = document.querySelectorAll('header nav p');
    tabs[0].style.backgroundColor = "hsl(242, 17%, 60%)";
    tabs[1].style.backgroundColor = "hsl(242, 17%, 75%)";
    tabs[2].style.backgroundColor = "hsl(242, 17%, 90%)";
    tabs[3].style.backgroundColor = "hsl(354, 20%, 75%)";
    tabs[4].style.backgroundColor = "hsl(354, 20%, 60%)";
    document.querySelector('#colorSwitcher span:nth-child(2)').classList.toggle('off');
    document.querySelector('#colorSwitcher span:first-child').classList.toggle('off');
    document.querySelector('#colorSwitcher span:last-child').classList.toggle('off');
    document.querySelector('#colorSwitcherMenu').classList.toggle('off');
});

document.querySelector('#switchAllRed').addEventListener('click', () => {
    const tabs = document.querySelectorAll('header nav p');
    tabs[0].style.backgroundColor = "hsl(354, 20%, 60%)";
    tabs[1].style.backgroundColor = "hsl(354, 20%, 75%)";
    tabs[2].style.backgroundColor = "hsl(354, 20%, 90%)";
    tabs[3].style.backgroundColor = "hsl(354, 20%, 75%)";
    tabs[4].style.backgroundColor = "hsl(354, 20%, 60%)";
    document.querySelector('#colorSwitcher span:nth-child(2)').classList.toggle('off');
    document.querySelector('#colorSwitcher span:first-child').classList.toggle('off');
    document.querySelector('#colorSwitcher span:last-child').classList.toggle('off');
    document.querySelector('#colorSwitcherMenu').classList.toggle('off');
});

document.querySelector('#switchAllBlue').addEventListener('click', () => {
    const tabs = document.querySelectorAll('header nav p');
    tabs[0].style.backgroundColor = "hsl(242, 17%, 60%)";
    tabs[1].style.backgroundColor = "hsl(242, 17%, 75%)";
    tabs[2].style.backgroundColor = "hsl(242, 17%, 90%)";
    tabs[3].style.backgroundColor = "hsl(242, 17%, 75%)";
    tabs[4].style.backgroundColor = "hsl(242, 17%, 60%)";
    document.querySelector('#colorSwitcher span:nth-child(2)').classList.toggle('off');
    document.querySelector('#colorSwitcher span:first-child').classList.toggle('off');
    document.querySelector('#colorSwitcher span:last-child').classList.toggle('off');
    document.querySelector('#colorSwitcherMenu').classList.toggle('off');
});

document.querySelector('#logoVarOne').addEventListener('click', () => {
    document.querySelector('#variationOne').style.opacity = "1";
    document.querySelector('#variationOne').style.display = "flex";
    document.querySelector('#variationTwo').style.display = "none";
    document.querySelector('#variationTwo').style.opacity = "0";
    document.querySelector('#variationThree').style.display = "none";
    document.querySelector('#variationThree').style.opacity = "0";
});

document.querySelector('#logoVarTwo').addEventListener('click', () => {
    document.querySelector('#variationOne').style.display = "none";
    document.querySelector('#variationOne').style.opacity = "0";
    document.querySelector('#variationTwo').style.opacity = "1";
    document.querySelector('#variationTwo').style.display = "flex";
    document.querySelector('#variationThree').style.display = "none";
    document.querySelector('#variationThree').style.opacity = "0";
});

document.querySelector('#logoVarThree').addEventListener('click', () => {
    document.querySelector('#variationOne').style.display = "none";
    document.querySelector('#variationOne').style.opacity = "0";
    document.querySelector('#variationTwo').style.display = "none";
    document.querySelector('#variationTwo').style.opacity = "0";
    document.querySelector('#variationThree').style.display = "flex";
    document.querySelector('#variationThree').style.opacity = "1";
});