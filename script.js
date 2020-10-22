const wordInput = document.querySelector('.word');
const checkButton = document.querySelector('.check-btn');

// event listener
checkButton.addEventListener('click', checkVowel)
// function
function checkVowel(event) {
    event.preventDefault()
    let counter = 0;
    let wordsInput = wordInput.value.toLowerCase();
    let letters = wordsInput.split("")
    letters.forEach((letter) => {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            counter += 1
        }
    });
    alert('There are ' + counter + ' vowels')
    wordInput.value = ''
}