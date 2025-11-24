import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900">AirCover</a></li>
              <li><a href="#" className="hover:text-gray-900">Safety information</a></li>
              <li><a href="#" className="hover:text-gray-900">Disability support</a></li>
            </ul>
          </div>

          {/* Hosting */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Hosting</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Airbnb your home</a></li>
              <li><a href="#" className="hover:text-gray-900">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:text-gray-900">Hosting resources</a></li>
              <li><a href="#" className="hover:text-gray-900">Community forum</a></li>
            </ul>
          </div>

          {/* Airbnb */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Airbnb</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Newsroom</a></li>
              <li><a href="#" className="hover:text-gray-900">New features</a></li>
              <li><a href="#" className="hover:text-gray-900">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900">Investors</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Terms</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-900">Cookie preferences</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © 2024 Airbnb, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

