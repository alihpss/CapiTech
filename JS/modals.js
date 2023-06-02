const login = document.getElementById('login');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const aside = document.querySelector('aside');
const closeAside = document.getElementById('closeAside');
const menuItem = document.getElementById('menuItem');

login.addEventListener('click', () => {
    setModalVisible(modal);
})

menuItem.addEventListener('click', () => {
    setModalVisible(aside);
})

closeModal.addEventListener('click', () => {
    setModalInvisible(modal);
})

closeAside.addEventListener('click', () => {
    setModalInvisible(aside);
})


function setModalInvisible(modal) {
    modal.style.opacity = 0;

    setTimeout(() => {
        modal.style.display = 'none';
    }, 700);
}

function setModalVisible(modal) {
    modal.style.display = 'flex';
    
    setTimeout(() => {
        modal.style.opacity = 1;
    }, 200);
}

