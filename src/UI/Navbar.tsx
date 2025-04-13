import HistoryButton from "@components/HistoryButton";
import InputName from "@components/InputName";
import MenuButton from "@components/MenuButton";
import ToggleTheme from "@components/ToggleTheme";
import SaveButton from "@src/components/SaveButton";

function Navbar() {
  return (
    <nav className="fixed top-0 z-15 flex bg-secondary-light dark:bg-secondary-dark w-full py-1 rounded-b-xl ">
      <MenuButton className="z-20 ml-3" />
      <section className="fixed bottom-10 w-full h-10 z-10 sm:block sm:top-0 sm:w-1/6 flex justify-center sm:ml-16 ">
        <div className="flex justify-around items-center w-1/2 bg-secondary-light dark:bg-secondary-dark sm:bg-transparent sm:dark:bg-transparent rounded-full py-2 sm:py-1 px-3 sm:gap-7 ">
          <section className="flex">
            <HistoryButton undo />
            <HistoryButton redo />
          </section>
          <SaveButton />
        </div>
      </section>
      <InputName className="w-full absolute" />
      <ToggleTheme className="mr-3 z-10" />
    </nav>
  );
}

export default Navbar;
