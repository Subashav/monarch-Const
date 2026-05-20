import React from 'react';

const ChartCard = ({ title, children, action, className = "" }) => {
    return (
        <div className={`bg-white rounded-lg shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-shadow duration-300 ${className}`}>
            <div className="flex items-center justify-between p-2.5 sm:p-3 md:p-4 border-b border-slate-50">
                <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-800 tracking-tight">{title}</h3>
                {action && <div>{action}</div>}
            </div>
            <div className="p-2 sm:p-3 md:p-4 flex-1 flex items-center justify-center min-h-[160px] sm:min-h-[200px] md:min-h-[250px]">
                {children}
            </div>
        </div>
    );
};

export default ChartCard;
