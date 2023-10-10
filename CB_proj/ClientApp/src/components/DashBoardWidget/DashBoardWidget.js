import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
export const DashBoardWidget = () => {
    return (
        <>
            <table>
                <tr>
                    <th>ID</th>
                    <th>E-mail</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Menu</th>
                </tr>

                <tr>
                    <th>1</th>
                    <th>krutkowidz@gmail.com</th>
                    <th>Exarem</th>
                    <th>admin</th>
                    <th> <FontAwesomeIcon icon={ faBars} /></th>
                </tr>
            </table>
        </>
    );
}