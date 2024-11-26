const fetchData = async (url) => {
    try {
        const token = document.cookie
            .split('; ')
            .find(row => row.startsWith('token='))
            ?.split('=')[1];

        if (!token) {
            alert('Token not found. Please sign in again.');
            window.location.href = '/';
            return;
        }

        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        alert('Error fetching data. Please try again.');
    }
};

const signup = async () => {
    const name = document.getElementById('nameSignup').value;
    const email = document.getElementById('emailSignup').value;
    const password = document.getElementById('passwordSignup').value;
    const role = document.querySelector('input[name="role"]:checked').value;

    try {
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password, role }),
        });

        if (response.ok) {
            alert('Signup successful! Please sign in.');
            window.location.href = '/';
        } else {
            const data = await response.json();
            alert(`Signup failed: ${data.message}`);
        }
    } catch (error) {
        console.error(error);
        alert('Error during signup. Please try again.');
    }
};

const signin = async () => {
    const email = document.getElementById('emailSignin').value;
    const password = document.getElementById('passwordSignin').value;

    try {
        const response = await fetch('/api/auth/signin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok && data.token) {
            document.cookie = `token=${data.token}; path=/;`;
            if (data.role === 'student') {
                window.location.href = '/student.html';
            } else if (data.role === 'consultant') {
                window.location.href = '/consultant.html';
            }
        } else {
            alert('Invalid credentials');
        }
    } catch (error) {
        console.error(error);
        alert('Error during signin. Please try again.');
    }
};

const loadStudentDashboard = async () => {
    try {
        const data = await fetchData('/api/student/dashboard');
        console.log(data);
        document.getElementById('dashboardContent').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error(error);
    }
};

const loadConsultantDashboard = async () => {
    try {
        const data = await fetchData('/api/consultant/dashboard');
        console.log(data);
        document.getElementById('dashboardContent').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error(error);
    }
};

const signout = () => {
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    alert('You have been signed out.');
    window.location.href = '/';
};

document.getElementById('signinBtn')?.addEventListener('click', signin);
document.getElementById('signupBtn')?.addEventListener('click', signup);
document.getElementById('signoutBtn')?.addEventListener('click', signout);
document.getElementById('loadStudentDashboardBtn')?.addEventListener('click', loadStudentDashboard);
document.getElementById('loadConsultantDashboardBtn')?.addEventListener('click', loadConsultantDashboard);