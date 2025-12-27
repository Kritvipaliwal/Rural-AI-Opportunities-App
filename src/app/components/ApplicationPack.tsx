import { ArrowLeft, FileText, CheckCircle, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const documents = [
  { name: 'Aadhaar Card', nameHi: 'आधार कार्ड', status: 'completed' },
  { name: 'Income Certificate', nameHi: 'आय प्रमाण पत्र', status: 'completed' },
  { name: 'Caste Certificate', nameHi: 'जाति प्रमाण पत्र', status: 'pending' },
  { name: 'Bank Passbook', nameHi: 'बैंक पासबुक', status: 'completed' },
  { name: 'Photo', nameHi: 'फोटो', status: 'completed' },
];

const cscSteps = [
  { step: 1, title: 'Visit CSC Center', titleHi: 'CSC केंद्र पर जाएं', desc: 'Take all documents' },
  { step: 2, title: 'Show Application Pack', titleHi: 'आवेदन पैक दिखाएं', desc: 'Share QR code' },
  { step: 3, title: 'Pay Fee', titleHi: 'शुल्क दें', desc: '₹50-100 service charge' },
  { step: 4, title: 'Submit & Track', titleHi: 'जमा करें और ट्रैक करें', desc: 'Get receipt number' },
];

export default function ApplicationPack() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* Header */}
      <div className="bg-blue-900 text-white px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={28} />
        </button>
        <div>
          <h1 className="text-xl">Application Pack</h1>
          <p className="text-sm text-blue-200">आवेदन पैक</p>
        </div>
      </div>

      {/* Form Preview */}
      <div className="p-6 space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl mb-4">Form Preview | फॉर्म पूर्वावलोकन</h2>
          <div className="bg-blue-50 rounded-xl p-4 mb-4">
            <h3 className="text-lg mb-2">PM-KISAN Application</h3>
            <p className="text-sm text-gray-600 mb-3">पीएम किसान आवेदन</p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-600">Name:</p>
                <p>राम कुमार</p>
              </div>
              <div>
                <p className="text-gray-600">Village:</p>
                <p>सिरसागंज</p>
              </div>
              <div>
                <p className="text-gray-600">Land Size:</p>
                <p>2 एकड़</p>
              </div>
              <div>
                <p className="text-gray-600">Bank A/C:</p>
                <p>****1234</p>
              </div>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-xl active:scale-95 transition-all">
            View Full Form | पूर्ण फॉर्म देखें
          </button>
        </div>

        {/* Documents Checklist */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl mb-4">Required Documents | आवश्यक दस्तावेज़</h2>
          <div className="space-y-3">
            {documents.map((doc, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 rounded-xl ${
                  doc.status === 'completed' ? 'bg-green-50' : 'bg-yellow-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  {doc.status === 'completed' ? (
                    <CheckCircle className="text-green-600" size={24} />
                  ) : (
                    <Clock className="text-yellow-600" size={24} />
                  )}
                  <div>
                    <p>{doc.name}</p>
                    <p className="text-sm text-gray-600">{doc.nameHi}</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs ${
                    doc.status === 'completed'
                      ? 'bg-green-200 text-green-800'
                      : 'bg-yellow-200 text-yellow-800'
                  }`}
                >
                  {doc.status === 'completed' ? 'Ready' : 'Pending'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CSC Steps */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-xl mb-4 flex items-center gap-2">
            <MapPin className="text-blue-600" />
            CSC Center Steps | CSC केंद्र चरण
          </h2>
          <div className="space-y-4">
            {cscSteps.map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{item.titleHi}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deadline Reminder */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <Clock size={32} />
            <div>
              <h3 className="text-xl">Deadline Reminder</h3>
              <p className="text-sm">समय सीमा अनुस्मारक</p>
            </div>
          </div>
          <p className="text-2xl mb-1">7 Days Left</p>
          <p>Application closes on 15 Jan 2025</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-green-500 text-white py-4 rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2">
            <FileText size={24} />
            Download PDF | PDF डाउनलोड करें
          </button>
          <button className="w-full bg-blue-600 text-white py-4 rounded-xl shadow-lg active:scale-95 transition-all">
            Find Nearest CSC | निकटतम CSC खोजें
          </button>
        </div>
      </div>
    </div>
  );
}
