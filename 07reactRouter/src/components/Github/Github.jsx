import React,{useState, useEffect} from 'react'
import { useLoaderData } from 'react-router'



function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/vkp000')
    //     .then((res) => res.json())
    //     .then( data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    return (
        // <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-lg'>Github Followers: {data['followers']}
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl rounded-lg'>Github Followers: {data['followers']}
        <div className="flex justify-center items-center">
        {/* <img className='rounded-lg p-4' src={data.avatar_url} alt='Git Picture' /> */}
        <img className='rounded-lg p-4' src={data.avatar_url} alt='Git Picture' />
        </div>
         </div>
    )
}

export default Github
 


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/vkp000')
    return response
}