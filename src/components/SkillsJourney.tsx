import React from 'react';
import {
  Table2,
  TrendingUp,
  MessageCircle,
  Users,
  Diamond,
  Brain,
  Target,
  ArrowRight,
  MapPin,
  Calendar
} from 'lucide-react';

export function SkillsJourney() {
  return (
    <div className="relative w-[1400px] h-[700px] bg-gradient-to-r from-white via-[#E0F7FA]/30 to-[#E0F7FA]/50 shadow-2xl rounded-lg overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ABAB5' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Journey Path Line */}
      <svg className="absolute top-1/2 left-0 w-full h-full pointer-events-none" style={{ transform: 'translateY(-50%)' }}>
        <path
          d="M 100 350 Q 450 320, 700 350 T 1300 350"
          stroke="#0ABAB5"
          strokeWidth="3"
          fill="none"
          strokeDasharray="8,8"
          opacity="0.3"
        />
        {/* Timeline dots */}
        <circle cx="100" cy="350" r="8" fill="#6B7280" />
        <circle cx="700" cy="350" r="12" fill="#0ABAB5" />
        <circle cx="1300" cy="350" r="8" fill="#B76E79" />
      </svg>

      {/* "You Are Here" Marker */}
      <div className="absolute left-[820px] top-[330px] transform -translate-x-1/2 flex items-center gap-2 z-10">
        <MapPin className="w-5 h-5 text-[#0ABAB5] fill-[#0ABAB5]" />
        <span className="text-[12px] font-semibold text-[#0ABAB5] bg-white px-2 py-1 rounded shadow-sm">
          I Am Here
        </span>
      </div>

      <div className="relative h-full flex items-center px-12 pt-10 pb-12">
        {/* STAGE 1: FOUNDATION (Left) */}
        <div className="flex-[0.8] flex flex-col items-center text-center pr-6">
          <h2 className="text-[24px] font-bold text-[#6B7280] mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Foundation
          </h2>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 w-full max-w-[240px]">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center">
                <Table2 className="w-7 h-7 text-[#6B7280]" />
              </div>
            </div>

            {/* Skills List */}
            <div className="space-y-2.5 mb-4">
              <div className="text-[15px] text-gray-700">SQL Queries</div>
              <div className="h-px bg-gray-200"></div>
              <div className="text-[15px] text-gray-700">Excel Dashboards</div>
              <div className="h-px bg-gray-200"></div>
              <div className="text-[15px] text-gray-700">Data Analysis</div>
            </div>

            {/* Label */}
            <div className="mt-4 pt-3 border-t border-gray-200">
              <p className="text-[13px] font-semibold text-[#6B7280]">
                Strong Technical Base
              </p>
            </div>
          </div>
        </div>

        {/* STAGE 2: GROWTH IN PROGRESS (Center - LARGEST) */}
        <div className="flex-[1.4] flex flex-col items-center text-center px-4">
          <h2 className="text-[24px] font-bold text-[#0ABAB5] mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Growth in Progress
          </h2>

          {/* Skill Cards */}
          <div className="space-y-3.5 w-full max-w-[400px]">
            {/* Card 1: Excel → Power BI */}
            <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-[#0ABAB5] transform hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 bg-[#0ABAB5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-[#0ABAB5]" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-[18px] font-semibold text-[#1E3A5F] mb-1.5">
                    Excel → Power BI
                  </h3>
                  <div className="text-[12px] text-gray-600 mb-2.5">3 months learning</div>
                  {/* Progress Bar */}
                  <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div className="bg-gradient-to-r from-[#0ABAB5] to-[#0ABAB5]/70 h-full w-[75%] rounded-full"></div>
                  </div>
                  <div className="text-[11px] text-[#0ABAB5] font-semibold mt-1">75% Complete</div>
                </div>
              </div>
            </div>

            {/* Card 2: SQL → Business Storytelling */}
            <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-[#0ABAB5] transform hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 bg-[#0ABAB5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#0ABAB5]" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-[18px] font-semibold text-[#1E3A5F] mb-1.5">
                    SQL → Business Storytelling
                  </h3>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="bg-[#0ABAB5] text-white text-[11px] font-bold px-3 py-1 rounded-full">
                      DataCamp Certified
                    </span>
                  </div>
                  <div className="text-[12px] text-gray-600">'So What?' framework</div>
                </div>
              </div>
            </div>

            {/* Card 3: Client Segmentation */}
            <div className="bg-white rounded-xl shadow-lg p-5 border-l-4 border-[#0ABAB5] transform hover:scale-[1.02] transition-transform">
              <div className="flex items-start gap-3">
                <div className="w-11 h-11 bg-[#0ABAB5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[#0ABAB5]" />
                </div>
                <div className="flex-1 text-left">
                  <h3 className="text-[18px] font-semibold text-[#1E3A5F] mb-1.5">
                    Client Segmentation
                  </h3>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[12px] text-gray-600">📚 Analytics for Dummies</span>
                  </div>
                  <div className="text-[12px] text-gray-600">RFM analysis practice</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stat */}
          <div className="mt-5 bg-gradient-to-r from-[#0ABAB5] to-[#0ABAB5]/80 rounded-lg shadow-lg p-4 w-full max-w-[400px] text-white">
            <div className="flex items-center justify-center gap-3">
              <Calendar className="w-7 h-7" />
              <div className="text-left">
                <div className="text-[28px] font-extrabold leading-none">60+ Hours</div>
                <div className="text-[13px] opacity-90">Self-directed learning</div>
              </div>
            </div>
          </div>
        </div>

        {/* STAGE 3: TIFFANY GOALS (Right) */}
        <div className="flex-[0.8] flex flex-col items-center text-center pl-6">
          <h2 className="text-[24px] font-bold text-[#B76E79] mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Tiffany Goals
          </h2>

          {/* Target/Compass Icon */}
          <div className="mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-[#B76E79] to-[#B76E79]/70 rounded-full flex items-center justify-center shadow-lg">
              <ArrowRight className="w-7 h-7 text-white" />
            </div>
          </div>

          {/* Goal Boxes */}
          <div className="space-y-3.5 w-full max-w-[260px]">
            {/* Goal 1: Luxury Brand Analytics */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-4 border-t-4 border-[#B76E79]">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <Diamond className="w-4 h-4 text-[#B76E79]" />
                <h3 className="text-[16px] font-semibold text-[#1E3A5F]">
                  Luxury Brand Analytics
                </h3>
              </div>
              <p className="text-[12px] text-gray-600">
                Measuring emotion in data
              </p>
            </div>

            {/* Goal 2: Consumer Psychology */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-4 border-t-4 border-[#B76E79]">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <Brain className="w-4 h-4 text-[#B76E79]" />
                <h3 className="text-[16px] font-semibold text-[#1E3A5F]">
                  Consumer Psychology
                </h3>
              </div>
              <p className="text-[12px] text-gray-600">
                Data × Emotion intersection
              </p>
            </div>

            {/* Goal 3: Executive Communication */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md p-4 border-t-4 border-[#B76E79]">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                <Target className="w-4 h-4 text-[#B76E79]" />
                <h3 className="text-[16px] font-semibold text-[#1E3A5F]">
                  Executive Communication
                </h3>
              </div>
              <p className="text-[12px] text-gray-600">
                60-sec impact pitches
              </p>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="mt-5 bg-gradient-to-r from-[#B76E79] to-[#B76E79]/80 rounded-lg shadow-lg p-3.5 w-full max-w-[260px] text-white">
            <div className="text-[20px] font-bold leading-tight mb-1">
              10 Weeks →<br />New Domain Mastery
            </div>
            <div className="text-[11px] opacity-90 flex items-center justify-center gap-1">
              <ArrowRight className="w-3 h-3" />
              <span>Prove rapid learning ability</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}