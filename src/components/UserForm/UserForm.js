import { Form, Label, Field, NameInput } from './UserFrom.styled';

export const UserForm = () => {
  return (
    <Form>
      <Label>
        <NameInput>Name</NameInput>
        <Field type="text" name="name" />
      </Label>
      <Label>
        <NameInput>Email</NameInput>
        <Field type="email" name="email" />
      </Label>
      <Label>
        <NameInput>Phone</NameInput>
        <Field type="tel" name="phone" />
      </Label>
      <Label>
        <NameInput>Address</NameInput>
        <Field type="text" name="address" />
      </Label>
    </Form>
  );
};
