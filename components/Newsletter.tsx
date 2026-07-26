const Newsletter = () => (
  <section className="py-24 px-6">
    <div className="max-w-7xl mx-auto bg-neutral-900 rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Stay in the Loop</h2>
        <p className="text-neutral-400 mb-10 max-w-xl mx-auto">Get the latest updates on our projects, community events, and the progress of Indian tech independence.</p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-grow px-6 py-4 rounded-2xl bg-white/10 border border-white/10 text-white focus:ring-2 focus:ring-brand-orange outline-none transition-all"
          />
          <button className="bg-brand-orange text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-brand-orange/20 transition-all cursor-pointer">
            Subscribe
          </button>
        </form>
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-orange rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-green rounded-full blur-3xl" />
      </div>
    </div>
  </section>
);

export default Newsletter;
