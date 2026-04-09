import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const nativeProvider = {
  name: "Windy Clone Native",
  specialty: "Voice + Avatar + Soul",
  description: "Our own training pipeline — built on Windy Cloud GPU. The highest quality, lowest cost, and deepest integration with the Windy ecosystem. Your data never leaves the family.",
  strength: "Coming Soon",
  color: "from-windy-pink to-windy-magenta",
  minHours: null,
  isNative: true
};

const providers = [
  {
    name: "ElevenLabs",
    specialty: "Voice Cloning",
    description: "Industry-leading voice synthesis. Ultra-realistic Voice Twins with emotional range and natural intonation.",
    strength: "Best for natural speech",
    color: "from-violet-500 to-purple-500",
    minHours: 5
  },
  {
    name: "HeyGen",
    specialty: "Video Avatars",
    description: "Full visual digital twins. Your face, your expressions, your gestures — in video form. Perfect for content creation.",
    strength: "Best for video content",
    color: "from-blue-500 to-cyan-500",
    minHours: 10
  },
  {
    name: "PlayHT",
    specialty: "Voice AI",
    description: "Ultra-low latency voice generation with conversational AI capabilities. Your Voice Twin that can actually talk back.",
    strength: "Best for real-time conversation",
    color: "from-emerald-500 to-teal-500",
    minHours: 3
  },
  {
    name: "Resemble AI",
    specialty: "Voice Synthesis",
    description: "Custom voice models with fine-grained control over speech style, emotion, and delivery. The director's choice.",
    strength: "Best for fine control",
    color: "from-amber-500 to-orange-500",
    minHours: 10
  },
  {
    name: "Descript",
    specialty: "Audio Editing",
    description: "Edit your voice like text. Overdub capabilities let your Voice Twin fill in gaps and fix mistakes seamlessly.",
    strength: "Best for editing & correction",
    color: "from-rose-500 to-red-500",
    minHours: 15
  },
  {
    name: "More Coming",
    specialty: "Always Growing",
    description: "We're constantly adding new providers. The twin marketplace is evolving — and Windy Clone evolves with it.",
    strength: "Your choice, always",
    color: "from-gray-400 to-gray-500",
    minHours: null
  }
];

function NativeCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="col-span-full bg-gradient-to-br from-windy-pink/10 via-windy-dark/50 to-windy-magenta/10 border-2 border-windy-pink/30 rounded-2xl p-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-windy-pink/5 to-transparent" />
      <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">&#x1f9ec;</span>
            <span className="px-3 py-1 bg-windy-pink/20 border border-windy-pink/40 rounded-full text-xs font-bold text-windy-pink uppercase tracking-wider">Coming Soon</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{nativeProvider.name}</h3>
          <p className="text-gray-300 leading-relaxed mb-3">{nativeProvider.description}</p>
          <p className="text-gray-500 text-sm italic">Built on Windy Cloud. Trained with your data. Owned by you.</p>
        </div>
        <motion.a
          href="#pricing"
          className="px-6 py-3 border-2 border-windy-pink/40 text-windy-pink rounded-lg font-semibold text-sm hover:bg-windy-pink/10 hover:border-windy-pink transition-all duration-300 whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Join the Waitlist
        </motion.a>
      </div>
    </motion.div>
  );
}

function ProviderCard({ provider, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-windy-dark/40 backdrop-blur-sm border border-windy-pink/10 rounded-2xl p-6 hover:border-windy-pink/30 transition-all duration-500 card-shimmer"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${provider.color} bg-clip-text text-transparent border border-white/10`}>
          {provider.specialty}
        </div>
        {provider.minHours !== null && (
          <span className="text-[10px] font-semibold text-windy-magenta/60 bg-windy-magenta/10 border border-windy-magenta/20 rounded-full px-2.5 py-0.5">
            {provider.minHours}+ hrs needed
          </span>
        )}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-windy-pink transition-colors duration-300">
        {provider.name}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{provider.description}</p>
      <div className="flex items-center gap-2 text-xs text-windy-magenta/70">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        {provider.strength}
      </div>
    </motion.div>
  );
}

export default function ProviderShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Voice. <span className="gradient-text">Your Choice of Provider.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Windy Clone isn't a single provider — it's a marketplace. Compare the best voice and avatar platforms in the world, all in one place. The dashboard is free forever — you only pay when you're ready to create.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NativeCard />
          {providers.map((provider, index) => (
            <ProviderCard key={index} provider={provider} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
