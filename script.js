// JavaScript code for Pokémon Card Trading

// Define an array of Pokémon card objects
const pokemonCards = [
    { name: 'Pikachu', image: 'pikachu.png', description: 'Electric type' },
    { name: 'Charizard', image: 'charizard.png', description: 'Fire and Flying type' },
    { name: 'Bulbasaur', image: 'bulbasaur.png', description: 'Grass and Poison type' },
    // Add more card objects as needed
  ];
  
  // Function to render the Pokémon cards
  function renderPokemonCards() {
    const cardContainer = document.querySelector('.card-container');
  
    pokemonCards.forEach((card) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
  
      const imgElement = document.createElement('img');
      imgElement.src = card.image;
      imgElement.alt = card.name;
      cardElement.appendChild(imgElement);
  
      const nameElement = document.createElement('h3');
      nameElement.textContent = card.name;
      cardElement.appendChild(nameElement);
  
      const descElement = document.createElement('p');
      descElement.textContent = card.description;
      cardElement.appendChild(descElement);
  
      cardContainer.appendChild(cardElement);
    });
  }
  
  // Function to handle the form submission for trading Pokémon cards
  function handleTradingFormSubmit(event) {
    event.preventDefault();
  
    // Get the input values
    const playerName = document.querySelector('#player-name').value;
    const playerCard = document.querySelector('#player-card').value;
    const wantedCard = document.querySelector('#wanted-card').value;
  
    // Perform form validation
    if (!playerName || !playerCard || !wantedCard) {
      alert('Please fill in all fields.');
      return;
    }
  
    if (playerCard === wantedCard) {
      alert('You cannot trade a card for itself.');
      return;
    }
  
    // Perform trading logic
    // ...
  
    // Reset the form
    event.target.reset();
  
    // Show success message
    alert('Trade submitted successfully!');
  }
  
  // Event listener for form submission
  const tradingForm = document.querySelector('.trading form');
  tradingForm.addEventListener('submit', handleTradingFormSubmit);
  
  // Render the Pokémon cards on the "Cards" page
  if (window.location.pathname === '/cards.html') {
    renderPokemonCards();
  }
  