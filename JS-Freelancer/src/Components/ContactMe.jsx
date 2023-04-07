let discountCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
let finalPrice = 0;

//CALCOLO IL PREZZO NON SCONTATO
function calculatePrice(e) {
    e.preventDefault();

    let hoursRequested = document.getElementById("hours").value;
    let typeOfWork = document.getElementById("work").value;
    let userDiscountCode = document.getElementById("code").value;
    let fullPrice = 0;

    switch (typeOfWork) {
        case "frontend":
            fullPrice = hoursRequested * 15.3;
            break;
        case "backend":
            fullPrice = hoursRequested * 20.5;
            break;
        case "project":
            fullPrice = hoursRequested * 33.6;
            break;
        default:
            break;
    }

    finalPrice = checkDiscountedPrice(fullPrice, userDiscountCode).toFixed(2);
    alert(finalPrice);

    document.getElementById("price-display").innerHTML += `
    <h3 className="text-white font-semibold text-lg my-5">
        ${finalPrice} &euro;
    </h3>
    `;
}

//CONTROLLO IL CODICE SCONTO
function checkDiscountedPrice(price, code) {
    for (let i = 0; i < discountCodes.length; i++) {
        if (code == discountCodes[i]) {
            price = price * 0.75;
            discountCodes = removeDiscountCode(discountCodes, code);
            return price;
        }
    }
    return price;
}

//RIMUOVO CODICE SCONTO USATO
function removeDiscountCode(array, elementToRemove) {
    const index = array.indexOf(elementToRemove);
    array.splice(index, 1);
    return array;
}

function ContactMe() {
    return (
        <div className="my-14">
            <h1 className="text-center text-white font-semibold text-2xl">
                Contact Me
            </h1>
            <div className="w-1/3 mx-auto mt-10 mb-5">
                <form className="flex flex-col gap-5" onSubmit={calculatePrice}>
                    <div className="flex justify-between">
                        <label
                            htmlFor="email"
                            className="text-white font-medium text-lg"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-64 px-2"
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <label
                            htmlFor="hours"
                            className="text-white font-medium text-lg"
                        >
                            Number of hours
                        </label>
                        <input
                            type="number"
                            id="hours"
                            className="w-64 px-2"
                            required
                        />
                    </div>
                    <div className="flex justify-between">
                        <label
                            htmlFor="work"
                            className="text-white font-medium text-lg"
                        >
                            Type of work
                        </label>
                        <select id="work" className="w-64 px-1" required>
                            <option value="">Select the type of work</option>
                            <option value="backend">Backend Development</option>
                            <option value="frontend">
                                Frontend Development
                            </option>
                            <option value="analysis">Project Analysis</option>
                        </select>
                    </div>
                    <div className="flex justify-between">
                        <label
                            htmlFor="discount-code"
                            className="text-white font-medium text-lg"
                        >
                            Discount Code
                        </label>
                        <input type="text" className="w-64 px-2" id="code" />
                    </div>
                    <button
                        type="submit"
                        className="border shadow-xl px-2 py-1 rounded-lg bg-purpleText text-purpleBgAlt text-center font-semibold text-lg"
                    >
                        Submit
                    </button>
                </form>
                <div id="price-display"></div>
            </div>
        </div>
    );
}

export default ContactMe;
