import React from 'react';

export const BuildTextBasic = () => {
    return (
        <div style={{textAlign: 'start'}}>
            <ol>
                <li>Consulting and Audit of Current Infrastructure:</li>
            </ol>
            <ul>
                <li>Assessment of the current state of IT infrastructure.</li>
                <li>Recommendations for improvement and optimization.</li>
            </ul>
            <ol>
                <li value={'2'}>Network Equipment and Configuration:</li>
            </ol>
            <ul>
                <li>Supply and installation of basic network devices (routers, switches, access points).</li>
                <li>Configuration of local area network (LAN).</li>
                <li>Ensuring basic network security (firewalls, VPN).</li>
            </ul>
            <ol>
                <li value={'3'}>Server Equipment and Virtualization:</li>
            </ol>
            <ul>
                <li>Supply and installation of server equipment.</li>
                <li>Implementation of a basic virtualization platform (e.g., VMware, Hyper-V).</li>
                <li>Configuration of file servers and storage systems.</li>
            </ul>
            <ol>
                <li value={'4'}>Software and Licensing:</li>
            </ol>
            <ul>
                <li>Installation of operating systems (Windows, Linux, MacOS).</li>
                <li>Licensing of basic software (office applications, antivirus solutions).</li>
                <li>Installation and configuration of business software (CRM, ERP, etc.).</li>
            </ul>
            <ol>
                <li value={'5'}>Cloud Services:</li>
            </ol>
            <ul>
                <li>Implementation and configuration of basic cloud services (e.g., Microsoft 365, Google Workspace,
                    AWS, Azure).
                </li>
                <li>Organizing data backup to the cloud.</li>
            </ul>
            <ol>
                <li value={'6'}>Management and Monitoring Systems:</li>
            </ol>
            <ul>
                <li>Implementation of infrastructure monitoring systems (e.g., Zabbix, Nagios).
                </li>
                <li>Configuration of basic management and administration systems.</li>
            </ul>
            <ol>
                <li value={'7'}>Cybersecurity:</li>
            </ol>
            <ul>
                <li>Installation and configuration of basic protection tools (antivirus, anti-spam filters).
                </li>
                <li>Conducting initial training on cybersecurity basics for employees.</li>
            </ul>
            <ol>
                <li value={'8'}>Support and Maintenance:</li>
            </ol>
            <ul>
                <li>Organization of a technical support service (Help Desk).
                </li>
                <li>Provision of basic technical support and maintenance (service contracts, SLA).</li>
            </ul>
            <ol>
                <li value={'9'}>Documentation and Training:</li>
            </ol>
            <ul>
                <li>Preparation of technical documentation for installed equipment and software.
                </li>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <li>Conducting basic training for the customer's IT staff.</li>
            </ul>
        </div>

    );
};
export const BuildTextAdvanced = () => {
    return (
        <div style={{textAlign: 'start'}}>
            <ol>
                <li>Extended Consulting and Audit:</li>
            </ol>
            <ul>
                <li>Detailed audit of IT infrastructure.</li>
                <li>Development of a modernization plan and implementation of new technologies.</li>
            </ul>
            <ol>
                <li value={'2'}>Extended Network Equipment and Configuration:       </li>
            </ol>
            <ul>
                <li>Supply and installation of advanced network devices (high-performance routers, managed switches).</li>
                <li>Configuration of network segmentation and VLAN.</li>
            </ul>
            <ol>
                <li value={'3'}>
                    Extended Virtualization and Server Equipment:</li>
            </ol>
            <ul>
                <li>Implementation of cluster solutions for virtualization.</li>
                <li>Configuration of disaster recovery and high availability systems.</li>
            </ul>
            <ol>
                <li value={'4'}>Software and Integration:</li>
            </ol>
            <ul>
                <li>Installation and configuration of specialized business software (CRM, ERP).</li>
                <li>Integration of existing systems with new solutions.</li>
            </ul>
            <ol>
                <li value={'5'}>Cloud Services and Hybrid Solutions:</li>
            </ol>
            <ul>
                <li>Configuration of hybrid cloud solutions (combination of on-premises and cloud resources).
                </li>
                <li>Implementation of cloud services for storage and processing of big data.</li>
            </ul>
            <ol>
                <li value={'6'}>Advanced Management and Monitoring Systems:</li>
            </ol>
            <ul>
                <li>Implementation of configuration management solutions (e.g., Ansible, Puppet).
                </li>
                <li>Configuration of proactive monitoring and analytics systems.</li>
            </ul>
            <ol>
                <li value={'7'}>Enhanced Cybersecurity:</li>
            </ol>
            <ul>
                <li>Implementation of intrusion detection and prevention systems (IDS/IPS).
                </li>
                <li>Conducting regular penetration tests and security audits.</li>
            </ul>
            <ol>
                <li value={'8'}>Premium Support and Maintenance:</li>
            </ol>
            <ul>
                <li>Extended technical support with a higher SLA level.
                </li>
                <li>Remote monitoring and management services.</li>
            </ul>
            <ol>
                <li value={'9'}>Advanced Documentation and Training:</li>
            </ol>
            <ul>
                <li>Preparation of detailed technical documentation and manuals.
                </li>
                <li>Conducting specialized training and seminars for employees.</li>
            </ul>
        </div>

    );
};
export const BuildTextProfessional = () => {
    return (
        <div style={{textAlign: 'start'}}>
            <ol>
                <li>Deep Consulting and Strategic Planning:</li>
            </ol>
            <ul>
                <li>Development of long-term IT strategy and digital transformation plan.</li>
                <li>Conducting research and forecasting technological trends.</li>
            </ul>
            <ol>
                <li value={'2'}>High-Performance Network Equipment and Configuration:</li>
            </ol>
            <ul>
                <li>Implementation of high-performance network solutions (10GbE, 40GbE).</li>
                <li>Configuration of advanced network technologies (SD-WAN, MPLS).</li>
            </ul>
            <ol>
                <li value={'3'}>
                    Advanced Virtualization and Cloud Infrastructure:</li>
            </ol>
            <ul>
                <li>Implementation of enterprise cloud solutions (Private Cloud, Hybrid Cloud).</li>
                <li>Configuration of containerization and orchestration (Docker, Kubernetes).</li>
            </ul>
            <ol>
                <li value={'4'}>Comprehensive Software and Integration:</li>
            </ol>
            <ul>
                <li>Implementation and configuration of enterprise systems (BI, Big Data).</li>
                <li>Integration of various systems and platforms to improve business processes.</li>
            </ul>
            <ol>
                <li value={'5'}>Corporate-Level Cloud Solutions:</li>
            </ol>
            <ul>
                <li>Implementation and management of corporate cloud platforms.
                </li>
                <li>Development and deployment of scalable cloud applications.</li>
            </ul>
            <ol>
                <li value={'6'}>Professional Management and Monitoring Systems:</li>
            </ol>
            <ul>
                <li>Implementation of comprehensive IT management systems (ITSM, ITIL).
                </li>
                <li>Configuration of automated solutions for infrastructure management and monitoring.</li>
            </ul>
            <ol>
                <li value={'7'}>Advanced Cybersecurity:</li>
            </ol>
            <ul>
                <li>Implementation of comprehensive information security solutions (SIEM, SOC).
                </li>
                <li>Conducting specialized cybersecurity training for IT staff.</li>
            </ul>
            <ol>
                <li value={'8'}>VIP Support and Maintenance:</li>
            </ol>
            <ul>
                <li>Personalized VIP support with dedicated engineers.
                </li>
                <li>Continuous monitoring and proactive maintenance.</li>
            </ul>
            <ol>
                <li value={'9'}>Comprehensive Documentation and Training:</li>
            </ol>
            <ul>
                <li>Development of detailed technical documentation and training materials.
                </li>
                <li>Organization of corporate academies and certification programs for employees.</li>
            </ul>
        </div>

    );
};

