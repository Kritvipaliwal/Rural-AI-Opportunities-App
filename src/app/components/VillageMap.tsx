import { ArrowLeft, AlertTriangle, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const villages = [
  { name: 'Sirsaganj', nameHi: 'सिरसागंज', risk: 'low', incidents: 2, color: '#10b981' },
  { name: 'Rampur', nameHi: 'रामपुर', risk: 'high', incidents: 15, color: '#ef4444' },
  { name: 'Fatehpur', nameHi: 'फतेहपुर', risk: 'medium', incidents: 7, color: '#f59e0b' },
  { name: 'Sultanpur', nameHi: 'सुल्तानपुर', risk: 'low', incidents: 3, color: '#10b981' },
  { name: 'Kashipur', nameHi: 'काशीपुर', risk: 'high', incidents: 12, color: '#ef4444' },
  { name: 'Nandgaon', nameHi: 'नंदगाँव', risk: 'medium', incidents: 5, color: '#f59e0b' },
];

const commonScams = [
  { type: 'Lottery Scam', typeHi: 'लॉटरी धोखाधड़ी', count: 45, trend: 'up' },
  { type: 'Fake Job Offers', typeHi: 'नकली नौकरी', count: 32, trend: 'up' },
  { type: 'Loan Fraud', typeHi: 'ऋण धोखाधड़ी', count: 28, trend: 'down' },
  { type: 'KYC Update Scam', typeHi: 'KYC धोखाधड़ी', count: 19, trend: 'up' },
];

export default function VillageMap() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* Header */}
      <div className="bg-blue-900 text-white px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={28} />
        </button>
        <div>
          <h1 className="text-xl">Village Risk Map</h1>
          <p className="text-sm text-blue-200">गांव जोखिम मानचित्र</p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Legend */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg mb-4">Risk Levels | जोखिम स्तर</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm">Safe</p>
              <p className="text-xs text-gray-600">सुरक्षित</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm">Medium</p>
              <p className="text-xs text-gray-600">मध्यम</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-2"></div>
              <p className="text-sm">High Risk</p>
              <p className="text-xs text-gray-600">उच्च जोखिम</p>
            </div>
          </div>
        </div>

        {/* Map Visual */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg mb-4 flex items-center gap-2">
            <MapPin className="text-blue-600" />
            District Map | जिला मानचित्र
          </h3>
          <div className="relative bg-gray-100 rounded-xl p-8 min-h-[300px]">
            {/* Simulated Map with village dots */}
            {villages.map((village, index) => {
              const positions = [
                { top: '20%', left: '30%' },
                { top: '40%', left: '70%' },
                { top: '60%', left: '25%' },
                { top: '35%', left: '50%' },
                { top: '70%', left: '65%' },
                { top: '50%', left: '80%' },
              ];
              
              return (
                <div
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ top: positions[index].top, left: positions[index].left }}
                >
                  <div
                    className="w-8 h-8 rounded-full animate-pulse cursor-pointer hover:scale-125 transition-all"
                    style={{ backgroundColor: village.color }}
                    title={village.name}
                  ></div>
                  <div className="text-xs mt-1 text-center whitespace-nowrap bg-white px-2 py-1 rounded shadow-sm">
                    {village.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Village List */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg mb-4">Village Details | गाँव विवरण</h3>
          <div className="space-y-3">
            {villages.map((village, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 border-2 rounded-xl hover:shadow-md transition-all"
                style={{ borderColor: village.color }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: village.color }}
                  ></div>
                  <div>
                    <p>{village.name}</p>
                    <p className="text-sm text-gray-600">{village.nameHi}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Incidents</p>
                  <p className="text-xl">{village.incidents}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Scams */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg mb-4 flex items-center gap-2">
            <AlertTriangle className="text-red-600" />
            Common Scams | सामान्य धोखाधड़ी
          </h3>
          <div className="space-y-3">
            {commonScams.map((scam, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
                <div className="flex-1">
                  <p>{scam.type}</p>
                  <p className="text-sm text-gray-600">{scam.typeHi}</p>
                </div>
                <div className="text-right flex items-center gap-3">
                  <div>
                    <p className="text-2xl text-red-600">{scam.count}</p>
                    <p className="text-xs text-gray-600">reports</p>
                  </div>
                  <span className={`text-2xl ${scam.trend === 'up' ? 'text-red-600' : 'text-green-600'}`}>
                    {scam.trend === 'up' ? '↗' : '↘'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alert Box */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl mb-2 flex items-center gap-2">
            <AlertTriangle size={28} />
            Stay Alert!
          </h3>
          <p className="mb-2">सतर्क रहें!</p>
          <p className="text-sm opacity-90">
            If you encounter any suspicious activity, report immediately using the SOS button on home screen.
          </p>
        </div>
      </div>
    </div>
  );
}
