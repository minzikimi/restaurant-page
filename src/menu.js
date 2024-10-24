export function createMenuPage(){
  const title = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "Our delicious menu";

  title.appendChild(h1);

  const gallery = document.createElement("div");
  gallery.className="grid-container";


  const menuItems = [
    { src: "../Img/risotto.jpg", alt: "risotto", name: "Risotto alla vodka with Burrata" },
    { src: "../Img/gimbap.jpg", alt: "gimbap", name: "Veggie Gimbap" },
    { src: "../Img/fishsoup.jpg", alt: "fishsoup", name: "Tuscan Fish Stew" },
    { src: "../Img/pizza.jpg", alt: "pizza", name: "Homestyle Pizza", isPizza: true },
    { src: "../Img/noodle.jpg", alt: "noodle", name: "Korean Bibim Noodle" },
    { src: "../Img/vongole.jpg", alt: "vongole", name: "Spaghetti alle vongole" },
    { src: "../Img/gochujangpasta.jpg", alt: "gochujangpasta", name: "Spicy Gochujang Pasta" }
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

  // 모든 요소를 담을 fragment 생성
  const dFrag = document.createDocumentFragment();
  dFrag.appendChild(title);
  dFrag.appendChild(gallery);

  return dFrag;

}