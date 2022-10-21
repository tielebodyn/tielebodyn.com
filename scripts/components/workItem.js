const workItem = ({ parent, titleText, images = {}, eventProps}) => {
const div = document.createElement('div');
const ul = document.getElementById('ul');
div.id = 'work-item'
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
Object.entries(images).forEach(([key, value]) => {
    const image = document.createElement('img');
    image.src = value;
    imageWrapper.append(image);
});

}

export default workItem