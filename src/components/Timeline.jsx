import { personalData } from '../data/personalData';
import { motion } from 'framer-motion';

function Timeline() {
    return (
        <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>

            {personalData.professionalExperience.map((exp, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                    {/* Timeline dot */}
                    <div className="flex justify-center md:justify-start md:w-1/2 relative">
                        <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg transform -translate-x-1/2 z-10"></div>
                    </div>

                    {/* Content */}
                    <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{exp.period}</span>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-1">
                                {exp.role} at {exp.company}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{exp.location}</p>
                            <ul className="space-y-2">
                                {exp.achievements.map((ach, idx) => (
                                    <li key={idx} className="text-gray-700 dark:text-gray-400 flex">
                                        <span className="text-blue-500 mr-2">•</span>
                                        {ach}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

export default Timeline;