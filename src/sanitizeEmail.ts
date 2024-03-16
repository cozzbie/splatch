import { mask } from './mask';

const defaultConfig = {
    masker: '*',
    start: 1,
    end: 1,
    gutter: 0,
    skip: 0,
};

export const sanitizeEmail = (props: { email: string; config?: Partial<typeof defaultConfig> }) => {
    const { email, config } = props;
    const lastDotIndex = email.lastIndexOf('.');
    const lastAtIndex = email.lastIndexOf('@');
    const local = email.slice(0, lastAtIndex);
    const domain = email.slice(lastAtIndex + 1, lastDotIndex);
    const tld = email.slice(lastDotIndex);

    const obfuscatedLocal = mask({
        text: local,
        config: {
            ...defaultConfig,
            ...config,
            ...(local.length < 4 && {
                start: 0,
                end: 0,
            })
        }});
    const obfuscatedDomain = mask({
        text: domain,
        config: {
            ...defaultConfig,
            ...config,
            ...(domain.length < 4 && {
                start: 0,
                end: 1,
            })
        }});
    const value = `${obfuscatedLocal}@${obfuscatedDomain}${tld}`;

    return value;
};
