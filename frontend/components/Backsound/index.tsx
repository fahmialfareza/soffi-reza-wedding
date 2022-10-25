import { useEffect, useRef } from "react";

interface BacksoundProps {
  play: boolean;
}

function Backsound({ play }: BacksoundProps) {
  const audio = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audio && play) {
      audio.current?.play();
    }
  }, [audio, play]);

  return (
    <div
      style={{ position: "absolute", zIndex: 99999999, bottom: 0, right: 0 }}
    >
      <audio
        controls={play}
        loop
        src="audio/theweddingnasheed.mp3"
        ref={audio}
      ></audio>
    </div>
  );
}

export default Backsound;
