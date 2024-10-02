document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality
    const modal = document.getElementById('signup-modal');
    const joinNowBtn = document.getElementById('join-now-btn');
    const closeModalBtn = document.querySelector('.close');
    const signupForm = document.getElementById('signup-form');
    
    // Open the modal when "Join Now" is clicked
    joinNowBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
    
    // Close the modal when the close button is clicked
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close the modal if the user clicks outside of the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Validate sign-up form for email
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop the form from submitting to a server for now
        
        const email = document.getElementById('email').value.trim();
        
        if (email === '' || !validateEmail(email)) {
            alert('Please enter a valid email.');
        } else {
            alert(`Thank you for signing up with ${email}!`);
            modal.style.display = 'none'; // Close the modal after sign-up
        }
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Validate Workout Plans Form
    const workoutForm = document.getElementById('workout-form');
    workoutForm.addEventListener('submit', function(event) {
        const workoutName = document.getElementById('workout-name');
        const exercise = document.getElementById('exercise');
        const sets = document.getElementById('sets');
        const reps = document.getElementById('reps');
        const duration = document.getElementById('duration');

        let errorMessage = '';
        let hasError = false;

        // Reset previous error styles
        [workoutName, exercise, sets, reps, duration].forEach(input => input.style.borderColor = '');

        if (!workoutName.value.trim() || !exercise.value.trim()) {
            errorMessage += 'Workout Name and Exercise are required!\n';
            workoutName.style.borderColor = '#ff4d4d';
            exercise.style.borderColor = '#ff4d4d';
            hasError = true;
        } else if (workoutName.value.trim().length > 20 || exercise.value.trim().length > 20) {
            errorMessage += 'Workout Name and Exercise should be less than 20 characters!\n';
            workoutName.style.borderColor = '#ff4d4d';
            exercise.style.borderColor = '#ff4d4d';
            hasError = true;
        }

        if (sets.value < 1 || sets.value > 10) {
            errorMessage += 'Sets must be between 1 and 10!\n';
            sets.style.borderColor = '#ff4d4d';
            hasError = true;
        }

        if (reps.value < 1 || reps.value > 30) {
            errorMessage += 'Reps must be between 1 and 30!\n';
            reps.style.borderColor = '#ff4d4d';
            hasError = true;
        }

        if (duration.value < 1 || duration.value > 300) {
            errorMessage += 'Duration must be between 1 and 300 minutes!\n';
            duration.style.borderColor = '#ff4d4d';
            hasError = true;
        }

        if (hasError) {
            alert(errorMessage);
            event.preventDefault(); // Stop form submission if there are errors
        }
    });

    // Validate Progress Tracker Form
    const progressForm = document.getElementById('progress-form');
    progressForm.addEventListener('submit', function(event) {
        const workoutNameProgress = document.getElementById('workout-name-progress');
        const status = document.getElementById('status');
        const notes = document.getElementById('notes');

        let errorMessage = '';
        let hasError = false;

        // Reset previous error styles
        [workoutNameProgress, status, notes].forEach(input => input.style.borderColor = '');

        if (!workoutNameProgress.value.trim()) {
            errorMessage += 'Workout Name is required!\n';
            workoutNameProgress.style.borderColor = '#ff4d4d';
            hasError = true;
        } else if (workoutNameProgress.value.trim().length > 20) {
            errorMessage += 'Workout Name should be less than 20 characters!\n';
            workoutNameProgress.style.borderColor = '#ff4d4d';
            hasError = true;
        }

        if (!status.value) {
            errorMessage += 'Completion Status is required!\n';
            status.style.borderColor = '#ff4d4d';
            hasError = true;
        }

        if (notes.value.trim().length > 200) {
            errorMessage += 'Notes should be less than 200 characters!\n';
            notes.style.borderColor = '#ff4d4d';
            hasError = true;
        }

        if (hasError) {
            alert(errorMessage);
            event.preventDefault(); // Stop form submission if there are errors
        }
    });
});
