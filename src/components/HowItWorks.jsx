import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const flowSteps = [
  { label: "Windy Word", icon: "&#x1f3a4;", sub: "You speak" },
  { label: "Windy Clone", icon: "&#x1f9ec;", sub: "We package" },
  { label: "Provider", icon: "&#x2601;&#xfe0f;", sub: "They train" },
  { label: "Your Twin", icon: "&#x2728;", sub: "You forever" }
];

const steps = [
  {
    number: "01",
    title: "Speak Naturally",
    description: "Use Windy Word to record meetings, stories, conversations — anything. Every word builds your voice profile. You don't have to do anything special. Just live your life.",
    icon: "&#x1f3a4;"
  },
  {
    number: "02",
    title: "Watch Your Legacy Grow",
    description: "Your Voice Legacy Dashboard tracks every hour of voice data. See your progress from 'Getting Started' to 'Studio Grade.' The more you speak, the better your Voice Twin becomes.",
    icon: "&#x1f4c8;"
  },
  {
    number: "03",
    title: "Choose Your Provider",
    description: "Browse the Twin Studio. Compare ElevenLabs, HeyGen, PlayHT, and more — side by side. See what each specializes in. Pick the one that's right for you.",
    icon: "&#x1f50d;"
  },
  {
    number: "04",
    title: "One Button. Done.",
    description: "Hit send. Windy Clone fetches your data from Windy Word, packages it in the provider's format, and handles the upload. You don't touch a single technical detail. Your Windy Fly agent can even do this for you while you sleep.",
    icon: "&#x1f4e4;"
  },
  {
    number: "05",
    title: "Meet Yourself",
    description: "Your Voice Twin is born. Preview it, refine it, deploy it. Use it to speak any language in your voice. Create content. Tell bedtime stories when you can't be there. Live forever.",
    icon: "&#x2728;"
  }
];

function DataFlowAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="bg-windy-dark/40 backdrop-blur-sm border border-windy-pink/10 rounded-2xl p-8 overflow-hidden">
        <p className="text-center text-gray-500 text-sm mb-6 uppercase tracking-wider font-semibold">How your data flows</p>
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {flowSteps.map((step, i) => (
            <div key={i} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.25 }}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-windy-pink/20 to-windy-magenta/20 border border-windy-pink/30 flex items-center justify-center mb-2">
                  <span className="text-2xl md:text-3xl" dangerouslySetInnerHTML={{ __html: step.icon }} />
                </div>
                <span className="text-white text-xs md:text-sm font-semibold">{step.label}</span>
                <span className="text-gray-500 text-[10px] md:text-xs">{step.sub}</span>
              </motion.div>

              {i < flowSteps.length - 1 && (
                <motion.div
                  className="flex items-center mx-2 md:mx-4"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: i * 0.25 + 0.3 }}
                >
                  {/* Animated arrow */}
                  <div className="relative w-8 md:w-16 h-px bg-windy-pink/20">
                    <motion.div
                      className="absolute top-0 left-0 h-px bg-gradient-to-r from-windy-pink to-windy-magenta"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: '100%' } : {}}
                      transition={{ duration: 0.6, delay: i * 0.25 + 0.4 }}
                    />
                    <motion.div
                      className="absolute -top-1 -right-1"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: i * 0.25 + 0.8 }}
                    >
                      <svg className="w-2.5 h-2.5 text-windy-pink" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function StepCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative flex gap-6 group"
    >
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-windy-pink to-windy-magenta flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {step.number}
        </div>
        {index < steps.length - 1 && (
          <div className="w-px h-full bg-gradient-to-b from-windy-pink/30 to-transparent mt-2" />
        )}
      </div>

      <div className="pb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl" dangerouslySetInnerHTML={{ __html: step.icon }} />
          <h3 className="text-xl font-bold text-white">{step.title}</h3>
        </div>
        <p className="text-gray-400 leading-relaxed max-w-lg">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Your Voice to <span className="gradient-text">Your Digital Twin</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            No studio required. No technical expertise needed. Just speak — and watch yourself come to life.
          </p>
        </motion.div>

        <DataFlowAnimation />

        <div className="space-y-0">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
