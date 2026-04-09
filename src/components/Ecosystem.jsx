import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const flywheelSteps = [
  {
    brand: "Windy Word",
    icon: "&#x1f3a4;",
    verb: "You speak.",
    hook: "Voice-to-text intelligence powered by AI. Free to start. Every recording you make builds the foundation for your clone.",
    desire: "The more you speak, the more real your clone becomes. Windy Word is where your legacy begins.",
    link: "https://windyword.com",
    color: "from-blue-500 to-cyan-500",
    ring: "ring-blue-500/30"
  },
  {
    brand: "Windy Chat",
    icon: "&#x1f4ac;",
    verb: "You connect.",
    hook: "Encrypted multilingual messaging. Your clone voice speaks any language in real-time chat, voice, and video calls.",
    desire: "Your digital twin doesn't just sound like you — it speaks for you, in every language on Earth.",
    link: "https://windychat.com",
    color: "from-green-500 to-emerald-500",
    ring: "ring-green-500/30"
  },
  {
    brand: "Windy Traveler",
    icon: "&#x2708;&#xfe0f;",
    verb: "You explore.",
    hook: "AI travel companion with offline language packs. Your clone voice works everywhere — even without internet.",
    desire: "Land in Tokyo. Order coffee in your own voice — in fluent Japanese. That's the power of your clone abroad.",
    link: "https://windytraveler.com",
    color: "from-amber-500 to-teal-500",
    ring: "ring-amber-500/30"
  },
  {
    brand: "Windy Translate",
    icon: "&#x1f527;",
    verb: "The engine.",
    hook: "3,500+ specialized translation models. The invisible force that makes your clone fluent in every language.",
    desire: "Purpose-built language specialists — not general-purpose translators. The Intel Inside of voice translation.",
    link: "https://windytranslate.com",
    color: "from-indigo-500 to-blue-500",
    ring: "ring-indigo-500/30"
  },
  {
    brand: "Windy Mail",
    icon: "&#x2709;&#xfe0f;",
    verb: "You communicate.",
    hook: "Email for humans and AI. Your clone can send, reply, and manage email on your behalf — in your voice and style.",
    desire: "Your soul file knows how you write. Your clone's emails sound exactly like you wrote them.",
    link: "https://windymail.ai",
    color: "from-red-500 to-rose-500",
    ring: "ring-red-500/30"
  },
  {
    brand: "Windy Fly",
    icon: "&#x1fab0;",
    verb: "You automate.",
    hook: "Your personal AI agent. It uses your clone's voice, personality, and knowledge to act on your behalf across the entire ecosystem.",
    desire: "An agent that doesn't just follow instructions — it sounds like you, thinks like you, represents you.",
    link: "https://windyfly.ai",
    color: "from-sky-500 to-blue-500",
    ring: "ring-sky-500/30"
  },
  {
    brand: "Windy Code",
    icon: "&#x1f4bb;",
    verb: "You create.",
    hook: "AI-native code editor. Build with your voice, dictate architecture, pair-program with your digital twin.",
    desire: "Speak your vision. Watch it become code. Your clone understands your programming style.",
    link: "https://windycode.ai",
    color: "from-violet-500 to-indigo-500",
    ring: "ring-violet-500/30"
  },
  {
    brand: "Windy Cloud",
    icon: "&#x2601;&#xfe0f;",
    verb: "You store.",
    hook: "Storage, sync, and compute for everything in the Windy ecosystem. Your clone models, soul files, and voice data — one vault, one account.",
    desire: "Every piece of your digital identity, safe and sovereign. The cloud built for your legacy.",
    link: "https://windycloud.com",
    color: "from-blue-400 to-cyan-500",
    ring: "ring-blue-400/30"
  },
  {
    brand: "Eternitas",
    icon: "&#x1f6e1;&#xfe0f;",
    verb: "You trust.",
    hook: "AI identity and trust layer. Verify your clone is really you. Protect your voice from unauthorized use.",
    desire: "Your voice is your identity. Eternitas makes sure nobody else can steal it.",
    link: "https://eternitas.ai",
    color: "from-gray-300 to-white",
    ring: "ring-gray-300/30"
  }
];

function FlywheelCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className={`group relative bg-windy-dark/40 backdrop-blur-sm border border-windy-pink/10 rounded-2xl p-8 hover:border-windy-pink/30 transition-all duration-500 card-shimmer ring-1 ${step.ring}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-[0.06] rounded-2xl transition-opacity duration-500`} />

      <div className="relative flex flex-col md:flex-row gap-6">
        <div className="flex-shrink-0 flex items-start gap-4">
          <div className="text-5xl md:text-6xl font-black text-white/[0.06] leading-none">{String(index + 1).padStart(2, '0')}</div>
          <div className="text-5xl" dangerouslySetInnerHTML={{ __html: step.icon }} />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-2xl font-bold text-white">{step.verb}</h3>
            <span className={`text-sm font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>{step.brand}</span>
          </div>
          <p className="text-gray-300 mb-3 leading-relaxed">{step.hook}</p>
          <p className="text-gray-500 text-sm italic mb-4">"{step.desire}"</p>

          <a
            href={step.link}
            className="inline-flex items-center text-sm text-windy-pink/70 hover:text-windy-pink transition-colors group/link"
          >
            Explore {step.brand}
            <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {index < flywheelSteps.length - 1 && (
        <div className="hidden md:flex justify-center mt-6 -mb-2">
          <motion.svg
            className="w-6 h-6 text-windy-pink/30"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </div>
      )}
    </motion.div>
  );
}

export default function Ecosystem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ecosystem" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            One Voice. <span className="gradient-text">Nine Products. Infinite You.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            It starts with a word you speak. It ends with a digital twin that lives everywhere you do.
            Here's how the Windy ecosystem turns your voice into a legacy — and why{' '}
            <span className="text-white font-medium">Windy Clone is the heart of it all</span>.
          </p>
        </motion.div>

        <div className="space-y-6 mb-16">
          {flywheelSteps.map((step, index) => (
            <FlywheelCard key={index} step={step} index={index} />
          ))}
        </div>

        {/* The Heart — Windy Clone */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-windy-pink/10 via-windy-dark/50 to-windy-magenta/10 border-2 border-windy-pink/30 rounded-3xl p-10 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-windy-pink/5 to-transparent rounded-3xl" />

          <div className="relative">
            <div className="text-6xl mb-4">&#x1f9ec;</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              And at the Center of It All —
              <br />
              <span className="gradient-text">You.</span>
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
              Every word you speak builds your clone. Every product in the ecosystem makes it more powerful.
              Your voice travels the world. Your twin manages your inbox. Your soul file captures who you are.
              <span className="text-white font-semibold"> This is your digital immortality.</span>
            </p>
            <p className="text-windy-pink/60 text-sm italic">
              "The more you use Windy, the more real your clone becomes. That's not technology — that's legacy."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
