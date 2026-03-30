import React from 'react';

const Education = () => {
    const educations = [
        {
            id: 1,
            degree: "Matriculation",
            institution: "DAV PGCL",
            score: "72.6%",
            year: "2020 - 2021",
            location: "Kaimur, Bihar"
        },
        {
            id: 2,
            degree: "Intermediate",
            institution: "BSEB PATNA",
            score: "66.8%",
            year: "2021 - 2023",
            location: "Patna, Bihar"
        },
        {
            id: 3,
            degree: "B.Tech (Current)",
            institution: "Lovely Professional University",
            score: "6.71 CGPA",
            year: "Ongoing",
            location: "Jalandhar, Punjab"
        }
    ];

    return (
        <section id="education" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-black dark:to-gray-950 text-black dark:text-white transition-colors duration-300 relative overflow-hidden">

            {/* Decorative background blobs */}
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-300/20 dark:bg-blue-900/20 rounded-full blur-3xl pointer-events-none z-0"></div>
            <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-300/20 dark:bg-purple-900/20 rounded-full blur-3xl pointer-events-none z-0"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-200/10 dark:bg-pink-900/10 rounded-full blur-3xl pointer-events-none z-0"></div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">

                {/* Header styling to match screenshot */}
                <div className="flex flex-col mb-16 md:pl-4">
                    <div className="flex items-center gap-4 mb-2">
                        {/* The white dot next to Education with pulse animation */}
                        <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse hidden md:block shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                            Education
                        </h2>
                    </div>
                    <p className="text-lg text-gray-600 dark:text-gray-400 md:pl-7">
                        My academic background
                    </p>
                </div>

                {/* Education Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:pl-4">
                    {educations.map((edu) => (
                        <div
                            key={edu.id}
                            className="group relative bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#1a1a1a] p-8 rounded-2xl shadow-sm transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl dark:hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] cursor-pointer overflow-hidden flex flex-col justify-between"
                        >
                            {/* Interactive Hover Gradient inside Card */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-white/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                            {/* Animated Top Border Line */}
                            <div className="absolute top-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-500"></div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {edu.degree}
                                </h3>
                                <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-8 pb-4 border-b border-gray-100 dark:border-gray-800/80 transition-colors duration-300 group-hover:border-blue-500/30">
                                    {edu.institution}
                                </h4>
                            </div>

                            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 relative z-10">
                                <p className="transform transition-transform duration-300 group-hover:translate-x-2">
                                    <span className="font-semibold text-gray-800 dark:text-gray-300">Score:</span> {edu.score}
                                </p>
                                <p className="transform transition-transform duration-300 group-hover:translate-x-2 delay-75">
                                    <span className="font-semibold text-gray-800 dark:text-gray-300">Year:</span> {edu.year}
                                </p>
                                <p className="transform transition-transform duration-300 group-hover:translate-x-2 delay-150">
                                    <span className="font-semibold text-gray-800 dark:text-gray-300">Location:</span> {edu.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Education;
