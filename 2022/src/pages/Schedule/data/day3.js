const colour = {
  event: '#9900FF',
  food: '#4AA006',
  workshop: '#34CEFF',
  activity: '#2E36F5',
  sponsor: '#FFB23F',
};

export const Day3Data = [
  {
    startTime: 0,
    events: [
      {
        title: 'Minecraft Competition: Speedrunning',
        duration: 60,
        specialStyles: { background: colour.activity },
        location: 'Virtual',
      },
    ],
  },
  {
    startTime: 3,
    events: [
      {
        title: 'Midnight Snack: AWAKE Chocolate',
        duration: 30,
        type: 'In-person',
        specialStyles: { background: colour.food },
      },
    ],
  },
  {
    startTime: 7,
    events: [
      {
        title: 'Breakfast',
        duration: 120,
        specialStyles: {
          width: '50%',
          background: colour.food,
        },
        type: 'In-person',
        location: 'E7 (2472)',
      },
    ],
  },
  {
    startTime: 8.5,
    events: [
      {
        title: 'How to Pitch Your Hackathon Project',
        duration: 75,
        begin: '8:30 AM',
        end: '9:45 PM',
        description:
          "Host: Advait Maybhate <br><br> What's the difference between a good and a great pitch? What components should you have in your hackathon demo? How can you blow the judges away (perhaps literally)? Come out to this workshop led by Advait Maybhate, a voracious hackathoner, to find the answer to these questions and many more!",
        specialStyles: { marginLeft: '50%', background: colour.workshop },
        location: 'Virtual',
      },
    ],
  },
  {
    startTime: 10,
    events: [
      {
        title: 'Hacking Ends!',
        duration: 15,
        specialStyles: {
          background: colour.event,
          padding: '10px',
        },
      },
    ],
  },
  {
    startTime: 11,
    events: [
      {
        title: 'Project Judging',
        duration: 360,
        specialStyles: {
          width: '40%',
          background: colour.event,
        },
        location: 'E7 (2466), (2464), (2462), (2458), (2456) & Virtual',
      },
      {
        title: 'Sponsor Booths',
        duration: 360,
        specialStyles: {
          width: '30%',
          background: colour.sponsor,
        },
        location: 'E7 (2472)',
      },
    ],
  },
  {
    startTime: 12.2,
    events: [
      {
        title: 'Lunch',
        duration: 105,
        type: 'In-person',
        specialStyles: {
          width: '30%',
          marginLeft: '70%',
          background: colour.food,
        },
        location: 'E7 (2472)',
      },
    ],
  },
  {
    startTime: 15.5,
    events: [
      {
        title: 'Snack: Samosas',
        duration: 30,
        type: 'In-person',
        specialStyles: {
          width: '30%',
          marginLeft: '70%',
          background: colour.food,
        },
        location: 'E7 (2472)',
      },
    ],
  },
  {
    startTime: 17,
    events: [
      {
        title: 'Closing Ceremonies',
        duration: 45,
        specialStyles: {
          background: colour.event,
        },
        location: 'E7 (1427)',
      },
    ],
  },
];
