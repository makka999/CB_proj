import React from "react";
import { GeneralLayout } from "../../Layouts/GeneralLayout/GeneralLayout";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";
export const RegisterPage = () => {
  return <GeneralLayout right={<RegisterForm />} />;
};
