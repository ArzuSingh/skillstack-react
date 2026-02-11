import { useState, useEffect } from "react";
import SkillForm from "./components/SkillForm";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import { getSkills, saveSkills } from "./utils/Storage";
import SkillChart from "./components/SkillChart";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./index.css";

function App() {

  // ---------------- STATE ----------------
  const [skills, setSkills] = useState([]);
  const [streak, setStreak] = useState(0);
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  // ---------------- AUTH LISTENER ----------------
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // ---------------- LOAD DATA ----------------
  useEffect(() => {
    setSkills(getSkills());

    const storedStreak = localStorage.getItem("streak");
    if (storedStreak) setStreak(Number(storedStreak));
  }, []);

  // ---------------- SAVE SKILLS ----------------
  useEffect(() => {
    saveSkills(skills);
  }, [skills]);

  // ---------------- STREAK SYSTEM ----------------
  useEffect(() => {
    if (skills.length === 0) return;

    const today = new Date().toDateString();
    const lastActivity = localStorage.getItem("lastActivity");

    if (lastActivity !== today) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      localStorage.setItem("streak", newStreak);
      localStorage.setItem("lastActivity", today);
    }
  }, [skills]);

  // ---------------- TOTAL HOURS ----------------
  const totalHours = skills.reduce((sum, skill) => sum + skill.hours, 0);

  // ---------------- WEEKLY HOURS ----------------
  const weeklyHours = skills
    .filter(skill => {
      if (!skill.createdAt) return false;
      const date = new Date(skill.createdAt);
      const now = new Date();
      const diff = (now - date) / (1000 * 60 * 60 * 24);
      return diff <= 7;
    })
    .reduce((sum, skill) => sum + skill.hours, 0);

  // ---------------- BADGE SYSTEM ----------------
  const getBadge = () => {
    if (totalHours >= 100) return "👑 Master";
    if (totalHours >= 50) return "⚡ Intermediate";
    if (totalHours >= 10) return "🔰 Beginner";
    return "🚀 Starter";
  };

  // ---------------- LOGIN SCREEN ----------------
  if (!user) {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Login />
    </div>
  );
}


  // ---------------- MAIN UI ----------------
  return (
    <div className={darkMode ? "dark" : "light"}>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>🚀 SkillStack</h1>

        <div>
          <button onClick={() => setDarkMode(!darkMode)}>
            Toggle Theme
          </button>

          <button
            onClick={() => signOut(auth)}
            style={{ marginLeft: "10px" }}
          >
            Logout
          </button>
        </div>
      </div>

      <p>Track your skill growth professionally</p>

      {/* STREAK */}
      <div className="card green">
        🔥 Daily Learning Streak: {streak} Days
      </div>

      {/* BADGE */}
      <div className="card gold">
        🏆 Achievement: {getBadge()}
      </div>

      {/* TOTAL & WEEKLY */}
      <div className="card blue">
        📊 Total Hours: {totalHours} <br />
        📅 Hours This Week: {weeklyHours}
      </div>

      {/* FORM */}
      <SkillForm setSkills={setSkills} />

      {/* CHART */}
      <SkillChart skills={skills} />

      {/* DASHBOARD */}
      <Dashboard skills={skills} setSkills={setSkills} />

    </div>
  );
}



export default App;
