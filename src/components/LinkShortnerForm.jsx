import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

function LinkShortnerForm({ id }) {
  const [error, setError] = useState("");
  const [hasError, setHasError] = useState(false);

  const validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!pattern.test(str);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = e.target.elements["link-input"];
    const value = input.value;

    if (value === "") {
      setError("Please enter something");
      setHasError(true);
      return;
    } else if (!validURL(value)) {
      setError("Please enter a valid URL");
      setHasError(true);
      return;
    } else {
      setError("");
      setHasError(false);
      alert("Success");
    }
  };

  return (
    <form
      id={id}
      className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
      onSubmit={handleSubmit}
      noValidate
    >
      <Input
        type="url"
        className={`flex-1 p-3 border-2 rounded-lg placeholder-gray-400 focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan transition-all ${
          hasError ? "border-red" : ""
        }`}
        placeholder="Shorten a link here"
        id="link-input"
        ariaLabel="Enter URL to shorten"
        aria-describedby="err-msg"
      />

      <Button
        type="submit"
        className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none focus:ring-2 focus:ring-cyan transition-colors md:py-2"
        arialLabel="Shorten It"
      >
        Shorten It!
      </Button>

      <div
        id="err-msg"
        className="absolute left-7 bottom-3 text-red text-sm italic"
        role="alert"
        aria-live="polite"
      >
        {error}
      </div>
    </form>
  );
}
export default LinkShortnerForm;
