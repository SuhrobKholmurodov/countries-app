import { filterByContinents } from "./api.js";
let box = document.querySelector(".box");

// SELECT
const select = document.querySelector(".selectContinents");
select.onclick = () => {
  filterByContinents();
};

function get(name) {
  box.innerHTML = "";
  name.forEach((el) => {
    let container1 = document.createElement("div");
    container1.classList.add("container1");
    let name = document.createElement("p");
    name.innerHTML = el.name.common;
    name.classList.add("name");
    let p1 = document.createElement("p");
    p1.innerHTML = "Population : ";
    p1.classList.add("p");
    let p2 = document.createElement("p");
    p2.innerHTML = "Region : ";
    p2.classList.add("p");
    let p3 = document.createElement("p");
    p3.innerHTML = "Capital : ";
    p3.classList.add("p");

    let flags = document.createElement("img");
    flags.src = el.flags.png;

    let population = document.createElement("p");
    population.innerHTML = el.population;
    let one = document.createElement("div");
    one.classList.add("a");
    one.append(p1, population);

    let continents = document.createElement("p");
    continents.innerHTML = el.continents;
    let two = document.createElement("div");
    two.classList.add("a");
    two.append(p2, continents);

    let capital = document.createElement("p");
    capital.innerHTML = el.capital;
    capital.classList.add('capital')
    let three = document.createElement("div");
    three.classList.add("a");

    let btnLearn = document.createElement("button");
    btnLearn.classList.add("learn");
    let learnMore = document.createElement("a");
    learnMore.href = el.maps.googleMaps;
    learnMore.innerHTML = "LEARN MORE";

    learnMore.classList.add("learn");

    let showinfo = document.createElement("img");
    showinfo.src = "./abcd.png";
    showinfo.style.height = "30px";
    showinfo.style.width = "30px";
    showinfo.style.position = "absolute";
    showinfo.style.marginTop = "21px";
    showinfo.style.marginLeft = "29px";
    showinfo.style.filter = "drop-shadow(0 0 6px white)";

    showinfo.onclick = () => {
      localStorage.setItem("flags", el.flags.png);
      localStorage.setItem("name", el.name.common);
      localStorage.setItem("population", el.population);
      localStorage.setItem("continents", el.continents);
      localStorage.setItem("capital", el.capital);
      window.open("./learnMore.html", "_blank");
    };

    btnLearn.appendChild(learnMore);

    three.append(p3, capital);
    container1.append(flags, name, one, two, three, btnLearn, showinfo);
    box.appendChild(container1);
  });
}

export default get;







document.querySelector(".container").addEventListener("click", () => {
    document.querySelector(".sun-logo").classList.toggle("animate-sun");
    document.querySelector(".moon-logo").classList.toggle("animate-moon");
    document.querySelector("body").classList.toggle("dark");
})