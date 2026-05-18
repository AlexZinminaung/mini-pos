import type { ReactNode } from "react";

type MainContentProps = {
  children: ReactNode;
};

const MainContent = ({children} : MainContentProps) => {

    return (
        <div className="w-full h-dvh relative overflow-hidden">
            {children}
        </div>
    );
}


export default MainContent;