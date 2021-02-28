import React, {useState,useEffect} from 'react';
import {Nav} from './Navbar';
import axios from 'axios';

export const History = ()=> {
    //const data = props.data;
    //console.log(props)
    const [history,sethistory] = useState([]);
    const fetchUser = async()=>{
        try {
            const res = await axios.get(`http://localhost:7000/getFriendsFromDb`);
            sethistory(res.data);
        } catch (error) {
            console.log("error",error);
        }
    };
    //useEffect hook for get user
    useEffect(()=> {
        fetchUser();
    },[])
    //delete user from DB
    const deleteItem = async(_id)=>{
        try {
            const res = await axios.delete(`http://localhost:7000/deleteBYId/${_id}`);
            console.log("res",res);
            fetchUser();
        } catch (error) {
            console.log("error",error);
        }
        
    };
    return(
        <div >
            <Nav />
            <div className="History">
                <h1>History</h1>
                <div className="dataHead">
                {
                    history.map((item)=>{
                        return(
                            <div className="parHis">
                                <div className="ParLeft">
                                    <p className="item">{item.item}</p>
                                    <button className="btn" onClick={() =>deleteItem(item._id)}>X</button>
                                </div>
                                <div className="ParRight">
                                    <p className="time">{item.time}</p>
                                </div>
                                
                            </div>
                        )   
                    })
                }
                </div>
                
            </div>
        </div>
    )
};