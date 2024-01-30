import * as Yup from 'yup';

export const validateRegister = Yup.object().shape({
  username: Yup.string().required('Username cannot be empty'),
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
  referralCode: Yup.string(),
  role: Yup.string(),
});

export const validateLogin = Yup.object().shape({
  email: Yup.string()
    .required('Email cannot be empty')
    .email('Invalid email address format'),
  password: Yup.string().required('Passowrd cannot be empty'),
});