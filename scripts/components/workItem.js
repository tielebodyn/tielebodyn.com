import content from "./content.js";
const workItem = ({ parent, titleText, contentIdTag}) => {
const ul = document.getElementById('ul');


const div = document.createElement('div');
div.id = 'work-item';
parent.append(div);

const itemWrapper = document.createElement('div');
itemWrapper.id = 'work-item-title';
div.append(itemWrapper)

const arrowBack = document.createElement('img');
arrowBack.src = "../../sources/arrow-back.png";
arrowBack.addEventListener('click', () => {
    div.remove()
    ul.classList.remove('hide')

})
arrowBack.classList.add('arrow-back')
itemWrapper.append(arrowBack);

const text = document.createElement('li');
text.innerHTML = titleText
itemWrapper.append(text);

const imageWrapper = document.createElement('div');
imageWrapper.id = 'work-item-images'
div.append(imageWrapper)
let  { images } = content[contentIdTag];
const src = content[contentIdTag].src;
console.log(images)

const workDescription = document.createElement('div');
workDescription.innerHTML = "<h2 style='padding-right:20px;'> This is the work description <h2/> <p> this is a description<p/>"
imageWrapper.append(workDescription)

images.map((i)=> {
    const image = document.createElement('img');
    image.src = `${src}${i}`
    console.log(image.src)
    imageWrapper.append(image)
})
}
export default workItem