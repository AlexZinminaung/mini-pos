import type { ReactNode } from "react";

type MainContentProps = {
  children: ReactNode;
};

const MainContent = ({children} : MainContentProps) => {

    return (
        <div className="w-full">
            {children}
        </div>
    );
}


export default MainContent;