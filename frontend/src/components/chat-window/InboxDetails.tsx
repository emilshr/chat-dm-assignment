type Props = {
  inboxId: string;
  inboxName: string;
};

export const InboxDetails = ({ inboxId, inboxName }: Props) => {
  return (
    <div className="flex items-center border-b-[1px] border-b-slate-700 w-full h-full pb-4 font-bold">
      <div className="text-3xl">{inboxName}</div>
    </div>
  );
};
