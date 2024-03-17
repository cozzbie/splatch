import { GenericConfig } from './interfaces/GenericConfig';
import { sanitizeGeneric } from './sanitizeGeneric';

export const sanitizeText = (props: { text: string; config?: GenericConfig }) => {
    const { text, ...rest } = props;

    return sanitizeGeneric({
        ...rest,
        entry: text,
        seperator: ' ',
        config: {
            all: {
                start: 1,
                end: 1
            },
            sections: [{
                config: {
                    start: 1,
                    end: 1
                }
            }],
            ...rest.config?.sections
        }
    });
};
