import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const twins = [
  {
    icon: "&#x1f5e3;&#xfe0f;",
    title: "Voice Twin",
    subtitle: "Your voice, preserved forever",
    description: "A Voice Twin sounds exactly like you — your tone, your rhythm, the way you pause before a punchline. It can read bedtime stories to your grandchildren in your voice, narrate videos in 12 languages as you, or leave a voicemail that nobody could tell apart from the real thing.",
    useCase: "Imagine your grandchildren hearing a bedtime story in YOUR voice — decades from now.",
    dataNeeded: "5+ hours of recordings",
    gradient: "from-windy-pink to-rose-400",
    bg: "from-windy-pink/10 to-rose-400/5"
  },
  {
    icon: "&#x1f9d1;&#x200d;&#x1f4bb;",
    title: "Digital Avatar",
    subtitle: "Your face, your expressions, in video",
    description: "A Digital Avatar looks like you, moves like you, and presents like you — on camera. Create video content without ever sitting in front of a lens again. Give presentations in languages you don't speak. Be in two places at once.",
    useCase: "Picture yourself presenting at a conference in Tokyo — in fluent Japanese, with your face and gestures.",
    dataNeeded: "Video recordings + 20hrs voice",
    gradient: "from-windy-magenta to-purple-400",
    bg: "from-windy-magenta/10 to-purple-400/5"
  },
  {
    icon: "&#x1fa77;",
    title: "Soul File",
    subtitle: "Your personality, captured in code",
    description: "A Soul File goes deeper than sound or sight. It captures how you think — your favorite phrases, your humor, the way you explain things, the words you reach for when you're excited. It's the difference between a copy and a continuation.",
    useCase: "Your AI agent doesn't just do tasks for you — it writes emails that sound like you actually wrote them.",
    dataNeeded: "50+ hours for full personality",
    gradient: "from-windy-purple to-violet-400",
    bg: "from-windy-purple/10 to-violet-400/5"
  }
];

function TwinCard({ twin, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative overflow-hidden"
    >
      <div className={`bg-gradient-to-br ${twin.bg} bg-windy-dark/40 backdrop-blur-sm border border-windy-pink/10 rounded-2xl p-8 hover:border-windy-pink/30 transition-all duration-500 card-shimmer h-full`}>
        {/* Icon */}
        <div className="text-5xl mb-5" dangerouslySetInnerHTML={{ __html: twin.icon }} />

        {/* Title */}
        <h3 className={`text-2xl font-bold mb-1 bg-gradient-to-r ${twin.gradient} bg-clip-text text-transparent`}>
          {twin.title}
        </h3>
        <p className="text-gray-400 text-sm mb-5">{twin.subtitle}</p>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6">{twin.description}</p>

        {/* Emotional use case */}
        <div className="bg-windy-darker/60 border border-windy-pink/10 rounded-xl p-4 mb-5">
          <p className="text-sm text-gray-300 italic leading-relaxed">
            "{twin.useCase}"
          </p>
        </div>

        {/* Data needed */}
        <div className="flex items-center gap-2 text-xs text-windy-magenta/70">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Requires: {twin.dataNeeded}</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Discover() {
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
            What Is a <span className="gradient-text">Digital Twin?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Three layers of you — preserved, enhanced, and ready to live beyond the limits of time and distance. No technical knowledge required. Just your voice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {twins.map((twin, index) => (
            <TwinCard key={index} twin={twin} index={index} />
          ))}
        </div>

        {/* Connecting message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center text-gray-500 mt-12 text-sm max-w-2xl mx-auto"
        >
          Each layer builds on the last. Start with your voice. Add your face. Capture your soul. The more you record with Windy Word, the richer every layer becomes.
        </motion.p>
      </div>
    </section>
  );
}
