import { motion } from "framer-motion";

const projects = [
  {
    title: "Restaurant Bill Generator",
    tech: "Python, HTML, CSS",
    description: "Automated bill calculation system that processes food items, adds taxes, and generates accurate bills — reducing manual errors and improving efficiency.",
  },
  {
    title: "CodeBattle Streak",
    tech: "AWS, Python, Flask",
    description: "Cloud-based coding streak tracker using AWS services for scalable deployment, with authentication and problem tracking to monitor daily coding consistency.",
  },
  {
    title: "Heart Disease Prediction",
    tech: "Python, Scikit-learn, Pandas",
    description: "ML model using Random Forest to predict heart disease likelihood. Involved data preprocessing, feature selection, and rigorous model evaluation.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display text-4xl md:text-5xl font-bold mb-16"
      >
        Featured <span className="text-gradient">Projects</span>
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group bg-card rounded-lg p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
          >
            <span className="text-primary font-body text-sm font-semibold tracking-wider uppercase">{p.tech}</span>
            <h3 className="font-display text-xl font-semibold mt-3 mb-4 group-hover:text-primary transition-colors">{p.title}</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
