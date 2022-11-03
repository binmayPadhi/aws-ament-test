import React from "react";

const Privacypolicy = () => {
  return (
    <>
      <div className="contact-us-intro container-fluid"></div>
      <div className="cookie-policy new-all-margin">
        <h1 className="cookie-policy-title">Cookie Policy</h1>
        <h4>Last Updated on February 08, 2021</h4>
        <p className="cookie-policy-desc">
          Amnet Digital use cookies to optimize web functionality, collect
          website analytics and traffic data, and to provide a more personalized
          user experience.
          <br />
          <br />
          We reserve the right to make changes to this Cookie Policy at any time
          and for any reason. We will alert you about any changes by updating
          the “Last Updated” date of this Cookie Policy. Any changes or
          modifications will be effective immediately upon posting the updated
          Cookie Policy on the Site, and you waive the right to receive specific
          notice of each such change or modification.
          <br />
          <br />
          You are encouraged to periodically review this Cookie Policy to stay
          informed of updates. You will be deemed to have been made aware of,
          will be subject to, and will be deemed to have accepted the changes in
          any revised Cookie Policy by your continued use of the Site after the
          date such revised Cookie Policy is posted.
        </p>

        <div className="use-of-cookies">
          <h1 className="use-of-cookies-title">Use of Cookies</h1>
          <p className="use-of-cookies-desc">
            A “cookie” is a string of information which assigns you a unique
            identifier that we store on your computer. Your browser then
            provides that unique identifier to use each time you submit a query
            to the Site. We use cookies to optimize web functionality, collect
            website analytics and traffic data, and to provide a more
            personalized user experience. Cookies help us understand how the
            Site is being used and improve your user experience.
          </p>
        </div>

        <div className="control-of-cookies" style={{ paddingBottom: "35px" }}>
          <h1 className="control-of-cookies-title">Control of Cookies</h1>
          <p className="control-of-cookies-desc">
            Most browsers are set to accept cookies by default. However, you can
            remove or reject cookies in your browser’s settings. Please be aware
            that such action could affect the availability and functionality of
            the Site.
          </p>
        </div>
      </div>
    </>
  );
};
export default Privacypolicy;
