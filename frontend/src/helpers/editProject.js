//save create project  data to db
export async function editProject(projectData) {
  console.log("received project data", projectData);
  try {
    const response = await fetch("/api/projects/edit", {
      method: "POST",
      body: JSON.stringify(projectData),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    console.log("response", response);
    if (response.ok) {
      console.log("Project data successfully saved after editing!");
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
