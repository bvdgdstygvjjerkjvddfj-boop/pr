// ========================================
// script.js - بورتفوليو احترافي بالعربية
// مشاريع حقيقية وتفاعلات متقدمة
// نسخة كاملة بدون أخطاء
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  
  // ========== تأثير الكتابة التلقائية ==========
  const typingElement = document.getElementById('typing');
  const phrases = [
    "تطبيقات ويب حديثة",
    "مواقع متجاوبة مع جميع الأجهزة",
    "حلول React.js احترافية",
    "أكواد نظيفة وقابلة للتوسع",
    "واجهات مستخدم تفاعلية",
    "تجارب رقمية مميزة"
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingTimeout;

  function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingTimeout = setTimeout(typeEffect, 2000);
      return;
    }
    
    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingTimeout = setTimeout(typeEffect, 300);
      return;
    }
    
    const speed = isDeleting ? 50 : 100;
    typingTimeout = setTimeout(typeEffect, speed);
  }
  
  typeEffect();

  // ========== تبديل الوضع (ليلي/نهاري) ==========
  const toggleBtn = document.getElementById('mode');
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'light') {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }
  
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });

  // ========== بيانات المشاريع الحقيقية ==========
  const projectsData = [
    {
      id: 1,
      title: "متجر إلكتروني متكامل",
      category: "react",
      description: "منصة تجارة إلكترونية متكاملة تحتوي على سلة تسوق، قائمة رغبات، نظام توثيق المستخدمين، وبوابة دفع متكاملة. تشمل لوحة تحكم للمديرين لإدارة المنتجات والطلبات.",
      tags: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Stripe"],
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "نظام إدارة المهام",
      category: "react",
      description: "أداة متقدمة لإدارة المشاريع مع لوحات السحب والإفلات، تحديثات فورية، تعاون جماعي، تعيين المهام، وتحليلات متقدمة لتتبع التقدم.",
      tags: ["React", "DnD Kit", "Firebase", "Tailwind CSS"],
      featured: true,
      year: "2024"
    },
    {
      id: 3,
      title: "تطبيق الطقس",
      category: "js",
      description: "تطبيق طقس فوري مع توقعات لمدة 7 أيام، خرائط تفاعلية، تنبيهات الأحوال الجوية القاسية، وتوصيات مبنية على الموقع الجغرافي باستخدام OpenWeatherMap API.",
      tags: ["JavaScript", "REST API", "Chart.js", "Geolocation"],
      featured: false,
      year: "2023"
    },
    {
      id: 4,
      title: "منشئ البورتفوليو بالذكاء الاصطناعي",
      category: "react",
      description: "منشئ بورتفوليو مدعوم بالذكاء الاصطناعي يقوم بإنشاء مواقع مخصصة بناءً على تفضيلات المستخدم. يتميز بقوالب ديناميكية وتحسين تلقائي للمحتوى.",
      tags: ["React", "OpenAI API", "Tailwind", "Vercel"],
      featured: true,
      year: "2024"
    },
    {
      id: 5,
      title: "لوحة تحكم المطاعم",
      category: "js",
      description: "نظام متكامل لإدارة المطاعم مع تتبع الطلبات، تحديثات التوصيل الفورية، إدارة القوائم، وتحليلات العملاء.",
      tags: ["JavaScript", "Firebase", "Google Maps API", "CSS3"],
      featured: false,
      year: "2023"
    },
    {
      id: 6,
      title: "مكتشف الأفلام",
      category: "html-css",
      description: "مكتبة أفلام تفاعلية مع وظائف البحث، تصفية حسب النوع/السنة، صفحات تفاصيل الأفلام، وقائمة مشاهدات شخصية باستخدام TMDB API.",
      tags: ["HTML5", "CSS3", "JavaScript", "TMDB API"],
      featured: false,
      year: "2023"
    },
    {
      id: 7,
      title: "نظام الرعاية الصحية",
      category: "react",
      description: "نظام حديث لإدارة الرعاية الصحية مع سجلات المرضى، جدولة المواعيد، تتبع التاريخ الطبي، وتكامل الاستشارات عن بُعد.",
      tags: ["React", "Chart.js", "Material-UI", "Firebase"],
      featured: true,
      year: "2024"
    },
    {
      id: 8,
      title: "منصة العقارات",
      category: "js",
      description: "موقع متخصص في عرض العقارات مع بحث متقدم، مقارنة العقارات، جولات افتراضية، حاسبة الرهن العقاري، ونظام تواصل مع الوسيط.",
      tags: ["JavaScript", "Leaflet.js", "REST API", "SASS"],
      featured: false,
      year: "2023"
    }
  ];

  // ========== نظام التصفية ==========
  const filtersContainer = document.getElementById('filters');
  const projectsContainer = document.getElementById('projectsContainer');
  
  const filterOptions = [
    { id: "all", label: "✨ جميع المشاريع" },
    { id: "react", label: "⚛️ React.js" },
    { id: "js", label: "🟨 JavaScript" },
    { id: "html-css", label: "🎨 HTML/CSS" }
  ];
  
  let activeFilter = "all";
  
  function renderFilters() {
    if (!filtersContainer) return;
    filtersContainer.innerHTML = '';
    filterOptions.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option.label;
      btn.classList.add('filter-btn');
      if (activeFilter === option.id) {
        btn.classList.add('active');
      }
      btn.addEventListener('click', () => {
        activeFilter = option.id;
        renderFilters();
        renderProjects();
      });
      filtersContainer.appendChild(btn);
    });
  }
  
  function renderProjects() {
    if (!projectsContainer) return;
    
    let filteredProjects = projectsData;
    if (activeFilter !== "all") {
      filteredProjects = projectsData.filter(project => project.category === activeFilter);
    }
    
    if (filteredProjects.length === 0) {
      projectsContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
          <i class="fas fa-folder-open" style="font-size: 3rem; color: var(--accent-primary); margin-bottom: 1rem; display: block;"></i>
          <p style="color: var(--text-muted);">✨ لا توجد مشاريع في هذا التصنيف حالياً</p>
        </div>
      `;
      return;
    }
    
    projectsContainer.innerHTML = filteredProjects.map(project => `
      <div class="card" data-id="${project.id}">
        <strong>${project.title}</strong>
        <p>${project.description}</p>
        <div class="card-tags">
          ${project.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
        </div>
        <div style="margin-top: 0.75rem; font-size: 0.7rem; color: var(--text-muted);">
          <i class="far fa-calendar-alt"></i> ${project.year}
        </div>
      </div>
    `).join('');
    
    // إضافة حدث النقر على البطاقات
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
        const projectId = parseInt(card.dataset.id);
        const project = projectsData.find(p => p.id === projectId);
        if (project) {
          showProjectModal(project);
        }
      });
    });
  }
  
  // ========== نافذة منبثقة لعرض تفاصيل المشروع ==========
  function showProjectModal(project) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close">&times;</button>
        <div class="modal-icon">
          <i class="fas fa-code-branch"></i>
        </div>
        <h3>${project.title}</h3>
        <div class="modal-year">
          <i class="far fa-calendar-alt"></i> ${project.year}
        </div>
        <p class="modal-description">${project.description}</p>
        <div class="modal-tags">
          <strong>التقنيات المستخدمة:</strong>
          <div class="card-tags" style="margin-top: 0.75rem;">
            ${project.tags.map(tag => `<span class="card-tag">${tag}</span>`).join('')}
          </div>
        </div>
        <div class="modal-buttons">
          <button class="modal-action demo-btn">
            <i class="fas fa-external-link-alt"></i> عرض تجريبي
          </button>
          <button class="modal-action code-btn">
            <i class="fab fa-github"></i> عرض الكود
          </button>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // إضافة أنماط النافذة المنبثقة إذا لم تكن موجودة
    if (!document.querySelector('#modal-styles')) {
      const modalStyle = document.createElement('style');
      modalStyle.id = 'modal-styles';
      modalStyle.textContent = `
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          animation: fadeIn 0.2s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .modal-content {
          background: var(--bg-card);
          border-radius: var(--radius-xl);
          padding: 2rem;
          max-width: 550px;
          width: 90%;
          position: relative;
          animation: slideUp 0.3s ease;
          border: 1px solid var(--border-medium);
          box-shadow: var(--shadow-xl);
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .modal-close {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--bg-elevated);
          border: 1px solid var(--border-medium);
          font-size: 1.5rem;
          cursor: pointer;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-fast);
          color: var(--text-primary);
        }
        
        .modal-close:hover {
          background: var(--danger);
          color: white;
          transform: rotate(90deg);
        }
        
        .modal-icon {
          text-align: center;
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .modal-icon i {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .modal-content h3 {
          font-size: 1.5rem;
          text-align: center;
          margin-bottom: 0.5rem;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .modal-year {
          text-align: center;
          color: var(--accent-primary);
          font-size: 0.85rem;
          margin-bottom: 1rem;
        }
        
        .modal-description {
          color: var(--text-secondary);
          line-height: 1.8;
          margin: 1rem 0;
        }
        
        .modal-tags {
          margin: 1.5rem 0;
        }
        
        .modal-tags strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.5rem;
        }
        
        .modal-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        
        .modal-action {
          flex: 1;
          padding: 0.75rem;
          border-radius: var(--radius-full);
          cursor: pointer;
          font-weight: 600;
          transition: var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-family: inherit;
        }
        
        .demo-btn {
          background: var(--accent-gradient);
          color: white;
          border: none;
        }
        
        .demo-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-glow);
        }
        
        .code-btn {
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border-medium);
        }
        
        .code-btn:hover {
          border-color: var(--accent-primary);
          color: var(--accent-primary);
          transform: translateY(-2px);
        }
      `;
      document.head.appendChild(modalStyle);
    }
    
    // إغلاق النافذة المنبثقة
    const closeBtn = modal.querySelector('.modal-close');
    const closeModal = () => {
      modal.remove();
      document.body.style.overflow = '';
    };
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
    
    // أزرار العرض التجريبي والكود
    const demoBtn = modal.querySelector('.demo-btn');
    const codeBtn = modal.querySelector('.code-btn');
    
    demoBtn.addEventListener('click', () => {
      alert(`🚀 العرض التجريبي لمشروع "${project.title}" سيكون متاح قريباً!\n\nترقبوا رابط التشغيل الفعلي.`);
    });
    
    codeBtn.addEventListener('click', () => {
      alert(`📂 مستودع GitHub الخاص بمشروع "${project.title}" خاص حالياً.\n\nيمكنك التواصل معي للاطلاع على الكود!`);
    });
  }

  // ========== تحريك أشرطة المهارات ==========
  function animateSkills() {
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    skillProgressBars.forEach(bar => {
      const level = bar.getAttribute('data-level');
      if (level && bar.style.width !== `${level}%`) {
        bar.style.width = `${level}%`;
      }
    });
  }
  
  // ========== مراقبة التمرير للظهور بالتدريج ==========
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        
        // تحريك المهارات عند ظهور قسم المهارات
        if (entry.target.id === 'skills' || entry.target.querySelector('.skill-progress')) {
          animateSkills();
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // مراقبة جميع الأقسام
  const sections = document.querySelectorAll('.section, .hero');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });
  
  // ========== تمرير سلس عند الضغط على الروابط ==========
  const navLinks = document.querySelectorAll('.nav-links a, .btn-primary, .btn-secondary');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }
    });
  });
  
  // ========== صورة احتياطية في حالة فشل تحميل الصورة ==========
  const profileImg = document.getElementById('profileImg');
  if (profileImg) {
    profileImg.addEventListener('error', () => {
      profileImg.src = 'https://ui-avatars.com/api/?background=8b5cf6&color=fff&bold=true&name=Ahmed&size=200';
    });
  }
  
  // ========== إضافة السنة الحالية في التذييل ==========
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  
  // ========== تهيئة عرض المشاريع ==========
  renderFilters();
  renderProjects();
  
  // ========== القائمة المنسدلة للهواتف المحمولة ==========
  const menuBtn = document.querySelector('.nav-menu-btn');
  const navLinksContainer = document.querySelector('.nav-links');
  
  if (menuBtn && navLinksContainer) {
    menuBtn.addEventListener('click', () => {
      if (navLinksContainer.style.display === 'flex') {
        navLinksContainer.style.display = 'none';
      } else {
        navLinksContainer.style.display = 'flex';
        navLinksContainer.style.flexDirection = 'column';
        navLinksContainer.style.position = 'absolute';
        navLinksContainer.style.top = '70px';
        navLinksContainer.style.right = '0';
        navLinksContainer.style.left = '0';
        navLinksContainer.style.background = 'var(--bg-card)';
        navLinksContainer.style.padding = '1rem';
        navLinksContainer.style.gap = '1rem';
        navLinksContainer.style.borderBottom = '1px solid var(--border-light)';
        navLinksContainer.style.zIndex = '999';
      }
    });
    
    // إعادة تعيين القائمة عند تغيير حجم الشاشة
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        navLinksContainer.style.display = '';
        navLinksContainer.style.flexDirection = '';
        navLinksContainer.style.position = '';
        navLinksContainer.style.top = '';
        navLinksContainer.style.right = '';
        navLinksContainer.style.left = '';
        navLinksContainer.style.background = '';
        navLinksContainer.style.padding = '';
        navLinksContainer.style.gap = '';
        navLinksContainer.style.borderBottom = '';
      } else {
        if (navLinksContainer.style.display !== 'flex') {
          navLinksContainer.style.display = 'none';
        }
      }
    });
  }
  
  // ========== رسالة ترحيب في وحدة التحكم ==========
  console.log('%c✨ المهندس أحمد | مطور واجهات أمامية محترف ✨', 'color: #8b5cf6; font-size: 16px; font-weight: bold;');
  console.log('%c📧 للتواصل: ahmed.dev@email.com', 'color: #a855f7; font-size: 12px;');
  console.log('%c🚀 8+ مشاريع حقيقية | 3+ سنوات خبرة | متخصص في React و JavaScript', 'color: #c084fc;');
  
  // ========== تنظيف التايمر عند إغلاق الصفحة ==========
  window.addEventListener('beforeunload', () => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
  });
});