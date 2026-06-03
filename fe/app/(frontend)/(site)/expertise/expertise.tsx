import TriangleLayout from "@core/components/shapes/triangle-layout";
import { columnFlex } from "@core/css-custom-classes/flex";
import { sectionVerticalPadding } from "@core/css-custom-classes/section";
import { h2 } from "@core/css-custom-classes/text";

const Expertise = () => {
  // Add the bricks-like structure you had on your portfolio, perhaps also do those rbicks in the form
  // Of a castle colum
  const subtitle = 'What we offer to your business'

  return (
    <div className={``} id="expertise">
      <div className={`${columnFlex({})} ${sectionVerticalPadding} `}>
        <h2 className={`${h2} text-right`}>{subtitle}</h2>
        {/* Since we will not offer customs ervices yet, we will only have one service, i.e., developing
        Software for businesses to increment their productivity and earnings by removing inneficiencies */}
      </div>
    </div>
  )
};

export default Expertise;