const $ = (selector) => document.querySelector(selector)

const getDataFromAPI = () => {
    const data = fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => {
            const {id, advice} = data.slip
            return {id, advice}
        })

    return data
}

const renderAdvice = ($numberSpan, $text) => {
    getDataFromAPI()
        .then(data => {
            const {id, advice} = data
            renderData($numberSpan, id)
            renderData($text, advice)
        })
}



const renderData = (element, text) => element.textContent = text

window.addEventListener("DOMContentLoaded", () => {
    const $btn = $(".panel__icon")
    const $text = $(".panel__text")
    const $numberSpan = $(".js-number")

    renderAdvice($numberSpan, $text)
    $btn.addEventListener("click", () => renderAdvice($numberSpan, $text))
})


