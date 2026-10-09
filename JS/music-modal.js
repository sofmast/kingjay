/* =========================================================
   KING JAY THUG LIFE
   MUSIC LIBRARY ENGINE
   ========================================================= */


/* =========================================================
   MUSIC DATA
   BACKEND-READY STRUCTURE
   ========================================================= */

const musicLibrary = [

    {
        id: "song-001",

        title: "Rise from Ashley",

        artist: "King Jay",

        artwork:
            "images/kingjay (1).jpeg",

        audioUrl:
            "music/KingJay ThügLïfê _Rises From Ashley_prod_by_Mediar .mp3.mp3",

        downloadUrl:
            "music/KingJay ThügLïfê _Rises From Ashley_prod_by_Mediar .mp3.mp3",

        duration: "03:42",

        releaseDate:
            "2026-09-01"
    },


    {
        id: "song-002",

        title: "I Choose you",

        artist: "Anko Charlie",

        artwork:
            "images/mej.jpg",

        audioUrl:
            "music/UKUBA NAIWE.mp3",

        downloadUrl:
            "music/UKUBA NAIWE.mp3",

        duration: "04:08",

        releaseDate:
            "2026-08-15"
    },


    {
        id: "song-003",

        title: "Lions Den",

        artist: "King Jay Thug Life",

        artwork:
            "images/kingjay (1).jpeg",

        audioUrl:
            "music/King Jay Thug Life  x Star Girl __Lions Den_RixioningMusicafrica.mp3.mp3",

        downloadUrl:
            "music/King Jay Thug Life  x Star Girl __Lions Den_RixioningMusicafrica.mp3.mp3",

        duration: "03:27",

        releaseDate:
            "2026-08-01"
    }

];


/* =========================================================
   ELEMENTS
   ========================================================= */

const musicModal =
    document.getElementById(
        "music-modal"
    );

const musicClose =
    document.getElementById(
        "music-close"
    );

const musicList =
    document.getElementById(
        "music-list"
    );

const musicSearch =
    document.getElementById(
        "music-search"
    );

const musicCount =
    document.getElementById(
        "music-count"
    );

const musicEmpty =
    document.getElementById(
        "music-empty"
    );

const musicAudio =
    document.getElementById(
        "music-audio"
    );

const playerArtwork =
    document.getElementById(
        "player-artwork"
    );

const playerTitle =
    document.getElementById(
        "player-title"
    );

const playerArtist =
    document.getElementById(
        "player-artist"
    );

const playerStatus =
    document.getElementById(
        "player-status"
    );

const playerPlay =
    document.getElementById(
        "player-play"
    );

const playingIndicator =
    document.getElementById(
        "music-playing-indicator"
    );


let currentSong = null;


/* =========================================================
   OPEN MUSIC
   ========================================================= */

function openMusic() {

    if (!musicModal) return;

    musicModal.classList.add(
        "active"
    );

    musicModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "music-is-open"
    );

    renderMusicLibrary();

    setTimeout(() => {

        if (musicSearch) {
            musicSearch.focus();
        }

    }, 250);
}


/* =========================================================
   CLOSE MUSIC
   ========================================================= */

function closeMusic() {

    if (!musicModal) return;

    musicModal.classList.remove(
        "active"
    );

    musicModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "music-is-open"
    );
}


/* =========================================================
   MUSIC NAVIGATION
   ========================================================= */

document
    .querySelectorAll(".music-open")
    .forEach(link => {

        link.addEventListener(
            "click",
            function(event) {

                event.preventDefault();

                openMusic();

            }
        );

    });


/* =========================================================
   CLOSE EVENTS
   ========================================================= */

document
    .querySelectorAll("[data-music-close]")
    .forEach(element => {

        element.addEventListener(
            "click",
            closeMusic
        );

    });


if (musicClose) {

    musicClose.addEventListener(
        "click",
        closeMusic
    );

}


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape" &&
            musicModal &&
            musicModal.classList.contains(
                "active"
            )
        ) {

            closeMusic();

        }

    }
);


/* =========================================================
   RENDER MUSIC
   ========================================================= */

