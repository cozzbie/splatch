import { GenericConfig } from './interfaces/GenericConfig';
import { sanitizeGeneric } from './sanitizeGeneric';

export const sanitizeCard = (props: { card: string; config?: GenericConfig; }) => {
    const { card, ...rest } = props;
    return sanitizeGeneric({ ...rest, entry: card, seperator: '-' });
};
