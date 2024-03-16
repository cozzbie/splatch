import { defaultGenericConfig } from '../defaultConfig';

export interface GenericConfig {
    sections: {
        index: number;
        config?: Partial<typeof defaultGenericConfig>
    }[];
}
