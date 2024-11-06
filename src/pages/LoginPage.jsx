import { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../services/user.service';

const LoginPage = () => {
  const [fields, setFields] = useState({
    email: {
      value: '',
      error: '',
    },
    password: {
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

    if (fields.email.value === '') {
      hasError = true;
      newFields.email.error = 'Email is required';
    }

    if (fields.password.value === '') {
      hasError = true;
      newFields.password.error = 'Password is required';
    }

    if (hasError) {
      setFields(newFields);
      return;
    }

    fetchLogin();

    setFields({
      email: {
        value: '',
        error: '',
      },
      password: {
        value: '',
        error: '',
      },
    });
  };

  const fetchLogin = async () => {
    try {
      const response = await login({
        email: fields.email.value,
        password: fields.password.value,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex-1 flex justify-center items-center p-10">
      <div className="flex flex-col gap-4 min-h-[400px] rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center">Welcome again</h1>
        <p className="text-center">Please login to continue your trip</p>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded-lg"
            onChange={handleChange}
            value={fields.email.value}
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded-lg"
            onChange={handleChange}
            value={fields.password.value}
            name="password"
          />
          {/* <Link
            to="/register"
            className="text-blue-950 text-sm text-right underline"
          >
            ¿Forgot password?
          </Link> */}
          <button className="bg-blue-950 text-white p-2 rounded-lg">
            Login
          </button>
        </form>
        <Link to="/register" className="text-blue-950 text-sm text-center">
          Create an account
        </Link>
        {/* <section>
          <span className="flex gap-2 px-2">
            <hr />
            <p className="text-center text-xs">Or login with</p>
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

export default LoginPage;
