interface Props {
  tag: keyof typeof Tags;
}

export const Tags = {
  node: "bg-green-400",
  javascript: "bg-yellow-200",
  react: "bg-cyan-300",
  "styled-components": "bg-pink-200",
  typescript: "bg-blue-500",
  tailwind: "bg-blue-400",
  css: "bg-zinc-300",
};

const Tag = ({ tag }: Props) => {
  return (
    <span
      className={`inline-block ${Tags[tag]} rounded-full px-3 py-1 text-sm cursor-default font-medium text-gray-700 mr-2 mb-2 hover:bg-gray-800 hover:text-white`}
    >
      {tag}
    </span>
  );
};
export default Tag;
