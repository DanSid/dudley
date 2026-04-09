import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

function FAQItem({ question, answer, accentColor }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="faq-item">
      <button
        className="faq-question group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="pr-4 text-base md:text-lg">{question}</span>
        <span
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200"
          style={{
            background: open ? `${accentColor}20` : '#F3F4F6',
            color: open ? accentColor : '#6B7280'
          }}
        >
          {open ? <Minus size={15} /> : <Plus size={15} />}
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '400px' : '0px' }}
      >
        <p className="pb-5 text-gray-600 text-sm md:text-base leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ({ faqs = [], accentColor = '#C9A445', bgColor = '#F9F5EF' }) {
  return (
    <section id="faq" className="section-pad" style={{ background: bgColor }}>
      <div className="container-pad">
        <div className="text-center mb-12">
          <p className="section-label" style={{ color: accentColor }}>
            <span className="w-8 h-px inline-block" style={{ background: accentColor }} />
            Got Questions?
            <span className="w-8 h-px inline-block" style={{ background: accentColor }} />
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-dudley-navy">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-4 md:p-8 shadow-card">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              accentColor={accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
