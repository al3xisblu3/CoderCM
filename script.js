// Mobile menu toggle (homepage-simple)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a navigation link
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Update copyright year
const yearEl = document.getElementById('current-year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Chart.js implementation for plan page
if (document.getElementById('courseChart')) {
    const ctx = document.getElementById('courseChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Strings & Data Types', 'Variables', 'Loops & Conditionals', 'Functions & Objects'],
            datasets: [{
                label: 'Module Introduced',
                data: [1, 2, 3, 4],
                backgroundColor: [
                    '#7FFFD4', // seafoam green
                    '#6FFFD4', // slightly darker seafoam
                    '#5FFFD4', // even darker
                    '#4FFFD4'  // darkest
                ],
                borderColor: [
                    '#7FFFD4',
                    '#6FFFD4',
                    '#5FFFD4',
                    '#4FFFD4'
                ],
                borderWidth: 1,
                borderRadius: 6,
                borderSkipped: false,
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'CoderCM Course Module Breakdown',
                    font: {
                        family: 'Inter',
                        size: 18,
                        weight: '600'
                    },
                    padding: {
                        bottom: 20
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: {
                            family: 'Inter',
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    ticks: {
                        font: {
                            family: 'Inter',
                            size: 12
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });
}
