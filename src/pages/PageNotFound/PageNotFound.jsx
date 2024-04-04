/*import { useRouteError } from "react-router-dom";

export default function PageNotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}*/

import { useRouteError } from "react-router-dom";

export default function PageNotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error && error.message ? error.message : "Unknown error"}</i>
      </p>
    </div>
  );
}
