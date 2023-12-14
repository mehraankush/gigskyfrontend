import axios from 'axios'
import  Cookies from 'js-cookie'
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_API;

export const signupApi = async(data:any)=>{
    try{
     return await axios.post(`${BACKEND_URL}/api/userRoutes/createuser`,data)
    }catch(err){
        console.log(err)
        console.log('Error in signup')
        throw new Error(err?.response?.data)
    }
}

export const signinApi = async(data:any)=>{
    try{
     return await axios.post(`${BACKEND_URL}/api/userRoutes/login`,data)
    }catch(err){
        console.log('Error in signup')
    }
}
export const transactionApi = async(data:any)=>{
    const token:any = Cookies.get('token')
    try{
     return await axios.post(`${BACKEND_URL}/api/detailsRoutes/createdetails`,data,{
        headers:{
            'Content-Type':'application/json',
            Authorization:token
        }
     })
    }catch(err){
        console.log('Error in transactionApi')
    }
}
export const UpiFraud = async(data:any)=>{
    try{
     return await axios.get(`${BACKEND_URL}/api/detailsRoutes/checkdetails/${data}`)
    }catch(err){
        console.log('Error in upi fraud')
    }
}