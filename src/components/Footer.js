import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames';
import RoutePaths from '@Constants/RoutePaths';
import { getSocialMediaHandles } from '@Helpers/contentful';

const Footer = () => {
  const location = useLocation();
  const [footerAtBottom, setFooterAtBottom] = useState(false);
  const [socialMediaHandles, setSocialMediaHandles] = useState([]);

  useEffect(() => {
    async function fetchSocialMediaHandles() {
      const result = await getSocialMediaHandles();
      setSocialMediaHandles(result);
    }
    fetchSocialMediaHandles();
  }, []);

  useEffect(() => {
    setFooterAtBottom(location.pathname === RoutePaths.home);
  }, [location.pathname]);

  return (
    <div
      className={classNames('navbar bottom-0', {
        'mobile:fixed md:fixed': footerAtBottom,
      })}
    >
      <div className="flex justify-center">
        <ul style={{ listStyleType: 'none' }}>
          {socialMediaHandles.map((sm) => (
            <li
              key={sm?.fields?.name}
              className="mr-4"
              style={{ display: 'inline-block' }}
            >
              <a
                href={sm?.fields?.handle}
                target="_blank"
                rel="noreferrer"
                aria-label={sm?.fields?.name}
              >
                <img
                  src={sm?.fields?.iconUrl}
                  alt={sm?.fields?.name}
                  width={24}
                  height={24}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center mt-2">
        <p>
          Made with{'  '}&#10084;{'  '}by <i>Nish!!!!</i>
        </p>
      </div>
    </div>
  );
};

export default Footer;
