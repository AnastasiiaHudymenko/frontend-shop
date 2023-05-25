import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { addUserData } from 'redux/operations';
import { Form, Label, Field, NameInput, BtnSend } from './UserFrom.styled';

export const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const sendUserForm = e => {
    e.preventDefault();

    addUserData(formData);
  };

  return (
    <Form onSubmit={sendUserForm}>
      <Label>
        <NameInput>Name</NameInput>
        <Field
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <NameInput>Email</NameInput>
        <Field
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <NameInput>Phone</NameInput>
        <Field
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <NameInput>Address</NameInput>
        <Field
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </Label>
      <BtnSend type="submit">Submit</BtnSend>
    </Form>
  );
};
