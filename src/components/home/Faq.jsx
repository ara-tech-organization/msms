import React, { useState } from "react";
import styles from "./Faq.module.css";

const faqs = [
  {
    question: "What curriculum does Morning Star Matriculation School in Thanjavur follow?",
    answer: "Morning Star Matriculation School in Thanjavur follows the Tamil Nadu State Board curriculum, offering a strong foundation in academics while integrating co-curricular activities. The school emphasizes holistic development, ensuring students excel in both studies and personal growth. The curriculum is structured to prepare students for higher education and competitive exams.",
  },
  {
    question: "How can I apply for admission to Morning Star School in Thanjavur?",
    answer: "Admissions at Morning Star School, Thanjavur, can be initiated through an offline application form available at the school office. Parents can visit the campus or contact the administration to know the current admission process, required documents, and age criteria. Early application is encouraged as seats are limited for each academic year.",
  },
  {
    question: "What facilities are available at Morning Star Matriculation School?",
    answer: "Morning Star Matriculation School offers well-equipped classrooms, smart boards, science and computer labs, a well-stocked library, a spacious playground, CCTV surveillance, and safe transportation. The school also promotes digital learning, extracurricular clubs, and personalized support to ensure a safe and enriching learning environment.",
  },
  {
    question: "Is Morning Star School in Thanjavur offering transport facilities for students?",
    answer: "Yes, Morning Star School provides safe and reliable school transport facilities across major areas in and around Thanjavur. Each bus route is monitored, and all vehicles are fitted with GPS and CCTV for student safety. Transport routes and schedules are planned efficiently for student convenience.",
  },
  {
    question: "Why should I choose Morning Star Matriculation School for my child’s education?",
    answer: "Morning Star Matriculation School in Thanjavur is known for its experienced faculty, student-friendly environment, modern teaching methods, and consistent academic results. The school prioritizes values, discipline, and innovation, making it one of the top choices for parents seeking quality education in Thanjavur.",
  },
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={styles.accordionWrapper}>
        <h2 className={styles.faqtitle}>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`${styles.accordionItem} ${
            activeIndex === index ? styles.active : ""
          }`}
        >
          <button
            className={styles.accordionHeader}
            onClick={() => toggleIndex(index)}
          >
            <span>{faq.question}</span>
            <span className={styles.icon}>{activeIndex === index ? "−" : "+"}</span>
          </button>
          {activeIndex === index && (
            <div className={styles.accordionContent}>
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;
