const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://mariglens-blog.vercel.app";

// fetch all messages from db
export async function fetchAllMessages() {
  try {
    const messagessResponse = await fetch(
      `${baseUrl}/api/messages/all-messages`
    );
    const messagesData = await messagessResponse.json();
    const messages = messagesData.messages;
    return messages;
  } catch (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
}

// delete one message
export async function onDeleteMessage(id) {
  try {
    console.log("on del message id ",id)
    const deleteResponse = await fetch(`${baseUrl}/api/messages/${id}`, {
      method: "DELETE",
    });

    const response = await deleteResponse.json();
    return response;
  } catch (error) {
    console.error("Error deleteing message:", error);
    return [];
  }
}
