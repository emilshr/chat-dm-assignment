import { useParams } from "react-router-dom";
import { SidePanelWrapper } from "../components/SidePanelWrapper";
import { ChatWindow } from "../components/chat-window/ChatWindow";

type Params = {
  inboxId?: string;
};

export const HomePage = () => {
  const { inboxId } = useParams<Params>();
  return (
    <SidePanelWrapper>
      {inboxId ? (
        <ChatWindow inboxId={inboxId} />
      ) : (
        <div className="h-full w-full flex items-center justify-center text-3xl">
          Click on any inbox to view conversation
        </div>
      )}
    </SidePanelWrapper>
  );
};
