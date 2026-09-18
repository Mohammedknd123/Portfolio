import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-12 border-t border-border bg-card px-4 py-8">
      <div className="container flex flex-col items-center justify-between gap-5 sm:flex-row">
        <p className="text-center text-sm text-muted-foreground sm:text-left">
          &copy; {new Date().getFullYear()} Mohammed Knd. All rights reserved.
        </p>
        <a
          href="#hero"
          aria-label="Back to top"
          className="rounded-full bg-primary/10 p-2 text-primary transition-colors hover:bg-primary/20"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
}
