import { defaultGenericConfig } from './defaultConfig';
import { mask } from './mask';

export const sanitizeText = (props: { text: string; config?: typeof defaultGenericConfig }) => {
    const { text, config } = props;

    return mask({
        text,
        config: {
            ...defaultGenericConfig,
            ...{
                start: 1,
                end: 1
            },
            ...config
        }
    });
};
