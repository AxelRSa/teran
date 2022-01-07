const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  // modal map button
  const modalMap = card.querySelector(".modal--map");
  const openMapButton = card.querySelector(".button--map");
  const closeMapButton = card.querySelector(".button--close-map");
  const closeMaskMap = card.querySelector(".mask--map");
  openMapButton.onclick = () => modalMap.classList.add("modal--active");
  closeMapButton.onclick = () => modalMap.classList.remove("modal--active");
  closeMaskMap.onclick = () => modalMap.classList.remove("modal--active");
  // modal map buttoSn
  // modal info button
  const modalInfo = card.querySelector(".modal--info");
  const openInfoButton = card.querySelector(".button--info");
  const closeInfoButton = card.querySelector(".button--close-info");
  const closeMaskInfo = card.querySelector(".mask--info");
  openInfoButton.onclick = () => modalInfo.classList.add("modal--active");
  closeInfoButton.onclick = () => modalInfo.classList.remove("modal--active");
  closeMaskInfo.onclick = () => modalInfo.classList.remove("modal--active");
  // modal info button
  // slider-images
  const splideImages = card.querySelector(".splide--images");
  new Splide(splideImages, {
    fixedWidth: "100px",
    fixedHeight: "100px",
    gap: "12px",
    padding: "12px",
    arrows: false,
    pagination: false,
  }).mount();
  // slider-images
  // slider-info
  const splideInfo = card.querySelector(".splide--info");
  new Splide(splideInfo, {
    gap: "12px",
    padding: "12px",
    autoWidth: true,
    arrows: false,
    pagination: false,
  }).mount();
  // slider-info
});

const menuButton = document.querySelector(".header__button--menu");
const menuDropdown = document.querySelector(".dropdown--menu");
menuButton.onclick = () => menuDropdown.classList.toggle("dropdown--active");
