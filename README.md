## splatch

Flexible Log sanitization/masking.

The library comes from the position of _what you want show_ as opposed to _what you do not want to show_ and what this means is that by default...everything is hidden (some exceptions exist like for emails where the default shows some entries conditionally).

### Features

You can pretty much mask anything but the focus here is on objects with fields to be masked
- Cards
- Emails
- Tokens
etc

### Install

- `yarn add --exact splatch`
- `npm i --save-exact --save @cozzbie/splatch`


### How to use

Without custom email configurations and using the defaults

```javascript
import { splatch } from 'splatch';

const entry = {
    name: 'Jane Doe',
    email: 'jane@doe.com',
    business: {
        businessEmail: 'biz@izzy.com'
    }
};
const configs = {
    email: {
        fields: [/email/]
    }
};

const result = splatch({ entry, configs });

// {
//  name: 'Jane Doe',
//  email: 'j**e@**e.com',
//  business: {
//      businessEmail: '***@i**y.com'
//  }
// }
```

With custom email configuration that you can specify.

```javascript
import { splatch } from 'splatch';

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

const result = splatch({ entry, configs });

// {
//  name: 'Jane Doe',
//  email: 'ja*e@**e.com',
//  business: {
//      businessEmail: 'bi*@i**y.com'
//  }
// }
```

### Configuration Default

|        | Description                                                                | Email | Card/Token/Generic | Phone |
|--------|----------------------------------------------------------------------------|-------|--------------------|-------|
| mask   | The symbol to be used with splatch/mask                                     | *     | *                  | *     |
| start  | Where to start the splatch/mask from                                        | 1     | 0                  | 4     |
| end    | Where to end the splatch/mask.                                              | 1     | 0                  | 0     |
| gutter | Total number of items to show between splatches.  Typically used with skip  | 0     | 0                  | 0     |
| skip   | Total number of items to splatch between gutters.                           | 0     | 0                  | 0     |


### Style Target Configurations

Currently 3 special types are exposed. Every other type can be expressed via providing custom configurations for the `token` type.

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
                    index: 0, // Select how you want a section of the card to be masked
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

### Report Bugs

Well, #$%$ happens, please report here https://github.com/cozzbie/splatch/issues


### License

[MIT © Timi Aiyemo](https://cozzbie.mit-license.org/)