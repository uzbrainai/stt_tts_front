
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        products: 'Products',
        services: 'Services',
        news: 'News',
        articles: 'Articles',
        pricing: 'Pricing',
        testimonials: 'Testimonials',
        contact: 'Contact',
        login: 'Login',
        signup: 'Sign Up'
      },
      hero: {
        title: 'Advanced Voice AI Technologies',
        subtitle: 'Leading solutions in Speech-to-Text, Text-to-Speech, Voice Watermarking, and Voice Authentication',
        cta: 'Explore Our Solutions'
      },
      products: {
        title: 'Our Products',
        stt: {
          title: 'Speech-to-Text',
          description: 'Convert spoken language into written text with high accuracy and real-time processing.'
        },
        tts: {
          title: 'Text-to-Speech',
          description: 'Transform written text into natural-sounding speech with multiple voice options.'
        },
        watermarking: {
          title: 'Voice Watermarking',
          description: 'Protect audio content with invisible watermarks for copyright and authenticity verification.'
        },
        authentication: {
          title: 'Voice Authentication',
          description: 'Secure biometric authentication using unique voice patterns and characteristics.'
        }
      },
      auth: {
        login: {
          title: 'Login to Your Account',
          email: 'Email',
          password: 'Password',
          submit: 'Sign In',
          signup: "Don't have an account? Sign up"
        },
        signup: {
          title: 'Create Your Account',
          name: 'Full Name',
          email: 'Email',
          password: 'Password',
          confirmPassword: 'Confirm Password',
          submit: 'Sign Up',
          login: 'Already have an account? Sign in'
        }
      },
      footer: {
        description: 'Leading provider of AI voice technologies',
        links: 'Quick Links',
        contact: 'Contact Info',
        rights: 'All rights reserved.'
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        products: 'Productos',
        services: 'Servicios',
        news: 'Noticias',
        articles: 'Artículos',
        pricing: 'Precios',
        testimonials: 'Testimonios',
        contact: 'Contacto',
        login: 'Iniciar Sesión',
        signup: 'Registrarse'
      },
      hero: {
        title: 'Tecnologías Avanzadas de Voz AI',
        subtitle: 'Soluciones líderes en Speech-to-Text, Text-to-Speech, Marcas de Agua de Voz y Autenticación de Voz',
        cta: 'Explorar Nuestras Soluciones'
      },
      products: {
        title: 'Nuestros Productos',
        stt: {
          title: 'Voz a Texto',
          description: 'Convierte el lenguaje hablado en texto escrito con alta precisión y procesamiento en tiempo real.'
        },
        tts: {
          title: 'Texto a Voz',
          description: 'Transforma texto escrito en habla de sonido natural con múltiples opciones de voz.'
        },
        watermarking: {
          title: 'Marcas de Agua de Voz',
          description: 'Protege contenido de audio con marcas de agua invisibles para verificación de derechos de autor y autenticidad.'
        },
        authentication: {
          title: 'Autenticación de Voz',
          description: 'Autenticación biométrica segura usando patrones únicos de voz y características.'
        }
      },
      auth: {
        login: {
          title: 'Iniciar Sesión en tu Cuenta',
          email: 'Correo Electrónico',
          password: 'Contraseña',
          submit: 'Iniciar Sesión',
          signup: '¿No tienes cuenta? Regístrate'
        },
        signup: {
          title: 'Crear tu Cuenta',
          name: 'Nombre Completo',
          email: 'Correo Electrónico',
          password: 'Contraseña',
          confirmPassword: 'Confirmar Contraseña',
          submit: 'Registrarse',
          login: '¿Ya tienes cuenta? Inicia sesión'
        }
      },
      footer: {
        description: 'Proveedor líder de tecnologías de voz AI',
        links: 'Enlaces Rápidos',
        contact: 'Información de Contacto',
        rights: 'Todos los derechos reservados.'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
