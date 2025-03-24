import { useEffect, useState } from "react";
import type { ComponentProps } from "@src/types";
import ExportButton from "@src/components/ExportButton";
import DropdownButton from "@src/components/DropdownButton";
import DocumentsList from "@src/components/DocumentsList";
import NewDocumentButton from "@src/components/NewDocumentButton";

function Aside({ className }: ComponentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const handleToggleAside = () => {
      setIsVisible((prevState) => !prevState);
    };

    const handleRefreshAside = () => {
      setRefreshKey((prev) => prev + 1);
    };

    window.addEventListener("toggleAside", handleToggleAside);
    window.addEventListener("crudEvent", handleRefreshAside);

    return () => {
      window.removeEventListener("toggleAside", handleToggleAside);
      window.removeEventListener("crudEvent", handleRefreshAside);
    };
  }, []);

  return (
    <aside
      className={`fixed mr-10 flex flex-col items-stretch left-0 top-0 w-52 h-full z-10 bg-secondary-light dark:bg-secondary-dark p-3 pt-12 transition-transform duration-300 ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      } ${className}`}
    >
      <NewDocumentButton />
      <DocumentsList key={refreshKey} />
      <section className="mt-auto">
        <DropdownButton text="Exports">
          <ExportButton html />
          <ExportButton markdown />
        </DropdownButton>
      </section>
    </aside>
  );
}

export default Aside;
