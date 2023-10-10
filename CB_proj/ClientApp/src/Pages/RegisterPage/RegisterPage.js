import React from "react";
import { GeneralLayout } from "../../Layouts/GeneralLayout/GeneralLayout";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
import { InfoWidget } from "../../components/InfoWidget/InfoWidget"
export const RegisterPage = () => {
    return <GeneralLayout left={<InfoWidget /> } right={<RegisterForm />} />;
};
