let declare = 
{
    flags:localStorage.getItem('flags'),
    name:localStorage.getItem('name'),
    population:localStorage.getItem('population'),
    continents:localStorage.getItem('continents'),
    capital:localStorage.getItem('capital')
}
let support = document.querySelector('.support')
let pFlags = document.createElement('img')
pFlags.src = declare.flags
pFlags.classList.add('pFlags')
let pName = document.createElement('p')
pName.innerHTML ="The name of country: " + declare.name
pName.classList.add('theOne')
let pPopulation = document.createElement('p')
pPopulation.innerHTML ="The population of country: " +declare.population
pPopulation.classList.add('theOne')
let pContinents = document.createElement('p')
pContinents.innerHTML ="Location of coutry: " + declare.continents
pContinents.classList.add('theOne')
let pCapital = document.createElement('p')
pCapital.innerHTML ="The capital of country: " + declare.capital
pCapital.classList.add('theOne')
support.append(pFlags,pName, pPopulation, pContinents, pCapital)
let back = document.querySelector('.back')
back.onclick = () =>
{
 window.open('./index.html')
}