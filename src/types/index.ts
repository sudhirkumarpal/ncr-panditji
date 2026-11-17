export type Language = 'hi' | 'en';

export interface PujaService {
  id: string;
  category: 'griha' | 'hawan' | 'sanskar' | 'katha' | 'shiva' | 'special';
  titleHi: string;
  titleEn: string;
  subtitleHi: string;
  subtitleEn: string;
  descHi: string;
  descEn: string;
  iconName: string;
  popular?: boolean;
  durationHi: string;
  durationEn: string;
  samagriAssistance: boolean;
  benefitsHi: string[];
  benefitsEn: string[];
  includesHi: string[];
  includesEn: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  service: string;
  rating: number;
  date: string;
  commentHi: string;
  commentEn: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  questionHi: string;
  questionEn: string;
  answerHi: string;
  answerEn: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  serviceId: string;
  city: string;
  address: string;
  preferredDate: string;
  preferredTime: string;
  samagriNeeded: boolean;
  notes: string;
}

