import axios from "axios";

export async function queryAPI(status){
    await axios({
        url: "http://localhost:3001/issue",
        method: "POST",
        data:{
            status: status
        }
    }).then((response)=>{
        return response.data
    }).catch((e)=>{
        throw new Error(e)
    })

}
export async function repoConfig(user,token,project){
    try{
        const res = await axios({
            url: "http://localhost:3001/configRepos",
            method: "POST",
            data:{
                user,
                token,
                project
            }
        })
        return res
    }catch(e){
        throw new Error(e);
    }
    
}