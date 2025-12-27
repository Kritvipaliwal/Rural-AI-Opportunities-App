import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import LanguageSelection from './components/LanguageSelection';
import Home from './components/Home';
import DocumentVerify from './components/DocumentVerify';
import MessageChecker from './components/MessageChecker';
import Opportunities from './components/Opportunities';
import ApplicationPack from './components/ApplicationPack';
import SMSMode from './components/SMSMode';
import VillageMap from './components/VillageMap';
import VoiceAssistant from './components/VoiceAssistant';
import Certificates from './components/Certificates';
import Settings from './components/Settings';
import AdminDashboard from './components/AdminDashboard';

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  return (
    <Router>
      <div className="size-full">
        <Routes>
          {/* Language Selection - Entry Point */}
          <Route
            path="/"
            element={<LanguageSelection onSelectLanguage={setSelectedLanguage} />}
          />
          
          {/* Main App Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/document-verify" element={<DocumentVerify />} />
          <Route path="/message-checker" element={<MessageChecker />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/application-pack" element={<ApplicationPack />} />
          <Route path="/sms-mode" element={<SMSMode />} />
          <Route path="/village-map" element={<VillageMap />} />
          <Route path="/voice-assistant" element={<VoiceAssistant />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* Redirect unknown routes to language selection */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
