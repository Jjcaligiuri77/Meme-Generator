const button = document.querySelector('#but');
const image = document.querySelector('#image-url');
const upperInput = document.querySelector('#top-text');
const lowerInput = document.querySelector('#bottom-text');
const imgSection = document.querySelector('.meme-section');


button.addEventListener('click', function(e) {
  e.preventDefault();
  inputCheck();
});

function finishProcess() {
  const memeField = document.createElement('div');
  memeField.classList.add('meme-holder');

  const memeCanvas = document.createElement('canvas');
  memeCanvas.setAttribute('id', 'url-canvas');

  const removeBut = document.createElement('Button');
  removeBut.classList.add('remove-button');
  removeBut.innerText = 'Delete';

  removeBut.addEventListener('click', function() {
    memeField.remove();
  });

const url = image.value;
const upperText = upperInput.value;
console.log(upperText);
const lowerText = lowerInput.value;
const img = document.createElement('img');
img.classList.add('meme-img');
img.alt = 'Newly Created Meme';
memeCanvas.width = 1000;
memeCanvas.height = 800;
let ctx = memeCanvas.getContext('2d');

  img.onload = function() {
    ctx.drawImage(img, 0, 0, memeCanvas.width, memeCanvas.height);
    ctx.strokeStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.font = '900 6.25rem Impact';
    ctx.lineWidth = 8;
    ctx.strokeText(`${upperText}`, memeCanvas.width / 2, memeCanvas.height * 0.11);
    ctx.fillText(`${upperText}`, memeCanvas.width / 2, memeCanvas.height * 0.11);
    ctx.strokeText(`${lowerText}`, memeCanvas.width / 2, memeCanvas.height - 30);
    ctx.fillText(`${lowerText}`, memeCanvas.width / 2, memeCanvas.height - 30);
  };
img.src = url;
memeField.append(memeCanvas);
memeField.append(removeBut);
imgSection.append(memeField);
image.value = '';
upperInput.value = '';
lowerInput.value = '';
}

function inputCheck() {
  if (image.value === '') {
    alert('Image URL is Missing');
  } else if (upperInput.value === '' || lowerInput.value === '') {
    alert('Top and/or Bottom Fields are Missing');
  } else {
    finishProcess();
  }
}

function randomRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}
const h1 = document.querySelector("h1");

 h1.style.color = "red";
 setInterval(function () {
    h1.style.color = randomRGB();
 }, 500);

 const letters = document.querySelectorAll(".letter");

 setInterval(function () {
 for(let letter of letters) {
     letter.style.color = randomRGB();
    }
 }, 500);


