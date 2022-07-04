import axios from "axios";
import router from "../../router";

export async function LoginAPI(username, password){
    await axios({
        url: "http://localhost:3001/log",
        method: "POST",
        data: {
            username: username,
            password: password
        }
    }).then((response)=> {
        console.log(response)
        localStorage.setItem('token',response.data);
        router.push({
            name: "logged"
        })
    }).catch((e)=> {
        throw new Error(e)
        //localStorage.setItem('token','red');
    })
    
}