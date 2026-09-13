export type DepartmentKey = 
  | 'technical'
  | 'esports-pc'
  | 'esports-mobile'
  | 'social-media'
  | 'education'
  | 'public-relations'
  | 'design';

export interface OfferLetterTemplate {
  displayName: string;
  hasWelcomeLine: boolean;
  p1: string;
  p2: string;
  closing: string;
}

export const departmentTemplates: Record<DepartmentKey, OfferLetterTemplate> = {
  'technical': {
    displayName: 'Technical Team',
    hasWelcomeLine: true,
    p1: 'We are delighted to inform you that you have been selected as a Core Team Member – Technical Team of the Virtual Reality and Gaming Club (VRGC) for the 2026–2027 tenure. Your enthusiasm, technical aptitude, and performance throughout the recruitment process have distinguished you, and we are excited to welcome you to a team committed to innovation, collaboration, and excellence.',
    p2: 'As a member of the Technical Team, you will be responsible for developing and maintaining the club\'s technical infrastructure. Your role includes managing the club website, maintaining databases and digital platforms, providing technical support during club events, and ensuring the smooth execution of online and offline activities. You will collaborate closely with other departments to build reliable solutions that enhance the club\'s operations and support future initiatives.',
    closing: 'We look forward to your contributions in building a strong technical foundation for VRGC and helping us deliver impactful experiences for our community.'
  },
  'esports-pc': {
    displayName: 'Esports Team (PC)',
    hasWelcomeLine: false,
    p1: 'We are delighted to inform you that you have been selected as a Core Team Member – Esports Team of the Virtual Reality and Gaming Club (VRGC) for the 2026–2027 tenure. Your dedication and enthusiasm throughout the recruitment process have earned you a place in our growing community.',
    p2: 'As a member of the Esports Team, you will play a key role in planning and executing competitive gaming events. Your responsibilities include organizing tournaments, coordinating registrations, managing match operations, handling casting and live streaming, and ensuring participants enjoy a professional and engaging competitive experience. Working alongside other departments, you will help establish VRGC as a recognized hub for collegiate esports.',
    closing: 'We look forward to your contributions in creating memorable tournaments and building a vibrant esports community.'
  },
  'esports-mobile': {
    displayName: 'Esports Team (Mobile)',
    hasWelcomeLine: false,
    p1: 'We are delighted to inform you that you have been selected as a Core Team Member – Esports Team of the Virtual Reality and Gaming Club (VRGC) for the 2026–2027 tenure. Your dedication and enthusiasm throughout the recruitment process have earned you a place in our growing community.',
    p2: 'As a member of the Esports Team, you will play a key role in planning and executing competitive gaming events. Your responsibilities include organizing tournaments, coordinating registrations, managing match operations, handling casting and live streaming, and ensuring participants enjoy a professional and engaging competitive experience. Working alongside other departments, you will help establish VRGC as a recognized hub for collegiate esports.',
    closing: 'We look forward to your contributions in creating memorable tournaments and building a vibrant esports community.'
  },
  'social-media': {
    displayName: 'Social Media',
    hasWelcomeLine: true,
    p1: 'We are delighted to inform you that you have been selected as a Core Team Member – Social Media Team of the Virtual Reality and Gaming Club (VRGC) for the 2026–2027 tenure. Your creativity and enthusiasm have earned you a place in our growing team, and we are excited to have you on board.',
    p2: 'As a member of the Social Media Team, you will manage the club\'s digital presence across platforms such as Instagram, YouTube, and other social channels. Your responsibilities include planning and publishing engaging content, highlighting club activities, promoting events, capturing memorable moments, and strengthening the club\'s online identity. Working closely with the Design and PR teams, you will help showcase VRGC\'s achievements and connect with a wider audience.',
    closing: 'We look forward to seeing your creativity bring the story of VRGC to life and inspire our growing community.'
  },
  'education': {
    displayName: 'Education Team',
    hasWelcomeLine: true,
    p1: 'We are delighted to inform you that you have been selected as a Core Team Member – Education Team of the Virtual Reality and Gaming Club (VRGC) for the 2026–2027 tenure. Your passion for learning, innovation, and technology has made you an excellent addition to our team.',
    p2: 'As a member of the Education Team, you will lead the club\'s learning initiatives by organizing workshops, technical sessions, and hands-on training programs. You will contribute to collaborative game development projects, promote knowledge sharing within the community, and encourage members to explore emerging technologies in gaming, virtual reality, and immersive experiences. Your efforts will help create an environment where learning and innovation thrive together.',
    closing: 'We are excited to have you contribute to building a knowledgeable and future-ready VRGC community.'
  },
  'public-relations': {
    displayName: 'Public Relations',
    hasWelcomeLine: true,
    p1: 'We are delighted to inform you that you have been selected as a Core Team Member – Public Relations Team of the Virtual Reality and Gaming Club (VRGC) for the 2026–2027 tenure. Your communication skills, confidence, and professionalism have made you an invaluable addition to our team.',
    p2: 'As a member of the Public Relations Team, you will represent VRGC by building meaningful relationships with students, organizations, and industry partners. Your responsibilities include coordinating collaborations, engaging with sponsors, managing external communications, and promoting the club\'s initiatives to expand its reach and reputation. Through your efforts, you will help strengthen VRGC\'s presence both within and beyond the university community.',
    closing: 'We look forward to your contributions in building lasting partnerships and taking VRGC to new heights.'
  },
  'design': {
    displayName: 'Design Team',
    hasWelcomeLine: false,
    p1: 'We are delighted to inform you that you have been selected as a Core Team Member – Design Team of the Virtual Reality and Gaming Club (VRGC) for the 2026–2027 tenure. Your creativity, dedication, and performance during the recruitment process have earned you a place in our team, and we are excited to have you with us.',
    p2: 'As a member of the Design Team, you will be responsible for creating compelling visual content that represents the identity of VRGC. Your role includes designing event posters, social media creatives, branding materials, promotional assets, and editing visual content that enhances the overall experience of our events. You will collaborate with every department to ensure that every campaign and event reflects the club\'s professionalism and creativity.',
    closing: 'We look forward to seeing your ideas transform into designs that inspire, engage, and leave a lasting impression.'
  }
};

/**
 * Highly forgiving normalizer to convert a raw Firestore string (e.g. "Esports (PC)") 
 * into one of the known DepartmentKeys.
 */
export function normalizeDepartment(raw: string): DepartmentKey | null {
  if (!raw) return null;
  const norm = raw.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  if (norm.includes('technical') || norm.includes('tech')) return 'technical';
  if (norm.includes('esportspc') || norm.includes('pcesports')) return 'esports-pc';
  if (norm.includes('esportsmobile') || norm.includes('mobileesports') || norm.includes('mob')) return 'esports-mobile';
  if (norm.includes('socialmedia') || norm.includes('social')) return 'social-media';
  if (norm.includes('education') || norm.includes('edu')) return 'education';
  if (norm.includes('publicrelations') || norm.includes('pr')) return 'public-relations';
  if (norm.includes('design') || norm.includes('creative')) return 'design';
  
  return null;
}
