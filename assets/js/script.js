/* VARIABLES */

const faq1WhatIs = document.getElementById("faq1-what-is");
const faq2IsFree = document.getElementById("faq2-is-free");
const faq3ForPortfolio = document.getElementById("faq3-for-portfolio");
const faq4ImStuck = document.getElementById("faq4-im-stuck");

const faq1TextContent = document.querySelector(".faq1-text-content");
const faq2TextContent = document.querySelector(".faq2-text-content");
const faq3TextContent = document.querySelector(".faq3-text-content");
const faq4TextContent = document.querySelector(".faq4-text-content");


const plusIconSrc = "./assets/images/icon-plus.svg";
const minusIconSrc = "./assets/images/icon-minus.svg";


/* FUNCTIONS */

const displayFaqTextContent = (parent, whichTextContent, selector) => {
    parent.addEventListener("click", () => {
        whichTextContent.classList.toggle('display-hidden');
        const icon = document.querySelector(selector);
        if (icon.src.includes('icon-plus.svg')) {
            icon.src = minusIconSrc;
        } else {
            icon.src = plusIconSrc;
        }
    })
}

/* APPLY FUNCTIONS */

displayFaqTextContent(faq1WhatIs, faq1TextContent, "#faq1-what-is>div>img");
displayFaqTextContent(faq2IsFree, faq2TextContent, "#faq2-is-free>div>img");
displayFaqTextContent(faq3ForPortfolio, faq3TextContent, "#faq3-for-portfolio>div>img");
displayFaqTextContent(faq4ImStuck, faq4TextContent, "#faq4-im-stuck>div>img");
