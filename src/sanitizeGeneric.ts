import { defaultGenericConfig } from './defaultConfig';
import { GenericConfig } from './interfaces/GenericConfig';
import { mask } from './mask';

export const sanitizeGeneric = (props: { entry: string; config?: GenericConfig, seperator: string }) => {
    const { entry, config, seperator } = props;
    const plucked = entry.split(seperator);
    const baseConfig: GenericConfig = {
        sections: [
            {
                index: plucked.length - 1,
                config: {
                    ...defaultGenericConfig,
                    start: [...plucked].pop()?.length
                }
            }
        ]
    };
    const { sections } = { ...baseConfig, ...config };
    const entries = plucked.map((text, idx) => {
        const { config } = sections.find(({ index }) => idx === index) || { config: defaultGenericConfig };
        return mask({ text, config });
    });

    return entries.join(seperator);
};
