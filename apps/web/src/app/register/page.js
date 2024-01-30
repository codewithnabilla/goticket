'use client';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import { validateRegister } from '../lib/validate';

export default function registerPage() {
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8000/auth/register', {
        username: formik.values.username,
        email: formik.values.email,
        password: formik.values.password,
        referral_code: formik.values.referralCode,
      });
      router.push('/login');
      if (response.status === 200) {
        console.log('register account is success');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      referralCode: '',
      role: 'participant',
    },
    validationSchema: validateRegister,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="grid grid-cols-2 center m-auto">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="font-mono font-extrabold text-[#f05537] text-xl text-center">
            goticket.
          </p>
          <p className="mt-10 text-center text-2xl font-bold text-red-600">
            Please sign in to register an account
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  placeholder="Enter your username"
                  className={`pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    formik.errors.username &&
                    formik.touched.username &&
                    'border-red-500'
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-xs text-red-500 mt-2">
                    {formik.errors.username}
                  </div>
                ) : null}
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
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Enter your email address"
                  className={`pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    formik.errors.email &&
                    formik.touched.email &&
                    'border-red-500'
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-xs text-red-500 mt-2">
                    {formik.errors.email}
                  </div>
                ) : null}
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
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="Enter your password"
                  className={`pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    formik.errors.password &&
                    formik.touched.password &&
                    'border-red-500'
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-xs text-red-500 mt-2">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </div>

            <div>
              <label
                htmlFor="referralCode"
                className="block text-sm font-medium text-gray-900"
              >
                Referral Code
              </label>
              <div className="mt-2">
                <input
                  id="referralCode"
                  name="referralCode"
                  type="text"
                  autoComplete="referralCode"
                  placeholder="Enter your referral code"
                  className={`pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                    formik.errors.referralCode &&
                    formik.touched.referralCode &&
                    'border-red-500'
                  }`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.referralCode}
                />
                {formik.touched.referralCode && formik.errors.referralCode ? (
                  <div className="text-xs text-red-500 mt-2">
                    {formik.errors.referralCode}
                  </div>
                ) : null}
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
          src="/12.jpg"
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
}