import { sectionVerticalPadding } from "@core/css-custom-classes/section";
import { EnumeratePipe } from "@core/helpers/enumerate.pipe";

const FooterV1 = () => {
  const contactEmail = '3gs.saegisul@gmail.com';
  const authors = [
    'Aizen Bravo',
    '3GS (Saegisul)'
  ];
  return (
    <footer className={`${sectionVerticalPadding} py-6 sm:py-10 md:py-14`}>
      <div className="utilities">
        <div className="contact">
          <h3>Conctact us</h3>
          Email: {contactEmail}
        </div>
      </div>
      <div className={`copyright text-center`}>
        {EnumeratePipe.transform(authors)}
        <p>All rights reserved</p>
      </div>
    </footer>
  );
}


export default FooterV1;