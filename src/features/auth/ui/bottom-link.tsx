import Link from "next/link";

export function BottomLink({linkText, text, url}: {
    linkText: string,
    text: string,
    url: string,
}) {
    return (
        <div className="text-sm text-muted-foreground text-center w-full">
            {text}{' '}
            <Link 
              href={url}
              className="underline underline-offset-4 hover:text-primary"
            >
              {linkText}
            </Link>
        </div>
    )
}