import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function NotFound() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">404 - Page Not Found</h2>
                <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">Oops! This page doesn't exist.</p>
                <Link to="/" className="text-blue-500 hover:underline">Back to Home</Link>
            </motion.div>
        </section>
    );
}

export default NotFound;