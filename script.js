/* ================================== */
/* Basic Styles (Poore Page Ka Design) */
/* ================================== */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding-top: 50px;
    margin: 0;
    background-color: #f4f4f9; /* Light background */
    color: #333;
}

/* Common Section Styling */
section {
    max-width: 600px;
    margin: 30px auto;
    padding: 25px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #4CAF50; /* Green theme for singing */
    font-size: 3em;
}
h2 {
    color: #333;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;
}

/* ================================== */
/* Button Styling */
/* ================================== */
#google-register-btn {
    padding: 12px 25px;
    background-color: #DB4437; /* Google's Red Color */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: bold;
    opacity: 0; /* Shuru mein chhupa hua rahega (Animation ke liye) */
    transition: opacity 1s ease-out; 
    margin-top: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

#google-register-btn:hover {
    background-color: #c0392b;
}

/* ================================== */
/* Form Styles (Username/Description) */
/* ================================== */
form input[type="text"], 
form textarea,
form select {
    width: 100%;
    padding: 10px;
    margin: 8px 0 15px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

form button[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
}

/* ================================== */
/* Animation Code (Fade and Slide Up) */
/* ================================== */

/* Animation Define Karna */
@keyframes fadeInSlideUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Welcome Heading ka Initial State */
#welcome-heading {
    opacity: 0; 
    transform: translateY(20px); 
}

/* Yeh class heading ko animate karegi */
.animate-welcome {
    /* Animation chalana */
    animation: fadeInSlideUp 1.5s ease-out forwards; 
}

