var linkElement = document.createElement("link");

// Set attributes for the link element

for (let i = 3; i <= 41; i++) {
  linkElement.rel = "preload";
  linkElement.href = "./assets/scenes/scene" + i + (i === 13 ? ".gif" : ".png");
  linkElement.as = "image";
  linkElement.type = "image/png";
  document.head.appendChild(linkElement);
}

// Append the link element to the document's head
