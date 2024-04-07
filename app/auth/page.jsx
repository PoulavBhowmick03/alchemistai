"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import { signIn } from 'next-auth/react';

function LoginSignupPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div>
    <Navbar/>
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        className="bg-white rounded-lg shadow-md p-8 w-full max-w-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isLogin ? (
          <LoginForm handleToggle={handleToggle} />
        ) : (
          <SignupForm handleToggle={handleToggle} />
        )}
      </motion.div>
    </div>
    </div>
  );
}

function LoginForm({ handleToggle }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username: email,
      password: password,
      redirect: false,
    });
    console.log(res);
    router.push("/");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-400 text-white px-4 py-2 rounded-md font-bold transition-colors duration-300 hover:bg-red-500 w-full"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600">
        Dont have an account?{' '}
        <button
          onClick={handleToggle}
          className="text-red-400 font-bold hover:underline"
        >
          Sign up
        </button>
      </p>
    </div>
  );
}

function SignupForm({ handleToggle }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Handle signup logic here


    // SIGNING IN AFTER SIGNUP
    const res = await signIn("credentials", {
      username: email,
      password: password,
      redirect: false,
    });
    console.log(res);
    router.push("/");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-md px-4 py-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-400 text-white px-4 py-2 rounded-md font-bold transition-colors duration-300 hover:bg-red-500 w-full"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600">
        Already have an account?{' '}
        <button
          onClick={handleToggle}
          className="text-red-400 font-bold hover:underline"
        >
          Login
        </button>
      </p>
    </div>
    
  );
}

export default LoginSignupPage;