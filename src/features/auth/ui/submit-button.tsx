import { Button } from "@/shared/ui/button";

export function SubmitButton({children, isPending}: {
    children: React.ReactNode,
    isPending?: boolean
}){
    return (
        <Button disabled={isPending} className="w-full mt-4" type="submit">
            {children}
        </Button>
    )
}