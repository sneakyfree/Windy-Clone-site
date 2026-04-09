import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    quote: "My grandchildren live three states away. I recorded bedtime stories for years using Windy Word. When my clone was ready, I cried. Now my grandkids hear Grandpa's voice every single night — reading new stories I never even recorded. It sounds exactly like me. They don't know the difference, and honestly? That's the most beautiful thing I've ever heard.",
    name: "Robert M.",
    role: "Retired Teacher, 72",
    avatar: "&#x1f474;"
  },
  {
    quote: "I create content in English, but my audience is global. Windy Clone let me produce videos in 12 different languages — all in my voice. Not some robot. Me. My subscribers in Brazil, Japan, Germany — they all hear me speaking their language with my personality, my cadence, my energy. My channel grew 400% in six months.",
    name: "Priya K.",
    role: "Content Creator, 340K subscribers",
    avatar: "&#x1f469;"
  },
  {
    quote: "I'm a songwriter. Sometimes I need to hear a melody in jazz, then folk, then R&B — all before I commit to a final arrangement. My voice clone lets me demo songs in completely different styles without re-recording a single note. It's like having infinite versions of myself in the studio. The soul file even captures how I phrase things. It's uncanny.",
    name: "Marcus T.",
    role: "Independent Musician",
    avatar: "&#x1f468;&#x200d;&#x1f3a4;"
  }
];

function TestimonialCard({ testimonial, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-windy-dark/40 backdrop-blur-sm border border-windy-pink/10 rounded-2xl p-8 hover:border-windy-pink/30 transition-all duration-500 card-shimmer"
    >
      {/* Quote marks */}
      <div className="text-4xl gradient-text font-serif mb-4">"</div>

      <p className="text-gray-300 leading-relaxed mb-6 text-sm">
        {testimonial.quote}
      </p>

      <div className="flex items-center gap-3 border-t border-windy-pink/10 pt-4">
        <div className="text-3xl" dangerouslySetInnerHTML={{ __html: testimonial.avatar }} />
        <div>
          <div className="text-white font-semibold text-sm">{testimonial.name}</div>
          <div className="text-gray-500 text-xs">{testimonial.role}</div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
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
            Voices That <span className="gradient-text">Live On</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Real people. Real clones. Real impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
