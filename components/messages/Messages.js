import { useState } from "react";
import styles from "./messages.module.css";
import { onDeleteMessage } from "@/lib/messages-util";

function Messages({ messages }) {
  const [messageList, setMessageList] = useState(messages);

  const handleDeleteMessage = async (id) => {
    try {
      await onDeleteMessage(id);
      setMessageList((prevMessages) =>
        prevMessages.filter((message) => message._id !== id)
      );
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div className={styles.messagesContainer}>
      {messageList.length === 0 ? (
        <p className={styles.backupMessage}>🕒 No messages yet. Stay tuned!</p>
      ) : (
        <div className={styles.messagesList}>
          {messageList.map((message) => (
            <div key={message._id} className={styles.messageItem}>
              <div className={styles.messageContainer}>
                <p className={styles.messageContent}>{message.message}</p>
              </div>
              <p className={styles.messageName}>From: {message.name}</p>
              <p className={styles.messageEmail}>Email: {message.email}</p>
              <div className={styles.messageButtons}>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDeleteMessage(message._id)}
                >
                  Delete
                </button>
                <button className={styles.replyButton}>Reply</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Messages;
