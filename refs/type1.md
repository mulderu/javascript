
## mailgun send
[link](https://github.com/strapi/strapi/blob/master/packages/strapi-provider-email-mailgun/lib/index.js)

- code
```javascript
const isObject = require('lodash/isObject');
const mailgunFactory = require('mailgun-js');

module.exports = {
  init: config => {
    return {
      send: options => {
        return new Promise((resolve, reject) => {
          // Default values.
          options = isObject(options) ? options : {};

          let msg = {
            from: options.from || config.mailgun_default_from,
            to: options.to,
            subject: options.subject,
            ...(options.text && { text: options.text }),
            ...(options.html && { html: options.html }),
            ...(options.template && { template: options.template }),
            ...(options['h:X-Mailgun-Variables'] && {
              'h:X-Mailgun-Variables': options['h:X-Mailgun-Variables'],
            }),
            ...(options.attachment && { attachment: options.attachment }),
          };
          msg['h:Reply-To'] = options.replyTo || config.mailgun_default_replyto;

          mailgun.messages().send(msg, function(err) {
            if (err) {
              reject([{ messages: [{ id: 'Auth.form.error.email.invalid' }] }]);
            } else {
              resolve();
            }
          });
        });
      },
    };
  },
};

```
