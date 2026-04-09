import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const faqs = [
  {
    question: "What is Windy Clone?",
    answer: "Windy Clone transforms your accumulated voice recordings, video captures, and transcribed text into a digital twin — a voice clone that sounds like you, a digital avatar that looks like you, and a soul file that captures your personality, speech patterns, and conversational style. Think of it as the place where your voice becomes immortal."
  },
  {
    question: "How much voice data do I need for a good clone?",
    answer: "You can start with as little as 5 hours of voice data for a basic clone that's recognizably you. For high-quality clones that capture your tone and personality, aim for 20 hours. For studio-grade results that are indistinguishable from the real you, 50+ hours is ideal. Your Voice Legacy Dashboard tracks your progress in real time."
  },
  {
    question: "Which clone providers do you support?",
    answer: "Windy Clone is a marketplace, not a single provider. We currently support ElevenLabs, HeyGen, PlayHT, Resemble AI, Descript, and more. Each provider specializes in different aspects of cloning — voice, video, real-time conversation — so you can choose the one that fits your needs. We're constantly adding new providers."
  },
  {
    question: "Is my voice data safe?",
    answer: "Absolutely. Your voice data stays in your Windy Cloud vault, encrypted and under your control. We never share your data with providers until you explicitly choose to send it. You decide which provider gets access, and you can revoke that access anytime. Your voice is your identity — we treat it that way."
  },
  {
    question: "Can I use my clone commercially?",
    answer: "Yes, with the Enterprise plan. You get commercial licensing rights, which means you can use your clone in videos, podcasts, advertisements, and other content you monetize. The Pro plan covers personal use, and the Free plan lets you track and compare without any cloning."
  },
  {
    question: "How does it connect to Windy Word?",
    answer: "Windy Word is where your voice data originates. Every recording you make in Windy Word — meetings, notes, conversations, stories — feeds directly into your Voice Legacy Dashboard in Windy Clone. The more you use Windy Word, the richer and more accurate your clone becomes. They're designed to work together seamlessly."
  },
  {
    question: 'What\'s a "soul file"?',
    answer: "A soul file goes beyond voice cloning. It captures your personality — the way you pause before a punchline, your favorite phrases, your conversational rhythm, your vocabulary choices. It's the difference between a voice that sounds like you and a digital twin that feels like you. Soul files are available on the Pro plan and above."
  }
];

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border border-windy-pink/10 rounded-xl overflow-hidden hover:border-windy-pink/20 transition-colors duration-300"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left bg-windy-dark/30 hover:bg-windy-dark/50 transition-colors duration-200"
      >
        <span className="text-white font-semibold pr-4">{faq.question}</span>
        <motion.svg
          className="w-5 h-5 text-windy-pink flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-gray-400 leading-relaxed text-sm">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 gradient-bg gradient-mesh">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Questions? <span className="gradient-text">Answers.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about creating your digital twin.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
