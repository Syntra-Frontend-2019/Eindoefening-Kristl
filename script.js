// Variabelen
var button = document.querySelector("#addPerson");
var person = document.querySelector("#personlist");

//Acties vanuit HTML
button.addEventListener("click", addPerson);

// Persoon toevoegen
function addPerson() {
    // Values ophalen
    var name = document.querySelector("#name").value;
    var day = document.querySelector("#day").value;
    var month = document.querySelector("#month").value;
    var year = document.querySelector("#year").value;
    var valGender = document.querySelector("input[name=gender]:checked").value;

    //Geboortedatum maken
    var date = day + "/" + month + "/" + year;

    //Persoon-div aanmaken
    var divPerson = document.createElement("div");
    var elementName = document.createElement("h3");
    var elementDate = document.createElement("p");

    //Gender controleren en kleur toekennen
    if(valGender == "female"){
        divPerson.setAttribute("class","female")
    }else if(valGender == "male"){
        divPerson.setAttribute("class","male")
    }else{
        divPerson.setAttribute("class","other")
    }

    elementName.innerHTML = name;
    elementDate.innerHTML = date;
    person.appendChild(divPerson);
    divPerson.appendChild(elementName);
    divPerson.appendChild(elementDate);

}

