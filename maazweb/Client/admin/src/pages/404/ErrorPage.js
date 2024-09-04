import React from "react";
function ErrorPage() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <div className="container d-flex justify-content-center flex-column">
          <div>
            {/* <img
              src="/error.PNG"
              alt="404Error"
              className="img-fluid w-80 h-80"
            /> */}

            <h2>Page Not Found</h2>
            <p>
              The page you're looking for might be renamed, removed, or might
              never exist on this planet.
            </p>
          </div>
        </div>
        <button
          class="btn mx-2 text-light fw-bold"
          href="#"
          style={{ backgroundColor: "rgb(126 34 206)" }}
        >
          Go to Home
        </button>
        <a
          class="btn btn-outline-secondary mx-2 px-4 fw-bold"
          href="/"
          role="button"
        >
          Cancel
        </a>
      </div>
    </div>
  );
}
export default ErrorPage;