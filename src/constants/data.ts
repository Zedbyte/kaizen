export const userData = {
    name: 'Mark Santos',
    full_name: 'Mark Jerome Santos',
    age: 20,
    designation: 'Junior Software Engineer',
    province: 'Pampanga',
    country: 'Philippines',
    header: {
        title_bold: 'Full Stack',
        title: 'Software Engineer',
        subtitle_bold: 'Web and Mobile',
        subtitle: 'Technologies Specialist',
        role: ['full-stack software engineer', 'web developer', 'mobile app developer', 'desktop app developer'],
        image: '@/assets/profile-avatar-v2.png',
        image_caption: {
            field1: 'Cybersecurity',
            field2: 'Machine Learning',
        }
    },
    cta: {
        something: ["great!", "amazing!", "innovative!", "unique!", "new!", "exciting!"],
    }
}

export const aboutData = {
    header: 'I am a full-stack engineer specializing in developing solutions with JavaScript, Python, PHP, and frameworks like .NET, Django, and React.',
    introduction: "I focus on developing user-friendly, functional, and most importantly, profitable digital products inside the E-Commerce, SaaS, Workflows, and Web3 industry. I've helped startups and MSMEs grow and streamline their processes through software solutions. I've also built a community of over 200,000 developers sharing knowledge and mentorship. "
}

export const projectData = [
    {   
        id: 1,
        name: "Pharmasync",
        subtitle: "Inventory Management System",
        acronym: "IMS",
        description_full: "An inventory management system specifically designed for the pharmaceutical industry. It enables administrators to efficiently manage inventory, purchases, and orders while providing insightful analytics to support data-driven decision-making.",
        description_truncated: "An inventory management system specifically designed for the pharmaceutical industry.",
        link: "https://pharmasync.com",
        icon: [
            {   
                id: 1,
                src: '/assets/icons/dark/php.svg',
                name: 'PHP',
            },
            {
                id: 2,
                src: '/assets/icons/dark/mysql.svg',
                name: 'MySQL',
            },
            {
                id: 3,
                src: '/assets/icons/dark/tailwindcss.svg',
                name: 'TailwindCSS',
            },
            {
                id: 4,
                src: '/assets/icons/dark/twig.svg',
                name: 'Twig',
            }
        ],
        src: "/assets/projects/p1.svg"
    },
    {   
        id: 2,
        name: "Draco",
        subtitle: "File Repository System",
        acronym: "FRS",
        description_full: "A file repository system that allows users to securely store, access, and share files. It features a user-friendly interface, robust security measures, and seamless integration with third-party applications.",
        description_truncated: "A file repository system that allows users to securely store, access, and share files.",
        link: "https://draco.com",
        icon: [
            {   
                id: 1,
                src: '/assets/icons/dark/django.svg',
                name: 'Django',
            },
            {
                id: 2,
                src: '/assets/icons/dark/jinja.svg',
                name: 'Jinja2',
            },
            {
                id: 3,
                src: '/assets/icons/dark/bootstrap4.svg',
                name: 'Bootstrap',
            },
            {
                id: 4,
                src: '/assets/icons/dark/firebase.svg',
                name: 'Firebase',
            }
        ],
        src: "/assets/projects/p2.svg"
    },
    {
        id: 3,
        name: "Nexus",
        subtitle: "Blogging Platform",
        acronym: "Blogging Platform",
        description_full: "A blogging platform that enables teams to work together seamlessly. It features real-time messaging, file sharing, task management, and video conferencing capabilities to enhance productivity and communication.",
        description_truncated: "A blogging platform that enables teams to work together seamlessly.",
        link: "https://nexus.com",
        icon: [
            {   
                id: 1,
                src: '/assets/icons/dark/mysql.svg',
                name: 'MySQL',
            },
            {
                id: 2,
                src: '/assets/icons/dark/expressjs.svg',
                name: 'Express JS',
            },
            {
                id: 3,
                src: '/assets/icons/dark/reactjs.svg',
                name: 'ReactJS',
            },
            {
                id: 4,
                src: '/assets/icons/dark/nodejs.svg',
                name: 'Node JS',
            }
        ],
        src: "/assets/projects/p3.svg"
    },
    {
        id: 4,
        name: "Trustbank",
        subtitle: "Banking Application",
        acronym: "Banking Application",
        description_full: "A Banking Application that enables teams to work together seamlessly. It features real-time messaging, file sharing, task management, and video conferencing capabilities to enhance productivity and communication.",
        description_truncated: "A Banking Application that enables teams to work together seamlessly.",
        link: "https://trustbank.com",
                icon: [
            {   
                id: 1,
                src: '/assets/icons/dark/csharp.svg',
                name: 'C#',
            },
            {
                id: 2,
                src: '/assets/icons/dark/dotnet.svg',
                name: '.NET Core',
            },
            {
                id: 3,
                src: '/assets/icons/dark/winforms.png',
                name: 'WinForms',
            },
            {
                id: 4,
                src: '/assets/icons/dark/vonage.svg',
                name: 'Vonage API',
            }
        ],
        src: "/assets/projects/p4.svg"
    }
]

export const experienceData = [
    {
        date: "2026",
        title: "BS Information Technology",
        subtitle: "Angeles University Foundation",
        description: "Graduated with a degree in Information Technology major in Web and Mobile Technologies.",
    },
    {
        date: "2023",
        title: "Started Freelancing",
        subtitle: "Commission-based",
        description: "Started freelancing as a software developer taking projects from clients.",
    },
    {
        date: "2022",
        title: "TVL - ICT",
        subtitle: "St. Augustine Academy of Pampanga",
        description: "Graduated in SHS with a specialization in Information and Communications Technology (ICT) with High Honors.",
    },
    {
        date: "2022",
        title: "Started Coding",
        subtitle: "Self-taught",
        description: "Started learning how to code and build software.",
    },
]

export const certificatesData = [
    {
        provider: "Microsoft",
        name: "Microsoft Certified: Azure Fundamentals",
        date: "June 29, 2023",
        description: "Learn the fundamentals of Azure, cloud services, and how to manage them.",
        path: "/assets/certificates/Microsoft-Azure-Fundamentals.png",
    },
    {
        provider: "Harvard",
        name: "CS50x: Introduction to Computer Science",
        date: "2024",
        description: "Learn the fundamentals of computer science and programming.",
        path: "/assets/certificates/CS50x.png",
    },
    {
        provider: "Udemy",
        name: "JavaScript and PHP Programming",
        date: "June 27, 2024",
        description: "Learn how to build web applications using JavaScript and PHP.",
        path: "/assets/certificates/UC-aa382a86-f133-4cf0-b9eb-fcf339097d9e.jpg",
    },
    {
        provider: "Udemy",
        name: "Python and Django Framework",
        date: "June 27, 2024",
        description: "Learn how to build web applications using Python and Django.",
        path: "/assets/certificates/UC-aa382a86-f133-4cf0-b9eb-fcf339097d9e.jpg",
    },
];