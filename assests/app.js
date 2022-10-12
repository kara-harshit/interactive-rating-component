const btn=document.querySelector(".r_btn");
const rating_screen=document.querySelector(".rating_screen");
const greeting_screen=document.querySelector(".greeting_screen");
const rating_div=document.querySelector(".rating_div")
const g_div=document.querySelector(".g_div");

// events
btn.addEventListener('click',change_display);
rating_div.addEventListener('click',select);



// functions
function change_display(e){
    console.log("button was clicked");
    rating_screen.style.display='none';
    greeting_screen.style.display="flex";
}

function select(e)
{
    const ch=e.target;
    ch.style.backgroundColor="hsl(217, 12%, 63%)";
    ch.style.color="white";
    g_div.innerText=`You selected ${ch.innerText } out of 5`;
}
