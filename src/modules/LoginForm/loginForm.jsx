import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ErrorLabel, Frame } from '../../ui';
import login from '../../../public/svg/login.svg';

export const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="max-w-[720px] w-full flex gap-x-[50px] py-[35px] px-[20px] justify-center items-center shadow-formShadow rounded-[10px]">
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
        <Link
          to="/signup"
          className="text-[12px] tracking-[1.08px] hover:text-accent transition-colors"
        >
          Don’t have an account? Sign up
        </Link>
      </form>
    </div>
  );
};
