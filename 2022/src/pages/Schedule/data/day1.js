// Must be sorted by event start time

const colour = {
  event: '#9900FF',
  food: '#13E341',
  workshop: '#13C6FF',
  activity: '#161DBC',
  sponsor: '#E1921B',
};

export const Day1Data = [
  {
    startTime: 16,
    events: [
      {
        title: 'Hacker Check-in Begins!',
        duration: 15,
        type: 'In-person',
        specialStyles: {
          background: colour.event,
          padding: '10px',
        },
      },
    ],
  },
  {
    startTime: 17.5,
    events: [
      {
        title: 'Opening Ceremonies',
        duration: 60,
        specialStyles: {
          background: colour.event,
        },
      },
    ],
  },
  {
    startTime: 18.5,
    events: [
      {
        title: 'Keynote Speaker: Chris Albinson, CEO of Communitech',
        duration: 30,
        specialStyles: {
          background: colour.event,
        },
      },
    ],
  },
  {
    startTime: 19,
    events: [
      {
        title: 'Dinner',
        duration: 120,
        type: 'In-person',
        specialStyles: {
          background: colour.food,
        },
      },
      {
        title: 'Group Finding',
        duration: 60,
        specialStyles: {
          background: colour.activity,
        },
      },
      {
        title: 'Hacker Networking',
        duration: 120,
        specialStyles: {
          background: colour.activity,
        },
      },
      {
        title: 'Sponsor Booths',
        duration: 240,
        specialStyles: {
          background: colour.sponsor,
        },
      },
    ],
  },
  {
    startTime: 20.5,
    events: [
      {
        title: 'Snack: DQ Dilly Bar',
        duration: 30,
        specialStyles: {
          width: '25%',
          marginLeft: '25%',
          background: colour.food,
        },
      },
    ],
  },
  {
    startTime: 21,
    events: [
      {
        title: 'Intro to Python',
        duration: 60,
        specialStyles: { background: colour.workshop, width: '37.5%' },
      },
      {
        title: 'Intro to Web3 and Blockchain-Based Applications',
        duration: 60,
        specialStyles: { background: colour.workshop, width: '37.5%' },
      },
    ],
  },
  {
    startTime: 22,
    events: [
      {
        title: 'Hacking Begins',
        duration: 15,
        specialStyles: {
          background: colour.event,
          padding: '10px',
          width: '75%',
        },
      },
    ],
  },
  {
    startTime: 22,
    events: [
      {
        title: 'Intro to Web Development',
        duration: 120,
        specialStyles: {
          marginLeft: '60%',
          width: '20%',
          background: colour.workshop,
        },
      },
    ],
  },
  {
    startTime: 22.5,
    events: [
      {
        title: 'Build Web3 dApps Quick and Easy: Intro to Scaffold-ETH',
        duration: 60,
        specialStyles: {
          width: '20%',
          background: colour.workshop,
        },
      },
      {
        title: 'Skribbl.io',
        duration: 60,
        specialStyles: {
          width: '20%',
          background: colour.activity,
        },
      },
    ],
  },
  {
    startTime: 23.5,
    events: [
      {
        title: 'Minecraft Parkour',
        duration: 30,
        specialStyles: {
          marginLeft: '20%',
          width: '20%',
          background: colour.activity,
        },
      },
    ],
  },
];
