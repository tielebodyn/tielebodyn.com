const workItem = ({ parent, titleText, images = {}}) => {
const div = document.createElement('div');
div.id = 'work-item'
parent.append(div);

const itemWrapper = document.createElement('div');
itemWrapper.id = 'work-item-title';
div.append(itemWrapper)


const arrowBack = document.createElement('img');
arrowBack.src = "../../sources/arrow-back.png";
itemWrapper.append(arrowBack);

const text = document.createElement('h3');
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