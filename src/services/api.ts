import axios from "axios"
import md5 from "md5"


const publicKey = 'a00741f258aa9c7fe03f1560c4cc57f2'
const privateKey = '7501417603865f37317485400aa24c7b1b3014f3'
const ts = Number(new Date())

const hash = md5(ts + privateKey + publicKey)

const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts,
        apikey: publicKey,
        hash,
    }
})

export default api