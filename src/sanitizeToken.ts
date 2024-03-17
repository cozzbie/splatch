import { defaultGenericConfig } from './defaultConfig';
import { GenericConfig } from './interfaces/GenericConfig';
import { sanitizeGeneric } from './sanitizeGeneric';

export const sanitizeToken = (props: { token: string; config?: GenericConfig; }) => {
    const { token, ...rest } = props;
    const dotSeparator = token.includes('.') && '.';
    const dashSeparator = token.includes('-') && '-';
    const seperator = dotSeparator || dashSeparator || ' ';

    return sanitizeGeneric({
        ...rest,
        entry: token,
        seperator,
        config: {
            all: {
                start: 0,
                end: 0
            },
            sections: [
                {
                    index: token.split(seperator).length - 1,
                    config: {
                        ...defaultGenericConfig,
                        start: 0,
                        end: 4
                    }
                }
            ],
            ...rest.config
        }
    });
};
