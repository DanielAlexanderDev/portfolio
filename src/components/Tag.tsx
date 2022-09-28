interface Props {
  tag: string;
}

const Tag = ({ tag }: Props) => {
  return (
    <span
      className={`inline-block ${
        tag === "react"
          ? "bg-cyan-500"
          : tag === "javascript"
          ? "bg-yellow-300"
          : tag === "node"
          ? "bg-green-500"
          : tag === "styled-components"
          ? "bg-pink-300"
          : "bg-blue-400"
      } rounded-full px-3 py-1 text-sm cursor-default font-medium text-gray-700 mr-2 mb-2 hover:bg-gray-800 hover:text-white`}
    >
      {tag}
    </span>
  );
};
export default Tag;
