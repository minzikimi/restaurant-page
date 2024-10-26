export function createContactPage (){
  const firstTitle = document.createElement("h1");
  firstTitle.textContent ="My restaurant is located both in 🇰🇷 and 🇸🇪 :3"
  const contactContainer = document.createElement("div");
  contactContainer.className = "contact";

  //map info
  const mapInfo = document.createElement("div");
  mapInfo.className="contact-item";
  
  const iframe = document.createElement("iframe");
  iframe.width = "100%";
  iframe.height = "500";
  iframe.src = "https://maps.google.com/maps?width=100%25&height=500&hl=en&q=Gulporo%20105%20Incheon+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed";
  mapInfo.appendChild(iframe);
  contactContainer.appendChild(mapInfo);
  //contact info
  const infoItem = document.createElement("div");
  infoItem.className = "contact-item";
  const contactInfo = [
    "Gulpo-ro 105, Incheon, South Korea",
    "+46 762 060 534",
    "+82 10 2882 5935",
    "minjichan08@gmail.com"
  ];


  contactInfo.forEach(info => {
    const p = document.createElement("p");
    p.textContent = info;
    infoItem.appendChild(p);  
  });

  // Add this line to append infoItem to contactContainer
  contactContainer.appendChild(infoItem);

  //opening hours
  const hoursDiv = document.createElement("div");
  hoursDiv.className = "open-hours";
  const hoursTitle = document.createElement("h1");
  hoursTitle.textContent = "Opening hours";
  hoursDiv.appendChild(hoursTitle);

  const hours = [
    "Mon 10:30~20:00",
    "Tue 10:30~20:00",
    "Wed 10:30~20:00",
    "Thu 10:30~20:00",
    "Fri 10:30~20:00",
    "Sat closed",
    "Sun closed"
  ];

  hours.forEach(hour =>{
    const p = document.createElement("p");
    p.textContent = hour;
    hoursDiv.appendChild(p);
  })
  const reservationMessage = document.createElement("h1");
  reservationMessage.textContent = "We do not take reservations, Sorry 😭";



  const dFrag = document.createDocumentFragment();
  dFrag.appendChild(firstTitle);
  dFrag.appendChild(contactContainer);
  dFrag.appendChild(hoursDiv);
  dFrag.appendChild(reservationMessage);

  return dFrag;
}