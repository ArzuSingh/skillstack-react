# 🚀 SkillStack

SkillStack is a modern **React + Firebase** web application for tracking personal skills, learning progress, and performance over time. It includes user authentication, progress analytics, daily streaks, visual charts, and target tracking — all designed to motivate continuous learning.

---

## 🔥 Key Features

- ✔ Firebase Authentication (Login & Signup)
- ✔ Add Skills with Target Hours
- ✔ Track Skill Progress
- ✔ Daily Learning Streak System
- ✔ Achievement Badges based on total hours
- ✔ Skill Progress Visualization (Recharts)
- ✔ Dark / Light Theme Toggle
- ✔ Weekly Hours Summary

---

## 🧠 How It Works

Users can:

1. Create account or login using email and password.
2. Add skills with target hours.
3. Increase hours with “+1 Hour” button.
4. View real-time progress bars and analytics chart.
5. See achievement badge based on hours completed.
6. Track streaks and weekly performance.

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| React (Vite) | Frontend UI |
| Firebase Auth | Secure Authentication |
| Recharts | Graph Visualization |
| CSS | Styling |
| LocalStorage | Storing skill data |

---

## 🚀 Installation & Setup

1. Clone the repository:
```
git clone https://github.com/ArzuSingh/skillstack-react.git
```

2. Change directory:
```
cd skillstack-react
```

3. Install dependencies:
```
npm install
```

4. Create Firebase project & enable Email/Password auth

5. Add Firebase config to:
```
src/firebase.js
```

6. Start development server:
```
npm run dev
```

---

## 🔐 Firebase Config Example

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "XXXXXXXX",
  authDomain: "XXXXXXX.firebaseapp.com",
  projectId: "XXXXXXX",
  storageBucket: "XXXXXXX.appspot.com",
  messagingSenderId: "XXXXXXX",
  appId: "XXXXXXX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

---

## 📸 Screenshots

*(Add screenshots of login, dashboard, chart, dark mode etc.)*

---

## 📄 License

MIT License

---

## 💡 About

Made with ❤️ by **Arzu Singh**
