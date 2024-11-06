const Loader = () => {
  return (
    <div className="flex-1 flex w-full justify-center min-h-[100vh]">
      <main className="flex flex-col items-center">
        <h3 className="text-black text-4xl text-center font-bold">
          WAIT A MOMENT
        </h3>
        <img
          src="/earth_lentes.svg"
          alt="world"
          className="animate-spin h-40 w-40 my-4"
        />
        <p className="animate-pulse text-center text-xl">We are loading data</p>
      </main>
    </div>
  );
};

export default Loader;
