import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function EmotionalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 opacity-15">
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-windy-pink rounded-full blur-[150px]"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-windy-magenta rounded-full blur-[130px]"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 leading-relaxed mb-8 font-light">
              Your voice is unique. It's the sound your children recognize from across a crowded room.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 leading-relaxed mb-8 font-light">
              The laugh that makes your friends smile <span className="text-white font-medium">before the joke lands.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl text-gray-300 leading-relaxed mb-8 font-light">
              The way you say <span className="italic">"goodnight"</span> that no one else in the world can replicate.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 leading-tight">
              <span className="gradient-text">Don't let it disappear.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 2.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#pricing"
              className="px-12 py-5 bg-gradient-to-r from-windy-pink to-windy-magenta text-white rounded-lg font-semibold text-lg cta-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Preserve Your Voice — Free
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="px-8 py-5 border-2 border-windy-pink/40 text-windy-pink rounded-lg font-semibold text-lg hover:bg-windy-pink/10 hover:border-windy-pink transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn How It Works
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 2.8 }}
            className="text-gray-600 text-sm mt-10 italic"
          >
            "The best time to start recording was ten years ago. The second best time is now."
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
