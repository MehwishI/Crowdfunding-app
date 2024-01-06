//save create project  data to db
export async function createProject(projectData) {
  // console.log("received donation data", projectData);
  try {
    const response = await fetch("http://localhost:3001/api/projects/create", {
      method: "POST",
      body: JSON.stringify(projectData),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (response.ok) {
      console.log("Project data successfully saved!");
      return true;
    } else {
      console.log("Project data not saved!");
      return false;
    }
  } catch (error) {
    console.error("Error occurred in saving project data", error);
    return null;
  }
}
