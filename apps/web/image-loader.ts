const CDN_URL = "https://vazen.dev";

type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

export default function imageLoader({ src, width, quality = 80 }: ImageLoaderProps): string {
  // Skip CDN optimization for localhost (local development)
  if (src.includes("localhost") || src.includes("127.0.0.1")) {
    return src;
  }

  // In development, serve local images without CDN
  if (process.env.NODE_ENV === "development") {
    if (src.startsWith("/")) {
      return `${src}?w=${width}&q=${quality}`;
    }
    return src;
  }

  // Production: use Cloudflare CDN transformation
  // Added custom path /img instead of /cdn-gci/image
  /** @see https://developers.cloudflare.com/images/transform-images/serve-images-custom-paths/ */
  if (src.startsWith("/_next")) {
    return `${CDN_URL}/img/width=${width},quality=${quality}/${CDN_URL}${src}`;
  }

  if (src.startsWith("/")) {
    return `${CDN_URL}/img/width=${width},quality=${quality}/${CDN_URL}${src}`;
  }

  return `${CDN_URL}/img/width=${width},quality=${quality}/${src}`;
}
