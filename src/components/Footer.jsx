import { Github, Linkedin, Mail } from 'lucide-react';
import { personalData } from '../data/personalData';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
            <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                        <a
                            href={personalData.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/20 dark:hover:text-blue-400 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href={personalData.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={`mailto:${personalData.email}`}
                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        &copy; {currentYear} Yousef Emad. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;