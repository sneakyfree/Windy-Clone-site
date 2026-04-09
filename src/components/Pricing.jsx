import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "The full dashboard — yours forever. No credit card. No catch.",
    features: [
      "Voice Legacy Dashboard with readiness gauges",
      "Voice Twin, Avatar & Soul File tracking",
      "Provider marketplace & comparison",
      "Quality estimates for every provider",
      "Download or delete your data anytime",
      "Community support"
    ],
    cta: "Start Your Legacy — Free",
    highlighted: false,
    note: "You only pay provider fees when you choose to create a twin"
  },
  {
    name: "Pro",
    price: "$12.99",
    period: "/month",
    description: "For creators ready to meet their digital twin.",
    features: [
      "Everything in Free",
      "Priority processing queue",
      "Advanced Voice Twin management",
      "Soul file generation",
      "Unlimited clone previews",
      "Multi-language voice sync",
      "Email support"
    ],
    cta: "Start Pro Trial",
    highlighted: true,
    badge: "Most Popular"
  },
  {
    name: "Enterprise",
    price: "$49.99",
    period: "/month",
    description: "For teams and commercial voice operations.",
    features: [
      "Everything in Pro",
      "Multi-twin management",
      "Commercial licensing rights",
      "Developer tools access",
      "Team twin provisioning",
      "Windy Fly agent integration",
      "Dedicated account manager",
      "Custom integrations"
    ],
    cta: "Contact Sales",
    highlighted: false
  }
];

function PricingCard({ tier, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative bg-windy-dark/40 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 ${
        tier.highlighted
          ? 'border-2 border-windy-pink/50 popular-ring scale-105'
          : 'border border-windy-pink/10 hover:border-windy-pink/30'
      }`}
    >
      {tier.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-windy-pink to-windy-magenta rounded-full text-white text-xs font-bold">
          {tier.badge}
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-4xl font-bold gradient-text">{tier.price}</span>
          <span className="text-gray-500 text-sm">{tier.period}</span>
        </div>
        <p className="text-gray-400 text-sm">{tier.description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <svg className="w-5 h-5 text-windy-magenta flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      {tier.note && (
        <p className="text-xs text-gray-500 mb-4 italic">{tier.note}</p>
      )}

      <motion.a
        href="#"
        className={`block w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
          tier.highlighted
            ? 'bg-gradient-to-r from-windy-pink to-windy-magenta text-white cta-glow hover:shadow-lg hover:shadow-windy-pink/30'
            : 'border-2 border-windy-pink/30 text-windy-pink hover:bg-windy-pink/10 hover:border-windy-pink'
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {tier.cta}
      </motion.a>
    </motion.div>
  );
}

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Free. <span className="gradient-text">Clone When Ready.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The dashboard is free forever — track your Legacy Score, compare providers, and monitor your readiness gauges without paying a cent. When you're ready to create your Voice Twin, choose the plan that fits your legacy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {tiers.map((tier, index) => (
            <PricingCard key={index} tier={tier} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
