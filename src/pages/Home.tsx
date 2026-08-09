import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Baby, Video, HeartHandshake, Phone, ArrowRight, Play, CheckCircle2, ChevronDown, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { conditions, reviews } from '../data/content';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: 'What is allergic rhinitis?', a: 'Allergic rhinitis is a condition that can cause sneezing, nasal congestion, runny nose, and itching due to sensitivity to allergens.' },
    { q: 'What are Adenoids?', a: 'Adenoids are lymphoid tissues located behind the nose. Enlargement may contribute to nasal blockage, snoring, and mouth breathing.' },
    { q: 'Can Allergies Trigger Asthma Symptoms?', a: 'In some individuals, allergic triggers may contribute to asthma symptoms such as wheezing and breathing discomfort.' },
    { q: 'Why Do My Allergy Symptoms Keep Returning?', a: 'Environmental exposure, seasonal changes, and personal sensitivity patterns may influence symptom recurrence.' },
    { q: 'When Should I Consult a Doctor?', a: 'Persistent symptoms affecting sleep, school, work, or daily activities should be professionally evaluated.' },
  ];

  return (
    <div>
      {/* 1. BENTO GRID SECTION */}
      <section className="bg-base pt-28 pb-10 overflow-hidden font-sans">
        <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-4">
            
            {/* LEFT COLUMN: HERO + CARDS */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              {/* Box 1: Hero */}
              <div className="bg-white rounded-[32px] p-8 md:p-10 relative overflow-hidden flex flex-col justify-center border border-[#E5E7EB] min-h-[400px]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-soft rounded-full blur-[80px] opacity-40 -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-leaf rounded-full blur-[60px] opacity-20 -ml-10 -mb-10"></div>
                
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-soft text-primary rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                    Allergy Wellness Consultant
                  </span>
                  <motion.h1 variants={fadeIn} initial="hidden" animate="visible" className="text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight mb-6">
                    Breathe Better.<br/>
                    <span className="text-primary">Live Better.</span>
                  </motion.h1>
                  <motion.p variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.1 }} className="text-lg text-text-secondary max-w-lg mb-8 leading-relaxed">
                    Expert care for Allergic Rhinitis, Asthma, Adenoid problems & Skin Allergies. Holistic healing focused on your comfort.
                  </motion.p>
                  <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row gap-4">
                    <Link to="/book-appointment" className="px-8 py-4 bg-primary text-white rounded-2xl font-semibold shadow-lg hover:bg-primary/90 transition-colors text-center inline-block">
                      Consult Online
                    </Link>
                    <Link to="/testimonials" className="px-8 py-4 bg-white border border-[#E5E7EB] text-text-primary rounded-2xl font-semibold hover:bg-gray-50 text-center inline-block transition-colors">
                      Patient Stories
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Box 3-6: Conditions Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                <Link to="/asthma-wheezing" className="bg-primary rounded-[24px] p-6 text-white flex flex-col justify-between shadow-lg hover:scale-[1.02] transition-transform min-h-[160px]">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-xl shrink-0">🫁</div>
                  <div className="mt-4">
                    <h4 className="font-bold mb-1">Asthma</h4>
                    <p className="text-xs text-white/80 leading-normal">Precision care for wheezing & chronic cough.</p>
                  </div>
                </Link>

                <Link to="/allergic-rhinitis" className="bg-white rounded-[24px] p-6 border border-[#E5E7EB] flex flex-col justify-between hover:shadow-md transition-shadow min-h-[160px]">
                  <div className="w-10 h-10 bg-soft rounded-lg flex items-center justify-center text-xl shrink-0">🤧</div>
                  <div className="mt-4">
                    <h4 className="font-bold text-text-primary mb-1">Rhinitis</h4>
                    <p className="text-xs text-text-secondary leading-normal">Relief from sneezing & sinus congestion.</p>
                  </div>
                </Link>

                <Link to="/eczema" className="bg-white rounded-[24px] p-6 border border-[#E5E7EB] flex flex-col justify-between hover:shadow-md transition-shadow min-h-[160px]">
                  <div className="w-10 h-10 bg-soft rounded-lg flex items-center justify-center text-xl shrink-0">✨</div>
                  <div className="mt-4">
                    <h4 className="font-bold text-text-primary mb-1">Eczema</h4>
                    <p className="text-xs text-text-secondary leading-normal">Soothing skin allergies & recurring rashes.</p>
                  </div>
                </Link>

                <Link to="/allergy-conditions" className="bg-leaf rounded-[24px] p-6 flex flex-col justify-between shadow-sm hover:scale-[1.02] transition-transform min-h-[160px]">
                   <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center text-xl font-bold shrink-0">?</div>
                   <div className="text-[#1A1A1A] mt-4">
                      <h4 className="font-bold mb-1">Help Center</h4>
                      <p className="text-xs font-medium opacity-80">Explore our FAQs & medical blog.</p>
                   </div>
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: DOCTOR */}
            <div className="lg:col-span-4 bg-white rounded-[32px] overflow-hidden flex flex-col border border-[#E5E7EB] shadow-sm">
              <div className="flex-1 bg-gradient-to-b from-soft to-white relative flex flex-col items-center justify-end pt-12 pb-8 px-8">
                {/* Abstract Shape */}
                <div className="w-full h-full absolute inset-0 opacity-10">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#0E7A4B" d="M44.7,-76.4C58.1,-69.2,69.5,-57.4,76.4,-44C83.3,-30.6,85.6,-15.3,83.9,-0.9C82.3,13.4,76.6,26.8,69.2,39.2C61.8,51.6,52.7,63,41,70.1C29.3,77.3,14.6,80.1,0.5,79.2C-13.6,78.3,-27.2,73.6,-39.7,66.1C-52.2,58.7,-63.6,48.4,-71.8,36.1C-80,23.8,-85.1,9.4,-84.6,-4.8C-84.1,-19.1,-78.1,-33.2,-68.8,-44.1C-59.4,-55.1,-46.8,-62.8,-34.2,-70.4C-21.6,-78.1,-10.8,-85.7,2.5,-90C15.8,-94.3,31.3,-83.5,44.7,-76.4Z" transform="translate(100 100)" />
                  </svg>
                </div>
                <div className="relative z-10 text-center flex flex-col h-full justify-between items-center w-full">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 border-4 border-white shadow-xl flex items-center justify-center shrink-0">
                     <span className="text-5xl">👨‍⚕️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">Dr. Varun Vasudev</h3>
                    <p className="text-primary font-medium text-sm mt-1">BHMS • Allergy Specialist</p>
                    <div className="mt-6 border-t border-primary/20 pt-6 mx-auto w-full">
                      <p className="text-sm text-text-secondary leading-relaxed italic">
                        "My mission is to help families overcome the cycle of recurring allergies through personalized homoeopathic care."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-base p-6 grid grid-cols-2 gap-3 border-t border-[#E5E7EB] shrink-0">
                <div className="bg-white p-3 rounded-xl border border-[#E5E7EB] text-center shadow-sm">
                  <div className="text-primary font-bold text-xl leading-tight">1k+</div>
                  <div className="text-[10px] text-text-secondary uppercase mt-1 tracking-wider">Happy Patients</div>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#E5E7EB] text-center shadow-sm">
                  <div className="text-primary font-bold text-xl leading-tight">12y</div>
                  <div className="text-[10px] text-text-secondary uppercase mt-1 tracking-wider">Experience</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
             {[
               { val: '1000+', label: 'Consultations', icon: HeartHandshake },
               { val: 'Focused', label: 'Allergy Practice', icon: ShieldCheck },
               { val: 'Family', label: 'Friendly Care', icon: Baby },
               { val: 'Online', label: 'Consultation', icon: Video },
             ].map((stat, i) => (
               <div key={i} className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-soft flex items-center justify-center text-primary">
                   <stat.icon className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="font-heading font-bold text-text-primary leading-tight">{stat.val}</p>
                   <p className="text-xs text-text-secondary uppercase tracking-wide">{stat.label}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE ABHAYA */}
      <section className="py-24 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-primary">Why Families Trust Abhaya</h2>
            <p className="text-text-secondary text-lg">Every patient experiences allergies differently. Our goal is not simply to address symptoms but to understand patterns, triggers, and individual health factors that influence overall wellbeing.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Allergy-Focused Care', desc: 'Dedicated attention to respiratory, skin, and childhood allergy concerns.', icon: ShieldCheck },
              { title: 'Child-Friendly Approach', desc: 'A comfortable and compassionate environment for children and parents.', icon: Baby },
              { title: 'Personalized Consultations', desc: 'Every treatment plan is tailored to the individual patient.', icon: HandHeart },
              { title: 'Long-Term Wellness', desc: 'Supporting resilience, balance, and healthier living.', icon: HeartHandshake },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.1 }}
                  key={i} className="glass p-8 rounded-3xl hover:bg-white transition-colors duration-300"
                >
                  <div className="w-14 h-14 bg-soft rounded-2xl flex items-center justify-center text-primary mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3 text-text-primary">{feature.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. CONDITIONS WE FOCUS ON */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
             <div>
               <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-4">Conditions We Frequently See</h2>
               <p className="text-text-secondary text-lg max-w-2xl">Expert management for respiratory and skin-related allergic conditions.</p>
             </div>
             <Link to="/allergy-conditions" className="text-primary font-medium hover:text-leaf transition-colors flex items-center gap-2">
               View All Conditions <ArrowRight className="w-4 h-4" />
             </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {conditions.map((condition, i) => (
              <motion.div 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.1 }}
                key={condition.id} className="group rounded-3xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 hover:border-soft relative bg-base/50 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-soft rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
                <div className="relative z-10 border-b border-gray-100 pb-6 mb-6">
                  <h3 className="font-heading font-bold text-2xl text-text-primary mb-2">{condition.title}</h3>
                </div>
                <p className="text-text-secondary mb-8 relative z-10 line-clamp-3">{condition.shortDescription}</p>
                <Link to={`/${condition.id}`} className="inline-flex items-center gap-2 text-primary font-medium group-hover:text-leaf transition-colors relative z-10">
                  Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ALLERGY JOURNEY */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtbmgydjRoLTJ2NHgtMnYtNGgtMnYtNGgydjRoMnptLTQtMTR2LTRoMnY0aC0ydjRoLTJ2LTRoMnptMTYgMTZ2LTRoMnY0aC0ydjRoLTJ2LTRoMnptLTE2IDE2di00aDJ2NGgtMnY0aC0ydjRoMnptMTYgMTZ2LTRoMnY0aC0ydjRoLTJ2LTRoMnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Understanding the Allergy Journey</h2>
            <p className="text-soft text-lg max-w-2xl mx-auto">How environmental factors interact with your body, and how we help you find balance.</p>
          </div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/20 hidden md:block -translate-y-1/2" />
            
            <div className="grid md:grid-cols-5 gap-8">
              {[
                { step: '1', title: 'Symptoms', desc: 'Sneezing, itching, cough, congestion.' },
                { step: '2', title: 'Triggers', desc: 'Dust, pollen, weather changes.' },
                { step: '3', title: 'Inflammation', desc: 'The body\'s response causes discomfort.' },
                { step: '4', title: 'Recurrence', desc: 'Symptoms affect daily life repeatedly.' },
                { step: '5', title: 'Relief & Wellness', desc: 'Personalized approach to long-term health.' },
              ].map((item, i) => (
                <motion.div 
                  initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.1 }}
                  key={i} className="relative z-10 text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-white text-primary rounded-full flex items-center justify-center font-heading font-bold text-2xl mb-6 shadow-xl relative">
                    {item.step}
                    {i < 4 && <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-white/20 hidden md:block" />}
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-soft text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. ABOUT DR VARUN */}
      <section className="py-24 bg-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} transition={{ duration: 0.8 }}>
              {/* Image Placeholder */}
              <div className="aspect-[4/5] rounded-3xl bg-gray-200 overflow-hidden relative shadow-xl">
                 <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10 flex flex-col justify-end p-8 text-white">
                    <p className="font-heading font-bold text-3xl">Dr. Varun Vasudev</p>
                    <p className="text-soft">BHMS • Allergy Wellness Consultant</p>
                 </div>
                 <div className="w-full h-full bg-leaf/20 flex items-center justify-center text-primary/40 text-xl font-heading">
                     [ Portrait Image ]
                 </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once:true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-6">Meet Dr Varun Vasudev</h2>
              <div className="space-y-6 text-text-secondary text-lg mb-8">
                <p>Dr Varun Vasudev is dedicated to helping individuals and families manage allergy-related concerns through a holistic and patient-focused approach.</p>
                <p>With a special interest in respiratory wellness, skin health, childhood allergies, and overall wellbeing, he believes that understanding the individual behind the symptoms is an essential part of healthcare.</p>
                <p>His mission is to help patients move toward healthier living, improved comfort, and lasting wellness.</p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {['Allergy Wellness', 'Respiratory Health', 'Skin Health', 'Child Health'].map((focus, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-leaf" />
                    <span className="font-medium text-text-primary">{focus}</span>
                  </div>
                ))}
              </div>

              <Link to="/about-dr-varun" className="inline-flex items-center gap-2 text-primary font-medium hover:text-leaf transition-colors">
                Read Full Story <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
               <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-4">What Our Patients Say</h2>
               <p className="text-text-secondary text-lg">The experiences shared below reflect individual patient journeys.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {reviews.map((review, i) => (
                 <motion.div 
                   initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeIn} transition={{ delay: i * 0.1 }}
                   key={review.id} className="p-8 rounded-3xl border border-gray-100 bg-base/30 shadow-sm hover:shadow-xl transition-shadow"
                 >
                    <div className="flex gap-1 mb-6 text-[#FABB05]">
                      {[...Array(review.rating)].map((_, idx) => (
                        <svg key={idx} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <p className="text-text-secondary leading-relaxed mb-6 italic">"{review.text}"</p>
                    <div>
                      <p className="font-heading font-bold text-text-primary">{review.name}</p>
                      <p className="text-sm text-text-secondary">{review.location}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-24 bg-base">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-heading font-semibold text-lg text-text-primary">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-primary transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-text-secondary">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. APPOINTMENT CTA */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-text-primary mb-6">Ready To Breathe Better?</h2>
          <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
            Book your consultation and take the next step toward improved respiratory wellness, healthier skin, and better quality of life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/book-appointment" className="px-8 py-4 bg-primary text-white rounded-full font-medium text-center hover:bg-primary/90 transition shadow-lg hover:shadow-xl text-lg">
              Book Appointment
            </Link>
            <a href="tel:+919188240272" className="px-8 py-4 bg-white border border-gray-200 text-text-primary rounded-full font-medium text-center hover:bg-base transition text-lg">
              Call Now
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

// Quick component for HandHeart icon not imported
function HandHeart(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
      <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
      <path d="m2 15 6 6" />
      <path d="M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 3a2.78 2.78 0 0 0-2 1.5A2.78 2.78 0 0 0 12 3a2.73 2.73 0 0 0-5 5.8" />
    </svg>
  );
}
