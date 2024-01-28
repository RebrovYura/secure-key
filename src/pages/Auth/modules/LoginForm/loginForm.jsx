import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ErrorLabel, Frame } from '../../ui';
import { fetchLogin, selectisAuth } from '../../redux/slices/auth';
import login from '../../../public/svg/login.svg';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectisAuth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    defaultValues: {
      email: 'yurirebrov01@gmail.com',
      password: 'password123',
    },
  });

  const onSubmit = async (data) => {
    const response = await dispatch(fetchLogin(data));
    if (response.payload.token) {
      window.localStorage.setItem('token', response.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/storage" />;
  }

  return (
    <div className="max-w-[720px] w-full flex gap-x-[50px] py-[35px] px-[20px] justify-center items-center rounded-[10px]">
      <Frame content={<img src={login} alt="Login form" />} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[330px] max-h-fit flex flex-col justify-center items-center gap-y-5 border-l-[2px] pl-[20px]"
      >
        <p className="text-[40px] text-secondary font-bold text-center">
          Sign in to your account
        </p>
        <label htmlFor="" className="realtive w-full">
          <input
            type="email"
            className="input w-full"
            placeholder="Email"
            {...register('email', {
              required: 'This field must not be empty!',
              minLength: {
                value: 8,
                message: 'This field must contain at least 8 characters!',
              },
              maxLength: {
                value: 40,
                message: 'This field must contain no more than 40 characters!',
              },
            })}
          />
          {errors?.email && (
            <ErrorLabel errorMessage={errors?.email?.message} />
          )}
        </label>
        <label className="relative w-full">
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
            {...register('password', {
              required: 'This field must not be empty!',
              minLength: {
                value: 8,
                message: 'This field must contain at least 8 characters!',
              },
              maxLength: {
                value: 40,
                message: 'This field must contain no more than 40 characters!',
              },
            })}
          />
          {errors?.password && (
            <ErrorLabel errorMessage={errors?.password?.message} />
          )}
        </label>
        <input
          type="submit"
          value="Sign In"
          className="btn-solid w-full mt-[10px] cursor-pointer"
        />
        <Link to="/signup" className="link">
          Don’t have an account? Sign up
        </Link>
      </form>
    </div>
  );
};
