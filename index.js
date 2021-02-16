const rsa = require('node-rsa')
const jwt = require('jsonwebtoken')
const fs = require('fs')
const p = require('path')

class Token {

    constructor(filepath, options = {}){
        this.filepath = filepath
        this.prikeypath = p.join(filepath, '/private.pem')
        this.pubkeypath = p.join(filepath, '/public.pem')
        this.options = options
        if(!options.algorithm) Object.assign(this.options, {algorithm: 'RS256'})
        if(!options.expiresIn) Object.assign(this.options, {expiresIn: '30m'})
        if(!this.exists(filepath)) {
            this.mkdir(filepath)
            this.prikey()
        }
    }

    renewKeys(){
        const key = new rsa().generateKeyPair()
        const pubkey = key.exportKey('public')
        const prikey = key.exportKey('private')
        fs.writeFileSync(this.prikeypath, prikey, 'utf8')
        fs.writeFileSync(this.pubkeypath, pubkey, 'utf8')
        return this
    }

    prikey(){
        if(!this.exists(this.prikeypath)) this.createNewKeys()
        return fs.readFileSync(this.prikeypath, 'utf8')
    }

    pubkey(){
        if(!this.exists(this.pubkeypath)) this.createNewKeys()
        return fs.readFileSync(this.pubkeypath, 'utf8')
    }

    sign(payload = {}){
        return jwt.sign(payload, this.prikey(), this.options)
    }

    verify(token){
        return jwt.verify(token, this.pubkey())
    }

    exists(path){
        return fs.existsSync(path)
    }

    mkdir(path){
        fs.mkdirSync(path, { recursive: true })
        return this
    }
    
}

module.exports = Token