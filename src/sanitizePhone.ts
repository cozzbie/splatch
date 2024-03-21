import { defaultGenericConfig } from './defaultConfig';
import { mask } from './mask';

export const sanitizePhone = (props: { phone: string; config?: typeof defaultGenericConfig }) => {
    const { phone = '', config } = props;

    return mask({
        text: phone,
        config: {
            ...defaultGenericConfig,
            ...{ start: 4 },
            ...config
        }
    });
};
