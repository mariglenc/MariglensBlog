import Messages from "@/components/messages/Messages";
import { fetchAllMessages } from "@/lib/messages-util";

function MessagesPage({ messages }) {
  return <Messages messages={messages} />;
}

export default MessagesPage;

export async function getStaticProps() {
  const messages = await fetchAllMessages();

  return {
    props: {
      messages,
    },
    revalidate: 60,
  };
}
