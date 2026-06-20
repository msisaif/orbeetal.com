import Image from "next/image";

export function ClientsBar({ clients }) {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02] relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-center text-sm font-medium text-body-muted mb-8 uppercase tracking-widest">
          Trusted by Our Happy Clients
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-36 md:w-48 flex flex-col items-center py-3 px-2 rounded-xl glass-panel border border-white/10 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="relative h-16 w-full rounded-lg bg-white/90 mb-2">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="p-2 object-contain"
                />
              </div>
              <h3 className="text-xs md:text-base font-display font-semibold text-white/80 text-center">
                {client.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
