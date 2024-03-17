import { defaultGenericConfig } from './defaultConfig';

interface Mask {
    text: string;
    config?: Partial<typeof defaultGenericConfig>
}

export const mask = (props: Mask) => {
    const { text, config } = props;
    const {
        masker,
        start,
        end,
        gutter,
        skip
    } = { ...defaultGenericConfig, ...config };
    const wipe: number[][] = [];
    const range = text.length;
    const jump = range - end;

    for (let i = start; i < jump;) {
        const endValue = gutter ? gutter + i : jump;

        wipe.push([i, endValue]);
        i += (((skip || gutter) - 1) + endValue);
    }

    const initial = text.split('');
    const cleanGutters = wipe.reduce((a, b) => {
        const [s, e] = b;

        return a.fill(masker, s, e);
    }, initial);

    return cleanGutters.join('');
};
