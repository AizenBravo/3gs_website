import { Button } from "./ui/button";

export const SecondaryButton = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <Button variant='secondary' className="cursor-pointer">{children}</Button>
}