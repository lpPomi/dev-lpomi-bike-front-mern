import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <main>
        <h2 id='content' >Page not found 404 ! </h2>
        <p>You can return to home</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default NotFound;