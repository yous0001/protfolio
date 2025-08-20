import { Link } from 'react-router-dom';
import { personalData } from '../data/personalData';
import Timeline from '../components/Timeline';
import { motion } from 'framer-motion';
import { Component } from 'react';
import { ChevronDown, ExternalLink, Mail } from 'lucide-react';

// Error Boundary Class
class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <h1 className="text-center text-red-500 py-20">Something went wrong. Please try again later.</h1>;
        }
        return this.props.children;
    }
}

// Section wrapper component for consistent animations
const SectionWrapper = ({ children, id, className = '' }) => (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
        </div>
    </section>
);

// Section title component
const SectionTitle = ({ children }) => (
    <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
    >
        {children}
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
    </motion.h2>
);

function MainPage() {
    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <ErrorBoundary>
            <main className="pt-16">
                {/* Hero */}
                <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-900 dark:to-gray-800 z-0"></div>
                    <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5 z-0"></div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center relative z-10 px-4 sm:px-6 lg:px-8"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative inline-block mb-8"
                        >
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse opacity-75"></div>
                            <img
                                src={personalData.profileImage}
                                alt={`${personalData.name}'s profile`}
                                className="w-48 h-48 rounded-full mx-auto object-cover shadow-xl relative z-10 border-4 border-white dark:border-gray-900"
                            />
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white"
                        >
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                {personalData.name}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                        >
                            {personalData.title}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <button
                                onClick={() => scrollToSection('#contact')}
                                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition-all transform hover:-translate-y-1"
                            >
                                Get In Touch
                            </button>
                            <button
                                onClick={() => scrollToSection('#projects')}
                                className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                            >
                                View Projects
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="mt-16"
                        >
                            <button
                                onClick={() => scrollToSection('#about')}
                                className="animate-bounce p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300"
                                aria-label="Scroll down"
                            >
                                <ChevronDown size={24} />
                            </button>
                        </motion.div>
                    </motion.div>
                </section>

                {/* About */}
                <SectionWrapper id="about" className="bg-white dark:bg-gray-800">
                    <SectionTitle>About Me</SectionTitle>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 text-center"
                    >
                        <p className="mb-6">{personalData.profile}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">2+</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Years Experience</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">10+</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Technologies</p>
                            </div>
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">3.76</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">GPA</p>
                            </div>
                        </div>
                    </motion.div>
                </SectionWrapper>

                {/* Education */}
                <SectionWrapper id="education" className="bg-gray-50 dark:bg-gray-900">
                    <SectionTitle>Education</SectionTitle>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {personalData.education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-1">{edu.institution}, {edu.location}</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">Period: {edu.period}</p>
                                <div className="flex justify-between items-center">
                                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded">
                                        GPA: {edu.gpa}
                                    </span>
                                    <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-xs font-medium px-2.5 py-0.5 rounded">
                                        {edu.grade}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>

                {/* Experience */}
                <SectionWrapper id="experience" className="bg-white dark:bg-gray-800">
                    <SectionTitle>Professional Experience</SectionTitle>
                    <Timeline />
                </SectionWrapper>

                {/* Skills */}
                <SectionWrapper id="skills" className="bg-gray-50 dark:bg-gray-900">
                    <SectionTitle>Skills</SectionTitle>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.05,
                                },
                            },
                        }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
                    >
                        {personalData.skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all"
                            >
                                <img
                                    src={skill.icon}
                                    alt={`${skill.name} icon`}
                                    className="w-10 h-10 mb-2 object-contain"
                                />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </SectionWrapper>

                {/* Projects */}
                <SectionWrapper id="projects" className="bg-white dark:bg-gray-800">
                    <SectionTitle>Projects</SectionTitle>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {personalData.projects.map((project) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5 }}
                                className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all border border-gray-200 dark:border-gray-700"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={`${project.images[0]}.jpg`}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <Link
                                            to={`/project/${project.id}`}
                                            className="text-white flex items-center text-sm font-medium"
                                        >
                                            View Details <ExternalLink size={16} className="ml-1" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        {project.period}
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-400 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <Link
                                        to={`/project/${project.id}`}
                                        className="inline-flex items-center mt-4 text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        Read more
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>

                {/* Languages */}
                <SectionWrapper id="languages" className="bg-gray-50 dark:bg-gray-900">
                    <SectionTitle>Languages</SectionTitle>
                    <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
                        {personalData.languages.map((lang, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
                            >
                                <div className="text-3xl mb-2">
                                    {lang.language === 'English' ? '🇺🇸' : '🇪🇬'}
                                </div>
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    {lang.language}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {lang.proficiency}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>

                {/* Courses */}
                <SectionWrapper id="courses" className="bg-white dark:bg-gray-800">
                    <SectionTitle>Courses & Certifications</SectionTitle>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {personalData.courses.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl border-l-4 border-blue-500"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {course.name}
                                </h3>
                                <p className="text-gray-700 dark:text-gray-300 mb-1">
                                    {course.institution}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">
                                    Completed: {course.period}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </SectionWrapper>

                {/* Contact */}
                <SectionWrapper id="contact" className="bg-gray-50 dark:bg-gray-900">
                    <SectionTitle>Get In Touch</SectionTitle>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                                <Mail size={24} className="text-blue-500 mb-2" />
                                <h3 className="font-medium text-gray-900 dark:text-white">Email</h3>
                                <a href={`mailto:${personalData.email}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {personalData.email}
                                </a>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mb-2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                <h3 className="font-medium text-gray-900 dark:text-white">Phone</h3>
                                <a href={`tel:${personalData.phone}`} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                    {personalData.phone}
                                </a>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500 mb-2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <h3 className="font-medium text-gray-900 dark:text-white">Location</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-center">{personalData.location}</p>
                            </div>
                        </div>

                        <motion.form
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all shadow-md hover:shadow-lg"
                            >
                                Send Message
                            </button>
                        </motion.form>
                    </motion.div>
                </SectionWrapper>
            </main>
        </ErrorBoundary>
    );
}

export default MainPage;