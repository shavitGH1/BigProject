const contact = document.getElementById("contact")
const button= document.getElementById("menButton")
const button1= document.getElementById("womenButton")

contact.addEventListener("click" ,() => {
    window.location.href="/branches"
    console.log("click")
})

document.getElementById("graph").addEventListener("click", () => {
    window.location.href="/graph";
})

// document.addEventListener('DOMContentLoaded', (event)=> {
//     document.querySelectorAll("menButton").forEach(button =>{
//         button.addEventListener("click", ()=>{
//             // const name = menItems[i].name
//             const section = button.getAttribute("data-section")
//             hanndle(section)
//         })
//     })
// })
// Handle men buttons
const menButtons = document.querySelectorAll(".menButton");
menButtons.forEach(button => {
    button.addEventListener("click", () => {
        const section = button.getAttribute("data-section");
        handle(section, 'man');
    });
});

// Handle women buttons
const womenButtons = document.querySelectorAll(".womenButton");
womenButtons.forEach(button => {
    button.addEventListener("click", () => {
        const section = button.getAttribute("data-section");
        handle(section, 'woman');
    });
});

function handle(section, type) {
    console.log(`${type}?name=${section}`);
    window.location.href = `${type}?name=${section}`;
}