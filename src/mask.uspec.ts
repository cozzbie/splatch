import { expect } from 'expect';
import { mask } from './mask';

describe('Global Mask', () => {
    it('should block out all parts', () => {
        const text = 'abcdefghijk';

        expect(mask({ text })).toEqual('***********');
    });

    it('should block out all parts but the first item', () => {
        const text = 'abcdefghijk';
        const config = { start: 1 };

        expect(mask({ text, config })).toEqual('a**********');
    });

    it('should block out all parts but the first and last items', () => {
        const text = 'abcdefghijk';
        const config = { start: 1, end: 1 };

        expect(mask({ text, config })).toEqual('a*********k');
    });

    it('should block out only the gutters', () => {
        const text = 'abcdefghijk';
        const config = { start: 1, end: 1, gutter: 3 };

        expect(mask({ text, config })).toEqual('a***efg***k');
    });

    it('should block out only the gutters', () => {
        const text = 'abcdefghijk';
        const config = { start: 1, end: 1, gutter: 3, skip: 2 };

        expect(mask({ text, config })).toEqual('a***ef***jk');
    });
});