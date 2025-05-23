import React from 'react';
import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import CertificateVerification from '../ai/CertificateVerification';

const Certifications: React.FC = () => {
  const certifications = [
    {
      id: 'cert-1',
      title: 'Machine Learning Specialization',
      issuer: 'Stanford University',
      date: 'March 2023',
      image: 'https://images.pexels.com/photos/7473439/pexels-photo-7473439.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      credential: 'ML-SPEC-123456'
    },
    {
      id: 'cert-2',
      title: 'Deep Learning Professional Certificate',
      issuer: 'DeepLearning.AI',
      date: 'January 2023',
      image: 'https://images.pexels.com/photos/8553862/pexels-photo-8553862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      credential: 'DL-CERT-789012'
    },
    {
      id: 'cert-3',
      title: 'Natural Language Processing Nanodegree',
      issuer: 'Udacity',
      date: 'November 2022',
      image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      credential: 'NLP-ND-345678'
    },
    {
      id: 'cert-4',
      title: 'AWS Certified Machine Learning Specialty',
      issuer: 'Amazon Web Services',
      date: 'September 2022',
      image: 'https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      credential: 'AWS-ML-901234'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-700 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Professional certifications and credentials that validate my expertise in artificial intelligence,
            machine learning, and data science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold">{cert.title}</h3>
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0 ml-2" />
                  </div>
                  <div className="flex items-center mb-3">
                    <Award size={16} className="text-blue-500 mr-2" />
                    <p className="text-gray-700 dark:text-gray-300 text-sm">{cert.issuer}</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    Issued: {cert.date}
                  </p>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <span className="font-medium">Credential ID:</span> {cert.credential}
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href="#"
                      className="text-blue-500 inline-flex items-center text-sm hover:underline"
                    >
                      <span className="mr-1">View Certificate</span>
                      <ExternalLink size={14} />
                    </a>
                    <CertificateVerification certId={cert.id} />
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

export default Certifications;