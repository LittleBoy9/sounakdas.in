import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'media.dev.to',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'media2.dev.to',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
