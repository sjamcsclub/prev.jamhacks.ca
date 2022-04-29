export const Day3Data = [
  {
    title: 'Continuation of Activities',
    startTime: 0,
    duration: 1,
    type: 'Online',
  },
  {
    title: 'Midnight Snack: AWAKE	',
    startTime: 3,
    duration: 0.5,
    type: 'In-person',
  },
  {
    title: 'How to Pitch Your Hackathon Project',
    startTime: 8.5,
    duration: 1,
    type: 'In-person',
  },
  {
    title: 'Hacking Ends + Submit on Devpost',
    startTime: 10,
    duration: 1,
    type: 'Online',
  },
  {
    title: 'Project Judging',
    overlap: true,
    startTime: 11,
    duration: 6,
    type: 'Online',
    hasConcurrent: true,
  },
  {
    title: 'Lunch',
    startTime: 13,
    duration: 2,
    type: 'In-person',
    behaviour: 'right',
    hasConcurrent: true,
  },
  {
    title: 'Closing Ceremonies',
    startTime: 17,
    duration: 1,
    type: 'Online',
  },
];
