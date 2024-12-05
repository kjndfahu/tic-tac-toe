import { sessionService } from "@/enteties/user/server"
import { routes } from "@/kernel/routes";
import { Button } from "@/shared/ui/button"
import { redirect } from "next/navigation";

export default async function({children}: {children: React.ReactNode}){

    const {session} = await sessionService.verifySession()

    return (
        <div className="flex flex-col grow">
            <header className="px-10 py-4 flex flex-row justify-between border-b border-b-primary/50 items-center">
                <div className="text-xl">Tic-tac-toe online</div> 
                <div className="flex items-center gap-4">
                    <div className="text-lg">{session.login}</div>
                    <form action={async () => {
                        "use server";
                        sessionService.deleteSession()
                        redirect(routes.signIn())
                    }}>
                        <Button>Sign out</Button>
                    </form>
                </div>
            </header>
            {children}
        </div>
    )
}