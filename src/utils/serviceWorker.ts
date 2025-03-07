import { registerSW, RegisterSWOptions } from 'virtual:pwa-register';

export function registerServiceWorker(): void {
  if ('serviceWorker' in navigator) {
    const updateSW = registerSW({
      onNeedRefresh() {
        if (confirm('New content available. Reload?')) {
          updateSW(true);
        }
      },
      onOfflineReady() {
        console.log('App ready to work offline');
      },
      onRegistered(registration: ServiceWorkerRegistration | undefined) {
        console.log('Service Worker registered');
        
        // Set up push notifications if supported
        if (registration && 'pushManager' in registration) {
          registration.pushManager.getSubscription().then((subscription: PushSubscription | null) => {
            if (!subscription) {
              // Request notification permission and subscribe
              Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                  console.log('Notification permission granted');
                  // Subscribe to push notifications (implementation depends on your backend)
                }
              });
            }
          });
        }
      },
      onRegisterError(error: Error) {
        console.error('Service Worker registration failed:', error);
      }
    } as RegisterSWOptions);
  }
}