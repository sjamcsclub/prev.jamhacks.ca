// Must be sorted by event start time

export const Day1Data = [
  { title: 'Hacker Sign In', startTime: 16, duration: 1, type: 'Online' },
  { title: 'Hacker Networking', startTime: 17, duration: 1, type: 'Online' },
  { title: 'Opening Ceremonies', startTime: 18, duration: 0.5, type: 'Online' },
  {
    title: 'Keynote Speaker: Chris Albinson, CEO of Communitech',
    startTime: 18.5,
    duration: 0.5,
    type: 'Online',
  },
  {
    title: 'Dinner',
    startTime: 19,
    duration: 2,
    type: 'In-person',
    concurrent: {
      title: 'Group finding and Brainstorming',
      duration: 1,
    },
  },
  {
    title: 'Intro to Python',
    startTime: 21,
    duration: 1,
    type: 'In-person',
  },
  {
    title: 'Hacking Begins!',
    startTime: 22,
    duration: 0.5,
    type: 'Online',
  },
  {
    title: 'Scribbl.io',
    startTime: 23,
    duration: 1 / 3,
    type: 'In-person',
    concurrent: {
      title: 'Snack: Cup Ramen',
      duration: 1 / 3,
    },
  },
  {
    title: 'Drawbattle.io',
    startTime: 23 + 1 / 3,
    duration: 1 / 3,
    type: 'Online',
  },
  {
    title: 'Minecraft',
    startTime: 23 + 2 / 3,
    duration: 1 / 3,
    type: 'Online',
  },
];