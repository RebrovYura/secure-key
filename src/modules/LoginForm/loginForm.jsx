import React from 'react';
import { StyledButton } from '../../ui';
import { useForm } from 'react-hook-form';

export const LoginForm = () => {
  return (
    <form>
      <input type="email" className="input" />
      <input type="password" className="input" />
      <StyledButton styles="btn-solid" text="Sign In" />
    </form>
  );
};
