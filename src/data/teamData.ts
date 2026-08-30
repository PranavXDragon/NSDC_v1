export interface TeamMember {
  name: string;
  role: string;
  category: 'faculty' | 'office-bearer' | 'technical' | 'creative';
  imageUrl?: string;
  linkedin?: string;
}

// ==========================================
// 2026-27 TEAM (Founding Team)
// ==========================================

export const facultyMembers: TeamMember[] = [
  {
    name: 'Dr. Lowlesh Yadav',
    role: 'Faculty Advisor',
    category: 'faculty',
    imageUrl: '/team/yadav.jpeg',
  },
  {
    name: 'Prof. Leena Pimple',
    role: 'Faculty Coordinator',
    category: 'faculty',
    imageUrl: '/team/leena-pimple.jpeg',
  },
];

export const officeBearers: TeamMember[] = [
  {
    name: 'Aishwarya Dhole',
    role: 'Student Leader',
    category: 'office-bearer',
    imageUrl: '/team/aishwarya.jpeg',
    linkedin: 'https://www.linkedin.com/in/aishwarya-dhole-42111a362',
  },
  {
    name: 'Shubham Munde',
    role: 'Co-Leader',
    category: 'office-bearer',
    imageUrl: '/team/shubham.jpeg',
    linkedin: 'https://www.linkedin.com/in/shubham-munde-ba5ab4335',
  },
  {
    name: 'Piyush Nipane',
    role: 'Secretary & Head of Documentation',
    category: 'office-bearer',
    imageUrl: '/team/piyush.jpeg',
    linkedin: 'https://www.linkedin.com/in/piyush-nipane-26b401332',
  },
  {
    name: 'Pranav Navghare',
    role: 'Head of Education & Technical Head',
    category: 'office-bearer',
    imageUrl: '/team/pranav.jpeg',
    linkedin: 'https://www.linkedin.com/in/pranav-navghare-299798338/',
  },
  {
    name: 'Chaitanya Kadu',
    role: 'Head of Event Management & Logistics',
    category: 'office-bearer',
    imageUrl: '/team/chaitanya.jpeg',
  },
  {
    name: 'Rutvesh Shingade',
    role: 'Head of Social Media',
    category: 'office-bearer',
    imageUrl: '/team/rutvesh.png',
    linkedin: 'https://www.linkedin.com/in/rutvesh-shingade-3bb144381',
  },
  {
    name: 'Arya Pathrabe',
    role: 'Head of Outreach & PR',
    category: 'office-bearer',
    imageUrl: '/team/arya.jpeg',
  },
  {
    name: 'Jeenat Haque',
    role: 'Treasurer',
    category: 'office-bearer',
    imageUrl: '/team/jeenat.jpeg',
    linkedin: 'https://www.linkedin.com/in/zeenat-haque-437758345',
  },
];

export const technicalTeam: TeamMember[] = [];
export const creativeTeam: TeamMember[] = [];

// ==========================================
// COMBINED DATA BY YEAR
// ==========================================

export type TeamYear = "2026-27";

export const teamDataByYear: Record<TeamYear, {
  faculty: TeamMember[];
  officeBearers: TeamMember[];
  technical: TeamMember[];
  creative: TeamMember[];
}> = {
  "2026-27": {
    faculty: facultyMembers,
    officeBearers: officeBearers,
    technical: technicalTeam,
    creative: creativeTeam,
  }
};
