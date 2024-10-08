import {createElement} from "react";
import Build from '@/assest/icon/build'
import Virtual from '@/assest/icon/virtual'
import Storage from '@/assest/icon/storage'
import Support from '@/assest/icon/support'
import DevOps from '@/assest/icon/devops'
import Staff from '@/assest/icon/staff'
import Ai from '@/assest/icon/ai'
import Design from '@/assest/icon/design'
import {
    StaffCardsTextAdvanced,
    StaffCardsTextBasic,
    StaffCardsTextProfessional,
    StaffText
} from "@/component/landing/texts/staffText/staffText";
import {AiTextCard} from "@/component/landing/texts/aiText/aiText";
import {
    BuildTextAdvanced,
    BuildTextBasic,
    BuildTextProfessional
} from "@/component/landing/texts/buildText/buildTextBasic";
import {StorageText} from "@/component/landing/texts/storageText/storageText";
import {
    SupportTextAdvanced,
    SupportTextBasic,
    SupportTextProfessional
} from "@/component/landing/texts/supportText/supportText";
import {DevopsCardsText} from "@/component/landing/texts/devopsText/devopsText";
import {
    VirtualTextAdvanced,
    VirtualTextBasic,
    VirtualTextProfessional
} from "@/component/landing/texts/virtualText/virtual.text";
import {ADS, Branding, PrintMaterials, SocialMedia, WebDesign} from "@/component/landing/texts/designText/designText";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "What we do",
        hash: "#services",
    },
    {
        name: "Offers",
        hash: "landing",
    },
    {
        name: "About us",
        hash: "#about",
    },
    {
        name: "Contact us",
        hash: "#contact",
    },
] as const


