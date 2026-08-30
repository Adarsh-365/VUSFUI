import React from 'react';
import { AboutOverviewPage } from './AboutOverviewPage';
import { OfficeBearer } from '../types';

interface AboutPageProps {
  onSelectBearer: (bearer: OfficeBearer) => void;
  onMemberClick: (type: 'become' | 'members' | 'employee') => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onSelectBearer, onMemberClick }) => {
  return <AboutOverviewPage onMemberClick={onMemberClick} />;
};
