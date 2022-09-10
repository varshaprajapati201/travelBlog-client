import axios from "axios";

const URL="https://travelblog150.herokuapp.com";

export const addArticle= async (data)=>{
    try{
 return await axios.post(`${URL}/add`,data,{mode:'cors'});
    }catch (error){
        console.log("error while calling addArticle Api",error);
    }
}

export const getArticle = async () =>{
try{
    return await axios.get(`${URL}/all`); 
}catch(error){
    console.log("error while calling get Article api ", error);
}

}

export const getArticleToEdit = async (id)=> {
    try{
return await axios.get(`${URL}/${id}`);
    }catch(error){
        console.log("error while calling get Article to edit api ", error);
    }
}


export const editArticle = async (article,id)=>{
    try{
return await axios.post(`${URL}/${id}`,article);
    }catch(error){
        console.log("error while calling edit Article api ", error);
    }
}

export const deleteArticle = async (id)=>{
    try{
return await axios.delete(`${URL}/${id}`);
    }catch(error){
        console.log("error while calling delete Article api ", error);
    }
}


