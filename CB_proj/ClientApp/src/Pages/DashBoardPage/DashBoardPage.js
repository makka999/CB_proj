import React from "react";
import { DashBoardWidget } from "../../components/DashBoardWidget/DashBoardWidget";
import { DashBoardLayout } from "../../Layouts/DashBoardLayout/DashBoardLayout"
export const DashBoardPage = () => {
    return <DashBoardLayout container={ <DashBoardWidget/>} />
};
