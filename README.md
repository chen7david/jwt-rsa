# jwt-rsa
wrapper that combines jsonwetokens and node-rsa in one simple interface, 


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
Th edfault options:
- algorithm: 'RS256'
- expiresIn: '30m'

you can override any of these default setting by passing your own into your options object at instantiation. 