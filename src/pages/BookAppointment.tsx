import { ArrowRight, MessageCircle } from 'lucide-react';

export default function BookAppointment() {
  return (
    <div className="bg-base min-h-screen pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-center mb-8">Book an Appointment</h1>
        <p className="text-text-secondary text-center text-lg mb-12">
          Take the first step toward lasting allergy relief. Fill out the form below or message us directly on WhatsApp.
        </p>

        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl mb-8">
           <form className="space-y-6" onSubmit={e => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-text-primary mb-2">Patient Name</label>
                   <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="John Doe" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-text-primary mb-2">Phone Number</label>
                   <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="+91 98765 43210" />
                 </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-medium text-text-primary mb-2">Age</label>
                   <input type="number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Years" />
                 </div>
                 <div>
                   <label className="block text-sm font-medium text-text-primary mb-2">Preferred Date</label>
                   <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                 </div>
              </div>

              <div>
                 <label className="block text-sm font-medium text-text-primary mb-2">Condition / Main Concern</label>
                 <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white">
                    <option>Select a condition</option>
                    <option>Allergic Rhinitis</option>
                    <option>Adenoid Enlargement</option>
                    <option>Asthma & Wheezing</option>
                    <option>Eczema</option>
                    <option>Urticaria</option>
                    <option>Sinus Allergy</option>
                    <option>Other</option>
                 </select>
              </div>

              <div>
                 <label className="block text-sm font-medium text-text-primary mb-2">Message (Optional)</label>
                 <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Briefly describe your symptoms..."></textarea>
              </div>

              <button className="w-full py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition shadow-md flex items-center justify-center gap-2">
                Submit Request <ArrowRight className="w-5 h-5" />
              </button>
           </form>
        </div>

        <div className="bg-[#25D366]/10 rounded-3xl p-8 border border-[#25D366]/20 bg-opacity-50 flex flex-col sm:flex-row items-center justify-between gap-6">
           <div>
              <h3 className="font-heading font-bold text-xl text-text-primary mb-2">Prefer instant chat?</h3>
              <p className="text-text-secondary text-sm">Message our clinic directly to schedule your appointment.</p>
           </div>
           <a href="https://wa.me/919188240272?text=Hello%20ABHAYA%20HOMEO%20CLINIC,%20I%20would%20like%20to%20book%20an%20appointment." className="px-6 py-3 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#25D366]/90 transition flex items-center gap-2 whitespace-nowrap">
             <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
           </a>
        </div>
      </div>
    </div>
  );
}
