export default function Index() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-2">
      <h1 className="text-3xl font-bold">Hello, world!</h1>
      <p className="text-lg">Welcome to my website.<br />Click the button below to learn more.</p>
      <hr className="w-full border-2 border-primary dark:border-primarydark my-4"></hr>
      <button  className="mt-4 px-4 py-2 bg-primary dark:bg-primarydark text-base dark:text-basedark hover:bg-text hover:text-base dark:hover:text-basedark dark:hover:bg-textdark hover:rounded-xl rounded-lg shadow-md hover:shadow-lg transition-all">
        <a href="/about">Learn More</a>
      </button>
    </div>
  );
}