import { clients } from "@/data/index.js";

export function ClientsBar() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02] relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-center text-sm font-medium text-white/40 mb-8 uppercase tracking-widest">
          Trusted by Our Happy Clients
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {clients.map((client) => (
            <div
              key={client}
              className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white/50 text-sm font-medium hover:border-primary/30 hover:text-white/80 transition-all duration-300"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
