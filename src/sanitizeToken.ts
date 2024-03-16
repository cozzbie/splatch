import { GenericConfig } from './interfaces/GenericConfig';
import { sanitizeGeneric } from './sanitizeGeneric';

export const sanitizeToken = (props: { token: string; config?: GenericConfig; }) => {
    const { token, ...rest } = props;
    return sanitizeGeneric({ ...rest, entry: token, seperator: '-' });
};
