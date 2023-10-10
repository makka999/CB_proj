import React from "react"
import { Wrapper, Form, FormLegend, FormArea, Item, FormButton  } from "./styles"
export const LoginForm = () => {
    return (
        <Wrapper>
            <Form id="form" onSubmit={console.log("hello")}>
                <FormLegend>
                    <h1>Sign-in</h1>
                </FormLegend>
                <FormArea>
                    <Item>
                        <label for={"username"}>Username:</label>
                        <input name={"username"} type={"text"} placeholder={"np. Jan"} />
                    </Item>
                    <Item>
                        <label for={"password"}>Password:</label>
                        <input
                            name={"password"}
                            type={"password"}
                            placeholder={"np. PA$$w0RD"}
                        />
                    </Item>

                    <FormButton>Sign-in</FormButton>
                </FormArea>
            </Form>
        </Wrapper>
    );
}