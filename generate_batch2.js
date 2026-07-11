const fs = require('fs');
const path = require('path');

const servicesData = [
  {
    slug: 'plumbing-fixture-repair',
    title: 'Plumbing Fixture Repair in Simi Valley, CA',
    metaTitle: 'Plumbing Fixture Repair in Simi Valley, CA | Simi Valley Handyman Co.',
    metaDescription: 'Faucet, toilet, garbage disposal, and P-trap repair in Simi Valley, CA. Fast fixture-level plumbing fixes at fair, upfront prices. Free estimate.',
    heroImage: '/assets/image/general-repairs-hero.png', // Fallback or placeholder
    categoryIcon: 'droplet',
    h1: 'Plumbing Fixture Repair in Simi Valley, CA',
    heroDescription: 'Simi Valley Handyman Co. handles fixture-level plumbing repairs — the running toilets, leaky faucets, and clogged drains that don\'t need a licensed plumber\'s rate, but do need to actually get fixed.',
    heroTrust: '✓ Licensed-Scope & Insured · ✓ Same-Day Response · ✓ Upfront Pricing',
    
    // Section 1: Signs
    signsTitle: 'Signs You Need a Plumbing Fixture Repair',
    signsDescription: 'Catching small leaks and fixture wear early prevents water damage and high utility bills.',
    signsItems: [
      { icon: 'droplet', title: 'Dripping Faucet', desc: 'A faucet that\'s been dripping for weeks is almost always a worn cartridge or washer, not a sign of a bigger problem.' },
      { icon: 'refresh-cw', title: 'Running Toilet', desc: 'A toilet that runs constantly or needs jiggling to stop, wasting hundreds of gallons of water.' },
      { icon: 'arrow-down', title: 'Slow Drainage', desc: 'Slow drainage at a sink or tub, often indicating an accumulation of soap scum or hair in the P-trap.' },
      { icon: 'alert-triangle', title: 'Disposal Issues', desc: 'A garbage disposal that hums but doesn\'t turn, or has started leaking underneath.' },
      { icon: 'shield-alert', title: 'Corrosion & Buildup', desc: 'Visible corrosion or mineral buildup around a fixture base, showing a slow, persistent leak.' }
    ],

    // Section 2: What We Repair
    repairTitle: 'What We Repair',
    repairDescription: 'We focus on fixture-level repairs and swaps that get your daily plumbing running smoothly.',
    repairItems: [
      { title: 'Faucets', desc: 'Cartridge and washer replacement, or full fixture swaps for kitchens and bathrooms.' },
      { title: 'Toilets', desc: 'Running toilet repair (flapper, fill valve), toilet rebuilds, and wax ring replacement.' },
      { title: 'Garbage Disposals', desc: 'Replacement and basic jam troubleshooting.' },
      { title: 'P-traps & Drain Work', desc: 'Under-sink drain repair, tailpiece replacement, and new trap installs.' },
      { title: 'Fixture Installs', desc: 'New faucets, sink hardware, and similar fixture-level installs.' }
    ],

    // Section 3: How it Works
    processTitle: 'How a Plumbing Repair Visit Works',
    processDescription: 'A clean and systematic approach to resolving fixture plumbing issues.',
    processSteps: [
      { step: '1', title: 'Diagnose First', desc: 'We check whether it\'s a simple fixture issue or something that points to a bigger problem before quoting a fix.' },
      { step: '2', title: 'Confirm Price', desc: 'You get a clear, upfront flat rate or estimate range before any work starts.' },
      { step: '3', title: 'Repair & Test', desc: 'We run water, pressure test the seals, and check for leaks before calling the job done.' }
    ],

    // Section 4: Local Context & Scope
    contextTitle: 'Why Do Faucets and Fixtures Wear Out So Fast in Simi Valley Homes?',
    contextText: '<p class="mt-4 text-slate-700 leading-relaxed">Simi Valley\'s groundwater runs hard, which chews through washers and cartridges faster than homeowners expect. If a faucet or disposal has failed more than once in a few years, hard water — not bad luck — is usually why.</p>',
    contextCalloutIcon: 'map-pin',
    contextCalloutTitle: 'Groundwater Warning',
    contextCalloutText: 'Mineral scaling on faucets can clog aerators and degrade internal gaskets. Installing a scale-reducing filter or swapping to brass-reinforced cartridges can help fixtures last longer in our area.',
    
    // Section 4b: Scope Advisory
    scopeTitle: 'When You Need a Licensed Plumber Instead',
    scopeText: 'Fixture-level repairs are within handyman scope. New supply lines, sewer line work, water heater replacement, or any job where labor and materials exceed California\'s $500 unlicensed-work cap legally needs a licensed plumber. We\'ll tell you plainly if that\'s what your job needs, rather than take it on anyway.',
    questionTitle: 'Should I call a plumber first if the damage is from a leak?',
    questionText: 'Yes — if you suspect a major main line leak, water heater failure, or slab leak, a licensed plumber is best. For local, under-sink, or fixture leaks, we can diagnose and let you know if a specialist is required.',

    // Section 5: Pricing
    pricingText: 'See our <a href="/pricing/handyman-cost-simi-valley/" class="font-semibold text-brand underline">pricing guide</a> for typical costs on faucet repair, toilet rebuilds, and disposal replacement.',

    // Section 6: Related Services
    relatedDescription: 'Other common repairs Simi Valley homeowners bundle with their plumbing fixes.',
    relatedServices: [
      { path: '/services/electrical-fixture-install/', icon: 'zap', title: 'Electrical Fixture Install', desc: 'Often bundled with plumbing fixture work in the same visit.' },
      { path: '/services/general-repairs-punch-list/', icon: 'clipboard-list', title: 'General Repairs & Punch List', desc: 'Bundle a plumbing fix with other small jobs.' }
    ],

    // Section 7: FAQs
    faqs: [
      { q: 'Can you fix a toilet that keeps running?', a: 'Yes — this is one of our most common calls, usually a flapper or fill valve replacement.' },
      { q: 'Do you replace garbage disposals?', a: 'Yes, including removing the old unit and installing a new one you provide or one we supply.' },
      { q: 'Is a P-trap repair something a handyman can do, or does it need a plumber?', a: 'A P-trap swap is standard handyman-scope work — it\'s a common job we handle regularly, not something that requires a licensed plumber\'s rate.' },
      { q: 'What if the leak turns out to be bigger than expected once you\'re under the sink?', a: 'We\'ll stop and tell you before doing anything beyond the original estimate — if it turns out to need a licensed plumber, we\'ll say so directly.' }
    ]
  },
  {
    slug: 'electrical-fixture-install',
    title: 'Electrical Fixture Install in Simi Valley, CA',
    metaTitle: 'Electrical Fixture Install in Simi Valley, CA | Simi Valley Handyman Co.',
    metaDescription: 'Light fixture, switch, outlet, and ceiling fan installation in Simi Valley, CA. Fast, safe fixture-level electrical work. Free estimate.',
    heroImage: '/assets/image/general-repairs-hero.png',
    categoryIcon: 'zap',
    h1: 'Electrical Fixture Install in Simi Valley, CA',
    heroDescription: 'Simi Valley Handyman Co. installs and repairs light fixtures, switches, outlets, and ceiling fans across Simi Valley — quick, fixture-level electrical work done safely and correctly the first time.',
    heroTrust: '✓ Safe & Correct · ✓ Same-Day Response · ✓ Upfront Pricing',
    
    // Section 1: Signs
    signsTitle: 'Signs You Need an Electrical Fixture Install',
    signsDescription: 'Outdated or faulty electrical fixtures aren\'t just inconvenient—they can present safety hazards.',
    signsItems: [
      { icon: 'help-circle', title: 'Outdated Fixtures', desc: 'An outdated light fixture you\'ve been meaning to swap.' },
      { icon: 'alert-circle', title: 'Sticking Switches', desc: 'A switch that feels loose, sticks, or doesn\'t reliably control the fixture.' },
      { icon: 'alert-triangle', title: 'Scorched Outlets', desc: 'An outlet that\'s stopped working or looks scorched/discolored (this one\'s worth calling about promptly).' },
      { icon: 'wind', title: 'No Ceiling Fan', desc: 'No ceiling fan in a room that gets uncomfortably warm during Simi Valley summers.' },
      { icon: 'shield-alert', title: 'Weak Light Box', desc: 'An old light box that can\'t safely support a ceiling fan\'s weight.' }
    ],

    // Section 2: What We Install/Repair
    repairTitle: 'What We Install and Repair',
    repairDescription: 'Safe, code-compliant fixture-level electrical swaps for your home.',
    repairItems: [
      { title: 'Light Fixtures', desc: 'Swaps and new installs for dining rooms, kitchens, entries, and exterior areas.' },
      { title: 'Switches & Outlets', desc: 'Replacement of worn outlets, loose switches, GFCI installs, and dimmer upgrades.' },
      { title: 'Ceiling Fans', desc: 'Including converting an old light-only box to one rated for fan weight, which is often the part people don\'t realize is needed.' },
      { title: 'Video Doorbells', desc: 'Wired and battery-powered connected doorbell installation. See also our Smart Home page.' }
    ],

    // Section 3: How it Works
    processTitle: 'How an Electrical Install Works',
    processDescription: 'We prioritize safety at every step, verifying load ratings and connections.',
    processSteps: [
      { step: '1', title: 'Power Down', desc: 'We verify power is off at the breaker panel before touching any wiring.' },
      { step: '2', title: 'Inspect Box', desc: 'We inspect the junction box to ensure it is secure and rated for the fixture\'s weight.' },
      { step: '3', title: 'Wire & Mount', desc: 'We wire, ground, and physically mount the fixture securely.' },
      { step: '4', title: 'Test Function', desc: 'We restore power and test switches, dimmers, and fan speeds before wrapping up.' }
    ],

    // Section 4: Local Context & Scope
    contextTitle: 'Is It Safe to Install a Ceiling Fan Myself?',
    contextText: '<p class="mt-4 text-slate-700 leading-relaxed">It depends on whether the existing electrical box is rated to support a fan\'s weight — a standard light fixture box often isn\'t, and using one anyway is a real safety risk once the fan is spinning. If you\'re not sure which box you have, this is a quick, inexpensive job for us and one of our most requested services.</p>',
    contextCalloutIcon: 'map-pin',
    contextCalloutTitle: 'Safety Alert',
    contextCalloutText: 'A ceiling fan must be anchored to a heavy-duty box rated for dynamic loads. Standard light boxes can crack or break under the constant vibration of a spinning fan.',
    
    // Section 4b: Scope Advisory
    scopeTitle: 'What\'s Outside Our Scope',
    scopeText: 'New circuits, panel upgrades, and any electrical work beyond fixture-level repair legally requires a licensed electrician. We\'ll tell you directly if your job falls into that category rather than take it on anyway.',
    questionTitle: 'Can you fix an outlet that smells like burning?',
    questionText: 'If you smell burning or see sparks, turn off the breaker immediately and contact a licensed electrician. For standard, non-emergency outlet swaps, we are happy to assist.',

    // Section 5: Pricing
    pricingText: 'See our <a href="/pricing/handyman-cost-simi-valley/" class="font-semibold text-brand underline">pricing guide</a> for typical costs on fixture swaps and ceiling fan installs.',

    // Section 6: Related Services
    relatedDescription: 'Other common electrical and utility upgrades homeowners bundle together.',
    relatedServices: [
      { path: '/services/smart-home-device-install/', icon: 'smartphone', title: 'Smart Home Device Install', desc: 'For Wi-Fi switches, smart locks, and connected devices.' },
      { path: '/services/plumbing-fixture-repair/', icon: 'droplet', title: 'Plumbing Fixture Repair', desc: 'Often bundled in the same visit.' }
    ],

    // Section 7: FAQs
    faqs: [
      { q: 'Can you convert a light fixture to a ceiling fan?', a: 'Yes — this includes checking and, if needed, replacing the electrical box so it\'s rated to support a fan safely.' },
      { q: 'Do you install dimmer switches?', a: 'Yes, standard dimmer and smart switch installs are within scope.' },
      { q: 'Is it normal for an outlet to feel warm?', a: 'No — a warm or discolored outlet is worth having checked promptly rather than waiting, since it can be an early sign of a wiring issue.' },
      { q: 'Can you fix a switch that doesn\'t reliably turn a light on?', a: 'Usually, yes — this is often a worn switch or a loose connection, both quick fixes.' }
    ]
  },
  {
    slug: 'smart-home-device-install',
    title: 'Smart Home Device Install in Simi Valley, CA',
    metaTitle: 'Smart Home Device Install in Simi Valley, CA | Simi Valley Handyman Co.',
    metaDescription: 'Smart lock, video doorbell, and Wi-Fi switch installation in Simi Valley, CA. Get your smart home devices set up and working correctly. Free estimate.',
    heroImage: '/assets/image/general-repairs-hero.png',
    categoryIcon: 'smartphone',
    h1: 'Smart Home Device Install in Simi Valley, CA',
    heroDescription: 'More Simi Valley homeowners are adding smart locks, video doorbells, and Wi-Fi-connected switches every year — Simi Valley Handyman Co. installs them correctly and gets them connected to your home network and phone app, not just physically mounted.',
    heroTrust: '✓ App Setup Included · ✓ Same-Day Response · ✓ Upfront Pricing',
    
    // Section 1: Signs
    signsTitle: 'Why Get Professional Smart Home Installation?',
    signsDescription: 'Avoid the headache of incorrect wiring, bad Wi-Fi alignment, and app pairing failures.',
    signsItems: [
      { icon: 'smartphone', title: 'Complete App Setup', desc: 'We pair your new devices to your phone and walk you through how to use them.' },
      { icon: 'zap', title: 'Wiring Issues', desc: 'Older homes often lack neutral wires needed for smart switches.' },
      { icon: 'shield-check', title: 'Secure Mounts', desc: 'Camera and doorbell mounts that won\'t loosen or lose alignment.' },
      { icon: 'lock', title: 'Proper Smart Lock Fit', desc: 'Smart deadbolts must line up perfectly with the strike plate to lock automatically without jamming.' }
    ],

    // Section 2: What We Install
    repairTitle: 'What We Install',
    repairDescription: 'We install all major smart home ecosystems (Ring, Nest, Ecobee, Lutron, etc.).',
    repairItems: [
      { title: 'Smart Locks', desc: 'Replacing a standard deadbolt, aligning the latch, and setting up the connected app.' },
      { title: 'Video Doorbells', desc: 'Wired or battery-powered, including checking existing doorbell transformer voltage compatibility.' },
      { title: 'Wi-Fi Smart Switches', desc: 'App-controlled lighting, dimmers, and smart outlet receptacles.' },
      { title: 'Smart Ceiling Fans', desc: 'App and voice-assistant-controlled fan installs.' }
    ],

    // Section 3: How it Works
    processTitle: 'How a Smart Device Install Works',
    processDescription: 'We go beyond mounting the hardware to make sure the app and integration actually function.',
    processSteps: [
      { step: '1', title: 'Check Wiring', desc: 'We check compatibility (like looking for a neutral wire or testing transformer voltage).' },
      { step: '2', title: 'Mount & Wire', desc: 'We wire and physically install the smart lock, doorbell, or switch.' },
      { step: '3', title: 'Connect App', desc: 'We get the device connected to your home Wi-Fi and paired with your phone app.' },
      { step: '4', title: 'User Demo', desc: 'We show you how to lock/unlock, view feeds, and adjust settings before we leave.' }
    ],

    // Section 4: Local Context & Scope
    contextTitle: 'A Note on Older Simi Valley Homes',
    contextText: '<p class="mt-4 text-slate-700 leading-relaxed">Central Simi Valley and Santa Susana homes from the 1960s–70s sometimes lack the neutral wire some smart switches require. If you\'re planning a smart switch upgrade and have an older home, mention it when you call — we can check compatibility before you purchase a device that won\'t work with your existing wiring.</p>',
    contextCalloutIcon: 'map-pin',
    contextCalloutTitle: 'Neutral Wires',
    contextCalloutText: 'Smart switches require continuous power to stay connected to your Wi-Fi, which is why they require a white neutral wire. Standard switches only break the hot wire.',
    
    // Section 4b: Scope Advisory
    scopeTitle: 'Complex Setup Scope',
    scopeText: 'We handle standard device installations and app configuration. Complex, multi-device home automation programming, managed mesh network setups, or structural rewiring are outside our handyman scope.',
    questionTitle: 'Do you set up the app, or just install the hardware?',
    questionText: 'Both — a smart device that\'s physically mounted but not connected to your phone or home network isn\'t actually functional yet. We complete the app pairing and basic setup as part of the install, not as a separate step you\'re left to figure out.',

    // Section 5: Pricing
    pricingText: 'See our <a href="/pricing/handyman-cost-simi-valley/" class="font-semibold text-brand underline">pricing guide</a> for typical smart device install costs.',

    // Section 6: Related Services
    relatedDescription: 'Combine your smart home setup with these related services.',
    relatedServices: [
      { path: '/services/electrical-fixture-install/', icon: 'zap', title: 'Electrical Fixture Install', desc: 'For standard, non-connected fixtures.' },
      { path: '/services/fencing-gates-pet-doors/', icon: 'fence', title: 'Fencing, Gates & Pet Doors', desc: 'For smart gate access if applicable.' }
    ],

    // Section 7: FAQs
    faqs: [
      { q: 'Do I need to buy the smart device myself, or can you supply it?', a: 'Either works — many customers already have a specific brand in mind, and we\'re happy to install what you\'ve purchased or recommend options.' },
      { q: 'Will my old deadbolt door work with a smart lock?', a: 'Most standard doors are compatible, but we\'ll check the door prep and existing hardware before installing to confirm fit.' },
      { q: 'Can you set up voice assistant integration (Alexa, Google Home)?', a: 'Basic pairing, yes. Complex multi-device automation setups may be outside a standard install visit — ask when you book.' },
      { q: 'What if my home doesn\'t have the wiring a smart switch needs?', a: 'We\'ll tell you before installing, and can discuss alternative compatible devices or what additional wiring work (which may need a licensed electrician) would be involved.' }
    ]
  },
  {
    slug: 'tv-mounting-furniture-assembly',
    title: 'TV Mounting & Furniture Assembly in Simi Valley, CA',
    metaTitle: 'TV Mounting & Furniture Assembly in Simi Valley, CA | Simi Valley Handyman Co.',
    metaDescription: 'TV mounting and furniture assembly in Simi Valley, CA — Wayfair, Costco, and IKEA builds, wall-mounted TVs done into studs. Free estimate.',
    heroImage: '/assets/image/general-repairs-hero.png',
    categoryIcon: 'tv',
    h1: 'TV Mounting & Furniture Assembly in Simi Valley, CA',
    heroDescription: 'Simi Valley Handyman Co. mounts TVs properly (into studs, not just drywall anchors) and assembles the furniture that shows up in a flat box — Wayfair, Costco, and IKEA builds included.',
    heroTrust: '✓ Secure Stud Mounts · ✓ Same-Day Response · ✓ Upfront Pricing',
    
    // Section 1: Signs
    signsTitle: 'Why Hire Professional TV Mounters & Builders?',
    signsDescription: 'Prevent television falls, save hours of frustration reading instructions, and ensure stable furniture.',
    signsItems: [
      { icon: 'help-circle', title: 'Wall Stud Locating', desc: 'We verify stud location using magnetic and electronic sensors to support the heavy mount.' },
      { icon: 'alert-triangle', title: 'Drywall Sagging', desc: 'Avoid drywalls collapsing under the weight of large 65"+ TVs mounted on anchors alone.' },
      { icon: 'clock', title: 'Complex Flat Packs', desc: 'Costco, IKEA, and Wayfair boxes can have hundreds of parts. We build them in a fraction of the time.' },
      { icon: 'shield-alert', title: 'Stable Structures', desc: 'Ensuring large bookcases and dressers are properly anchored to the wall to prevent tipping hazards.' }
    ],

    // Section 2: What We Handle
    repairTitle: 'What We Mount and Assemble',
    repairDescription: 'From simple TV brackets to complex multi-piece outdoor patio sets.',
    repairItems: [
      { title: 'TV Mounting', desc: 'Secure mounting on studs, with in-wall wire concealment options.' },
      { title: 'Furniture Assembly', desc: 'Wayfair, Costco, IKEA, and other flat-pack furniture built correctly.' },
      { title: 'Outdoor Furniture', desc: 'Gazebos, outdoor sitting sets, and patio furniture for your backyard.' },
      { title: 'Safety Anchors', desc: 'Anti-tip wall mounts for bookshelves, dressers, and display cabinets.' }
    ],

    // Section 3: How it Works
    processTitle: 'How an Assembly or Mounting Visit Works',
    processDescription: 'We focus on sturdy, level placements and clean cable management.',
    processSteps: [
      { step: '1', title: 'Positioning', desc: 'We verify preferred heights, center points, and check wall studs.' },
      { step: '2', title: 'Assemble & Mount', desc: 'TV brackets are bolted to studs; furniture is built step-by-step.' },
      { step: '3', title: 'Wire Management', desc: 'Optional routing of wires in-wall or via neat surface covers.' },
      { step: '4', title: 'Clean Up', desc: 'We test alignment, verify structural stability, and clean up packaging.' }
    ],

    // Section 4: Local Context & Scope
    contextTitle: 'Why Does It Matter Whether a TV Is Mounted Into a Stud?',
    contextText: '<p class="mt-4 text-slate-700 leading-relaxed">A TV mounted only into drywall anchors can work loose or fail over time, especially with a larger or heavier TV — mounting into studs (or using proper heavy-duty anchors when studs aren\'t positioned where you need them) is what keeps a wall-mounted TV secure for the long run, not just on install day.</p>',
    contextCalloutIcon: 'map-pin',
    contextCalloutTitle: 'Stud Verification',
    contextCalloutText: 'We double-check stud edges with deep-scanning detectors. Standard 16-inch framing is typical in Simi Valley, but we verify spacing before drilling.',
    
    // Section 4b: Scope Advisory
    scopeTitle: 'Installation Scope & Heavy Items',
    scopeText: 'We mount standard TVs up to 85" and build normal household and outdoor furniture. Structural masonry drilling, custom framing modifications, or extremely large steel-structure gazebo builds may fall outside standard handyman scope.',
    questionTitle: 'Do you provide the wall mount, or should I buy it?',
    questionText: 'Either works — bring your own mount or ask us for a recommendation based on your TV size and wall type.',

    // Section 5: Pricing
    pricingText: 'See our <a href="/pricing/handyman-cost-simi-valley/" class="font-semibold text-brand underline">pricing guide</a> for typical TV mounting and furniture assembly costs.',

    // Section 6: Related Services
    relatedDescription: 'Other jobs that pair naturally with TV mounting and assembly.',
    relatedServices: [
      { path: '/services/electrical-fixture-install/', icon: 'zap', title: 'Electrical Fixture Install', desc: 'If your TV mount needs a nearby outlet added or relocated.' },
      { path: '/services/general-repairs-punch-list/', icon: 'clipboard-list', title: 'General Repairs & Punch List', desc: 'Bundle assembly with other small jobs in one visit.' }
    ],

    // Section 7: FAQs
    faqs: [
      { q: 'Can you hide the cables so nothing\'s visible?', a: 'Yes, either with an in-wall cable kit or a surface-mounted raceway cover, depending on the wall type and your preference.' },
      { q: 'Do you assemble outdoor furniture like gazebos?', a: 'Yes — gazebo, patio set, and outdoor furniture assembly is a common request.' },
      { q: 'What if a piece of furniture arrives with missing or damaged parts?', a: 'We\'ll flag it right away so you can contact the retailer for a replacement part rather than force an incomplete build.' }
    ]
  },
  {
    slug: 'fencing-gates-pet-doors',
    title: 'Fencing, Gates & Pet Door Install in Simi Valley, CA',
    metaTitle: 'Fencing, Gates & Pet Door Install in Simi Valley, CA | Simi Valley Handyman Co.',
    metaDescription: 'Fence repair, gate hardware, and pet door installation in Simi Valley, CA — including cat-proof fencing and dog doors in slider doors. Free estimate.',
    heroImage: '/assets/image/general-repairs-hero.png',
    categoryIcon: 'fence',
    h1: 'Fencing, Gates & Pet Doors in Simi Valley, CA',
    heroDescription: 'Simi Valley Handyman Co. handles fence and gate repairs, hardware fixes, and pet door installs — including two of our most-requested jobs: dog doors in slider doors and cat-proof fencing add-ons.',
    heroTrust: '✓ Pet-Proof Fencing · ✓ Santa Ana Prep · ✓ Upfront Pricing',
    
    // Section 1: Signs
    signsTitle: 'Signs Your Fencing or Gates Need Attention',
    signsDescription: 'Wobbly fence posts, rusting latches, or sagging gates can cause safety risks for pets and children.',
    signsItems: [
      { icon: 'help-circle', title: 'Gate Latches Sticking', desc: 'Gate hardware that has started sticking, misaligning, or failing to latch shut.' },
      { icon: 'wind', title: 'Loose Fence Panels', desc: 'Loose or swaying fence panels that might not survive the next high-wind event.' },
      { icon: 'alert-triangle', title: 'Rotting Posts', desc: 'Wooden posts soft near ground contact due to sprinklers.' },
      { icon: 'lock', title: 'Pet Containment', desc: 'Fencing that pets are consistently finding ways to dig under or climb over.' }
    ],

    // Section 2: What We Handle
    repairTitle: 'What We Handle',
    repairDescription: 'Minor repairs and custom add-ons to secure your property borders.',
    repairItems: [
      { title: 'Gate Hardware Repair', desc: 'Latches, hinges, and automatic closers that need adjustment or replacement.' },
      { title: 'Dog Door Installs', desc: 'Including installs directly into sliding glass screen panels or standard doors.' },
      { title: 'Cat-Proof Fencing Add-ons', desc: 'Extensions and roller-bars added to existing fencing to keep cats safely inside.' },
      { title: 'Fence Panel Repair', desc: 'Replacing individual rotted pickets, broken panels, and reinforcing wobbly posts.' }
    ],

    // Section 3: How it Works
    processTitle: 'How a Fence or Pet Door Job Works',
    processDescription: 'Simple, direct process to restore perimeter safety and install pet access.',
    processSteps: [
      { step: '1', title: 'Site Inspection', desc: 'We inspect the gate latch alignment, rotted wood, or slider door track.' },
      { step: '2', title: 'Confirm Fix', desc: 'We check whether a full post rebuild or simple hardware swap is required.' },
      { step: '3', title: 'Install & Seal', desc: 'We complete repairs, adding weather-sealing to pet doors to prevent draft.' },
      { step: '4', title: 'Test Latches', desc: 'We test gates multiple times to ensure they close and lock reliably.' }
    ],

    // Section 4: Local Context & Scope
    contextTitle: 'Why Fence Condition Matters More in Simi Valley',
    contextText: '<p class="mt-4 text-slate-700 leading-relaxed">Loose fence panels and damaged gate hardware aren\'t just a nuisance here — during Santa Ana wind season, loose panels are exactly the kind of debris that can catch embers or cause damage in high wind. We check and secure fencing as part of our <a href="/blog/wildfire-home-hardening-simi-valley/" class="text-brand hover:underline">seasonal wildfire prep recommendations</a>.</p>',
    contextCalloutIcon: 'wind',
    contextCalloutTitle: 'Wind Alert',
    contextCalloutText: 'High winds during Santa Ana events put extreme wind load on privacy fences. A single loose panel can act like a sail and tear down adjacent sections.',
    
    // Section 4b: Scope Advisory
    scopeTitle: 'Boundary Construction Scope',
    scopeText: 'We repair existing fences, gates, and install pet doors. Full property line fencing installations, masonry retaining wall boundary structures, or large chain-link fencing projects generally exceed handyman scope.',
    questionTitle: 'Can a Handyman Install a Dog Door or Pet-Proof Fencing?',
    questionText: 'Yes — dog door installs in slider doors and pet-proof fencing add-ons are common, quick jobs that don\'t require a licensed contractor. Most are done in under an hour.',

    // Section 5: Pricing
    pricingText: 'See our <a href="/pricing/handyman-cost-simi-valley/" class="font-semibold text-brand underline">pricing guide</a> for typical costs on gate repair, pet door installs, and fence panel replacement.',

    // Section 6: Related Services
    relatedDescription: 'Other exterior maintenance services that keep your property secure.',
    relatedServices: [
      { path: '/services/painting-interior-exterior/', icon: 'paint-bucket', title: 'Painting Interior & Exterior', desc: 'Refinish a fence or gate at the same time as a repair.' },
      { path: '/services/deck-patio-repair/', icon: 'tree-deciduous', title: 'Deck & Patio Repair', desc: 'For adjacent outdoor structure repairs.' }
    ],

    // Section 7: FAQs
    faqs: [
      { q: 'Can you install a dog door in a slider door specifically, not just a standard door?', a: 'Yes — slider door dog door installs are one of our regular requests and a straightforward job.' },
      { q: 'What is cat-proof fencing, and can you add it to my existing fence?', a: 'It\'s an angled or extended barrier added to the top of existing fencing to prevent cats from climbing over — yes, we can typically add this to most existing fence types.' },
      { q: 'My gate won\'t latch properly — is that a full gate replacement or a quick fix?', a: 'Usually a quick fix — a misaligned latch or worn hinge is far more common than needing a full gate replacement, and we\'ll check before recommending anything bigger than necessary.' },
      { q: 'Should I get my fence checked before wind season even if nothing looks obviously broken?', a: 'It\'s worth a quick check — loose panels aren\'t always obvious until wind actually tests them, and a short inspection before fall is cheaper than a repair after a wind event.' }
    ]
  },
  {
    slug: 'garage-door-repair',
    title: 'Garage Door Repair in Simi Valley, CA',
    metaTitle: 'Garage Door Repair in Simi Valley, CA | Simi Valley Handyman Co.',
    metaDescription: 'Garage door spring, opener, and track repair in Simi Valley, CA. Fast, safe garage door fixes. Free estimate.',
    heroImage: '/assets/image/general-repairs-hero.png',
    categoryIcon: 'warehouse',
    h1: 'Garage Door Repair in Simi Valley, CA',
    heroDescription: 'Simi Valley Handyman Co. repairs common garage door issues — opener problems, track misalignment, and minor hardware fixes — and tells you honestly when a job needs a garage door specialist instead.',
    heroTrust: '✓ Safety Focused · ✓ Same-Day Response · ✓ Upfront Pricing',
    
    // Section 1: Signs
    signsTitle: 'Signs Your Garage Door Needs Repair',
    signsDescription: 'Recognizing operational issues early prevents complete opener failure or safety sensor lockouts.',
    signsItems: [
      { icon: 'help-circle', title: 'Opener Runs, No Movement', desc: 'The opener runs but the door doesn\'t move, or moves unevenly.' },
      { icon: 'alert-circle', title: 'Noisy & Jerky Operation', desc: 'The door is noisy, jerky, or slow to open/close.' },
      { icon: 'alert-triangle', title: 'Track Misalignment', desc: 'Visible track misalignment or a door that\'s come off-track slightly.' },
      { icon: 'wind', title: 'Worn Weatherstripping', desc: 'Worn or damaged weatherstripping along the bottom of the door letting in wind and dust.' },
      { icon: 'lock', title: 'Remote Unresponsive', desc: 'A remote or keypad that\'s stopped responding reliably.' }
    ],

    // Section 2: What We Handle
    repairTitle: 'What We Handle',
    repairDescription: 'We handle standard mechanical and electronic adjustments to get your door opening smoothly.',
    repairItems: [
      { title: 'Opener Troubleshooting', desc: 'Fixing travel limit adjustments, wiring, gear wear, and sensor issues.' },
      { title: 'Track & Roller Adjustments', desc: 'Aligning rails, lubricating parts, and securing loose brackets.' },
      { title: 'Weatherstripping', desc: 'Replacing dry-rotted rubber seals on the sides and bottom of the garage door.' },
      { title: 'Keypads & Remotes', desc: 'Programming new remotes, keypad replacements, and sync issues.' }
    ],

    // Section 3: How it Works
    processTitle: 'How a Garage Door Repair Works',
    processDescription: 'Safety is critical. We inspect structural tension before carrying out any track adjustments.',
    processSteps: [
      { step: '1', title: 'Safety Inspection', desc: 'We inspect cables, rollers, and verify spring tension.' },
      { step: '2', title: 'Track Alignment', desc: 'We adjust and level tracks, replacing bent brackets.' },
      { step: '3', title: 'Opener Tune-up', desc: 'We adjust motor limits and clean safety photo-eye sensors.' },
      { step: '4', title: 'Balance Test', desc: 'We disconnect the door and test balance manually to ensure it isn\'t dragging.' }
    ],

    // Section 4: Local Context & Scope
    contextTitle: 'Why Garage Seals Matter in Simi Valley',
    contextText: '<p class="mt-4 text-slate-700 leading-relaxed">High winds during Santa Ana wind events blow heavy dust, ash, and embers. A rotted or missing bottom weatherstrip allows wind-blown debris straight into your garage. Replacing bottom seals is an easy way to keep your garage cleaner and safer during fire season.</p>',
    contextCalloutIcon: 'map-pin',
    contextCalloutTitle: 'Santa Ana Winds',
    contextCalloutText: 'Embers blowing under drafty garage doors can ignite stored cardboard or items. Tight rubber seals are considered a core home-hardening recommendation.',
    
    // Section 4b: Scope Advisory
    scopeTitle: 'A Safety Note on Garage Door Springs',
    scopeText: 'Garage door springs — especially torsion springs — are under very high tension and can cause serious injury if handled incorrectly. We assess spring issues case by case: some hardware-level fixes are within handyman scope, but full torsion spring replacement is a job we\'ll often refer to a dedicated garage door specialist rather than take unnecessary risk. We\'d rather be straightforward about this than push a repair that isn\'t safe for the scope we work in.',
    questionTitle: 'Why won\'t my garage door close all the way?',
    questionText: 'Usually a sensor alignment issue (the small sensors near the bottom of the track need a clear, aligned line of sight) or a track obstruction — both quick checks.',

    // Section 5: Pricing
    pricingText: 'See our <a href="/pricing/handyman-cost-simi-valley/" class="font-semibold text-brand underline">pricing guide</a> for typical costs on opener and track repairs.',

    // Section 6: Related Services
    relatedDescription: 'Other mechanical and home repairs that homeowners often combine.',
    relatedServices: [
      { path: '/services/general-repairs-punch-list/', icon: 'clipboard-list', title: 'General Repairs & Punch List', desc: 'Bundle garage door fixes with other small jobs.' },
      { path: '/services/deck-patio-repair/', icon: 'tree-deciduous', title: 'Deck & Patio Repair', desc: 'For other exterior structural repairs.' }
    ],

    // Section 7: FAQs
    faqs: [
      { q: 'My garage door opener makes noise but the door won\'t move — can you fix that?', a: 'Often yes — this is frequently a track, roller, or sensor alignment issue rather than a motor failure. We\'ll diagnose before quoting a fix.' },
      { q: 'Do you replace garage door springs?', a: 'We assess this case by case for safety reasons — some spring-adjacent hardware work is within scope, but full torsion spring replacement is often referred to a specialist. We\'ll tell you which applies to your situation.' },
      { q: 'Can you reprogram a garage door remote or keypad?', a: 'Yes, this is a quick, standard part of garage door service.' }
    ]
  },
  {
    slug: 'deck-patio-repair',
    title: 'Deck & Patio Repair in Simi Valley, CA',
    metaTitle: 'Deck & Patio Repair in Simi Valley, CA | Simi Valley Handyman Co.',
    metaDescription: 'Deck board replacement, railing repair, and patio maintenance in Simi Valley, CA. Keep your outdoor space safe and solid. Free estimate.',
    heroImage: '/assets/image/general-repairs-hero.png',
    categoryIcon: 'tree-deciduous',
    h1: 'Deck & Patio Repair in Simi Valley, CA',
    heroDescription: 'Simi Valley Handyman Co. repairs deck boards, railings, and patio surfaces that have taken a beating from sun, wind, or the occasional rainy season — keeping your outdoor space solid and safe, not just cosmetically patched.',
    heroTrust: '✓ Weather-Resistant Fixes · ✓ Safe Railings · ✓ Upfront Pricing',
    
    // Section 1: Signs
    signsTitle: 'Signs You Need Deck or Patio Repair',
    signsDescription: 'Rotting boards or unstable railings should be repaired quickly to maintain safety.',
    signsItems: [
      { icon: 'help-circle', title: 'Soft Boards', desc: 'A board that flexes, feels soft, or has visible splitting.' },
      { icon: 'alert-circle', title: 'Wobbly Railing', desc: 'A railing that wobbles or feels less sturdy than it should.' },
      { icon: 'alert-triangle', title: 'Popped Screws', desc: 'Popped or protruding nails/screws that pose a tripping hazard.' },
      { icon: 'sun', title: 'UV Weathering', desc: 'Visible weathering, graying, or checking (surface cracking) on wood surfaces.' },
      { icon: 'cloud-rain', title: 'Standing Water', desc: 'Standing water on a patio surface that isn\'t draining properly.' }
    ],

    // Section 2: What We Repair
    repairTitle: 'What We Repair',
    repairDescription: 'We address critical structural components and surface wear for wood decks.',
    repairItems: [
      { title: 'Board Replacement', desc: 'Removing damaged, split, or soft decking and installing new boards.' },
      { title: 'Railing Stabilization', desc: 'Tightening loose brackets, repairing rails, and replacing balusters.' },
      { title: 'Fastener Replacements', desc: 'Replacing old rusted nails with weather-resistant structural screws.' },
      { title: 'Surface Preparation', desc: 'Sanding and preparing deck surfaces ahead of staining or sealing.' }
    ],

    // Section 3: How it Works
    processTitle: 'How a Deck Repair Works',
    processDescription: 'Our process focuses on structural checks and clean wood matches.',
    processSteps: [
      { step: '1', title: 'Inspect Joists', desc: 'We inspect the underlying joist structure to ensure the framing is sound.' },
      { step: '2', title: 'Remove Board', desc: 'We carefully remove damaged boards without harming adjacent wood.' },
      { step: '3', title: 'Cut & Fit', desc: 'We cut new boards to size, spacing them correctly for drainage.' },
      { step: '4', title: 'Secure & Finish', desc: 'We secure them with structural screws and verify structural railings are tight.' }
    ],

    // Section 4: Local Context & Scope
    contextTitle: 'Why Deck Maintenance Matters More After Simi Valley\'s Wet Season',
    contextText: '<p class="mt-4 text-slate-700 leading-relaxed">Nearly all of Simi Valley\'s annual rain falls between November and March. Wood that\'s been sitting with unresolved moisture issues going into that stretch is far more likely to develop soft spots or rot by spring. A quick check and repair before the wet season is cheaper than a full board replacement after it.</p>',
    contextCalloutIcon: 'cloud-rain',
    contextCalloutTitle: 'Wet Season Alert',
    contextCalloutText: 'Standing water on wood decks accelerates rot. Proper drainage paths between deck boards must be kept clear of leaf debris to prevent moisture traps.',
    
    // Section 4b: Scope Advisory
    scopeTitle: 'Outdoor Structure Construction Scope',
    scopeText: 'We repair existing decks, railings, and steps. Full deck design-build construction projects, complex concrete pouring, or structural patio cover framing typically fall outside handyman scope and need a licensed general builder.',
    questionTitle: 'Should I Repair or Fully Replace a Damaged Deck Board?',
    questionText: 'It depends on how many boards are affected and the extent of the damage — a few isolated soft or split boards are usually a straightforward replacement, while widespread damage across the deck may point to a bigger underlying moisture or structural issue worth a fuller assessment. We\'ll tell you honestly which situation you\'re in before quoting a fix.',

    // Section 5: Pricing
    pricingText: 'See our <a href="/pricing/handyman-cost-simi-valley/" class="font-semibold text-brand underline">pricing guide</a> for typical costs on board replacement and railing repair.',

    // Section 6: Related Services
    relatedDescription: 'Exterior maintenance services that work well with deck repairs.',
    relatedServices: [
      { path: '/services/painting-interior-exterior/', icon: 'paint-bucket', title: 'Painting & Staining', desc: 'Staining and sealing after repair.' },
      { path: '/services/gutter-cleaning-repair/', icon: 'cloud-rain', title: 'Gutter Cleaning & Repair', desc: 'Poor drainage nearby can contribute to deck moisture issues.' }
    ],

    // Section 7: FAQs
    faqs: [
      { q: 'Can you match new deck boards to existing weathered wood?', a: 'We\'ll get as close a match as possible, though some color difference is normal until the new board weathers to match over time — staining can help close that gap faster.' },
      { q: 'Is a wobbly railing a quick fix or a bigger job?', a: 'Usually a quick fix — tightening or replacing fasteners resolves most wobbly railings. If the post itself has rotted, that\'s a bigger repair we\'ll flag separately.' },
      { q: 'Should I get my deck checked before or after the rainy season?', a: 'Before, if possible — catching soft or damaged boards ahead of the wet months prevents worse damage once consistent rain starts.' },
      { q: 'Do you also handle concrete patio repair, or just wood decks?', a: 'Primarily wood deck and patio structure repair. For significant concrete work, that may fall outside handyman scope — ask when you call and we\'ll tell you directly.' }
    ]
  },
  {
    slug: 'gutter-cleaning-repair',
    title: 'Gutter Cleaning & Repair in Simi Valley, CA',
    metaTitle: 'Gutter Cleaning & Repair in Simi Valley, CA | Simi Valley Handyman Co.',
    metaDescription: 'Gutter cleaning and repair in Simi Valley, CA — critical before wildfire and storm season. Clear debris, fix leaks, prevent water damage. Free estimate.',
    heroImage: '/assets/image/general-repairs-hero.png',
    categoryIcon: 'cloud-rain',
    h1: 'Gutter Cleaning & Repair in Simi Valley, CA',
    heroDescription: 'Gutter maintenance matters more in Simi Valley than in most places, for two separate seasonal reasons — Simi Valley Handyman Co. clears debris, fixes leaks and loose sections, and checks gutters ahead of both wildfire and wet season.',
    heroTrust: '✓ Wildfire Safe · ✓ Same-Day Response · ✓ Upfront Pricing',
    
    // Section 1: Signs
    signsTitle: 'Signs Your Gutters Need Attention',
    signsDescription: 'Look out for sag, overflow, and siding damage to prevent foundation erosion.',
    signsItems: [
      { icon: 'help-circle', title: 'Visible Debris', desc: 'Visible debris buildup (leaves, twigs, pine needles) sitting in the gutter.' },
      { icon: 'alert-circle', title: 'Water Overflowing', desc: 'Water overflowing the gutter edge during rain instead of channeling through downspouts.' },
      { icon: 'alert-triangle', title: 'Sagging Sections', desc: 'Sagging or pulling-away gutter sections due to heavy debris weight.' },
      { icon: 'droplet', title: 'Water Stains', desc: 'Water stains on the siding or fascia board below a gutter section.' },
      { icon: 'cloud-rain', title: 'Standing Water', desc: 'Standing water near the foundation after rain storms.' }
    ],

    // Section 2: What We Handle
    repairTitle: 'What We Handle',
    repairDescription: 'Complete cleaning and repairs to ensure water runs away from your home.',
    repairItems: [
      { title: 'Gutter Cleaning', desc: 'Debris removal and thorough flushing of gutters and downspouts.' },
      { title: 'Downspout Clearing', desc: 'Clearing internal downspout blockages and adjusting redirections.' },
      { title: 'Sagging Gutter Repairs', desc: 'Reattaching gutters to the fascia board with heavy-duty hidden hangers.' },
      { title: 'Sealing & Leak Repair', desc: 'Patching joint leaks and sealing seams with gutter sealant.' }
    ],

    // Section 3: How it Works
    processTitle: 'How Gutter Maintenance Works',
    processDescription: 'We clear debris safely, test flow, and identify sagging sections.',
    processSteps: [
      { step: '1', title: 'Clear Debris', desc: 'We hand-remove all large debris, bagging it for clean disposal.' },
      { step: '2', title: 'Flush Gutters', desc: 'We flush the system with water, verifying downspout flow.' },
      { step: '3', title: 'Seal Joints', desc: 'We apply waterproof sealants to leaking joints and seams.' },
      { step: '4', title: 'Secure Mounts', desc: 'We replace broken spikes or hangers, resecuring the system to your house.' }
    ],

    // Section 4: Local Context & Scope
    contextTitle: 'Why Gutter Cleaning Matters Twice a Year in Simi Valley',
    contextText: '<p class="mt-4 text-slate-700 leading-relaxed"><strong>Before Santa Ana wind season (fall):</strong> Debris-clogged gutters are exactly the kind of fuel that catches embers during high-wind, high-fire-risk conditions. Clear gutters are a genuine home-hardening measure, not just tidiness. See our <a href="/blog/wildfire-home-hardening-simi-valley/" class="text-brand underline">wildfire prep checklist</a>.<br><br><strong>Before wet season (roughly November through March):</strong> Nearly all of Simi Valley\'s annual rain falls in these months. Clogged or damaged gutters during that stretch send water where it shouldn\'t go — along the fascia, down the siding, or pooling near the foundation — instead of away from the house.</p>',
    contextCalloutIcon: 'alert-triangle',
    contextCalloutTitle: 'Fire Safety Warning',
    contextCalloutText: 'Wind-blown embers often land in gutters. If dry leaves are present, they ignite instantly, sending fire under the eaves and into the roof framing.',
    
    // Section 4b: Scope Advisory
    scopeTitle: 'Gutter Installation Scope & Safety Policy',
    scopeText: 'We clean and repair standard one-story and two-story residential gutter systems. Full seamless gutter fabrication, major commercial system installs, or working on roofs with extremely steep pitches may fall outside standard handyman scope.',
    questionTitle: 'How Often Should Gutters Be Cleaned in Simi Valley?',
    questionText: 'At minimum, twice a year — once before Santa Ana wind season in the fall and once before the wet season fully sets in. Homes with a lot of nearby trees may need more frequent cleaning.',

    // Section 5: Pricing
    pricingText: 'See our <a href="/pricing/handyman-cost-simi-valley/" class="font-semibold text-brand underline">pricing guide</a> for typical gutter cleaning and repair costs.',

    // Section 6: Related Services
    relatedDescription: 'Other exterior maintenance jobs to bundle with gutter cleaning.',
    relatedServices: [
      { path: '/services/deck-patio-repair/', icon: 'tree-deciduous', title: 'Deck & Patio Repair', desc: 'Poor gutter drainage can contribute to nearby deck moisture issues.' },
      { path: '/services/garage-door-repair/', icon: 'warehouse', title: 'Garage Door Repair', desc: 'Bundle exterior seasonal-prep jobs in one visit.' }
    ],

    // Section 7: FAQs
    faqs: [
      { q: 'Can you fix a gutter that\'s pulling away from the house, or does it need full replacement?', a: 'Often a repair — reattaching and resecuring a sagging section is common and usually resolves it. Full replacement is only needed if the gutter material itself is significantly damaged or corroded.' },
      { q: 'Do you clean gutters on two-story homes?', a: 'Yes, we are equipped to safely clean gutters on two-story homes using standard extension ladders and safety equipment.' },
      { q: 'How do I know if my gutters contributed to a drywall or siding issue?', a: 'Water stains directly below a gutter section, especially after a rain event, are a strong sign. If you\'re dealing with related interior drywall damage, see our drywall repair page.' },
      { q: 'Is gutter cleaning something I should do myself?', a: 'It\'s doable for some homeowners comfortable on a ladder, but debris buildup can hide sagging sections or damage that\'s easy to miss from the ground — a professional check periodically catches issues before they become bigger problems.' }
    ]
  }
];

