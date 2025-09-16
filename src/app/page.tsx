import Image from 'next/image';
import Headshot from '../../public/headshot.jpg';
import { Icon } from '@iconify/react';

const skillsets = [
    { type: 'Client', skills: ['Typescript', 'React', 'HTML', 'CSS'] },
    { type: 'Server', skills: ['PHP', 'Laravel', 'Node', 'Redis'] },
    { type: 'Database', skills: ['MySQL', 'Snowflake'] },
    { type: 'Misc', skills: ['AWS', 'Terraform', 'Git', 'Atlassian Suite'] },
];

const links = [
    {
        name: 'View Projects',
        icon: null,
        link: '#projects',
    },
    {
        name: 'Github',
        icon: 'skill-icons:github-dark',
        link: 'https://github.com/AustinRichburg',
    },
    {
        name: 'LinkedIn',
        icon: 'skill-icons:linkedin',
        link: 'https://www.linkedin.com/in/austin-richburg/',
    },
];

export default function Home() {
    return (
        <div className="space-y-24">
            <section id="hero" className="text-center md:text-left">
                <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight dark:text-white">Specializing in scalable web applications, data infrastructure, and team leadership</h1>

                <div className="mt-6 flex">
                    <div className="flex" style={{ flexDirection: 'column', justifyContent: 'center' }}>
                        <p className="text-lg font-bold dark:text-white">Austin Richburg</p>
                        <p className="text-sm text-gray-500">Senior Software Engineer</p>

                        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl">I architect and build mission-critical systems that process massive datasets and power enterprise-level applications.</p>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl">
                            With 6+ years of experience scaling from startup environments to staff-level leadership, I specialize in transforming complex business challenges into elegant, high-performance solutions that drive measurable results.
                        </p>
                        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl">I lead cross-functional teams and mentor developers while delivering systems that handle millions of requests and billions of data points.</p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            {links.map(({ name, icon, link }) => (
                                <a key={name} href={link} target="_blank" className="inline-flex items-center rounded-md px-4 py-2 bg-foreground text-background text-sm font-medium hover:opacity-90 bg-white border border-black/[.5]">
                                    {icon ? <Icon icon={icon} height={30} /> : name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Image src={Headshot} alt="Headshot for Austin Richburg" style={{ borderRadius: '50%' }} height={300} />
                    </div>
                </div>
            </section>

            <section id="experience" className="space-y-6">
                <h2 className="text-xl font-semibold tracking-tight dark:text-gray-300">Experience</h2>
                <ul className="space-y-4">
                    <li className="rounded-lg border border-black/[.08] dark:border-white/[.12] p-4" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <p className="text-lg font-bold dark:text-white">Mobilefuse</p>

                        <div>
                            <div className="flex items-baseline justify-between gap-4">
                                <div>
                                    <p className="font-medium dark:text-gray-300">Staff Software Engineer</p>
                                </div>
                                <span className="text-xs text-gray-500">2025 — Present</span>
                            </div>
                            <div className="flex items-baseline justify-between gap-4">
                                <div>
                                    <p className="font-medium dark:text-gray-300">Senior Software Engineer</p>
                                </div>
                                <span className="text-xs text-gray-500">2023 — 2025</span>
                            </div>
                            <div className="flex items-baseline justify-between gap-4">
                                <div>
                                    <p className="font-medium dark:text-gray-300">Software Engineer</p>
                                </div>
                                <span className="text-xs text-gray-500">2020 — 2023</span>
                            </div>
                        </div>

                        <p className="text-sm text-gray-500">Platform • React, Laravel, Snowflake, MySQL, AWS</p>

                        <ul className="mt-2 list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                            <li>Spearhead technical architecture and development of Core platform, serving as the central hub for enterprise data services and client-facing analytics</li>
                            <li>Drive strategic initiatives including automated ad operations, web advertising expansion, and proprietary attribution systems that deliver actionable insights to major brands</li>
                            <li>Mentor engineering talent and establish development standards while maintaining technical excellence across high-traffic production systems</li>
                        </ul>
                    </li>

                    <li className="rounded-lg border border-black/[.08] dark:border-white/[.12] p-4">
                        <p className="text-lg font-bold dark:text-white">C3 Metrics</p>

                        <div className="flex items-baseline justify-between gap-4">
                            <div>
                                <p className="font-medium dark:text-gray-300">Software Engineer</p>
                            </div>
                            <span className="text-xs text-gray-500">2019 — 2020</span>
                        </div>

                        <p className="text-sm text-gray-500">Product • AngularJS, PHP, MySQL, D3</p>

                        <ul className="mt-2 list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                            <li>Developed client-facing analytics dashboards that transformed complex marketing data into actionable business intelligence for enterprise customers</li>
                            <li>Optimized high-volume data processing pipelines and attribution systems serving nationally recognized brands with sensitive campaign data</li>
                            <li>Modernized legacy codebases while maintaining system reliability and introducing scalable solutions for growing client demands</li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section id="projects" className="space-y-6" style={{ display: 'none' }}>
                <h2 className="text-xl font-semibold tracking-tight">Projects</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                    {[
                        {
                            name: 'Open Source Toolkit',
                            desc: 'CLI and UI components for faster app bootstrapping.',
                            stack: ['TypeScript', 'Next.js', 'Turborepo'],
                            link: '#',
                        },
                        {
                            name: 'Observability Starter',
                            desc: 'Plug-and-play tracing + metrics for Node services.',
                            stack: ['OpenTelemetry', 'Grafana', 'AWS'],
                            link: '#',
                        },
                    ].map((p) => (
                        <a key={p.name} href={p.link} className="group rounded-lg border border-black/[.08] dark:border-white/[.12] p-4 hover:bg-black/[.02] dark:hover:bg-white/[.03] transition-colors">
                            <div className="flex items-start justify-between gap-2">
                                <div>
                                    <p className="font-medium group-hover:underline underline-offset-4">{p.name}</p>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{p.desc}</p>
                                </div>
                            </div>

                            <div className="mt-3 flex flex-wrap gap-2">
                                {p.stack.map((s) => (
                                    <span key={s} className="text-xs rounded-full border border-black/[.08] dark:border-white/[.12] px-2 py-0.5 text-gray-600 dark:text-gray-300">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            <section id="skills" className="space-y-3">
                <h2 className="text-xl font-semibold tracking-tight dark:text-gray-300">Skills</h2>
                {skillsets.map((skillset) => (
                    <div key={skillset.type}>
                        <p className="dark:text-gray-300">{skillset.type}</p>
                        <div>
                            {skillset.skills.map((skill) => (
                                <span key={skill} className="text-xs rounded-full border border-black/[.08] dark:border-white/[.25] px-2 py-0.5 text-gray-600 dark:text-gray-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
