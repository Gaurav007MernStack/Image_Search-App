import React, { useState } from 'react';
import axios from "axios";
import {Nav} from './Navbar';
export const Wallpaper = ()=>{
    const [data,setdata] = useState({
        item: "",
        time: Date().toLocaleString()
    });
    const [img,setImg] = useState([]);
    const clientId = "1CPKCRt1qngzR4twn7LHzxxRe49YOQMHjOehpHqiZ8E";
    
    const handleSearchChange=(e)=>{
        const {name, value} = e.target
        setdata({
            item: "",
            time: Date().toLocaleString()
        })
        setdata({...data,[name]:value},)
        
    };

    const OnFormSubmit = (e)=>{
        e.preventDefault();
        console.log(data);
        getImage();
        post();
    };
    //fetch data(image) from API
    const getImage = async()=>{
        try {
            const res = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${data.item}&client_id=${clientId}`);
            
            setImg(res.data.results);
        } catch (error) {
            console.log("error",error);
        }
    };
    //Post Api into DB
    const post = async()=>{
        try {
            await axios.post(`http://localhost:7000/addFriend`,data);
            setdata({
                item: "",
                time: Date().toLocaleString()
            })
        } catch (error) {
            console.log("error",error);
        }
    };
    return(
        <div>
            <div><Nav /></div>
            <div className="Wallpaper">
                <h1>Home</h1>
                <form onSubmit={(e)=>OnFormSubmit(e)}>
                    <div className="input">
                    <input 
                        type="text" 
                        placeholder="item" 
                        value={data.item}
                        className="input1"
                        name="item"
                        onChange={(e)=>handleSearchChange(e)}/>
                    </div>
                    <div className="input">
                    <input 
                        value={data.time}
                        name="time"
                        className="input2"
                        onChange={(e)=>handleSearchChange(e)}>
                        
                    </input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                <div>
                    {
                        img.map((item)=>{
                            return(
                                <img src={item.urls.small} alt={data.item}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};












//https://api.unsplash.com/search/photos?page=1&query=javascript&client_id=1CPKCRt1qngzR4twn7LHzxxRe49YOQMHjOehpHqiZ8E

