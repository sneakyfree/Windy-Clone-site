import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const gauges = [
  {
    type: "Voice Twin",
    icon: "&#x1f5e3;&#xfe0f;",
    description: "How close your voice data is to producing a studio-quality Voice Twin",
    gradient: "from-windy-pink to-rose-400",
    milestones: [
      { hours: 0, label: "Getting Started", pct: 5, message: "Every word you speak gets you closer." },
      { hours: 5, label: "Basic Twin", pct: 25, message: "Your friends would recognize this voice." },
      { hours: 20, label: "High Quality", pct: 60, message: "Your tone, rhythm, and warmth — captured." },
      { hours: 50, label: "Studio Grade", pct: 100, message: "Indistinguishable from the real you." }
    ]
  },
  {
    type: "Digital Avatar",
    icon: "&#x1f9d1;&#x200d;&#x1f4bb;",
    description: "Your visual twin — face, expressions, and gestures in video form",
    gradient: "from-windy-magenta to-purple-400",
    milestones: [
      { hours: 0, label: "No Video Yet", pct: 5, message: "Start with voice — add video when ready." },
      { hours: 5, label: "Basic Likeness", pct: 20, message: "Recognizably you, with room to grow." },
      { hours: 20, label: "Natural Motion", pct: 55, message: "Your expressions are coming through." },
      { hours: 50, label: "Your Twin", pct: 100, message: "It moves like you. It IS you." }
    ]
  },
  {
    type: "Soul File",
    icon: "&#x1fa77;",
    description: "Your personality — speech patterns, vocabulary, humor, and conversational style",
    gradient: "from-windy-purple to-violet-400",
    milestones: [
      { hours: 0, label: "Gathering Data", pct: 5, message: "Speak naturally. We'll learn who you are." },
      { hours: 10, label: "Basic Profile", pct: 15, message: "We're starting to hear your patterns." },
      { hours: 30, label: "Rich Profile", pct: 45, message: "Your humor and style are taking shape." },
      { hours: 50, label: "Full Soul", pct: 80, message: "Your essence — preserved in code." },
      { hours: 100, label: "Living Legacy", pct: 100, message: "A continuation, not just a copy." }
    ]
  }
];

function GaugeCard({ gauge, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const topMilestone = gauge.milestones[gauge.milestones.length - 1];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-windy-dark/40 backdrop-blur-sm border border-windy-pink/10 rounded-2xl p-8 hover:border-windy-pink/30 transition-all duration-500 legacy-glow card-shimmer"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <span className="text-3xl" dangerouslySetInnerHTML={{ __html: gauge.icon }} />
        <h3 className={`text-xl font-bold bg-gradient-to-r ${gauge.gradient} bg-clip-text text-transparent`}>
          {gauge.type}
        </h3>
      </div>
      <p className="text-gray-500 text-sm mb-6">{gauge.description}</p>

      {/* Circular gauge visualization */}
      <div className="flex justify-center mb-6">
        <div className="relative w-36 h-36">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            {/* Background circle */}
            <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(236,72,153,0.08)" strokeWidth="8" />
            {/* Milestone markers */}
            {gauge.milestones.map((m, i) => {
              const angle = (m.pct / 100) * 360;
              const rad = (angle - 90) * (Math.PI / 180);
              const x = 60 + 52 * Math.cos(rad);
              const y = 60 + 52 * Math.sin(rad);
              return (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r="3"
                  className={`fill-windy-pink`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 0.6, scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + i * 0.15 + 0.5, duration: 0.3 }}
                />
              );
            })}
            {/* Animated progress arc (demo showing ~60% for marketing) */}
            <motion.circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              strokeWidth="8"
              strokeLinecap="round"
              className="stroke-windy-pink"
              style={{
                strokeDasharray: `${2 * Math.PI * 52}`,
                filter: 'drop-shadow(0 0 6px rgba(236,72,153,0.4))'
              }}
              initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
              animate={isInView ? { strokeDashoffset: 2 * Math.PI * 52 * 0.4 } : {}}
              transition={{ duration: 1.5, delay: index * 0.2 + 0.3, ease: "easeOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-white">60%</span>
            <span className="text-xs text-gray-500">Sample</span>
          </div>
        </div>
      </div>

      {/* Milestone progression */}
      <div className="space-y-3">
        {gauge.milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.2 + i * 0.1 + 0.5, duration: 0.3 }}
            className="flex items-start gap-3"
          >
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gauge.gradient} mt-1.5 flex-shrink-0`} />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white text-sm font-semibold">{m.hours}+ hrs</span>
                <span className="text-gray-500 text-xs">— {m.label}</span>
              </div>
              <p className="text-gray-500 text-xs italic">{m.message}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default function VoiceLegacy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your <span className="gradient-text">Legacy Score</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Three dimensions of your digital twin — each growing richer with every hour you record.
            Your Voice Legacy Dashboard tracks it all in real time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gauges.map((gauge, index) => (
            <GaugeCard key={index} gauge={gauge} index={index} />
          ))}
        </div>

        {/* Bottom encouragement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 text-sm mb-4">
            These gauges are live in the Windy Clone dashboard — free forever. No subscription needed to track your legacy.
          </p>
          <motion.a
            href="#pricing"
            className="inline-flex px-6 py-3 bg-gradient-to-r from-windy-pink to-windy-magenta text-white rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-windy-pink/30 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Tracking — Free
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
