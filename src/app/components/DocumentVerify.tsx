import { ArrowLeft, Upload, Volume2, QrCode, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api, DocumentVerificationResponse } from '../services/api';

export default function DocumentVerify() {
  const navigate = useNavigate();
  const [uploaded, setUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<DocumentVerificationResponse | null>(null);

  const handleUpload = async () => {
    setLoading(true);
    setError(null);
    setUploaded(true);
    
    try {
      // Simulate file upload - in production this would be actual file upload
      const response = await api.verifyDocument({
        documentImage: 'mock-file-data',
        documentType: 'aadhaar',
        userId: 'user-123',
      });
      
      if (response.success && response.data) {
        setResult(response.data);
      } else {
        setError(response.error || 'Verification failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-blue-900 text-white px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={28} />
        </button>
        <div>
          <h1 className="text-xl">Document Verification</h1>
          <p className="text-sm text-blue-200">दस्तावेज़ सत्यापन</p>
        </div>
      </div>

      {/* Voice Button */}
      <div className="px-6 py-4 bg-white border-b">
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-3 shadow-md active:scale-95 transition-all">
          <Volume2 size={24} />
          <span>Voice Explain | आवाज़ में समझाएं</span>
        </button>
      </div>

      {/* Upload Section */}
      {!uploaded ? (
        <div className="p-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-dashed border-blue-300 text-center">
            <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Upload size={48} className="text-blue-600" />
            </div>
            <h2 className="text-xl mb-2">Upload Document</h2>
            <p className="text-gray-600 mb-1">दस्तावेज़ अपलोड करें</p>
            <p className="text-sm text-gray-500 mb-6">PDF, Image, or scan QR code</p>
            
            <button 
              onClick={handleUpload}
              disabled={loading}
              className="w-full bg-green-500 text-white py-4 rounded-xl mb-3 shadow-md active:scale-95 transition-all disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Upload File | फाइल अपलोड करें'}
            </button>
            
            <button className="w-full bg-blue-500 text-white py-4 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-2">
              <QrCode size={24} />
              Scan QR Code | QR कोड स्कैन करें
            </button>
          </div>
        </div>
      ) : (
        <div className="p-6">
          {loading && (
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-6 text-center">
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-lg">AI is verifying your document...</p>
              <p className="text-sm text-gray-600">AI आपके दस्तावेज़ को सत्यापित कर रहा है...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-lg">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {/* Trust Score Gauge */}
          {result && !loading && (
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
              <h3 className="text-center text-xl mb-6">Trust Score | विश्वास स्कोर</h3>
              
              {/* Circular Progress */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <svg className="transform -rotate-90 w-48 h-48">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="#e5e7eb"
                    strokeWidth="16"
                    fill="none"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke={result.status === 'verified' ? '#10b981' : result.status === 'suspicious' ? '#f59e0b' : '#ef4444'}
                    strokeWidth="16"
                    fill="none"
                    strokeDasharray={`${(result.trustScore / 100) * 553} 553`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-5xl">{result.trustScore}</span>
                  <span className="text-gray-500">/ 100</span>
                </div>
              </div>

              {/* Status */}
              <div className={`text-center p-6 rounded-xl ${
                result.status === 'verified' ? 'bg-green-100 text-green-800' :
                result.status === 'suspicious' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                <div className="flex items-center justify-center gap-3 mb-2">
                  {result.status === 'verified' && <CheckCircle size={32} />}
                  {result.status === 'suspicious' && <AlertTriangle size={32} />}
                  {result.status === 'fake' && <XCircle size={32} />}
                  <span className="text-2xl">
                    {result.status === 'verified' && 'VERIFIED'}
                    {result.status === 'suspicious' && 'SUSPICIOUS'}
                    {result.status === 'fake' && 'FAKE'}
                  </span>
                </div>
                <p>
                  {result.status === 'verified' && 'सत्यापित - विश्वसनीय दस्तावेज़'}
                  {result.status === 'suspicious' && 'संदिग्ध - सावधानी बरतें'}
                  {result.status === 'fake' && 'नकली - जोखिम भरा'}
                </p>
                
                {result.details.fraudIndicators.length > 0 && (
                  <div className="mt-4 text-left">
                    <p className="font-semibold mb-2">⚠ Fraud Indicators:</p>
                    <ul className="text-sm space-y-1">
                      {result.details.fraudIndicators.map((indicator, i) => (
                        <li key={i}>• {indicator}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Actions */}
          {result && !loading && (
            <>
              {result.certificateId && (
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl mb-3 shadow-md active:scale-95 transition-all flex items-center justify-center gap-2">
                  <QrCode size={24} />
                  Generate Certificate | प्रमाणपत्र बनाएं
                </button>
              )}
              
              <button 
                onClick={() => {
                  setUploaded(false);
                  setResult(null);
                  setError(null);
                }}
                className="w-full bg-gray-200 text-gray-800 py-4 rounded-xl shadow-md active:scale-95 transition-all"
              >
                Upload Another | दूसरा अपलोड करें
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}