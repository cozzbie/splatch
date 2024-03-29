import { expect } from 'expect';
import { mask } from './mask';

describe('Global Mask', () => {
    it('should splatch out all parts', () => {
        const text = 'abcdefghijk';

        expect(mask({ text })).toEqual('***********');
    });

    it('should splatch out all parts but the first item', () => {
        const text = 'abcdefghijk';
        const config = { start: 1 };

        expect(mask({ text, config })).toEqual('a**********');
    });

    it('should splatch out all parts but the first and last items', () => {
        const text = 'abcdefghijk';
        const config = { start: 1, end: 1 };

        expect(mask({ text, config })).toEqual('a*********k');
    });

    it('should splatch out only the gutters', () => {
        const text = 'abcdefghijk';
        const config = { start: 1, end: 1, gutter: 3 };

        expect(mask({ text, config })).toEqual('a***efg***k');
    });

    it('should splatch out gutters and skip', () => {
        const text = 'abcdefghijk';
        const config = {
            start: 1,
            end: 1,
            gutter: 3,
            skip: 2
        };

        expect(mask({ text, config })).toEqual('a***ef***jk');
    });

    it('should splatch out extra start and end sections', () => {
        const text = 'abcdefghijk';
        const config = { start: 3, end: 3 };

        expect(mask({ text, config })).toEqual('abc*****ijk');
    });

    it('should splatch partial', () => {
        const text = 'Doe';
        const config = { start: 1, end: 0 };

        expect(mask({ text, config })).toEqual('D**');
    });
});
