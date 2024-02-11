document.addEventListener('DOMContentLoaded', function () {
    // Najdeme tlačítko pro potvrzení odpovědí
    var submitBtn = document.getElementById('submitBtn');

    // Přidáme posluchače událostí pro kliknutí na tlačítko
    submitBtn.addEventListener('click', function () {
        // Zde je stávající kód pro potvrzení odpovědí
        var questions = document.querySelectorAll('.question');
        var allCorrect = true;

        questions.forEach(function (question) {
            var selectedOption = question.querySelector('input[type=radio]:checked');
            if (!selectedOption || selectedOption.value !== question.dataset.correct) {
                allCorrect = false;
            }
        });

        if (allCorrect) {
            window.location.href = 'valentine.html';
        } else {
            alert('Odpovězte prosím na všechny otázky správně.');
        }
    });
});
