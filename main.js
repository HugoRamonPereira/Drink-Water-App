const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remaining = document.getElementById('remaining');

updateBigCup()

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index))
});

function highlightCups(index) {

    // When we select 4 cups for example and if I click in the 4th cup once again
    // I want to remove the class of full from the 4th cup or whichever cup I click
    // by checking if the cup we clicked contains the class of full and if the cup 
    // after it in the Nodelist doesn't contain the class of full and thus it will 
    // remove the class from the current cup we click.
    if ( smallCups[index].classList.contains('full') 
        && !smallCups[index].nextElementSibling.classList.contains('full') 
        || smallCups[index].classList.contains('full') > smallCups[index].length) { index-- }

    // click to add the class of full to all previous items of the NodeList
    // if I click on the 4th cup I want all the 3 ones before to receive the class of full
    // and thus receive the specific styling that we added in the CSS
    smallCups.forEach((cup, index2) => {
        if ( index2 <= index) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length
 
    if ( fullCups === 0 ) {
        percentage.style.visibility = 'hidden';
        percentage.style.hidden = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`; 
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if ( fullCups == totalCups ) {
        remaining.style.visibility = 'hidden';
        remaining.style.height = 0;
    } else {
        remaining.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}


