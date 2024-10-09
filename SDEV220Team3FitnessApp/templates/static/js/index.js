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
    const workoutPlanList = document.getElementById('workout-plan-list');

    // Clear existing workout plans when the page loads
    workoutPlanList.innerHTML = '';

    workoutForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

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
            return; // Stop form submission if there are errors
        }

        // Create a new list item for the workout plan
        const listItem = document.createElement('li');
        listItem.textContent = `${workoutName.value}: ${exercise.value} - Sets: ${sets.value}, Reps: ${reps.value}, Duration: ${duration.value} minutes`;

        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        // Add click event to the delete button
        deleteBtn.addEventListener('click', () => {
            listItem.remove(); // Remove the item from the DOM
        });

        listItem.appendChild(deleteBtn); // Append delete button to the list item
        workoutPlanList.appendChild(listItem); // Append list item to the workout plans list

        // Clear the form
        workoutForm.reset();
        alert('Workout plan created successfully!');
    });

    // Validate Progress Tracker Form
    const progressForm = document.getElementById('progress-form');
    const progressList = document.getElementById('progress-list'); // Reference to the progress list element

    progressForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

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

        // Check if the workout name matches any in the workout plans
        const workoutNames = Array.from(workoutPlanList.children).map(item => item.textContent.split(':')[0].trim());
        if (!workoutNames.includes(workoutNameProgress.value.trim())) {
            errorMessage += 'Workout Name must match an existing workout plan!\n';
            workoutNameProgress.style.borderColor = '#ff4d4d';
            hasError = true;
        }

        if (hasError) {
            alert(errorMessage);
            return; // Stop form submission if there are errors
        }

        // Create a new list item for the progress submission
        const progressItem = document.createElement('li');
        progressItem.textContent = `${workoutNameProgress.value} - Status: ${status.value}, Notes: ${notes.value}`;

        // Create a delete button for the progress submission
        const progressDeleteBtn = document.createElement('button');
        progressDeleteBtn.textContent = 'Delete';
        progressDeleteBtn.classList.add('delete-btn');

        // Add click event to the progress delete button
        progressDeleteBtn.addEventListener('click', () => {
            progressItem.remove(); // Remove the item from the DOM
        });

        progressItem.appendChild(progressDeleteBtn); // Append delete button to the progress item
        progressList.appendChild(progressItem); // Append progress item to the progress list

        // Remove the workout from the workout plans list
        const matchingWorkoutItem = Array.from(workoutPlanList.children).find(item => item.textContent.startsWith(workoutNameProgress.value.trim()));
        if (matchingWorkoutItem) {
            matchingWorkoutItem.remove(); // Remove the matching workout plan
        }

        // Clear the form
        progressForm.reset();
        alert('Progress submission added successfully!');
    });
});
