import workItem from "./components/workItem.js";
import zoomOnScroll from "./zoomOnScroll.js";
const arrayLength = 6
const itemArray = []
const itemZero = document.getElementById(`list-item-${0}`)
const section2 = document.getElementById(`section2-main`)
const ul = document.getElementById(`ul`)
const itemZeroZero = document.getElementById(`list-item-00`)
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
    const item = document.getElementById(`list-item-${i}`)
    itemArray.push(item);
}

itemArray.forEach(e => {
    e.addEventListener('click', () => {
        ul.classList.remove("flex");
        ul.classList.add("hide");
        itemArray.forEach(e => e.classList.add('hide'))
        workItem({
            parent: section2,
            titleText: e.innerHTML,
            images: {1: '../../sources/ez.png', 2: '../../sources/img.png',  3: '../../sources/img.png'}
        });
    })
});

