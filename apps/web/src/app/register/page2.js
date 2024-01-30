'use client';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormik } from 'formik';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

export default function registerPage() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referral_code, setReferralNumber] = useState('');

  const router = useRouter();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8000/auth/register', {
        username: username,
        email: email,
        password: password,
        referral_code: referral_code,
      });
      router.push('/login');
      if (response.status === 200) {
        console.log('register account is success');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const schemaRegister = Yup.object().shape({
    email: Yup.string()
      .required('Email cannot be empty')
      .email('Invalid email address format'),
    password: Yup.string()
      .required('Passowrd cannot be empty')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Password must contain at least one symbol',
      )
      .min(8, 'Password must be at least 8 characters long'),
    username: Yup.string().required('Username cannot be empty'),
  });

  return (
    <main>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schemaRegister}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => {
          console.log(props);
          return (
            <div className="grid grid-cols-2 center m-auto">
              <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                  <p className="font-mono font-extrabold text-[#f05537] text-xl text-center">
                    goticket.{' '}
                  </p>
                  <p className="mt-10 text-center text-2xl font-bold text-red-600">
                    Please sign in to register an account
                  </p>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Username
                      </label>
                      <div className="mt-2">
                        <input
                          value={username}
                          id="username"
                          name="username"
                          type="username"
                          autoComplete="username"
                          required
                          placeholder="Enter your username"
                          className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e) => setUserName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          value={email}
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          placeholder="Enter your email address"
                          className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Password
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          value={password}
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          placeholder="Enter your password"
                          className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="referral_code"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Referral Number
                      </label>
                      <div className="mt-2">
                        <input
                          value={referral_code}
                          id="referral_code"
                          name="referral_code"
                          type="referral_code"
                          autoComplete="referral_code"
                          required
                          placeholder="Enter your referral number"
                          className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          onChange={(e) => setReferralNumber(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={handleRegister}
                        type="button"
                        className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="flex flex-col align-center justify-center">
                <Image
                  src="/2.jpg"
                  alt="event"
                  width={2000}
                  height={2000}
                  className=" border shadow-sm mt-28"
                />
                <div className="flex flex-col items-center mx-auto">
                  <p className="block text-lg font-semibold leading-6 text-gray-600 mt-2 mb-1">
                    Do you want to create your own event?
                  </p>
                  <p className="block text-lg leading-6 text-gray-500">
                    Register as{' '}
                    <a
                      href="/register-organizer"
                      className="font-bold text-red-500 hover:text-red-800"
                    >
                      organizer
                    </a>
                  </p>
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </main>
  );
}