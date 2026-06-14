// Simple search functionality for the dictionary
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            filterTerms(this.value);
        });
    }
});

function filterTerms(searchValue) {
    const termCards = document.querySelectorAll('.term-card');
    const searchLower = searchValue.toLowerCase();
    
    termCards.forEach(card => {
        const word = card.querySelector('.term-word').textContent.toLowerCase();
        const definition = card.querySelector('.term-definition').textContent.toLowerCase();
        
        if (word.includes(searchLower) || definition.includes(searchLower)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Welcome message (optional)
console.log('Welcome to Panarchy! 🎉');