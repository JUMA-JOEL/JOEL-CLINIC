// Add a new team member
function addTeamMember() {
    const newMember = document.getElementById('new-member').value;
    if (newMember) {
        const li = document.createElement('li');
        li.textContent = newMember;
        document.getElementById('team-list').appendChild(li);
        document.getElementById('new-member').value = '';
    }
}

// Add a new service
function addService() {
    const newService = document.getElementById('new-service').value;
    if (newService) {
        const li = document.createElement('li');
        li.textContent = newService;
        document.getElementById('service-list').appendChild(li);
        document.getElementById('new-service').value = '';
    }
}

// Add a new testimonial
function addTestimonial() {
    const newTestimonial = document.getElementById('new-testimonial').value;
    if (newTestimonial) {
        const li = document.createElement('li');
        li.textContent = newTestimonial;
        document.getElementById('testimonial-list').appendChild(li);
        document.getElementById('new-testimonial').value = '';
    }
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});

// Handle appointment form submission
document.getElementById('appointment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Appointment booked successfully!');
});
