import localFont from 'next/font/local'

// PP Right Grotesk font
export const customFont = localFont({
    src: [
      {
        path: '../../public/fonts/PPRightGroteskMono-Fine.otf',
        weight: '200',
        style: 'normal',
      },
    ],
    variable: '--font-ppright'
})

// Neue Montreal font
export const neueFont = localFont({
    src: [
      {
        path: '../../public/fonts/NeueMontreal-Light.otf',
        weight: '300',
        style: 'normal',
      },
      {
        path: '../../public/fonts/NeueMontreal-Regular.otf',
        weight: '400',
        style: 'normal',
      },
      {
        path: '../../public/fonts/NeueMontreal-Medium.otf',
        weight: '500',
        style: 'normal',
      },
      {
        path: '../../public/fonts/NeueMontreal-Bold.otf',
        weight: '700',
        style: 'normal',
      },
      {
        path: '../../public/fonts/NeueMontreal-Italic.otf',
        weight: '400',
        style: 'italic',
      },
      {
        path: '../../public/fonts/NeueMontreal-BoldItalic.otf',
        weight: '700',
        style: 'italic',
      },
      {
        path: '../../public/fonts/NeueMontreal-LightItalic.otf',
        weight: '300',
        style: 'italic',
      },
      {
        path: '../../public/fonts/NeueMontreal-MediumItalic.otf',
        weight: '500',
        style: 'italic',
      },
    ],
    display: 'swap',
    preload: true,
    fallback: ['inter', 'arial'],
    variable: '--font-neue'
})