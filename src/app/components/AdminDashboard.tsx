import { ArrowLeft, TrendingUp, AlertTriangle, Users, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const fraudData = [
  { month: 'Jul', reports: 12 },
  { month: 'Aug', reports: 8 },
  { month: 'Sep', reports: 15 },
  { month: 'Oct', reports: 6 },
  { month: 'Nov', reports: 20 },
  { month: 'Dec', reports: 10 },
];

const riskData = [
  { name: 'Low Risk', value: 45, color: '#10b981' },
  { name: 'Medium Risk', value: 35, color: '#f59e0b' },
  { name: 'High Risk', value: 20, color: '#ef4444' },
];

const awarenessGaps = [
  { category: 'Digital Payments', gap: 65, color: '#3b82f6' },
  { category: 'Govt Schemes', gap: 45, color: '#8b5cf6' },
  { category: 'Document Verification', gap: 30, color: '#ec4899' },
  { category: 'Fraud Detection', gap: 55, color: '#f59e0b' },
];

const recentAlerts = [
  { id: 1, type: 'Phishing SMS', village: 'Rampur', severity: 'high', time: '2 hours ago' },
  { id: 2, type: 'Fake Scheme', village: 'Sitapur', severity: 'medium', time: '5 hours ago' },
  { id: 3, type: 'Document Fraud', village: 'Gopalganj', severity: 'high', time: '1 day ago' },
];

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white px-6 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={28} />
        </button>
        <div>
          <h1 className="text-xl">Panchayat Dashboard</h1>
          <p className="text-sm text-blue-200">पंचायत डैशबोर्ड</p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <Users size={28} />
              <TrendingUp size={20} />
            </div>
            <div className="text-3xl mb-1">1,245</div>
            <div className="text-sm opacity-90">Protected Users</div>
          </div>
          
          <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle size={28} />
              <TrendingUp size={20} />
            </div>
            <div className="text-3xl mb-1">71</div>
            <div className="text-sm opacity-90">Fraud Reports</div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <MapPin size={28} />
              <TrendingUp size={20} />
            </div>
            <div className="text-3xl mb-1">12</div>
            <div className="text-sm opacity-90">Villages Covered</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-2xl">✓</span>
              <TrendingUp size={20} />
            </div>
            <div className="text-3xl mb-1">543</div>
            <div className="text-sm opacity-90">Verifications</div>
          </div>
        </div>

        {/* Fraud Reports Trend */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-lg mb-4">Fraud Reports Trend | धोखाधड़ी रिपोर्ट प्रवृत्ति</h2>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={fraudData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="reports" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Village Risk Distribution */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-lg mb-4">Village Risk Distribution | गांव जोखिम वितरण</h2>
          <div className="flex items-center justify-between">
            <ResponsiveContainer width="50%" height={180}>
              <PieChart>
                <Pie
                  data={riskData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {riskData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            <div className="flex-1 space-y-3">
              {riskData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="text-sm">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awareness Gaps */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <h2 className="text-lg mb-4">Awareness Gaps | जागरूकता अंतराल</h2>
          <div className="space-y-4">
            {awarenessGaps.map((item) => (
              <div key={item.category}>
                <div className="flex justify-between text-sm mb-2">
                  <span>{item.category}</span>
                  <span className="text-gray-600">{item.gap}% gap</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full transition-all"
                    style={{
                      width: `${item.gap}%`,
                      backgroundColor: item.color,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h2 className="text-lg mb-4">Recent Alerts | हालिया अलर्ट</h2>
          <div className="space-y-3">
            {recentAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-xl border-l-4 ${
                  alert.severity === 'high' ? 'border-red-500 bg-red-50' : 'border-yellow-500 bg-yellow-50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full ${
                        alert.severity === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                      } animate-pulse`}></span>
                      <h3>{alert.type}</h3>
                    </div>
                    <p className="text-sm text-gray-600">
                      📍 {alert.village} • {alert.time}
                    </p>
                  </div>
                  <button className="text-blue-600 text-sm px-3 py-1 rounded-lg bg-white shadow-sm">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
