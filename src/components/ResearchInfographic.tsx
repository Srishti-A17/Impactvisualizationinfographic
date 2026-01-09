import React from 'react';
import {
  FileStack,
  Clock,
  Bot,
  Zap,
  Target,
  ArrowRight,
  BarChart3,
  Heart,
  ClipboardList,
  TrendingUp,
  Database,
  FlaskConical
} from 'lucide-react';

export function ResearchInfographic() {
  return (
    <div className="w-[1200px] h-[800px] bg-white shadow-2xl rounded-lg overflow-hidden">
      {/* Main Content Area */}
      <div className="h-[720px] flex">
        {/* PANEL 1: THE CHALLENGE */}
        <div className="flex-1 bg-gradient-to-br from-orange-50 to-white p-12 border-r border-gray-200">
          <div className="h-full flex flex-col">
            <h2 className="text-[28px] font-bold text-[#1E3A5F] mb-8">
              The Challenge
            </h2>

            <div className="flex-1 flex flex-col justify-center space-y-8">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 bg-[#FF6B35] bg-opacity-10 rounded-full flex items-center justify-center">
                  <FileStack className="w-10 h-10 text-[#FF6B35]" />
                </div>
              </div>

              {/* Main Stat */}
              <div className="text-center">
                <div className="text-[48px] font-extrabold text-[#FF6B35] leading-none mb-3">
                  1M+
                </div>
                <div className="text-[16px] text-gray-700 font-medium">
                  Records
                </div>
                <div className="text-[14px] text-gray-600 mt-2 px-4">
                  Air pollution × Health data<br />across NYC
                </div>
              </div>

              {/* Time Indicator */}
              <div className="bg-white rounded-lg shadow-md p-6 mx-auto w-full max-w-[280px]">
                <div className="flex items-center justify-center gap-3">
                  <Clock className="w-6 h-6 text-[#FF6B35]" />
                  <div>
                    <div className="text-[32px] font-bold text-[#FF6B35] leading-none">
                      40 hours
                    </div>
                    <div className="text-[13px] text-gray-600 mt-1">
                      per analysis cycle
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 2: THE SOLUTION */}
        <div className="flex-1 bg-gradient-to-br from-teal-50 to-white p-12 border-r border-gray-200">
          <div className="h-full flex flex-col">
            <h2 className="text-[28px] font-bold text-[#1E3A5F] mb-8">
              My Approach
            </h2>

            <div className="flex-1 flex flex-col justify-center space-y-6">
              {/* Flow Diagram */}
              <div className="space-y-4">
                {/* ML Models */}
                <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-[#0ABAB5]">
                  <div className="flex items-start gap-3">
                    <Bot className="w-6 h-6 text-[#0ABAB5] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-[#1E3A5F] text-[15px]">ML Models</div>
                      <div className="text-[13px] text-gray-600 mt-1">
                        Temporal Regression (OLS, Poisson)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Automation */}
                <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-[#0ABAB5]">
                  <div className="flex items-start gap-3">
                    <Zap className="w-6 h-6 text-[#0ABAB5] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-[#1E3A5F] text-[15px]">Automation</div>
                      <div className="text-[13px] text-gray-600 mt-1">
                        Python Pipelines
                      </div>
                    </div>
                  </div>
                </div>

                {/* Discovery */}
                <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-[#0ABAB5]">
                  <div className="flex items-start gap-3">
                    <Target className="w-6 h-6 text-[#0ABAB5] mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-[#1E3A5F] text-[15px]">Discovery</div>
                      <div className="text-[13px] text-gray-600 mt-1">
                        60-Day Optimal Window
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Metric - Time Reduction */}
              <div className="bg-gradient-to-r from-[#0ABAB5] to-[#0ABAB5]/80 rounded-lg shadow-lg p-6 text-white">
                <div className="text-center">
                  <div className="text-[36px] font-extrabold leading-none mb-2">
                    95% Faster
                  </div>
                  <div className="flex items-center justify-center gap-3 text-[18px] font-medium">
                    <span>40hrs</span>
                    <ArrowRight className="w-5 h-5" />
                    <span>2hrs</span>
                  </div>
                  {/* Progress bar */}
                  <div className="mt-4 bg-white/20 rounded-full h-2 overflow-hidden">
                    <div className="bg-white h-full w-[5%] rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Scenarios Tested */}
              <div className="text-center">
                <div className="text-[28px] font-bold text-[#0ABAB5] leading-none">
                  350+
                </div>
                <div className="text-[14px] text-gray-600 mt-1">
                  Scenarios Tested
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 3: THE IMPACT */}
        <div className="flex-1 bg-gradient-to-br from-emerald-50 to-white p-12">
          <div className="h-full flex flex-col">
            <h2 className="text-[28px] font-bold text-[#1E3A5F] mb-8">
              The Impact
            </h2>

            <div className="flex-1 flex flex-col justify-center space-y-6">
              {/* Hero Impact Stat */}
              <div className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg shadow-xl p-8 text-white text-center">
                <div className="text-[52px] font-extrabold leading-none mb-2">
                  $20.3B
                </div>
                <div className="text-[15px] font-medium opacity-95">
                  Healthcare costs quantified
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="space-y-4">
                {/* Variance Explained */}
                <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-[#10B981]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#10B981] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-5 h-5 text-[#10B981]" />
                    </div>
                    <div>
                      <div className="text-[20px] font-bold text-[#1E3A5F] leading-none">
                        69%
                      </div>
                      <div className="text-[13px] text-gray-600 mt-1">
                        Variance Explained
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5">
                        Heart failure prediction
                      </div>
                    </div>
                  </div>
                </div>

                {/* Diseases Analyzed */}
                <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-[#10B981]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#10B981] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 text-[#10B981]" />
                    </div>
                    <div>
                      <div className="text-[20px] font-bold text-[#1E3A5F] leading-none">
                        5 Diseases
                      </div>
                      <div className="text-[13px] text-gray-600 mt-1">
                        Analyzed
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5">
                        Unique exposure windows
                      </div>
                    </div>
                  </div>
                </div>

                {/* Policy-Ready */}
                <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-[#10B981]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#10B981] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <ClipboardList className="w-5 h-5 text-[#10B981]" />
                    </div>
                    <div>
                      <div className="text-[15px] font-bold text-[#1E3A5F] leading-tight">
                        Policy-Ready
                      </div>
                      <div className="text-[13px] text-gray-600 mt-1">
                        Insights
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5">
                        Supporting NYC health decisions
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="h-[80px] bg-gradient-to-r from-[#1E3A5F] to-[#2d5a8f] flex items-center justify-center px-12">
        <p className="text-white text-[15px] font-medium text-center">
          <span className="font-bold">Key Lesson:</span> Technical Excellence + Stakeholder Empathy = Real Impact
        </p>
      </div>
    </div>
  );
}
