
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center space-x-4 mb-16">
          <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Get In Touch</h2>
          <div className="h-[1px] bg-slate-700 flex-grow"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Let's talk about everything!</h3>
            <p className="text-slate-400 text-lg">
              Don't like forms? Send me an email at <span className="text-cyan-400 font-medium">soikotahmad123@gmail.com</span> or find me on social media. I'm always open to discussing new projects or creative ideas.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-slate-300">
                <div className="p-3 bg-slate-800 rounded-lg">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <span>soikotahmad123@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 text-slate-300">
                <div className="p-3 bg-slate-800 rounded-lg">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <span>Naogaon Rajshahi Bangladesh</span>
              </div>
            </div>
          </div>
          <form className="space-y-6 bg-slate-950 p-8 rounded-2xl border border-slate-800">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Your Name</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email Address</label>
                <input type="email" className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="your@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Subject</label>
              <input type="text" className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Project Inquiry" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
              <textarea rows={4} className="w-full bg-slate-900 border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none" placeholder="How can I help you?"></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-all transform active:scale-95 shadow-lg shadow-cyan-500/20">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
