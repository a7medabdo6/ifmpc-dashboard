import React from 'react'
import {

    Table,

} from "react-bootstrap";
import { useOneUsers } from "../../../../Api/User/index";

const OneUser = ({ username }) => {
    const { data, error, isLoading } = useOneUsers(username);
console.log(data);

    return (
        <div>
            <Table striped bordered hover>

                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>URL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data?.username}</td>
                        <td>{data?.name}</td>
                        <td>{data?.url}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default OneUser
