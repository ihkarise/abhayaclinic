import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { conditions } from '../data/content';

export default function AllergyConditions() {
  return (
    <div className="bg-base min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold text-text-primary mb-6"
          >
            Conditions We Treat
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg"
          >
            Expert management for respiratory and skin-related allergic conditions, focusing on lasting wellness rather than just temporary symptom relief.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conditions.map((condition, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (i + 1) }}
              key={condition.id} 
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all group overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-soft/50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              <div className="relative z-10 mb-6">
                <h2 className="font-heading font-bold text-2xl text-text-primary mb-3">{condition.title}</h2>
                <div className="w-12 h-1 bg-leaf rounded-full" />
              </div>
              <p className="text-text-secondary mb-8 relative z-10">{condition.shortDescription}</p>
              <Link to={`/${condition.id}`} className="inline-flex items-center gap-2 text-primary font-medium group-hover:text-leaf transition-colors relative z-10">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
