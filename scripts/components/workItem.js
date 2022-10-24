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
let  { images, html } = content[contentIdTag];
const src = content[contentIdTag].src;


const workDescription = document.createElement('div');
workDescription.classList.add('work-item')
workDescription.innerHTML = html;
imageWrapper.append(workDescription)

images.map((i)=> {
    const image = document.createElement('img');
    image.src = `${src}${i}`

    imageWrapper.append(image)
})

}
export default workItem