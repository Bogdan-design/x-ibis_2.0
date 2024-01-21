import Around from '@/assest/icon/360-degrees'
import Bubble from '@/assest/icon/bubble'
import ShieldTick from '@/assest/icon/sheld-tick'
import Modules from '@/assest/icon/modules'
import Rocket from '@/assest/icon/rocket'
import {createElement} from "react";


export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "Services",
        hash: "#services",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const

export const whatWeDoData = [
    {
        title: 'IT Audit',
        description: 'We enable businesses to fully grasp and enhance their information systems.',
        icon: createElement(Bubble),
        link: '/audit'
    },
    {
        title: 'Security',
        description: 'Focused on safeguarding your business, we offer complex cyber security solutions.',
        icon: createElement(ShieldTick),
        link: '/security'
    },
    {
        title: 'Ensuring Reliability infra',
        description: 'Our specialty lies in creating a dependable IT framework for efficient operations.',
        icon: createElement(Modules),
        link: '/ensuring'
    },
    {
        title: 'IT Administration',
        description: 'Our professional IT administration keeps your tech running smoothly.',
        icon: createElement(Rocket),
        link: '/administration'
    },
    {
        title: 'Modern Solutions',
        description: 'Specializing in next-level business solutions, we optimize efficiency.',
        icon: createElement(Around),
        link: '/solution'
    },
] as const

