import React from 'react';
import s from './supportText.module.scss'
import {Typography} from "@/component/ui/typography/typography";

export const SupportText = () => {
    return (
        <div className={s.supportsText}>
            <Typography variant={'title'}>Replacement and Repair of Equipment:</Typography>


            <div>
                <li>Ensuring timely replacement and repair of faulty equipment.</li>
                <li>Diagnosing issues and promptly resolving them.</li>
            </div>
            <Typography variant={'title'}>Operating Systems Support:</Typography>

            <div>
                <li>Windows: Installation, configuration, and support of various Windows versions.</li>
                <li>Linux: Support for various Linux distributions, including Ubuntu, CentOS, Red Hat.</li>
                <li>MacOS: Maintenance and support for Apple devices.</li>
            </div>
            <Typography variant={'title'}>Hardware Support:</Typography>

            <div>
                <li>Servers: Installation, configuration, and maintenance of servers.</li>
                <li>Printers: Diagnosis and repair of printers, managing print jobs.</li>
                <li>Video Monitoring: Setup and maintenance of video surveillance systems.</li>
                <li>Video Conference Rooms: Installation and support of video conferencing equipment.</li>
                <li>Telephony: Configuration and support of corporate telephony systems.</li>
            </div>
            <Typography variant={'title'}>Cloud Storage:</Typography>
            <div>
                <li>AWS: Management and support of Amazon Web Services.</li>
                <li>Microsoft Azure: Setup and support of solutions on Microsoft Azure platform.</li>
                <li>Google Cloud Platform: Implementation and maintenance of Google Cloud services.</li>
            </div>
            <Typography variant={'title'}>Office Software Support:</Typography>
            <div>
                <li>MS Office: Installation and support of Microsoft Office applications.</li>
                <li>Office 365: Management of subscriptions and support for Office 365 cloud services.</li>
            </div>
            <Typography variant={'title'}>CRM and ERP Systems:</Typography>
            <div>
                <li>Implementation, configuration, and support of Customer Relationship Management (CRM) and Enterprise
                    Resource</li>
                <li>Planning (ERP) systems.</li>
            </div>
            <Typography variant={'title'}>Security Solutions:</Typography>
            <div>
                <li>Antivirus Software: Installation and updating of antivirus programs.</li>
                <li>Firewalls: Configuration and management of firewalls to protect against external threats.</li>
                <li>VPN: Setup of Virtual Private Networks for secure remote access.</li>
            </div>
            <Typography variant={'title'}>Network Protocols and Services:</Typography>
            <div>
                <li>TCP/IP: Configuration and management of protocols for data transmission.</li>
                <li> DNS: Domain name management and DNS server setup.</li>
                <li>DHCP: Automatic IP address distribution via DHCP servers.</li>
                <li>Network Monitoring and Management: Use of tools for performance monitoring and network
                    management.
                </li>
            </div>
        </div>
    );
};

export const SupportTextBasic = () => {
    return (
        <div style={{textAlign: 'start', display: 'flex', gap: '15px'}}>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <li>Support from 9 a.m. to 5 p.m</li>
                <li>Call response time — up to 30 seconds</li>
                <li>Email response time — up to 15 minutes</li>
                <li>Handling of typical IT requests</li>
                <li>Configuration of approved software</li>
                <li>Security</li>
            </ul>

        </div>

    );
};
export const SupportTextAdvanced = () => {
    return (
        <div style={{textAlign: 'start'}}>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <li>Support from 9 a.m. to 5 p.m + weekend</li>
                <li>Call response time — up to 30 seconds</li>
                <li>Email response time — up to 15 minutes</li>
                <li>Handling of atypical IT requests</li>
                <li>Configuration and installation of approved software</li>
                <li>Monitoring of important services</li>
                <li>Security</li>
            </ul>

        </div>

    );
};
export const SupportTextProfessional = () => {
    return (
        <div style={{textAlign: 'start'}}>
            <ul style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <li>Support 24/7 + weekend</li>
                <li>Call response time — up to 30 seconds</li>
                <li>Email response time — up to 15 minutes</li>
                <li>Maintenance of non-typical IT requests</li>
                <li>Configuration and installation of approved software</li>
                <li>Round-the-clock monitoring of important services and applications</li>
                <li>High security</li>
            </ul>

        </div>

    );
};

