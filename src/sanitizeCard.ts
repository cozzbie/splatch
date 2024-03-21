import { defaultGenericConfig } from './defaultConfig';
import { GenericConfig } from './interfaces/GenericConfig';
import { sanitizeGeneric } from './sanitizeGeneric';

export const sanitizeCard = (props: { card: string; config?: GenericConfig; }) => {
    const { card = '', ...rest } = props;
    const seperator = '-';

    return sanitizeGeneric({
        ...rest,
        entry: card,
        seperator,
        config: {
            all: {
                start: 0,
                end: 0
            },
            sections: [
                {
                    index: card.split(seperator).length - 1,
                    config: {
                        ...defaultGenericConfig,
                        start: [...card.split(seperator)].pop()?.length
                    }
                }
            ],
            ...rest.config
        }
    });
};
