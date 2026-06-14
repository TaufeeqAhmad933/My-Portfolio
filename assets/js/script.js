'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}











// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const target = this.getAttribute("data-nav-link-target");

    for (let j = 0; j < pages.length; j++) {
      if (target === pages[j].dataset.page) {
        pages[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
      }
    }

    for (let k = 0; k < navigationLinks.length; k++) {
      if (navigationLinks[k].getAttribute("data-nav-link-target") === target) {
        navigationLinks[k].classList.add("active");
      } else {
        navigationLinks[k].classList.remove("active");
      }
    }

    // Recalculate height on tab switch
    calculateNavbarHeight();

  });
}

// Function to dynamically calculate navbar height on desktop and set as CSS variable
const calculateNavbarHeight = () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) {
      const height = navbar.offsetHeight;
      document.documentElement.style.setProperty("--navbar-height", `${height}px`);
    } else {
      document.documentElement.style.setProperty("--navbar-height", "0px");
    }
  }
};

window.addEventListener("load", calculateNavbarHeight);
window.addEventListener("resize", calculateNavbarHeight);


// Blog Data definitions
const blogData = {
  "1": {
    title: "What Building an AI Accessibility Startup Taught Me",
    category: "Startup",
    date: "April 15, 2026",
    readTime: "5 min read",
    image: "./assets/images/blog_accessibility.png",
    content: [
      "Building a startup from scratch as a student is one of the most intense, rewarding, and eye-opening experiences a builder can go through. When we set out to build Shruthi Bandhu, an AI-powered sign language translator, we thought our biggest hurdle would be the deep learning model itself. We quickly learned that in the real world, coding is only about 20% of the battle. The remaining 80% lies in understanding user realities, building trust, and executing under constraint.",
      "Our first major revelation came during user research. We spent hours in special education centers observing how students and teachers interacted. We realized that absolute translation accuracy, while important, was secondary to latency and ease of use. A highly accurate model that takes five seconds to output a sentence is unusable in a real-time classroom conversation. This taught me to look at AI not just through the lens of benchmarks, but through user-centric product requirements.",
      "Furthermore, scaling a startup taught me the art of the 'hustle'—drafting letters of intent (LOIs), presenting pitches to institutional sponsors, and coordinating a small, multi-disciplinary student team. We learned how to articulate the business case alongside the social impact, which eventually helped us secure key partnerships. Ultimately, building Shruthi Bandhu taught me that innovation is not just about writing clean algorithms; it is about packaging technology into solutions that solve real, human problems."
    ]
  },
  "2": {
    title: "Lessons From Filing My First Patent as a Student",
    category: "Patents",
    date: "May 2, 2026",
    readTime: "6 min read",
    image: "./assets/images/blog_patent.png",
    content: [
      "Filing a patent is often perceived as something reserved for veteran researchers or corporate R&D divisions. As an undergraduate student, the process seemed shrouded in legal jargon and bureaucratic complexity. However, after designing a novel spatial mapping and gesture-recognition pipeline for our assistive technology, our mentors urged us to protect the intellectual property. Going through this journey taught me lessons that go far beyond engineering.",
      "The first lesson is that documentation is everything. A patent does not protect a vague concept; it protects a specific, reproducible implementation. I had to translate our Python code and system architecture diagrams into precise claims and flowcharts that defined the exact boundaries of our invention. This forced me to view our architecture with a level of rigor I had never applied before, identifying potential edge cases and alternative configurations.",
      "The second lesson is learning the language of patent law. Working with attorneys taught me how to describe a technical system in broad yet legally defensible terms. It is a unique blend of technical writing and legal strategy—balancing the need to make the patent broad enough to cover future variations, yet specific enough to be granted. For any student builder, the process is a masterclass in structured thinking and intellectual property strategy."
    ]
  },
  "3": {
    title: "How I Transitioned From Data Science to Product Thinking",
    category: "Product",
    date: "May 20, 2026",
    readTime: "4 min read",
    image: "./assets/images/blog_product.png",
    content: [
      "For a long time, my world was defined by dataset shapes, loss curves, and model validation scores. As a data science student, I believed that the solution to every problem was a more sophisticated model or a larger dataset. However, my internships and startup experiences forced a fundamental shift in my perspective: a perfect model is useless if it is solving the wrong problem.",
      "Transitioning to product thinking meant learning to start with the 'why' rather than the 'how'. Instead of asking, 'Can we build an LSTM or Transformer for this?', I started asking, 'Who is the user, what is their friction point, and does AI actually solve it better than a simple heuristic?' I began writing Product Requirement Documents (PRDs), mapping user flows, and conducting user interviews.",
      "This shift also changed my relationship with data. In data science, you treat data as a static resource to train models. In product management, you treat data as a dynamic feedback loop to measure user behavior and iterate. Product thinking has made me a better engineer because it ensures that the systems I write are aligned with business viability and user delight."
    ]
  },
  "4": {
    title: "Behind Shruthi Bandhu: From Idea to 3 LOIs",
    category: "Execution",
    date: "June 5, 2026",
    readTime: "5 min read",
    image: "./assets/images/blog_execution.png",
    content: [
      "When we pitched Shruthi Bandhu, many saw it as a nice academic project. Converting sign language to speech was a known problem, but we wanted to take it out of the lab and place it in classrooms. To do that, we needed validation from institutions. Securing three Letters of Intent (LOIs) from major education centers was the turning point that validated our product strategy and team capability.",
      "Getting those LOIs required a systematic approach. We did not just show up with a demo. We first spent time understanding the administrative pain points of these schools. We discovered they struggled with teacher shortages and high communication barriers. We presented Shruthi Bandhu not as an AI novelty, but as an operational tool that could save teachers hours of individual translation work.",
      "We then structured a pilot program: a low-risk, high-touch trial that allowed schools to use the translator in controlled settings. This hands-on validation made them comfortable signing the LOIs. The experience taught me that closing partnerships is about empathy and alignment. If you can align your technology with the operational goals of your stakeholders, you can turn a skeptical observer into a committed advocate."
    ]
  },
  "5": {
    title: "What Founder's Office Roles Actually Do",
    category: "Operations",
    date: "June 12, 2026",
    readTime: "4 min read",
    image: "./assets/images/blog_operations.png",
    content: [
      "The term 'Founder's Office' has become a buzzword in the startup ecosystem, often leaving people wondering what the role actually entails. Having worked closely in these high-ownership environments, I have come to realize that a Founder's Office position is essentially that of a chief execution officer for early-stage initiatives. It is the ultimate generalist role, designed to bridge the gap between high-level strategy and day-to-day execution.",
      "On any given day, a Founder's Office role might involve writing a grant proposal, coordinating between engineering and marketing teams, designing a new dashboard, or conducting market research for a new product line. There is no standard playbook. Your job is to tackle the most critical, ambiguous bottleneck the company is facing at that moment, solve it, and build a process so it can be handed off.",
      "This role requires extreme ownership and high emotional intelligence. You are often coordinating cross-functional teams without direct authority, which means you must lead through influence, clarity, and structured thinking. For anyone looking to understand how a business operates from 0 to 1, the Founder's Office is the best vantage point in the house."
    ]
  }
};

