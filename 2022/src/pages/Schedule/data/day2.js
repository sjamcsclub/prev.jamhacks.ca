const colour = {
  event: '#9900FF',
  food: '#13E341',
  workshop: '#13C6FF',
  activity: '#161DBC',
  sponsor: '#E1921B',
};

export const Day2Data = [
  {
    startTime: 0,
    events: [
      {
        title: 'Minecraft Parkour',
        duration: 30,
        specialStyles: { background: colour.activity },
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
    startTime: 8,
    events: [
      {
        title: 'Breakfast',
        duration: 120,
        specialStyles: {
          width: '50%',
          background: colour.food,
        },
        type: 'In-person',
      },
    ],
  },
  {
    startTime: 8.5,
    events: [
      {
        title: 'Grade 12 Hacker Meetup',
        duration: 60,
        type: 'In-person',
        specialStyles: {
          marginLeft: '50%',
          background: colour.activity,
        },
      },
    ],
  },
  {
    startTime: 9.5,
    events: [
      {
        title: 'Intro to APIs',
        duration: 75,
        description:
          'Host: Matthews Ma & Samer <br><br>A practical introduction to API principles and how to use and create them in your own projects.',
        specialStyles: {
          marginLeft: '50%',
          background: colour.workshop,
        },
      },
    ],
  },
  {
    startTime: 10,
    events: [
      {
        title: 'Intro to Git',
        duration: 75,
        description:
          'Host: Leon Fattakhov <br><br>Learn how to use Git, one of the most popular version control systems, to enable collaboration between team members! This workshop will cover how to get started with Git and how to use it with GitHub!',
        specialStyles: {
          width: '20%',
          background: colour.workshop,
        },
      },
    ],
  },
  {
    startTime: 10.4,
    events: [
      {
        title: 'Intro to Machine Learning',
        duration: 75,
        description:
          'Host: Trevor Du <br><br> An overview of the concepts and applications of machine learning at a high school level. Come join us to learn what sort of problems AI can solve and how it can be done with machine learning. Using PyTorch, we will be training a neural network to recognize handwritten digits, so make sure to bring a laptop!',
        specialStyles: {
          marginLeft: '20%',
          width: '20%',
          background: colour.workshop,
        },
      },
    ],
  },
  {
    startTime: 11,
    events: [
      {
        title: 'Introducing Your Free Personal Office',
        duration: 75,
        specialStyles: {
          marginLeft: '40%',
          width: '20%',
          background: colour.workshop,
        },
      },
    ],
  },
  {
    startTime: 11.2,
    events: [
      {
        title: 'Graph Theory and Computer Science',
        duration: 90,
        description:
          "Host: Jason Schattman <br><br> What's the cheapest way for a K-pop band to visit 20 cities while on tour? What are the odds that Black Panther will still be alive after 12 missions? How does Google Maps get you directions so fast? Why does tomato soup remind me of rubber ducks? The answer to all of these questions lies in graph theory, the science of networks. In this FRED talk (Free Range Educators), Dr. Jason Schattman will show how to use Python to model problems in graph theory. Along the way, you'll learn about Markov chains, Djikstra's algorithm, linear algebra, and the world famous TSP (traveling salesman problem).",
        specialStyles: {
          width: '20%',
          background: colour.workshop,
        },
      },
    ],
  },
  {
    startTime: 12,
    events: [
      {
        title: 'Sponsor Booths',
        duration: 360,
        specialStyles: {
          background: colour.sponsor,
          width: '25%',
          marginLeft: '75%',
        },
      },
    ],
  },
  {
    startTime: 12.5,
    events: [
      {
        title: 'Intro to UI/UX Design',
        duration: 90,
        description: 'Host: LJA Bolongaita',
        specialStyles: {
          width: '20%',
          marginLeft: '20%',
          background: colour.workshop,
        },
      },
      {
        title: 'Intro to Front-end',
        duration: 90,
        description:
          'Host: Juberiya Ayaz <br><br> In this workshop, we will provide you with a structured introduction that will teach you all you need to know to become a front-end web developer. Front-end web development, also known as client-side development, is the practice of producing HTML, CSS, and JavaScript for a website or Web Application so that a user can see and interact with them directly. <br><br> Topics covered:<br> How to get started HTML, the language that gives web content structure and meaning. CSS, the language used to style web pages. JavaScript, the scripting language used to create dynamic functionality.',
        specialStyles: {
          width: '20%',
          background: colour.workshop,
        },
      },
    ],
  },
  {
    startTime: 14,
    events: [
      {
        title: 'Lunch',
        duration: 120,
        type: 'In-person',
        specialStyles: {
          width: '75%',
          background: colour.food,
        },
      },
    ],
  },
  {
    startTime: 15.75,
    events: [
      {
        title: 'Intro to Docker',
        duration: 75,
        description:
          "Host: Misha Melynk <br><br> This introductory Docker workshop will give you an overview of some of the features that Docker provides. It will start by showing you how to run containers from Docker images. After, it will also get you started with building your own images with Dockerfiles. The goal will be to launch a container from an image you've built yourself.",
        specialStyles: {
          width: '37.5%',
          background: colour.workshop,
        },
      },
    ],
  },
  {
    startTime: 16,
    events: [
      {
        title: 'Intro to Websocket 3.0',
        duration: 75,
        description:
          'Host: Wilson Wang <br><br> This workshop will teach the fundamentals of Websockets and communication over the internet. Throughout the workshop, you will learn about protocols like HTTP, TCP/UDP, and of course WebSockets. There will be lots of interactive demonstrations that will make the workshop far more enjoyable. By the end of the workshop, you should be able to make a simple chat application and/or game, and understand how to expand it for other uses.',
        specialStyles: {
          background: colour.workshop,
          width: '37.5%',
          marginLeft: '37.5%',
        },
      },
    ],
  },
  {
    startTime: 17.2,
    events: [
      {
        title: 'Understanding Quantum Computers',
        description:
          'Host: Jack DeGooyer <br><br> Quantum computing is set to shape the future fundamentally. We will explore quantum physics, computer science, and their intersection, quantum information processing in this workshop. Topics such as superpositions, wave-particle duality, and quantum machine learning will be introduced to give attendees a framework to understand quantum information. With this foundation, Python packages such as PennyLane and Qiskit and simple simulators such as Quirk will be discussed.<br><br>Prerequisites: There are no prerequisites.<br>Learning outcome: At the end, attendees will be able to understand key terms used in quantum computation and how they are leveraged for information processing. Moreover, attendees will be given resources to further their understanding of information processing.',
        duration: 75,
        specialStyles: {
          width: '20%',
          background: colour.workshop,
        },
      },
    ],
  },
  {
    startTime: 17.5,
    events: [
      {
        title: 'Werewolf',
        duration: 75,
        type: 'In-person',
        specialStyles: {
          marginLeft: '20%',
          width: '40%',
          background: colour.activity,
        },
      },
    ],
  },
  {
    startTime: 18,
    events: [
      {
        title: 'A Robot for Everyone',
        duration: 75,
        description:
          'Hosts: Priya Darshini, Rahul Goyal <br><br>We are surrounded by automations everywhere, be it personal or work life. Join us for an interactive session to learn and understand how to kick start your journey towards RPA (Robotic Process Automation) and empower everyone with a digital assistant to work faster, smarter, and more efficiently.',
        specialStyles: {
          width: '20%',
          marginLeft: '60%',
          background: colour.workshop,
        },
      },
    ],
  },
  {
    startTime: 19,
    events: [
      {
        title: 'Dinner',
        type: 'In-person',
        duration: 75,
        specialStyles: {
          background: colour.food,
          width: '50%',
        },
      },
    ],
  },
  {
    startTime: 20,
    events: [
      {
        title: 'Fireside Chat',
        duration: 120,
        specialStyles: {
          marginLeft: '50%',
          background: colour.activity,
        },
      },
    ],
  },
  {
    startTime: 20.5,
    events: [
      {
        title: 'Jeopardy Trivia Competition',
        duration: 60,
        type: 'In-person',
        specialStyles: {
          width: '50%',
          background: colour.activity,
        },
      },
    ],
  },
  {
    startTime: 22,
    events: [
      {
        title: 'Slideshow Karaoke',
        duration: 60,
        type: 'In-person',
        specialStyles: {
          background: colour.activity,
          width: '50%',
          marginLeft: '50%',
        },
      },
    ],
  },
  {
    startTime: 23,
    events: [
      {
        title: 'Cup Stacking',
        duration: 60,
        type: 'In-person',
        specialStyles: {
          width: '50%',
          background: colour.activity,
        },
      },
    ],
  },
  {
    startTime: 23.5,
    events: [
      {
        title: 'Minecraft Speedrunning Competition',
        duration: 30,
        specialStyles: {
          width: '50%',
          marginLeft: '50%',
          background: colour.activity,
        },
      },
    ],
  },
];
