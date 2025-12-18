export const About = () => {
  return (
    <section id="About" className="py-24 px-6 lg:px-20 bg-slate-50/50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Storytelling (7 columns wide) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                About <span className="text-blue-600">Me</span>
              </h2>
              <div className="h-1.5 w-12 bg-blue-600 rounded-full"></div>
            </div>
            
            <p className="text-xl text-slate-700 font-medium leading-relaxed">
              I’m a developer who bridges the gap between robust backend logic and intuitive frontend experiences.
            </p>
            
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                My journey started with a deep dive into **Java**, where I fell in love with structured problem-solving and OOP principles. Over time, I've expanded my toolkit to include the **MERN stack**, allowing me to build full-scale applications from the database up to the UI.
              </p>
              <p>
                I thrive in environments that challenge me to write clean, maintainable code—whether that's optimizing a Hibernate query or crafting a responsive React component.
              </p>
            </div>

            {/* Simple Stats for visual interest */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-slate-900">Fresher+</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest">Experience</p>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div>
                <p className="text-3xl font-bold text-slate-900">10+</p>
                <p className="text-sm text-slate-500 uppercase tracking-widest">Projects</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Cards (5 columns wide) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400 font-bold mb-6">
              Contact Details
            </h3>
            
            {/* Phone Card */}
            <div className="group p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-slate-900 font-bold">+91 8857968759</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <a href="mailto:samikshachavan400@gmail.com" className="block group p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="overflow-hidden">
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-slate-900 font-bold truncate">samikshachavan400@gmail.com</p>
                </div>
              </div>
            </a>
            
            {/* Location Card */}
            <div className="p-6 bg-slate-900 rounded-2xl text-white shadow-lg overflow-hidden relative">
               <div className="relative z-10">
                  <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-medium">Maharashtra, India</p>
               </div>
               {/* Decorative background circle */}
               <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-full blur-2xl opacity-20"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};