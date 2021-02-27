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
            <div>
                <h1>History</h1>
                {/*<button onClick={fetchUser}>Chech History</button>*/}
                {
                    history.map((item)=>{
                        return(
                            <div>
                                <div>
                                    <p>{item.item}</p>
                                    <button onClick={() =>deleteItem(item._id)}>X</button>
                                </div>
                                <div>
                                    <p>{item.time}</p>
                                </div>
                                
                            </div>
                        )   
                    })
                }
            </div>
        </div>
    )
};