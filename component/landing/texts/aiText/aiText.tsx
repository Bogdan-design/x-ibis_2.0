import React from 'react';
import s from './aiText.module.scss'

export const AiTextCard = () => {
    return (
        <div style={{textAlign: 'start'}} className={s.aiTextCard}>
            <div>
                <ol>
                    <li>Needs and Opportunities Analysis:</li>
                </ol>
                <ul>
                    <li>Assessing current business processes and identifying the best AI solutions for your company.
                    </li>
                </ul>
            </div>
            <div>
                <ol>
                    <li value={'2'}>AI Solutions Implementation:</li>
                </ol>
                <ul>
                    <li>Integrating advanced AI tools and technologies into your work environment.</li>
                </ul>
            </div>
            <div>
                <ol>
                    <li value={'3'}>Employee Training:</li>
                </ol>
                <ul>
                    <li>Conducting training sessions and workshops to educate your staff on the basics and advanced
                        methods
                        of AI usage.
                    </li>
                </ul>
            </div>
            <div>
                <ol>
                    <li value={'4'}>Support and Maintenance:</li>
                </ol>
                <ul>
                    <li>Installation and configuration of business software (CRM, ERP, etc.).</li>
                </ul>
            </div>
        </div>
    );
};

