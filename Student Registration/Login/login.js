document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting traditionally

    // Hardcoded student data
    const students = {
        'student1': {
            password: 'password1',
            rollNo: '101',
            examResults: 'A',
            attendance: '90%'
        },
        'student2': {
            password: 'password2',
            rollNo: '102',
            examResults: 'B',
            attendance: '85%'
        }
    };

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the student exists and if the password matches
    if (students[username] && students[username].password === password) {
        // Successful login: Redirect to the student data page
        window.location.href = `studentData.html?username=${username}`;
    } else {
        // Display an error message if login fails
        document.getElementById('loginError').innerText = 'Invalid login credentials';
    }
});
