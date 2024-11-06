import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex-1 flex w-full justify-center items-center">
      <main className="flex flex-col items-center">
        <h3 className="text-black text-4xl text-center font-bold">404</h3>
        <img src="/earth_sad.svg" alt="world" className="h-40 w-40 my-4" />
        <p className="text-center text-xl mb-4">Page not found</p>
        <Link to="/" className="text-blue-950 text-sm text-center">
          Go back to home
        </Link>
      </main>
    </div>
  );
};

export default NotFoundPage;
