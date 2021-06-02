const lancerDeCrotte = function () {

    const container = document.querySelector(".container");
    const imgAlissa = document.querySelector(".img-alissa");

    imgAlissa.addEventListener("click", (e) => {

        // nombre aléatoire entre 1 et 100
        let tableauRandom = Math.round(Math.random() * 100);
        // nombre aléatoire entre 1 et 15
        let min = 1;
        let max = 15;
        let randomImg = Math.floor(Math.random() * (max - min + 1) + min);

        // création d'une img avec la class crotte enfant de container
        let img = document.createElement("img");
        container.appendChild(img);
        img.src = "img/gueules/" + randomImg + ".jpg";
        img.classList.add("crotte", "sortie-crotte", "crotte-inc");
        img.style.left = tableauRandom + "%";

        //selectionne toutes les img crotte et sortie-crotte
        const crotte = document.querySelectorAll(".crotte");

        for (let i = 0; i < crotte.length; i++) {

            if (crotte[i].classList[1] == "sortie-crotte") {
                crotte[i].classList.toggle("crotte-inc");
            }

        }



    })

}

lancerDeCrotte();

const choisirCrotte = function () {

    //quand je click sur une des crottes elle débarque
    //crée une img avec la class crotte

    const tableauCrotte = document.querySelectorAll(".box-clowns img");
    const crotte = document.querySelector(".crotte-choisi");
    const sortieCrotte = document.querySelector(".sortie-crotte");

    for (let i = 0; i < tableauCrotte.length; i++) {

        tableauCrotte[i].addEventListener("click", (e) => {

            let tableauRandom = Math.round(Math.random() * 100);

            crotte.src = tableauCrotte[i].src;

            crotte.classList.toggle("crotte-inc");
            crotte.classList.toggle("sortie-crotte");

            if (crotte.classList[1] == "sortie-crotte") {
                sortieCrotte.style.left = tableauRandom + "%";
            }

        })



    }

}

choisirCrotte();