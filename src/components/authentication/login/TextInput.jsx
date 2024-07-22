export default function TextInput({ type = "", className = "", ...props }) {
  return (
    <input
      type={type}
      {...props}
      className={'bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' + className}
    />
  );
}
