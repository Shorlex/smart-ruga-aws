"use client";
import MainButton from "./MainButton";
import { useState } from "react";

const Register = () => {
  const data = {
    name: "",
    ranch: "",
    address: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(data);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password && formData.password.length < 6) {
      setError("Password must be 6 chracters");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      console.log(formData);
      setLoading(false);
      setSuccess("SmartRUGA Created Successfully!");
    }, 3000);
  };

  const isValidForm =
    formData.name &&
    formData.ranch &&
    formData.address &&
    formData.email &&
    formData.phone &&
    formData.password &&
    formData.confirmPassword
  
  const isMatchingPassword = formData.password === formData.confirmPassword

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      {/* Full Name */}
      <div className="xl:flex gap-5">
        <div className="w-full xl:w-1/2">
          <label htmlFor="name">Full Name</label>
          <br></br>
          <input
            className="p-4 w-full bg-[#a3a3a3]/10 rounded-2xl outline-gray-200 mt-2"
            type="text"
            name="name"
            required
            placeholder="Enter your full name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>
        <div className="w-full mt-5 xl:mt-0 xl:w-1/2">
          <label htmlFor="ranch">Ranch Name</label>
          <br></br>
          <input
            className="p-4 w-full bg-[#a3a3a3]/10 rounded-2xl outline-gray-200 mt-2"
            type="text"
            name="ranch"
            required
            placeholder="Enter your ranch name"
            onChange={handleChange}
            value={formData.ranch}
          />
        </div>
      </div>
      {/* Address */}
      <div>
        <label htmlFor="address">Ranch Address</label>
        <br></br>
        <input
          className="p-4 w-full bg-[#a3a3a3]/10 rounded-2xl outline-gray-200 mt-2"
          type="text"
          name="address"
          required
          placeholder="Enter your ranch address"
          onChange={handleChange}
          value={formData.address}
        />
      </div>
      {/* Email Address */}
      <div>
        <label htmlFor="email">Email Address</label>
        <br></br>
        <input
          className="p-4 w-full bg-[#a3a3a3]/10 rounded-2xl outline-gray-200 mt-2"
          type="text"
          name="email"
          required
          placeholder="Enter your email address"
          onChange={handleChange}
          value={formData.email}
        />
      </div>
      {/* Phone Number */}
      <div>
        <label htmlFor="phone">Phone Number</label>
        <br></br>
        <input
          className="p-4 w-full bg-[#a3a3a3]/10 rounded-2xl outline-gray-200 mt-2"
          type="number"
          name="phone"
          required
          placeholder="Enter your email address"
          onChange={handleChange}
          value={formData.phone}
        />
      </div>
      {/* Password */}
      <div className="xl:flex gap-5">
        <div className="w-full xl:w-1/2">
          <label htmlFor="password">Password</label>
          <br></br>
          <input
            className="p-4 w-full bg-[#a3a3a3]/10 rounded-2xl outline-gray-200 mt-2"
            type="password"
            name="password"
            required
            placeholder="Enter your password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <div className={`w-full xl:w-1/2 mt-5 xl:mt-0 `}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <br></br>
          <input
            className={`p-4 w-full bg-[#a3a3a3]/10 rounded-2xl  mt-2 ${
              !isMatchingPassword
                ? "outline-red-400"
                : "outline-gray-200"
            }`}
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirm your password"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
        </div>
      </div>
      {!loading && <p className="text-center text-[#81BB33]">{success}</p>}
      {error && <p className="text-center text-red-400">{error}</p>}
      {/* Button */}
      <MainButton
        text={loading ? "Creating SmartRUGA..." : "Create SmartRUGA"}
        isValidForm={isValidForm}
        isMatchingPassword={isMatchingPassword}
      />
    </form>
  );
};

export default Register;
