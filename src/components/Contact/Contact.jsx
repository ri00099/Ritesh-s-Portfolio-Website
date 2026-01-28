import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_1tuhqdi",
        "template_k7pukjf",
        formRef.current,
        "BpY2Q936TJKu8mktR"
      );

      toast.success("Message sent! I'll get back to you soon. ✅");
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-[7vw] lg:px-[20vw] font-sans flex flex-col items-center"
    >
      <ToastContainer theme="dark" />

      {/* Section Header */}
      <header className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-white tracking-tight">CONTACT</h2>
        <div className="w-20 h-1.5 bg-purple-600 mx-auto mt-4 rounded-full" />
        <p className="text-gray-400 mt-6 text-lg max-w-md mx-auto leading-relaxed">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </header>

      {/* Contact Form Card */}
      <div className="w-full max-w-lg bg-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl">
        <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          Connect With Me <span className="animate-bounce">✉︎</span>
        </h3>

        <form 
          ref={formRef} 
          onSubmit={sendEmail} 
          className="flex flex-col gap-5"
        >
          {/* Label + Input Group for Accessibility */}
          <div className="flex flex-col gap-2">
            <label htmlFor="user_email" className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
            <input
              id="user_email"
              type="email"
              name="user_email"
              placeholder="name@example.com"
              required
              className="w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="user_name" className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
            <input
              id="user_name"
              type="text"
              name="user_name"
              placeholder="John Doe"
              required
              className="w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className="text-sm font-medium text-gray-300 ml-1">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              placeholder="Project Inquiry"
              required
              className="w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="How can I help you?"
              rows="5"
              required
              className="w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full mt-4 py-4 rounded-xl text-white font-bold text-lg transition-all flex items-center justify-center gap-2
              ${isSubmitting 
                ? "bg-gray-700 cursor-not-allowed" 
                : "bg-gradient-to-r from-[#8245ec] to-[#a855f7] hover:shadow-[0_0_20px_rgba(130,69,236,0.4)] active:scale-95"
              }`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;