import { ArrowLeft, MessageSquare, Volume2, CheckCircle, XCircle, AlertTriangle, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { api, MessageCheckResponse } from '../services/api';

export default function MessageChecker() {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<MessageCheckResponse | null>(null);

  const checkMessage = async () => {
    if (!message.trim()) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.checkMessage({
        messageText: message,
        messageType: 'whatsapp',
      });
      
      if (response.success && response.data) {
        setResult(response.data);
      } else {
        setError(response.error || 'Failed to check message');
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
          <h1 className="text-xl">Message Checker</h1>
          <p className="text-sm text-blue-200">संदेश जांचकर्ता</p>
        </div>
      </div>

      {/* Voice Button */}
      <div className="px-6 py-4 bg-white border-b">
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-3 shadow-md active:scale-95 transition-all">
          <Volume2 size={24} />
          <span>Voice Explain | आवाज़ में समझाएं</span>
        </button>
      </div>

      {/* Input Section */}
      <div className="p-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <label className="block mb-3">
            <span className="text-lg">Paste Message</span>
            <span className="block text-sm text-gray-500">संदेश यहां पेस्ट करें</span>
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Paste WhatsApp or SMS message here..."
            className="w-full h-40 p-4 border-2 border-gray-300 rounded-xl resize-none text-lg focus:border-blue-500 focus:outline-none"
            disabled={loading}
          />
          
          <button 
            onClick={checkMessage}
            disabled={!message.trim() || loading}
            className="w-full mt-4 bg-green-500 text-white py-4 rounded-xl shadow-md active:scale-95 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <MessageSquare size={24} />
            <span>{loading ? 'Checking...' : 'Check Message | जांचें'}</span>
          </button>
        </div>

        {loading && (
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-6 text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-lg">AI is analyzing message...</p>
            <p className="text-sm text-gray-600">AI संदेश का विश्लेषण कर रहा है...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-lg">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        {/* Result */}
        {result && !loading && (
          <div className="space-y-4">
            <div className={`rounded-2xl p-8 shadow-lg ${
              result.verdict === 'REAL' ? 'bg-green-50 border-4 border-green-500' :
              result.verdict === 'SUSPICIOUS' ? 'bg-yellow-50 border-4 border-yellow-500' :
              'bg-red-50 border-4 border-red-500'
            }`}>
              <div className="flex flex-col items-center text-center">
                {result.verdict === 'REAL' && <CheckCircle size={64} className="text-green-600 mb-4" />}
                {result.verdict === 'SUSPICIOUS' && <AlertTriangle size={64} className="text-yellow-600 mb-4" />}
                {result.verdict === 'FAKE' && <XCircle size={64} className="text-red-600 mb-4" />}
                
                <h3 className={`text-3xl mb-2 ${
                  result.verdict === 'REAL' ? 'text-green-800' :
                  result.verdict === 'SUSPICIOUS' ? 'text-yellow-800' :
                  'text-red-800'
                }`}>
                  {result.verdict}
                </h3>
                
                <p className="text-lg mb-2">
                  Confidence: {result.confidence}%
                </p>
                
                <p className="text-lg mb-4">
                  {result.verdict === 'REAL' && 'यह संदेश सुरक्षित लगता है'}
                  {result.verdict === 'SUSPICIOUS' && 'सावधान रहें - संदिग्ध'}
                  {result.verdict === 'FAKE' && 'धोखाधड़ी - साझा न करें'}
                </p>

                <div className="bg-white rounded-xl p-4 w-full text-left">
                  <h4 className="mb-2">AI Analysis:</h4>
                  <ul className="text-sm space-y-1 text-gray-700">
                    {result.reasons.map((reason, i) => (
                      <li key={i}>• {reason}</li>
                    ))}
                  </ul>
                  
                  {result.relatedScheme && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                      <p className="text-xs text-gray-600">Related to:</p>
                      <p className="font-semibold">{result.relatedScheme}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Voice Explanation */}
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center gap-2">
              <Volume2 size={24} />
              Hear Explanation | समझाना सुनें
            </button>

            {/* Official Link */}
            {result.officialLink && (
              <a 
                href={result.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 text-white py-4 rounded-xl shadow-md active:scale-95 transition-all text-center"
              >
                <div className="flex items-center justify-center gap-2">
                  <ExternalLink size={24} />
                  Visit Official Link | आधिकारिक लिंक
                </div>
              </a>
            )}

            <button 
              onClick={() => {
                setMessage('');
                setResult(null);
                setError(null);
              }}
              className="w-full bg-gray-200 text-gray-800 py-4 rounded-xl shadow-md active:scale-95 transition-all"
            >
              Check Another | दूसरा जांचें
            </button>
          </div>
        )}
      </div>
    </div>
  );
}