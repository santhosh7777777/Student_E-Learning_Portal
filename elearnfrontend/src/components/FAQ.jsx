import React, { useState } from 'react';
import '../assets/styles/FAQ.css';

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (index) => {
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter((i) => i !== index));
    } else {
      setOpenQuestions([...openQuestions, index]);
    }
  };

  const faqs = [
    {
      question: "What is Skill4ge?",
      answer: "Skill4ge is a platform dedicated to helping students enhance their skills and knowledge through various courses and resources."
    },
    {
      question: "How can I join Skill4ge?",
      answer: "You can join Skill4ge by signing up on our website. Click on the 'Sign Up' button and follow the instructions."
    },
    {
      question: "What courses do you offer?",
      answer: "We offer a wide range of courses in Business, Computer Science, Civil Engineering, Electrical Engineering, Science & Humanities, Sports, and Government."
    },
    {
      question: "How can I verify my certificate?",
      answer: "You can verify your certificate by visiting the 'Verify Certificate' section on our website and entering your certificate details."
    }
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openQuestions.includes(index) ? 'open' : ''}`}
          >
            <button className="faq-question" onClick={() => toggleQuestion(index)}>
              {faq.question}
              <span className="faq-toggle-icon">
                {openQuestions.includes(index) ? '-' : '+'}
              </span>
            </button>
            <div className="faq-answer">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
