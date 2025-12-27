import { Shield, Search, Building, GraduationCap, Briefcase, Brain, MessageSquare, FileText, Map, Volume2, Settings, AlertTriangle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const tiles = [
  { icon: Shield, label: 'Verify Document', labelHi: 'दस्तावेज़ सत्यापित करें', path: '/document-verify', color: 'bg-green-500' },
  { icon: Search, label: 'Check WhatsApp / SMS', labelHi: 'व्हाट्सएप जांचें', path: '/message-checker', color: 'bg-blue-500' },
  { icon: Building, label: 'Govt Schemes', labelHi: 'सरकारी योजनाएं', path: '/opportunities', color: 'bg-orange-500' },
  { icon: GraduationCap, label: 'Scholarships', labelHi: 'छात्रवृत्ति', path: '/opportunities', color: 'bg-purple-500' },
  { icon: Briefcase, label: 'Jobs', labelHi: 'नौकरियां', path: '/opportunities', color: 'bg-indigo-500' },
  { icon: Brain, label: 'Ask GramRakshak', labelHi: 'ग्रामरक्षक से पूछें', path: '/voice-assistant', color: 'bg-pink-500' },
  { icon: MessageSquare, label: 'SMS Verification', labelHi: 'SMS सत्यापन', path: '/sms-mode', color: 'bg-teal-500' },
  { icon: FileText, label: 'My Certificates', labelHi: 'मेरे प्रमाणपत्र', path: '/certificates', color: 'bg-cyan-500' },
  { icon: FileText, label: 'Apply Now', labelHi: 'अभी आवेदन करें', path: '/application-pack', color: 'bg-yellow-500' },
  { icon: Map, label: 'Village Risk Map', labelHi: 'गांव जोखिम मानचित्र', path: '/village-map', color: 'bg-red-500' },
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 p-1">
        <div className="bg-blue-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">🛡️</span>
            </div>
            <div>
              <h1 className="text-xl">GramRakshak AI</h1>
              <p className="text-xs text-blue-200">Digital Trust Platform</p>
            </div>
          </div>
          <button onClick={() => navigate('/settings')}>
            <Settings size={28} />
          </button>
        </div>
      </div>

      {/* SOS Button */}
      <div className="px-6 py-4 bg-white border-b-2 border-red-100">
        <button className="w-full bg-red-500 text-white py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-all">
          <AlertTriangle size={28} />
          <span className="text-xl">SOS Fraud Report | धोखाधड़ी की रिपोर्ट</span>
        </button>
      </div>

      {/* Dashboard Tiles */}
      <div className="p-6 grid grid-cols-2 gap-4">
        {tiles.map((tile, index) => (
          <button
            key={index}
            onClick={() => navigate(tile.path)}
            className={`${tile.color} text-white rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-lg hover:scale-105 transition-all active:scale-95 aspect-square`}
          >
            <tile.icon size={48} strokeWidth={2.5} />
            <div className="text-center">
              <div className="text-sm leading-tight">{tile.label}</div>
              <div className="text-xs mt-1 opacity-90">{tile.labelHi}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Floating Voice Button */}
      <button 
        onClick={() => navigate('/voice-assistant')}
        className="fixed bottom-6 right-6 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all active:scale-95 animate-pulse"
      >
        <Volume2 size={32} />
      </button>

      {/* Offline Indicator (Mock) */}
      <div className="fixed bottom-6 left-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm shadow-lg flex items-center gap-2">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <span>Online</span>
      </div>
    </div>
  );
}
