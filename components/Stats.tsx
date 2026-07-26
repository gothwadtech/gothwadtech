const Stats = () => {
  const stats = [
    { label: "Active Users", value: "500K+" },
    { label: "Enterprise Clients", value: "50+" },
    { label: "Schools Digitized", value: "200+" },
    { label: "Custom Solutions", value: "100+" }
  ];

  return (
    <section className="py-12 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-5xl font-display font-bold text-neutral-900 mb-2">{s.value}</div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
