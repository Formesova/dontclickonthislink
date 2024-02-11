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

    // Najdeme tlačítka pro odpovědi na otázku Valentýna
    var yesBtn = document.getElementById('yesBtn');
    var noBtn = document.getElementById('noBtn');

    // Přidáme posluchače událostí pro kliknutí na tlačítka
    if (yesBtn) { // Kontrola existence tlačítka "Ano"
        yesBtn.addEventListener('click', function () {
            // Přesměrování na stránku result.html při kliknutí na tlačítko "Ano"
            window.location.href = 'result.html';
        });
    }
    if (noBtn) { // Kontrola existence tlačítka "Ne"
        noBtn.addEventListener('click', function () {
            // Zde můžete přidat kód, který se spustí při kliknutí na tlačítko "Ne"
            // Například zobrazení zprávy nebo další akce
        });
    }
});
