import type { ReactNode } from "react";

type MainContentProps = {
  children: ReactNode;
};

const MainContent = ({children} : MainContentProps) => {

    return (
        <div className="fixed inset-0 sm:relative w-full h-dvh overflow-hidden main-container">
            {children}
        </div>
    );
}


export default MainContent;