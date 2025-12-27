import { Volume2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LanguageSelectionProps {
  onSelectLanguage: (lang: string) => void;
}

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

export default function LanguageSelection({ onSelectLanguage }: LanguageSelectionProps) {
  const navigate = useNavigate();

  const handleSelect = (code: string) => {
    onSelectLanguage(code);
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-6 flex flex-col items-center justify-center">
      {/* Government Emblem Style Header */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 via-white to-green-500 rounded-full flex items-center justify-center shadow-lg border-4 border-blue-900">
          <span className="text-3xl">🛡️</span>
        </div>
        <h1 className="text-3xl mb-2 text-blue-900">GramRakshak AI</h1>
        <p className="text-gray-600">Rural Digital Trust Platform</p>
      </div>

      {/* Voice Button */}
      <button className="mb-8 bg-blue-600 text-white px-8 py-4 rounded-full flex items-center gap-3 shadow-xl hover:bg-blue-700 transition-all active:scale-95">
        <Volume2 size={28} />
        <span className="text-xl">Voice Assist</span>
      </button>

      {/* Language Grid */}
      <div className="w-full max-w-md space-y-4">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleSelect(lang.code)}
            className="w-full bg-white hover:bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 flex items-center justify-between shadow-md transition-all active:scale-95 hover:border-blue-400"
          >
            <div className="text-left">
              <div className="text-2xl mb-1">{lang.label}</div>
              <div className="text-sm text-gray-500">{lang.name}</div>
            </div>
            <div className="text-3xl">→</div>
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>Government of India Initiative</p>
        <p className="mt-1">सभी भारतीयों के लिए डिजिटल सुरक्षा</p>
      </div>
    </div>
  );
}
