import { ArrowLeft, QrCode, Download, Share2, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const certificates = [
  {
    id: 1,
    title: 'Aadhaar Verification',
    titleHi: 'आधार सत्यापन',
    date: '15 Dec 2024',
    status: 'Verified',
    issuer: 'UIDAI',
  },
  {
    id: 2,
    title: 'Bank Account Verified',
    titleHi: 'बैंक खाता सत्यापित',
    date: '10 Dec 2024',
    status: 'Verified',
    issuer: 'GramRakshak',
  },
  {
    id: 3,
    title: 'Land Record Verified',
    titleHi: 'भूमि रिकॉर्ड सत्यापित',
    date: '5 Dec 2024',
    status: 'Verified',
    issuer: 'Revenue Dept.',
  },
];

export default function Certificates() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-blue-900 text-white px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={28} />
        </button>
        <div>
          <h1 className="text-xl">My QR Certificates</h1>
          <p className="text-sm text-blue-200">मेरे QR प्रमाणपत्र</p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="p-6 bg-green-50 border-b-2 border-green-200">
        <p className="text-center">
          <span className="inline-flex items-center gap-2 text-green-800">
            <CheckCircle size={20} />
            All certificates are blockchain-verified
          </span>
        </p>
        <p className="text-center text-sm text-green-700 mt-1">
          सभी प्रमाणपत्र ब्लॉकचेन-सत्यापित हैं
        </p>
      </div>

      {/* Certificates List */}
      <div className="p-6 space-y-4">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-200"
          >
            {/* Certificate Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.titleHi}</p>
                <p className="text-xs text-gray-500 mt-2">
                  Issued by: {cert.issuer} • {cert.date}
                </p>
              </div>
              <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <CheckCircle size={16} />
                {cert.status}
              </div>
            </div>

            {/* QR Code Placeholder */}
            <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center mb-4 border-2 border-dashed border-gray-300">
              <div className="text-center">
                <QrCode size={120} className="text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Certificate QR Code</p>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 bg-blue-500 text-white py-3 rounded-xl shadow-md active:scale-95 transition-all">
                <Download size={20} />
                Download
              </button>
              <button className="flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-xl shadow-md active:scale-95 transition-all">
                <Share2 size={20} />
                Share
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Help Text */}
      <div className="p-6 text-center text-sm text-gray-600">
        <p>Tap QR code to scan and verify</p>
        <p className="text-xs mt-1">स्कैन और सत्यापित करने के लिए QR कोड टैप करें</p>
      </div>
    </div>
  );
}
