import axios from "axios";

export async function LoginAPI(username, password){
    const response = await axios({
        url: "http://localhost:3001/log",
        method: "POST",
        data: {
            username: this.username,
            password: this.password
        }
    })
    return response;
}