// page navigation variables
const blogItems = document.querySelectorAll(".blog-post-item");
const blogDetailArticle = document.querySelector('[data-page="blog-detail"]');
const blogArticle = document.querySelector('[data-page="blog"]');
const backToBlogsBtn = document.querySelector("[data-back-to-blogs-btn]");

const blogDetailImg = document.getElementById("blog-detail-img");
const blogDetailCategory = document.getElementById("blog-detail-category");
const blogDetailDate = document.getElementById("blog-detail-date");
const blogDetailReadTime = document.getElementById("blog-detail-read-time");
const blogDetailTitle = document.getElementById("blog-detail-title");
const blogDetailParagraphs = document.getElementById("blog-detail-paragraphs");

for (let i = 0; i < blogItems.length; i++) {
  blogItems[i].addEventListener("click", function (e) {
    e.preventDefault();
    const blogId = this.dataset.blogId;
    const blog = blogData[blogId];
    if (blog) {
      // Set content
      blogDetailImg.src = blog.image;
      blogDetailImg.alt = blog.title;
      blogDetailCategory.innerText = blog.category;
      blogDetailDate.innerText = blog.date;
      blogDetailDate.setAttribute("datetime", blog.date.replace(/,/g, '').split(' ').reverse().join('-')); // simple parsing
      blogDetailReadTime.innerText = blog.readTime;
      blogDetailTitle.innerText = blog.title;
      
      // Clear and fill paragraphs
      blogDetailParagraphs.innerHTML = "";
      blog.content.forEach(pText => {
        const p = document.createElement("p");
        p.innerText = pText;
        blogDetailParagraphs.appendChild(p);
      });

      // Switch view
      blogArticle.classList.remove("active");
      blogDetailArticle.classList.add("active");
      window.scrollTo(0, 0);
    }
  });
}

// Back to blogs button click
if (backToBlogsBtn) {
  backToBlogsBtn.addEventListener("click", function () {
    blogDetailArticle.classList.remove("active");
    blogArticle.classList.add("active");
    window.scrollTo(0, 0);
  });
}

/**
 * Shruthi Bandhu Journey Section Interactivity
 */

// Explore Journey Button Scroll
const exploreJourneyBtn = document.querySelector("[data-explore-journey-btn]");
if (exploreJourneyBtn) {
  exploreJourneyBtn.addEventListener("click", function () {
    const targetSection = document.getElementById("why-shruthi-bandhu");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

// Back to Portfolio Buttons
const backToPortfolioBtns = document.querySelectorAll("[data-back-to-portfolio-btn]");
backToPortfolioBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const portfolioNavLink = document.querySelector('[data-nav-link-target="portfolio"]');
    if (portfolioNavLink) {
      portfolioNavLink.click();
    }
  });
});

// System Architecture Zoom & Fullscreen
const architectureContainer = document.getElementById("architecture-container");
const architectureImg = document.getElementById("architecture-img");
const zoomInBtn = document.getElementById("zoom-in-btn");
const zoomOutBtn = document.getElementById("zoom-out-btn");
const fullscreenBtn = document.getElementById("fullscreen-btn");

