// ===== SECTION 1: EVENT HANDLING ===== //

// Click Event
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button clicked! 🎉");
  });
  
  // Hover Effect
  const hoverBox = document.getElementById("hoverBox");
  hoverBox.addEventListener("mouseenter", () => {
    hoverBox.style.transform = "scale(1.05)";
    hoverBox.style.backgroundColor = "#e3f2fd";
  });
  hoverBox.addEventListener("mouseleave", () => {
    hoverBox.style.transform = "scale(1)";
    hoverBox.style.backgroundColor = "#f0f0f0";
  });
  
  // Secret Double-Click
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    document.body.style.background = "linear-gradient(45deg, #ff9a9e, #fad0c4)";
    alert("Secret mode activated! ✨");
  });
  
  // Keypress Detection
  document.addEventListener("keypress", (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  // ===== SECTION 2: INTERACTIVE ELEMENTS ===== //
  
  // Color-Changing Button
  document.getElementById("colorBtn").addEventListener("click", function() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF"];
    this.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  });
  
  // Image Slideshow
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  
  function showSlide(n) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[n].classList.add("active");
  }
  
  document.getElementById("nextBtn").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
  
  document.getElementById("prevBtn").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
  
  // Accordion Tabs
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const content = tab.nextElementSibling;
      content.classList.toggle("active");
    });
  });
  
  // ===== SECTION 3: FORM VALIDATION ===== //
  
  const form = document.getElementById("myForm");
  
  // Real-time Name Validation
  document.getElementById("name").addEventListener("input", (e) => {
    const feedback = document.getElementById("nameFeedback");
    feedback.textContent = e.target.value.trim() ? "" : "Name is required!";
  });
  
  // Email Validation
  document.getElementById("email").addEventListener("blur", (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const feedback = document.getElementById("emailFeedback");
    feedback.textContent = emailRegex.test(e.target.value) ? "" : "Invalid email!";
  });
  
  // Password Strength
  document.getElementById("password").addEventListener("input", (e) => {
    const feedback = document.getElementById("passwordFeedback");
    feedback.textContent = 
      e.target.value.length >= 8 ? "✅ Strong password!" : "❌ Min 8 characters!";
  });
  
  // Form Submission
  form.addEventListener("submit", (e) => {
    if (!document.getElementById("name").value.trim()) {
      e.preventDefault();
      alert("Please fill in all required fields!");
    }
  });