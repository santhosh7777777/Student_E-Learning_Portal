import html2canvas from 'html2canvas';
import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { default as signedPicAdvisor, default as signedPicCEO } from '../assets/images/certification icon.png'; // Adjust path to CEO's signed picture
import { default as logo, default as watermark } from '../assets/images/logo.png'; // Adjust path to your logo image

const CertificatePage = () => {
    const { state } = useLocation();
    const { firstName, lastName, courseTitle } = state || {};
    const certificateRef = useRef();

    // Format the current date
    const currentDate = new Date().toLocaleDateString();

    // Function to download the certificate as an image
    const downloadCertificate = () => {
        if (certificateRef.current) {
            html2canvas(certificateRef.current, { useCORS: true }).then(canvas => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'certificate.png';
                link.click();
            });
        }
    };

    return (
        <div style={styles.container}>
            <div ref={certificateRef} style={styles.certificate}>
                <div style={styles.header}>
                    <img src={logo} alt="Company Logo" style={styles.logo} />
                    <div style={styles.companyInfo}>
                        <h1 style={styles.companyName}>SKILL4GE</h1>
                        <p style={styles.motto}>Learn Without Limits</p>
                    </div>
                </div>
                <div style={styles.content}>
                    <h2 style={styles.title}>Certificate of Completion</h2>
                    <p style={styles.body}>This is to certify that</p>
                    <h3 style={styles.name}>{firstName} {lastName}</h3>
                    <p style={styles.body}>has successfully completed the course</p>
                    <h3 style={styles.courseTitle}>{courseTitle}</h3>
                    <p style={styles.body}>on {currentDate}</p>
                </div>
                <div style={styles.signatureSection}>
                    <div style={styles.signatureLeft}>
                        <img src={signedPicCEO} alt="CEO Signature" style={styles.signedPic} />
                        <p style={styles.signatureTitle}>CEO of Company</p>
                    </div>
                    <div style={styles.signatureRight}>
                        <img src={signedPicAdvisor} alt="Advisor Signature" style={styles.signedPic} />
                        <p style={styles.signatureTitle}>Course Advisor</p>
                    </div>
                </div>
                <img src={watermark} alt="Watermark" style={styles.watermark} />
            </div>
            <button onClick={downloadCertificate} style={styles.downloadButton}>Download Certificate</button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    certificate: {
        position: 'relative',
        width: '900px',
        height: '650px',
        border: '5px solid #00adef',
        padding: '20px',
        backgroundColor: 'white',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    },
    logo: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        width: '100px',
        marginTop: '-150px'
    },
    companyInfo: {
        textAlign: 'center',
        marginTop: '-150px', // Adjust the margin if needed
    },
    companyName: {
        fontSize: '40px',
        margin: 0,
        color: '#000000',
    },
    motto: {
        fontSize: '20px',
        margin: 0,
        color: '#000000',
    },
    content: {
        textAlign: 'center',
        marginTop: '-10px', // Move content slightly upwards
        position: 'relative',
        zIndex: 1,
    },
    title: {
        fontSize: '28px',
        margin: '20px 0',
    },
    name: {
        fontSize: '32px',
        fontWeight: 'bold',
        margin: '10px 0',
    },
    courseTitle: {
        fontSize: '24px',
        fontWeight: 'bold',
        margin: '10px 0',
    },
    body: {
        fontSize: '18px',
        margin: '10px 0',
    },
    signatureSection: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '50px',
        width: '100%',
        position: 'absolute',
        bottom: '20px',
        padding: '0 40px',
    },
    signatureLeft: {
        textAlign: 'left',
        flex: 1,
    },
    signatureRight: {
        textAlign: 'right',
        flex: 1,
    },
    signedPic: {
        width: '150px',
        height: '50px',
    },
    signatureTitle: {
        margin: '10px 0',
        fontSize: '18px',
    },
    watermark: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        opacity: 0.2,
        zIndex: 0,
        objectFit: 'contain',
    },
    downloadButton: {
        marginTop: '20px',
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#00adef',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        alignSelf: 'center',
        width: 'fit-content',
    },
};

export default CertificatePage;
