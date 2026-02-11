import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function SkillChart({ skills }) {
  const data = skills.map((skill) => ({
    name: skill.name,
    hours: skill.hours,
  }));

  return (
    <div style={{ height: "300px", marginTop: "40px" }}>
      <h2>Skill Hours Chart</h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="hours" fill="#00ff88" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SkillChart;
