import { ArrowLeft, Globe, Type, Volume2, Users, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const languages = [
  { code: 'hi', label: 'हिंदी', name: 'Hindi' },
  { code: 'en', label: 'English', name: 'English' },
  { code: 'mr', label: 'मराठी', name: 'Marathi' },
  { code: 'gu', label: 'ગુજરાતી', name: 'Gujarati' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ', name: 'Punjabi' },
  { code: 'ta', label: 'தமிழ்', name: 'Tamil' },
  { code: 'te', label: 'తెలుగు', name: 'Telugu' },
  { code: 'bn', label: 'বাংলা', name: 'Bengali' },
];

export default function Settings() {
  const navigate = useNavigate();
  const [selectedLang, setSelectedLang] = useState('hi');
  const [fontSize, setFontSize] = useState(16);
  const [voiceSpeed, setVoiceSpeed] = useState(1);
  const [familyMode, setFamilyMode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-blue-900 text-white px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={28} />
        </button>
        <div>
          <h1 className="text-xl">Settings</h1>
          <p className="text-sm text-blue-200">सेटिंग्स</p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Language Selection */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Globe size={24} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg">Language | भाषा</h2>
              <p className="text-sm text-gray-600">Select your preferred language</p>
            </div>
          </div>
          
          <div className="space-y-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLang(lang.code)}
                className={`w-full flex items-center justify-between p-4 rounded-xl transition-all $
{
                  selectedLang === lang.code
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{lang.label}</span>
                  <span className="text-sm opacity-75">{lang.name}</span>
                </div>
                {selectedLang === lang.code && (
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Font Size */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Type size={24} className="text-purple-600" />
            </div>
            <div>
              <h2 className="text-lg">Font Size | फ़ॉन्ट साइज़</h2>
              <p className="text-sm text-gray-600">Current: {fontSize}px</p>
            </div>
          </div>
          
          <input
            type="range"
            min="14"
            max="24"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
          />
          
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>
          </div>
        </div>

        {/* Voice Speed */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Volume2 size={24} className="text-green-600" />
            </div>
            <div>
              <h2 className="text-lg">Voice Speed | आवाज़ की गति</h2>
              <p className="text-sm text-gray-600">Current: {voiceSpeed}x</p>
            </div>
          </div>
          
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={voiceSpeed}
            onChange={(e) => setVoiceSpeed(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
          />
          
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>Slow</span>
            <span>Normal</span>
            <span>Fast</span>
          </div>
        </div>

        {/* Family Protection Mode */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                <Users size={24} className="text-orange-600" />
              </div>
              <div>
                <h2 className="text-lg">Family Protection Mode</h2>
                <p className="text-sm text-gray-600">परिवार सुरक्षा मोड</p>
                <p className="text-xs text-gray-500 mt-1">Share alerts with family members</p>
              </div>
            </div>
            
            <button
              onClick={() => setFamilyMode(!familyMode)}
              className={`w-16 h-9 rounded-full transition-all relative ${
                familyMode ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-7 h-7 bg-white rounded-full shadow-md transition-all ${
                  familyMode ? 'left-8' : 'left-1'
                }`}
              ></div>
            </button>
          </div>
        </div>

        {/* Other Settings */}
        <div className="bg-white rounded-2xl p-4 shadow-lg space-y-1">
          <button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all">
            <span>About GramRakshak</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
          <button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all">
            <span>Privacy Policy</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
          <button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-all">
            <span>Help & Support</span>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Version */}
        <div className="text-center text-sm text-gray-500 py-4">
          <p>GramRakshak AI v1.0.0</p>
          <p className="text-xs mt-1">Government of India Initiative</p>
        </div>
      </div>
    </div>
  );
}
