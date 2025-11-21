document.addEventListener('DOMContentLoaded', function() {
    
    // Zaroori HTML elements ko dhundo
    const welcomeHeading = document.getElementById('welcome-heading');
    const registerBtn = document.getElementById('google-register-btn');
    const registerSection = document.getElementById('register-section');
    const profileSection = document.getElementById('profile-form-section');
    const categorySection = document.getElementById('category-selection');
    const profileForm = document.getElementById('profile-form'); // Form element bhi
    
    // Default setting: Profile aur Category sections hidden
    profileSection.style.display = 'none';
    categorySection.style.display = 'none';

    // **********************************************
    // 1. PAGE LOAD ANIMATION LOGIC
    // **********************************************
    
    // Heading par animation class add karo
    welcomeHeading.classList.add('animate-welcome');
    
    // Animation khatam hone ke baad button ko fade-in karo
    setTimeout(() => {
        registerBtn.style.opacity = '1';
    }, 1500); 


    // **********************************************
    // 2. REGISTRATION/FLOW LOGIC
    // **********************************************

    // Google Register Button click event
    registerBtn.addEventListener('click', function() {
        
        // Agar aap chahte hain ki yeh alert na aaye toh is line ko remove kar dena
        alert("Google Registration Successful! (Internal App Flow) Ab apni details fill karein.");
        
        // Welcome section ko chhupa do
        registerSection.style.display = 'none'; 
        
        // Profile Form ko dikhao
        profileSection.style.display = 'block';
    });
    
    // Profile Form submit event
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Page reload hone se roko
        
        alert("Profile Saved! Ab categories select karein.");

        // Profile Form ko chhupa do
        profileSection.style.display = 'none';

        // Category Selection ko dikhao
        categorySection.style.display = 'block';
    });
    
    // **********************************************
    // 3. THEME/DARK MODE LOGIC (Aage use hoga)
    // **********************************************
    // Abhi humne theme button add nahi kiya, par future ke liye yeh logic ready hai
});