export const pagesData = [
    {
        pageTitle: 'IT Audit',
        pageDescription: 'We enable businesses to fully grasp and enhance their information systems.',
        options:
            [
                {
                    title: 'Infrastructure Analysis',
                    description: 'Assess the current state of the IT infrastructure, including hardware, software, network topology, and cloud resources.'
                },
                {
                    title: 'Security and Vulnerabilities',
                    description: 'Conduct a vulnerability scan, as well as an analysis of security systems including authentication, authorization, encryption, and data protection.'
                },
                {
                    title: 'Regulatory Compliance',
                    description: 'Ensure that the company is compliant with relevant industry regulations and data security standards (e.g. GDPR, HIPAA) depending on the business area.'
                },
                {
                    title: 'Backup and Recovery',
                    description: 'Evaluate data backup strategies and recovery plans to ensure systems can be recovered in the event of failures.'
                },
                {
                    title: 'Network Infrastructure',
                    description: 'Analyze network architecture, performance, segmentation, traffic management and security.'
                },
                {
                    title: 'Processes and Performance',
                    description: 'Examine business processes and their alignment with IT systems, identify bottlenecks and suggest improvements to optimize performance.'
                },
                {
                    title: 'Resource Management',
                    description: 'Analyze the use of IT resources such as servers, data storage, software licenses to optimize costs.'
                },

            ]as const
    },
    {
        pageTitle: 'Security',
        pageDescription: 'We offer comprehensive solutions to detect, prevent and respond to cyber threats. ',
        options:
            [
                {
                    title: 'Identification and Authentication',
                    description: 'Implement identification and two-factor authentication mechanisms to ensure that only authorized users access systems.'
                },
                {
                    title: 'Access Rights Management',
                    description: 'Limit users access rights by providing the minimum necessary privileges according to their roles and responsibilities.'
                },
                {
                    title: 'Data Encryption',
                    description: 'LApply encryption to protect data at rest and in transit, ensuring privacy even in the event of leaks.'
                },
                {
                    title: 'Monitoring and Threat Detection',
                    description: 'Implement monitoring systems that analyze activity in real time and detect anomalous behaviors that indicate possible threats.'
                },
                {
                    title: 'Antivirus and Antimalware Protection',
                    description: 'Use up-to-date antivirus and antimalware software to detect and neutralize malware.'
                },
                {
                    title: 'User Training and Awareness',
                    description: 'Provide regular cybersecurity training to employees to reduce the risks of social engineering.'
                },
                {
                    title: 'Incident Planning and Response',
                    description: 'Develop a plan to respond to security incidents, including procedures for notification, recovery, and timely communication to stakeholders.'
                },
                {
                    title: 'Audit and Review of Systems',
                    description: 'Conduct regular security audits to identify vulnerabilities, verify compliance, and make improvements to the security strategy.'
                },

            ]as const
    },
    {
        pageTitle: 'Ensuring Reliability infrastructure',
        pageDescription: 'Our specialty lies in creating a dependable IT framework for efficient operations.',
        options:
            [
                {
                    title: 'Analysis and Planning',
                    description: 'Start with a detailed analysis of business needs and goals to develop an infrastructure plan that meets current and future needs.'
                },
                {
                    title: 'Technology Selection',
                    description: 'Determine optimal technologies and solutions, including servers, data storage, networking equipment, cloud platforms, etc.'
                },
                {
                    title: 'Redundancy and Resiliency',
                    description: 'Develop data and component redundancy strategies to ensure business continuity and rapid recovery from failures.'
                },
                {
                    title: 'Network Security',
                    description: 'Implement security measures such as firewalls, intrusion detection systems (IDS) and intrusion prevention systems (IPS) to minimize the risk of cyber attacks.'
                },
                {
                    title: 'Encryption and Authentication',
                    description: 'Apply encryption of data at rest and in transit, as well as two-factor authentication to improve access security.'
                },
                {
                    title: 'Monitoring and Management',
                    description: 'Implement monitoring systems that constantly monitor the state of the infrastructure, alert you to emerging problems and assist in operational support.'
                },
                {
                    title: 'Updates and Patches',
                    description: 'Regularly update operating systems, applications, and vulnerable components to minimize the risk of vulnerabilities and attacks.'
                },
                {
                    title: 'Scalability',
                    description: 'Design your infrastructure to scale as your business grows to avoid future limitations.'
                },
                {
                    title: 'Backup and Recovery',
                    description: 'Regularly back up data and test recovery procedures to minimize losses in the event of failures.'
                },

            ]as const
    },
    {
        pageTitle: 'IT Administration',
        pageDescription: 'Our professional IT administration keeps your tech running smoothly.',
        options:
            [
                {
                    title: 'Installation and Configuration of Equipment',
                    description: 'Perform installation and configuration of servers, computers, network devices and other equipment according to business requirements.'
                },
                {
                    title: 'System Maintenance',
                    description: 'Continuous monitoring of system health, performing regular maintenance including upgrades, optimization and troubleshooting.'
                },
                {
                    title: 'Operating System Administration',
                    description: 'Managing operating systems, installing patches and updates, ensuring stable and secure operation.'
                },
                {
                    title: 'User and Resource Management',
                    description: 'Create and manage user accounts, assign access rights, monitor resource utilization.'
                },
                {
                    title: 'Backup and Recovery',
                    description: 'Develop and implement data backup strategies and test recovery procedures.'
                },
                {
                    title: 'Technical Support',
                    description: 'Providing technical support to employees on hardware, software and networking issues through various communication channels.'
                },
                {
                    title: 'Security Monitoring',
                    description: 'Implement security measures including anti-virus programs, firewalls, intrusion detection systems and log analysis.'
                },
                {
                    title: 'Planning and Advice',
                    description: 'Providing consultation and advice on the strategic development of IT infrastructure, as well as planning for growth and expansion.'
                },
            ]as const
    },
    {
        pageTitle: 'Modern Solutions',
        pageDescription: 'Specializing in next-level business solutions, we optimize efficiency.',
        options:
            [
                {
                    title: 'Cloud Technologies',
                    description: 'Leverage cloud platforms for flexibility and scalability, allowing you to quickly deploy and scale applications and resources.'
                },
                {
                    title: 'Artificial Intelligence and Data Analytics',
                    description: 'Apply AI and data analytics to gain valuable insights from large volumes of information, automate processes, and predict trends.'
                },
                {
                    title: 'Internet of Things (IoT)',
                    description: 'Integrate devices and sensors to collect real-time data to optimize production, manage resources, and improve [services].'
                },
                {
                    title: 'Cybersecurity and Data Protection',
                    description: 'Implement advanced solutions to ensure data and network security, including threat detection and attack prevention mechanisms.'
                },
                {
                    title: 'Process Automation:',
                    description: 'Automate repetitive tasks and business processes using robotic process automation (RPA) to improve efficiency and reduce the risk of errors.'
                },
                {
                    title: 'Flexible Working Models',
                    description: 'Implement remote work solutions, providing flexibility for employees and increasing productivity.'
                },
                {
                    title: 'Mobile Applications and User Experience',
                    description: 'Develop mobile applications and user interfaces that provide ease of use and personalized experiences for customers.'
                },
            ] as const
    },

] as const