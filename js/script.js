document.addEventListener('DOMContentLoaded', function() {

    // Simple smooth-scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calculate offset for sticky header if needed
            const headerOffset = document.querySelector('.site-header')?.offsetHeight || 0;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20; // Extra 20px buffer

            window.scrollTo({
             top: offsetPosition,
             behavior: "smooth"
            });

           // Optional: Close mobile menu after clicking a link
           const nav = document.querySelector('.site-header nav');
           if (nav && nav.classList.contains('active')) {
               nav.classList.remove('active');
               // Toggle icon back
                const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
                if(mobileNavToggle) {
                    const icon = mobileNavToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
           }
        }
      });
    });

    // Placeholder for form submission
    const signupForm = document.querySelector('.signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', e => {
          e.preventDefault();
          // You would typically send the data to a server here
          alert('Thanks for signing up! We’ll be in touch soon.');
          // Optionally clear the form
          // e.target.reset();
        });
    }

    // Basic Mobile Menu Toggle Functionality
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const nav = document.querySelector('.site-header nav');

    if (mobileNavToggle && nav) {
        mobileNavToggle.addEventListener('click', () => {
            nav.classList.toggle('active'); // Toggle the 'active' class on the nav
            // Optional: Change icon based on state
            const icon = mobileNavToggle.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // Change to 'X' icon
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars'); // Change back to 'bars' icon
            }
        });
    }

    // --- NEW: Chart Initialization ---

    // Chart 1: Verification Challenges Chart
    const vcCtx = document.getElementById('verificationChart');
    if (vcCtx) {
        new Chart(vcCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['2024', '2025', '2026', '2027', '2028'],
                datasets: [{
                    label: 'Detection Success Rate (%)',
                    data: [65, 72, 78, 83, 88],
                    borderColor: '#007bff', // Blue
                    backgroundColor: 'rgba(0, 123, 255, 0.1)',
                    fill: true,
                    tension: 0.1
                }, {
                    label: 'False Positive Rate (%)',
                    data: [35, 28, 22, 17, 12],
                    borderColor: '#dc3545', // Red
                    backgroundColor: 'rgba(220, 53, 69, 0.1)',
                    fill: true,
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: false }, // Title is in HTML
                    legend: { position: 'bottom', labels: { boxWidth: 12, font: {size: 10}}}
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: { display: true, text: '% Rate', font: {size: 10}}
                    },
                    x: {
                         title: { display: true, text: 'Year', font: {size: 10}}
                    }
                }
            }
        });
    }

    // Chart 2: Future Outlook Chart
    const foCtx = document.getElementById('futureProjectionsChart');
    if (foCtx) {
         new Chart(foCtx.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
                datasets: [{
                    label: 'Market Size ($B)',
                    data: [45, 65, 95, 125, 150, 175.3],
                    borderColor: '#007bff', // Blue
                    backgroundColor: 'rgba(0, 123, 255, 0.1)',
                    fill: true,
                    tension: 0.1,
                    yAxisID: 'yMarket' // Assign to the first Y axis
                }, {
                    label: 'Detection Accuracy (%)',
                    data: [75, 80, 85, 89, 92, 95],
                    borderColor: '#28a745', // Green
                    backgroundColor: 'rgba(40, 167, 69, 0.1)',
                    fill: true,
                    tension: 0.1,
                    yAxisID: 'yAccuracy' // Assign to the second Y axis
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                 plugins: {
                    title: { display: false }, // Title is in HTML
                    legend: { position: 'bottom', labels: { boxWidth: 12, font: {size: 10}}}
                },
                scales: {
                    yMarket: { // First Y Axis (Market Size)
                        type: 'linear',
                        display: true,
                        position: 'left',
                        beginAtZero: true,
                        title: { display: true, text: 'Market Size ($B)', font: {size: 10}},
                         grid: { drawOnChartArea: false } // Only draw grid for one axis
                    },
                    yAccuracy: { // Second Y Axis (Accuracy)
                         type: 'linear',
                        display: true,
                        position: 'right',
                         beginAtZero: true,
                         max: 100, // Accuracy max is 100%
                        title: { display: true, text: 'Accuracy (%)', font: {size: 10}}
                    },
                    x: {
                        title: { display: true, text: 'Year', font: {size: 10}}
                    }
                }
            }
        });
    }

}); // End DOMContentLoaded
