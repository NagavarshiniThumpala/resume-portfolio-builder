import { motion } from "framer-motion";

const skillGroups = [
  { label: "Languages", skills: ["Python", "MySQL", "C", "C++"] },
  { label: "Web", skills: ["HTML", "CSS", "JavaScript"] },
  { label: "Platforms", skills: ["Visual Studio", "Dev C++", "AWS"] },
  { label: "Concepts", skills: ["Data Structures", "OS", "Data Science", "AI/ML"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl font-bold mb-16"
      >
        Skills & <span className="text-gradient">Tools</span>
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="font-display text-lg font-semibold mb-4 text-primary">{group.label}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => (
                <span key={s} className="bg-secondary text-secondary-foreground font-body text-sm px-3 py-1.5 rounded-md">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