if (architectureImg) {
  let scale = 1.0;

  const updateScale = () => {
    architectureImg.style.transform = `scale(${scale})`;
  };

  if (zoomInBtn) {
    zoomInBtn.addEventListener("click", () => {
      scale = Math.min(scale + 0.2, 3.0);
      updateScale();
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener("click", () => {
      scale = Math.max(scale - 0.2, 0.8);
      updateScale();
    });
  }
}

if (fullscreenBtn && architectureContainer) {
  fullscreenBtn.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      architectureContainer.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  });
}

/**
 * Dynamic Galleries with Fallback Placeholders
 */

// 1. Field Visits Gallery
const fieldVisits = [
  { src: "assets/images/shruthi-bandhu/field-visits/school_visit_01.jpg", caption: "School Visit" },
  { src: "assets/images/shruthi-bandhu/field-visits/school_visit_02.jpg", caption: "School Visit" },
  { src: "assets/images/shruthi-bandhu/field-visits/educator_interview_01.jpg", caption: "Educator Discussion" }
];

const fieldVisitsGallery = document.getElementById("field-visits-gallery");
if (fieldVisitsGallery) {
  fieldVisitsGallery.innerHTML = "";
  fieldVisits.forEach(item => {
    const wrapper = document.createElement("div");
    wrapper.className = "gallery-card-wrapper";

    const card = document.createElement("div");
    card.className = "gallery-item-card";

    const placeholder = document.createElement("div");
    placeholder.className = "gallery-placeholder-inner";
    placeholder.innerHTML = `
      <ion-icon name="image-outline"></ion-icon>
    `;

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.caption;
    img.className = "gallery-img";
    img.onload = () => {
      card.classList.add("loaded");
    };
    img.onerror = () => {
      img.remove();
    };

    card.appendChild(placeholder);
    card.appendChild(img);
    wrapper.appendChild(card);

    const caption = document.createElement("span");
    caption.className = "gallery-caption";
    caption.innerText = item.caption;
    wrapper.appendChild(caption);

    fieldVisitsGallery.appendChild(wrapper);
  });
}

// 2. Custom Dataset Gallery
const datasetFiles = [];

const datasetShowcase = document.getElementById("dataset-showcase");
const datasetImagesContainer = document.getElementById("dataset-images-container");
const datasetPlaceholder = document.querySelector(".dataset-placeholder");

if (datasetImagesContainer && datasetFiles.length > 0) {
  let loadedCount = 0;

  datasetFiles.forEach((src, idx) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Dataset creation photo ${idx + 1}`;
    img.className = "dataset-img";
    
    img.onload = () => {
      loadedCount++;
      
      const wrapper = document.createElement("div");
      wrapper.className = "dataset-image-wrapper";
      
      const card = document.createElement("div");
      card.className = "dataset-img-card";
      
      card.appendChild(img);
      wrapper.appendChild(card);
      
      const caption = document.createElement("span");
      caption.className = "gallery-caption";
      caption.innerText = "Custom Dataset Creation Journey";
      wrapper.appendChild(caption);
      
      datasetImagesContainer.appendChild(wrapper);
      
      if (loadedCount === 1) {
        if (datasetPlaceholder) datasetPlaceholder.style.display = "none";
        datasetImagesContainer.style.display = "grid";
        if (datasetShowcase) datasetShowcase.style.padding = "20px";
      }
    };
    
    img.onerror = () => {
      // do nothing, let it fall back
    };
  });
}

// 3. Vishwakarma Awards Gallery
const awardFiles = [
  "assets/images/shruthi-bandhu/vishwakarma/cash_prize_01.jpg",
  "assets/images/shruthi-bandhu/vishwakarma/cash_prize_02.jpg"
];

const awardImageShowcase = document.getElementById("award-image-showcase");
const awardImagesContainer = document.getElementById("award-images-container");
const awardPlaceholderInner = document.querySelector(".award-placeholder-inner");

if (awardImagesContainer && awardFiles.length > 0) {
  let loadedCount = 0;

  awardFiles.forEach((src, idx) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Prize-receiving moment photo ${idx + 1}`;
    img.className = "award-img";
    
    img.onload = () => {
      loadedCount++;
      
      const wrapper = document.createElement("div");
      wrapper.className = "award-image-wrapper";
      
      const card = document.createElement("div");
      card.className = "award-img-card";
      
      card.appendChild(img);
      wrapper.appendChild(card);
      
      const caption = document.createElement("span");
      caption.className = "award-caption";
      caption.innerText = "Prize-Receiving Moment";
      wrapper.appendChild(caption);
      
      awardImagesContainer.appendChild(wrapper);
      
      if (loadedCount === 1) {
        if (awardPlaceholderInner) awardPlaceholderInner.style.display = "none";
        awardImagesContainer.style.display = "grid";
        if (awardImageShowcase) awardImageShowcase.style.padding = "20px";
      }
    };
    
    img.onerror = () => {
      // do nothing
    };
  });
}