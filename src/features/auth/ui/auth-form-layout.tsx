import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card";

export function AuthFormLayout({
    title, description, fields, actions, link, error, action
}: {
    title: string,
    description: string,
    fields: React.ReactNode,
    actions: React.ReactNode,
    link: React.ReactNode,
    error: React.ReactNode,
    action: (formData: FormData) => void;
}){
    return (
        <Card className="w-[350px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">{title}</CardTitle>
          <CardDescription className="text-center">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form action={action}>
            {fields}
            {error}
            {actions}
          </form>
        </CardContent>
        <CardFooter>
          {link}
        </CardFooter>
      </Card>
    )
}