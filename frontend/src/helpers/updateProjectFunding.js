//update project  funding
export async function updateProjectFunding(projectId, funding_amount) {
  console.log("projectid, donation amount received", projectId, funding_amount);

  const payload = {
    projectId: projectId,
    funding_amount: funding_amount,
  };
  try {
    const response = await fetch(
      "http://localhost:3001/api/projects/update/funding",
      {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    if (response.ok) {
      console.log("Project funding updated successfully!");
      return true;
    } else {
      console.log("Project fuding not updated successfully!");
      return false;
    }
  } catch (error) {
    console.error("Error occured in updating project");
    return null;
  }
}
