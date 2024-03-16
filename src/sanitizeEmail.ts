import { EmailConfig } from './interfaces/EmailConfig';
import { defaultEmailConfig } from './defaultConfig';
import { mask } from './mask';


export const sanitizeEmail = (props: { email: string; config?: EmailConfig }) => {
    const { email, config } = props;
    const {
        local: localConfig,
        domain: domainConfig,
        tld: tldConfig
    } = config || {};
    const lastDotIndex = email.lastIndexOf('.');
    const lastAtIndex = email.lastIndexOf('@');
    const local = email.slice(0, lastAtIndex);
    const domain = email.slice(lastAtIndex + 1, lastDotIndex);
    const tld = email.slice(lastDotIndex);

    const obfuscatedLocal = mask({
        text: local,
        config: {
            ...defaultEmailConfig,
            ...(local.length < 4 && {
                start: 0,
                end: 0,
            }),
            ...localConfig,
        }});
    const obfuscatedDomain = mask({
        text: domain,
        config: {
            ...defaultEmailConfig,
            ...(domain.length < 4 && {
                start: 0,
                end: 1,
            }),
            ...domainConfig
        }});
    const obfuscatedTld = mask({
        text: tld,
        config: {
            ...defaultEmailConfig,
            ...{
                start: tld.length,
                end: 0
            },
            ...tldConfig
        }});

    const value = `${obfuscatedLocal}@${obfuscatedDomain}${obfuscatedTld}`;

    return value;
};
