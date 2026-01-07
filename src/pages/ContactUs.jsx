import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Form submitted successfully!');
  };

  return (
    <div className="min-h-screen bg-white mt-12">
      {/* Orange Header Section */}
      <div className="bg-[#FFFABB] py-18 text-center">
        <h1 className="text-4xl md:text-4xl font-bold text-black">Contact Us</h1>
      </div>

      {/* Form Section */}
      <div className="max-w-4xl mx-auto px-4 py-12 mt-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-10">
          Have any questions?
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 bg-[#f7f6f6] border-1 border-gray-200 p-8 rounded-lg shadow-md">
          {/* First Row: Name, Last Name, Mobile Number */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 bg-[#e7e6e6] rounded-lg focus:ring-2 focus:ring-[#F19D38] focus:border-transparent outline-none transition-all"
                placeholder="Enter first name"
              />
            </div>

            <div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 bg-[#e7e6e6] rounded-lg focus:ring-2 focus:ring-[#F19D38] focus:border-transparent outline-none transition-all"
                placeholder="Enter last name"
              />
            </div>

            <div>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 bg-[#e7e6e6] rounded-lg focus:ring-2 focus:ring-[#F19D38] focus:border-transparent outline-none transition-all"
                placeholder="Enter mobile number"
              />
            </div>
          </div>

          {/* Second Row: Email */}
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 bg-[#e7e6e6] rounded-lg focus:ring-2 focus:ring-[#F19D38] focus:border-transparent outline-none transition-all"
              placeholder="Enter your email"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 bg-[#e7e6e6] rounded-lg focus:ring-2 focus:ring-[#F19D38] focus:border-transparent outline-none transition-all resize-none"
              placeholder="Enter your message"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="px-12 py-3 bg-gradient-to-r from-[#F19D38] to-[#E88B28] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#F19D38]/50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;