
window.onload=() =>{
    main();
}

function main() {
    const root = document.getElementById('root')
    const input = document.getElementById('input')
    const btn = document.getElementById('btn')
    const copyBtn = document.getElementById('copyBtn')

    btn.addEventListener('click' , function(){
        const bg = genaretHexColor();
        root.style.backgroundColor = bg;
        input.value = bg;
    })
    copyBtn.addEventListener('click', function() {
        navigator.clipboard.writeText(input.value)
        genaretTosMessags(`${input.value} copied`)
    })
}

function genaretHexColor (){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

function genaretTosMessags(msg) {
    const div = document.createElement('div')
    div.innerText = msg
    div.className = 'toast-message toast-message-slide-in';
    div.addEventListener('click', function() {
        div.classList.remove('toast-message-slide-in')
        div.classList.add("toast-message-slide-out")
        div.addEventListener('animationend', function(){
            div.remove();
        })
    })
    document.body.appendChild(div)
}