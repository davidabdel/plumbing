import LeadForm from '../../components/LeadForm';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function CommonEmergenciesBondi() {
  return (
    <>
      <SEO 
        title="The Most Common Plumbing Emergencies in Bondi Beach Homes (And What Causes Them)"
        description="From burst pipes in older Bondi terraces to blocked drains in beachside apartments — here are the most common plumbing emergencies in Bondi Beach and what causes them."
      />
      
      <article className="bg-white">
        {/* Blog Hero */}
        <div className="relative h-[60vh] min-h-[400px] bg-navy overflow-hidden">
          <img 
            src="/images/common-emergencies-blog.png" 
            alt="Common plumbing emergencies Bondi Beach" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="inline-block bg-white text-navy px-3 py-1 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
                  Emergency Tips
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                  The Most Common Plumbing Emergencies in Bondi Beach Homes
                </h1>
                <p className="text-xl text-gray-200 font-medium">
                  Bondi Beach has a plumbing profile unlike almost anywhere else in Sydney. Here's what goes wrong and why.
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
                  Bondi Beach is one of the most densely populated suburbs in Sydney. Tens of thousands of people live within a kilometre of the sand — in apartment blocks that date back to the 1950s, in converted terrace houses that were never designed for modern water usage, and in newer developments that are only now starting to show their first signs of wear.
                </p>
                <p className="mb-12">
                  The result is a suburb with a plumbing profile unlike almost anywhere else in Sydney. The combination of building age, salt air, high density and older infrastructure creates the same issues over and over again.
                </p>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-navy mb-6">1. Burst Pipes</h2>
                  <p className="mb-4">
                    Burst pipes are the most dramatic plumbing emergency and the one that causes the most damage in the shortest amount of time. In Bondi, they're more common than most suburbs — and the reason comes down to the age of the buildings.
                  </p>
                  <p className="mb-4">
                    A significant portion of Bondi's housing stock was built between the 1940s and the 1970s. The copper and galvanised steel pipes installed in those buildings were designed to last 40 to 50 years. A lot of them are now 60 or 70 years old and still in service. They corrode from the inside.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-navy p-6 mb-4 font-medium">
                    The salt air off the ocean doesn't help. Anything exposed — pipe fittings on external walls, connections near meter boxes, external taps — corrodes faster in Bondi than it would five kilometres inland.
                  </div>
                  <p className="font-bold text-gray-900">
                    What to do: Turn off the water at the shutoff valve immediately. Call a Bondi emergency plumber and document everything with photos.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-navy mb-6">2. Blocked Drains</h2>
                  <p className="mb-4">
                    Blocked drains are the most common plumbing call we get in Bondi — not the most dramatic, but by far the most frequent.
                  </p>
                  <p className="mb-4">
                    In apartments, the cause is often a gradual buildup of hair, soap scum and grease. In older terrace homes, the issue is frequently tree roots. Original drainage systems in these properties often use clay or cast iron pipes that are now cracked or root-invaded.
                  </p>
                  <p className="font-bold text-gray-900">
                    What to do: Don't pour chemicals down a blocked drain. Call a plumber who can camera inspect the line before deciding on treatment.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-navy mb-6">3. Hot Water System Failures</h2>
                  <p className="mb-4">
                    The majority of hot water failures we see are in systems that are simply past their service life. Electric storage systems typically last 8 to 12 years. A lot of the units in Bondi's older apartment buildings are running on borrowed time.
                  </p>
                  <p className="mb-4">
                    In older Bondi apartments, hot water systems are often installed in enclosed cupboards with no drainage. When a tank fails, the water has nowhere to go except through the floor — which is the ceiling of the apartment below.
                  </p>
                  <p className="font-bold text-gray-900">
                    What to do: If the system is leaking, turn off the cold water supply to the unit. If you can smell gas, turn off the gas at the meter and call immediately.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-navy mb-6">4. Gas Leaks</h2>
                  <p className="mb-4">
                    Gas leaks are the plumbing emergency that requires the fastest response. Bondi has a high proportion of gas-connected properties, particularly older apartments and terraces with aging infrastructure.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                    <h4 className="font-bold text-red-900 mb-2">If you smell gas:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-red-900 text-sm">
                      <li>Don't turn any light switches on or off</li>
                      <li>Don't use your phone inside the building</li>
                      <li>Turn off the gas at the meter if safe</li>
                      <li>Get everyone out and call from outside</li>
                    </ul>
                  </div>
                  <p className="font-bold text-gray-900">
                    What to do: Get out, turn off the gas at the meter if safe, call from outside.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-navy mb-6">5. Toilet Overflows and Blockages</h2>
                  <p className="mb-4">
                    In apartment buildings, toilet blockages are almost always caused by "flushable" wet wipes or sanitary products. Despite the labelling, wet wipes do not break down and combination with grease can create massive blockages in shared sewer lines.
                  </p>
                  <p className="mb-4">
                    An overflowing toilet in a Bondi apartment is a water damage event. The water is contaminated and spreads quickly through floors and ceilings.
                  </p>
                  <p className="font-bold text-gray-900">
                    What to do: Turn off the water supply to the toilet at the isolation valve. Call a plumber with professional drain clearing equipment.
                  </p>
                </section>

                <div className="bg-navy text-white p-10 rounded-2xl mb-12">
                  <h2 className="text-3xl font-bold mb-6">The Bottom Line</h2>
                  <p className="text-lg mb-6 opacity-90">
                    Every one of these emergencies is more likely in Bondi than in newer suburbs. The best defence is knowing your building — know where your shutoff valves are before you need them.
                  </p>
                  <p className="text-lg opacity-90">
                    When something goes wrong, a fast call to a local specialist is always the right move. We're available 24/7 across the Eastern Suburbs.
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
                    <h3 className="font-bold text-xl uppercase">Need Help Fast?</h3>
                    <p className="text-sm opacity-90 mt-1">Available 24/7 in Bondi Beach</p>
                  </div>
                  <LeadForm title="Emergency Call Out" />
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
                      <Link to="/blog/emergency-plumber-cost-bondi" className="text-navy font-semibold hover:underline">
                        How Much Does an Emergency Plumber Cost in Bondi? (2026 Guide)
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
