import { useIntl } from "react-intl";

import MetaTags from "../modules/common/components/MetaTags";

const Conditions = () => {
  const intl = useIntl();

  return (
    <>
      <MetaTags
        title={intl.formatMessage({
          id: "conditions",
          defaultMessage: "Terms & Conditions",
        })}
      />
      <div className="bg-gradient-to-b from-beige to-beige-alt min-h-screen">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm border border-olivebrown-light/20 p-8">
            <h1 className="text-4xl font-bold tracking-tight text-olivebrown-darker mb-8">
              Terms & Conditions
            </h1>
            
            <div className="space-y-8 text-olivebrown-dark">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">1. Introduction</h2>
                <p>
                  These Terms and Conditions ("Terms") govern your use of the Anandi Yoga website and services 
                  operated by Anandi Yoga GmbH ("we," "us," or "our"). By accessing or using our website, 
                  you agree to be bound by these Terms.
                </p>
              </section>

              {/* Acceptance of Terms */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">2. Acceptance of Terms</h2>
                <p>
                  By accessing and using this website, you accept and agree to be bound by the terms and provision 
                  of this agreement. Additionally, when using this website's particular services, you shall be 
                  subject to any posted guidelines or rules applicable to such services.
                </p>
              </section>

              {/* Products and Services */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">3. Products and Services</h2>
                <div className="space-y-4">
                  <p>
                    Anandi Yoga offers yoga equipment, accessories, clothing, and related wellness products. 
                    All products are subject to availability and we reserve the right to discontinue any product at any time.
                  </p>
                  <p>
                    Product descriptions, images, and prices are provided for informational purposes and are subject to change 
                    without notice. We strive for accuracy but cannot guarantee that all information is error-free.
                  </p>
                </div>
              </section>

              {/* Ordering and Payment */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">4. Ordering and Payment</h2>
                <div className="space-y-4">
                  <p>
                    <strong>Order Placement:</strong> When you place an order, you are making an offer to purchase products. 
                    We reserve the right to accept or decline your order for any reason.
                  </p>
                  <p>
                    <strong>Payment:</strong> Payment is required at the time of order placement. We accept major credit cards, 
                    PayPal, and bank transfers. All prices are in Swiss Francs (CHF) and include applicable VAT.
                  </p>
                  <p>
                    <strong>Order Confirmation:</strong> You will receive an email confirmation once your order is processed. 
                    This confirmation constitutes acceptance of your order and forms a binding contract.
                  </p>
                </div>
              </section>

              {/* Shipping and Delivery */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">5. Shipping and Delivery</h2>
                <div className="space-y-4">
                  <p>
                    <strong>Shipping Areas:</strong> We currently ship within Switzerland and to EU countries. 
                    Additional shipping charges may apply for international orders.
                  </p>
                  <p>
                    <strong>Delivery Times:</strong> Standard delivery within Switzerland is 2-5 business days. 
                    International deliveries may take 5-14 business days. Delivery times are estimates and not guaranteed.
                  </p>
                  <p>
                    <strong>Risk of Loss:</strong> Risk of loss and title for products pass to you upon delivery to the carrier.
                  </p>
                </div>
              </section>

              {/* Returns and Refunds */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">6. Returns and Refunds</h2>
                <div className="space-y-4">
                  <p>
                    <strong>Return Period:</strong> You may return products within 30 days of delivery for a full refund, 
                    provided they are in original condition with tags attached.
                  </p>
                  <p>
                    <strong>Return Process:</strong> Contact our customer service at hello@anandi-yoga.ch to initiate a return. 
                    Return shipping costs are the responsibility of the customer unless the item was defective or incorrect.
                  </p>
                  <p>
                    <strong>Refund Processing:</strong> Refunds will be processed within 5-10 business days after we receive 
                    the returned item and verify its condition.
                  </p>
                </div>
              </section>

              {/* User Accounts */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">7. User Accounts</h2>
                <div className="space-y-4">
                  <p>
                    <strong>Account Creation:</strong> You may create an account to enhance your shopping experience. 
                    You are responsible for maintaining the confidentiality of your account credentials.
                  </p>
                  <p>
                    <strong>Account Responsibility:</strong> You are responsible for all activities that occur under your account. 
                    Notify us immediately of any unauthorized use of your account.
                  </p>
                </div>
              </section>

              {/* Intellectual Property */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">8. Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, images, and software, is the property of 
                  Anandi Yoga GmbH and is protected by Swiss and international copyright laws. You may not reproduce, 
                  distribute, or create derivative works without our express written permission.
                </p>
              </section>

              {/* Privacy */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">9. Privacy</h2>
                <p>
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, 
                  to understand our practices regarding the collection, use, and disclosure of your personal information.
                </p>
              </section>

              {/* Disclaimers */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">10. Disclaimers</h2>
                <div className="space-y-4">
                  <p>
                    <strong>Product Use:</strong> Our yoga products are intended for personal use by individuals with appropriate 
                    fitness levels. Consult a healthcare professional before beginning any new exercise routine.
                  </p>
                  <p>
                    <strong>Website Availability:</strong> We strive to maintain website availability but cannot guarantee 
                    uninterrupted access. We reserve the right to modify or discontinue the website at any time.
                  </p>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">11. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Anandi Yoga GmbH shall not be liable for any indirect, incidental, 
                  special, or consequential damages arising from your use of our products or website. Our total liability 
                  shall not exceed the amount paid for the specific product giving rise to the claim.
                </p>
              </section>

              {/* Governing Law */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">12. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Switzerland. 
                  Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Zürich, Switzerland.
                </p>
              </section>

              {/* Changes to Terms */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">13. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting 
                  on our website. Your continued use of the website after any changes constitutes acceptance of the new Terms.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-semibold text-olivebrown-darker mb-4">14. Contact Information</h2>
                <div className="space-y-2">
                  <p>If you have any questions about these Terms, please contact us:</p>
                  <p><strong>Email:</strong> hello@anandi-yoga.ch</p>
                  <p><strong>Phone:</strong> +41 44 123 45 67</p>
                  <p><strong>Address:</strong> Anandi Yoga GmbH, Bahnhofstrasse 123, 8001 Zürich, Switzerland</p>
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

export default Conditions;