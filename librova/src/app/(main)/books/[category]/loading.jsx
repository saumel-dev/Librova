import { Spinner } from "@heroui/react";

const loading = () => {
    return (
        <div className="flex flex-col items-center gap-2">
            <Spinner color="current" />
            <span className="text-xs text-muted">Current</span>
        </div>
    );
};

export default loading;