function buildPageHtml(data) {
  const breadcrumb = `
    <nav class="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center justify-center gap-2" aria-label="Breadcrumb">
      <a href="/" class="hover:text-brand transition-colors text-slate-200">Home</a>
      <i data-lucide="chevron-right" class="h-3 w-3 text-slate-400"></i>
      <a href="/handyman-services-simi-valley-ca/" class="hover:text-brand transition-colors text-slate-200">Services</a>
      <i data-lucide="chevron-right" class="h-3 w-3 text-slate-400"></i>
      <span class="text-white font-bold">${data.slug === 'plumbing-fixture-repair' ? 'Plumbing Fixture Repair' : data.slug === 'electrical-fixture-install' ? 'Electrical Fixture Install' : data.slug === 'smart-home-device-install' ? 'Smart Home Device Install' : data.slug === 'tv-mounting-furniture-assembly' ? 'TV Mounting & Assembly' : data.slug === 'fencing-gates-pet-doors' ? 'Fencing, Gates & Pet Doors' : data.slug === 'garage-door-repair' ? 'Garage Door Repair' : data.slug === 'deck-patio-repair' ? 'Deck & Patio Repair' : 'Gutter Cleaning & Repair'}</span>
    </nav>
  `;

  const signsCards = data.signsItems.map(item => `
    <div class="card-leander flex flex-col justify-between">
      <div>
        <div class="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange-50 text-brand"><i data-lucide="${item.icon}" class="h-5 w-5"></i></div>
        <h3 class="font-bold text-slate-900 text-base">${item.title}</h3>
        <p class="mt-2 text-xs text-slate-600 leading-relaxed">${item.desc}</p>
      </div>
    </div>
  `).join('');

  const repairCards = data.repairItems.map(item => `
    <div class="card-leander bg-white">
      <h3 class="text-base font-bold text-ink">${item.title}</h3>
      <p class="mt-2 text-xs text-slate-600 leading-relaxed">${item.desc}</p>
    </div>
  `).join('');

  const processSteps = data.processSteps.map(step => `
    <div class="group flex flex-col items-center text-center p-4 rounded-xl hover:bg-slate-50 hover:shadow-md transition-all duration-300 border border-transparent hover:border-slate-100 cursor-default">
      <div class="h-14 w-14 rounded-full bg-brand text-ink font-extrabold flex items-center justify-center text-lg shadow-md border-4 border-white mb-4 group-hover:bg-ink group-hover:text-brand transition-colors duration-300">${step.step}</div>
      <h3 class="font-bold text-ink text-sm group-hover:text-brand transition-colors duration-300">${step.title}</h3>
      <p class="mt-2 text-xs text-slate-600 leading-relaxed">${step.desc}</p>
    </div>
  `).join('');

  const relatedServices = data.relatedServices.map(rel => `
    <a href="${rel.path}" class="card-leander bg-white flex items-center justify-between group hover:border-brand">
      <div class="flex items-center gap-4">
        <div class="h-10 w-10 rounded-lg bg-orange-50 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-ink transition-colors"><i data-lucide="${rel.icon}" class="h-5 w-5"></i></div>
        <div>
          <h4 class="font-bold text-ink text-sm group-hover:text-brand transition-colors">${rel.title}</h4>
          <p class="text-slate-500 text-xs mt-1">${rel.desc}</p>
        </div>
      </div>
      <i data-lucide="arrow-right" class="h-4 w-4 text-slate-400 group-hover:text-brand group-hover:translate-x-1 transition-all"></i>
    </a>
  `).join('');

  const faqAccordion = data.faqs.map(faq => `
    <details class="faq-item">
      <summary>${faq.q}</summary>
      <p class="mt-3 text-slate-700">${faq.a}</p>
    </details>
  `).join('');

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.title,
    "serviceType": "Handyman Services",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Simi Valley Handyman Co.",
      "telephone": "(805) 555-0142",
      "image": "/assets/image/handyman simi valley logo.webp",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Simi Valley",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "areaServed": "Simi Valley, CA",
    "description": data.metaDescription
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.metaTitle}</title>
  <meta name="description" content="${data.metaDescription}">
  <link rel="canonical" href="https://simivalleyhandymanco.com/services/${data.slug}/">
  <script src="https://unpkg.com/lucide@latest"></script>
  <link rel="stylesheet" href="/assets/css/site.css">
  <link rel="icon" type="image/webp" href="/assets/image/handyman simi valley logo.webp">
