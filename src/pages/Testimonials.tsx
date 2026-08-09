import { reviews } from '../data/content';

export default function Testimonials() {
  return (
    <div className="bg-base min-h-screen pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-center mb-16">Patient Stories</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map(r => (
            <div key={r.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
               <div className="flex gap-1 mb-4 text-[#FABB05]">
                 {[...Array(r.rating)].map((_, idx) => (
                   <svg key={idx} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                 ))}
               </div>
               <p className="italic text-text-secondary mb-4">"{r.text}"</p>
               <p className="font-bold">{r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
