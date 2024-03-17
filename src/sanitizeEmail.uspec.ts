import { expect } from 'expect';
import { sanitizeEmail } from './sanitizeEmail';

describe('Sanitize Email', () => {
    it('should splatch out parts of an email', () => {
        const email = 'jane@doe.com';

        expect(sanitizeEmail({ email })).toEqual('j**e@**e.com');
    });

    it('should splatch out parts of email with small lenghts', () => {
        const email = 'jan@doe.com';

        expect(sanitizeEmail({ email })).toEqual('***@**e.com');
    });

    it('should splatch out parts of an email using a config', () => {
        const email = 'january@december.com';
        const config = {
            local: {
                start: 2,
                end: 2
            },
            domain: {
                start: 2,
                end: 3
            }
        };

        expect(sanitizeEmail({ email, config })).toEqual('ja***ry@de***ber.com');
    });
});
