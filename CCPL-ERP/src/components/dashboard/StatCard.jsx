import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, trend, trendValue, color = "blue", className = "" }) => {
    // Enhanced color mapping with gradients and softer backgrounds
    const colorStyles = {
        blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
        green: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
        yellow: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100" },
        red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-100" },
        navy: { bg: "bg-slate-100", text: "text-slate-800", border: "border-slate-200" },
        purple: { bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-100" }
    };

    const currentStyle = colorStyles[color] || colorStyles.blue;

    return (
        <div className={`bg-white rounded-lg p-2.5 sm:p-3 md:p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 group relative overflow-hidden ${className}`}>
            {/* Decorative background element */}
            <div className={`absolute -right-4 -top-4 w-16 h-16 rounded-full opacity-5 ${currentStyle.bg.replace('50', '500')}`}></div>

            <div className="flex items-start justify-between relative z-10">
                <div className="min-w-0 flex-1">
                    <p className="text-[10px] sm:text-xs font-medium text-slate-500 mb-0.5 tracking-wide uppercase truncate">{title}</p>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 tracking-tight">{value}</h3>
                </div>
                <div className={`p-1.5 sm:p-2 rounded-lg ${currentStyle.bg} ${currentStyle.text} ${currentStyle.border} border shadow-sm group-hover:scale-105 transition-transform duration-300 ml-1.5 shrink-0`}>
                    {Icon && <Icon size={14} className="sm:w-4 sm:h-4 md:w-5 md:h-5" strokeWidth={2} />}
                </div>
            </div>

            {trend && (
                <div className="mt-1.5 sm:mt-2 flex items-center text-[10px] sm:text-xs font-medium">
                    <span className={`flex items-center gap-0.5 px-1 py-0.5 rounded ${trend === 'up' ? 'text-emerald-700 bg-emerald-50' : 'text-red-700 bg-red-50'
                        }`}>
                        {trend === 'up' ? <ArrowUpRight size={10} className="sm:w-3 sm:h-3" /> : <ArrowDownRight size={10} className="sm:w-3 sm:h-3" />}
                        {trendValue}
                    </span>
                    <span className="text-slate-400 ml-1 text-[9px] sm:text-[10px] hidden sm:inline">vs last month</span>
                </div>
            )}
        </div>
    );
};

export default StatCard;
