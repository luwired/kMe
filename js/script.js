function showInfoAlbum(albumId) {
    const infos = document.querySelectorAll('.album-info');
    infos.forEach(info => info.style.display = 'none');
    const album = document.getElementById(albumId);
    album.style.display = 'block';
}

function showInfoMovie(movieId) {
    const infos = document.querySelectorAll('.movie-info');
    infos.forEach(info => info.style.display = 'none');
    const movie = document.getElementById(movieId);
    movie.style.display = 'block';
}

function showContent(id) {
    document.querySelector("#aboutContent").style.display = 'none';
    document.querySelector('#booksContent').style.display = 'none';
    document.querySelector('#moviesDocContent').style.display = 'none';
    document.querySelector('#artistsContent').style.display = 'none';
    document.getElementById(id).style.display = 'block';
}

function changeRoute() {
    const hash = window.location.hash.substring(1);
    if (hash === 'about') {
        showContent('aboutContent');
    } else if (hash === 'books') {
        showContent('booksContent');
    } else if (hash === 'movies_doc') {
        showContent('moviesDocContent');
    } else if (hash === 'artists') {
        showContent('artistsContent');
    }
}
window.addEventListener('hashchange', changeRoute);
changeRoute();

function copySong(trackName) {
    navigator.clipboard.writeText(trackName).then(function() {
        var popup = document.getElementById('popup');
        var popupMessage = document.getElementById('popup-message');
        popupMessage.textContent = "Copied the track: " + trackName;
        popup.style.display = 'block';
        setTimeout(function() {
            popup.style.display = 'none';
        }, 3000);
    }).catch(function(error) {
        console.log("Oops, something went wrong: " + error);
    });
}

function copyQuote(quoteText) {
    navigator.clipboard.writeText(quoteText).then(function() {
        var popup = document.getElementById('popup-movie');
        var popupMessage = document.getElementById('popup-message-movie');
        popupMessage.textContent = "Copied the quote: " + quoteText;
        popup.style.display = 'block';
        setTimeout(function() {
            popup.style.display = 'none';
        }, 3000);
    }).catch(function(error) {
        console.log("Oops, something went wrong: " + error);
    });
}

function showInfoBook(bookId) {
    const infos = document.querySelectorAll('.book-info');
    infos.forEach(info => info.style.display = 'none'); 
    const book = document.getElementById(bookId);
    book.style.display = 'block';
}
