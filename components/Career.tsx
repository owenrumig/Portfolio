
import React from 'react';

const Career: React.FC = () => {
  return (
    <section id="career" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/3">
            <span className="text-sky-600 font-bold uppercase tracking-widest text-sm mb-4 block">Experience</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight">
              CAREER
            </h2>
            <div className="w-20 h-1 bg-sky-500 rounded-full mb-8" />
            <p className="text-slate-600 text-lg font-light leading-relaxed">
              My journey in the professional world has been defined by customer service, visual organization, and team collaboration.
            </p>
          </div>

          <div className="w-full md:w-2/3">
            <div className="relative border-l-2 border-sky-100 pl-8 ml-4">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-sky-600 rounded-full border-4 border-white shadow-sm" />
              
              <div className="mb-2">
                <h3 className="text-2xl font-bold text-slate-900">IDA Pharmacy</h3>
                <p className="text-sky-600 font-medium">Customer Service & Display Specialist | Richmond</p>
                <p className="text-sm text-slate-400 mt-1 uppercase tracking-tighter">2023-Present
            
                </p>
              </div>
              
              <div className="mt-6 space-y-4">
                <p className="text-slate-600 text-lg leading-relaxed">
                  “For the past three years, I have worked at the IDA Pharmacy in Richmond. In this role, I’ve used my communication and design skills to assist customers, support employees, and organize store displays to make them more visually appealing.”
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-sky-500 shrink-0" />
                    <span className="text-slate-600">Advanced customer communication and support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-sky-500 shrink-0" />
                    <span className="text-slate-600">Visual merchandising and store display design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-sky-500 shrink-0" />
                    <span className="text-slate-600">Employee support and team collaboration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-sky-500 shrink-0" />
                    <span className="text-slate-600">Operational organization and efficiency</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-sky-50 rounded-2xl border border-sky-100">
               <h4 className="font-bold text-slate-900 mb-2">Key Competencies</h4>
               <div className="flex flex-wrap gap-2">
                 {['Communication', 'Visual Design', 'Collaboration', 'Problem Solving', 'Customer Relations', 'Organization'].map(skill => (
                   <span key={skill} className="px-3 py-1 bg-white text-sky-700 text-xs font-semibold rounded-full border border-sky-200 uppercase tracking-wider">
                     {skill}
                   </span>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
