import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
    description: "Your Voice Legacy Dashboard tracks every hour of voice data. See your progress from 'Getting Started' to 'Studio Grade.' The more you speak, the better your clone becomes.",
    icon: "&#x1f4c8;"
  },
  {
    number: "03",
    title: "Choose Your Provider",
    description: "Browse the Clone Studio. Compare ElevenLabs, HeyGen, PlayHT, and more — side by side. See what each specializes in. Pick the one that's right for you.",
    icon: "&#x1f50d;"
  },
  {
    number: "04",
    title: "One Button. Done.",
    description: "Hit send. Windy Clone packages your voice data, formats it for your chosen provider, and handles the upload. You don't touch a single technical detail.",
    icon: "&#x1f4e4;"
  },
  {
    number: "05",
    title: "Meet Yourself",
    description: "Your digital twin is born. Preview it, refine it, deploy it. Use it to speak any language in your voice. Create content. Tell bedtime stories when you can't be there. Live forever.",
    icon: "&#x2728;"
  }
];

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
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-windy-pink to-windy-magenta flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {step.number}
        </div>
        {index < steps.length - 1 && (
          <div className="w-px h-full bg-gradient-to-b from-windy-pink/30 to-transparent mt-2" />
        )}
      </div>

      {/* Content */}
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

        <div className="space-y-0">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
