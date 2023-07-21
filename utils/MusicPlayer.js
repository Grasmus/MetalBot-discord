const { createAudioPlayer, AudioPlayerStatus, NoSubscriberBehavior } = require('@discordjs/voice');

class MusicPlayer {
    #player;

    constructor () {
        this.#player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Pause,
            },
        });
        
        this.#player.on(AudioPlayerStatus.Buffering, () => {
            console.log('Buffering...');
        });
        
        this.#player.on(AudioPlayerStatus.AutoPaused, () => {
            console.log('Auto paused');
        });
        
        this.#player.on(AudioPlayerStatus.Playing, () => {
            console.log('The audio player has started playing!');
        });
        
        this.#player.on(AudioPlayerStatus.Paused, () => {
            console.log('The audio player is paused!');
        });
        
        this.#player.on('error', error => {
            console.error(`player:`);
            console.error(error);
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

    getPlayer()
    {
        return this.#player;
    }
}

module.exports = { MusicPlayer };
