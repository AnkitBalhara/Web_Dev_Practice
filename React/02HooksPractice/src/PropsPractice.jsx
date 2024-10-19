import './index.css'

export default function PropsPractice({Account}) {
  return (
    <div className="flex flex-col justify-center items-center bg-black min-h-[100vh]">
      <div className="mx-auto flex w-full mt-20 flex-col justify-center px-5 pt-0 md:h-[unset] max-w-[520px] lg:px-6 xl:pl-0">
        <div className="relative flex w-full flex-col pt-[20px] md:pt-0">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-5 h-min max-w-full pt-8 pb-6 px-6 dark:border-zinc-800">
            <p className="text-xl font-extrabold text-zinc-950 dark:text-white md:text-3xl">
              {Account}
            </p>
            <p className="mb-6 mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400 md:mt-4 md:text-base">
              Here you can change your account information
            </p>
            <label
              className="mb-3 flex cursor-pointer px-2.5 font-bold leading-none text-zinc-950 dark:text-white"
              htmlFor="name"
            >
              Your Name
              <p className="ml-1 mt-[1px] text-sm font-medium leading-none text-zinc-500 dark:text-zinc-400">
                (30 characters maximum)
              </p>
            </label>
            <div className="mb-8 flex flex-col md:flex-row">
              <form className="w-full" id="nameForm" >
                <input
                  placeholder="Please enter your full name"
                  className="mb-2 mr-4 flex h-full w-full items-center justify-center rounded-lg border border-zinc-200 bg-white/0 px-4 py-4 text-zinc-950 outline-none dark:!border-white/10 dark:text-white md:mb-0"
                  type="text"
                  defaultValue={Account}
                  name="fullName"
                />
              </form>
              <button
                className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 flex h-full max-h-full w-full items-center justify-center rounded-lg px-4 py-4 text-base font-medium md:ms-4 md:w-[300px]"
                form="nameForm"
                type="submit"
              >
                Update name
              </button>
              <div className="mt-8 h-px w-full max-w-[90%] self-center bg-zinc-200 dark:bg-white/10 md:mt-0 md:hidden"></div>
            </div>
            <p className="mb-5 px-2.5 text-red-500 md:px-9 hidden"></p>
            <label
              className="mb-3 ml-2.5 flex cursor-pointer px-2.5 font-bold leading-none text-zinc-950 dark:text-white"
              htmlFor="email"
            >
              Your Email
              <p className="ml-1 mt-[1px] text-sm font-medium leading-none text-zinc-500 dark:text-zinc-400">
                (We will email you to verify the change)
              </p>
            </label>
            <div className="mb-8 flex flex-col md:flex-row">
              <form className="w-full" id="emailForm" data-gtm-form-interact-id="0">
                <input
                  placeholder="Please enter your email"
                  className="mr-4 flex h-full max-w-full w-full items-center justify-center rounded-lg border border-zinc-200 bg-white/0 px-4 py-4 text-zinc-950 outline-none dark:!border-white/10 dark:text-white"
                  type="text"
                  defaultValue="SiyaRamJaiJaiRam...."
                  name="newEmail"
                  data-gtm-form-interact-field-id="0"
                />
              </form>
              <button
                className="whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 flex h-full max-h-full w-full items-center justify-center rounded-lg px-4 py-4 text-base md:ms-4 font-medium md:w-[300px]"
                type="submit"
                form="emailForm"
              >
                Update email
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="font-normal text-zinc-950 mt-20 mx-auto w-max">
        Setting Card Component from
        <a
          href="https://horizon-ui.com/shadcn-ui?ref=twcomponents"
          target="_blank"
          className="text-brand-500 font-bold"
        >
          Horizon AI Boilerplate
        </a>
      </p>
    </div>
  );
}
