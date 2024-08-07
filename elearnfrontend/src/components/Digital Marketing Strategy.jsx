import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "../assets/styles/CoursePage.css";
import video1 from "./videos/Digital Marketing Roadmap 2024 _ How to Become a Digital Marketer in 2024_ _ Roadmap _ Simplilearn.mp4";
import video2 from "../components/videos/SEO In 5 Minutes _ What Is SEO And How Does It Work _ SEO Explained _ SEO Tutorial _ Simplilearn.mp4";
import video3 from "../components/videos/Social Media Marketing In 5 Minutes _ What Is Social Media Marketing_ [For Beginners] _ Simplilearn.mp4";
const DigitalMarketing = () => {
    const [lessons, setLessons] = useState([
        {
            title: 'Lesson 1: Introduction to Digital Marketing',
            description: 'This course focuses on mastering effective communication skills essential for professional success...',
            videoSrc: video1,
            learningOutcomes: [
                'Understand Communication Principles: Gain a solid grasp of the core principles of effective communication and their application in a professional environment.',
                'Enhance Listening Skills: Develop and apply active listening techniques to improve understanding and engagement during conversations.',
                'Identify and Overcome Barriers: Recognize various barriers to effective communication and learn strategies to address and overcome them.',
                'Utilize Non-Verbal Communication: Learn how to use non-verbal cues, such as body language and facial expressions, to reinforce verbal messages.',
                'Apply Communication Strategies: Implement effective communication strategies to enhance clarity, reduce misunderstandings, and build stronger professional relationships.',
            ],
            watched: false,
            progress: 0,
        },
        {
            title: 'Lesson 2: SEO Fundamentals',
            description: 'This course video provides a comprehensive overview of the key factors that influence consumer decisions and behaviors...',
            videoSrc: video2,
            learningOutcomes: [
                'Understand the fundamental concepts of consumer behavior and its importance in marketing.',
                'Identify the psychological factors that influence consumer decisions.',
                'Analyze the role of social and cultural influences on consumer behavior.',
                'Apply consumer behavior theories to develop effective marketing strategies.',
                'Evaluate different models of consumer decision-making processes.',
            ],
            watched: false,
            progress: 0,
        },
        {
            title: 'Lesson 3: Social Media Marketing',
            description: 'This course video introduces the essential concepts and methodologies used in marketing research...',
            videoSrc: video3,
            learningOutcomes: [
                'Understand the basic principles and importance of marketing research.',
                'Identify different types of research designs used in marketing.',
                'Learn various data collection methods and their applications.',
                'Analyze marketing research data using appropriate techniques.',
                'Apply marketing research insights to develop effective marketing strategies.',
            ],
            watched: false,
            progress: 0,
        }
    ]);
    const [currentLesson, setCurrentLesson] = useState(0);
    const [quizAvailable, setQuizAvailable] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        // Load progress from localStorage
        const savedLessons = JSON.parse(localStorage.getItem('lessons'));
        if (savedLessons) {
            setLessons(savedLessons);
        }
        const savedCurrentLesson = localStorage.getItem('currentLesson');
        if (savedCurrentLesson) {
            setCurrentLesson(parseInt(savedCurrentLesson, 10));
        }
        // Ensure lessons is an array before checking progress
        const allWatched = Array.isArray(savedLessons) && savedLessons.every(lesson => lesson.watched);
        setQuizAvailable(allWatched);
    }, []);

    useEffect(() => {
        // Save progress to localStorage
        localStorage.setItem('lessons', JSON.stringify(lessons));
        localStorage.setItem('currentLesson', currentLesson);

        // Ensure lessons is an array before checking progress
        const allWatched = Array.isArray(lessons) && lessons.every(lesson => lesson.watched);
        setQuizAvailable(allWatched);
    }, [lessons, currentLesson]);

    useEffect(() => {
        const videoElement = videoRef.current;

        if (videoElement) {
            const updateProgress = () => {
                const progress = (videoElement.currentTime / videoElement.duration) * 100;
                setLessons(prevLessons => {
                    const updatedLessons = [...prevLessons];
                    updatedLessons[currentLesson].progress = progress;
                    return updatedLessons;
                });
            };

            videoElement.addEventListener('timeupdate', updateProgress);

            return () => {
                videoElement.removeEventListener('timeupdate', updateProgress);
            };
        }
    }, [currentLesson]);

    const handleVideoEnd = () => {
        setLessons(prevLessons => {
            const updatedLessons = [...prevLessons];
            updatedLessons[currentLesson].watched = true;
            updatedLessons[currentLesson].progress = 100;
            return updatedLessons;
        });

        // Automatically go to the next lesson if available
        if (currentLesson < lessons.length - 1) {
            setCurrentLesson(currentLesson + 1);
        }
    };

    useEffect(() => {
        // Ensure video element is present and not set to auto-play
        const videoElement = videoRef.current;
        if (videoElement) {
            videoElement.pause(); // Pause video initially
        }
    }, [currentLesson]);

    return (
        <div className="course-page">
            <div className="sidebar">
                <h2>Course Lessons</h2>
                <ul>
                    {lessons.map((lesson, index) => (
                        <li
                            key={index}
                            className={index === currentLesson ? 'active' : ''}
                            onClick={() => setCurrentLesson(index)}
                        >
                            <div className="lesson-info">
                                <span>{lesson.title}</span>
                                <div>
                                    <CircularProgressbar
                                        value={lesson.progress}
                                        text={`${Math.round(lesson.progress)}%`}
                                        styles={{
                                            root: { height: 30, width: 60, marginRight: 15 },
                                            path: { stroke: '#4caf50' },
                                            trail: { stroke: 'transparent' },
                                            text: { fill: '#4caf50', fontSize: '25px' },
                                        }}
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                    {quizAvailable && (
                        <li className="take-quiz">
                            <Link to="/DigitalMarketing-Quiz">Take Quiz</Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className="lesson-content">
                <h3>{lessons[currentLesson].title}</h3>
                <div className="video-container">
                    <video
                        ref={videoRef}
                        src={lessons[currentLesson].videoSrc}
                        controls
                        onEnded={handleVideoEnd}
                        style={{ width: '100%', maxHeight: '400px', backgroundColor: 'black' }}
                    />
                </div>
                <h4>Description:</h4>
                <p>{lessons[currentLesson].description}</p>
                <h4>Learning Outcomes:</h4>
                <ul>
                    {lessons[currentLesson].learningOutcomes.map((outcome, index) => (
                        <li key={index}>{outcome}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DigitalMarketing;
