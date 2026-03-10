import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  "NPTEL – Python for Data Science",
  "IBM – Developing Front-End Apps with React",
  "Microsoft – Explore Data Roles and Services",
  "IBM – Introduction to Cloud Computing",
  "Microsoft – Exploring Core Data Concepts",
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="section-padding max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl font-bold mb-16"
      >
        Certificates
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((c, i) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-3 bg-card rounded-lg p-5 border border-border"
          >
            <Award size={18} className="text-primary mt-0.5 shrink-0" />
            <span className="font-body text-sm text-foreground">{c}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CertificatesSection;
