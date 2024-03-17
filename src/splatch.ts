import { GenericConfig } from './interfaces/GenericConfig';
import { EmailConfig } from './interfaces/EmailConfig';
import { sanitizeCard } from './sanitizeCard';
import { sanitizeEmail } from './sanitizeEmail';
import { sanitizeToken } from './sanitizeToken';
import { sanitizePhone } from './sanitizePhone';
import { defaultGenericConfig } from './defaultConfig';
import { sanitizeText } from './sanitizeText';

interface Splatch {
    entry: Record<string, unknown>;
    configs: {
        [key in keyof typeof filters]?: {
            fields?: (string | RegExp)[];
            config?: unknown;
        }
    }
}

const filters = {
    email: ({ value, config }: { value: string; config: unknown }) => sanitizeEmail({ email: value, config: config as EmailConfig }),
    card: ({ value, config }: { value: string; config: unknown }) => sanitizeCard({ card: value, config: config as GenericConfig }),
    token: ({ value, config }: { value: string; config: unknown }) => sanitizeToken({ token: value, config: config as GenericConfig }),
    phone: ({ value, config }: { value: string; config: unknown }) => sanitizePhone({ phone: value, config: config as typeof defaultGenericConfig }),
    text: ({ value, config }: { value: string; config: unknown }) => sanitizeText({ text: value, config: config as typeof defaultGenericConfig })
};

export const splatch = (props: Splatch) => {
    const { entry, configs = {} } = props;
    const configEntries = Object.entries(configs);
    const out: Record<string, unknown> = {};

    if (typeof entry !== 'object') {
        return entry;
    }

    for (const i in entry) {
        if (Object.hasOwn(entry, i)) {
            const value = entry[i];

            if (typeof value === 'object') {
                out[i] = splatch({ entry: value as Record<string, unknown>, configs });
            } else {
                for (const [filter, { fields = [], config }] of configEntries) {
                    if (fields.some((field) => RegExp(field, 'i').test(i))) {
                        const chosen = filters[filter as keyof typeof filters];
                        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                        out[i] = chosen ? chosen({ value: value as string, config }) : value;
                    } else {
                        out[i] = value;
                    }
                }
            }
        }
    }

    return out;
};
