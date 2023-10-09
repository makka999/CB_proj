import {
  Wrapper,
  Form,
  FormButton,
  FormArea,
  FormLegend,
  Item,
} from "./styles";
const Database = [];

export const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const username = form.get("username");
    const password = form.get("password");
    Database.push({ username: username, password: password });
    console.log(Database);
  };

  return (
    <>
      <Wrapper>
        <Form id="form" onSubmit={handleSubmit}>
          <FormLegend>
            <h1>Sign-Up</h1>
          </FormLegend>
          <FormArea>
            <Item>
              <label for={"e-mail"}>E-mail:</label>
              <input
                name={"e-mail"}
                type={"text"}
                placeholder={"np. jan@gmail.com"}
              />
            </Item>

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
    </>
  );
};
