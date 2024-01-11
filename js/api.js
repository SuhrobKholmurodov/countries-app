let api = 'https://restcountries.com/v3.1/all'
import get from "./dom.js";
async function getData() {
    try {
      const response = await fetch(api);
      const data = await response.json();
      get(data);
    } catch (error) {
      console.log(error);
    }
}
// SEARCH
let serachInput = document.querySelector(".name1");
function searchCountries() {
  serachInput.oninput = async () => {
    let searchValue = serachInput.value;
    try {
      let response = await fetch(api);
      let data = await response.json();

      let filtered = data.filter((country) =>
        country.name.common.toLowerCase().includes(searchValue.toLowerCase())
      );
      get(filtered);
    } catch (error) {
      console.log(error);
    }
  };
}
searchCountries();

// SELECT 
const select = document.querySelector(".selectContinents");
async function filterByContinents() {
  try {
    const response = await fetch(api);
    const data = await response.json();

    const filteredContinenst = data.filter((cont) =>
      cont.continents.includes(select.value)
    );
    if(select.value == 'All')
    getData()
    get(filteredContinenst);
  } catch (error) {
    console.log(error);
  }
}
export default getData;
export {filterByContinents}