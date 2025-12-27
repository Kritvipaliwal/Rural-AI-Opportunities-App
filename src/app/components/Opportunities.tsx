import { ArrowLeft, Building, GraduationCap, Briefcase, Clock, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const opportunities = {
  schemes: [
    { id: 1, title: 'PM-KISAN Yojana', titleHi: 'पीएम किसान योजना', deadline: '15 Jan 2025', amount: '₹6,000/year', category: 'Farmers' },
    { id: 2, title: 'Ayushman Bharat', titleHi: 'आयुष्मान भारत', deadline: 'Ongoing', amount: '₹5 Lakh', category: 'Health' },
    { id: 3, title: 'Ujjwala Yojana', titleHi: 'उज्ज्वला योजना', deadline: '31 Dec 2024', amount: 'Free Gas', category: 'Women' },
  ],
  jobs: [
    { id: 1, title: 'MGNREGA Worker', titleHi: 'मनरेगा कार्यकर्ता', deadline: 'Rolling', salary: '₹250/day', location: 'Local' },
    { id: 2, title: 'Anganwadi Helper', titleHi: 'आंगनवाड़ी सहायक', deadline: '10 Jan 2025', salary: '₹5,000/month', location: 'District' },
    { id: 3, title: 'Village Accountant', titleHi: 'गाँव लेखाकार', deadline: '5 Jan 2025', salary: '₹12,000/month', location: 'Panchayat' },
  ],
  scholarships: [
    { id: 1, title: 'Post Matric Scholarship', titleHi: 'पोस्ट मैट्रिक छात्रवृत्ति', deadline: '20 Jan 2025', amount: '₹15,000/year', eligibility: 'Class 11-12' },
    { id: 2, title: 'SC/ST Scholarship', titleHi: 'SC/ST छात्रवृत्ति', deadline: '25 Jan 2025', amount: '₹20,000/year', eligibility: 'Graduate' },
    { id: 3, title: 'Merit Scholarship', titleHi: 'मेरिट छात्रवृत्ति', deadline: '15 Jan 2025', amount: '₹10,000/year', eligibility: 'All' },
  ],
};

type TabType = 'schemes' | 'jobs' | 'scholarships';

export default function Opportunities() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>('schemes');

  const getDeadlineDays = (deadline: string) => {
    if (deadline === 'Ongoing' || deadline === 'Rolling') return null;
    const date = new Date(deadline);
    const today = new Date();
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* Header */}
      <div className="bg-blue-900 text-white px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={28} />
        </button>
        <div>
          <h1 className="text-xl">Verified Opportunities</h1>
          <p className="text-sm text-blue-200">सत्यापित अवसर</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b-2 border-gray-200 p-4 flex gap-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('schemes')}
          className={`px-6 py-3 rounded-xl whitespace-nowrap transition-all ${
            activeTab === 'schemes'
              ? 'bg-orange-500 text-white shadow-md'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          <Building size={20} className="inline mr-2" />
          Schemes | योजनाएं
        </button>
        <button
          onClick={() => setActiveTab('jobs')}
          className={`px-6 py-3 rounded-xl whitespace-nowrap transition-all ${
            activeTab === 'jobs'
              ? 'bg-indigo-500 text-white shadow-md'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          <Briefcase size={20} className="inline mr-2" />
          Jobs | नौकरियां
        </button>
        <button
          onClick={() => setActiveTab('scholarships')}
          className={`px-6 py-3 rounded-xl whitespace-nowrap transition-all ${
            activeTab === 'scholarships'
              ? 'bg-purple-500 text-white shadow-md'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          <GraduationCap size={20} className="inline mr-2" />
          Scholarships | छात्रवृत्ति
        </button>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {opportunities[activeTab].map((item: any) => {
          const daysLeft = getDeadlineDays(item.deadline);
          
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-blue-300 transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.titleHi}</p>
                </div>
                {daysLeft !== null && (
                  <div className={`px-3 py-1 rounded-full text-sm ${
                    daysLeft <= 3 ? 'bg-red-100 text-red-700' :
                    daysLeft <= 7 ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {daysLeft}d left
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1">
                    {activeTab === 'schemes' ? 'Benefit' : activeTab === 'jobs' ? 'Salary' : 'Amount'}
                  </p>
                  <p className="text-lg">{item.amount || item.salary}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-xs text-gray-600 mb-1 flex items-center gap-1">
                    <Clock size={14} />
                    Deadline
                  </p>
                  <p className="text-lg">{item.deadline}</p>
                </div>
              </div>

              {item.category && (
                <div className="mb-4">
                  <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
              )}
              
              {item.location && (
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    📍 {item.location}
                  </span>
                </div>
              )}
              
              {item.eligibility && (
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    ✓ {item.eligibility}
                  </span>
                </div>
              )}

              <div className="flex gap-2">
                <button 
                  onClick={() => navigate('/application-pack')}
                  className="flex-1 bg-green-500 text-white py-3 rounded-xl shadow-md active:scale-95 transition-all"
                >
                  Apply Now | आवेदन करें
                </button>
                <button className="px-4 bg-blue-500 text-white rounded-xl shadow-md active:scale-95 transition-all flex items-center justify-center">
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
