function Counter(node, initialValue) {
	this.val = initialValue || 1;
	this.node = node;
	this.init();
}

Counter.prototype.init = function() {
	var arrows = this.node.querySelector('.arrows');
	arrows.innerHTML = '<div class="counter-value"></div> <div class="counter-controls"> <a href="#" class="counter-control-inc"></a> <a href="#" class="counter-control-dec"></a> </div>';
	this.valueNode = this.node.querySelector('.counter-value');
	this.amountNode = this.node.querySelector('.amount');
	this.deleteNode = this.node.querySelector('.delete');
	console.log(this.sumNode);

	var context = this;
	this.node.querySelector('.counter-control-inc').addEventListener('click', function (event) {
		event.preventDefault();
		context.inc();
	});
	this.node.querySelector('.counter-control-dec').addEventListener('click', function (event) {
		event.preventDefault();
		context.dec();
	});
	this.node.querySelector('.delete').addEventListener('click', function (event) {
		event.preventDefault();
		context.del();
	});
	this.updateView();
};

Counter.prototype.updateView = function() {
	this.valueNode.innerHTML = this.val;
	this.amountNode.innerHTML = "&#8364;"+ (99.95 * +this.val).toFixed(2);

};

Counter.prototype.inc = function() {
	this.val += 1;
	this.updateView();
};

Counter.prototype.dec = function() {
	if(this.val>0){
		this.val -= 1;
	} else {
		this.val = this.val;
	}
	this.updateView();
};

Counter.prototype.del = function(){
	var del = document.querySelector('.delete');
	var tr = document.getElementById('view');
	del.addEventListener('click', function(){
  		tr.classList.toggle('deleted');
 });
};
