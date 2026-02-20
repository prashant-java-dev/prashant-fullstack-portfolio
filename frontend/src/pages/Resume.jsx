import React from 'react';
import { Download, Eye } from 'lucide-react';
import { resumeService } from '../services/api';

const Resume = () => {
  const viewResume = () => {
    resumeService.viewResume();
  };

  const downloadResume = () => {
    resumeService.downloadResume();
  };


  return (
    <section id="resume" className="py-24 bg-gray-50 dark:bg-zinc-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          My <span className="text-primary">Resume</span>
        </h2>

        <div className="max-w-3xl mx-auto bg-white dark:bg-black rounded-3xl p-8 md:p-12 shadow-lg dark:shadow-gray-800 text-center transition-colors">
          <div className="mb-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Download className="text-primary" size={40} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
              Ready to work together?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto text-sm md:text-base">
              Download my full resume to see my detailed experience, education, and certifications.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={viewResume}
              className="flex items-center justify-center w-full sm:w-auto py-3 px-6 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              <Eye className="mr-2" size={20} /> Preview Resume
            </button>
            <button
              onClick={downloadResume}
              className="flex items-center justify-center w-full sm:w-auto py-3 px-6 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              <Download className="mr-2" size={20} /> Download PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
