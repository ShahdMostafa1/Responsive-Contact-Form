#Contact Form Project
#Overview

A responsive contact form with client-side validation that works across all device sizes. The form includes fields for full name, email address, subject, and message, with comprehensive validation for each field.

##Features:

Responsive Design: Adapts to mobile, tablet, and desktop screens
Form Validation:
All fields are required


Email validation with specific error messages:
Missing @ symbol
Missing text before @
Missing domain after @
Invalid email format
Minimum message length (10 characters)
User-Friendly Interface:
Clear error messages
Automatic focus on first invalid field
Instant feedback when leaving fields blank
Clean, Modern Design: Professional styling with proper spacing

##Technologies Used:
HTML5
CSS3
JavaScript (ES6)
Files Structure

text
contact-form/
├── index.html        # Main HTML file
├── style.css         # Stylesheet
├── script.js         # JavaScript for validation
└── README.md         # This documentation file
Installation

No installation required. Simply open index.html in any modern web browser.

##Usage:

Open index.html in your browser
Fill out the form fields:
Full Name
Email Address
Subject
Message (minimum 10 characters)
Submit the form
If errors exist, they will be displayed with specific instructions
On successful validation, a confirmation message appears and the form resets
Validation Rules

##Field	Validation Rules:
Full Name	Required field
Email	Required, must contain @, valid format (e.g., user@example.com)
Subject	Required field
Message	Required, minimum 10 characters
Customization

##To customize the form:

Styling: Edit style.css to change colors, spacing, or layout
Validation: Modify script.js to adjust validation rules or messages
Fields: Add or remove fields in index.html (remember to update validation)
Browser Support

The form works in all modern browsers including:

Chrome
Firefox
Safari
Edge
Mobile browsers
