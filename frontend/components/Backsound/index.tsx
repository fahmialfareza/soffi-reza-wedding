import { MutableRefObject, useEffect, useState, MouseEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";

interface BacksoundProps {
  play: boolean;
  audioRef: MutableRefObject<HTMLAudioElement>;
}

function Backsound({ play, audioRef }: BacksoundProps) {
  const [onPlay, setOnPlay] = useState(false);

  const toggleAudio = (e: MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    setOnPlay(!onPlay);
  };

  useEffect(() => {
    if (audioRef && play) {
      audioRef.current?.play();
      setOnPlay(true);
    }
  }, [audioRef, play]);

  useEffect(() => {
    if (onPlay) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [audioRef, onPlay]);

  return (
    <>
      {play && (
        <FontAwesomeIcon
          style={{
            position: "fixed",
            zIndex: 99999999,
            bottom: 10,
            right: 10,
          }}
          icon={onPlay ? faPauseCircle : faPlayCircle}
          size={"2xl"}
          onClick={toggleAudio}
        />
      )}

      <audio
        style={{ display: "none" }}
        loop
        src="audio/wedding_music.mp3"
        ref={audioRef}
      ></audio>
    </>
  );
}

export default Backsound;
