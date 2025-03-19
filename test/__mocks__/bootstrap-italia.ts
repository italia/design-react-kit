const bsi: any = {};

const player = Object.create({
    'log': 'Log',
    'play': () => {}
});

class VP {
    player = player

    constructor(el: Element) {
        console.log(el);
    }

    setYouTubeVideo(video: string) {
        console.log(video);
    }

    dispose() {

    }
}

bsi.VideoPlayer = VP;

module.exports = bsi;
