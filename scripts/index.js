(() => {
    const cardFrontDisplayNode = document.querySelector(".js-card-front");
    const cardBackDisplayNode = document.querySelector(".js-card-back");
    const cardRatingContainerNode = document.querySelector(".js-ratings");
    const cardRatingSubmitButtonNode = document.querySelector(".js-ratings-submit");
    const cardRatingResponseNode = document.querySelector(".js-rating-response");

    let previousActiveRatingNode = null;
    cardRatingContainerNode.addEventListener("click", (event) => {

        if (previousActiveRatingNode) {
            previousActiveRatingNode.classList.remove("card__rating--active");
        }
        previousActiveRatingNode = event.target;
        event.target.classList.add("card__rating--active");
    })

    cardRatingSubmitButtonNode.addEventListener("click", (event) => {
        if (previousActiveRatingNode) {
            cardFrontDisplayNode.classList.add("card__front--hidden");
            cardBackDisplayNode.classList.remove("card__back--hidden");
            cardRatingResponseNode.textContent = previousActiveRatingNode.textContent;
        }
    })

})();