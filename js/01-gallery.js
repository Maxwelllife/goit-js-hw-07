import { galleryItems } from "./gallery-items.js";
// Change code below this line

const refs = {
  gallery: document.querySelector(".gallery"),
};

refs.gallery.addEventListener("click", onGallaryClick);

const markup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery-item">
  <a href="${original}" class = "gallery__link">
    <img class ="gallery__image" data-source = '${original}' src="${preview}" alt="${description}">
  </a>
</div>`;
  })
  .join("");

refs.gallery.insertAdjacentHTML("beforeend", markup);

const instance = basicLightbox.create(`<img src=''/>`, {
  onShow: () =>
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        instance.close();
      }
    }),
  onClose: () => window.removeEventListener("keydown", () => {}),
});

function onGallaryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance.element().querySelector("img").src = event.target.dataset.source;
  instance.show();
}

// function callback(event) {
//     if (event.key === 'Escape') {
//         instance.close();
//     }
// }
// instance це глобальна змінна
// при кліку на зображення ми звертаємось до instance та міняємо йому src на той дата атрибут що отримали через event
// так через event ми можемо дізнатись дата-атрибут елементу по якому клікнули
// instance.element.querySelector('img').src =

//
// -----------------создание разметки через map + .createElement----------------
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
