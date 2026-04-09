import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const providers = [
  {
    name: "ElevenLabs",
    specialty: "Voice Cloning",
    description: "Industry-leading voice synthesis. Ultra-realistic clones with emotional range and natural intonation.",
    strength: "Best for natural speech",
    color: "from-violet-500 to-purple-500"
  },
  {
    name: "HeyGen",
    specialty: "Video Avatars",
    description: "Full visual digital twins. Your face, your expressions, your gestures — in video form. Perfect for content creation.",
    strength: "Best for video content",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "PlayHT",
    specialty: "Voice AI",
    description: "Ultra-low latency voice generation with conversational AI capabilities. Your clone that can actually talk back.",
    strength: "Best for real-time conversation",
    color: "from-emerald-500 to-teal-500"
  },
  {
    name: "Resemble AI",
    specialty: "Voice Synthesis",
    description: "Custom voice models with fine-grained control over speech style, emotion, and delivery. The director's choice.",
    strength: "Best for fine control",
    color: "from-amber-500 to-orange-500"
  },
  {
    name: "Descript",
    specialty: "Audio Editing",
    description: "Edit your voice like text. Overdub capabilities let your clone fill in gaps and fix mistakes seamlessly.",
    strength: "Best for editing & correction",
    color: "from-rose-500 to-red-500"
  },
  {
    name: "More Coming",
    specialty: "Always Growing",
    description: "We're constantly adding new providers. The clone marketplace is evolving — and Windy Clone evolves with it.",
    strength: "Your choice, always",
    color: "from-windy-pink to-windy-magenta"
  }
];

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
      <div className={`inline-flex px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${provider.color} bg-clip-text text-transparent border border-white/10 mb-4`}>
        {provider.specialty}
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
            Windy Clone isn't a single provider — it's a marketplace. Compare the best voice and avatar platforms in the world, all in one place. Pick the one that's right for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((provider, index) => (
            <ProviderCard key={index} provider={provider} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
