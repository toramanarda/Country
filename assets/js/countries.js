const countries = [
  {
    countryName: "Turkey",
    population: 84200000,
    flag: "🇹🇷",
    famousFood: "Kebab",
    capitalCity: "Ankara"
  },
  {
    countryName: "Italy",
    population: 60480000,
    flag: "🇮🇹",
    famousFood: "Pizza",
    capitalCity: "Rome"
  },
  {
    countryName: "Japan",
    population: 125800000,
    flag: "🇯🇵",
    famousFood: "Sushi",
    capitalCity: "Tokyo"
  },
  {
    countryName: "Brazil",
    population: 212600000,
    flag: "🇧🇷",
    famousFood: "Feijoada",
    capitalCity: "Brasilia"
  },
  {
    countryName: "India",
    population: 1393000000,
    flag: "🇮🇳",
    famousFood: "Curry",
    capitalCity: "New Delhi"
  },
  {
    countryName: "France",
    population: 65270000,
    flag: "🇫🇷",
    famousFood: "Baguette",
    capitalCity: "Paris"
  },
  {
    countryName: "Mexico",
    population: 126000000,
    flag: "🇲🇽",
    famousFood: "Tacos",
    capitalCity: "Mexico City"
  },
  {
    countryName: "China",
    population: 1441000000,
    flag: "🇨🇳",
    famousFood: "Peking Duck",
    capitalCity: "Beijing"
  },
  {
    countryName: "Greece",
    population: 10420000,
    flag: "🇬🇷",
    famousFood: "Moussaka",
    capitalCity: "Athens"
  },
  {
    countryName: "Spain",
    population: 47350000,
    flag: "🇪🇸",
    famousFood: "Paella",
    capitalCity: "Madrid"
  },
  {
    countryName: "Germany",
    population: 83100000,
    flag: "🇩🇪",
    famousFood: "Bratwurst",
    capitalCity: "Berlin"
  },
  {
    countryName: "United States",
    population: 331900000,
    flag: "🇺🇸",
    famousFood: "Burger",
    capitalCity: "Washington, D.C."
  },
  {
    countryName: "South Korea",
    population: 51840000,
    flag: "🇰🇷",
    famousFood: "Kimchi",
    capitalCity: "Seoul"
  },
  {
    countryName: "Egypt",
    population: 104100000,
    flag: "🇪🇬",
    famousFood: "Koshary",
    capitalCity: "Cairo"
  },
  {
    countryName: "Russia",
    population: 145900000,
    flag: "🇷🇺",
    famousFood: "Borscht",
    capitalCity: "Moscow"
  },
  {
    countryName: "Australia",
    population: 25690000,
    flag: "🇦🇺",
    famousFood: "Vegemite",
    capitalCity: "Canberra"
  },
  {
    countryName: "Thailand",
    population: 69790000,
    flag: "🇹🇭",
    famousFood: "Pad Thai",
    capitalCity: "Bangkok"
  },
  {
    countryName: "Argentina",
    population: 45380000,
    flag: "🇦🇷",
    famousFood: "Asado",
    capitalCity: "Buenos Aires"
  },
  {
    countryName: "Canada",
    population: 38000000,
    flag: "🇨🇦",
    famousFood: "Poutine",
    capitalCity: "Ottawa"
  },
  {
    countryName: "South Africa",
    population: 59310000,
    flag: "🇿🇦",
    famousFood: "Biltong",
    capitalCity: "Pretoria"
  }

];

document.addEventListener("DOMContentLoaded", function () {
  populateTable();

  const modal = document.getElementById('modal');

  window.openAddForm = function () {
    document.getElementById('modalTitle').textContent = 'Add Country';
    document.getElementById('countryForm').reset();
    modal.style.display = 'block';
  };

  // Function to close the modal
  window.closeModal = function () {
    modal.style.display = 'none';
  };

  // Function to add a new country
  window.addCountry = function (event) {
    event.preventDefault();
    const form = document.getElementById('countryForm');
    const country = {
      countryName: form.countryName.value,
      population: parseInt(form.population.value),
      flag: form.flag.value,
      famousFood: form.famousFood.value,
      capitalCity: form.capitalCity.value
    };
    countries.push(country);
    populateTable();
    closeModal();
  };

  // Function to delete a country
  window.deleteCountry = function (index) {
    if (confirm("Are you sure you want to delete this country?")) {
      countries.splice(index, 1);
      populateTable();
    }
  };

  // Function to populate the table with countries data
  function populateTable() {
    const tableBody = document.querySelector('#countryTable tbody');
    tableBody.innerHTML = '';
    countries.forEach((country, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
              <td>${country.countryName}</td>
              <td>${country.population}</td>
              <td>${country.flag}</td>
              <td>${country.famousFood}</td>
              <td>${country.capitalCity}</td>
              <td><button onclick="deleteCountry(${index})">Delete</button></td>
          `;
      tableBody.appendChild(row);
    });
  }
});
