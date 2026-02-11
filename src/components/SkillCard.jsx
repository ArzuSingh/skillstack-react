function SkillCard({ skill, setSkills }) {

  const progress = Math.min(
    (skill.hours / skill.target) * 100,
    100
  );

  const addHours = () => {
    setSkills(prev =>
      prev.map(s =>
        s.id === skill.id
          ? { ...s, hours: s.hours + 1 }
          : s
      )
    );
  };

  const completeSkill = () => {
    setSkills(prev =>
      prev.map(s =>
        s.id === skill.id
          ? { ...s, hours: s.target }
          : s
      )
    );
  };

  const deleteSkill = () => {
    setSkills(prev =>
      prev.filter(s => s.id !== skill.id)
    );
  };

  return (
    <div style={{
      background: "#1e293b",
      padding: "20px",
      borderRadius: "12px",
      marginBottom: "20px",
      color: "white"
    }}>

      <h3>{skill.name}</h3>
      <p>{skill.hours} / {skill.target} Hours</p>

      {/* Progress Bar */}
      <div style={{
        background: "#444",
        height: "8px",
        borderRadius: "5px",
        overflow: "hidden",
        marginBottom: "15px"
      }}>
        <div style={{
          width: `${progress}%`,
          background: progress === 100 ? "#4caf50" : "#00e676",
          height: "100%",
          transition: "0.3s"
        }} />
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "10px" }}>

        <button
          onClick={addHours}
          style={{
            background: "#2196f3",
            border: "none",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            color: "white"
          }}
        >
          +1 Hour
        </button>

        <button
          onClick={completeSkill}
          style={{
            background: "#4caf50",
            border: "none",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            color: "white"
          }}
        >
          Complete
        </button>

        <button
          onClick={deleteSkill}
          style={{
            background: "#f44336",
            border: "none",
            padding: "8px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            color: "white"
          }}
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default SkillCard;
