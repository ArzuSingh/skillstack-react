export const getSkills = () => {
  return JSON.parse(localStorage.getItem("skills")) || [];
};

export const saveSkills = (skills) => {
  localStorage.setItem("skills", JSON.stringify(skills));
};
