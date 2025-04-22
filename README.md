# Tic Tac Toe Game Room

An offline, two-player Tic Tac Toe game built with React and Tailwind CSS. Players can enter their names, view unique avatars, and enjoy the game in the browser.

---

## Description

This app lets two players join a game room, see their avatars, and play Tic Tac Toe together. The game uses React Context API for state management and fetches unique avatars from the DiceBear API.

---

## Tech Stack

- **React**
- **React Router**
- **React Context API**
- **Tailwind CSS**
- **DiceBear Avatars API**

---

## Features

- **Three Pages:**  
  - Login (enter player names)  
  - Lobby (see avatars and player info)  
  - Game Board (play Tic Tac Toe)
- **Offline Multiplayer:** Play locally with two players on the same device.
- **Unique Avatars:** Player avatars.
- **Winner Detection:** Highlights the winner and allows instant replay.
- **Responsive Design:** Looks great on desktop and mobile.

---

## Setup

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/jenyyy4/PixieCycle.git

2. **Navigate to the Project Directory**:

   ```bash
   cd PixieCycle

3. **Install Dependencies**:

   ```bash
   npm install

4. **Start the Application**:

   ```bash
   npm run dev

### Tailwind CSS Setup

1. **Install Tailwind**:

   ```bash
   npm install tailwindcss @tailwindcss/vite

2. **Edit vite.config.js**:

   ```
    import { defineConfig } from 'vite'
    import tailwindcss from '@tailwindcss/vite' // added line
    export default defineConfig({
      plugins: [
        tailwindcss(), // added line
      ],
    })
   ```
   
3. **Add to index.css**:

   ```
   @import "tailwindcss";
   ```

4. **Start the Application**:

   ```
   npm run dev
   ```
