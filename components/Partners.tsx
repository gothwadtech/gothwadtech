import { CheckCircle2 } from 'lucide-react';

const Partners = () => {
  return (
    <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Partner with the Revolution.</h2>
            <p className="text-neutral-600 mb-8 text-lg leading-relaxed">
              We are looking for schools, colleges, and local businesses to join our ecosystem. 
              Get access to premium digital tools at zero cost and help us build a self-reliant India.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Zero-cost digital infrastructure for schools.",
                "Custom software solutions for local MSMEs.",
                "Priority support and co-branding opportunities.",
                "Access to our developer talent pool."
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-neutral-700 font-medium">
                  <CheckCircle2 className="text-brand-green" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <button className="bg-brand-green text-white px-8 py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-brand-green/20 transition-all cursor-pointer">
              Become a Partner
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-video bg-white rounded-3xl border border-neutral-100 flex items-center justify-center p-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-help">
                <div className="text-neutral-300 font-display font-bold text-xl uppercase tracking-tighter">Partner {i}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
