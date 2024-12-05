import { NextRequest } from "next/server";

export const sseStream =(req: NextRequest) => {
      const responseStream = new TransformStream();
      const writer = responseStream.writable.getWriter();
      const encoder = new TextEncoder();
    
      let counter = 1;

      const write = (data: unknown) => writer.write(encoder.encode(`data: ${JSON.stringify(data)}\n\n`))

      const interval = setInterval(() => {}, 1000)

      const addCloseListener = (onDisconnect: () => void) => {
        void req.signal.addEventListener('abort', () => {
            onDisconnect()
          })
      }

      const response =  new Response(responseStream.readable, {
        headers: {
          'Content-Type': 'text/event-stream',
          Connection: 'keep-alive',
          'Cache-Control': 'no-cache, no-transform',
        },
      });

      const close = () => {
        writer.close()
      }
      return {
        response,
        write,
        close,
        addCloseListener
      }
}