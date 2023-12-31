const Post = ({ item }) => {
  const { title, text, photo } = item;

  return (
    <div className="flex justify-center items-center ">
      <img
        alt="img"
        className="w-64 h-48 gap-0"
        src="https://cdn.britannica.com/78/249578-050-01D46C9B/Novak-Djokovic-Serbia-US-Open-2023.jpg"
      />
      <div className="border border-slate-300 border-solid m-3 w-2/5 h-48 p-4 border-l-0 ml-0 ">
        <h6 className="font-bold"> {title.substring(0, 130).toUpperCase()}...</h6>

        <p className="pt-6">{text.substring(0, 280)}...</p>
      </div>
    </div>
  );
};
export default Post;
