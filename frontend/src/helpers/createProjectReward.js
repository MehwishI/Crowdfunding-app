//save create project  data to db
export async function createProjectReward(rewardData) {
  // console.log("received donation data", projectData);
  try {
    const response = await fetch("http://localhost:3001/api/rewards/create", {
      method: "POST",
      body: JSON.stringify(rewardData),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    //console.log("response:", response);
    if (response.ok) {
      console.log("Reward data successfully saved!");
      //console.log("response.body received in fetch create", response.body);
      const data = await response.json();
      console.log("Reward data after creation in fetch api", data);
      return data;
    } else {
      console.log("Project data not saved!");
      return false;
    }
  } catch (error) {
    console.error("Error occurred in saving reward data", error);
    return null;
  }
}
