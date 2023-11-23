import { Link } from "react-router-dom";

export function BackButton() {
  return (
    <Link to={"/"} className="text-white text-decoration-none">
      <div className="h-12 gap-1/4 text-white p-4 overflow-hidden flex flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19 12H5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 19L5 12L12 5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>{" "}
        Back
      </div>
    </Link>
  );
}
