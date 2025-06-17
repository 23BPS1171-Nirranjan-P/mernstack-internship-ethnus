import React, { useState } from 'react';

const questions = [
  "What is this website about?",
  "How are movies rated?",
  "Can I submit my own reviews?",
  "Is the content on this website free?",
  "How do I search for a specific movie?"
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      {questions.map((q, idx) => (
        <div key={idx} className="faq-item">
          <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)}>
            {idx + 1}. {q} <span>{openIndex === idx ? '-' : '+'}</span>
          </button>
          {openIndex === idx && <p>This is the answer to: {q}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
