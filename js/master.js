const body=document.body;
const app=document.getElementById('app');
const toggle=document.getElementById('toggle');
const header = document.getElementById('header')
/// declaring sidemenu
const sideList = document.getElementById('sideMenu');

if (app.onscroll) {
    nav.style.backgroundColor='#fff';
};
if (app.onscroll) {
    nav.style.backgroundColor='#fff';
};


function sideMenu(){
    console.log("talking to the sidebar")
    sideList.classList.toggle("active")
    toggle.classList.toggle('active')
    header.classList.toggle('active')

    ///app.classList.toggle('active')

}