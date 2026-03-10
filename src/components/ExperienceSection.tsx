import { motion } from "framer-motion";

const experiences = [
  {
    role: "AWS Cloud Intern",
    period: "Jul 2024 – Sep 2024",
    description: "Hands-on experience with EC2, S3, IAM, and VPC. Deployed, managed, and maintained cloud infrastructure for scalable systems.",
  },
  {
    role: "AI & ML Intern — ExcelR",
    period: "May 2024 – Jul 2024",
    description: "Worked on ML concepts including data preprocessing, feature engineering, and model development using Scikit-learn, Pandas, and Matplotlib.",
  },
  {
    role: "Python Intern — AICTE",
    period: "Feb 2024 – Mar 2024",
    description: "Built data cleaning frameworks in Python, processing 10,000+ records to ensure accuracy and consistency for analytics.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl font-bold mb-16"
      >
        Work <span className="text-gradient">Experience</span>
      </motion.h2>
      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
          >
            <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-primary" />
            <span className="text-muted-foreground font-body text-sm">{exp.period}</span>
            <h3 className="font-display text-xl font-semibold mt-1 mb-2">{exp.role}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-2xl">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
