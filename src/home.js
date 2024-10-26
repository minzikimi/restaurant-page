export function createMainPage() {
  // Create paragraph
  const paragraph = document.createElement("div");
  paragraph.className = "paragraph";
  
  // Add a class to the main container
  const mainContainer = document.createElement("div");
  mainContainer.className = "main-content page-home"; 

  const p = document.createElement("p");
  p.textContent = "Homestyle Korean & Italian Touch & Umami in Every Bite";
  paragraph.appendChild(p);

  // Create description
  const description = document.createElement("div");
  description.className = "description";
  const h2 = document.createElement("h2");
  h2.textContent = "안녕 Ciao Belli, Benvenuti!";
  const descP = document.createElement("p");
  descP.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  description.appendChild(h2);
  description.appendChild(descP);

  // Append elements to the main container
  mainContainer.appendChild(paragraph);
  mainContainer.appendChild(description);

  return mainContainer; 
}