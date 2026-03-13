import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/Button.jsx";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jason.royer1902@gmail.com",
    href: "mailto:jason.royer1902@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (832) 728-1499",
    href: "tel:+18327281499",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Houston, TX",
    href: "#",
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary30 animate-fade-in animation-delay-400">
            <form className="space-y-6" action="">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus: ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="123@abc.com"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus: ring-primary outline-none transition-all"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="What will you say?"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus: ring-primary outline-none transition-all resize-none"
                />
              </div>

              <Button className="w-full" type="submit" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
