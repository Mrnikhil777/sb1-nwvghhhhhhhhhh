import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { containerFadeIn, fadeInUp } from '../../utils/animations';

interface SectionProps {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  description,
  children,
  className = ''
}: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <motion.div
        variants={containerFadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-4"
      >
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          {description && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>
        {children}
      </motion.div>
    </section>
  );
}