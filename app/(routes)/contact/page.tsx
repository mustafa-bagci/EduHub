import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaFax, FaUser, FaEnvelope } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white p-8 sm:p-12 lg:p-16 rounded-lg shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-teal-600 mb-8 text-center">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <address className="text-base sm:text-lg text-gray-700">
              <div className="flex items-start mb-4">
                <FaMapMarkerAlt className="text-red-500 mr-3" size={24} />
                <p><strong className="font-medium">Address:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, ullam!</p>
              </div>
              <div className="flex items-start mb-4">
                <FaFax className="text-red-500 mr-3" size={24} />
                <p><strong className="font-medium">Fax:</strong> XXXX XXX XX XX</p>
              </div>
              <div className="flex items-start mb-4">
                <FaUser className="text-red-500 mr-3" size={24} />
                <p><strong className="font-medium">Contact Person:</strong> Mustafa BAGCI +XX XXX XXX XX XX</p>
              </div>
              <div className="flex items-start mb-4">
                <FaEnvelope className="text-red-500 mr-3" size={24} />
                <p><strong className="font-medium">E-mail:</strong> <a href="mailto:mustafaenes042@hotmail.com" className="text-blue-600 hover:underline">mustafaenes042@hotmail.com</a></p>
              </div>
            </address>
          </div>
          <div className="relative w-full max-w-xs mx-auto">
            <Image
              src="/whatsapp-qr-code.png"
              alt="WhatsApp QR Code"
              layout="responsive"
              width={400}
              height={400}
              className="object-cover rounded-lg shadow-md"
            />
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-4 py-2 mt-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
            >
              <SiWhatsapp size={24} className="mr-2" />
              Contact Us on WhatsApp
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Follow Us</h2>
          <div className="flex space-x-4 mb-6">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
              <FaFacebook size={24} />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transition">
              <FaYoutube size={24} />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;