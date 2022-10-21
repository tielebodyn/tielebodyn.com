import content from "./content.js";
const workItem = ({ parent, titleText, contentIdTag}) => {
const ul = document.getElementById('ul');


const div = document.createElement('div');
div.id = 'work-item';
parent.append(div);

const itemWrapper = document.createElement('div');
itemWrapper.id = 'work-item-title';
div.append(itemWrapper)

const goBack = document.createElement('li');
goBack.innerHTML = titleText
itemWrapper.append(goBack);
goBack.addEventListener('click', () => {
    div.remove()
    ul.classList.remove('hide')

})






const imageWrapper = document.createElement('div');
imageWrapper.id = 'work-item-images'
div.append(imageWrapper)
let  { images } = content[contentIdTag];
const src = content[contentIdTag].src;
console.log(images)

const workDescription = document.createElement('div');
workDescription.innerHTML = "<h2 style='padding-right:20px; width: 80vw;'> sneaker shop <h2/>"
imageWrapper.append(workDescription)

images.map((i)=> {
    const image = document.createElement('img');
    image.src = `${src}${i}`
    console.log(image.src)
    imageWrapper.append(image)
})

}
export default workItem