const buttonShows = document.querySelectorAll('.control button')
const toastsParent = document.querySelector('#toasts');
buttonShows.forEach((btn) => {
	btn.addEventListener('click', (e) => {
        //get the class name of the button is clicked
		createToast(e.target.getAttribute('class'))
	})
})

const toasts = {
	success: {
		icon: '<i class="fas fa-check-circle"></i>',
		msg: 'This is a success message !',
	},
	error: {
		icon: '<i class="fas fa-exclamation-triangle"></i>',
		msg: 'This is a error message !',
	},
	warning: {
		icon: '<i class="fas fa-exclamation-circle"></i>',
		msg: 'This is a warning message !',
	},
}

function createToast(status) {
	let toast = document.createElement('div')
	toast.className = `toast ${status}`

	toast.innerHTML = `
    ${toasts[status].icon}
    <span class="msg">${toasts[status].msg}</span>
    <span class="countdown"></span>
    `
	toastsParent.appendChild(toast)

	setTimeout(() => {
		toast.style.animation = 'hide_slide 1s ease forwards'
	}, 4000)
	setTimeout(() => {
		toastsParent.removeChild(toast);
	}, 5000)
	// settimeout lồng nhau kiểu này thì settimeout bên trong sẽ được chạy sau khi settimeout bên ngoài chạy xong
	// còn settimeout tuần tự thì sẽ chạy song song nhau 
}
