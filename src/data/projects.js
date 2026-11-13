// Every project on the site lives here. To add or change one, edit this file only.
//
// Fields:
//   title, description, tags  – what shows on the card
//   icon                      – any icon name from lucide-react (imported below)
//   repo                      – GitHub repo name under github.com/jasonr1902 (optional)
//   isPublic                  – true once the repo is public; private repos show a "Private repo" badge instead of a Code link
//   demo                      – live link, if there is one (optional)

import {
  MonitorPlay,
  Music,
  Sparkles,
  Timer,
  Users,
  Spade,
  Palette,
  Castle,
  Landmark,
  Trophy,
  Smartphone,
  BookOpen,
  GraduationCap,
  Plane,
  HeartPulse,
  Joystick,
} from "lucide-react";

export const GITHUB_USER = "jasonr1902";
export const githubUrl = (repo) => `https://github.com/${GITHUB_USER}/${repo}`;

export const featuredProjects = [
  {
    title: "YouTube Channel Tracker",
    description:
      "Mac desktop app that manages a video production pipeline from first idea to published video, pulling channel data from the YouTube API. Ships through GitHub Releases with automatic updates.",
    tags: ["Electron", "React", "TypeScript", "SQLite", "YouTube API"],
    icon: MonitorPlay,
    repo: "Youtube-Channel-Tracker",
    isPublic: true,
    demo: "https://github.com/jasonr1902/Youtube-Channel-Tracker/releases/latest",
    demoLabel: "Download",
  },
  {
    title: "Private Lessons Tracker",
    description:
      "Mobile app for a private music teacher: students, lessons, mileage, expenses and a monthly statement, replacing manual record-keeping. Works offline, installs to the iPhone home screen, and gets regular updates from user feedback.",
    tags: ["Preact", "TypeScript", "IndexedDB", "PWA", "Claude Code"],
    icon: Music,
    repo: "Private-Lessons-Tracker",
    isPublic: false,
  },
  {
    title: "Via-AI",
    description:
      "Multiplayer trivia web app that generates questions with an LLM. Five game modes, 13 themes and a subscription tier.",
    tags: ["Node.js", "Express", "OpenAI API"],
    icon: Sparkles,
    repo: "Via-AI",
    isPublic: false,
  },
  {
    title: "NFL Timeout Advisor",
    description:
      "Decision tool that simulates game outcomes to recommend whether a coach should call a timeout, with win probability for each choice. Command line, browser UI and Python API, with automated tests.",
    tags: ["Python", "Simulation", "pytest", "Claude Code"],
    icon: Timer,
    isPublic: false,
  },
  {
    title: "Jeopardy-style Quiz Game",
    description:
      "Real-time quiz game: a host runs the board while players join by room code and buzz in from their phones. Game state and scoring live on the server.",
    tags: ["Node.js", "Supabase", "Railway", "Real-time"],
    icon: Trophy,
    repo: "Jeopardy-Clone",
    isPublic: false,
  },
];

export const moreProjects = [
  {
    category: "Multiplayer & party games",
    items: [
      {
        title: "Prismatic",
        description:
          "Color-guessing party game. Players mix colors on their phones to match a hint on the big screen.",
        tags: ["JavaScript", "Real-time"],
        icon: Palette,
        repo: "Prismatic",
        isPublic: true,
      },
      {
        title: "Clowns",
        description:
          "Family-friendly online card game where a rotating judge picks the best match each round.",
        tags: ["React", "TypeScript", "Node.js"],
        icon: Users,
        repo: "Apples-to-Apples-Clone",
        isPublic: true,
      },
      {
        title: "Audible",
        description:
          "Two-team football strategy game about game theory and bluffing, with room codes and no accounts.",
        tags: ["React", "AWS Amplify"],
        icon: Trophy,
        repo: "Football-Team-Game",
        isPublic: false,
      },
      {
        title: "Political Party",
        description:
          "Campaign board game on a shared 3D screen; players compete for voters from their phones.",
        tags: ["React", "AWS Amplify", "3D"],
        icon: Landmark,
        isPublic: false,
      },
      {
        title: "Warfront",
        description:
          "1v1 tower-defense duel. Both battlefields on one screen, each player controls from a phone over peer-to-peer.",
        tags: ["JavaScript", "Canvas", "PeerJS"],
        icon: Castle,
        repo: "Tower-Defense-Battle-Game",
        isPublic: false,
      },
      {
        title: "Gun Life",
        description:
          "Western-themed party game: a host screen on the TV, players train and race from their phones.",
        tags: ["React", "AWS Amplify"],
        icon: Joystick,
        repo: "Gun-Life",
        isPublic: false,
      },
    ],
  },
  {
    category: "Simulations, apps & tools",
    items: [
      {
        title: "Blackjack Card Counting Simulation",
        description:
          "Simulator for testing blackjack card-counting strategies.",
        tags: ["React", "TypeScript", "Vitest", "Claude Code"],
        icon: Spade,
        repo: "Blackjack-Card-Counting-Simulation",
        isPublic: false,
      },
      {
        title: "Life Sim",
        description: "Text-based life simulator for mobile.",
        tags: ["React Native", "Expo", "Claude Code"],
        icon: Smartphone,
        repo: "Life-Sim-Game",
        isPublic: false,
      },
      {
        title: "Trolls: Enter Darkness",
        description: "Game jam entry built as a team in Unity.",
        tags: ["Unity", "C#"],
        icon: Joystick,
        demo: "https://thatshortguy.itch.io/trolls-enter-darkness",
        demoLabel: "Play on itch.io",
      },
    ],
  },
  {
    category: "Coursework",
    items: [
      {
        title: "Travel Recommendation",
        description:
          "Final project for IBM's JavaScript Programming Essentials (Coursera).",
        tags: ["HTML", "JavaScript"],
        icon: Plane,
        repo: "travelRecommendation",
        isPublic: true,
      },
      {
        title: "Health Census",
        description:
          "Final project for IBM's JavaScript Programming Essentials (Coursera).",
        tags: ["JavaScript"],
        icon: HeartPulse,
        repo: "health_census",
        isPublic: true,
      },
      {
        title: "Learning React",
        description: "Exercises from IBM's Introduction to React (Coursera).",
        tags: ["React"],
        icon: BookOpen,
        repo: "Learning_React",
        isPublic: true,
      },
      {
        title: "Coursera React Final Project",
        description: "Capstone project for the Coursera React course.",
        tags: ["React"],
        icon: GraduationCap,
        repo: "Coursera-React-Final-Project",
        isPublic: true,
      },
    ],
  },
];
