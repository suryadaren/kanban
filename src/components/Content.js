import { useSelector, useDispatch } from "react-redux";
import { delList } from "../features/ListSlice";

function Content() {
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const delLists = (id) => {
    dispatch(delList(id));
  };

  return (
    <div className="w-full flex pt-20">
      <div className="w-10/12 grid grid-cols-5">
        {list.map((item) => {
          return <ContentComp key={item.id} item={item} delList={delLists} />;
        })}

        <button className="bg-slate-100 w-48 h-8 mt-5 rounded-lg shadow-lg shadow-cyan-800 hover:shadow-cyan-900 hover:bg-slate-50 active:bg-slate-200 active:shadow-cyan-800">
          + Add Another List
        </button>
      </div>
    </div>
  );
}

const ContentComp = ({ item, delList }) => {
  function delLists() {
    delList(item.id);
  }
  return (
    <div className="w-64 bg-slate-300 p-3 m-5 text-slate-700 rounded-lg shadow-cyan-800 shadow-xl cursor-pointer">
      <div className="flex justify-between py-2">
        <div>{item.title}</div>
        <div>
          <button
            className="bg-white rounded-full p-1 relative -top-8 -right-5 shadow-md shadow-slate-500"
            onClick={delLists}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="my-5">
        {item.content.map((item) => {
          return <ContentItem item={item} key={item.id} />;
        })}
      </div>
      <button className="bg-slate-50 rounded-sm shadow-md shadow-slate-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

const ContentItem = ({ item }) => {
  return (
    <div className="bg-slate-100 py-2 px-3 rounded-md shadow-lg flex justify-between">
      <div>{item.title}</div>
      <div className="text-red-600">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Content;
