import content from "./content.js";
const workItem = ({ parent, titleText, contentIdTag}) => {
const ul = document.getElementById('ul');
let  { media, html, format } = content[contentIdTag];

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

const text = document.createElement('p');
text.id = "work-description";
text.innerHTML = html;
div.append(text)


div.append(imageWrapper)


const src = content[contentIdTag].src;
if(format == 'image'){
    media.map((i)=> {
        const image = document.createElement('img');
        image.src = `${src}${i}`
        imageWrapper.append(image)

    })
}else if(format == 'video'){
    const video = document.createElement('video');
    video.src = `${src + media[0]}`
    video.controls = true;
    video.type= 'video/mp4'
    imageWrapper.append(video)
}


}
export default workItem