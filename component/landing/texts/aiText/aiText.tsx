import React from 'react';
import s from './aiText.module.scss'
import {Typography} from "@/component/ui/typography/typography";

export const AiTextCard = () => {
    return (
        <div style={{textAlign: 'start'}} className={s.aiTextCard}>
            <div>
                <ol>
                    <Typography as={'li'} variant={'title'}>Needs and Opportunities Analysis:</Typography>
                </ol>
                <ul>
                    <li>Assessing current business processes and identifying the best AI solutions for your company.
                    </li>
                </ul>
            </div>
            <div>
                <ol>
                    <Typography as={'li'} variant={'title'} value={'2'}>AI Solutions Implementation:</Typography>
                </ol>
                <ul>
                    <li>Integrating advanced AI tools and technologies into your work environment.</li>
                </ul>
            </div>
            <div>
                <ol>
                    <Typography as={'li'} variant={'title'} value={'3'}>Employee Training:</Typography>
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
                    <Typography as={'li'} variant={'title'} value={'4'}>Support and Maintenance:</Typography>
                </ol>
                <ul>
                    <li>Installation and configuration of business software (CRM, ERP, etc.).</li>
                </ul>
            </div>
        </div>
    );
};

