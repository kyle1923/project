document.addEventListener('DOMContentLoaded', () => {
    const userCardTemplate = document.querySelector("[data-user-template]")
    const userCardContainer = document.querySelector("[data-user-cards-container]")
    const searchInput = document.querySelector("[data-search]")

    let drink = []
    searchInput.addEventListener("input", e => {
        const value = e.target.value.toLowerCase()

        drink.forEach(user => {
            const isVisible =
                user.strDrink.toLowerCase().includes(value) ||
                user.strGlass.toLowerCase().includes(value)
            user.element.classList.toggle("hide", !isVisible)
        })
    })

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")

        .then(res => res.json())
        //.then(data => console.log(data.drinks))
        .then(data => {
            drink = data.drinks.map(user => {
                // data.drinks.forEach(user => {
                const card = userCardTemplate.content.cloneNode(true).children[0]
                //  console.log(keys)
                const header = card.querySelector("[data-header]")
                const body = card.querySelector("[data-body]")
                const body1 = card.querySelector("[data-body1]")
                const body2 = card.querySelector("[data-body2]")

                const image = card.querySelector("[image]")



                header.textContent = user.strDrink
                body.textContent = user.strGlass


                body2.textContent = user.strIngredient1 + " " + user.strMeasure1 + ", " + user.strIngredient2 + " " + user.strMeasure2 + ", " + " " + user.strIngredient3 + " " + user.strMeasure3

                body1.textContent = user.strInstructions
                image.src = user.strDrinkThumb
                header.addEventListener("mouseover", event => {
                    if (event.target.style.color === "purple") {
                        event.target.style.color = "black"
                    } else { event.target.style.color = "purple" }
                })



                userCardContainer.append(card)
                return {
                    strDrink: user.strDrink, strGlass: user.strGlass, strInstructions: user.strInstructions, strDrinkThumb: user.strDrinkThumb,
                    element: card
                }


            })
            

        })
        let drink1 = []
    searchInput.addEventListener("input", e => {
        const value = e.target.value.toLowerCase()

        drink1.forEach(user => {
            const isVisible =
                user.strDrink.toLowerCase().includes(value) ||
                user.strGlass.toLowerCase().includes(value)
            user.element.classList.toggle("hide", !isVisible)
        })
    })
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")

        .then(res => res.json())
        //.then(data => console.log(data.drinks))
        .then(data => {
            drink1 = data.drinks.map(user => {
                // data.drinks.forEach(user => {
                const card = userCardTemplate.content.cloneNode(true).children[0]
                //  console.log(keys)
                const header = card.querySelector("[data-header]")
                const body = card.querySelector("[data-body]")
                const body1 = card.querySelector("[data-body1]")
                const body2 = card.querySelector("[data-body2]")

                const image = card.querySelector("[image]")



                header.textContent = user.strDrink
                body.textContent = user.strGlass


                body2.textContent = user.strIngredient1 + " " + user.strMeasure1 + ", " + user.strIngredient2 + " " + user.strMeasure2

                body1.textContent = user.strInstructions
                image.src = user.strDrinkThumb
                header.addEventListener("mouseover", event => {
                    if (event.target.style.color === "purple") {
                        event.target.style.color = "black"
                    } else { event.target.style.color = "purple" }
                })



                userCardContainer.append(card)
                return {
                    strDrink: user.strDrink, strGlass: user.strGlass, strInstructions: user.strInstructions, strDrinkThumb: user.strDrinkThumb,
                    element: card
                }


            })
            

        })



})

