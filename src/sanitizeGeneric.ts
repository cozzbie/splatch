import { defaultGenericConfig } from './defaultConfig';
import { GenericConfig } from './interfaces/GenericConfig';
import { mask } from './mask';

export const sanitizeGeneric = (props: { entry: string; config?: GenericConfig, seperator: string }) => {
    const { entry = '', config, seperator } = props;
    const plucked = entry.split(seperator);
    const { all, sections = [] } = config || {};

    const entries = plucked.map((text, idx) => {
        const { config: cfg } = sections.find(({ index }) => idx === index) || { config: all };

        return mask({
            text,
            config: {
                ...defaultGenericConfig,
                ...cfg,
            }
        });
    });

    return entries.join(seperator);
};
