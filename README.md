# jwt-rsa
wrapper that combines <code>jsonwebtokens</code> and <code>node-rsa</code> node-modules in one simple interface.


#### Getting Started
```js
const Token = require('jwt-rsa')
const AccessToken = new Token(/* dir-path-of-rsa-keys*/)
const accessToken = AccessToken.sign({/* payload */})
const verified = AccessToken.verify(accessToken)
```

#### Options
The default options parameter are:
- algorithm: 'RS256'
- expiresIn: '30m'

you can override any of these by passing in your own options' object at instantiation as shown in the example below. 

```js
const Token = require('jwt-rsa')
const AccessToken = new Token(/* dir-path-of-rsa-keys*/, {
    algorithm: 'RS256', 
    expiresIn: '30m',
    /* add more options here ... */
})
```