let control = document.querySelector(".control");
let cheeseBtn = document.querySelector("#cheese");
let meatBtn = document.querySelector("#meat");
let onionBtn = document.querySelector("#onion");
let pickleBtn = document.querySelector("#pickle");
let saladBtn = document.querySelector("#salad");
let tomatoBtn = document.querySelector("#tomato");
let reset = document.querySelector("#reset");
let order = document.querySelector("#order");
let top_bread = document.querySelector(".top-bread");
let bottom_braed = document.querySelector(".bottom-bread");
let h1 = document.querySelector("#order_txt");

let cheeseSum = document.querySelector("#cheeseSum");
let meatSum = document.querySelector("#meatSum");
let onionSum = document.querySelector("#onionSum");
let pickleSum = document.querySelector("#pickleSum");
let saladSum = document.querySelector("#saladSum");
let tomatoSum = document.querySelector("#tomatoSum");

let totalSum = document.querySelector("#totalSum");

totalSum = 0;
cheeseSum = 3;
meatSum = 9;
onionSum = 2;
pickleSum = 7;
saladSum = 5;
tomatoSum = 8;

console.log(totalSum);

reset.addEventListener("dblclick", () => {
  control.append(bottom_braed);
  control.append(top_bread);
});

cheeseBtn.addEventListener("click", () => {
  let cheese = document.querySelector(".cheese");
  cheese.className = "cheese";
  cheese.style.display = "block";
  bottom_braed.style.position = "absolute";
  bottom_braed.style.top = "100px";
  for (let i = 0; i <= 0; i++) {
    totalSum += cheeseSum;
  }
  totalSum.innerHTML++;
  let totalP = document.querySelector("#totalP");
  totalP.innerHTML = totalSum;
  console.log(totalP);
});

meatBtn.addEventListener("click", () => {
  for (let i = 0; i <= 0; i++) {
    totalSum += meatSum;
  }
  console.log(totalSum);
  totalSum.innerHTML += 6;

  let meat = document.querySelector(".meat");
  meat.className = "meat";
  meat.style.display = "block";
  bottom_braed.style.position = "absolute";
  bottom_braed.style.top = "120px";
  let totalP = document.querySelector("#totalP");
  totalP.innerHTML = totalSum;
  console.log(totalP);
});
onionBtn.addEventListener("click", () => {
  let onion = document.querySelector(".onion");
  onion.className = "onion";
  onion.style.display = "block";
  bottom_braed.style.position = "absolute";
  bottom_braed.style.top = "130px";
  for (let i = 0; i <= 0; i++) {
    totalSum += onionSum;
  }
  console.log(totalSum);
  totalSum.innerHTML += 6;
  let totalP = document.querySelector("#totalP");
  totalP.innerHTML = totalSum;
  console.log(totalP);
});

pickleBtn.addEventListener("click", () => {
  for (let i = 0; i <= 0; i++) {
    totalSum += pickleSum;
  }
  console.log(totalSum);
  let pickle = document.querySelector(".pickle");
  pickle.className = "pickle";
  pickle.style.display = "block";
  bottom_braed.style.position = "absolute";
  bottom_braed.style.top = "140px";
  let totalP = document.querySelector("#totalP");
  totalP.innerHTML = totalSum;
  console.log(totalP);
});

saladBtn.addEventListener("click", () => {
  for (let i = 0; i <= 0; i++) {
    totalSum += saladSum;
  }
  console.log(totalSum);
  let salad = document.querySelector(".salad");
  salad.className = "salad";
  salad.style.display = "block";
  salad.style.margin = "30px";
  bottom_braed.style.position = "absolute";
  bottom_braed.style.top = "150px";
  let totalP = document.querySelector("#totalP");
  totalP.innerHTML = totalSum;
  console.log(totalP);
});

tomatoBtn.addEventListener("click", () => {
  for (let i = 0; i <= 0; i++) {
    totalSum += tomatoSum;
  }
  console.log(totalSum);
  let tomato = document.querySelector(".tomato");
  tomato.className = "tomato";
  tomato.style.display = "block";
  bottom_braed.style.position = "absolute";
  bottom_braed.style.top = "190px";
  let totalP = document.querySelector("#totalP");
  totalP.innerHTML = totalSum;
  console.log(totalP);
});

control.addEventListener("click", (e) => {
  // console.log(e.target);
  control.removeChild(e.target);
});
reset.addEventListener("click", () => {
  let tomato = document.querySelector(".tomato");
  let salad = document.querySelector(".salad");
  let pickle = document.querySelector(".pickle");
  let onion = document.querySelector(".onion");
  let meat = document.querySelector(".meat");
  let cheese = document.querySelector(".cheese");
  let info = document.querySelector("#info");
  info.textContent =
    "Resetni dblclick qisez non chiqadi ; shu joyini qilomadm :)";
  control.removeChild(tomato);
  control.removeChild(salad);
  control.removeChild(pickle);
  control.removeChild(onion);
  control.removeChild(meat);
  control.removeChild(cheese);
  bottom_braed.style.position = "absolute";
  bottom_braed.style.top = "0px";
});

order.addEventListener("click", () => {
  let totalP = document.querySelector("#totalP");
  totalP.innerHTML = totalSum;
  console.log(totalP);
  let son = 50;
  h1.textContent = `Sizning ochirtiz  ${Math.floor(
    Math.random() * son
  )}  va Buyurtmangiz narxi ${totalSum} $`;
});
