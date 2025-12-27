import { ArrowLeft, Mic, Volume2, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const exampleQuestions = [
  { q: 'How to check if a message is fake?', qHi: 'संदेश नकली है कैसे जांचें?' },
  { q: 'What is PM-KISAN?', qHi: 'PM-KISAN क्या है?' },
  { q: 'How to apply for Aadhaar?', qHi: 'आधार के लिए कैसे आवेदन करें?' },
  { q: 'Find nearest CSC center', qHi: 'निकटतम CSC केंद्र खोजें' },
];

const chatMessages = [
  { type: 'bot', text: 'नमस्ते! मैं GramRakshak हूं। मैं आपकी कैसे मदद कर सकता हूं?', textEn: 'Hello! I am GramRakshak. How can I help you?' },
];

export default function VoiceAssistant() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(chatMessages);
  const [isListening, setIsListening] = useState(false);
  const [inputText, setInputText] = useState('');

  const handleAsk = (question: string) => {
    setMessages([
      ...messages,
      { type: 'user', text: question, textEn: '' },
      {
        type: 'bot',
        text: 'यह एक उत्तर है। मैं आपकी मदद के लिए यहाँ हूँ।',
        textEn: 'This is a sample answer. I am here to help you.',
      },
    ]);
  };

  const handleVoice = () => {
    setIsListening(!isListening);
    setTimeout(() => setIsListening(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col">
      {/* Header */}
      <div className="bg-blue-900 text-white px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={28} />
        </button>
        <div className="flex-1">
          <h1 className="text-xl">Ask GramRakshak</h1>
          <p className="text-sm text-blue-200">ग्रामरक्षक से पूछें</p>
        </div>
        <div className={`w-3 h-3 rounded-full ${isListening ? 'bg-red-500 animate-pulse' : 'bg-green-500'}`}></div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 shadow-md ${
                msg.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-800 border-2 border-blue-200'
              }`}
            >
              <p className="mb-1">{msg.text}</p>
              {msg.textEn && <p className="text-sm opacity-75">{msg.textEn}</p>}
              
              {msg.type === 'bot' && (
                <button className="mt-3 flex items-center gap-2 text-blue-600 bg-blue-50 px-3 py-1 rounded-lg text-sm active:scale-95 transition-all">
                  <Volume2 size={16} />
                  Listen | सुनें
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Questions */}
      <div className="px-6 py-4 bg-white border-t-2 border-gray-100">
        <h3 className="text-sm text-gray-600 mb-3">Quick Questions | त्वरित प्रश्न:</h3>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {exampleQuestions.map((q, index) => (
            <button
              key={index}
              onClick={() => handleAsk(q.q)}
              className="flex-shrink-0 bg-blue-50 hover:bg-blue-100 text-blue-800 px-4 py-2 rounded-xl text-sm whitespace-nowrap transition-all active:scale-95"
            >
              {q.qHi}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="px-6 py-6 bg-white border-t-2 border-gray-200">
        {/* Voice Button (Main) */}
        <button
          onClick={handleVoice}
          className={`w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center shadow-2xl transition-all ${
            isListening
              ? 'bg-red-500 scale-110 animate-pulse'
              : 'bg-gradient-to-br from-blue-600 to-purple-600 hover:scale-105'
          }`}
        >
          <Mic size={48} className="text-white" />
        </button>

        <p className="text-center text-sm text-gray-600 mb-4">
          {isListening ? 'Listening... बोलिए' : 'Tap to speak | बोलने के लिए टैप करें'}
        </p>

        {/* Text Input */}
        <div className="flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type your question... | अपना सवाल लिखें..."
            className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none"
          />
          <button
            onClick={() => {
              if (inputText.trim()) {
                handleAsk(inputText);
                setInputText('');
              }
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
