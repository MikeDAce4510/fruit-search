// const input = document.querySelector('#fruit');
// const suggestions = document.querySelector('.suggestions ul');
const searchBar = document.getElementById('search-bar');
const suggestionsContainer = document.getElementById('suggestions');
const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];



        // Function to filter fruits based on user input
        function search() {
            const input = searchBar.value.toLowerCase();
            const results = fruits.filter(fruit => fruit.toLowerCase().includes(input));
            displaySuggestions(results);
        }

        // Function to display suggestions
        function displaySuggestions(results) {
            suggestionsContainer.innerHTML = '';
            results.forEach(result => {
                const div = document.createElement('div');
                div.textContent = result;
                div.className = 'suggestion';
                div.addEventListener('mouseover', () => highlightSuggestion(div));
                div.addEventListener('mouseout', () => unhighlightSuggestion(div));
                div.addEventListener('click', () => useSuggestion(result));
                suggestionsContainer.appendChild(div);
            });
        }

        // Function to highlight suggestion
        function highlightSuggestion(suggestion) {
            suggestion.style.backgroundColor = '#f0f0f0';
        }

        // Function to unhighlight suggestion
        function unhighlightSuggestion(suggestion) {
            suggestion.style.backgroundColor = 'white';
        }

        // Function to populate search bar with suggestion
        function useSuggestion(suggestion) {
            searchBar.value = suggestion;
            suggestionsContainer.innerHTML = ''; // Clear suggestions
        }

        // Event listener for input in search bar
        searchBar.addEventListener('input', search);

       