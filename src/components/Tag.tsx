interface Props {
  tag: string;
}

const Tag = ({ tag }: Props) => {
  return (
    <span
      className={`inline-block ${
        tag === "react"
          ? "bg-cyan-300"
          : tag === "javascript"
          ? "bg-yellow-200"
          : tag === "node"
          ? "bg-green-400"
          : tag === "styled-components"
          ? "bg-pink-200"
          : "bg-blue-300"
      } rounded-full px-3 py-1 text-sm cursor-default font-medium text-gray-700 mr-2 mb-2 hover:bg-gray-800 hover:text-white`}
    >
      {tag}
    </span>
  );
};
export default Tag;
