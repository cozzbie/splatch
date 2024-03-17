import { defaultGenericConfig } from '../defaultConfig';

export interface EmailConfig {
    local?: Partial<typeof defaultGenericConfig>;
    domain?: Partial<typeof defaultGenericConfig>;
    tld?: Partial<typeof defaultGenericConfig>;
}
