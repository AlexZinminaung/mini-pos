import type { ReactNode } from "react";

type MainContentProps = {
  children: ReactNode;
};

const MainContent = ({children} : MainContentProps) => {

    return (
        <div className="fixed inset-0 sm:relative w-full h-dvh overflow-hidden main-container flex flex-col min-h-0">
            {children}
        </div>
    );
}


export default MainContent;