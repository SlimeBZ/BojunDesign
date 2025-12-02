interface VideoLoopProps {
  src: string;
  className?: string;
}

const VideoLoop = ({ src, className }: VideoLoopProps) => {
  return (
    <video
      className={className}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      controls={false}
    />
  );
};

export default VideoLoop;
