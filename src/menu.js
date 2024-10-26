import risottoImage from './Img/risotto.jpg';
import gimbapImage from './Img/gimbap.jpg';
import fishsoupImage from './Img/fishsoup.jpg';
import pizzaImage from './Img/pizza.jpg';
import noodleImage from './Img/noodle.jpg';
import vongoleImage from './Img/vongole.jpg';
import gochujangpastaImage from './Img/gochujangpasta.jpg';

export function createMenuPage(){
  const title = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "Our delicious menu";

  title.appendChild(h1);

  const gallery = document.createElement("div");
  gallery.className="grid-container";


  const menuItems = [
    { src: risottoImage, alt: "risotto", name: "Vodka risotto with Burrata" },
    { src: gimbapImage, alt: "gimbap", name: "Veggie Gimbap" },
    { src: fishsoupImage, alt: "fishsoup", name: "Tuscan Fish Stew" },
    { src: pizzaImage, alt: "pizza", name: "Homestyle Pizza", isPizza: true },
    { src: noodleImage, alt: "noodle", name: "Korean Bibim Noodle" },
    { src: vongoleImage, alt: "vongole", name: "Spaghetti alle vongole" },
    { src: gochujangpastaImage, alt: "gochujangpasta", name: "Spicy Gochujang Pasta" }
  ];

   menuItems.forEach(item => {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    if (item.isPizza) gridItem.classList.add("pizza");

    const img = document.createElement("img");
    img.className = "food-image";
    img.src = item.src;
    img.alt = item.alt;

    const foodName = document.createElement("div");
    foodName.className = "food-name";
    foodName.textContent = item.name;

    gridItem.appendChild(img);
    gridItem.appendChild(foodName);
    gallery.appendChild(gridItem);
  });

  const dFrag = document.createDocumentFragment();
  dFrag.appendChild(title);
  dFrag.appendChild(gallery);

  return dFrag;

}