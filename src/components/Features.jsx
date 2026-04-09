import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    icon: "&#x1f4ca;",
    title: "Voice Legacy Dashboard",
    description: "See exactly how much voice data you've accumulated and how close you are to a studio-quality Voice Twin. Every recording brings you closer."
  },
  {
    icon: "&#x1f3a8;",
    title: "Clone Studio",
    description: "Compare providers side by side — ElevenLabs, HeyGen, PlayHT, and more. Find the perfect match for your voice, your style, your needs."
  },
  {
    icon: "&#x1f680;",
    title: "One-Button Upload",
    description: "Pick a provider and hit send. Your voice data is packaged, formatted, and delivered automatically. No technical skills required."
  },
  {
    icon: "&#x1f46b;",
    title: "My Twins",
    description: "Track training progress, preview finished Voice Twins, and manage your digital selves — all in one place. Watch yourself come to life."
  },
  {
    icon: "&#x1f30d;",
    title: "Speak Any Language As You",
    description: "Your Voice Twin works with Windy Traveler. Travel the world speaking your own voice in any language. You, but fluent in everything."
  },
  {
    icon: "&#x1fa77;",
    title: "Soul File",
    description: "More than just voice. Capture your personality, speech patterns, vocabulary, and conversational style. The essence of who you are, preserved."
  },
  {
    icon: "&#x1f6e1;&#xfe0f;",
    title: "Your Data, Your Rules",
    description: "Download everything. Delete everything. Your voice data stays in your vault, encrypted and sovereign. We never share it without your explicit consent. Full portability, always."
  },
  {
    icon: "&#x1fab0;",
    title: "Windy Fly Does It For You",
    description: "Your Windy Fly agent can recommend providers, start your training, and notify you when your Voice Twin is ready — even while you sleep. Hands-free cloning."
  }
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-windy-dark/40 backdrop-blur-sm border border-windy-pink/10 rounded-2xl p-8 hover:border-windy-pink/30 transition-all duration-500 card-shimmer"
    >
      <div className="text-4xl mb-4" dangerouslySetInnerHTML={{ __html: feature.icon }} />
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-windy-pink transition-colors duration-300">{feature.title}</h3>
      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to <span className="gradient-text">Become Immortal</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From your first recording to a studio-grade digital twin, Windy Clone guides you through every step of creating your voice legacy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
