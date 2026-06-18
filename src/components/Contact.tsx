import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { personalInfo } from "@/config/portfolio-config";
import SectionHeading from "./SectionHeading";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const form = e.currentTarget;
      const formDataObj = new FormData(form);
      const response = await fetch(form.action, {
        method: "POST",
        body: formDataObj,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Form submission failed");
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          subtitle="Open to AI/ML Engineer, Applied Scientist, and ML Platform roles — remote or relocation. Let's talk."
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="surface-card p-6 sm:p-8">
            <h3 className="font-display text-lg font-semibold text-slate-900 mb-5">Contact Information</h3>
            <div className="space-y-4">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-blue-600"><Mail className="h-4 w-4" /></span>
                <span className="text-sm">{personalInfo.email}</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-blue-600"><Linkedin className="h-4 w-4" /></span>
                <span className="text-sm">LinkedIn Profile</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-blue-600"><Github className="h-4 w-4" /></span>
                <span className="text-sm">GitHub Profile</span>
              </a>
              {personalInfo.location && (
                <div className="flex items-center gap-3 text-slate-600">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-blue-600"><MapPin className="h-4 w-4" /></span>
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              )}
            </div>
          </div>

          <form
            method="post"
            action="https://formowl.dev/api/@/LXAFOP"
            onSubmit={handleSubmit}
            className="surface-card p-6 sm:p-8 space-y-4"
          >
            <input name="_honey_pot" type="text" style={{ display: "none" }} />
            <input type="hidden" name="_to" value="kfjiztom@gmail.com" />

            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="min-h-[140px]"
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
