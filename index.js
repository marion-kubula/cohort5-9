let container = document.querySelector(".container");
let firstDiv = document.createElement("div");
firstDiv.className = "div";
let heading = document.createElement("h3");
heading.textContent = "The beauty of nature";

let img = document.createElement("img");
img.src = "lake.jpg";

let para = document.createElement("p");
para.textContent =
  "People must be front and centre in any New Deal, with everyone entitled to live in a healthy environment and the human rights of local communities and indigenous peoples respected. A New Deal can only be achieved in partnership with, and in the interests of, the people who share their lands with nature.";
firstDiv.appendChild(heading);
firstDiv.appendChild(img);
firstDiv.appendChild(para);
container.appendChild(firstDiv);

let newDiv = document.createElement("div");
newDiv.className = "div2";

let heading2 = document.createElement("h3");
heading2.textContent = "i love nature";

let image = document.createElement("img");
image.src = "trees.jpg";
 

let paragraph = document.createElement("p");
paragraph.textContent =
  "People must be front and centre in any New Deal, with everyone entitled to live in a healthy environment and the human rights of local communities and indigenous peoples respected. A New Deal can only be achieved in partnership with, and in the interests of, the people who share their lands with nature.";

newDiv.appendChild(heading2);
newDiv.appendChild(image);
newDiv.appendChild(paragraph);
container.appendChild(newDiv);
