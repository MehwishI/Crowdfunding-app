//delete a project
export async function deleteProject(projectid) {
  // console.log("received donation data", projectData);
  try {
    const response = await fetch(`/api/projects/delete/${projectid}`, {
      method: "POST",
      //body: JSON.stringify(projectData),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (response.ok) {
      console.log("Project data successfully deleted!");
      return true;
    } else {
      console.log("Project data not deleted!");
      return false;
    }
  } catch (error) {
    console.error("Error occurred in deleting project data", error);
    return null;
  }
}
