import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorLabel, Frame } from '../../ui';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister, selectisAuth } from '../../redux/slices/auth';
import signup from '../../../public/svg/signup.svg';

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectisAuth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = async (data) => {
    const response = await dispatch(fetchRegister(data));
    console.log(response);
    if (response.payload.token) {
      window.localStorage.setItem('token', response.payload.token);
    }
  };

  if (isAuth) {
    return <Navigate to="/storage" />;
  }

  return (
    <div className="max-w-[720px] w-full flex gap-x-[50px] py-[35px] px-[20px] justify-center items-center rounded-[10px]">
      <Frame content={<img src={signup} alt="Register form" />} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[330px] max-h-fit flex flex-col justify-center items-center gap-y-5 border-l-[2px] pl-[20px]"
      >
        <p className="text-[40px] text-secondary font-bold text-center">
          Sign up
        </p>
        <label htmlFor="" className="realtive w-full">
          <input
            className="input w-full"
            placeholder="First Name"
            {...register('firstname', {
              required: 'This field must not be empty!',
              minLength: {
                value: 2,
                message: 'This field must contain at least 2 characters!',
              },
              maxLength: {
                value: 50,
                message: 'This field must contain no more than 50 characters!',
              },
            })}
          />
          {errors?.firstName && (
            <ErrorLabel errorMessage={errors?.firstName?.message} />
          )}
        </label>
        <label htmlFor="" className="realtive w-full">
          <input
            className="input w-full"
            placeholder="Last name"
            {...register('lastname', {
              required: 'This field must not be empty!',
              minLength: {
                value: 2,
                message: 'This field must contain at least 2 characters!',
              },
              maxLength: {
                value: 50,
                message: 'This field must contain no more than 50 characters!',
              },
            })}
          />
          {errors?.lastName && (
            <ErrorLabel errorMessage={errors?.lastName?.message} />
          )}
        </label>
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
          value="Sign Up"
          className="btn-solid w-full mt-[10px] cursor-pointer"
        />
        <Link to="/signin" className="link">
          Already have an account? Sign in
        </Link>
      </form>
    </div>
  );
};
