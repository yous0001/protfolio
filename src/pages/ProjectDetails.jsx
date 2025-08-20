import { useParams, Link } from 'react-router-dom';
import { personalData } from '../data/personalData';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import NotFound from './NotFound';

function ProjectDetail() {
    const { id } = useParams();
    const project = personalData.projects.find(p => p.id === parseInt(id));

    if (!project) {
        return <NotFound />;
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
        >
            <div className="max-w-4xl mx-auto">
                <Link
                    to="/"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
                >
                    <ArrowLeft size={20} className="mr-2" /> Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
                >
                    <img
                        src={`${project.images[0]}.jpg`}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                    />

                    <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                {project.title}
                            </h1>
                            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
                                {project.period}
                            </span>
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            {project.description}
                        </p>

                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h2>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies?.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tech}
                                    </span>
                                )) || (
                                        <>
                                            <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                                                React
                                            </span>
                                            <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                                                Node.js
                                            </span>
                                            <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm">
                                                MongoDB
                                            </span>
                                        </>
                                    )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {project.images.slice(1).map((image, index) => (
                                <motion.img
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                    src={`${image}.jpg`}
                                    alt={`${project.title} screenshot ${index + 1}`}
                                    className="rounded-lg shadow-md w-full h-48 object-cover"
                                />
                            ))}
                        </div>

                        <div className="flex gap-4">
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    <ExternalLink size={16} className="mr-2" /> Live Demo
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                                >
                                    <Github size={16} className="mr-2" /> View Code
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default ProjectDetail;