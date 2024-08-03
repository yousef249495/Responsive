document.addEventListener('DOMContentLoaded', () => {
    const typesOfWork = document.querySelectorAll('.our-work ul li');
    const ourWork = document.querySelectorAll('.our-work .row [data-type]');

    typesOfWork.forEach(selectedType => {
        selectedType.addEventListener('click', () => {
            const type = selectedType.dataset.typeofwork;

            typesOfWork.forEach(li => li.classList.remove('active', 'rounded-pill'));
            selectedType.classList.add('active', 'rounded-pill');

            ourWork.forEach(work => {
                work.parentElement.style.display = (type === 'all' || work.dataset.type === type) ? 'block' : 'none';
            });
        });
    });
});
