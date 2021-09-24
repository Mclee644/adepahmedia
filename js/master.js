const body=document.body;
const app=document.getElementById('app');
const toggle=document.getElementById('toggle');
const header = document.getElementById('header')
///declaration of auto write text
const title = "Adepah Media is back online "
const headTitle = document.getElementById('headTitle')
const headTitles = document.querySelector('h3')
var index = 1;
/// declaring sidemenu
const sideList = document.getElementById('sideMenu');

/// like dis


function sideMenu(){
    //if(window.mouseover)
    console.log("talking to the sidebar")
    sideList.classList.toggle("active")
    toggle.classList.toggle('active')
    header.classList.toggle('active')

    ///app.classList.toggle('active')

}

/// auto write text script
function awt(){
    headTitle.innerText = title.slice(0,index) +"|"
    index++;
    if(index>=title.length){
        index=0;

    }
    
}
setInterval(awt, 500);