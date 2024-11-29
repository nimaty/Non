function filterVideos() {
    const input = document.getElementById('searchBar');
    const filter = input.value.toLowerCase();
    const videoGrid = document.getElementById('videoGrid');
    const videoItems = videoGrid.getElementsByClassName('video-item');

    for (let i = 0; i < videoItems.length; i++) {
        const title = videoItems[i].getAttribute('data-title').toLowerCase();
        if (title.indexOf(filter) > -1) {
            videoItems[i].style.display = '';
        } else {
            videoItems[i].style.display = 'none';
        }
    }
}

alert("MOVIE PLAY HOTI HAI WEBSERIES KI DOWENLOAD LINK HAI")
