import { Link } from 'react-router-dom';
import UploadAvatar from '../components/UploadAvatar';
import { register } from '../services/user.service';
import { useState } from 'react';

const RegisterPage = () => {
  const [fields, setFields] = useState({
    username: {
      value: '',
      error: '',
    },
    email: {
      value: '',
      error: '',
    },
    password: {
      value: '',
      error: '',
    },
    confirmPassword: {
      value: '',
      error: '',
    },
    avatar: {
      value: '',
      error: '',
    },
  });

  const handleChange = e => {
    setFields({
      ...fields,
      [e.target.name]: {
        value: e.target.value,
        error: '',
      },
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    let hasError = false;
    const newFields = { ...fields };

    if (fields.username.value === '') {
      hasError = true;
      newFields.username.error = 'Username is required';
    }

    if (fields.email.value === '') {
      hasError = true;
      newFields.email.error = 'Email is required';
    }

    if (fields.password.value === '') {
      hasError = true;
      newFields.password.error = 'Password is required';
    }

    if (fields.confirmPassword.value === '') {
      hasError = true;
      newFields.confirmPassword.error = 'Confirm Password is required';
    }

    if (fields.password.value !== fields.confirmPassword.value) {
      hasError = true;
      newFields.confirmPassword.error = 'Passwords do not match';
    }

    if (hasError) {
      setFields(newFields);
      return;
    }

    fetchRegisterUser();

    console.log('Submitted');
  };

  const fetchRegisterUser = async () => {
    try {
      const response = await register({
        name: fields.username.value,
        email: fields.email.value,
        password: fields.password.value,
        avatar: fields.avatar.value,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex-1 flex justify-center items-center p-10">
      <div className="flex flex-col gap-4 min-h-[400px] rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center">Create an account</h1>
        <p className="text-center">Please register to continue your trip</p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <UploadAvatar
            onChange={value =>
              handleChange({ target: { name: 'avatar', value } })
            }
            value={fields.avatar.value}
          />
          <input
            type="text"
            placeholder="Username"
            className="p-2 border border-gray-300 rounded-lg"
            name="username"
            value={fields.username.value}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded-lg"
            name="email"
            value={fields.email.value}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded-lg"
            name="password"
            value={fields.password.value}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-2 border border-gray-300 rounded-lg"
            name="confirmPassword"
            value={fields.confirmPassword.value}
            onChange={handleChange}
          />
          <button className="bg-blue-950 text-white p-2 rounded-lg">
            Register
          </button>
        </form>
        <Link to="/login" className="text-blue-950 text-sm text-center">
          Login
        </Link>
        {/* <section>
          <span className="flex gap-2 px-2">
            <hr />
            <p className="text-center text-xs">Or register with</p>
            <hr />
          </span>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-900 text-white p-2 rounded-lg w-10 h-10">
              F
            </button>
            <button className="bg-red-600 text-white p-2 rounded-lg w-10 h-10">
              G
            </button>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default RegisterPage;
