import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  {
    hours: "0 hrs",
    label: "Getting Started",
    description: "Create your account and begin recording. Every word counts.",
    progress: 0,
    unlocks: ["Voice Legacy Dashboard", "Provider comparison", "Data tracking"]
  },
  {
    hours: "5 hrs",
    label: "Basic Clone Ready",
    description: "Enough data for a recognizable voice clone. Your friends will know it's you.",
    progress: 25,
    unlocks: ["Basic voice cloning", "Single language support", "Preview generation"]
  },
  {
    hours: "20 hrs",
    label: "High Quality",
    description: "Your clone captures your tone, rhythm, and personality. It sounds like you on a good day.",
    progress: 60,
    unlocks: ["Multi-language cloning", "Emotional range", "Soul file generation"]
  },
  {
    hours: "50+ hrs",
    label: "Studio Grade",
    description: "Indistinguishable from the real you. Every laugh, every pause, every inflection — captured.",
    progress: 100,
    unlocks: ["Commercial licensing", "Full avatar creation", "Unlimited previews"]
  }
];

function MilestoneCard({ milestone, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative bg-windy-dark/40 backdrop-blur-sm border border-windy-pink/10 rounded-2xl p-6 hover:border-windy-pink/30 transition-all duration-500 legacy-glow card-shimmer"
    >
      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-black gradient-text">{milestone.hours}</span>
          <span className="text-white font-bold text-lg">{milestone.label}</span>
        </div>
        {milestone.progress === 100 && (
          <span className="px-3 py-1 bg-windy-pink/10 border border-windy-pink/30 rounded-full text-windy-pink text-xs font-bold">
            MAX LEVEL
          </span>
        )}
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-windy-darker rounded-full mb-4 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${milestone.progress}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.15 + 0.3, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-windy-pink via-windy-magenta to-windy-purple rounded-full"
        />
      </div>

      <p className="text-gray-400 text-sm mb-4 leading-relaxed">{milestone.description}</p>

      {/* Unlocks */}
      <div className="space-y-1.5">
        {milestone.unlocks.map((unlock, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <svg className="w-4 h-4 text-windy-magenta flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-300">{unlock}</span>
          </div>
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
            Level Up Your <span className="gradient-text">Voice Legacy</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Every hour of voice data makes your clone more real. Track your progress and see what unlocks at each milestone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <MilestoneCard key={index} milestone={milestone} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
