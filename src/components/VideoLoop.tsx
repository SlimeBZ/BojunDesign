interface VideoLoopProps {
  src: string;
  className?: string;
  preload?: 'none' | 'metadata' | 'auto';
}

const VideoLoop = ({ src, className, preload = 'metadata' }: VideoLoopProps) => {
  return (
    <video
      className={className}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      controls={false}
      preload={preload}
    />
  );
};

export default VideoLoop;
