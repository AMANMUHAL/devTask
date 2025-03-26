import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Sparkles, BadgeCheck } from 'lucide-react';

// Pages
const Welcome = () => (
  <div className="h-full flex flex-col justify-end px-6">
    <div className="space-y-4 text-center mb-12">
      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
        <Sparkles className="w-6 h-6 text-white" />
      </div>
      <h1 className="text-2xl font-bold text-gray-900">Welcome to PopX</h1>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex flex-col gap-3 mt-6">
        <Link
          to="/signup"
          className="block w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          Create Account
        </Link>
        <Link
          to="/login"
          className="block w-full bg-purple-100 text-purple-900 py-3 px-4 rounded-lg font-medium hover:bg-purple-200 transition-colors"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  </div>
);

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically validate and authenticate
    // For now, we'll just navigate to settings
    navigate('/settings');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">Signin to your PopX account</h1>
      <p className="text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-purple-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-600 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-300 text-white py-3 px-4 rounded-lg font-medium mt-4"
        >
          Login
        </button>
      </form>
    </div>
  );
};

const Signup = () => {
  const navigate = useNavigate();
  const [isAgency, setIsAgency] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle registration
    // For now, we'll just navigate to settings
    navigate('/settings');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Create your PopX account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-purple-600 mb-1">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-600 mb-1">
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-600 mb-1">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-600 mb-1">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-purple-600 mb-1">
            Company name
          </label>
          <input
            type="text"
            placeholder="Enter company name"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                checked={isAgency}
                onChange={() => setIsAgency(true)}
                className="w-4 h-4 text-purple-600"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                checked={!isAgency}
                onChange={() => setIsAgency(false)}
                className="w-4 h-4 text-purple-600"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium mt-6"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

const AccountSettings = () => (
  <div>
    <div className="p-4 border-b">
      <h1 className="text-xl font-semibold">Account Settings</h1>
    </div>
    <div className="p-6">
      <div className="flex items-start space-x-4">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="absolute -bottom-1 -right-1 bg-purple-600 rounded-full p-1">
            <BadgeCheck className="w-4 h-4 text-white" />
          </div>
        </div>
        <div>
          <h2 className="font-semibold text-gray-900">Marry Doe</h2>
          <p className="text-gray-600">Marry@Gmail.Com</p>
        </div>
      </div>
      <p className="mt-6 text-gray-600 leading-relaxed">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[390px] h-[700px] bg-white rounded-lg shadow-lg overflow-hidden">
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/settings" element={<AccountSettings />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;