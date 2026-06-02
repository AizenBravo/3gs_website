import { CardHeader, CardTitle } from '@core/components/ui/card';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

const CustomCardHeader = ({
  includesHeader,
  children,
}: {
  includesHeader: boolean;
  children: React.ReactNode;
}) => {
  if (!includesHeader) {
    return (
      <VisuallyHidden>
        <CardHeader>{children}</CardHeader>
      </VisuallyHidden>
    );
  }

  return <CardHeader>{children}</CardHeader>;
};

export default CustomCardHeader;
