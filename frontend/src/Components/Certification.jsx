import React from 'react';

const Certification = () => {
    const certifications = [
        {
            id: 1,
            title: "Data Structures and Algorithms",
            issuer: "CipherSchools",
            date: "June 4, 2025 - July 15, 2025 (70 hours)",
            certId: "CSW2025-14801",
            pdfLink: "/cipher.pdf",
            gradient: "from-blue-400 to-purple-600",
            iconColor: "text-blue-500",
            buttonHover: "hover:from-blue-600 hover:to-purple-700"
        },
        {
            id: 2,
            title: "C++ Programming",
            issuer: "neoCollab",
            date: "Completed",
            certId: "Verify Certificate",
            pdfLink: "/c++.pdf",
            gradient: "from-orange-400 to-red-600",
            iconColor: "text-orange-500",
            buttonHover: "hover:from-orange-600 hover:to-red-700"
        },
        {
            id: 3,
            title: "Hardware and Operating System",
            issuer: "Coursera IBM",
            date: "Completed",
            certId: "Verify on Coursera",
            pdfLink: "/coursera.pdf",
            gradient: "from-indigo-400 to-blue-600",
            iconColor: "text-indigo-500",
            buttonHover: "hover:from-indigo-600 hover:to-blue-700"
        },
        {
            id: 4,
            title: "HackQuest Certification",
            issuer: "HackQuest",
            date: "Completed",
            certId: "Verify on HackQuest",
            pdfLink: "/hackquest.pdf",
            gradient: "from-green-400 to-teal-600",
            iconColor: "text-green-500",
            buttonHover: "hover:from-green-600 hover:to-teal-700"
        }
    ];

    return (
        <section id="certification" className="py-20 bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4">Certifications</h2>
                <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 mx-auto mb-16 rounded-full"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {certifications.map((cert) => (
                        <div key={cert.id} className="group w-full max-w-sm">
                            <div className={`bg-gradient-to-br ${cert.gradient} p-1 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 h-full flex flex-col`}>
                                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl h-full flex flex-col items-center gap-6">

                                    {/* Certificate Icon / Image Placeholder */}
                                    <div className="w-32 h-32 flex-shrink-0 bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center border-4 border-white dark:border-gray-700 shadow-inner overflow-hidden relative">
                                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 group-hover:scale-110 transition-transform duration-300">
                                            <svg className={`w-12 h-12 mb-2 ${cert.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                            </svg>
                                            <span className="text-xs font-semibold px-2 text-center text-gray-400">Placeholder</span>
                                        </div>
                                    </div>

                                    {/* Certificate Details */}
                                    <div className="text-center flex-1 flex flex-col">
                                        <h3 className={`text-xl font-bold mb-2 bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent`}>
                                            {cert.title}
                                        </h3>
                                        <h4 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-4">
                                            {cert.issuer}
                                        </h4>

                                        <div className="space-y-2 mb-6 text-sm text-gray-600 dark:text-gray-400 flex-1">
                                            <p className="flex items-center justify-center gap-2">
                                                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                </svg>
                                                {cert.date}
                                            </p>
                                            <p className="flex items-center justify-center gap-2">
                                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                                </svg>
                                                {cert.certId}
                                            </p>
                                        </div>

                                        {/* View Certificate Button */}
                                        <a href={cert.pdfLink} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r ${cert.gradient} text-white font-semibold rounded-lg shadow-md ${cert.buttonHover} transition-all duration-300 transform hover:scale-105 w-full`}>
                                            View Certificate
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                            </svg>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Certification;
