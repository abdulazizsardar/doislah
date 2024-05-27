import axios from "axios"

const uri = 'http://localhost:1971'
export const getPost = (slug) => {
    return new Promise ((resolve, reject)=>{
        axios.get(`${uri}/post/${slug}`).then((e)=>{
            resolve(e.data)
        }).catch((e)=>{
            reject(e)
        })

    })
}

