import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const refs = {
  gallery: document.querySelector(".gallery"),
};

refs.gallery.addEventListener("click", onGallaryClick);

const markupArr = galleryItems
  .map(({ preview, description }) => {
    return `<li class="gallery-item">
  <a href="#" class = "gallery__link">
    <img class ="gallery__image" src="${preview}" alt="${description}">
  </a>
</li>`;
  })
  .join("");

refs.gallery.insertAdjacentHTML("beforeend", markupArr);

function onGallaryClick(event) {
  //   console.log(event.target.classList.contains(".gallery-item"));
  const isImageLink = event.target.classList.contains(".gallery-item");
  if (!isImageLink) {
    return;
  }
  console.log(event.target);
}

// 1. написати функцію яка отримує доступ до значення властивості original в об'єкті.
// 2.
//
//
// -----------------через map + .createElement работает но не закончил----------------
// const list = galleryItems.map(({ preview, original, description }) => {
//   const blocks = document.createElement("div");
//   const link = document.createElement("a");
//   link.href = "#";
//   const img = document.createElement("img");
//   img.src = preview;
//   img.alt = description;
//   link.append(img);
//   blocks.append(link);

//   blocks.style.width = "auto";
//   return blocks;
// });
// console.log(list);
// refs.gallery.append(...list);
// console.log(refs.gallery);

// -----------------через forEach не доделал----------------
// const blocks = [];
// galleryItems.forEach(() => {
//   const block = document.createElement("div");
//   //   console.log(block);
//   block.style.width = "auto";

//   blocks.push(block);
//   // console.log(blocks);
// });
// refs.gallery.append(...blocks);
// console.log(refs.gallery);
