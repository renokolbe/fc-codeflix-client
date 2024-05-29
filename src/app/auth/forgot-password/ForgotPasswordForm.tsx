'use client';
import { InputField } from "@/app/components/InputField";
import React from "react";

export default function ForgotPassordForm() {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('submit from Forgot Password');
    };
    return (
        <form
            className='flex w-full max-w-md flex-col space-y-4 rounded bg-[#141414] bg-opacity-90 px-4 py-8 shadow-lg'
            onSubmit={onSubmit}>
            <div className='flex flex-col space-y-4 items-center'>
                <h1 className='text-3xl font-bold'>
                    Esqueceu sua Senha?
                </h1>
                <p className='text-sm text-gray-500'>
                    Digite seu email para resetar sua senha{' '}
                </p>
            </div>
            <div className='mt-8 flex flex-col space-y-4'>
                <InputField id='email' type='email' label='Email' placeholder='Informe seu Email' />
            </div>
            <div className='flex flex-col-reverse space-y-2 pt-2 sm:flex-row sm:space-x-2 sm:space-y-0'>
                <button
                    className='flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 hover:bg-red-600 focus:outline-none text-sm font-semibold text-white sm:w-auto sm:px-8'
                    type='submit'

                >
                    Reset
                </button>
            </div>
        </form>
    );
}
