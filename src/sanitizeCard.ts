import { mask } from './mask';

interface BaseConfig {
    sections: {
        index: number;
        config?: Partial<typeof defaultConfig>
    }[];
}

const defaultConfig = {
    masker: '*',
    start: 0,
    end: 0,
    gutter: 0,
    skip: 0,
};

export const sanitizeCard = (props: { card: string; config?: BaseConfig }) => {
    const { card, config } = props;
    const plucked = card.split('-');
    const baseConfig: BaseConfig = {
        sections: [
            {
                index: plucked.length - 1,
                config: {
                    ...defaultConfig,
                    start: [...plucked].pop()?.length
                }
            }
        ]
    };
    const { sections } = { ...baseConfig, ...config };
    const entries = plucked.map((text, idx) => {
        const { config } = sections.find(({ index }) => idx === index) || { config: defaultConfig };
        return mask({ text, config });
    });

    return entries.join('-');
};
