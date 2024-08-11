import React from 'react';
import s from './devopsText.module.scss'

export const DevopsCardsText = () => {
    return (
        <div className={s.devopsCardsText} style={{textAlign: 'start'}}>
            <ol>
                <li>Process Audit and Optimization:</li>
            </ol>
            <ul>
                <li>Analysis of current development and deployment processes.</li>
                <li>Evaluation of used tools and identification of bottlenecks.</li>
                <li>Recommendations for optimization and implementation of DevOps best practices.</li>
            </ul>
            <ol>
                <li value={'2'}>Transition from Monolith to Microservices:</li>
            </ol>
            <ul>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <li>Joint analysis of your application's structure.</li>
                <li>Examination of interactions with databases, file systems, and integrations.</li>
                <li>Development of an optimal plan for transitioning from a monolithic to a microservices architecture.
                </li>
            </ul>
            <ol>
                <li value={'3'}>CI/CD Automation:</li>
            </ol>
            <ul>
                <li>Implementation of flexible and convenient code development and delivery processes (CI/CD).</li>
                <li>Automation of code analysis and unit tests.</li>
                <li>Building Docker images, deploying test environments, performing migrations, and populating databases.</li>
                <li>Conducting integration tests and deployment.</li>
            </ul>
            <ol>
                <li value={'4'}>Monitoring and Logging:</li>
            </ol>
            <ul>
                <li>Setting up logging and monitoring of key infrastructure and application metrics.</li>
                <li>Tracking business metrics to identify potential issues.</li>
                <li>Detecting situations where servers are technically working correctly, but issues arise that impact business processes.</li>
            </ul>

        </div>

    );
};

export const DevopsText = () => {
    return (
        <div className={s.devopsText}>
            <p>Why Choose Us?</p>
            <p>Deep Expertise: Our team has significant experience in DevOps and CI/CD, allowing us to offer
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                solutions tailored to your business's unique needs.</p>
            <p>Personalized Approach: We consider the specific features of your company and develop
                customized solutions to achieve maximum efficiency.</p>
            <p>Continuous Support: We provide round-the-clock support and are ready
                to respond promptly to any inquiries or issues.
            </p>
        </div>
    );
};