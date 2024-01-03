// rounded box for dashboard, has a grey border, white background, no shadow, and rounded corners and some padding
const Box = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg border   border-gray-200 p-8">
      <h1 className="text-base font-medium text-gray-500">{title}</h1>
      <div className="mt-2">{children}</div>
    </div>
  );
};

export default Box;
