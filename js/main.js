const Main = {
	init: function () {
		this.cacheSelectors()
		this.bindEvents()
	},

	cacheSelectors: function () {
		this.$checkButtons = document.querySelectorAll('.check')
		this.$inputTask = document.querySelector('#inputTask')
	},

	bindEvents: function () {
		const self = this 
		this.$checkButtons.forEach(function(button) {
			button.onclick = self.Events.checkButton_click
		})

		
		this.$inputTask.onkeypress = self.Events.$inputTask_keypress
	},



	Events:{
		checkButton_click: function(e){
			const li = e.target.parentElement
			const isDone = li.classList.contains('done')

			if(!isDone){
				li.classList.add('done')
				return
			}
			li.classList.remove('done')
		}



	}
}

Main.init()