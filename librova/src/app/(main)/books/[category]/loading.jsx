import { Spinner } from "@heroui/react";

const loading = () => {
    return (
        <div className="flex flex-col items-center gap-2 min-h-screen justify-center">
            <Spinner color="" />
            <span className="text-xs text-muted"></span>
        </div>
    );
};

export default loading;