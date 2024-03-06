import avatars from "../assets/lots-of-avatars/";

// const avatars = [
//     "https://example.com/avatar1.jpg",
//     "https://example.com/avatar2.jpg"
//   ];

const messages = [
  {
    avatarSrc: avatars[0],
    name: "Alice",
    date: "2024-02-23",
    message: "Hello, how are you?",
  },
  {
    avatarSrc: avatars[1],
    name: "Bob",
    date: "2024-02-23",
    message: "I'm good, thank you. How about you?",
  },
];

module.exports = { avatars, messages };
