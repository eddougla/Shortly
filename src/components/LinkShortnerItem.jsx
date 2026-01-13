import Button from "./Button";

function LinkShortnerItem({ originalURL, shortURL }) {
  return (
    <div className="flex flex-col items-center justify-between w-full p-6 bg-white rounded-lg md:flex-row">
      <p className="font-bold text-center text-veryDarkViolet md:text-left">
        {originalURL}
      </p>
      <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 md:flex-row md:space-y-0">
        <div className="font-bold text-cyan">{shortURL}</div>

        <Button
          type="button"
          className="p-2 px-8 text-white bg-darkViolet rounded-lg hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-darkViolet transition-opacity"
          arialLabel="Copy shortened link"
        >
          Copy
        </Button>
      </div>
    </div>
  );
}
export default LinkShortnerItem;
