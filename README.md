# Project Title: Krazy Talk

This project is a real-time chat application built using JavaScript, React, and npm. It allows users to sign up, sign
in, and chat in different chat rooms. The application is designed to be simple and user-friendly, providing a seamless
chatting experience.

## Features Implemented

1. **User Authentication**: The application includes a sign-in and sign-up page where users can create an account or log
   in to an existing one. The user's credentials are validated before they are allowed to proceed.

2. **Real-time Chatting**: Once logged in, users can join different chat rooms and start chatting in real-time. The chat
   room component displays the active chat room and allows users to switch between different rooms.

3. **Error Handling**: The application handles errors gracefully. If there's an issue with the user's network connection
   or the server, the application displays an appropriate error message.

4. **Timeouts**: The application implements timeouts for requests to the server. If a request takes too long, the
   application will display a timeout error.

5. **Token-based Authentication**: The application uses token-based authentication for maintaining user sessions. The
   token is stored in the local storage of the user's browser and is used to authenticate subsequent requests.

## Learning Outcomes

Building this application helped me understand and implement various concepts related to web development:

1. **React**: I learned how to use React to build a single-page application. I used React hooks for state management and
   lifecycle methods.

2. **Axios**: I learned how to use Axios for making HTTP requests to the server. I also learned how to handle errors and
   timeouts with Axios.

3. **Authentication**: I learned how to implement token-based authentication in a web application. I also learned how to
   securely store tokens in the local storage of the browser.

4. **Real-time Communication**: I learned how to implement real-time communication in a web application. I used
   WebSockets for this purpose.

## Real-world Use

This application can be used as a real-time chat platform where users can create an account and start chatting in
different chat rooms. It can be used for personal chats, group discussions, or even as a customer support chat platform
for businesses. The application can be further enhanced by adding features like private messaging, file sharing, and
more.

## Tech Stack Used

- **Frontend**: React, JavaScript, HTML, CSS
- **Backend**: Node.js, Express.js, Axios
- **Database**: MongoDB
- **Authentication**: Hashing, Bcrypt
- **Deployment**: Netlify
- **Version Control**: Git, GitHub
- **Package Manager**: npm
- **API Testing**: Postman