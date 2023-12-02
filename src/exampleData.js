const exampleData = {
  personalDetails: {
    firstName: 'John',
    lastName: 'Smith',
    email: 'johnsmith@gmail.com',
    phoneNumber: '111-222-3333',
    linkedin: 'linkedin.com/in/johnsmith',
    github: 'github.com/johnsmith',
  },
  educations: [
    {
      school: 'Southwestern University',
      address: 'Georgetown, TX',
      degree: 'Bachelor of Arts in Computer Science, Minor in Business',
      startDate: 'Aug. 2018',
      endDate: 'May 2021',
      id: crypto.randomUUID(),
    },
    {
      school: 'Blinn College',
      address: 'Bryan, TX',
      degree: "Associate's in Liberal Arts",
      startDate: 'Aug. 2014',
      endDate: 'May 2018',
      id: crypto.randomUUID(),
    },
  ],
  experiences: [
    {
      positionTitle: 'Undergraduate Research Assistant',
      companyName: 'Texas A&M University',
      companyLocation: 'Georgetown, TX',
      startDate: 'June 2023',
      endDate: 'Present',
      achievements: 'Developed a REST API using Fast API and PostgreSQL to store data from learning management systems\n' + 'Developed a full-stack web application using Flask, React, PostgreSQL, and Docker to analyze GitHub data\n' + 'Explored ways to visualize GitHub collaboration in a classroom setting',
      id: crypto.randomUUID(),
    },
    {
      positionTitle: 'Information Technology Support Specialist',
      companyName: 'Southwestern University',
      companyLocation: 'Georgetown, TX',
      startDate: 'Sep. 2018',
      endDate: 'Present',
      achievements: 'Communicate with managers to set up campus computers used on campus\n' + 'Assess and troubleshoot computer problems brought by students, faculty and staff\n' + 'Maintain upkeep of computers, classroom equipment, and 200 printers across campus',
      id: crypto.randomUUID(),
    },
  ],
  emptyInputs: {
    personalDetails: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      linkedin: '',
      github: '',
    },
    education: {
      school: '',
      address: '',
      degree: '',
      startDate: '',
      endDate: '',
    },
    experience: {
      positionTitle: '',
      companyName: '',
      companyLocation: '',
      startDate: '',
      endDate: '',
      achievements: '',
    },
  },
};

export default exampleData;
