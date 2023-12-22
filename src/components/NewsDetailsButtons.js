import { RiEditLine } from "react-icons/ri";
import { RiDeleteBin2Line } from "react-icons/ri";
import Button from "../UI/Button";
const NewsDetailsButtons = ({ postDeleteHandler, editPostHandler }) => {
  return (
    <>
      <div>
        <div className="flex justify-end items-center w-2/4 mx-auto max-w-xl space-x-4">
          <div className="h-4">
            <Button onClick={postDeleteHandler} className="text-rose-600">
              <RiDeleteBin2Line size={29} />
            </Button>
          </div>

          <div className="h-4">
            <Button>
              <RiEditLine onClick={editPostHandler} size={29} color="blue" />
            </Button>
          </div>
        </div>
        <hr className="my-4 w-full border-t border-gray-300 w-2/6 mx-auto" />
      </div>
    </>
  );
};
export default NewsDetailsButtons;
