import  axios from "axios";


const getClient = () =>{
    const options ={
        baseURL : process.env.REACT_APP_BASE_URL || 'https://api.jumbo-weather.com',
        'Content-type' : 'application/json',
        validateStatus:function(status){
            return status >= 200 && status < 500;
        },
    };

    //Can add other common headers like authentication(if applicable, here)

    const client =axios.create(options);

    return client;
};




export class ApiClient {
    constructor(url =null){
        this.client = getClient(url);
    }

    get(url,conf = {}){
        console.log(conf)
        return this.client
            .get(url,conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }
    delete(url,conf = {}){
        return this.client
                .delete(url,conf)
                .then(response => Promise.resolve(response))
                .catch(error => Promise.reject(error));
    }
    head(url ,conf ={}){
        return this.client
                .head(url.conf)
                .then(response => Promise.resolve(response))
                .catch(error => Promise.reject(error));
    }
    options(url ,conf ={}){
        return  this.client
                .options(url,conf)
                .then(response => Promise.resolve(response))
                .catch(error => Promise.reject(error));
    }
    post(url, data ={}, conf = {}){
        console.log(url,data,conf);
        return this.client
                .post(url,data,conf)
                .then(response => Promise.resolve(response))
                .catch(error => Promise.reject(error))
    }
    put(url, data = {}, conf = {}){
        return this.client
                .put(url,data,conf)
                .then(response => Promise.resolve(response))
                .catch(error => Promise.reject(error))
    }

    patch(url, data = {}, conf = {}){
        return this.client
                .patch(url,data,conf)
                .then(response => Promise.resolve(response))
                .catch(error => Promise.reject(error))
    }


}

