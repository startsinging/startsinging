document.addEventListener('DOMContentLoaded', function() {
    
    // Zaroori HTML elements ko dhundo
    const splashScreen = document.getElementById('splash-screen'); // Splash Screen
    const mainContent = document.getElementById('main-content'); // Poora main content
    const registerBtn = document.getElementById('google-register-btn');
    const registerSection = document.getElementById('register-section');
    const profileSection = document.getElementById('profile-form-section');
    const categorySection = document.getElementById('category-selection');
    const profileForm = document.getElementById('profile-form'); 
    
    // **********************************************
    // 1. SPLASH SCREEN LOGIC (YouTube Style)
    // **********************************************
    
    // Page load hone ke 2.5 seconds (2500ms) baad splash screen gayab hoga
    setTimeout(() => {
        splashScreen.classList.add('fade-out'); // CSS se fade-out shuru
        
        // Splash screen fade-out hone ke baad main content dikhao
        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.style.display = 'block';
            mainContent.classList.add('fade-in'); // Main content ko fade-in karo
        }, 500); // 0.5s ka delay (CSS transition ke liye)

    }, 2500); // 2.5 seconds splash screen dikhega


    // **********************************************
    // 2. REGISTRATION/FLOW LOGIC
    // **********************************************

    // Google Register Button click event
    registerBtn.addEventListener('click', function() {
        
        // Ye line asli Google sign-up experience ko simulate karti hai
        const username = prompt("Sign in with Google successful! Please set your desired Username:");
        
        if (username) {
            // Agar user ne username diya
            alert(`Welcome, ${username}! Now complete your profile.`);
            
            // Username field ko auto-fill karo
            document.getElementById('username').value = username;

            // Welcome section ko chhupa do
            registerSection.style.display = 'none'; 
            
            // Profile Form ko dikhao
            profileSection.style.display = 'block';
        } else {
            alert("Registration cancelled or username not provided.");
        }
    });
    
    // Profile Form submit event
    profileForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        alert("Profile Saved! Now select categories.");

        // Profile Form ko chhupa do
        profileSection.style.display = 'none';

        // Category Selection ko dikhao
        categorySection.style.display = 'block';
    });
});
