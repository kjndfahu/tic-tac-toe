import { useEffect, useState } from "react";

export function useEventSource<T>(url: string){
    const [isPending, setIsPending] = useState(true)
    const [data, setData] = useState<T>()
    const [error, setError] = useState<unknown | undefined>()

    useEffect(() => {
        const gameEvents = new EventSource(url)

        gameEvents.addEventListener('message', (message) => {
            try{
                setIsPending(false)
                setError(undefined)
                setData(JSON.parse(message.data))
            } catch(e){
                setError(e)
                console.error('error parse error')
            }
        })

        gameEvents.addEventListener('error', (e) => {
            setError(e)
        })

        return () => gameEvents.close()
    }, [url])

    return {
        dataStream: data,
        error,
        isPending
    };
}