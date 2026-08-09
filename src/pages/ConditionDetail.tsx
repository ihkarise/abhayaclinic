import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { conditions } from '../data/content';

export default function ConditionDetail() {
  const { conditionId } = useParams();
  const condition = conditions.find(c => c.id === conditionId);

  if (!condition) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-heading font-bold mb-4">Condition Not Found</h1>
        <Link to="/allergy-conditions" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Conditions
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="bg-base pt-28 pb-24 border-b border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-soft/30 rounded-bl-full -mr-32 -mt-32" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/allergy-conditions" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors flex items-center gap-1 mb-6">
            Conditions <ChevronRight className="w-4 h-4" /> {condition.title}
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-heading font-bold text-text-primary mb-6"
          >
            {condition.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary leading-relaxed"
          >
            {condition.shortDescription}
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-green max-w-none">
          <h2 className="font-heading font-bold text-3xl text-text-primary mb-6 border-l-4 border-leaf pl-4">Overview</h2>
          <p className="text-text-secondary mb-10">
            {condition.title} is a condition we frequently see and treat at Abhaya Homoeopathic Medical Center. 
            Our approach goes beyond suppressing symptoms, aiming to identify root causes and strengthen the body\'s natural resilience.
          </p>

          <h2 className="font-heading font-bold text-3xl text-text-primary mb-6 border-l-4 border-leaf pl-4">Common Symptoms</h2>
          <ul className="grid sm:grid-cols-2 gap-4 mb-10 list-none pl-0">
            {[1, 2, 3, 4].map(i => (
              <li key={i} className="flex items-center gap-3 text-text-secondary bg-base p-4 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Symptom description {i}
              </li>
            ))}
          </ul>

          <h2 className="font-heading font-bold text-3xl text-text-primary mb-6 border-l-4 border-leaf pl-4">Common Triggers</h2>
          <p className="text-text-secondary mb-10">
            Identifying triggers is a crucial part of the healing journey. Environmental factors, lifestyle, and individual sensitivities play a significant role.
          </p>

          <div className="bg-soft/30 p-8 rounded-3xl mt-16 text-center">
            <h3 className="font-heading font-bold text-2xl text-text-primary mb-4">When To Seek Help</h3>
            <p className="text-text-secondary mb-8">If symptoms persist, affect your daily life, sleep, or overall well-being, professional consultation is recommended.</p>
            <Link to="/book-appointment" className="inline-block px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition shadow-md">
              Consult Dr Varun
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
