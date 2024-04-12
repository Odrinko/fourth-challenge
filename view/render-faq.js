import faqHTML from "./faq.html?raw";


export const faqRender = (element) => {
    const htmlFaq = faqHTML;
    const faqContainer = document.createElement('section');
    faqContainer.classList.add('faq-container');
    faqContainer.innerHTML = htmlFaq;
    console.log('work');
    element.appendChild(faqContainer);
}