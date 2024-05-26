const redCircle = document.querySelector('.red-circle');
const toggleBox = document.querySelector('.toggle-box');

const theme = localStorage.getItem('theme');
const toggle = localStorage.getItem('toggle');
if(theme)
    document.body.className = theme;
if(toggle)
    toggleBox.style.justifyContent = toggle;

redCircle.addEventListener('click',()=>{
    const pastChoice = getComputedStyle(toggleBox).justifyContent;
    switch(pastChoice){
        case 'start':
            toggleBox.style.justifyContent = 'center';
            changeTheme(2);
            break;
        case 'center':
            toggleBox.style.justifyContent = 'end';
            changeTheme(3);
            break;
        case 'end':
            toggleBox.style.justifyContent = 'start';
            changeTheme(1);
            break;                  
    }
});

function changeTheme(choice){
    if(choice == 1){
        document.body.className = 'theme1';
        localStorage.removeItem('theme');
        localStorage.removeItem('toggle');
    }
    if(choice == 2){
        document.body.className = 'theme2';
        localStorage.removeItem('theme');
        localStorage.setItem('theme','theme2');

        localStorage.removeItem('toggle');
        localStorage.setItem('toggle','center');
    }
    if(choice == 3){
        document.body.className = 'theme3';
        localStorage.removeItem('theme');
        localStorage.setItem('theme','theme3');

        localStorage.removeItem('toggle');
        localStorage.setItem('toggle','end');
    }
}