import { expect } from 'expect';
import { sanitizeEmail } from './sanitizeEmail';

describe('Sanitize Email', () => {
    it('should block out parts of an email', () => {
        const email = 'jane@doe.com';

        expect(sanitizeEmail({ email })).toEqual('j**e@**e.com');
    });

    it('should block out parts of an email', () => {
        const email = 'jan@doe.com';

        expect(sanitizeEmail({ email })).toEqual('***@**e.com');
    });
});
