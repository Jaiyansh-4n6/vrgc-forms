"use client";

import React from 'react';
import SpecularButton from './SpecularButton';

interface DocumentsProps {
  onPageChange: (page: string) => void;
}

interface DocumentCardData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  actionText: string;
  pageId: string;
  available: boolean;
}

const DOCUMENT_CARDS: DocumentCardData[] = [
  {
    id: 'offer_letter',
    title: 'Offer Letter',
    subtitle: 'Official VRGC Core Team Appointment Letter',
    description: 'Generate and view your personalized VRGC Core Team offer letter with your name, registration number, department, and position.',
    icon: 'workspace_premium',
    actionText: 'View Offer Letter',
    pageId: 'offer_letter',
    available: true,
  },
  // Future documents can be added here:
  // {
  //   id: 'experience_certificate',
  //   title: 'Experience Certificate',
  //   subtitle: 'Official VRGC Experience Certificate',
  //   description: 'Generate your official experience certificate for your tenure at VRGC.',
  //   icon: 'military_tech',
  //   actionText: 'View Certificate',
  //   pageId: 'experience_certificate',
  //   available: false,
  // },
];

const Documents: React.FC<DocumentsProps> = ({ onPageChange }) => {
  return (
    <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 max-w-6xl mx-auto w-full">
      {/* Page Header */}
      <div className="mb-8 sm:mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-purple-950/80 border border-purple-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <span className="material-symbols-outlined text-purple-400 text-xl sm:text-2xl">description</span>
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">Documents</h1>
            <p className="text-xs sm:text-sm text-slate-400 font-medium">Official VRGC documents and certificates</p>
          </div>
        </div>
        <div className="h-px bg-gradient-to-r from-purple-500/40 via-purple-500/20 to-transparent mt-4" />
      </div>

      {/* Document Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {DOCUMENT_CARDS.map((doc) => (
          <div
            key={doc.id}
            className={`group relative rounded-2xl border transition-all duration-300 overflow-hidden ${
              doc.available
                ? 'bg-[#0c0517]/90 border-purple-500/25 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] cursor-pointer'
                : 'bg-[#0c0517]/60 border-slate-700/30 opacity-60 cursor-not-allowed'
            }`}
            onClick={() => doc.available && onPageChange(doc.pageId)}
          >
            {/* Top glow accent */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="p-5 sm:p-6 flex flex-col gap-4">
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center border shadow-inner ${
                doc.available
                  ? 'bg-purple-950/80 border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.15)]'
                  : 'bg-slate-900/80 border-slate-700/40'
              }`}>
                <span className={`material-symbols-outlined text-2xl ${
                  doc.available ? 'text-purple-400' : 'text-slate-500'
                }`}>
                  {doc.icon}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight group-hover:text-purple-200 transition-colors">
                  {doc.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-purple-400/80 font-semibold uppercase tracking-wider">
                  {doc.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
                  {doc.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-2">
                {doc.available ? (
                  <SpecularButton
                    size="sm"
                    radius={12}
                    tint="#9333ea"
                    tintOpacity={0.6}
                    lineColor="#c084fc"
                    baseColor="#581c87"
                    intensity={1.1}
                    onClick={(e: React.MouseEvent) => {
                      e.stopPropagation();
                      onPageChange(doc.pageId);
                    }}
                    className="w-full font-bold text-white text-xs sm:text-sm"
                  >
                    <span className="material-symbols-outlined text-sm mr-1.5">arrow_forward</span>
                    <span>{doc.actionText}</span>
                  </SpecularButton>
                ) : (
                  <div className="w-full py-2.5 px-4 rounded-xl bg-slate-800/50 border border-slate-700/40 text-center text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Coming Soon
                  </div>
                )}
              </div>
            </div>

            {/* Bottom decorative line */}
            {doc.available && (
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
