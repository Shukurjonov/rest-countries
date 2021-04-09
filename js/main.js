let region = document.querySelector(".region");
let darkMode = document.querySelector(".dark-mode");
let body = document.querySelector("body");
let list = document.querySelector(".countries-list");


let fullinfo = [
    {country: "Belgium", url: "../img/1280px-Flag_of_Belgium.svg", native: "Belgiё", population: "11,319,511", region: "Europe", sregion: "Western Europe", capital: "Brassels", domain: ".be", currencies: "Euro", languages: "Dutch, French, German", border: "France, Germany, Netherlands"},
];

let countries = [
    {url: "../img/flag-germany.png", country: "Germany", proporties : {Population: "11,319,511", Region: "Europe", Capital: "Brassels"}},
    {url: "../img/flag-usa.png", country: "United States of America", proporties : { Population: "323,947,000", Region: "Americas", Capital: "Washington, D.C" }},  
    {url: "../img/flag-brasil.png", country: "Brazil", proporties : { Population: "206,135,893", Region: "Americas", Capital: "Brasília" }},
    {url: "../img/flag-iceland.png", country: "Iceland", proporties : { Population: "334,300", Region: "Europe", Capital: "Reykjavik" }},
    {url: "../img/flag-afganistan.png", country: "Afghanistan", proporties : { Population: "27,657,145", Region: "Asia", Capital: "Kabul" }},
    {url: "../img/flag-iland-iceland.png", country: "Åland Islands", proporties : { Population: "28,875", Region: "Europe", Capital: "Mariehamn" }},
    {url: "../img/flag-albania.png", country: "Albania", proporties : { Population: "2,886,026", Region: "Europe", Capital: "Tirana" }},
    {url: "../img/flag-algeria.png", country: "Algeria", proporties : { Population: "40,400,000", Region: "Afrika", Capital: "Algiers" }},
];


function renderer(database){
    list.innerHTML = null;
    for (element of database){

        let item = document.createElement('li');
        item.classList.add("countries-item");

        let link = document.createElement('a');
        link.classList.add("country-link");
        link.setAttribute("alt", "belgium.html");

        let img = document.createElement('img');
        img.src = element.url;

        let info = document.createElement('div');
        info.classList.add("info");

        let heading = document.createElement('h2');
        heading.classList.add("country-heading");
        heading.textContent = element.country;
        
        let infoList = document.createElement('ul');
        infoList.classList.add("info-list");

        for (key in element.proporties){
            let elLi = document.createElement("li");
            elLi.classList.add("country-info");
            
            let elSpan = document.createElement("span");
            elSpan.classList.add("info-text");
            
            elSpan.textContent = key + ": ";

            let elValue = document.createElement("span");
            elValue.textContent = element.proporties[key];

            elLi.appendChild(elSpan);
            elLi.appendChild(elValue);

            infoList.appendChild(elLi);
        }

        info.appendChild(heading);
        info.appendChild(infoList);

        link.appendChild(img);
        link.appendChild(info);
        
        item.appendChild(link);

        list.appendChild(item);
    }
}

renderer(countries);


region.addEventListener("change", function(){
    console.log("Hello");
    let data = countries.filter(a => a.proporties.Region == region.value);

    renderer(data)
})



darkMode.addEventListener("click", function(){
    body.classList.toggle("dark");
})