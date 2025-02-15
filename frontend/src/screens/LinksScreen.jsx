import LinkCard from './../components/LinkCard'
import { useEffect, useState } from 'react';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const {VITE_APP_BACKEND_API_BASE_URL} = import.meta.env

import './LinksScreen.css'

const LinksScreen = ()=>{

    const navigate = useNavigate()

    const [urlsData, setUrlsData] = useState([])
 
    useEffect(()=>{
      (async()=>{
        
        // first check token is present in the localstorage or not
        const token = localStorage.getItem("token")
        if(!token){
          navigate("/auth/signin")
        }

        // if present that's mean user is signedin user, we can call fetch all urls of user api 
        const API_URL = VITE_APP_BACKEND_API_BASE_URL + "/user/urls"
        const config = {
          headers : {
            'Authorization' : `Bearer ${token}`
          }
        }


        try{

          const urlsApiResponse = await axios.get(API_URL, config)
          const {success, message, data} = urlsApiResponse.data

          if(success && data.length>0){
            setUrlsData(data)
          }

        }catch(err){

          alert("Error whiling featching the URLS")

        }
        })()

    },[])

    function formatDate(timestamp) {
      const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      const year = date.getFullYear();
      
      return `${day}/${month}/${year}`;
    }

    // const [count, setCount] = useState(0)

    // const [playersCount, setPlayersCount] = useState(0)

    // this is an example of mount/render case
    // useEffect(()=>{
    //   console.log("I am showing you how render/mount lifecycle of component looks like")
    // },[])

    // this is an example of mount/render + rerendering case
    // useEffect(()=>{
    //   console.log("count - I am showing you how render/mount + rerendering lifecycle of component looks like")
    // },[count])

    // useEffect(()=>{
    //   console.log("playersCount - I am showing you how render/mount + rerendering lifecycle of component looks like")
    // },[playersCount])

    // useEffect(()=>{
    //   console.log("I will run every time") 
    // })

    return (
        <div id='links-screen'>
            <h1>Links</h1>
            {/*<button onClick={()=>{
              setCount(prevCount=>prevCount+1)
            }}>ADD</button>*/}
            {/*<button
              onClick={()=>{
                setPlayersCount(prevCount=>prevCount+1)
              }}
            >ADD Player</button>*/}
            <div className='links-container'>
                {urlsData.map((element)=>{
                    return <LinkCard 
                        originalURL={element.originalUrl}
                        redirectURL={VITE_APP_BACKEND_API_BASE_URL.split("/api/v1")[0]+`/${element.keyId}`}
                        clickedCount={element.clickedCount}
                        createDate={formatDate(element.createdAt)}
                    />
                })}
            </div>
        </div>
    )
}

export default LinksScreen