document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submitButton');
    const resultsContainer = document.getElementById('resultsContainer');
    const selectInput = document.getElementById('selectInput');

    submitButton.addEventListener('click', function () {
        const nameInput = document.getElementById('nameInput').value.trim();

        if (nameInput !== '') {
            const selectedCountry = selectInput.value;

            fetch(`https://api.agify.io?name=${nameInput}`)
                .then(response => response.json())
                .then(data => {
                    const newDiv = document.createElement('div');
                    newDiv.textContent = `Name: ${nameInput}, Age: ${data.age}`;
                    resultsContainer.appendChild(newDiv);


                    saveToLocalStorage(nameInput, data.age, selectedCountry);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            alert('Please enter a name.');
        }
    });

    selectInput.addEventListener('change', function () {
        clearResults();
    });


    loadFromLocalStorage();
});

function nation(nameInput, selectedCountry) {
    fetch(`https://api.nationalize.io/?name=${nameInput}&country_id=${selectedCountry}`)
        .then(response => response.json())
        .then(data => {
            const newDiv = document.createElement('div');
            if (data.country.length > 0) {
                const countries = data.country.map(country => country.country_id).join(', ');
                newDiv.textContent = `Nationality: ${countries}`;
            } else {
                newDiv.textContent = 'Nationality: Unknown';
            }
            resultsContainer.appendChild(newDiv);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function clearResults() {
    resultsContainer.innerHTML = '';
}

function saveToLocalStorage(name, age, country) {

    const userData = { name: name, age: age, country: country };
    localStorage.setItem('userData', JSON.stringify(userData));
}

function loadFromLocalStorage() {

    const userDataJSON = localStorage.getItem('userData');
    if (userDataJSON) {
        const userData = JSON.parse(userDataJSON);
        const newDiv = document.createElement('div');
        newDiv.textContent = `Name: ${userData.name}, Age: ${userData.age}, Country: ${userData.country}`;
        resultsContainer.appendChild(newDiv);
    }
}
