import { ArrowLeft, MessageSquare, Copy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const examples = [
  {
    type: 'VERIFY',
    message: 'VERIFY Congratulations! You won lottery',
    response: 'FAKE - This is a scam message',
  },
  {
    type: 'CHECK',
    message: 'CHECK PM-KISAN payment status',
    response: 'REAL - Official scheme information',
  },
];

export default function SMSMode() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-blue-900 text-white px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={28} />
        </button>
        <div>
          <h1 className="text-xl">Offline SMS Mode</h1>
          <p className="text-sm text-blue-200">ऑफ़लाइन SMS मोड</p>
        </div>
      </div>

      {/* Instructions */}
      <div className="p-6 space-y-6">
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <MessageSquare size={40} className="text-blue-600" />
          </div>
          
          <h2 className="text-2xl mb-2">No Internet? No Problem!</h2>
          <p className="text-gray-600 mb-6">इंटरनेट नहीं? कोई समस्या नहीं!</p>

          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-2xl p-8 mb-6">
            <p className="text-sm mb-3">Send SMS to:</p>
            <div className="flex items-center justify-center gap-3">
              <p className="text-3xl tracking-wider">9876543210</p>
              <button className="p-2 bg-white/20 rounded-lg active:scale-95 transition-all">
                <Copy size={20} />
              </button>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 text-left">
            <h3 className="text-lg mb-3">SMS Format | SMS प्रारूप:</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <code className="text-blue-600">VERIFY &lt;message&gt;</code>
                <p className="text-sm text-gray-600 mt-1">To check if message is real or fake</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <code className="text-blue-600">CHECK &lt;scheme name&gt;</code>
                <p className="text-sm text-gray-600 mt-1">To verify government scheme</p>
              </div>
            </div>
          </div>
        </div>

        {/* Examples */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl mb-4">Examples | उदाहरण</h3>
          <div className="space-y-4">
            {examples.map((example, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-xl p-4">
                <div className="mb-3">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">You send:</p>
                    <code className="text-blue-600">{example.message}</code>
                  </div>
                </div>
                <div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">You receive:</p>
                    <p className="text-green-800">{example.response}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl mb-4">Features | सुविधाएँ</h3>
          <div className="space-y-3">
            {[
              { icon: '📱', title: 'Works without internet', titleHi: 'इंटरनेट के बिना काम करता है' },
              { icon: '⚡', title: 'Instant response', titleHi: 'तत्काल प्रतिक्रिया' },
              { icon: '🔒', title: 'Secure & Private', titleHi: 'सुरक्षित और निजी' },
              { icon: '💰', title: 'Free service', titleHi: 'मुफ्त सेवा' },
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                <span className="text-3xl">{feature.icon}</span>
                <div>
                  <p>{feature.title}</p>
                  <p className="text-sm text-gray-600">{feature.titleHi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-2xl p-6 shadow-lg text-center">
          <h3 className="text-xl mb-2">Try It Now!</h3>
          <p className="mb-4">अभी कोशिश करो!</p>
          <p className="text-sm opacity-90">Open your SMS app and send a message to verify any suspicious text</p>
        </div>
      </div>
    </div>
  );
}
