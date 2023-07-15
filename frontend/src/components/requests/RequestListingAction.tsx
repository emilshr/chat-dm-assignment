import axios from "axios";
import { useMutation } from "react-query";
import { BASE_URL } from "../../common/constants";
import { InboxParticipantStatus } from "../../types/schema";
import { useNavigate } from "react-router-dom";

type Props = {
  inboxId: string;
};

export const RequestListingAction = ({ inboxId }: Props) => {
  const { isLoading, mutateAsync } = useMutation<
    { data: any },
    unknown,
    { inboxStatus: InboxParticipantStatus; inboxId: string }
  >((payload) => {
    return axios.post(`${BASE_URL}inbox/respondToInbox`, payload);
  });
  const navigate = useNavigate();

  return (
    <div className="flex gap-x-2">
      <button
        onClick={(event) => {
          event.stopPropagation();
          mutateAsync({
            inboxId,
            inboxStatus: InboxParticipantStatus.ACCEPTED,
          })
            .then(() => navigate(`/inbox/${inboxId}`))
            .catch((err) => console.error(err));
        }}
        disabled={isLoading}
      >
        Accept
      </button>
      <button
        onClick={(event) => {
          event.stopPropagation();
          mutateAsync({
            inboxId,
            inboxStatus: InboxParticipantStatus.BLOCKED,
          })
            .then(() => window.location.reload())
            .catch((err) => console.error(err));
        }}
        disabled={isLoading}
      >
        Reject
      </button>
    </div>
  );
};
