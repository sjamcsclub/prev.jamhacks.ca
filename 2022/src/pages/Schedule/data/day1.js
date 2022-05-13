// Must be sorted by event start time

export const Day1Data = [
  {
    title: 'Hacker Sign In',
    startTime: 16,
    duration: 1,
    type: 'Online',
    description: 'Sign in at the front desk and on Discord',
  },
  {
    title: 'Hacker Networking',
    startTime: 17,
    duration: 1,
    type: 'Online',
    description: 'Meet new people!',
  },
  { title: 'Opening Ceremonies', startTime: 18, duration: 0.5, type: 'Online' },
  {
    title: 'Keynote Speaker: Chris Albinson, CEO of Communitech',
    startTime: 18.5,
    duration: 0.5,
    type: 'Online',
    description: 'Chris Albinson, CEO of Communitech',
  },
  {
    title: 'Dinner',
    startTime: 19,
    duration: 2,
    type: 'In-person',
    description: 'You eat!',
    concurrent: {
      title: 'Group finding and Brainstorming',
      duration: 1,
      description: 'Meet people',
    },
  },
  {
    title: 'Intro to Python',
    startTime: 21,
    duration: 1,
    type: 'In-person',
    description: 'Learn Python',
  },
  {
    title: 'Hacking Begins!',
    startTime: 22,
    duration: 0.5,
    type: 'Online',
    description: 'Hacking begins!',
  },
  {
    title: 'Scribbl.io',
    startTime: 23,
    duration: 1 / 3,
    type: 'In-person',
    description: 'Group game',
    concurrent: {
      title: 'Snack: Cup Ramen',
      duration: 1 / 3,
      description: 'Cup Ramen!!!',
    },
  },
  {
    title: 'Drawbattle.io',
    startTime: 23 + 1 / 3,
    duration: 1 / 3,
    type: 'Online',
    description: 'Group game',
  },
  {
    title: 'Minecraft',
    startTime: 23 + 2 / 3,
    duration: 1 / 3,
    type: 'Online',
    description: 'Group game',
  },
];
