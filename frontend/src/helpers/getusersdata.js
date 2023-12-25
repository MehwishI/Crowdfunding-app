//get proejcts by user
export async function getProjectsByUserId(userid) {
  try {
    const response = await fetch(
      `http://localhost:3001/api/projects/user/${userid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    // const clonedResponse = response.clone();
    //const responseText = await clonedResponse.text(); // This won’t consume the original response
    // console.log("Raw response text before: ", responseText);
    if (response.ok) {
      // const clonedResponse = response.clone();
      // const responseText = await clonedResponse.text(); // This won’t consume the original response
      // console.log("Raw response text: ", responseText);

      const projectsData = await response.json();
      //console.log("projectsData returned from fetch: ", projectsData);
      return projectsData;
    } else {
      console.error("Failed to fetch: ", response.status);
      return null;
    }
  } catch (error) {
    // console.log("response in case of fetch error:", response);
    console.error("Fetch error: ", error);
    return null;
  }
}
//get donations by user

export async function getDonationsByUserId(userid) {
  try {
    const response = await fetch(`http://localhost:3001/api/donations/userid`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      // dataType: "json",
    });
    if (response.ok) {
      const donationsData = await response.json();
      //console.log("donationsData from fetch: ", donationsData);
      return donationsData;
    } else {
      console.error("Failed to fetch: ", response.status);
      return null;
    }
  } catch (error) {
    console.error("Fetch error: ", error);
    return null;
  }
}
//get all available projects
export async function getAllProjects() {
  try {
    const response = await fetch(`http://localhost:3001/api/projects/`, {
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
      // const clonedResponse = response.clone();
      // const responseText = await clonedResponse.text(); // This won’t consume the original response
      // console.log("Raw response text: ", responseText);

      const projectsData = await response.json();
      //console.log("projectsData returned from fetch: ", projectsData);
      return projectsData;
    } else {
      console.error("Failed to fetch all projects: ", response.status);
      return null;
    }
  } catch (error) {
    // console.log("response in case of fetch error:", response);
    console.error("Fetch error: ", error);
    return null;
  }
}
//export default getProjectsByUserId, getDonationsByUserId ;
