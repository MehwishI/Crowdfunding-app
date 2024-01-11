export async function getRewardsByProjectId(projectid) {
  try {
    const response = await fetch(`/api/rewards/${projectid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    // const clonedResponse = response.clone();
    //const responseText = await clonedResponse.text(); // This won’t consume the original response
    // console.log("Raw response text before: ", responseText);
    if (response.ok) {
      const rewardsData = await response.json();
      return rewardsData;
    } else {
      console.error("Failed to fetch: ", response.status);
      return null;
    }
  } catch (error) {
    console.error("Fetch error: ", error);
    return null;
  }
}
