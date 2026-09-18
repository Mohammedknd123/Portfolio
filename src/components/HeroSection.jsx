import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[min(760px,100svh)] flex-col items-center justify-center px-4 py-28 sm:min-h-screen"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            <span className="block opacity-0 animate-fade-in sm:inline">
              Hi, I'm
            </span>
            <span className="text-primary block opacity-0 animate-fade-in-delay-1 sm:ml-2 sm:inline">
              Mohammed Yacine
            </span>
            <span className="text-gradient block opacity-0 animate-fade-in-delay-2 sm:ml-2 sm:inline">
              Kendouci
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground opacity-0 animate-fade-in-delay-3 sm:text-lg md:text-xl">
            I'm a full stack web developer, I create web sites with modern
            techhnologies and I build interfaces that are beautiful and
            functional.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
}
