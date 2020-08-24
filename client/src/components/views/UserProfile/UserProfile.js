import React,{useEffect, useState} from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import Axios from 'axios';

function UserProfile(props) {
    

    console.log(props.user)
    // async function f() {

    //     let promise = new Promise((resolve, reject) => {
    //       setTimeout(() => resolve(props.user.userData), 2000)
    //     });
      
    //     let result = await promise; // wait until the promise resolves (*)
      
    //     console.log(result); // "done!"
    //   }
      
    //   f();

    useEffect(() => {
        Axios.post('api/product/getProductsByUser',)
        .then(response =>{
            if(response.data.success){
                console.log(response.data)
            } else{
                alert('Failed to get products by user')
            }
        })
    },[]) 
    

    return (
        <div>
            
        </div> 
    )
}

export default UserProfile
