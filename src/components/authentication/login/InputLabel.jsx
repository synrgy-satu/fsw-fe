export default function InputLabel({
  value,
  className = "",
  children,
  ...props
}) {
  return (
    <label
      {...props}
      class={
        "block mb-2 text-sm font-medium text-gray-900 dark:text-white" +
        className
      }
    >
      {value ? value : children}
    </label>
  );
}
