import { GenericConfig } from './interfaces/GenericConfig';
import { sanitizeGeneric } from './sanitizeGeneric';

export const sanitizeText = (props: { text: string; config?: GenericConfig }) => {
    const { text = '', ...rest } = props;

    return sanitizeGeneric({
        ...rest,
        entry: text,
        seperator: ' ',
        config: {
            all: {
                start: 1,
                end: 1,
            },
            sections: text.split(' ').map((t, index) => ({
                ...(t.length < 4 && { index, config: { start: 1, end: 0 } }),
                ...(t.length < 3 && { index, config: { start: 0, end: 0 } }),
            })).filter(({ index }) => index !== undefined),
            ...rest.config
        }
    });
};
