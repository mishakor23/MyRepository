function Counter(node, nodeId) {
	this.val = 1;
	this.node = node;
	this.nodeId = nodeId;
	this.init(nodeId);
}

Counter.prototype.init = function(nodeId) {
	var arrows = this.node.querySelector('.arrows');
	arrows.innerHTML = '<div class="counter-value-' + nodeId +'"></div> <div class="counter-controls"> <a href="#" class="counter-control-inc"></a> <a href="#" class="counter-control-dec"></a> </div>';
	this.valueNodes = document.querySelectorAll('.counter-value-' + nodeId);
	this.amountNodes = document.querySelectorAll('.amount-' + nodeId);
	this.bigSumNode = document.querySelectorAll('.sum')[0];
	this.smallSumNode = document.querySelectorAll('.sum')[1];
	
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
		context.del(this);
	});
	this.updateView();
};

Counter.prototype.updateAmountNodes = function (val) {
	for(var i = 0; i < this.amountNodes.length; i++) {
		var node = this.amountNodes[i];
		node.innerHTML = "&#8364;"+ (99.95 * +val).toFixed(2);
	}
};

Counter.prototype.updateValueNodes = function (val) {
	var valueNodes = document.querySelectorAll('.counter-value-' + this.nodeId);
	for(var i = 0; i < valueNodes.length; i++) {
		var node = valueNodes[i];
		node.innerHTML = val;
	}
};

Counter.prototype.updateView = function() {
	this.updateValueNodes(this.val);
	this.updateAmountNodes(this.val);
  	this.bigSumNode.innerHTML = this.getBigTotal();
  	this.smallSumNode.innerHTML = this.getSmallTotal();
};

Counter.prototype.getBigTotal = function() {
	var total = 0;
	$('table.big .amount').each(function(i, amount) {
		var a = amount.innerHTML.replace(/\D/, "");
		total += parseFloat(a);
	});
	return "&#8364;" + (total).toFixed(2);
};

Counter.prototype.getSmallTotal = function() {
	var total = 0;
	$('table.small .amount').each(function(i, amount) {
		var a = amount.innerHTML.replace(/\D/, "");
		total += parseFloat(a);
	});
	return "&#8364;" + (total).toFixed(2);
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
Counter.prototype.del = function(target) {
	var context = this;
	var tr = $(target).closest('tr');
	var undo = tr.find('.undo-button');
	undo.css('display', 'block');

	undo.on('click', function() {
		clearTimeout(timeout);
		undo.css('display', 'none');
	});
	var timeout = setTimeout(function() {
		showNoti();
		var tr = $(target).closest('tr');
		tr.remove();
		context.updateView();
	}, 1000);
};

function showNoti(){
	$('#noti').show();
}