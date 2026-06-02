import { Button } from "./ui/button";

export const CtaButton = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <Button className="cursor-pointer">{children}</Button>
}