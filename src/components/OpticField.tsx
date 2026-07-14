import Image from "next/image";

export function OpticField() {
  return (
    <div className="image-grain relative min-h-[72svh] overflow-hidden bg-black sm:min-h-[76svh]">
      <Image
        src="/images/concept/optics-hero-placeholder.png"
        alt="Concept placeholder of a biomedical optics experiment with a red laser"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.35)_48%,rgba(0,0,0,0.06)_80%),linear-gradient(0deg,rgba(0,0,0,0.72)_0%,transparent_45%)]" />
      <div className="absolute left-5 top-5 border border-white/25 bg-black/20 px-3 py-2 text-white/65 backdrop-blur-sm sm:left-8 sm:top-8">
        <p className="micro-label">Concept visual / Replace later</p>
      </div>
      <div className="absolute bottom-6 right-6 hidden max-w-52 border-t border-white/35 pt-3 text-white/60 md:block">
        <p className="micro-label">Image direction 01</p>
        <p className="mt-2 text-[11px] leading-5">Experimental evidence, rendered with editorial restraint.</p>
      </div>
    </div>
  );
}
