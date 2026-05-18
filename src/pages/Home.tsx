import { Link } from 'react-router-dom';
import { PHONE_NUMBER } from '../constants';
import LeadForm from '../components/LeadForm';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="Emergency Plumber Bondi | 24 Hour Service | Call Now"
        description="Need an emergency plumber in Bondi? Fast 30 minute response. Available 24/7 including weekends and public holidays. Licensed NSW plumbers. Call now for immediate help."
      />
      <main id="home">
        {/* HERO SECTION */}
        <section 
          className="relative min-h-[600px] flex items-center bg-white overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(to right, white 30%, rgba(255, 255, 255, 0) 70%), url('/images/hero.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* LEFT COLUMN */}
              <div className="w-full lg:w-[60%]">
                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-navy">
                  Emergency Plumber Bondi
                </h1>
                <p className="text-xl md:text-2xl text-gray-800 mb-8 max-w-xl font-medium">
                  Fast response to burst pipes, blocked drains and all plumbing emergencies across Bondi and the Eastern Suburbs
                </p>

                <div className="flex flex-wrap gap-6 mb-10 text-sm md:text-base font-bold text-navy">
                  <span className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded shadow-sm">⚡ 30 Min Response</span>
                  <span className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded shadow-sm">✓ Licensed & Insured</span>
                  <span className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded shadow-sm">⭐ 5 Star Service</span>
                  <span className="flex items-center gap-2 bg-white/80 px-3 py-1 rounded shadow-sm">💰 Upfront Pricing</span>
                </div>

                <a 
                  href="#contact" 
                  className="inline-block bg-navy text-white px-10 py-5 rounded font-bold text-xl hover:bg-black transition-all shadow-lg hover:scale-105 active:scale-95"
                >
                  Get Emergency Help Now →
                </a>
              </div>

              {/* RIGHT COLUMN — FORM */}
              <div className="w-full lg:w-[40%]">
                <div className="bg-white border border-gray-200 rounded shadow-2xl overflow-hidden">
                  <div className="bg-[#22C55E] text-white p-4 text-center">
                    <p className="font-bold text-lg leading-tight uppercase">Free Instant Quote</p>
                    <p className="text-sm font-semibold opacity-90">ENTER YOUR INFO BELOW</p>
                  </div>
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="bg-gray-100 py-6 border-y border-gray-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-4 md:gap-8 text-center md:text-left text-navy font-bold uppercase tracking-wider text-sm">
            <span>✓ No Call Out Fee</span>
            <span>✓ Same Day Service</span>
            <span>✓ All Work Guaranteed</span>
            <span>✓ Available 24/7</span>
          </div>
        </section>

        {/* INTRO TEXT SECTION */}
        <section className="py-16 md:py-24 max-w-[900px] mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Emergency Plumber Bondi Beach</h2>
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              When a plumbing disaster strikes in the heart of <strong>Bondi Beach</strong>, you need a local specialist who understands the unique demands of coastal living. From the high-pressure demands of the high-rise apartments along <strong>Campbell Parade</strong> to the intricate plumbing systems in the heritage terrace homes near <strong>Hall Street</strong>, we've seen and fixed it all. Our team is stationed locally to ensure we can navigate the bustling Bondi streets and reach your door in record time.
            </p>
            <p>
              We specialize in rapid-response repairs for all common Bondi plumbing issues. Whether it's the corrosive salt air affecting your external fixtures or the heavy demand on drainage systems in North Bondi's high-density areas, our licensed plumbers carry the specific tools and parts required for immediate solutions. We don't just clear the mess; we ensure your plumbing is resilient against the local environment.
            </p>
            <p>
              Why call us first? Unlike major insurance-led plumbing companies that might leave you waiting for hours, we prioritize local Bondi emergencies. We understand that a burst pipe or a gas leak doesn't respect business hours. By choosing a local specialist, you get faster arrival, deeper local knowledge, and a commitment to service that national chains simply can't match. We treat every home in the Eastern Suburbs with the same urgency as our own.
            </p>
          </div>
        </section>

        {/* SERVICES SECTIONS — ALTERNATING */}
        <div id="services">
          {/* SECTION 1 — Text LEFT, Image RIGHT */}
          <section className="py-20 md:py-32 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Emergency Plumbing Repairs Bondi</h2>
                  <div className="space-y-4 text-gray-600 text-lg">
                    <p>Plumbing emergencies never happen at a convenient time. When a pipe bursts in the middle of the night, it can cause thousands of dollars in water damage within minutes. Our rapid response team is on standby 24 hours a day, 7 days a week, including all public holidays.</p>
                    <p>The first thing to do in a plumbing crisis is to shut off your main water valve. Once that's done, call us immediately. We aim to have a licensed plumber at your Bondi address within 30 minutes to perform critical repairs and secure your property.</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/burst-pipe.png" 
                      alt="Emergency plumber repairing burst pipe" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2 — Image LEFT, Text RIGHT */}
          <section className="py-20 md:py-32 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Blocked Drains Bondi</h2>
                  <div className="space-y-4 text-gray-600 text-lg">
                    <p>A blocked drain is more than an inconvenience; it's a sanitation risk. In the high-density living areas of Bondi and the Eastern Suburbs, drain blockages can quickly affect multiple units or flood communal areas. We utilize the latest high-pressure hydro-jetting technology to clear even the most stubborn clogs.</p>
                    <p>For persistent issues, we provide detailed CCTV drain inspections. This allows us to see exactly what's causing the blockage—whether it's tree root intrusion, pipe collapse, or build-up—so we can offer a permanent solution rather than a temporary fix.</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/blocked-drain.png" 
                      alt="Plumber clearing a blocked drain in Bondi" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3 — Text LEFT, Image RIGHT */}
          <section className="py-20 md:py-32 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Hot Water System Repairs Bondi</h2>
                  <div className="space-y-4 text-gray-600 text-lg">
                    <p>Losing hot water can disrupt your entire day. Our plumbers are experts in all major types of hot water systems, including electric storage, continuous flow gas, and solar-powered units. We provide same-day repair or replacement services to get your showers running hot again.</p>
                    <p>We work with all leading brands such as Rheem, Rinnai, and Dux. If your system is old and beyond repair, we'll provide upfront pricing for a modern, energy-efficient replacement that fits your household's needs and budget.</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/hot-water.png" 
                      alt="Hot water system inspection and repair" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4 — Image LEFT, Text RIGHT */}
          <section className="py-20 md:py-32 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Burst Pipe Repairs Bondi</h2>
                  <div className="space-y-4 text-gray-600 text-lg">
                    <p>Many Bondi terrace homes still have original copper or even older galvanized piping that is reaching the end of its lifespan. These pipes are prone to sudden fractures and leaks. We provide precision leak detection to locate invisible burst pipes hidden behind walls or under flooring.</p>
                    <p>By using minimally invasive techniques, we can repair the section of damaged pipe without tearing up your entire home. Our licensed experts ensure every repair meets current NSW building standards for long-lasting security.</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/heritage-pipe.png" 
                      alt="Repairing a burst pipe in a heritage home" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5 — Text LEFT, Image RIGHT */}
          <section className="py-20 md:py-32 border-t border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
                <div className="w-full md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">Gas Leak Detection Bondi</h2>
                  <div className="space-y-4 text-gray-600 text-lg">
                    <p>A gas leak is a critical life-safety emergency. If you smell gas or notice an unusual spike in your utility bill, don't wait. Our Bondi gas fitters are available 24/7 with specialized detection equipment to find and isolate leaks immediately.</p>
                    <p>Safety is our absolute priority. We perform thorough pressure testing on your entire gas line once the repair is complete to ensure there are no secondary leaks. We provide compliance certificates for all gas fitting work performed across the Eastern Suburbs.</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src="/images/gas-leak.png" 
                      alt="Licensed gas fitter checking for leaks" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ SECTION */}
        <section id="faq" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-navy">Emergency Plumber Bondi — Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Q: How quickly can you get to Bondi?</h3>
                <p className="text-gray-600">A: We aim for 30 minute response across Bondi and Eastern Suburbs. Our local presence ensures we beat the traffic to help you faster.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Q: Do you work weekends and public holidays?</h3>
                <p className="text-gray-600">A: Yes — we operate 24 hours, 7 days a week, including all public holidays. We never close our doors during a crisis.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Q: How much does an emergency plumber cost in Bondi?</h3>
                <p className="text-gray-600">A: We provide upfront pricing before starting any work so you know exactly what to expect. Call us for an immediate, obligation-free quote.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Q: Do you fix blocked drains in Bondi?</h3>
                <p className="text-gray-600">A: Yes — blocked drains are one of our most common emergency calls across Bondi. We carry hydro-jetters on every truck.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Q: Are your plumbers licensed in NSW?</h3>
                <p className="text-gray-600">A: All our plumbers hold current NSW licences and full professional insurance, ensuring high-quality and safe work every time.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Q: What areas do you cover?</h3>
                <p className="text-gray-600">A: We serve Bondi, Bondi Beach, Bondi Junction, North Bondi, Tamarama, Bronte, Coogee, Randwick, Waverley, Rose Bay and surrounding Eastern Suburbs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE AREAS GRID */}
        <section id="areas" className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Bondi Mobile Emergency Plumbing Service</h2>
              <p className="text-gray-600 font-semibold uppercase tracking-wider">We come to you — no need to bring your vehicle to us</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <ul className="space-y-3">
                {[ "Bondi Beach", "Bondi Junction", "North Bondi", "Tamarama", "Bronte", "Coogee", "Randwick" ].map((area) => (
                  <li key={area}><a href="#" className="text-navy font-bold hover:underline">{area}</a></li>
                ))}
              </ul>
              <ul className="space-y-3">
                {[ "Waverley", "Rose Bay", "Double Bay", "Paddington", "Surry Hills", "Maroubra", "Kingsford" ].map((area) => (
                  <li key={area}><a href="#" className="text-navy font-bold hover:underline">{area}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Contact Us For More Information</h2>
            
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              {/* LEFT — FORM */}
              <div className="w-full lg:w-1/2">
                <div className="bg-white border border-gray-200 rounded shadow-lg overflow-hidden">
                  <div className="bg-[#22C55E] text-white p-4 text-center">
                    <p className="font-bold text-xl leading-tight uppercase">Get A Fast Response</p>
                  </div>
                  <LeadForm spacing="space-y-6" padding="p-8" inputPadding="p-4" />
                </div>
              </div>

              {/* RIGHT — SEO COPY & TESTIMONIALS */}
              <div className="w-full lg:w-1/2 space-y-12">
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>Contact us for emergency plumbing in Bondi any time day or night. Our dispatch system is connected directly to our mobile units, meaning your request is seen by the nearest available plumber instantly. We prioritize serious emergencies like gas leaks and major flooding to ensure the safety of Eastern Suburbs residents.</p>
                  <p>Choosing a local specialist means you're supporting a business that knows the Bondi area inside out. We know the shortcuts to beat the weekend beach traffic and we're familiar with the specific plumbing layouts of nearly every major apartment complex in the area. This local knowledge saves time and money for our customers.</p>
                  <p>Every member of our team is fully licensed, insured, and background-checked for your peace of mind. We provide upfront pricing with no hidden fees or surprise "emergency surcharges" after the work is done. Call us right now for immediate help or to book a priority inspection.</p>
                </div>

                <div className="space-y-6">
                  {[
                    { text: "Arrived within 20 minutes of calling. Fixed a burst pipe in our Bondi apartment quickly and cleanly. Highly recommend.", author: "John B, Bondi" },
                    { text: "Called at 11pm for a blocked drain. They were here fast and had it sorted within the hour. Great service.", author: "Sarah M, Bondi Beach" },
                    { text: "Really professional. Gave us an upfront price before starting and stuck to it. Will definitely use again.", author: "Mike T, North Bondi" }
                  ].map((cite, i) => (
                    <div key={i} className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm">
                      <div className="text-yellow-500 mb-3 text-lg">★★★★★</div>
                      <p className="text-gray-700 italic mb-4">"{cite.text}"</p>
                      <p className="font-bold text-navy">— {cite.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* BLOG TEASER SECTION */}
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-navy">Latest from our blog</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-navy">
                  <Link to="/blog/burst-pipe-bondi-apartment" className="hover:underline">
                    What to do when a pipe bursts in your Bondi apartment
                  </Link>
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  A burst pipe in your Bondi apartment can cause serious damage in minutes. Here's exactly what to do.
                </p>
                <Link to="/blog/burst-pipe-bondi-apartment" className="text-red-600 font-bold hover:underline self-start">
                  Read More &rarr;
                </Link>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-navy">
                  <Link to="/blog/emergency-plumber-cost-bondi" className="hover:underline">
                    How much does an emergency plumber cost in Bondi?
                  </Link>
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Honest pricing breakdown covering call-out fees, common jobs and what affects the final bill.
                </p>
                <Link to="/blog/emergency-plumber-cost-bondi" className="text-red-600 font-bold hover:underline self-start">
                  Read More &rarr;
                </Link>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-navy">
                  <Link to="/blog/common-plumbing-emergencies-bondi-beach" className="hover:underline">
                    The most common plumbing emergencies in Bondi Beach homes
                  </Link>
                </h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  From burst pipes to blocked drains — the plumbing problems we see most often in Bondi.
                </p>
                <Link to="/blog/common-plumbing-emergencies-bondi-beach" className="text-red-600 font-bold hover:underline self-start">
                  Read More &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
