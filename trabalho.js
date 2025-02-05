
function filterGames() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const filterValue = document.getElementById('filterSelect').value;

    const games = document.querySelectorAll('.nordeste, .paulista, .carioca');
    games.forEach(game => {
        const gameText = game.textContent.toLowerCase();
        const gameCategory = game.classList.contains('nordeste') ? 'nordeste' :
                            game.classList.contains('paulista') ? 'paulista' :
                            'carioca';

        if ((filterValue === 'all' || gameCategory === filterValue) && gameText.includes(searchText)) {
            game.style.display = 'block';
        } else {
            game.style.display = 'none';
        }
    });
}


function addNewGame() {
    const gameName = document.getElementById('newGameName').value;
    const gameResult = document.getElementById('newGameResult').value;
    const gameImageInput = document.getElementById('newGameImage');
    
    if (gameName && gameResult && gameImageInput.files.length > 0) {
        const newGameItem = document.createElement('li');
        newGameItem.textContent = `${gameName} - ${gameResult}`;
        
        const newGameImage = document.createElement('img');
        const fileReader = new FileReader();
        fileReader.onload = function(e) {
            newGameImage.src = e.target.result;
        };
        fileReader.readAsDataURL(gameImageInput.files[0]);
        
        newGameItem.appendChild(newGameImage);
        document.getElementById('newGamesList').appendChild(newGameItem);
        
        document.getElementById('newGameName').value = '';
        document.getElementById('newGameResult').value = '';
        document.getElementById('newGameImage').value = '';
    } else {
        alert('Por favor, preencha todos os campos e selecione uma imagem.');
    }
}