import { useState } from 'react'
import './Friends.css'
import { useEffect } from 'react';
import Friend from './Friend';
export default function Friends() {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, []);
    return (
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend fdId={friend.id} friend={friend}></Friend>)
            }

        </div>
    )
}