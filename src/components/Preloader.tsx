interface PreloaderProps {
  onComplete?: () => void;
}

/**
 * Preloader has been retired in favor of instant smooth page entrance transitions.
 */
export default function Preloader({ onComplete }: PreloaderProps) {
  if (onComplete) onComplete();
  return null;
}
