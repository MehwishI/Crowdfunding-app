//save donation payment data to db
export async function saveDonationData(donationData) {
  
  try {
    const response = await fetch("http://localhost:3001/api/donations/create", {
      method: "POST",
      body: JSON.stringify(donationData),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (response.ok) {
      console.log("Donation data successfully saved!");
      return true;
    } else {
      console.log("Donation data not saved!");
      return false;
    }
  } catch (error) {
    console.error("Error occurred in saving donation data", error);
    return null;
  }
}
