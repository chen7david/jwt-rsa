# jwt-rsa
wrapper that combines json-web-tokens and node-rsa in one simple interface, 


#### Getting Started
```js
const Token = require('jwt-rsa')
const AccessToken = new Token(/* dir-path-of-rsa-keys*/, {
    algorithm: 'RS256', 
    expiresIn: '30m',
    /* add more options here ... */
})


```

#### Options
The default options paramaters are:
- algorithm: 'RS256'
- expiresIn: '30m'

you can override any of these by passing in your own options' object at instantiation. 