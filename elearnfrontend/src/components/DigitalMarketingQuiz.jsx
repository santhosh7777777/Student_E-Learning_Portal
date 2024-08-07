import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const DigitalMarketingQuiz = () => {
    const courseTitle = "DigitalMarketing";
    const [questions] = useState([
        {
            question: 'What is the primary focus of consumer behavior in marketing?',
            options: ['Product development', 'Advertising strategies', 'Understanding consumer decision-making', 'Market segmentation'],
            answer: 'Understanding consumer decision-making'
        },
        {
            question: 'Which of the following is a psychological factor influencing consumer behavior?',
            options: ['Social class', 'Culture', 'Motivation', 'Family'],
            answer: 'Motivation'
        },
        {
            question: 'How do cultural factors affect consumer behavior?',
            options: ['By determining the economic status of consumers', 'By influencing their perceptions and attitudes towards products', 'By setting regulatory standards for businesses', 'By dictating technological advancements'],
            answer: 'By influencing their perceptions and attitudes towards products'
        },
        {
            question: 'Which model explains the stages a consumer goes through before making a purchase decision?',
            options: ['SWOT Analysis', 'Maslow\'s Hierarchy of Needs', 'Consumer Decision-Making Process', 'BCG Matrix'],
            answer: 'Consumer Decision-Making Process'
        },
        {
            question: 'What role does social influence play in consumer behavior?',
            options: ['It affects the pricing strategy of products', 'It determines the production capacity of companies', 'It shapes consumer preferences through peer pressure and social interactions', 'It regulates the advertising content'],
            answer: 'It shapes consumer preferences through peer pressure and social interactions'
        },
        {
            question: 'What is the primary goal of marketing research?',
            options: ['To develop new products', 'To create advertising campaigns', 'To gather and analyze data for informed decision-making', 'To improve employee satisfaction'],
            answer: 'To gather and analyze data for informed decision-making'
        },
        {
            question: 'Which of the following is a type of research design used in marketing research?',
            options: ['Descriptive research', 'Creative research', 'Technical research', 'Predictive research'],
            answer: 'Descriptive research'
        },
        {
            question: 'What data collection method involves observing consumers in their natural environment?',
            options: ['Survey', 'Focus group', 'Observation', 'Experiment'],
            answer: 'Observation'
        },
        {
            question: 'Which technique is commonly used to analyze qualitative data in marketing research?',
            options: ['Regression analysis', 'Content analysis', 'Factor analysis', 'Cluster analysis'],
            answer: 'Content analysis'
        },
        {
            question: 'How can marketing research insights be applied in business?',
            options: ['By enhancing product features based on consumer feedback', 'By reducing the marketing budget', 'By limiting market expansion', 'By ignoring competitor strategies'],
            answer: 'By enhancing product features based on consumer feedback'
        },
        {
            question: 'What is the primary goal of effective communication in a professional setting?',
            options: ['To impress colleagues', 'To share information clearly and accurately', 'To avoid misunderstandings', 'To assert authority'],
            answer: 'To share information clearly and accurately'
        },
        {
            question: 'Which of the following is an example of non-verbal communication?',
            options: ['Email correspondence', 'Hand gestures', 'Phone calls', 'Written reports'],
            answer: 'Hand gestures'
        },
        {
            question: 'What technique involves paraphrasing or summarizing the speaker’s message to ensure understanding?',
            options: ['Reflective listening', 'Active listening', 'Passive listening', 'Interruptive listening'],
            answer: 'Reflective listening'
        },
        {
            question: 'Which barrier to communication is characterized by preconceived notions and biases?',
            options: ['Physical barriers', 'Emotional barriers', 'Psychological barriers', 'Language barriers'],
            answer: 'Psychological barriers'
        },
        {
            question: 'Which of the following is an example of an active listening technique?',
            options: ['Nodding in agreement', 'Checking your phone', 'Interrupting to add your own thoughts', 'Planning your next response'],
            answer: 'Nodding in agreement'
        }
    ]);
    
    const [answers, setAnswers] = useState({});
    const [showProgress, setShowProgress] = useState(false);
    const [showVerification, setShowVerification] = useState(false);
    const [name, setName] = useState({ firstName: '', lastName: '' });
    const [score, setScore] = useState(null);
    const [quizRetaken, setQuizRetaken] = useState(false); // To track if the quiz has been retaken
    const navigate = useNavigate();

    const handleAnswerChange = (questionIndex, answer) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionIndex]: answer
        }));
    };

    const handleSubmit = () => {
        let correctAnswers = 0;
        questions.forEach((q, index) => {
            if (answers[index] === q.answer) {
                correctAnswers++;
            }
        });
        const calculatedScore = (correctAnswers / questions.length) * 100;
        setScore(calculatedScore);
        setShowProgress(true);
    };

    const handleRetake = () => {
        setAnswers({});
        setScore(null);
        setShowProgress(false);
        setQuizRetaken(true);
    };

    const handleVerify = () => {
        if (score >= 70) {
            setShowVerification(true);
        } else {
            handleRetake(); // Automatically retake the quiz if the score is below 70%
        }
    };

    const handleVerifyName = () => {
        // Redirect to Certificate Page with name and course information
        navigate('/certificate', { state: { firstName: name.firstName, lastName: name.lastName, courseTitle } });
    };

    return (
        <div className="quiz-page">
            <h1>{courseTitle} Quiz</h1>
            <Form>
                {questions.map((q, index) => (
                    <Form.Group key={index} className="mb-3">
                        <Form.Label>{index + 1}. {q.question}</Form.Label>
                        {q.options.map((option, optIndex) => (
                            <Form.Check
                                key={optIndex}
                                type="radio"
                                id={`q${index}opt${optIndex}`}
                                label={option}
                                value={option}
                                checked={answers[index] === option}
                                onChange={() => handleAnswerChange(index, option)}
                            />
                        ))}
                    </Form.Group>
                ))}
                <Button variant="primary" onClick={handleSubmit}>
                    Submit Quiz
                </Button>
            </Form>

            {/* Progress Modal */}
            <Modal show={showProgress} onHide={() => setShowProgress(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Quiz Progress</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Your score: {Math.round(score)}%</p>
                    <div style={{ width: '100%', height: '10px', backgroundColor: '#e0e0e0' }}>
                        <div style={{ width: `${score}%`, height: '100%', backgroundColor: score >= 70 ? '#4caf50' : '#f44336' }}></div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {score < 70 && !quizRetaken && <Button variant="primary" onClick={handleRetake}>Retake Quiz</Button>}
                    {score >= 70 && <Button variant="success" onClick={handleVerify}>Proceed to Verification</Button>}
                    {quizRetaken && <Button variant="secondary" onClick={() => window.location.reload()}>Start Over</Button>}
                </Modal.Footer>
            </Modal>

            {/* Name Verification Modal */}
            <Modal show={showVerification} onHide={() => setShowVerification(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Name Verification</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your first name"
                                value={name.firstName}
                                onChange={(e) => setName({ ...name, firstName: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your last name"
                                value={name.lastName}
                                onChange={(e) => setName({ ...name, lastName: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowVerification(false)}>Cancel</Button>
                    <Button variant="primary" onClick={handleVerifyName}>Verify</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default DigitalMarketingQuiz;
