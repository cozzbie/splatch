import { defaultGenericConfig } from '../defaultConfig';

export interface GenericConfig {
    all?: Partial<typeof defaultGenericConfig>
    sections?: {
        index?: number;
        config?: Partial<typeof defaultGenericConfig>
    }[];
}
