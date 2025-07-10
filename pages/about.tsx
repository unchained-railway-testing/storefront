import { useIntl } from "react-intl";

import MetaTags from "../modules/common/components/MetaTags";
import Footer from "../modules/layout/components/Footer";

const AboutPage = () => {
  const intl = useIntl();

  return (
    <>
      <MetaTags
        title={intl.formatMessage({ id: "about", defaultMessage: "About" })}
      />

      <div className="bg-gradient-to-b from-beige to-beige-alt min-h-screen">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-olivebrown-darker sm:text-5xl mb-6">
              About Anandi Yoga
            </h1>
            <p className="text-xl text-olivebrown-dark max-w-3xl mx-auto leading-relaxed">
              Discover the heart and soul behind Anandi Yoga – where ancient wisdom meets modern mindfulness, 
              creating a sanctuary for your yoga journey and spiritual growth.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Our Story Section */}
            <section className="bg-white rounded-lg p-8 shadow-sm border border-olivebrown-light/20">
              <h2 className="text-3xl font-bold text-olivebrown-darker mb-6">Our Story</h2>
              <div className="space-y-6 text-olivebrown-dark leading-relaxed">
                <p>
                  Founded in the heart of Switzerland, Anandi Yoga was born from a deep passion for authentic yoga practice 
                  and a vision to make mindful living accessible to everyone. Our name "Anandi" comes from Sanskrit, 
                  meaning "bliss" or "joy" – the very essence we strive to bring into every aspect of our offerings.
                </p>
                <p>
                  What started as a small collection of carefully curated yoga essentials has grown into a comprehensive 
                  destination for practitioners seeking quality, sustainability, and spiritual connection in their yoga journey. 
                  Every product we offer is chosen with intention, supporting both your practice and our planet.
                </p>
              </div>
            </section>

            {/* Our Mission Section */}
            <section className="bg-white rounded-lg p-8 shadow-sm border border-olivebrown-light/20">
              <h2 className="text-3xl font-bold text-olivebrown-darker mb-6">Our Mission</h2>
              <div className="space-y-6 text-olivebrown-dark leading-relaxed">
                <p>
                  At Anandi Yoga, we believe that yoga is more than just physical practice – it's a way of life that 
                  cultivates inner peace, mindfulness, and connection with the world around us. Our mission is to provide 
                  practitioners with high-quality, ethically sourced yoga products that enhance their practice while 
                  honoring traditional yoga values.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-olivebrown rounded-md flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-olivebrown-darker">🌱</span>
                    </div>
                    <h3 className="text-lg font-semibold text-olivebrown-darker mb-2">Sustainability</h3>
                    <p className="text-sm">Eco-friendly products that respect our planet and future generations.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-olivebrown rounded-md flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-olivebrown-darker">🧘‍♀️</span>
                    </div>
                    <h3 className="text-lg font-semibold text-olivebrown-darker mb-2">Authenticity</h3>
                    <p className="text-sm">Honoring traditional yoga wisdom while embracing modern innovation.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-olivebrown rounded-md flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-olivebrown-darker">✨</span>
                    </div>
                    <h3 className="text-lg font-semibold text-olivebrown-darker mb-2">Mindfulness</h3>
                    <p className="text-sm">Creating products that inspire presence and conscious living.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Values Section */}
            <section className="bg-white rounded-lg p-8 shadow-sm border border-olivebrown-light/20">
              <h2 className="text-3xl font-bold text-olivebrown-darker mb-6">Our Values</h2>
              <div className="space-y-4 text-olivebrown-dark">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-olivebrown rounded-md flex items-center justify-center mt-1">
                    <span className="text-olivebrown-darker text-sm">⚖️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-olivebrown-darker">Ethical Sourcing</h3>
                    <p>We partner with suppliers who share our commitment to fair trade and ethical production practices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-olivebrown rounded-md flex items-center justify-center mt-1">
                    <span className="text-olivebrown-darker text-sm">💚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-olivebrown-darker">Community</h3>
                    <p>Building a supportive community of practitioners who inspire and learn from each other.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-olivebrown rounded-md flex items-center justify-center mt-1">
                    <span className="text-olivebrown-darker text-sm">🌟</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-olivebrown-darker">Quality</h3>
                    <p>Curating only the finest yoga products that meet our rigorous standards for durability and performance.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-white rounded-lg p-8 shadow-sm border border-olivebrown-light/20">
              <h2 className="text-3xl font-bold text-olivebrown-darker mb-6">Connect With Us</h2>
              <div className="text-olivebrown-dark leading-relaxed">
                <p className="mb-6">
                  We'd love to hear from you! Whether you have questions about our products, need guidance on your yoga journey, 
                  or simply want to share your experience with Anandi Yoga, we're here to connect and support your practice.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-olivebrown-darker mb-2">Email Us</h3>
                    <p>hello@anandi-yoga.ch</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-olivebrown-darker mb-2">Follow Our Journey</h3>
                    <p>@anandiyoga on Instagram and Facebook</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Closing Quote */}
          <div className="text-center mt-16">
            <blockquote className="text-2xl font-medium text-olivebrown-darker italic">
              "Yoga is not about touching your toes. It is where you learn on the way down."
            </blockquote>
            <p className="text-olivebrown-dark mt-4">– Judith Hanson Lasater</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;