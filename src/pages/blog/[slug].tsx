import { Breadcrumb } from "@/components/ui/breadcrumb"
import { useRouter } from "next/router"

export default function PostPage() {
    const router = useRouter();
    const slug = router.query.slug
    
    return (
    <div className="mt-32">
        <Breadcrumb>
        </Breadcrumb>
    </div>
    )
}