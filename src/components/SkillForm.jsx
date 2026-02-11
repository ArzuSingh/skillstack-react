import { useState } from "react";

function SkillForm({ setSkills }) {
  const [name, setName] = useState("");
  const [hours, setHours] = useState("");
  const [target, setTarget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !hours || !target) return;

    const newSkill = {
      id: Date.now(),
      name,
      hours: Number(hours),
      target: Number(target),
      completed: false,
      createdAt: new Date().toISOString()
    };

    setSkills(prev => [...prev, newSkill]);

    setName("");
    setHours("");
    setTarget("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
      <h2>Add New Skill</h2>

      <input
        type="text"
        placeholder="Skill name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Hours completed"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />

      <input
        type="number"
        placeholder="Target hours"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      />

      <button type="submit">Add Skill</button>
    </form>
  );
}

export default SkillForm;
