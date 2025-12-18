
       import React from 'react'

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-slate-50 px-6 lg:px-20 py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
       
        <div className="space-y-6 animate-fadeIn">
          <div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight">
              Samiksha <span className="text-blue-600">Chavan</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-slate-700 mt-2">
              Java Developer
            </h2>
          </div>
          
          <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
            Detail-oriented and motivated developer skilled in <span className="font-medium text-slate-900">Core Java, Hibernate, JSP/Servlets, and React.</span> 
            Experienced in building practical, end-to-end applications with strong knowledge of OOP, exception
            handling, and database concepts. Eager to apply my Java and MERN stack skills to build 
            impactful solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#Projects"><button  className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition-all">
              View Projects
            </button></a>
            <a href="https://drive.google.com/drive/u/0/folders/1NciNN769RbKQmBas6NA2VWQcyaouNfj4" target='_blank'>
            <button className="px-8 py-3 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:border-slate-900 hover:text-slate-900 transition-all">
              Download Resume
            </button></a>
          </div>
        </div>

       
        <div className="relative flex justify-center lg:justify-end">
       
          <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          
          <div className="relative w-full max-w-md h-112.5 bg-white rounded-2xl shadow-2xl overflow-hidden border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600" 
              alt="Developer Workspace" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}