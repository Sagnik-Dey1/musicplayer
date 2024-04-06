document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const songTitle = document.getElementById('songTitle');
    const singerName = document.getElementById('singerName');
    const banner = document.getElementById('banner');
    const songList = document.getElementById('songList');
    const nowPlaying = document.getElementById('nowPlaying');
    const currentSong = document.getElementById('currentSong');

    function updateSongDetails(title, singer, bannerSrc) {
        songTitle.textContent = title;
        singerName.textContent = singer;
        banner.src = bannerSrc;
        currentSong.textContent = title;
    }

    function playSong(song) {
        audioPlayer.src = song.dataset.src;
        audioPlayer.play();
        updateSongDetails(song.dataset.title, song.dataset.singer, song.dataset.banner);
    }

    songList.addEventListener('click', function (event) {
        if (event.target.tagName === 'SPAN') {
            playSong(event.target.parentNode);
        }
    });
    
    const loopButton = document.getElementById('loopButton');
    loopButton.addEventListener('click', function () {
        audioPlayer.loop = !audioPlayer.loop; // Toggle the loop attribute
    });
});
