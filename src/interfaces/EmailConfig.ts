import { defaultEmailConfig } from '../defaultConfig';

export interface EmailConfig {
    local?: Partial<typeof defaultEmailConfig>;
    domain?: Partial<typeof defaultEmailConfig>;
    tld?: Partial<typeof defaultEmailConfig>;
}
