export default function ProjectVideo() {
  return (
    <div className="w-full max-w-5xl mx-auto my-12 px-4">
      <video
        className="w-full h-auto rounded-2xl shadow-lg"
        autoPlay
        muted
        loop
        playsInline
        controls
      >
        <source src="/videos/cuisine.mp4" type="video/mp4" />
      </video>
    </div>
  );
}