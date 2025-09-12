import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function ContactForm() {
  const [phone, setPhone] = useState("");

  const handleAddTicket = async (e) => {
    e.preventDefault(); // prevent reload
    // console.log("Form submit started...");

    const formData = new FormData(e.target);

    const payload = {
      full_name: formData.get("full_name")?.trim(),
      email: formData.get("email")?.trim(),
      mobile_number: phone, // ✅ use state value
      description: formData.get("description")?.trim(),
    };

    // console.log("🚀 ~ handleAddTicket ~ payload:", payload);

    // 🔹 Validation: check required fields
    if (!payload.full_name) return toast.error("Please enter your full name.");
    if (!payload.email) return toast.error("Please enter your email address.");
    if (!payload.mobile_number || payload.mobile_number.length !== 10)
      return toast.error("Please enter a valid 10-digit mobile number.");
    if (!payload.description)
      return toast.error("Please enter project details.");

    try {
    //   console.log("Payload:", payload);

      const response = await axios.post(
        "https://api.ourindiantours.com/user/support/add-ticket",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status) {
        toast.success(
          response.data.message ||
            "Ticket submitted successfully! Our team will get back to you soon."
        );
        e.target.reset();
        setPhone(""); // reset phone field
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to submit ticket. Please try again."
      );
    }
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // only digits

    if (value.length > 10) {
      value = value.slice(0, 10); // prevent typing beyond 10
      toast.error("Mobile number cannot exceed 10 digits.");
    } else {
      toast.dismiss(""); // clear error while typing within limit
    }

    setPhone(value);
  };

  const handlePhoneBlur = () => {
    if (phone.length !== 0 && phone.length < 10) {
      toast.error("Mobile number must be 10 digits.");
    }
  };

  return (
    <div className="contact-form">
      <h3 className="h4">Welcome</h3>
      <form onSubmit={handleAddTicket}>
        <div className="form-group">
          <input
            className="form-control"
            name="full_name"
            placeholder="Name*"
            type="text"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="email"
            placeholder="Email*"
            type="email"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="mobile_number"
            placeholder="Number"
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            onBlur={handlePhoneBlur}
          />
        </div>
        <div className="form-group">
          <textarea
            rows="5"
            className="form-control"
            name="description"
            placeholder="Message*"
          ></textarea>
        </div>
        <div className="form-group mb-0">
          <button className="btn btn-primary" type="submit">
            Send <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
