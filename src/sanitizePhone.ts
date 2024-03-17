import { defaultPhoneConfig } from './defaultConfig';
import { mask } from './mask';

export const sanitizePhone = (props: { phone: string; config?: typeof defaultPhoneConfig }) => {
    const { phone, config } = props;

    return mask({
        text: phone,
        config: {
            ...defaultPhoneConfig,
            ...config
        }
    });
};
