import { useIntl } from "react-intl";

import MetaTags from "../modules/common/components/MetaTags";

const Privacy = () => {
  const intl = useIntl();

  return (
    <>
      <MetaTags
        title={intl.formatMessage({
          id: "privacy",
          defaultMessage: "Privacy Policy",
        })}
      />
      <div className="min-h-screen">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-olivebrown-light/20 p-8">
            <h1 className="text-4xl font-bold tracking-tight text-olivebrown-darker mb-8">
              Privacy Policy
            </h1>

            <div className="space-y-8 text-olivebrown-dark">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  1. Introduction
                </h2>
                <p>
                  to protecting your privacy and personal data. This Privacy
                  Policy explains how we collect, use, disclose, and safeguard
                  your information when you visit our website or make purchases
                  from us, in accordance with the Swiss Federal Act on Data
                  Protection (FADP) and the European Union General Data
                  Protection Regulation (GDPR).
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  2. Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-olivebrown-darker mb-2">
                      Personal Information
                    </h3>
                    <p>We may collect the following personal information:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      <li>
                        Name and contact information (email, phone, address)
                      </li>
                      <li>Payment and billing information</li>
                      <li>Order history and preferences</li>
                      <li>Account credentials (username, password)</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-olivebrown-darker mb-2">
                      Technical Information
                    </h3>
                    <p>
                      We automatically collect certain technical information:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Device information and operating system</li>
                      <li>Website usage data and analytics</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  3. How We Use Your Information
                </h2>
                <p>We use your information for the following purposes:</p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>Processing and fulfilling your orders</li>
                  <li>Providing customer service and support</li>
                  <li>
                    Sending order confirmations and shipping notifications
                  </li>
                  <li>Improving our website and services</li>
                  <li>Personalizing your shopping experience</li>
                  <li>Marketing communications (with your consent)</li>
                  <li>Fraud prevention and security</li>
                  <li>Legal compliance and dispute resolution</li>
                </ul>
              </section>

              {/* Legal Basis for Processing */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  4. Legal Basis for Processing
                </h2>
                <p>
                  We process your personal data based on the following legal
                  grounds:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>
                    <strong>Contract Performance:</strong> To fulfill our
                    contractual obligations to you
                  </li>
                  <li>
                    <strong>Legitimate Interests:</strong> For business
                    operations, fraud prevention, and website improvement
                  </li>
                  <li>
                    <strong>Consent:</strong> For marketing communications and
                    optional services
                  </li>
                  <li>
                    <strong>Legal Obligation:</strong> To comply with applicable
                    laws and regulations
                  </li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  5. Information Sharing and Disclosure
                </h2>
                <div className="space-y-4">
                  <p>We may share your information with:</p>
                  <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
                    <li>
                      <strong>Service Providers:</strong> Payment processors,
                      shipping companies, and IT services
                    </li>
                    <li>
                      <strong>Business Partners:</strong> Trusted partners who
                      help us operate our business
                    </li>
                    <li>
                      <strong>Legal Authorities:</strong> When required by law
                      or to protect our rights
                    </li>
                    <li>
                      <strong>Business Transfers:</strong> In case of merger,
                      acquisition, or sale of assets
                    </li>
                  </ul>
                  <p className="mt-4">
                    We do not sell, rent, or trade your personal information to
                    third parties for their marketing purposes.
                  </p>
                </div>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  6. Data Security
                </h2>
                <div className="space-y-4">
                  <p>
                    We implement appropriate technical and organizational
                    measures to protect your data:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure payment processing</li>
                    <li>Access controls and authentication</li>
                    <li>Regular security assessments</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </div>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  7. Data Retention
                </h2>
                <p>
                  We retain your personal data only as long as necessary to
                  fulfill the purposes outlined in this policy, comply with
                  legal obligations, resolve disputes, and enforce our
                  agreements. Specific retention periods vary based on the type
                  of data and legal requirements.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  8. Your Rights
                </h2>
                <p>
                  Under GDPR and Swiss data protection law, you have the
                  following rights:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                  <li>
                    <strong>Access:</strong> Request information about your
                    personal data we process
                  </li>
                  <li>
                    <strong>Rectification:</strong> Correct inaccurate or
                    incomplete data
                  </li>
                  <li>
                    <strong>Erasure:</strong> Request deletion of your personal
                    data
                  </li>
                  <li>
                    <strong>Restriction:</strong> Limit how we process your data
                  </li>
                  <li>
                    <strong>Portability:</strong> Receive your data in a
                    structured format
                  </li>
                  <li>
                    <strong>Objection:</strong> Object to processing based on
                    legitimate interests
                  </li>
                  <li>
                    <strong>Withdraw Consent:</strong> Withdraw consent for
                    consent-based processing
                  </li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, contact us at
                  privacy@anandi-yoga.ch.
                </p>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  9. Cookies and Tracking
                </h2>
                <div className="space-y-4">
                  <p>We use cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website performance and usage</li>
                    <li>Provide personalized content and recommendations</li>
                    <li>Enable shopping cart functionality</li>
                  </ul>
                  <p>
                    You can control cookies through your browser settings.
                    However, disabling certain cookies may affect website
                    functionality.
                  </p>
                </div>
              </section>

              {/* International Transfers */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  10. International Data Transfers
                </h2>
                <p>
                  As we operate internationally, your data may be transferred to
                  and processed in countries outside Switzerland and the EU. We
                  ensure appropriate safeguards are in place, including adequacy
                  decisions, standard contractual clauses, or other approved
                  transfer mechanisms.
                </p>
              </section>

              {/* Children's Privacy */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  11. Childrens Privacy
                </h2>
                <p>
                  Our services are not intended for children under 16 years of
                  age. We do not knowingly collect personal information from
                  children under 16. If we become aware of such collection, we
                  will take steps to delete the information promptly.
                </p>
              </section>

              {/* Updates to Policy */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  12. Updates to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy periodically to reflect
                  changes in our practices or applicable laws. We will notify
                  you of material changes by posting the updated policy on our
                  website and updating the Last Updated date.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">
                  13. Contact Information
                </h2>
                <div className="space-y-4">
                  <p>
                    For questions about this Privacy Policy or our data
                    practices, contact us:
                  </p>
                  <div className="space-y-2">
                    <p>
                      <strong>Data Protection Officer:</strong> Anandi Yoga GmbH
                    </p>
                    <p>
                      <strong>Email:</strong> privacy@anandi-yoga.ch
                    </p>
                    <p>
                      <strong>Phone:</strong> +41 44 123 45 67
                    </p>
                    <p>
                      <strong>Address:</strong> Bahnhofstrasse 123, 8001 Zürich,
                      Switzerland
                    </p>
                  </div>
                  <p>
                    You also have the right to lodge a complaint with the Swiss
                    Federal Data Protection and Information Commissioner (FDPIC)
                    or your local data protection authority.
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

export default Privacy;
