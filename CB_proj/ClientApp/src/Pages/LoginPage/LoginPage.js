import React from "react";
import { GeneralLayout } from "../../Layouts/GeneralLayout/GeneralLayout"
import { InfoWidget } from "../../components/InfoWidget/InfoWidget"
import {LoginForm} from "../../components/LoginForm/LoginForm"
export const LoginPage = () => {
    return <GeneralLayout left={<InfoWidget />} right={<LoginForm/>} />
};
