'use client';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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

  return (
    <main>
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
                  for="username"
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
                    placeholder=" Enter your username"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label
                  for="email"
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
                    placeholder=" Enter your email address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    for="password"
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
                    placeholder=" Enter your password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  for="referral_code"
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
                    placeholder=" Enter your referral number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
        <Image
          src="/2.jpg"
          alt="event"
          width={2000}
          height={2000}
          className=" border shadow-sm mt-28"
        />
      </div>
    </main>
  );
}
