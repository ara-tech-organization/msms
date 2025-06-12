import React from 'react';
import styles from './Courses.module.css';

const courses = [
  {
    title: "PreKG - LKG",
    description: "Fun learning and foundational skills for early learners.",
    lessons: 5,
    duration: "5h 30m",
    students: "50+",
    // teacher: "Ms. Priya",
    img: "./images/prekg.jpg",
  },
  {
    title: "1st to 5th",
    description: "Primary education with emphasis on creativity and fundamentals.",
    lessons: 15,
    duration: "15h",
    students: "100+",
    // teacher: "Mr. Arjun",
    img: "./images/primary.jpg",
  },
  {
    title: "6th to 12th",
    description: "Advanced academics with guidance for board exams.",
    lessons: 25,
    duration: "40h",
    students: "150+",
    // teacher: "Mrs. Kavitha",
    img: "./images/higher.jpg",
  }
];

const Courses = () => {
  return (
    <section className={styles.coursesSection}>
      <div className={styles.heading}>
        <span className={styles.subtitle}>OUR CLASEES</span>
        <h2>Creating A Community Of Life Long Learners.</h2>
        {/* <button className={styles.exploreBtn}>Explore CLASSES →</button> */}
      </div>

      <div className={styles.cardsContainer}>
        {courses.map((course, index) => (
          <div key={index} className={styles.card}>
            <img src={course.img} alt={course.title} className={styles.cardImg} />
            <div className={styles.cardContent}>
              <h4>{course.title}</h4>
              <p>{course.description}</p>
              <div className={styles.courseInfo}>
                {/* <span>📚 {course.lessons} Lessons</span> */}
                {/* <span>⏱️ {course.duration}</span> */}
                {/* <span>👥 {course.students} Students</span> */}
              </div>
              {/* <div className={styles.teacherEnroll}>
                <span className={styles.teacher}>{course.teacher}</span>
                <button className={styles.enrollBtn}>Enroll →</button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
