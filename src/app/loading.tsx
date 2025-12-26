import { Loader2 } from "lucide-react";

export default function loading() {
    return (
        <div className="min-h-[400px] flex flex-col items-center justify-center px-4">
            <div className="relative">
                <Loader2 
                size={62}
                className="text-gray-800 animate-spin"/>

                <div className="absolute top-0 left-0 w-full h-full rounded-full border-t-2 border-cyan-300 animate-[spin_3s_linear_infinite]"></div>
            </div>
        </div>
    )
}