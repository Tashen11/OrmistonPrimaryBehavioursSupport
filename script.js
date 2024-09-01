document.addEventListener('DOMContentLoaded', function() {
    
    const popup = document.getElementById('welcome-popup');
    const continueButton = document.getElementById('continue-button');
    const mainContent = document.getElementById('main-content');
    
    continueButton.addEventListener('click', function() {
        popup.style.display = 'none';
        mainContent.style.display = 'block';
    });

    
    const interventionButtons = document.querySelectorAll('.intervention-button');
    
    interventionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const solutionContainer = this.nextElementSibling;
            const solutionInput = solutionContainer.querySelector('.solution-input');
            const saveButton = solutionContainer.querySelector('.save-solution');
            const behaviour = this.previousElementSibling.textContent;
            
            if (solutionContainer.style.display === 'none' || solutionContainer.style.display === '') {
                solutionContainer.style.display = 'block';
                const savedSolution = localStorage.getItem(behaviour);
                solutionInput.value = savedSolution || '';
            } else {
                solutionContainer.style.display = 'none';
            }

            saveButton.onclick = function() {
                localStorage.setItem(behaviour, solutionInput.value);
                alert('Solution saved for ' + behaviour);
            };
        });
    });
});
