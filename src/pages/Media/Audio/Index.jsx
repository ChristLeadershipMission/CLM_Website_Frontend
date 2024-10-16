import Audio_Integration from "./Audio_Integration";

const Telegram_Audio_Integration = ({
  audioUrl,
  category,
  channel,
  id,
  title,
}) => {
  return (
    <>
      <Audio_Integration
        audioUrl={audioUrl}
        category={category}
        channel={channel}
        id={id}
        title={title}
      />
    </>
  );
};

export default Telegram_Audio_Integration;
