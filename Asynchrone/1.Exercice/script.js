let button = document.querySelector('button');
let body = document.querySelector('body');


button.addEventListener('click', function () {
    let show = fetch('array.json')
        .then((response) => response.json())
        .then((json) => {
            let newUl = document.createElement('ul');
            let rules = json["books"];

            rules.forEach((rule) => {
                let newLi = document.createElement('li');
                newLi.textContent = rule.title;
                newUl.appendChild(newLi);
            });
            body.appendChild(newUl);


        })
        .catch((error) => {
            console.log('error', error)
        });





});
