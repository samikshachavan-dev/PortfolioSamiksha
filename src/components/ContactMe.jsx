import React from 'react';

export const ContactMe = () => {
  return (
    <section id="ContactMe" className="relative py-24 px-6 lg:px-20 bg-white overflow-hidden">
      {/* Decorative Gradient Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 -z-10"></div>
      
      {/* Floating Animated Orbs for depth */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/40 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-200/40 rounded-full blur-[100px]"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text & Socials */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                Let’s <span className="text-blue-600">Connect</span>
              </h2>
              <div className="h-1.5 w-20 bg-blue-600 mt-4 rounded-full"></div>
              <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                I'm currently looking for new opportunities as a Java Developer. 
                Whether you have a question or just want to say hi, my inbox is always open!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Me</p>
                  <p className="text-slate-900 font-bold italic">samikshachavan400@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Glassmorphism Form */}
          <div className="bg-white/70 backdrop-blur-xl p-8 lg:p-10 rounded-[2.5rem] shadow-2xl shadow-blue-100 border border-white">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="Your Name"
                  className="w-full px-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="email@example.com"
                  className="w-full px-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 ml-1">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="How can I help you?"
                  className="w-full px-5 py-4 bg-white/50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 active:scale-[0.98] transition-all duration-200">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};