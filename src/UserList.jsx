import { useEffect } from "react";
import { userDataStore } from "./userDataStore"


export default function UserList(props) {
    const { data, isLoading, error, fetchUsers } = userDataStore();
    useEffect(() => {
        fetchUsers("https://jsonplaceholder.typicode.com/posts")
    }, [fetchUsers]);
    if (isLoading) return <h1>Loading results.........</h1>
    if (error) return <p>Error:{error}</p>
    return <>
        <ul>
        {
                data.map(user => <li key={user.id}>{user.id}&nbsp;{user.title}<br />{ user.body}<br/></li>)
        }</ul>
    </>
}