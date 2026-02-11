import SkillCard from "./SkillCard";
import { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Dashboard({ skills, setSkills }) {
  const [search, setSearch] = useState("");

  // Filter skills
  const filteredSkills = skills.filter((skill) =>
    skill.name.toLowerCase().includes(search.toLowerCase())
  );

  // Total hours calculation
  const totalHours = skills.reduce((sum, skill) => sum + skill.hours, 0);

  // Export PDF
  const exportPDF = async () => {
    const element = document.getElementById("dashboard-content");

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 190;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("SkillStack_Report.pdf");
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>📊 Dashboard</h2>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search skill..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
            width: "250px",
            marginRight: "10px",
          }}
        />

        <button className="add-btn" onClick={exportPDF}>
          Export as PDF
        </button>
      </div>

      <p>
        <strong>Total Hours:</strong> {totalHours}
      </p>

      <div id="dashboard-content">
        {filteredSkills.length === 0 ? (
          <p>No skills found.</p>
        ) : (
          filteredSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              setSkills={setSkills}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;
