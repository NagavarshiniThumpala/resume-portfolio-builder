import { motion } from "framer-motion";

const education = [
  { degree: "B.Tech in CSE", school: "Avanthi Institute of Engineering & Technology", period: "2022 – 2026", grade: "CGPA: 8.0" },
  { degree: "Intermediate (MPC)", school: "Sri Adarsha Junior College", period: "2020 – 2022", grade: "60%" },
  { degree: "SSC", school: "Sri Adarsha High School", period: "2019 – 2020", grade: "CGPA: 9.8" },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl font-bold mb-16"
      >
        Education
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-lg p-8 border border-border"
          >
            <span className="text-primary font-body text-sm font-semibold">{e.period}</span>
            <h3 className="font-display text-lg font-semibold mt-2 mb-1">{e.degree}</h3>
            <p className="text-muted-foreground font-body text-sm">{e.school}</p>
            <p className="text-foreground font-body text-sm font-semibold mt-3">{e.grade}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
