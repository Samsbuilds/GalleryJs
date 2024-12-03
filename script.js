function upDate(previewPic) {
  const imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = `url(${previewPic.src})`;
  imageDiv.textContent = previewPic.alt;
}

function unDo() {
  const imageDiv = document.getElementById('image');
  imageDiv.style.backgroundImage = '';
  imageDiv.textContent = 'Survolez une image pour la voir ici';
}

function init() {
  console.log("Page chargée");
  const images = document.querySelectorAll('.gallery img');
  images.forEach((img, index) => {
    img.setAttribute('tabindex', index + 1);
  });
}
