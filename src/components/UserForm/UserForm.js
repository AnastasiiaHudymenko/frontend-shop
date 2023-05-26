import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addUserData } from 'redux/operations';
import { clearBasket } from 'redux/basketProductSlice';
import { getTotalPrice } from '../../helpers/getTotalPrice';
import { Form, Label, Field, NameInput, BtnSend } from './UserFrom.styled';

export const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const { basket } = useSelector(state => state.basket);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const sendUserForm = e => {
    e.preventDefault();
    const totalPrice = getTotalPrice(basket);
    const userOrder = {
      basket,
      ...formData,
      totalPrice,
      orederNumber: Date.now(),
    };
    setFormData({ name: '', email: '', phone: '', address: '' });
    dispatch(addUserData(userOrder));
    dispatch(clearBasket());
  };

  return (
    <Form onSubmit={sendUserForm}>
      <Label>
        <NameInput>Name</NameInput>
        <Field
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <NameInput>Email</NameInput>
        <Field
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <NameInput>Phone</NameInput>
        <Field
          required
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <NameInput>Address</NameInput>
        <Field
          required
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
