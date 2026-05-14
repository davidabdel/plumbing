import LeadForm from '../../components/LeadForm';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';

export default function BurstPipeBondi() {
  return (
    <>
      <SEO 
        title="What To Do When a Pipe Bursts in Your Bondi Apartment"
        description="A burst pipe in your Bondi apartment can cause serious damage in minutes. Here's exactly what to do — step by step — before it gets worse."
      />
      
      <article className="bg-white">
        {/* Blog Hero */}
        <div className="relative h-[60vh] min-h-[400px] bg-navy overflow-hidden">
          <img 
            src="/images/burst-pipe-blog.png" 
            alt="Burst pipe in a Bondi apartment" 
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
                  What To Do When a Pipe Bursts in Your Bondi Apartment
                </h1>
                <p className="text-xl text-gray-200 font-medium">
                  A burst pipe can cause serious damage in minutes. Here's exactly what to do — step by step — before it gets worse.
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
                  The first thing most people do when a pipe bursts is panic. The second thing they do is make it worse.
                </p>
                <p className="mb-6">
                  Water is already spreading across the floor. You're not sure where it's coming from. You've got a downstairs neighbour who's going to lose their mind if this reaches their ceiling. And you have no idea who to call.
                </p>
                <p className="mb-12">Here's what to do — in order.</p>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-navy mb-6">Step 1: Turn Off the Water Immediately</h2>
                  <p className="mb-4">
                    Don't wait. Don't try to figure out which pipe it is or what caused it. Go straight to your water shutoff valve and turn it off.
                  </p>
                  <p className="mb-4">
                    In most Bondi apartments the shutoff valve is either under the kitchen sink, in the bathroom cupboard, or out on the balcony near the meter box. If you can't find it, call your building manager — they'll know where the main valve is for the whole building.
                  </p>
                  <p className="font-bold text-gray-900 italic">
                    The moment the water is off, the problem stops getting worse. Everything after this is just cleanup and repair.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-navy mb-6">Step 2: Move Valuables and Protect What You Can</h2>
                  <p className="mb-4">
                    Once the water is off you have a minute to think. Grab towels, move electronics off the floor, pull rugs away from the wet area. If water is pooling near a wall or running toward another room, roll up a towel and push it against the gap.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-4">
                    <p className="text-red-900 font-bold">
                      Important: Don't touch any electrical switches or powerpoints that are wet or near water. If you're not sure, flip the circuit breaker off at the fuse box.
                    </p>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-navy mb-6">Step 3: Document the Damage</h2>
                  <p className="mb-4">
                    Before you start cleaning up, take photos and video of everything. The burst pipe, the water damage, the floor, the ceiling if it's affected. This matters for your insurance claim and for your strata if you're in a shared building.
                  </p>
                  <p className="">
                    If you're renting, text your property manager right now with photos. Don't wait until tomorrow morning.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-navy mb-6">Step 4: Call a Licensed Plumber</h2>
                  <p className="mb-4">
                    This is not a YouTube DIY job. A burst pipe in a Bondi apartment — particularly in the older blocks that line Campbell Parade and the streets running back from the beach — often means ageing copper or galvanised pipes that need proper assessment, not a temporary fix with tape.
                  </p>
                  <p className="mb-6">
                    The same goes for the older terrace conversions on Hall Street and the surrounding streets. These buildings have charm, but the plumbing in a lot of them hasn't been touched in decades. A burst in one of these can mean the pipe that let go was already on borrowed time — and there may be others in similar condition nearby.
                  </p>
                  <p className="mb-6">
                    You need a licensed plumber who can properly diagnose the cause, not just patch what's visible.
                  </p>
                  <p className="font-bold">
                    If you're in Bondi or the Eastern Suburbs and you need someone fast, contact our <Link to="/" className="text-navy underline">emergency plumber Bondi</Link> service and we'll get someone to you as quickly as possible.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-navy mb-6">Step 5: Notify Your Neighbours and Building Manager</h2>
                  <p className="mb-4">
                    If you're above ground floor, knock on the door below you. They may already know something is wrong — or they may have water coming through their ceiling and have no idea where it's coming from. Either way, they need to know.
                  </p>
                  <p className="">
                    Then call or text your building manager or strata. Most strata schemes have an emergency contact number — find it now, before you need it again.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-navy mb-6">Step 6: Deal With Your Insurer</h2>
                  <p className="mb-4">
                    If you have contents insurance, call them and lodge a claim for water damage to your belongings. If you own the apartment, your building insurance through strata should cover the structural damage — but you'll need the plumber's report to back it up.
                  </p>
                  <p className="">
                    Keep every receipt, every photo, and get the plumber to document what they found in writing.
                  </p>
                </section>

                <section className="bg-gray-50 p-8 rounded-xl border border-gray-100 mb-12">
                  <h2 className="text-3xl font-bold text-navy mb-6">Why Bondi Buildings Are Particularly Vulnerable</h2>
                  <p className="mb-4">
                    Bondi is one of Sydney's oldest and most densely populated suburbs. The apartment blocks along Campbell Parade, the converted terraces on Hall Street and Curlewis Street, the older low-rise buildings a block or two back from the beach — a lot of them were built in the 1950s, 60s and 70s and the plumbing has never been replaced.
                  </p>
                  <p className="mb-4">
                    Copper pipes corrode from the inside out. You won't see it coming until it lets go. The salty air that comes off the beach doesn't help either — it accelerates corrosion on anything exposed.
                  </p>
                  <p className="">
                    If you've had one burst pipe in a building like this, there's a reasonable chance it's not the last. It's worth asking your plumber while they're there to have a look at the condition of the visible pipework nearby.
                  </p>
                </section>

                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-navy mb-6">What Not To Do</h2>
                  <ul className="list-disc pl-6 space-y-4">
                    <li><strong>Don't try to repair it yourself.</strong> Plumbing in apartment buildings is not like fixing a garden hose. There's water pressure, there are shared pipes, and there are building codes that require licensed work.</li>
                    <li><strong>Don't ignore a slow leak thinking it'll go away.</strong> It won't. A small drip in a wall cavity can cause mould and structural damage over weeks before it becomes visible.</li>
                    <li><strong>Don't go through your building insurance without calling a plumber first.</strong> Your insurer will want a licensed assessment. Have that done before you make the call.</li>
                  </ul>
                </section>

                <div className="bg-navy text-white p-10 rounded-2xl mb-12">
                  <h2 className="text-3xl font-bold mb-6">The Short Version</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3"><span className="bg-white/20 px-2 rounded font-bold">1</span> Shut off the water at the valve — don't wait</li>
                    <li className="flex items-start gap-3"><span className="bg-white/20 px-2 rounded font-bold">2</span> Move valuables, protect electrics</li>
                    <li className="flex items-start gap-3"><span className="bg-white/20 px-2 rounded font-bold">3</span> Take photos before you touch anything</li>
                    <li className="flex items-start gap-3"><span className="bg-white/20 px-2 rounded font-bold">4</span> Call a licensed emergency plumber Bondi</li>
                    <li className="flex items-start gap-3"><span className="bg-white/20 px-2 rounded font-bold">5</span> Notify neighbours below and your building manager</li>
                    <li className="flex items-start gap-3"><span className="bg-white/20 px-2 rounded font-bold">6</span> Contact your insurer with documentation</li>
                  </ul>
                </div>

                <p className="text-xl font-bold text-gray-900 mb-8">
                  A burst pipe is stressful but it's manageable if you move quickly and in the right order. The water shutoff is your most important action — everything else follows from that.
                </p>

                <div className="border-t border-gray-200 pt-12 mt-12">
                  <h3 className="text-2xl font-bold mb-4">Need a plumber in Bondi right now?</h3>
                  <p className="mb-6">We cover Bondi Beach, Bondi Junction, North Bondi and the Eastern Suburbs — call us any time.</p>
                  <a href="tel:0483964440" className="inline-block bg-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-black transition-all">
                    Call 0483 964 440 Now
                  </a>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-[#22C55E] text-white p-6 text-center">
                    <h3 className="font-bold text-xl uppercase">Need Help Fast?</h3>
                    <p className="text-sm opacity-90 mt-1">Get a response within 30 minutes</p>
                  </div>
                  <LeadForm title="Book Emergency Repair" />
                </div>

                <div className="bg-gray-100 p-8 rounded-2xl">
                  <h3 className="font-bold text-xl mb-4">Service Areas</h3>
                  <ul className="grid grid-cols-1 gap-2">
                    {["Bondi Beach", "Bondi Junction", "North Bondi", "Tamarama", "Bronte", "Coogee", "Randwick", "Waverley", "Rose Bay"].map(area => (
                      <li key={area} className="text-navy font-semibold hover:underline">
                        <Link to="/">{area}</Link>
                      </li>
                    ))}
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
