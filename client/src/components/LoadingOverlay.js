import Loading from "./Loading";

const LoadingOverlay = ({ isLoading, children, className }) => {
  if (!isLoading) return children;

  return (
    <div className={`relative ${className}`}>
      <div className="opacity-50 pointer-events-none">{children}</div>
      <div className="absolute inset-0 flex justify-center items-center">
        <Loading className="p-8" />
      </div>
    </div>
  );
};

export default LoadingOverlay;
