import Experience from "../Components/Experience";

function Profile() {
  const yearsAgo = new Date().getFullYear() - 2017;

  return (
    <>
      <div className="flex flex-col py-10 justify-end items-end">
        <h1 className="text-4xl">Olga Kruhlova</h1>
        <p className="text-sm text-light-blue-500 dark:text-light-blue mb-10">Frontend developer</p>

        <div className="text-md mt-8 flex flex-col justify-end items-end">
          <p className="mb-2">I'm a front-end developer based in Poznan, Poland.</p>
          <p className="mb-2">I'm passionate about pixel-perfect, beautiful interfaces.</p>
          <p className="mb-2">{yearsAgo} years ago I decided to try myself in frontend. Today it is my passion.</p>
          <p className="mb-2">
            I work and collaborate with talented people to create digital products and{" "}
            <strong className="text-light-blue-500 dark:text-light-blue mb-2">I love what I do.</strong>
          </p>
          <p className="mt-8">
            Check out my previous profile
            <a href="https://olkruglova.github.io/portfolio-fend" target="_blank" rel="noopener noreferrer">
              <strong className="text-light-blue-500 dark:text-light-blue mb-2">&nbsp;here.</strong>
            </a>
          </p>
        </div>
      </div>

      <Experience />
    </>
  );
}

export default Profile;
