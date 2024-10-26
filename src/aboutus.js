import meImage from './Img/me.jpg';
import pakchoiImage from './Img/pakchoi.jpg';
import bakingImage from './Img/baking.jpg';
import kitchenImage from './Img/kitchen.jpg';
import kimchiImage from './Img/kimchi.jpg';
import plantImage from './Img/plant.jpg';


export function createAboutUsPage(){
  const introduction = document.createElement("div");
  introduction.className = "introduce";
  const introductionContent1 = document.createElement("div");
  const introductionContent2 = document.createElement("div");

  introductionContent1.className = "introduce-item";
  introductionContent2.className = "introduce-item";

  introduction.appendChild(introductionContent1);
  introduction.appendChild(introductionContent2);

  
  const imageMe = document.createElement("img");
  imageMe.className="me"
  imageMe.src = meImage; 
  imageMe.alt = "profile"

  introductionContent1.appendChild(imageMe);


  const h1 = document.createElement("h1");
  const span1 = document.createElement("span");
  span1.id = "span1";
  span1.textContent = "I'm a ";
  const span2 = document.createElement("span");
  span2.id = "span2";
  span2.textContent = "food enthusiast";
  h1.appendChild(span1);
  h1.appendChild(span2);

  const p = document.createElement("p");
  p.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  introductionContent2.appendChild(h1);
  introductionContent2.appendChild(p);

  // Append both content divs to the main container
  introduction.appendChild(introductionContent1);
  introduction.appendChild(introductionContent2);

  // Create the gallery
  const gallery = document.createElement("div");
  gallery.className = "gallery";

  const galleryImages = [
    { src: pakchoiImage, alt: "pakchoi" },  
    { src: bakingImage, alt: "baking" },    
    { src: kitchenImage, alt: "kitchen" },  
    { src: kimchiImage, alt: "kimchi" },  
    { src: plantImage, alt: "plant" }     
  ];

  galleryImages.forEach(img => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    const image = document.createElement("img");
    image.src = img.src;
    image.alt = img.alt;
    galleryItem.appendChild(image);
    gallery.appendChild(galleryItem);
  });

  // Create a fragment to hold all elements
  const dFrag = document.createDocumentFragment();
  dFrag.appendChild(introduction);
  dFrag.appendChild(gallery);

  return dFrag;
}

