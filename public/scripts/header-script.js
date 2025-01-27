
// Declare the variables and get the elements from the DOM.
const title = document.querySelector('.portfolio-title');
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('.search-input');
const searchEnter = document.querySelector('.search-enter');

// Declare the titles deck shuffle
let titles = ["portfolio", "projects!", "touch_grass.", 'another late night of coding...'];
let currentTitle = 0;

// Add the event listener to the search enter and exit button
function searchBoxState(state) {
    if(state) {
        // enable search box
        searchEnter.style.opacity = '0';
        setTimeout(() => {
            searchEnter.style.display = 'none';
            searchBox.style.display = 'flex';
            setTimeout(() => {
                searchBox.style.opacity = '1';
                searchBox.style.boxShadow = '0 0 10px #00000044';
                searchInput.style.width = '248px';
            }, 25);
        }, 200);
    } else {
        // enable search box
        searchInput.style.width = '0';
        searchBox.style.boxShadow = 'none';
        searchBox.style.opacity = '0';
        setTimeout(() => {
            searchBox.style.display = 'none';
            searchEnter.style.display = 'block';
            setTimeout(() => {
                searchEnter.style.opacity = '1';
            }, 25);
        }, 500);
    }
}

// Function to shuffle the titles in the header
function animateTitle(text, remove) {
    if(!remove) {
        // Add the text to the title
        if(text.length < titles[currentTitle].length) {
            // Change the text in the title
            title.innerText = titles[currentTitle].substring(0, text.length + 1);
            
            // Calls the function to add the text to the title
            setTimeout(() => {
                animateTitle(titles[currentTitle].substring(0, text.length + 1), false);
            }, 100);
        }else{
            // Calls the function to remove the text from the title
            setTimeout(() => {
                animateTitle(titles[currentTitle], true);
            }, 1000);
        }
    }else{
        // Remove the text from the title
        if(text.length > 0) {
            // Change the text in the title
            title.innerText = titles[currentTitle].substring(0, text.length - 1);
            
            // Calls the function to remove the text from the title
            setTimeout(() => {
                animateTitle(titles[currentTitle].substring(0, text.length - 1), true);
            }, 100);
        }else{
            // Change the current title
            currentTitle++;

            if(currentTitle >= titles.length) {
                currentTitle = 0;
            }
            
            // Calls the function to add the text to the
            setTimeout(() => {
                animateTitle('', false);
            }, 500);
        }
    }
}

//Calls the function to start the title animation
animateTitle('');