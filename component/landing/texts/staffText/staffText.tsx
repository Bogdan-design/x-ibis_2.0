import React from 'react';
import s from './staffText.module.scss'
import {Typography} from "@/component/ui/typography/typography";

export const StaffText = () => {
    return (
        <div className={s.staffTextContainer}>
            <Typography variant={'title'}>Allow us to find the right IT specialist for you:</Typography>
            <br/>

            <div>
                <Typography as={'span'}>Developer:</Typography>Expertise in popular programming languages (Python, Java,
                JavaScript, C#, Ruby,
                etc.).
            </div>
            <div>

                <Typography as={'span'}>Service Desk:</Typography> Qualified customer support at all levels.
            </div>
            <div>
                <Typography as={'span'}>Application Support:</Typography> Support and maintenance of your applications
                and
                systems.
            </div>
            <div>
                <Typography as={'span'}>DevOps:</Typography> Optimization of development and deployment processes using
                modern tools (Docker,
                Kubernetes,
                Jenkins, Ansible, Terraform, etc.).
            </div>
            <div>
                <Typography as={'span'}>Web Designer:</Typography> Creative and responsive web design tailored to your
                needs.
            </div>

        </div>
    );
};

export const StaffCardsTextBasic=()=>{
    return(
        <ul className={s.staffCardsText}>
            <li>3 days a week</li>
            <li>no substitutions</li>
        </ul>
    )
}

export const StaffCardsTextAdvanced=()=>{
    return(
        <ul className={s.staffCardsText}>
            <li>5 days a week</li>
            <li>substitute during leave or sick leave (L4)</li>
        </ul>
    )
}

export const StaffCardsTextProfessional=()=>{
    return(
        <ul className={s.staffCardsText}>
            <li>4 specialists</li>
            <li>5 days a week</li>
            <li>without substitutes</li>
            <li>managerial supervision</li>
        </ul>
    )
}