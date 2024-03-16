interface Mask {
    text: string;
    config?: Partial<typeof defaultConfig>
}

const defaultConfig = {
    masker: '*',
    start: 0,
    end: 0,
    gutter: 0,
    skip: 0,
};

export const mask = (props: Mask) => {
    const { text, config } = props;
    const {
        masker,
        start,
        end,
        gutter,
        skip
    } = { ...defaultConfig, ...config };
    const wipe: number[][] = [];

    for (let i = start; i < (text.length - end);) {
        const endValue = gutter || (text.length - 1 - end);

        wipe.push([i, i + endValue]);
        i += (gutter + (skip || endValue));
    }

    const initial = text.split('');
    const cleanGutters = wipe.reduce((a, b) => {
        const [s, e] = b;

        return a.fill(masker, s, e);
    }, initial);

    return cleanGutters.join('');
};
