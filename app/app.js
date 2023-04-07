//CALCOLA PREZZO
let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

function calculatePrice(event) {
    event.preventDefault();

    let hoursRequested = document.getElementById("hours").value;
    let typeOfWork = document.getElementById("work").value;
    let userDiscountCode = document.getElementById("code").value;
    let fullPrice = 0;

    switch (typeOfWork) {
        case "frontend":
            fullPrice = hoursRequested * 15.30;
            break;
        case "backend":
            fullPrice = hoursRequested * 20.50;
            break;
        case "project":
            fullPrice = hoursRequested * 33.60;
            break;
        default:
            break;
    }

    finalPrice = checkDiscountedPrice(fullPrice, userDiscountCode).toFixed(2);
    document.getElementById("price-container").innerHTML = `
    <h3>Estimated price: ${finalPrice}&euro;</h3>
    `

}

//CALCOLA SCONTO
function checkDiscountedPrice(price, code){
    for(let i = 0; i < discountCodes.length; i++){
        if (code == discountCodes[i]){
            price = (price * 0.75);
            discountCodes = removeDiscountCode(discountCodes, code);
            return price;
        }
    }
    return price;
}

//RIMUOVO CODICE SCONTO
function removeDiscountCode(array, elementToRemove){
    const index = array.indexOf(elementToRemove);
    array.splice(index, 1);
    return array;
}