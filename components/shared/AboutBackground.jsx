import Image from "next/image";

export function AboutBackground({ opacity = 20 }) {
  return (
    <div className="absolute inset-0 z-0">
      <Image
        src="/images/about-bg.png"
        alt=""
        fill
        className={`object-cover mix-blend-luminosity`}
        style={{ opacity: opacity / 100 }}
      />
      <div className="absolute inset-0 bg-background/90 z-10" />
      <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-transparent z-20" />
    </div>
  );
}
