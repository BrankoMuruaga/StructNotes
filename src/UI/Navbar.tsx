import HistoryButton from "@components/HistoryButton";
import InputName from "@components/InputName";
import MenuButton from "@components/MenuButton";
import ToggleTheme from "@components/ToggleTheme";
import SaveButton from "@src/components/SaveButton";

function Navbar() {
  return (
    <nav className="fixed top-0 z-15 flex bg-secondary-light dark:bg-secondary-dark w-full py-1 px-3 rounded-b-lg ">
      <section className="flex w-52 pr-3">
        <MenuButton />
        <section className="m-auto flex">
          <HistoryButton undo />
          <HistoryButton redo />
        </section>
        <SaveButton />
      </section>
      <InputName className="w-9/12 mr-auto" />
      <ToggleTheme className="mr-0" />
    </nav>
  );
}

export default Navbar;
