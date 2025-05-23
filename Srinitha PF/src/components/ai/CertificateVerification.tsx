import React, { useState } from 'react';
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react';

interface CertificateVerificationProps {
  certId: string;
}

const CertificateVerification: React.FC<CertificateVerificationProps> = ({ certId }) => {
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'verifying' | 'verified' | 'failed'>('idle');
  
  const verifyCertificate = () => {
    setVerificationStatus('verifying');
    
    // Simulating blockchain verification
    setTimeout(() => {
      // In a real application, this would call a blockchain API or service
      // For demo, we'll assume all certificates are valid except one
      if (certId === 'cert-3') {
        setVerificationStatus('failed');
      } else {
        setVerificationStatus('verified');
      }
    }, 2000);
  };
  
  return (
    <div>
      {verificationStatus === 'idle' && (
        <button 
          onClick={verifyCertificate}
          className="text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors inline-flex items-center"
        >
          Verify Certificate
        </button>
      )}
      
      {verificationStatus === 'verifying' && (
        <div className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full inline-flex items-center">
          <RefreshCw size={14} className="mr-1 animate-spin" />
          <span>Verifying...</span>
        </div>
      )}
      
      {verificationStatus === 'verified' && (
        <div className="text-sm bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full inline-flex items-center">
          <CheckCircle size={14} className="mr-1" />
          <span>Verified on blockchain</span>
        </div>
      )}
      
      {verificationStatus === 'failed' && (
        <div className="text-sm bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full inline-flex items-center">
          <XCircle size={14} className="mr-1" />
          <span>Verification failed</span>
        </div>
      )}
    </div>
  );
};

export default CertificateVerification;