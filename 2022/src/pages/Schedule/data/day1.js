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
        description: 'Come physically onsite at E7',
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
        type: 'In-person',
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
        description:
          'Host: Misha Melynk <br><br> This introductory Python workshop will show you the basics of the Python programming language.<br>It will present to you the tools that Python provides that are crucial in many applications.The workshop will cover:<br> - Arithmetic in Python<br>- Data types like ints, floats and strings<br>- Control flow with if statements and loops<br>- Lists<br>- Functions <br>- Importing modules <br><br>The workshop will work through an example of incrementally creating a program to calculate a list of prime numbers.',
        specialStyles: { background: colour.workshop, width: '37.5%' },
      },
      {
        title: 'Intro to Web3 and Blockchain-Based Applications',
        duration: 60,
        description:
          'Host: Kevin Jones (Developer Advocate for Scaffold-ETH) Web3, Solidity, Blockchain, Ethereum, EVM, Crypto… <br><br>Have you ever heard these terms being thrown around without knowing what they really mean? In this talk, Kevin will give a brief overview of what Web3 is, how the concepts are supported by blockchain technology and what it looks like to build web applications on these new types of networks and protocols.',
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
        description: 'Hosts: Leo Tian, Lucy Mo',
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
        description:
          'Host: Kevin Jones (Developer Advocate for Scaffold-ETH) <br><br> Join Kevin Jones for a workshop on Scaffold-ETH, an off-the-shelf stack for rapid prototyping on Ethereum, giving developers access to state-of-the-art tools to quickly learn and ship an Ethereum-based dApp. Scaffold-ETH is everything you need to get started building decentralized applications powered by smart contracts. Learn more <a href="https://github.com/scaffold-eth/scaffold-eth" target="_blank">here</a>!',
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
