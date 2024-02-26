document.addEventListener("DOMContentLoaded", function() {
    
    var chevronDownButtons = document.querySelectorAll('.faq-altera');
    
    chevronDownButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            
            var parentDiv = this.parentElement;
            
            parentDiv.classList.toggle('active');
        });
    });
});