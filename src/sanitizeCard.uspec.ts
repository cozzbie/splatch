import { expect } from 'expect';
import { sanitizeCard } from './sanitizeCard';

describe('Sanitize Cards', () => {
    it('should blotch out parts of a card', () => {
        const card = '1234-5678-1234-5678';

        expect(sanitizeCard({ card })).toEqual('****-****-****-5678');
    });

    it('should blotch out the first and last sections', () => {
        const card = '1234-5678-1234-5678';
        const config = {
            sections: [
                {
                    index: 0,
                    config: { start: 4 }
                },
                {
                    index: 3,
                    config: { start: 4 }
                }
            ]
        };

        expect(sanitizeCard({ card, config })).toEqual('1234-****-****-5678');
    });
});
