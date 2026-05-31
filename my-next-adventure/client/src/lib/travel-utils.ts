/**
 * Travel Website Utilities
 * Contains helper functions for interactive features
 */

// Smooth scroll to element
export const smoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Back to top functionality
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Check if element is in viewport
export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Animate counter
export const animateCounter = (
  element: HTMLElement,
  target: number,
  duration: number = 2000
) => {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toString();
    }
  }, 16);
};

// Toggle mobile menu
export const toggleMobileMenu = () => {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
};

// Close mobile menu
export const closeMobileMenu = () => {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.add('hidden');
  }
};

// Add scroll event listener for back-to-top button
export const setupBackToTopButton = () => {
  const backToTopBtn = document.getElementById('back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.remove('hidden');
      backToTopBtn.classList.add('fade-in');
    } else {
      backToTopBtn.classList.add('hidden');
    }
  });

  backToTopBtn.addEventListener('click', scrollToTop);
};

// Setup navigation link active state
export const setupNavigation = () => {
  const navLinks = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = (link as HTMLAnchorElement).getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('text-travel-orange', 'font-bold');
    } else {
      link.classList.remove('text-travel-orange', 'font-bold');
    }
  });
};

// Checklist functionality
export const setupChecklist = () => {
  const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement;
      const label = target.nextElementSibling;
      
      if (target.checked) {
        label?.classList.add('line-through', 'opacity-50');
      } else {
        label?.classList.remove('line-through', 'opacity-50');
      }
    });
  });
};

// Intersection Observer for fade-in animations
export const setupIntersectionObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('[data-animate]').forEach(el => {
    observer.observe(el);
  });
};

// Form validation
export const validateContactForm = (formData: FormData): boolean => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || name.trim() === '') {
    alert('Please enter your name');
    return false;
  }

  if (!email || !email.includes('@')) {
    alert('Please enter a valid email');
    return false;
  }

  if (!message || message.trim() === '') {
    alert('Please enter a message');
    return false;
  }

  return true;
};

// Filter destinations
export const filterDestinations = (filterValue: string) => {
  const cards = document.querySelectorAll('.destination-card');
  
  cards.forEach(card => {
    const category = (card as HTMLElement).getAttribute('data-category');
    
    if (filterValue === 'all' || category === filterValue) {
      (card as HTMLElement).style.display = 'block';
      (card as HTMLElement).classList.add('fade-in');
    } else {
      (card as HTMLElement).style.display = 'none';
    }
  });
};

// Initialize all interactive features
export const initializeApp = () => {
  setupBackToTopButton();
  setupNavigation();
  setupChecklist();
  setupIntersectionObserver();
};
