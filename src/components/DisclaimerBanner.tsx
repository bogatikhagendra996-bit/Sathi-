import React, { useState } from 'react';
import { Info, X } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface Props {
  language: Language;
}

export const DisclaimerBanner: React.FC<Props> = ({ language }) => {
  const [dismissed, setDismissed] = useState(false);
  const t = translations[language];

  if (dismissed) return null;

  return (
    <div className="bg-blue-900 text-white text-xs py-2 px-4 shadow-sm border-b border-blue-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-medium">
          <Info className="w-4 h-4 text-sky-300 shrink-0" />
          <span>{t.educationalDisclaimer}</span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-sky-200 hover:text-white transition-colors p-1 rounded hover:bg-blue-800/60 text-xs shrink-0 flex items-center gap-1"
          title={t.disclaimerDismiss}
          aria-label={t.disclaimerDismiss}
        >
          <span>{t.disclaimerDismiss}</span>
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
