const Post = ({ item }) => {
    const { title, text, photo } = item

    return <div className="flex justify-center items-center">
        <div className="border border-slate-300 border-solid m-3 w-2/5 h-24">
            <h6>{title}</h6>
            <img alt="img" src={photo} />
            <p>{text}</p>
        </div>
    </div>


}
export default Post