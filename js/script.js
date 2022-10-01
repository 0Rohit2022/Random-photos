const imagecontainerEl = document.querySelector(".image-container");
const buttonEl = document.querySelector(".btn");


buttonEl.addEventListener("click",()=>{
    var image = 10;
    for (let index = 0; index < image; index++) {
      loadImage();
        
    }
    
});

function loadImage() {

    const newImageEl = document.createElement("img");
    newImageEl.src = `https://picsum.photos/300? random=${Math.floor(Math.random() * 2000)}`;
    imagecontainerEl.appendChild(newImageEl);
}