</head>
<body class="bg-white text-slate-900">
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow">Skip to main content</a>

  <header class="z-40 shadow-xl bg-ink relative">
    <div class="bg-slate-900 border-b border-white/10 text-slate-300">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
        <div class="flex items-center gap-4">
          <a href="tel:8055550142" class="font-medium hover:text-brand flex items-center gap-1"><i data-lucide="phone" class="h-4 w-4"></i> Call or Text: (805) 555-0142</a>
          <span class="hidden text-slate-600 sm:inline">|</span>
          <nav aria-label="Utility links" class="hidden sm:block">
            <ul class="flex items-center gap-4">
              <li><a href="/about/" class="hover:text-brand transition-colors">About</a></li>
              <li><a href="/contact/" class="hover:text-brand transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div class="flex items-center gap-4">
          <a href="#estimate-form" class="btn-primary hidden px-4 py-1.5 text-sm sm:inline-flex items-center gap-2">Get a Free Estimate</a>
        </div>
      </div>
    </div>

    <div class="bg-ink">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <a href="/" class="inline-flex items-center gap-3">
          <img
            src="/assets/image/handyman simi valley logo.webp"
            alt="Handyman Simi Valley logo"
            title="Handyman Simi Valley"
            class="h-16 md:h-20 w-[220px] md:w-[320px] object-contain scale-110 md:scale-125 origin-left"
            loading="eager"
            decoding="async"
          >
        </a>

        <button id="menu-toggle" type="button" class="inline-flex rounded border border-white/20 text-white px-3 py-2 md:hidden hover:bg-white/10" aria-expanded="false" aria-controls="mobile-menu">
          <span class="sr-only">Open menu</span>
          <i data-lucide="menu" class="h-6 w-6"></i>
        </button>

        <nav class="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          <a href="/" class="font-medium text-brand">Home</a>

          <div class="group relative">
            <button type="button" class="inline-flex items-center gap-1 font-medium text-white hover:text-brand transition-colors">Services <span aria-hidden="true" class="text-xs">▾</span></button>
            <ul class="nav-dropdown absolute left-0 top-full z-50 mt-2 w-80 rounded-xl border border-slate-200 bg-white p-2 shadow-lg text-slate-900">
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/handyman-services-simi-valley-ca/">All Handyman Services</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/general-repairs-punch-list/">General Repairs &amp; Punch List</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/drywall-repair/">Drywall Repair</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/painting-interior-exterior/">Painting Interior &amp; Exterior</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/plumbing-fixture-repair/">Plumbing Fixture Repair</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/electrical-fixture-install/">Electrical Fixture Install</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/smart-home-device-install/">Smart Home Device Install</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/tv-mounting-furniture-assembly/">TV Mounting &amp; Furniture Assembly</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/fencing-gates-pet-doors/">Fencing, Gates &amp; Pet Doors</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/garage-door-repair/">Garage Door Repair</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/deck-patio-repair/">Deck &amp; Patio Repair</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/gutter-cleaning-repair/">Gutter Cleaning &amp; Repair</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/sprinkler-irrigation-repair/">Sprinkler &amp; Irrigation Repair</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/services/aging-in-place-modifications/">Aging in Place Modifications</a></li>
            </ul>
          </div>

          <div class="group relative">
            <button type="button" class="inline-flex items-center gap-1 font-medium text-white hover:text-brand transition-colors">Locations <span aria-hidden="true" class="text-xs">▾</span></button>
            <ul class="nav-dropdown absolute left-0 top-full z-50 mt-2 w-72 rounded-xl border border-slate-200 bg-white p-2 shadow-lg text-slate-900">
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/locations/simi-valley/">Simi Valley</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/locations/simi-valley/wood-ranch/">Wood Ranch</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/locations/simi-valley/central-simi-valley/">Central Simi Valley</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/locations/simi-valley/east-simi-valley/">East Simi Valley</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/locations/simi-valley/big-sky/">Big Sky</a></li>
              <li><a class="block rounded px-3 py-2 hover:bg-slate-50" href="/locations/simi-valley/santa-susana/">Santa Susana</a></li>
            </ul>
          </div>

          <a href="/pricing/handyman-cost-simi-valley/" class="font-medium text-white hover:text-brand transition-colors">Pricing</a>
          <a href="/blog/" class="font-medium text-white hover:text-brand transition-colors">Blog</a>
          <a href="/faq/" class="font-medium text-white hover:text-brand transition-colors">FAQ</a>
        </nav>
      </div>

      <nav id="mobile-menu" class="hidden border-t border-white/10 bg-ink px-4 py-3 md:hidden text-white" aria-label="Mobile navigation">
        <ul class="space-y-3">
          <li><a href="/" class="block font-medium text-brand">Home</a></li>
          <li><a href="/handyman-services-simi-valley-ca/" class="block hover:text-brand">All Services</a></li>
          <li><a href="/locations/simi-valley/" class="block hover:text-brand">Locations</a></li>
          <li><a href="/pricing/handyman-cost-simi-valley/" class="block hover:text-brand">Pricing</a></li>
          <li><a href="/blog/" class="block hover:text-brand">Blog</a></li>
          <li><a href="/faq/" class="block hover:text-brand">FAQ</a></li>
          <li><a href="/about/" class="block hover:text-brand">About</a></li>
          <li><a href="/contact/" class="block hover:text-brand">Contact</a></li>
          <li><a href="#estimate-form" class="block text-brand font-bold">Get a Free Estimate</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main id="main-content">
    <!-- Hero Banner Section -->
    <section class="hero-leander">
      <img
        src="${data.heroImage}"
        alt="${data.title}"
        title="${data.title.replace(' in Simi Valley, CA', '')}"
        class="hero-leander__bg"
        loading="eager"
        decoding="async"
      >
      <div class="hero-leander__overlay" aria-hidden="true"></div>
      <div class="hero-leander__content">
        ${breadcrumb}
        <h1 class="text-3xl font-extrabold leading-tight md:text-5xl lg:text-[3.25rem] text-white">${data.h1}</h1>
        <p class="mx-auto mt-5 max-w-2xl text-lg text-slate-200">${data.heroDescription}</p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="tel:8055550142" class="btn-primary text-base">📞 Call or Text: (805) 555-0142</a>
          <a href="#estimate-form" class="btn-ghost text-base">Get a Free Estimate →</a>
        </div>
        <p class="hero-trust-line">${data.heroTrust}</p>
      </div>
    </section>

    <!-- Signs/Symptoms Grid -->
    <section class="mx-auto max-w-5xl px-4 py-16 bg-white">
      <div class="text-center max-w-2xl mx-auto mb-10">
        <h2 class="text-2xl font-bold text-ink md:text-3xl">${data.signsTitle}</h2>
        <p class="mt-2 text-sm text-slate-600">${data.signsDescription}</p>
      </div>
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        ${signsCards}
      </div>
    </section>

    <!-- Common Issues We Repair Grid -->
    <section class="bg-slate-50 border-t border-b border-slate-200/60 py-16">
      <div class="mx-auto max-w-5xl px-4">
        <div class="text-center max-w-2xl mx-auto mb-10">
          <h2 class="text-2xl font-bold text-ink md:text-3xl">${data.repairTitle}</h2>
          <p class="mt-2 text-sm text-slate-600">${data.repairDescription}</p>
        </div>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          ${repairCards}
        </div>
      </div>
    </section>

    <!-- How the Process Works (Numbered Steps) -->
    <section class="mx-auto max-w-5xl px-4 py-16 bg-white">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-2xl font-bold text-ink md:text-3xl">${data.processTitle}</h2>
        <p class="mt-2 text-sm text-slate-600">${data.processDescription}</p>
      </div>
      <div class="grid gap-8 md:grid-cols-4 relative">
        <div class="hidden md:block absolute top-7 left-10 right-10 h-0.5 bg-slate-200 -z-10"></div>
        ${processSteps}
      </div>
    </section>

    <!-- Context & Advisory Area -->
    <section class="bg-slate-50 border-t border-b border-slate-200/60 py-16">
      <div class="mx-auto max-w-5xl px-4 grid gap-8 md:grid-cols-2">
        <div class="flex flex-col justify-center">
          <h2 class="text-2xl font-bold text-ink md:text-3xl">${data.contextTitle}</h2>
          ${data.contextText}
          <div class="mt-6 p-5 rounded-xl border-l-4 border-brand bg-white shadow-sm flex gap-4">
            <div class="shrink-0 text-brand"><i data-lucide="${data.contextCalloutIcon}" class="h-6 w-6"></i></div>
            <div>
              <h4 class="font-bold text-ink text-sm">${data.contextCalloutTitle}</h4>
              <p class="mt-2 text-xs text-slate-600 leading-relaxed">${data.contextCalloutText}</p>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-6 justify-center">
          <div class="card-leander bg-white">
            <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-brand"><i data-lucide="help-circle" class="h-5 w-5"></i></div>
            <h3 class="text-lg font-bold text-ink">${data.questionTitle}</h3>
            <p class="mt-2 text-xs text-slate-700 leading-relaxed">${data.questionText}</p>
          </div>

          <!-- Neutral safety / scope trust box -->
          <div class="rounded-xl border border-slate-200 bg-white p-6 flex gap-4 shadow-sm">
            <div class="shrink-0 text-slate-500"><i data-lucide="alert-circle" class="h-6 w-6"></i></div>
            <div>
              <h4 class="font-bold text-ink text-sm">${data.scopeTitle}</h4>
              <p class="mt-2 text-xs text-slate-600 leading-relaxed">${data.scopeText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Area -->
    <section class="bg-white py-16">
      <div class="mx-auto max-w-4xl px-4 text-center">
        <h2 class="text-2xl font-bold text-ink md:text-3xl">${data.slug === 'gutter-cleaning-repair' ? 'Gutter Cleaning & Repair Pricing' : data.slug === 'deck-patio-repair' ? 'Deck & Patio Repair Pricing' : data.slug === 'garage-door-repair' ? 'Garage Door Repair Pricing' : data.slug === 'fencing-gates-pet-doors' ? 'Fencing, Gates & Pet Door Pricing' : data.slug === 'tv-mounting-furniture-assembly' ? 'TV Mounting & Assembly Pricing' : data.slug === 'smart-home-device-install' ? 'Smart Home Device Install Pricing' : data.slug === 'electrical-fixture-install' ? 'Electrical Fixture Install Pricing' : 'Plumbing Fixture Repair Pricing'}</h2>
        <p class="mt-4 text-slate-700 max-w-2xl mx-auto leading-relaxed">${data.pricingText}</p>
      </div>
    </section>

    <!-- Related Services -->
    <section class="mx-auto max-w-5xl px-4 py-16 bg-slate-50 border-t border-b border-slate-200/60">
      <div class="text-center max-w-2xl mx-auto mb-10">
        <h2 class="text-2xl font-bold text-ink md:text-3xl">Related Services</h2>
        <p class="mt-2 text-sm text-slate-600">${data.relatedDescription}</p>
      </div>
      <div class="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
        ${relatedServices}
      </div>
    </section>

    <!-- FAQs Section -->
    <section class="mx-auto max-w-5xl px-4 py-16 bg-white">
      <h2 class="text-2xl font-bold text-ink md:text-4xl text-center">Frequently Asked Questions</h2>
      <div class="mt-10 max-w-3xl mx-auto space-y-3">
        ${faqAccordion}
      </div>
    </section>

    <!-- Estimate / CTA Section -->
    <section id="estimate-form" class="bg-slate-50 border-t border-slate-200">
      <div class="mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-2">
        <div>
          <h2 class="text-2xl font-bold text-ink md:text-4xl">Ready to Get It Fixed?</h2>
          <p class="mt-4 text-lg text-slate-700">Send us a few details and we'll give you a straight estimate before you commit to anything.</p>
          <div class="mt-6 flex flex-wrap gap-4">
            <a href="tel:8055550142" class="btn-primary">Call or Text (805) 555-0142</a>
          </div>
        </div>

        <form class="card-leander bg-white">
          <h3 class="text-xl font-bold text-ink">Get a Free Estimate</h3>
          <div class="mt-4 space-y-4">
            <label class="block">Name<input type="text" name="name" class="mt-1 w-full rounded border border-slate-300 px-3 py-2" required></label>
            <label class="block">Phone<input type="tel" name="phone" class="mt-1 w-full rounded border border-slate-300 px-3 py-2" required></label>
            <label class="block">Email<input type="email" name="email" class="mt-1 w-full rounded border border-slate-300 px-3 py-2" required></label>
            <label class="block">Service Needed
              <select name="service" class="mt-1 w-full rounded border border-slate-300 px-3 py-2">
                <option ${data.slug === 'general-repairs-punch-list' ? 'selected' : ''}>General Repairs &amp; Punch List</option>
                <option ${data.slug === 'drywall-repair' ? 'selected' : ''}>Drywall Repair &amp; Painting</option>
                <option ${data.slug === 'plumbing-fixture-repair' ? 'selected' : ''}>Plumbing Fixture Repairs</option>
                <option ${data.slug === 'electrical-fixture-install' ? 'selected' : ''}>Electrical &amp; Smart Home Installs</option>
                <option ${data.slug === 'tv-mounting-furniture-assembly' ? 'selected' : ''}>TV Mounting &amp; Furniture Assembly</option>
                <option ${data.slug === 'fencing-gates-pet-doors' ? 'selected' : ''}>Fencing, Gates &amp; Pet Doors</option>
                <option ${data.slug === 'garage-door-repair' ? 'selected' : ''}>Garage Doors, Decks &amp; General Repairs</option>
              </select>
            </label>
            <label class="block">Neighborhood
              <select name="neighborhood" class="mt-1 w-full rounded border border-slate-300 px-3 py-2">
                <option>Wood Ranch</option>
                <option>Central Simi Valley</option>
                <option>East Simi Valley</option>
                <option>Big Sky</option>
                <option>Santa Susana</option>
              </select>
            </label>
            <label class="block">Message<textarea name="message" rows="4" class="mt-1 w-full rounded border border-slate-300 px-3 py-2"></textarea></label>
            <button type="submit" class="btn-primary w-full">Get a Free Estimate →</button>
          </div>
        </form>
      </div>
    </section>
  </main>

  <footer class="bg-ink pb-24 text-slate-300 md:pb-8">
    <div class="footer-cta-bar">
      <div class="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-4">
        <a href="#estimate-form" class="btn-primary">Get a Free Estimate →</a>
        <a href="tel:8055550142" class="btn-ghost border-white/40">Call or Text (805) 555-0142</a>
      </div>
      <p class="mx-auto mt-5 max-w-3xl text-sm text-slate-400">Also serving nearby: Moorpark, Thousand Oaks, and Chatsworth.</p>
    </div>
    <div class="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4">
      <div>
        <p class="text-lg font-extrabold uppercase tracking-wide text-brand">Simi Valley Handyman Co.</p>
        <p class="mt-3 text-sm">Local same-day handyman help for Simi Valley homeowners who want straightforward repairs and clear pricing.</p>
      </div>
      <div>
        <h2 class="text-sm font-bold uppercase tracking-wide text-brand">Contact</h2>
        <ul class="mt-3 space-y-2 text-sm">
          <li><a href="tel:8055550142" class="text-lg font-bold text-white hover:text-brand">(805) 555-0142</a></li>
          <li><a href="mailto:info@simivalleyhandymanco.com" class="hover:text-brand">info@simivalleyhandymanco.com</a></li>
          <li>123 Main St, Simi Valley, CA 93065</li>
          <li>Hours: Mon–Sat, 8:00 AM – 6:00 PM</li>
        </ul>
      </div>
      <div>
        <h2 class="text-sm font-bold uppercase tracking-wide text-brand">Services</h2>
        <ul class="mt-3 space-y-2 text-sm">
          <li><a href="/services/drywall-repair/" class="hover:text-brand">Drywall Repair</a></li>
          <li><a href="/services/plumbing-fixture-repair/" class="hover:text-brand">Plumbing Fixture Repair</a></li>
          <li><a href="/services/electrical-fixture-install/" class="hover:text-brand">Electrical Fixture Install</a></li>
          <li><a href="/services/tv-mounting-furniture-assembly/" class="hover:text-brand">TV Mounting &amp; Assembly</a></li>
          <li><a href="/services/fencing-gates-pet-doors/" class="hover:text-brand">Fencing, Gates &amp; Pet Doors</a></li>
          <li><a href="/services/garage-door-repair/" class="hover:text-brand">Garage Door Repair</a></li>
        </ul>
      </div>
      <div>
        <h2 class="text-sm font-bold uppercase tracking-wide text-brand">Areas We Serve</h2>
        <ul class="mt-3 space-y-2 text-sm">
          <li><a href="/locations/simi-valley/" class="hover:text-brand">Simi Valley</a></li>
          <li><a href="/locations/simi-valley/wood-ranch/" class="hover:text-brand">Wood Ranch</a></li>
          <li><a href="/locations/simi-valley/central-simi-valley/" class="hover:text-brand">Central Simi Valley</a></li>
          <li><a href="/locations/simi-valley/east-simi-valley/" class="hover:text-brand">East Simi Valley</a></li>
          <li><a href="/locations/simi-valley/big-sky/" class="hover:text-brand">Big Sky</a></li>
          <li><a href="/locations/simi-valley/santa-susana/" class="hover:text-brand">Santa Susana</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10 px-4 py-4 text-center text-xs text-slate-500">
      <div class="flex flex-wrap items-center justify-center gap-4 mb-2">
        <a href="/privacy-policy/" class="hover:text-white transition-colors">Privacy Policy</a>
        <a href="/terms-of-service/" class="hover:text-white transition-colors">Terms of Service</a>
        <a href="/disclaimer/" class="hover:text-white transition-colors">Disclaimer</a>
        <a href="/accessibility-statement/" class="hover:text-white transition-colors">Accessibility Statement</a>
      </div>
      © <script>document.write(new Date().getFullYear())</script> Simi Valley Handyman Co. All rights reserved.
    </div>
  </footer>

  <div class="sticky-cta md:hidden">
    <div class="min-w-0 flex-1">
      <span class="sticky-cta__badge">Get a Free Estimate</span>
      <p class="mt-1 text-sm font-semibold text-white">Same-Day Response</p>
      <p class="text-xs text-slate-400">Licensed-Scope &amp; Insured</p>
    </div>
    <a href="tel:8055550142" class="sticky-cta__phone shrink-0">📞 (805) 555-0142</a>
  </div>

  <script type="module" src="/assets/js/main.js"></script>
  <script>
    lucide.createIcons();
  </script>

  <script type="application/ld+json">
  ${JSON.stringify(serviceSchema, null, 2)}
  </script>

  <script type="application/ld+json">
  ${JSON.stringify(faqSchema, null, 2)}
  </script>
</body>
</html>`;
}

servicesData.forEach(service => {
  const dirPath = path.join(__dirname, 'services', service.slug);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  const htmlContent = buildPageHtml(service);
  fs.writeFileSync(path.join(dirPath, 'index.html'), htmlContent);
  console.log(`Generated ${service.slug}/index.html`);
});