function renderMusicLibrary(
    searchTerm = ""
) {

    if (!musicList) return;

    const term =
        searchTerm
            .trim()
            .toLowerCase();


    const filteredSongs =
        musicLibrary.filter(song => {

            return (
                song.title
                    .toLowerCase()
                    .includes(term)

                ||

                song.artist
                    .toLowerCase()
                    .includes(term)
            );

        });


    musicList.innerHTML = "";


    if (musicCount) {

        musicCount.textContent =
            `${filteredSongs.length} ${
                filteredSongs.length === 1
                    ? "track"
                    : "tracks"
            }`;

    }


    if (
        filteredSongs.length === 0
    ) {

        if (musicEmpty) {
            musicEmpty.hidden = false;
        }

        return;

    }


    if (musicEmpty) {
        musicEmpty.hidden = true;
    }


    filteredSongs.forEach(
        (song, index) => {

            const item =
                document.createElement(
                    "article"
                );

            item.className =
                "music-item";


            if (
                currentSong &&
                currentSong.id === song.id
            ) {

                item.classList.add(
                    "active"
                );

            }


            item.innerHTML = `

                <div class="music-art">

                    <img
                        src="${song.artwork}"
                        alt="${escapeMusicText(song.title)}"
                        loading="lazy"
                    >

                    <span class="music-item-number">
                        ${index + 1}
                    </span>

                </div>


                <div class="music-info">

                    <h4 class="music-title">
                        ${escapeMusicText(song.title)}
                    </h4>

                    <p class="music-artist">
                        ${escapeMusicText(song.artist)}
                    </p>

                    <span class="music-meta">
                        ${escapeMusicText(song.duration)}
                    </span>

                </div>


                <div class="music-actions">

                    <button
                        type="button"
                        class="music-action"
                        data-song-play="${song.id}"
                        aria-label="Play ${escapeMusicText(song.title)}"
                    >
                        ▶
                    </button>


                    <a
                        href="${song.downloadUrl}"
                        class="music-action download"
                        download
                        aria-label="Download ${escapeMusicText(song.title)}"
                    >
                        ↓
                    </a>

                </div>

            `;


            musicList.appendChild(
                item
            );

        }
    );


    musicList
        .querySelectorAll(
            "[data-song-play]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                function() {

                    const songId =
                        this.dataset.songPlay;

                    playSong(songId);

                }
            );

        });

}


/* =========================================================
   PLAY SONG
   ========================================================= */

function playSong(songId) {

    const song =
        musicLibrary.find(
            item =>
                item.id === songId
        );


    if (!song) return;


    currentSong = song;


    musicAudio.src =
        song.audioUrl;


    playerArtwork.src =
        song.artwork;


    playerArtwork.alt =
        song.title;


    playerTitle.textContent =
        song.title;


    playerArtist.textContent =
        song.artist;


    playerStatus.textContent =
        "NOW PLAYING";


    musicAudio.play()
        .then(() => {

            updatePlayerState(
                true
            );

            renderMusicLibrary(
                musicSearch
                    ? musicSearch.value
                    : ""
            );

        })
        .catch(() => {

            updatePlayerState(
                false
            );

        });

}


/* =========================================================
   PLAYER PLAY / PAUSE
   ========================================================= */

if (playerPlay) {

    playerPlay.addEventListener(
        "click",
        function() {

            if (!currentSong) {

                if (
                    musicLibrary.length
                ) {

                    playSong(
                        musicLibrary[0].id
                    );

                }

                return;

            }


            if (
                musicAudio.paused
            ) {

                musicAudio.play()
                    .then(() => {

                        updatePlayerState(
                            true
                        );

                    });

            } else {

                musicAudio.pause();

                updatePlayerState(
                    false
                );

            }

        }
    );

}


/* =========================================================
   AUDIO EVENTS
   ========================================================= */

if (musicAudio) {

    musicAudio.addEventListener(
        "play",
        function() {

            updatePlayerState(
                true
            );

        }
    );


    musicAudio.addEventListener(
        "pause",
        function() {

            updatePlayerState(
                false
            );

        }
    );


    musicAudio.addEventListener(
        "ended",
        function() {

            updatePlayerState(
                false
            );

            playerStatus.textContent =
                "FINISHED";

        }
    );

}


/* =========================================================
   PLAYER STATE
   ========================================================= */

function updatePlayerState(
    isPlaying
) {

    if (!playerPlay) return;


    if (isPlaying) {

        playerPlay.textContent =
            "Ⅱ";

        playerPlay.setAttribute(
            "aria-label",
            "Pause song"
        );

        if (playingIndicator) {

            playingIndicator.classList.add(
                "active"
            );

        }

    } else {

        playerPlay.textContent =
            "▶";

        playerPlay.setAttribute(
            "aria-label",
            "Play song"
        );

        if (playingIndicator) {

            playingIndicator.classList.remove(
                "active"
            );

        }

    }

}


/* =========================================================
   SEARCH
   ========================================================= */

if (musicSearch) {

    musicSearch.addEventListener(
        "input",
        function() {

            renderMusicLibrary(
                this.value
            );

        }
    );

}


/* =========================================================
   SAFE TEXT
   ========================================================= */

function escapeMusicText(
    value
) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   INITIAL RENDER
   ========================================================= */

renderMusicLibrary();
