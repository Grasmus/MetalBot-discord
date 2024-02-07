const { createAudioPlayer, AudioPlayerStatus, NoSubscriberBehavior } = require('@discordjs/voice');

const MusicPlayerStates = {
    Idle: 'Idle',
    Playing: 'Playing',
    Paused: 'Paused',
    Error: 'Error'
}

class MusicPlayer {
    #player;
    #currentState = MusicPlayerStates.Idle;

    constructor () {
        this.#player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Pause,
            },
        });

        this.#player.on(AudioPlayerStatus.Idle, () => {
            this.#currentState = MusicPlayerStates.Idle
        })
        
        this.#player.on(AudioPlayerStatus.Buffering, () => {
            console.log('Buffering...');
        });
        
        this.#player.on(AudioPlayerStatus.AutoPaused, () => {
            console.log('Autopaused');
        });
        
        this.#player.on(AudioPlayerStatus.Playing, () => {
            console.log('The audio player has started playing!');
            this.#currentState = MusicPlayerStates.Playing
        });
        
        this.#player.on(AudioPlayerStatus.Paused, () => {
            console.log('The audio player is paused!');
            this.#currentState = MusicPlayerStates.Paused
        });
        
        this.#player.on('error', error => {
            console.error(`player:`);
            console.error(error);
            his.#currentState = MusicPlayerStates.Error
        });
    }

    pause() {
        return this.#player.pause();
    }

    unpause() {
        return this.#player.unpause();
    }

    stop() {
        this.#player.stop();
    }

    play(resource) {
        this.#player.play(resource);
    }

    getPlayer() {
        return this.#player;
    }

    getCurrentState() {
        return this.#currentState
    }
}

module.exports = { MusicPlayer, MusicPlayerStates };
