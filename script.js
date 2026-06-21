window.addEventListener('DOMContentLoaded', () => {
    const hasVisited = localStorage.getItem('visitedBefore');

    if (!hasVisited) {
        alert("Welcome to CK Technical Solutions! Systems are fully operational.");
        
        localStorage.setItem('visitedBefore', 'true');
    }
    });

    const modalOverlay = document.getElementById('serviceModal');
    const closeBtn = document.querySelector('.modal-close-btn');
    const closeAction = document.querySelector('.close-modal-action');
    const exploreButtons = document.querySelectorAll('.btn-explore');
    const contentSections = document.querySelectorAll('.modal-service-details');

    exploreButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            contentSections.forEach(section => section.classList.remove('active-content'));
            
            if(index === 0) document.getElementById('content-webdev').classList.add('active-content');
            if(index === 1) document.getElementById('content-cctv').classList.add('active-content');
            if(index === 2) document.getElementById('content-it').classList.add('active-content');
            
            modalOverlay.classList.add('active');
        });
    });

    function closeModal() {
        modalOverlay.classList.remove('active');
    }

    closeBtn.addEventListener('click', closeModal);
    closeAction.addEventListener('click', closeModal);
    
    modalOverlay.addEventListener('click', (e) => {
        if(e.target === modalOverlay) closeModal();
    });
const subServicesData = {
    webdev: [
        "Frontend Development (HTML/CSS/JS)",
        "WordPress CMS Customization",
        "E-Commerce Solutions",
        "UI/UX Responsive Design"
    ],
    cctv: [
        "IP Camera Installation",
        "Live Remote Monitoring",
        "Secure Storage Setup",
        "Network Infrastructure Protection"
    ],
    itsupport: [
        "System OS Deployment",
        "Hardware Diagnostics",
        "Technical Operations Hub Support",
        "Software Configurations"
    ]
};

function showSubOptions(selectedService) {
    const label = document.querySelector('label[for="subject"]');
    if (label) {
        label.style.display = 'none';
    }
    
    const container = document.getElementById('sub-options-container');
    const dynamicContent = document.getElementById('sub-options-dynamic-content');
    
    dynamicContent.innerHTML = '';
    
    if (subServicesData[selectedService]) {
        container.classList.remove('hidden');
        subServicesData[selectedService].forEach((option) => {
            const labelElement = document.createElement('label');
            labelElement.className = 'checkbox-label';
            labelElement.innerHTML = `
                <input type="checkbox" name="sub_services" value="${option}">
                <span>${option}</span>
            `;
            dynamicContent.appendChild(labelElement);
        });
    } else {
        container.classList.add('hidden');
    }
}


   
   document.addEventListener('DOMContentLoaded', () => {

    const cyberForm = document.querySelector('.cyber-form');
    
    if (cyberForm) {
        cyberForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            
           
            alert("Thanks! Your details are submitted successfully. Our engineering team will contact you soon.");
            
            
            cyberForm.reset();
            
           
            const subContainer = document.getElementById('sub-options-container');
            if (subContainer) {
                subContainer.classList.add('hidden');
            }
            
            const mainSubjectLabel = document.querySelector('label[for="subject"]');
            if (mainSubjectLabel) {
                mainSubjectLabel.style.display = 'block'; 
            }
        });
    }
});