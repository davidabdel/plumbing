import LeadForm from '../../components/LeadForm';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function PlumbingCostBondi() {
  return (
    <>
      <SEO 
        title="How Much Does an Emergency Plumber Cost in Bondi? (2026 Pricing Guide)"
        description="Wondering what an emergency plumber costs in Bondi? Honest pricing breakdown covering call-out fees, common jobs and what affects the final bill."
      />
      
      <article className="bg-white">
        {/* Blog Hero */}
        <div className="relative h-[60vh] min-h-[400px] bg-navy overflow-hidden">
          <img 
            src="/images/plumbing-cost-blog.png" 
            alt="Plumbing cost guide Bondi" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="inline-block bg-white text-navy px-3 py-1 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
                  Pricing & Advice
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                  How Much Does an Emergency Plumber Cost in Bondi?
                </h1>
                <p className="text-xl text-gray-200 font-medium">
                  Nobody searches for this question when things are going well. Here's the honest breakdown of what to expect.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Content Column */}
            <div className="w-full lg:w-2/3">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl font-medium text-gray-900 mb-8">
                  You're searching because water is going somewhere it shouldn't, it's late, and you need to know whether calling an emergency plumber right now is going to cost you $200 or $2,000.
                </p>
                <p className="mb-12">
                  Here's the honest answer — including what affects the price, what's reasonable to pay, and what to watch out for.
                </p>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-navy mb-6">The Short Answer</h2>
                  <p className="mb-6">
                    An emergency plumber in Bondi will typically cost between <strong>$150 and $550</strong> for the call-out and first hour of work, depending on the time of day, the complexity of the job and who you call.
                  </p>
                  <p className="mb-8">
                    After that first hour, most plumbers charge an hourly rate of <strong>$120 to $180 per hour</strong> plus parts.
                  </p>

                  <div className="overflow-x-auto mb-12">
                    <table className="w-full text-left border-collapse border border-gray-200 rounded-lg overflow-hidden">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="p-4 border-b border-gray-200 font-bold text-navy">Job</th>
                          <th className="p-4 border-b border-gray-200 font-bold text-navy">Typical Cost Range</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {[
                          { job: "Burst pipe repair", cost: "$250 — $650" },
                          { job: "Blocked drain (simple)", cost: "$150 — $350" },
                          { job: "Blocked drain (CCTV/jetting)", cost: "$350 — $700" },
                          { job: "Emergency hot water repair", cost: "$200 — $500" },
                          { job: "Hot water system replacement", cost: "$1,200 — $2,800" },
                          { job: "Gas leak detection and repair", cost: "$300 — $600" },
                          { job: "Leaking tap (after hours)", cost: "$150 — $300" },
                          { job: "Toilet blockage", cost: "$150 — $350" }
                        ].map((row, i) => (
                          <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                            <td className="p-4">{row.job}</td>
                            <td className="p-4 font-bold text-navy">{row.cost}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-gray-500 italic">
                    These are real-world ranges for Sydney's Eastern Suburbs. Not the cheapest quote you'll find online, and not the most expensive. Just what most licensed plumbers in this area actually charge.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-navy mb-6">What Affects the Price</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Time of Day</h3>
                      <p>
                        This is the biggest variable. A plumber called at 2pm on a Tuesday costs significantly less than the same plumber called at 11pm on a Saturday. After-hours, weekend and public holiday rates are standard across the industry — expect to pay 50 to 100 percent more outside business hours.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">The Age of Your Building</h3>
                      <p>
                        Bondi has a lot of older apartment buildings and converted terraces — particularly around Campbell Parade, Hall Street and the streets running back from the beach. Older plumbing means older pipes, which means repairs can be more complex than a straightforward fix.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Access</h3>
                      <p>
                        Pipes hidden behind tiles, inside walls or in ceiling cavities take longer to access. In a Bondi apartment this is more common than you'd think. Ground-floor access for an apartment block can also add time if the shutoff valve is in a locked room or basement.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Parts</h3>
                      <p>
                        Some jobs need parts ordered same-day or sourced from a supplier. Emergency hot water systems, in particular, can vary significantly in price depending on the unit and brand. Always ask for a quote on parts separately if the job is anything beyond a simple repair.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-12">
                  <h2 className="text-3xl font-bold text-navy mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-8">
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Is there a call-out fee for emergency plumbers in Bondi?</h4>
                      <p>Yes, almost always. Call-out fees in Sydney's Eastern Suburbs typically range from $80 to $180 depending on the company and time of day. Some plumbers advertise no call-out fees but bake the cost into a higher hourly rate.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Do emergency plumbers charge more on weekends?</h4>
                      <p>Yes. Weekend rates, public holiday rates and after-hours rates (typically anything after 5pm on weekdays) attract a loading. It's completely standard across the industry.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Should I get a quote before the work starts?</h4>
                      <p>Always. A reputable emergency plumber will assess the situation and give you a quote or at least an estimate before they start. If someone refuses to give you any indication of cost before proceeding, that's a problem.</p>
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-navy mb-6">What You Should Actually Do Right Now</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <div className="text-navy text-2xl mb-4">🚰</div>
                      <h4 className="font-bold mb-2">Turn off the water</h4>
                      <p className="text-sm">Stop ongoing damage immediately at the shutoff valve.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <div className="text-navy text-2xl mb-4">📞</div>
                      <h4 className="font-bold mb-2">Get an estimate</h4>
                      <p className="text-sm">Call a licensed plumber and ask for a price indication before they start.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <div className="text-navy text-2xl mb-4">📸</div>
                      <h4 className="font-bold mb-2">Document everything</h4>
                      <p className="text-sm">Take photos of the damage for insurance purposes.</p>
                    </div>
                    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                      <div className="text-navy text-2xl mb-4">📄</div>
                      <h4 className="font-bold mb-2">Request a report</h4>
                      <p className="text-sm">Get a written report when the job is done for your insurer.</p>
                    </div>
                  </div>
                </section>

                <div className="bg-navy text-white p-10 rounded-2xl mb-12">
                  <h2 className="text-3xl font-bold mb-6">The Bottom Line</h2>
                  <p className="text-lg mb-6 opacity-90">
                    Emergency plumbing in Bondi costs what it costs — and after-hours work costs more than business hours work. That's just the reality.
                  </p>
                  <p className="text-lg opacity-90">
                    Move fast, ask for a quote, and make sure whoever you call is licensed. For fast response across Bondi Beach, Bondi Junction and the Eastern Suburbs, our team is available 24 hours — call us for an upfront quote.
                  </p>
                  <div className="mt-8">
                    <a href="tel:0483964440" className="inline-block bg-white text-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all">
                      Call 0483 964 440 Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-[#22C55E] text-white p-6 text-center">
                    <h3 className="font-bold text-xl uppercase">Need A Quote?</h3>
                    <p className="text-sm opacity-90 mt-1">Free upfront pricing estimation</p>
                  </div>
                  <LeadForm title="Request Pricing" />
                </div>

                <div className="bg-gray-100 p-8 rounded-2xl">
                  <h3 className="font-bold text-xl mb-4">Recent Articles</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/blog/burst-pipe-bondi-apartment" className="text-navy font-semibold hover:underline">
                        What To Do When a Pipe Bursts in Your Bondi Apartment
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog/common-plumbing-emergencies-bondi-beach" className="text-navy font-semibold hover:underline">
                        Common Plumbing Emergencies in Bondi Beach
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
