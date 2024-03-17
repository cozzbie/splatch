### Blotch

Flexible Log sanitization/masking.

The library comes from the position of _what you want show_ as opposed to _what you do not want to show_ and what this means is that by default...everything is hidden (some exceptions exist like for emails where the default shows some entries conditionally).

#### Features

You can pretty much mask anything but the focus here is on objects with fields to be masked
- Cards
- Emails
- Tokens
etc

#### Install

`yarn add --exact blotch`


#### How to use

```javascript
import { blotch } from 'blotch';

const entry = {
    name: 'Jane Doe',
    email: 'jane@doe.com',
    business: {
        businessEmail: 'biz@izzy.com'
    }
};
const configs = {
    email: {
        fields: [/email/],
        config: {
            local: {
                start: 2
            }
        }
    }
};

const result = blotch({ entry, configs });

// {
//  name: 'Jane Doe',
//  email: 'ja*e@**e.com',
//  business: {
//      businessEmail: 'bi*@i**y.com'
//  }
// }
```

Currently 3 configurations are exposed via configurations

- Email

```javascript
const configs = {
    email: {
        fields: [/email/, 'anotherEmailField'],
        config: {
            local: {
                start: 2, // where you would want the mask to start from
                end: 1, // where you would want the mask to end
                mask: '*' // masking symbol to use
            },
            domain: {
                start: 2, // where you would want the mask to start from
                end: 1, // where you would want the mask to end
                mask: '$' // masking symbol to use
            },
            tld: {
                start: 2, // where you would want the mask to start from
                end: 1, // where you would want the mask to end
                mask: '^' // masking symbol to use
            }
        }
    }
};
```

- Cards/Tokens

```javascript
const configs = {
    card: {
        fields: [/credit/, 'debit'],
        config: {
            sections: [
                {
                    index: 0, // Select how you want a sectio of the card to be masked
                    config: {
                        start: 4 // where you would want the mask to start from
                    }
                },
                {
                    index: 3,
                    config: { start: 4 }
                }
            ]
        }
    }
};
```

- Phone Numbers

```javascript
const configs = {
    phone: {
        fields: [/phone/, 'phoneNumber'],
        config: {
            start: 4, // where you would want the mask to start from. Default is 4
            end: 0, // where you would want the mask to end
            mask: '*' // masking symbol to use
        }
    }
};
```

#### Report Bugs

Well, #$%$ happens, please report here https://github.com/cozzbie/blotch/issues


#### License

[MIT © Timi Aiyemo](https://cozzbie.mit-license.org/)