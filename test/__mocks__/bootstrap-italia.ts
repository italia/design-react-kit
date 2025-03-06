const bsi: any = {};

const player = Object.create({
    'log': 'Log'
});

class VP {
    player = player

    constructor(el: Element) {
        console.log(el);
    }
}

bsi.VideoPlayer = VP;

module.exports = bsi;
