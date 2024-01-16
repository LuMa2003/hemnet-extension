let easteregg = document.querySelector(".Navigation_list__fJe5Z").lastChild.firstChild

easteregg.innerHTML = "LuMa"

easteregg.href = "https://github.com/LuMa2003"

easteregg.target = "_blank"

let listingprice = parseInt(document.querySelector(".ListingPrice_listingPrice__jg_CG").innerHTML.replaceAll("&nbsp;", ""))

let costinfo = document.querySelectorAll(".ListingAttributes_attributesContainer__pIJX6")[1].children

let rent = parseInt(costinfo[0].lastChild.innerHTML.replaceAll("&nbsp;", ""))

let utilities = parseInt(costinfo[1].lastChild.innerHTML.replaceAll("&nbsp;", ""))

let loanamount = listingprice - (listingprice * 0.15)

costinfo[3].firstChild.innerHTML = "Månadskostnad"

costinfo[3].lastChild.innerHTML = new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK', maximumSignificantDigits: 4 }).format((loanamount*0.047/12) + (loanamount*0.02/12) +  rent + (utilities/12)) + "/mån"
