// Sample FAQ Data
const faqData = [
    { question: "What is your return policy?", answer: "Our return policy lasts 30 days.", category: "general" },
    { question: "How do I reset my password?", answer: "Go to the account settings page.", category: "account" },
    { question: "Do you offer technical support?", answer: "Yes, we offer 24/7 technical support.", category: "technical" },
    { question: "How do I contact customer service?", answer: "You can contact us via email or phone.", category: "general" },
];


const faqList = document.querySelector('.faq-list');
const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('filterSelect');


function renderFAQs(filteredData) {
    faqList.innerHTML = '';
    filteredData.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');
        faqItem.innerHTML = `
        <h3>${item.question}</h3>
        <p>${item.answer}</p>
      `;
        faqItem.addEventListener('click', () => {
            faqItem.classList.toggle('active');
        });
        faqList.appendChild(faqItem);
    });
}


function filterFAQs() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = filterSelect.value;

    const filteredData = faqData.filter(item => {
        const matchesSearch = item.question.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    renderFAQs(filteredData);
}


searchInput.addEventListener('input', filterFAQs);
filterSelect.addEventListener('change', filterFAQs);


renderFAQs(faqData);


document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});