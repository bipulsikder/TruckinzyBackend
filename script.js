function submitForm() {
    const form = document.getElementById('fleetForm');
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value || ''; // Use an empty string if the value is not provided
    });

    fetch('https://script.google.com/macros/s/AKfycbyQkXchrC4HD1zuJUDdTUHIDaMDBGWQKLqwyKJi5iOwmRF60ELJca0XAHQIytncAw/exec', {
        method: 'POST',
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => {
        if (response.result === 'success') {
            alert('Form submitted successfully');
            form.reset();
        } else {
            alert('There was an error submitting the form');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting the form');
    });
}
