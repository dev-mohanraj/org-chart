export const EMPLOYEES_LIST = [
  {
    name: "Suresh",
    id: "suresh",
    team: "Head of a company",
    designation: "CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    hierarchy: 1,
  },
  {
    name: "Vivek",
    id: "vivek",
    team: "Apps",
    designation: "CTO",
    hierarchy: 2,
    managerId: "suresh",
  },
  {
    name: "Adhi",
    id: "adhi",
    team: "Platform",
    designation: "CTO",
    hierarchy: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    managerId: "suresh",
  },
  {
    name: "Purushoth",
    id: "purushoth",
    team: "Platform",
    hierarchy: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=3466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    designation: "Backend Manager",
    managerId: "adhi",
  },
  {
    name: "Gopal",
    id: "gopal",
    team: "Platform",
    hierarchy: 4,
    designation: "Team Lead",
    managerId: "purushoth",
    imageUrl:
      "https://images.unsplash.com/photo-1645830166230-187caf791b90?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Saravanan",
    id: "sara",
    team: "Apps",
    hierarchy: 3,
    designation: "Frontend Manager",
    managerId: "vivek",
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=3578&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Partha",
    id: "partha",
    team: "DevX",
    hierarchy: 4,
    designation: "Team Lead",
    managerId: "vivek",
    imageUrl:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Ramprasad",
    id: "ram",
    team: "Apps",
    hierarchy: 4,
    designation: "Team Lead",
    managerId: "sara",
    imageUrl:
      "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Abdhul",
    id: "abdhul",
    team: "Apps",
    hierarchy: 5,
    designation: "Senior software engineer",
    managerId: "sara",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mohan",
    id: "mohan",
    team: "Apps",
    hierarchy: 6,
    designation: "Software Engineer",
    managerId: "abdhul",
    imageUrl:
      "https://images.unsplash.com/photo-1645378999496-33c8c2afe38d?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Venkatesh",
    id: "venki",
    team: "Apps",
    hierarchy: 6,
    designation: "Software Engineer",
    managerId: "ram",
    imageUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Satheesh",
    id: "satheesh",
    team: "Apps",
    hierarchy: 6,
    designation: "Software Engineer",
    managerId: "ram",
    imageUrl:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=3580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Maneesh",
    id: "maneesh",
    team: "Apps",
    hierarchy: 6,
    designation: "Software Engineer",
    managerId: "ram",
  },
  {
    name: "Indhu",
    id: "indhu",
    team: "DevX",
    hierarchy: 5,
    designation: "Senior Software Engineer",
    managerId: "partha",
    imageUrl:
      "https://st4.depositphotos.com/12982378/21866/i/450/depositphotos_218669658-stock-photo-portrait-beautiful-woman-sweater-sitting.jpg",
  },
  {
    name: "Shibi",
    id: "shibi",
    team: "DevX",
    hierarchy: 6,
    designation: "Software Engineer",
    managerId: "indhu",
    imageUrl:
      "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "New guy",
    id: "new1",
    team: "DevX",
    hierarchy: 6,
    designation: "Software Engineer",
    managerId: "shibi",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "New guy 2",
    id: "new2",
    team: "DevX",
    hierarchy: 6,
    designation: "Software Engineer",
    managerId: "new1",
    imageUrl:
      "https://images.unsplash.com/photo-1645378999496-33c8c2afe38d?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
