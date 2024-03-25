const help=document.getElementById('helpDiv')
let click=0
help.style.position='absolute'
help.style.left=document.getElementById('help').offsetLeft+document.getElementById('help').offsetWidth+'px'
help.style.top=document.getElementById('help').offsetTop+'px'
help.style.height=document.getElementById('help').offsetHeight+'px'
function helpFunc(params) {
    if (click==0) {
        help.style.opacity=1
        click=1
    }
    else{
        help.style.opacity=0
        click=0
    }
    
}