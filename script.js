(function () {
  const forms = document.querySelectorAll('.step-form');

  forms.forEach((form) => {
    const steps = [...form.querySelectorAll('.form-step')];
    const dots = [...form.querySelectorAll('.progress-dot')];
    const status = form.querySelector('.form-status');
    let currentStep = 0;

    const setStep = (index) => {
      currentStep = index;
      steps.forEach((step, i) => {
        const active = i === index;
        step.hidden = !active;
        step.classList.toggle('is-active', active);
      });
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i <= index));
    };

    const validateCurrentStep = () => {
      const activeStep = steps[currentStep];
      const fields = [...activeStep.querySelectorAll('input, textarea')];
      for (const field of fields) {
        if (!field.checkValidity()) {
          field.reportValidity();
          return false;
        }
      }
      return true;
    };

    form.querySelectorAll('.next-step').forEach((button) => {
      button.addEventListener('click', () => {
        status.textContent = '';
        if (!validateCurrentStep()) return;
        setStep(Math.min(currentStep + 1, steps.length - 1));
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });

    form.querySelectorAll('.prev-step').forEach((button) => {
      button.addEventListener('click', () => {
        status.textContent = '';
        setStep(Math.max(currentStep - 1, 0));
        form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      status.textContent = '';

      if (!validateCurrentStep()) return;

      const action = form.getAttribute('action') || '';
      if (action.includes('REPLACE_FAMILY_ID') || action.includes('REPLACE_NETWORK_ID')) {
        status.textContent = 'Replace the Formspree action in index.html before you go live.';
        return;
      }

      const submitButton = form.querySelector('button[type="submit"]');
      const originalLabel = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';

      try {
        const response = await fetch(action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });

        if (!response.ok) throw new Error('Request failed');

        form.reset();
        setStep(0);
        status.textContent = form.id === 'family-form'
          ? 'Thanks. We received your request and will follow up soon.'
          : 'Thanks. We received your info and will follow up soon.';
      } catch (error) {
        status.textContent = 'Something went wrong. Please try again or connect a valid form endpoint.';
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalLabel;
      }
    });

    setStep(0);
  });
})();
