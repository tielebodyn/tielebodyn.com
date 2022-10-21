import workItem from "./components/workItem.js";
import zoomOnScroll from "./zoomOnScroll.js";
const arrayLength = 6
const itemArray = []
const section2 = document.getElementById(`section2-main`)
const ul = document.getElementById(`ul`)
//zoomOnScroll()


// if(window.location.hash){
    
// }
const links = document.getElementsByClassName('links');
console.log(links)
for(let i = 0; i < links.length; i++){
    links[i].addEventListener('mouseover', () =>{
        links[i].classList.remove('transparent')
    })
    links[i].addEventListener('mouseout', () =>{
        links[i].classList.add('transparent')
    })
}
for(let i = 1; i <= arrayLength; i++){
    const item = document.getElementById(`listItem${i}`)
    itemArray.push(item);
}
itemArray.forEach(e => {
    console.log(e.id)
    e.addEventListener('click', () => {
        ul.classList.remove("flex");
        ul.classList.add("hide");
        workItem({
            parent: section2,
            titleText: "go back",
            contentIdTag: `${e.id}`,
            eventProps: ul
        });
    })
});


