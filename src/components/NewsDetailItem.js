const NewsDetailItem =({selectedItem})=>{
    return <>
     <div className="flex flex-col items-center w-2/4 mx-auto mt-4 max-w-xl">
        <div className="mb-2 text-2xl font-bold">
          {selectedItem?.title.toUpperCase()}
        </div>
        <img
          alt="some o"
          className="max-w-xl pt-6 pb-6"
          src="https://cdn.britannica.com/78/249578-050-01D46C9B/Novak-Djokovic-Serbia-US-Open-2023.jpg"
        />
        <div>{selectedItem?.text}</div>
      </div>
    </>
}
export default NewsDetailItem