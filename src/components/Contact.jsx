import { Mail, MapPin, Phone, Send } from "lucide-react";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaTelegram } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.currentTarget,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      toast({
        title: "Message Sent!",
        description: "Thank you for your message, I'll get back to you soon.",
      });
      e.currentTarget.reset();
    } catch {
      toast({
        title: "Message Not Sent",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitted(false);
    }
  };
  return (
    <section
      className="relative bg-secondary/30 px-4 py-20 sm:py-24"
      id="contact"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a Project in mind or want to collaborate? Feel free to reach out.
          I'm always open to descussing new opportunities.
        </p>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-left"> Email</h4>
                  <a
                    href="mailto:mohamedknd123@gmail.com"
                    className="break-all text-muted-foreground hover:text-primary transition-colors"
                  >
                    mohamedknd123@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-left"> Phone</h4>
                  <a
                    href="tel:0561357856"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    0561367856
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-left"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Mascara, Algeria
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-10 border-t border-border/60 pt-7">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Connect with me
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://web.facebook.com/moh.knd29/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/70 bg-background/40 text-2xl text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-[#1877F2]/60 hover:bg-[#1877F2]/10 hover:text-[#1877F2] hover:shadow-[0_8px_20px_rgba(24,119,242,0.16)]"
                >
                  <CiFacebook aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/moh_knd/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/70 bg-background/40 text-2xl text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-[#E4405F]/60 hover:bg-[#E4405F]/10 hover:text-[#E4405F] hover:shadow-[0_8px_20px_rgba(228,64,95,0.16)]"
                >
                  <CiInstagram aria-hidden="true" />
                </a>
                <a
                  href="https://t.me/Mohamedknd"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/70 bg-background/40 text-xl text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-[#229ED9]/60 hover:bg-[#229ED9]/10 hover:text-[#229ED9] hover:shadow-[0_8px_20px_rgba(34,158,217,0.16)]"
                >
                  <FaTelegram aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-card p-5 shadow-xs sm:p-8">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Email..."
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your Message..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                )}
              >
                {isSubmitted ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
