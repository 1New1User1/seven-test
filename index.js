const tabsBtns = document.querySelectorAll('.tab-buttons button')
const tabsItems = document.querySelectorAll('.first-tab-section');

function hideTabs (){
  tabsItems.forEach(i => i.classList.add('hide'))
  tabsBtns.forEach(i => i.classList.remove('active'))

}

function showTab(a){
  tabsItems[a].classList.remove('hide')
  tabsBtns[a].classList.add('active')
}

  hideTabs()
	showTab(0)

tabsBtns.forEach((btn, i) => btn.addEventListener('click', () =>{
  hideTabs()
  showTab(i)

}))

const firstRef = document.querySelectorAll('.main-nav li > a')
console.log(firstRef)
firstRef.forEach(a => {

  a.addEventListener('click', function (event) {
		event.preventDefault()

		const id = a.getAttribute('href')
		const elem = document.querySelector(id)

		window.scroll({
			top: elem.offsetTop,
			behavior: 'smooth',
		})
	})
})