export const whatWeDoData = [
    {
        title: 'IT Audit',
        description: 'We enable businesses to fully grasp and enhance their information systems.',
        link: '/audit',
        video:'/video/doc.mp4'
    },
    {
        title: 'Security',
        description: 'Focused on safeguarding your business, we offer complex cyber security solutions.',
        link: '/security',
        video:'/video/cloud.mp4'
    },
    {
        title: 'Ensuring Reliability infra',
        description: 'Our specialty lies in creating a dependable IT framework for efficient operations.',
        link: '/ensuring',
        video:'/video/server.mp4'
    },
    {
        title: 'IT Administration',
        description: 'Our professional IT administration keeps your tech running smoothly.',
        link: '/administration',
        video:'/video/keeping.mp4'
    },
    {
        title: 'Modern Solutions',
        description: 'Specializing in next-level business solutions, we optimize efficiency.',
        link: '/solution',
        video:'/video/screen.mp4'
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

export const landingPagesData = [
    {
        pageTitle: 'Build Infrastructure',
        pageDescription: 'Lorem ipsum dolor sit consectetur adipiscing',
        options:
            [
                {
                    title: 'Basic',
                    description: createElement(BuildTextBasic),
                    price:'6,500 Euros',
                    volume:'Employees: Up to 11'
                },
                {
                    title: 'Advanced',
                    description:createElement(BuildTextAdvanced),
                    price:'10,000 Euros',
                    volume:'Employees: Up to 30'
                },
                {
                    title: 'Professional',
                    description:createElement(BuildTextProfessional),
                    price:'30,000 Euros',
                    volume:'Employees: Up to 100'
                },

            ]as const
    },
    {
        pageTitle: 'Virtual Machine',
        pageDescription: 'Lorem ipsum dolor sit consectetur adipiscing',
        options:
            [
                {
                    title: 'Basic',
                    description: createElement(VirtualTextBasic),
                    price:'4.50 Euros',
                    volume:'/month'
                },
                {
                    title: 'Advanced',
                    description: createElement(VirtualTextAdvanced),
                    price:'79.00 Euros',
                    volume:'/month'
                },
                {
                    title: 'Professional',
                    description: createElement(VirtualTextProfessional),
                    price:'550.00 Euros',
                    volume:'/month'
                },
            ]as const
    },
    {
        pageTitle: 'Storage S3',
        pageDescription: 'Lorem ipsum dolor sit, consectetur adipiscing',
        options:
            [
                {
                    title:'',
                    description:createElement(StorageText),
                    price:'',
                    volume:''
                },
            ]as const
    },
    {
        pageTitle: 'IT Support Services',
        pageDescription: 'Lorem ipsum dolor sit, consectetur adipiscing',
        options:
            [
                {
                    title: 'Basic',
                    description: createElement(SupportTextBasic),
                    price:'2,500 Euros',
                    volume:'Employees: Up to 11'
                },
                {
                    title: 'Advanced',
                    description: createElement(SupportTextAdvanced),
                    price:'4,500 Euros',
                    volume:'Employees: Up to 50'
                },
                {
                    title: 'Professional',
                    description: createElement(SupportTextProfessional),
                    price:'from 8,000 Euros',
                    volume:'Employees: Up to 130'
                },
            ]as const
    },
    {
        pageTitle: 'DevOps and CI/CD Services',
        pageDescription: 'Enhancing Development and Deployment Efficiency',
        options:
            [
                {
                    title: 'Cloud Technologies',
                    description:createElement(DevopsCardsText),
                    price:'',
                    volume:''
                },
            ] as const
    },
    {
        pageTitle: 'IT Staff Leasing',
        pageDescription: createElement(StaffText),
        options:
            [
                {
                    title: 'Basic',
                    description: createElement(StaffCardsTextBasic),
                    price:'2,500 Euros',
                    volume:'/month'
                },
                {
                    title: 'Advanced',
                    description: createElement(StaffCardsTextAdvanced),
                    price:'4,500 Euros',
                    volume:'/month'
                },
                {
                    title: 'Professional',
                    description: createElement(StaffCardsTextProfessional),
                    price:'from 8,000 Euros',
                    volume:'/month'
                },
            ] as const
    },
    {
        pageTitle: 'AI Implementation and Training Services',
        pageDescription: 'We offer comprehensive services for implementing and training your employees in the use of artificial intelligence (AI) technologies.',
        options:
            [
                {
                    title: '',
                    description: createElement(AiTextCard),
                    price:'from 2,500 Euros',
                    volume:''
                },
            ] as const
    },
    {
        pageTitle: 'Graphic Design Services',
        pageDescription: 'We provide expert design services that help your brand stand out, from online presence to impactful promotional materials.',
        options:
            [
                {
                    title: 'Social Media Content Creation',
                    description: createElement(SocialMedia),
                    price:'from 1,500 Euros',
                    volume:'/month'
                },
                {
                    title: 'Print Materials',
                    description: createElement(PrintMaterials),
                    price:'from 300 Euros',
                    volume:''
                },
                {
                    title: 'Branding',
                    description: createElement(Branding),
                    price:'from 1,000 Euros',
                    volume:''
                },
                {
                    title: 'ADS',
                    description: createElement(ADS),
                    price:'from 300 Euros',
                    volume:''
                },
                {
                    title: 'Web Design',
                    description: createElement(WebDesign),
                    price:'from 3,000 Euros',
                    volume:''
                },
            ] as const
    },

] as const

export const landingPageDateOptions = [
    {
        title: 'Build Infrastructure',
        icon: createElement(Build),
        page:'build'
    },
    {
        title: 'Virtual Machine',
        icon: createElement(Virtual),
        page:'virtual'
    },
    {
        title: 'Storage S3',
        icon: createElement(Storage),
        page:'storage'
    },
    {
        title: 'IT Support Services',
        icon: createElement(Support),
        page:'support'
    },
    {
        title: 'DevOps and CI/CD Services',
        icon: createElement(DevOps),
        page:'devops'
    },
    {
        title: 'IT Staff Leasing',
        icon: createElement(Staff),
        page:'staff'
    },
    {
        title: 'AI Implementation and Training Services',
        icon: createElement(Ai),
        page:'ai'
    },
    {
        title: 'Graphic Design Services',
        icon: createElement(Design),
        page:'design'
    },

]as const