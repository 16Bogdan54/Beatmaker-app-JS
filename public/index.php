<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <title>Beats</title>
    <script src="https://kit.fontawesome.com/438840d36f.js" crossorigin="anonymous"></script>
    <link rel="apple-touch-icon" sizes="76x76" href="/beatmaker/assets/favicon_package_v0.16/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/beatmaker/assets/favicon_package_v0.16/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/beatmaker/assets/favicon_package_v0.16/favicon-16x16.png">
    <link rel="manifest" href="/beatmaker/assets/favicon_package_v0.16/site.webmanifest">
    <link rel="mask-icon" href="/beatmaker/assets/favicon_package_v0.16/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    
    <div class="sequencer">
        <div class="kick-track">
            <div class="controls">
              <h2>Kick</h2>
              <button data-track="0" class="mute kick-volume">
                <i class="fas fa-volume-mute"></i>
              </button>
              <div class="select-custom">
                <select class="select-standart" name="kick-select" id="kick-select">
                    <option value="/audio/kick-classic.wav">Classic Kick</option>
                    <option value="/audio/kick-808.wav">808 Kick</option>
                    <option value="/audio/kick-heavy.wav">Kick Heavy</option>
                    <option value="/audio/kick-softy.wav">Kick Softy</option>
                  </select>
                  <i class="fas fa-caret-down"></i>
              </div>
            </div>
            <div class="kick">
              <?php  
                for($i = 0; $i < 8; $i++) {
                  echo "<div class='pad kick-pad b$i'></div>";
                }
              ?>
            </div>
        </div>
        <div class="snare-track">
            <div class="controls">
              <h2>Snare</h2>
              <button data-track="1" class="mute snare-volume">
                <i class="fas fa-volume-mute"></i>
              </button>
              <div class="select-custom">
                <select class="select-standart" name="snare-select" id="snare-select">
                    <option value="/audio/snare-acoustic01.wav">Classic Snare</option>
                    <option value="/audio/snare-808.wav">808 Snare</option>
                    <option value="/audio/snare-vinyl02.wav">Snare Vinyl</option>
                </select>
                <i class="fas fa-caret-down"></i>
              </div>
            </div>
            <div class="snare">
              <?php  
                for($i = 0; $i < 8; $i++) {
                  echo "<div class='pad snare-pad b$i'></div>";
                }
              ?>
            </div>
        </div>
        <div class="hihat-track">
            <div class="controls">
              <h2>Hihat</h2>
              <button data-track="2" class="mute hihat-volume">
                <i class="fas fa-volume-mute"></i>
              </button>
              <div class="select-custom">
                <select class="select-standart" name="hihat-select" id="hihat-select">
                    <option value="/audio/hihat-acoustic01.wav">Hihat Acoustic</option>
                    <option value="/audio/hihat-808.wav">808 Hihat</option>
                </select>
                <i class="fas fa-caret-down"></i>
              </div>
            </div>
            <div class="hihat">
              <?php  
                for($i = 0; $i < 8; $i++) {
                  echo "<div class='pad hihat-pad b$i'></div>";
                }
              ?>
            </div>
        </div>

        <div class="tempo">
            <input type="range" class="tempo-slider" max="300" min="10" value="150"/>
            <p>Tempo: <span class="tempo-nr">150</span></p>
        </div>

        <div class="music-control">
            <button class="play"><i class="fas fa-play"></i><span>Play</span></button>
        </div>
    </div>

    <audio class="kick-sound" src="/beatmaker/audio/kick-classic.wav"></audio>
    <audio class="snare-sound" src="/beatmaker/audio/snare-acoustic01.wav"></audio>
    <audio class="hihat-sound" src="/beatmaker/audio/hihat-acoustic01.wav"></audio>

    <script src="./index.js"></script>
</body>
</html>