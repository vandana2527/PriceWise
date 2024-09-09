// custom-types.d.ts
import type { Dialog, DialogOverlay } from '@headlessui/react';

declare module '@headlessui/react' {
  interface Dialog {
    Overlay: typeof DialogOverlay;
  }
}