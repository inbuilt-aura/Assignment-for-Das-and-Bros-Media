import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { staggerContainer, staggerItem } from "../../lib/animations";

const Hiring = () => {
  const openPositions = [
    {
      id: 1,
      title: "Security Analyst (Remote)",
      department: "Cybersecurity",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Join our team to drive growth through innovative marketing strategies.",
      requirements: [
        "Security certifications preferred",
        "Incident response experience",
        "Risk assessment skills",
      ],
    },
    {
      id: 2,
      title: "Growth Marketing Manager",
      department: "Growth Marketing",
      location: "Bhubaneswar, Odisha",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Protect our digital assets and ensure the security of our systems.",
      requirements: [
        "Google Ads & Facebook Ads expertise",
        "SEO/SEM knowledge",
        "Analytics proficiency",
      ],
    },
    {
      id: 3,
      title: "Web Developer (React/Node.js)",
      department: "Digital Transformation",
      location: "Bhubaneswar, Odisha",
      type: "Full-time",
      experience: "2-5 years",
      description: "Develop AI driven solutions to enhance our services.",
      requirements: [
        "React/Node.js expertise",
        "Cloud platform knowledge",
        "API development experience",
      ],
    },
  ];

  const benefits = [
    "Competitive salary and performance bonuses",
    "Health insurance and wellness programs",
    "Flexible working hours and remote options",
    "Professional development opportunities",
    "Modern office environment",
    "Team building and company events",
  ];

  return (
    <section id="hiring" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="heading-lg text-primary-900 mb-4">Join Our Team</h2>
          <p className="text-body">
            Be part of a dynamic team that's shaping the future of digital
            business. We're looking for passionate professionals to help us
            deliver exceptional results for our clients.
          </p>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="heading-md text-primary-900 mb-8 text-center">
            Open Positions
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {openPositions.map((position) => (
              <motion.div
                key={position.id}
                variants={staggerItem}
                className="h-full"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl font-heading text-primary-900">
                        {position.title}
                      </CardTitle>
                      <span className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red text-xs font-medium rounded-full">
                        {position.department}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {position.experience}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {position.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-primary-900 mb-2">
                        Key Requirements:
                      </h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, index) => (
                          <li
                            key={index}
                            className="flex items-start text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-brand-red rounded-full mr-2 mt-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant="accent"
                      className="w-full font-medium"
                      onClick={() =>
                        window.open(
                          `mailto:dasandbrosmediaodisha@gmail.com?subject=Application for ${position.title}`,
                          "_blank"
                        )
                      }
                    >
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Benefits */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div>
            <h3 className="heading-md text-primary-900 mb-6">
              Why Work With Us?
            </h3>
            <p className="text-body mb-6">
              At Das and Bros Media, we believe in creating an environment where
              our team can thrive professionally and personally. We offer
              competitive benefits and opportunities for growth.
            </p>

            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-1.5 h-1.5 bg-brand-red rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-brand-blue/5 rounded-2xl transform rotate-3" />
            <div className="relative bg-background border border-border rounded-2xl overflow-hidden shadow-lg">
              <div className="h-32 bg-gradient-to-r from-primary-900 to-brand-red relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=128&fit=crop&crop=center"
                  alt="Team collaboration"
                  className="w-full h-full object-cover opacity-20"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-8 text-center">
                <Users className="h-12 w-12 text-brand-red mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-primary-900 mb-2">
                  Don't See Your Role?
                </h4>
                <p className="text-muted-foreground mb-6">
                  We're always looking for talented individuals. Send us your
                  resume and let us know how you can contribute to our team.
                </p>
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      "mailto:dasandbrosmediaodisha@gmail.com?subject=General Application",
                      "_blank"
                    )
                  }
                >
                  Send Resume
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hiring;
