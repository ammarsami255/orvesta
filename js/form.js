// Form Module

export function initForm() {
    const form = document.getElementById('consultation-form');
    if (!form) return;
    
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    const statusDiv = document.getElementById('form-status');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic frontend validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            statusDiv.textContent = 'Please fill out all required fields.';
            statusDiv.style.color = '#ff6b6b';
            return;
        }
        
        // Loading state
        btnText.style.display = 'none';
        btnLoader.style.display = 'inline-block';
        submitBtn.style.opacity = '0.7';
        submitBtn.style.pointerEvents = 'none';
        statusDiv.textContent = '';
        
        // Fake API call
        setTimeout(() => {
            // Success state
            btnText.style.display = 'inline-block';
            btnLoader.style.display = 'none';
            submitBtn.style.opacity = '1';
            submitBtn.style.pointerEvents = 'auto';
            
            statusDiv.textContent = 'Thank you. Your request has been received. Our advisors will contact you shortly.';
            statusDiv.className = 'form-status success';
            
            // Reset form
            form.reset();
            
            // Clear status after 5 seconds
            setTimeout(() => {
                statusDiv.textContent = '';
                statusDiv.classList.remove('success');
            }, 5000);
            
        }, 1500);
    });
}
