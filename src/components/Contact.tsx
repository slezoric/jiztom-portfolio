import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">Get in Touch</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary">Contact Information</h3>
            <div className="space-y-4">
              <a
                href="mailto:jiztom@iastate.edu"
                className="flex items-center space-x-3 text-gray-600 hover:text-secondary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>jiztom@iastate.edu</span>
              </a>
              <a
                href="https://linkedin.com/in/jiztom"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-secondary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn Profile</span>
              </a>
              <a
                href="https://github.com/jiztom"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-600 hover:text-secondary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="min-h-[150px]"
            />
            <Button type="submit" className="w-full bg-secondary hover:bg-secondary-light">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;