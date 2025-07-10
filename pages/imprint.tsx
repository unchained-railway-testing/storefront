import { useIntl } from "react-intl";

import MetaTags from "../modules/common/components/MetaTags";

const Imprint = () => {
  const intl = useIntl();

  return (
    <>
      <MetaTags
        title={intl.formatMessage({ id: "imprint", defaultMessage: "Imprint" })}
      />
      <div className="min-h-screen">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-olivebrown-light/20 p-8">
            <h1 className="text-4xl font-bold tracking-tight text-olivebrown-darker mb-8">
              {intl.formatMessage({ id: "imprint", defaultMessage: "Imprint" })}
            </h1>

            <div className="space-y-8 text-olivebrown-dark">
              {/* Company Information */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  Company Information
                </h2>
                <div className="space-y-2">
                  <p>
                    <strong>Company Name:</strong> Anandi Yoga GmbH
                  </p>
                  <p>
                    <strong>Address:</strong> Bahnhofstrasse 123, 8001 Zürich,
                    Switzerland
                  </p>
                  <p>
                    <strong>Phone:</strong> +41 44 123 45 67
                  </p>
                  <p>
                    <strong>Email:</strong> hello@anandi-yoga.ch
                  </p>
                  <p>
                    <strong>Website:</strong> www.anandi-yoga.ch
                  </p>
                </div>
              </section>

              {/* Legal Information */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  Legal Information
                </h2>
                <div className="space-y-2">
                  <p>
                    <strong>Commercial Register:</strong> CH-020.3.123.456-7
                  </p>
                  <p>
                    <strong>VAT Number:</strong> CHE-123.456.789 MWST
                  </p>
                  <p>
                    <strong>Legal Form:</strong> Limited Liability Company
                    (GmbH)
                  </p>
                  <p>
                    <strong>Jurisdiction:</strong> Zürich, Switzerland
                  </p>
                </div>
              </section>

              {/* Management */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  Management
                </h2>
                <div className="space-y-2">
                  <p>
                    <strong>Managing Director:</strong> Priya Anandi Sharma
                  </p>
                  <p>
                    <strong>Authorized Representative:</strong> Marcus Weber
                  </p>
                </div>
              </section>

              {/* Professional Information */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  Professional Information
                </h2>
                <div className="space-y-2">
                  <p>
                    <strong>Professional Association:</strong> Swiss Yoga
                    Association (SYV)
                  </p>
                  <p>
                    <strong>Certification:</strong> Yoga Alliance International
                    (YAI)
                  </p>
                  <p>
                    <strong>Insurance:</strong> Professional liability insurance
                    through Helvetia Insurance
                  </p>
                </div>
              </section>

              {/* Disclaimer */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  Disclaimer
                </h2>
                <div className="space-y-4">
                  <p>
                    The content of our website has been compiled with meticulous
                    care and to the best of our knowledge. However, we cannot
                    assume any liability for the up-to-dateness, completeness or
                    accuracy of any of the pages.
                  </p>
                  <p>
                    Pursuant to section 7, para. 1 of the TMG (Telemediengesetz
                    – Tele Media Act by German law), we as service providers are
                    liable for our own content on these pages in accordance with
                    general laws. However, pursuant to sections 8 to 10 of the
                    TMG, we as service providers of the website are not under
                    obligation to monitor external information provided or
                    stored on our website.
                  </p>
                </div>
              </section>

              {/* Copyright */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  Copyright
                </h2>
                <div className="space-y-4">
                  <p>
                    The content and works on these pages created by the site
                    operators are subject to Swiss copyright law. The
                    duplication, processing, distribution or any form of
                    commercialization of such material beyond the scope of
                    copyright law shall require the prior written consent of the
                    author or creator.
                  </p>
                  <p>
                    Downloads and copies of these pages are only permitted for
                    private, non-commercial use. Insofar as the content on this
                    site was not created by the operator, the copyrights of
                    third parties are respected. In particular, third-party
                    content is identified as such.
                  </p>
                </div>
              </section>

              {/* Data Protection */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  Data Protection
                </h2>
                <p>
                  We take data protection seriously. Please refer to our
                  separate Privacy Policy for detailed information about how we
                  collect, use, and protect your personal data in accordance
                  with the Swiss Federal Act on Data Protection (FADP) and the
                  EU General Data Protection Regulation (GDPR).
                </p>
              </section>

              {/* Contact for Legal Matters */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  Contact for Legal Matters
                </h2>
                <div className="space-y-2">
                  <p>
                    <strong>Legal Counsel:</strong> Rechtsanwaltskanzlei Weber &
                    Partners
                  </p>
                  <p>
                    <strong>Address:</strong> Paradeplatz 8, 8001 Zürich,
                    Switzerland
                  </p>
                  <p>
                    <strong>Email:</strong> legal@anandi-yoga.ch
                  </p>
                </div>
              </section>

              {/* Last Updated */}
              <section className="pt-6 border-t border-olivebrown-light/30">
                <p className="text-sm text-olivebrown-dark">
                  <strong>Last Updated:</strong> July 2025
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imprint;
