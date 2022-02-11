class DrumKit {
    constructor(){
        this.playButton = document.querySelector('.play');
        this.pads = document.querySelectorAll('.pad');
        this.kickAudio = document.querySelector('.kick-sound');
        this.snareAudio = document.querySelector('.snare-sound');
        this.hihatAudio = document.querySelector('.hihat-sound');
        this.index = 0;
        this.bpm = 150;
        this.isPlaying = null;
        this.selectFields = document.querySelectorAll('.select-standart');
        this.muteButtons = document.querySelectorAll('.mute');
        this.tempoSlider = document.querySelector('.tempo-slider');
    }

    repeat() {
        let step = this.index % 8;
        const activePads = document.querySelectorAll(`.b${step}`);

        activePads.forEach(pad => {
            pad.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
            if(pad.classList.contains('active')) {
               
                if(pad.classList.contains('kick-pad')) {
                    this.kickAudio.currentTime = 0;
                    this.kickAudio.play();
                }

                if(pad.classList.contains('snare-pad')) {
                    this.snareAudio.currentTime = 0;
                    this.snareAudio.play();
                }

                if(pad.classList.contains('hihat-pad')) {
                    this.hihatAudio.currentTime = 0;
                    this.hihatAudio.play();
                }
            } 
        });

        this.index++;
    }

    updateControl() {
        if(!this.isPlaying) {
            this.playButton.innerHTML = `<i class="fas fa-pause"></i><span>Pause</span>`;
        } else {
            this.playButton.innerHTML = `<i class="fas fa-play"></i><span>Play</span>`;
        }
    }

    activatePad(e) {

        if(e.target.classList.contains("active")) {
            e.target.classList.toggle("active");
            e.target.style.backgroundColor = "rgb(37, 36, 36)";
        } else {
            e.target.classList.toggle("active");
            e.target.style.backgroundColor = "rgb(2, 110, 11)";
        }
    }

    changeSound(e) {
        switch(e.target.name) {
            case "kick-select":
                this.kickAudio.src = e.target.value;
                break;

            case "snare-select":
                this.snareAudio.src = e.target.value;
                break;

            case "hihat-select":
                this.hihatAudio.src = e.target.value;
                break;

            default:
                break;

        }

    }

    mute(e) {

        switch(parseInt(e.target.getAttribute("data-track"))) {
            case 0:
                const kickPadsActive = document.querySelectorAll('.kick-pad.active')

                if(!this.kickAudio.muted) {
                    this.kickAudio.muted = true;
                    kickPadsActive.forEach(kickPad => {
                        kickPad.style.backgroundColor = "rgb(216, 193, 63)"
                    })
                } else {
                    this.kickAudio.muted = false;
                    kickPadsActive.forEach(kickPad => {
                        kickPad.style.backgroundColor = "rgb(2, 110, 11)"
                    })
                }

                break;

            case 1:

                const snarePadsActive = document.querySelectorAll('.snare-pad.active')

                if(!this.snareAudio.muted) {
                    this.snareAudio.muted = true;
                    snarePadsActive.forEach(snarePad => {
                        snarePad.style.backgroundColor = "rgb(216, 193, 63)"
                    })
                } else {
                    this.snareAudio.muted = false;
                    snarePadsActive.forEach(snarePad => {
                        snarePad.style.backgroundColor = "rgb(2, 110, 11)"
                    })
                }

                break;

            case 2:

                const hihatPadsActive = document.querySelectorAll('.hihat-pad.active')

                if(!this.hihatAudio.muted) {
                    this.hihatAudio.muted = true;
                    hihatPadsActive.forEach(hihatPad => {
                        hihatPad.style.backgroundColor = "rgb(216, 193, 63)"
                    })
                } else {
                    this.hihatAudio.muted = false;
                    hihatPadsActive.forEach(hihatPad => {
                        hihatPad.style.backgroundColor = "rgb(2, 110, 11)"
                    })
                }

                break;

            default:
                break;
        }
    }

    changeTempo() {
        this.tempoSlider.addEventListener('input', () => {

            const tempNr = document.querySelector('.tempo-nr');
            tempNr.innerHTML = this.tempoSlider.value;

            this.bpm = this.tempoSlider.value;
            clearInterval(this.isPlaying);
            this.isPlaying = null;

            const interval = (60 / this.bpm) * 1000;
            this.isPlaying = setInterval(() => {
                this.repeat();
            }, interval)
        })
    }

    setupPads() {
        this.pads.forEach(pad => {
            pad.addEventListener('click', (e) => {
                this.activatePad(e);
            });
            pad.addEventListener('animationend', function() {
                this.style.animation = "";
            })
        });
    }

    setupPlayButton() {
        this.playButton.addEventListener('click', () => {
            this.start()
        });
    }

    setupSelects() {
        this.selectFields.forEach(selectField => {
            selectField.addEventListener('change', (e) => {
                this.changeSound(e);
            })
        })
    }

    setupMuteButtons() {
        this.muteButtons.forEach(muteButton => {
            muteButton.addEventListener('click', (e) => {
                this.mute(e);
            })
        })
        
    }

    setup() {
        this.setupPads();
        this.setupPlayButton()
        this.setupSelects();
        this.setupMuteButtons()
    }

    start() {
        this.updateControl();
        this.changeTempo();
        const interval = (60 / this.bpm) * 1000;
        
        if(!this.isPlaying) {
            this.isPlaying = setInterval(() => {
                this.repeat();
            }, interval)
        } else {
            clearInterval(this.isPlaying);
            this.isPlaying = null;
        }

    }

}

const drumKit = new DrumKit();
drumKit.setup()
