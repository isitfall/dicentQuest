document.addEventListener('DOMContentLoaded', () => {
    function changeColor () {
        const cards = document.querySelectorAll('.main__card__category');

        cards.forEach((item, index) => {
            if (index%2 != 0) {
                item.style.cssText = `background-color: #FE5353;`
            }
        })
    } 

    changeColor();
})